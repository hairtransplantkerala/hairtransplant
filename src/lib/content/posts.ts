import { BlogPostRecord } from './types';
import { readJson, writeJson } from './github-store';

const POSTS_FILE = 'posts.json';

function now() {
  return new Date().toISOString();
}

function sortPosts(posts: BlogPostRecord[]) {
  return [...posts].sort((a, b) => {
    const aDate = a.published_at || a.created_at;
    const bDate = b.published_at || b.created_at;
    return new Date(bDate).getTime() - new Date(aDate).getTime();
  });
}

export async function listPosts(filters: { status?: string | null; category?: string | null } = {}) {
  let posts = await readJson<BlogPostRecord[]>(POSTS_FILE);

  if (filters.status === 'published') {
    posts = posts.filter((post) => post.published);
  } else if (filters.status === 'draft') {
    posts = posts.filter((post) => !post.published);
  }

  if (filters.category) {
    posts = posts.filter((post) => post.category === filters.category);
  }

  return sortPosts(posts);
}

export async function getPostById(id: string) {
  const posts = await readJson<BlogPostRecord[]>(POSTS_FILE);
  return posts.find((post) => post.id === id) || null;
}

export async function getPostBySlug(slug: string) {
  const posts = await readJson<BlogPostRecord[]>(POSTS_FILE);
  return posts.find((post) => post.slug === slug && post.published) || null;
}

export async function createPost(input: Partial<BlogPostRecord>) {
  const posts = await readJson<BlogPostRecord[]>(POSTS_FILE);
  const slugExists = posts.some((post) => post.slug === input.slug);

  if (slugExists) {
    throw new Error('Slug already exists. Please use a different slug.');
  }

  const timestamp = now();
  const post: BlogPostRecord = {
    id: crypto.randomUUID(),
    title: input.title || '',
    slug: input.slug || '',
    excerpt: input.excerpt || null,
    content: input.content || '',
    image: input.image || null,
    author: input.author || 'Admin',
    category: input.category || null,
    tags: Array.isArray(input.tags) ? input.tags : [],
    read_time: input.read_time || null,
    published: Boolean(input.published),
    published_at: input.published_at || null,
    created_at: timestamp,
    updated_at: timestamp,
    meta_title: input.meta_title || null,
    meta_description: input.meta_description || null,
    meta_keywords: input.meta_keywords || null,
    og_title: input.og_title || null,
    og_description: input.og_description || null,
    og_image: input.og_image || null,
    schema_markup: input.schema_markup || null,
    views: 0,
    faqs: input.faqs || null,
  };

  await writeJson(POSTS_FILE, [post, ...posts], `Create post: ${post.title}`);
  return post;
}

export async function updatePost(id: string, input: Partial<BlogPostRecord>) {
  const posts = await readJson<BlogPostRecord[]>(POSTS_FILE);
  const index = posts.findIndex((post) => post.id === id);

  if (index === -1) {
    return null;
  }

  const slugExists = posts.some((post) => post.slug === input.slug && post.id !== id);
  if (slugExists) {
    throw new Error('Slug already exists. Please use a different slug.');
  }

  const updated: BlogPostRecord = {
    ...posts[index],
    ...input,
    id,
    tags: Array.isArray(input.tags) ? input.tags : posts[index].tags,
    updated_at: now(),
  };

  posts[index] = updated;
  await writeJson(POSTS_FILE, sortPosts(posts), `Update post: ${updated.title}`);
  return updated;
}

export async function deletePost(id: string) {
  const posts = await readJson<BlogPostRecord[]>(POSTS_FILE);
  const post = posts.find((item) => item.id === id);

  if (!post) {
    return false;
  }

  await writeJson(
    POSTS_FILE,
    posts.filter((item) => item.id !== id),
    `Delete post: ${post.title}`
  );
  return true;
}

export async function incrementPostViews(id: string) {
  const post = await getPostById(id);
  if (!post) return;

  await updatePost(id, { views: (post.views || 0) + 1 });
}

export async function relatedPosts(post: BlogPostRecord, limit = 3) {
  const posts = await listPosts({ status: 'published', category: post.category });
  return posts.filter((item) => item.id !== post.id).slice(0, limit);
}
