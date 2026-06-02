import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

class GitHubContentError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = 'GitHubContentError';
  }
}

function githubConfig() {
  return {
    token: process.env.GITHUB_TOKEN || process.env.GITHUB_CONTENT_TOKEN,
    owner: process.env.GITHUB_OWNER,
    repo: process.env.GITHUB_REPO,
    branch: process.env.GITHUB_BRANCH || 'main',
    basePath: (process.env.GITHUB_CONTENT_PATH || 'data').replace(/^\/|\/$/g, ''),
  };
}

function isGithubConfigured() {
  const config = githubConfig();
  return Boolean(config.token && config.owner && config.repo);
}

function contentPath(fileName: string) {
  const config = githubConfig();
  return `${config.basePath}/${fileName}`;
}

async function githubRequest<T>(url: string, init: RequestInit = {}): Promise<T> {
  const config = githubConfig();
  const response = await fetch(url, {
    ...init,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${config.token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      ...(init.headers || {}),
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    const text = await response.text();
    throw new GitHubContentError(response.status, `GitHub API error ${response.status}: ${text}`);
  }

  return response.json() as Promise<T>;
}

async function readFromGithub<T>(fileName: string): Promise<T> {
  const config = githubConfig();
  const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${contentPath(fileName)}?ref=${config.branch}`;
  const data = await githubRequest<{ content: string; encoding: string }>(url);
  const raw = Buffer.from(data.content, data.encoding as BufferEncoding).toString('utf8');
  return JSON.parse(raw) as T;
}

async function writeToGithub<T>(fileName: string, value: T, message: string): Promise<void> {
  const config = githubConfig();
  const filePath = contentPath(fileName);
  const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${filePath}`;
  let sha: string | undefined;

  try {
    const existing = await githubRequest<{ sha: string }>(`${url}?ref=${config.branch}`);
    sha = existing.sha;
  } catch (error) {
    if (!(error instanceof GitHubContentError) || error.status !== 404) {
      throw error;
    }
  }

  await githubRequest(url, {
    method: 'PUT',
    body: JSON.stringify({
      message,
      branch: config.branch,
      sha,
      content: Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8').toString('base64'),
    }),
  });
}

async function readLocal<T>(fileName: string): Promise<T> {
  const filePath = path.join(DATA_DIR, fileName);
  const raw = await fs.readFile(filePath, 'utf8');
  return JSON.parse(raw) as T;
}

async function writeLocal<T>(fileName: string, value: T): Promise<void> {
  const filePath = path.join(DATA_DIR, fileName);
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

export async function readJson<T>(fileName: string): Promise<T> {
  if (isGithubConfigured()) {
    try {
      return await readFromGithub<T>(fileName);
    } catch (error) {
      console.warn(
        `Could not read ${fileName} from GitHub. Falling back to local data file.`,
        error
      );
    }
  }

  return readLocal<T>(fileName);
}

export async function writeJson<T>(fileName: string, value: T, message: string): Promise<void> {
  if (isGithubConfigured()) {
    await writeToGithub(fileName, value, message);
    return;
  }

  await writeLocal(fileName, value);
}

export function getStoreMode() {
  return isGithubConfigured() ? 'github' : 'local';
}
