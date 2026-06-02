import { GalleryItemRecord } from './types';
import { readJson, writeJson } from './github-store';

const GALLERY_FILE = 'gallery.json';

function now() {
  return new Date().toISOString();
}

function sortGallery(items: GalleryItemRecord[]) {
  return [...items].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

export async function listGallery(category?: string | null) {
  const items = await readJson<GalleryItemRecord[]>(GALLERY_FILE);
  const filtered = category && category !== 'all'
    ? items.filter((item) => item.category === category)
    : items;

  return sortGallery(filtered);
}

export async function getGalleryItem(id: string) {
  const items = await readJson<GalleryItemRecord[]>(GALLERY_FILE);
  return items.find((item) => item.id === id) || null;
}

export async function createGalleryItem(input: Partial<GalleryItemRecord>) {
  const items = await readJson<GalleryItemRecord[]>(GALLERY_FILE);
  const timestamp = now();
  const item: GalleryItemRecord = {
    id: crypto.randomUUID(),
    category: input.category || 'fue',
    procedure: input.procedure || '',
    before: input.before || '',
    after: input.after || '',
    timeline: input.timeline || '',
    grafts: input.grafts || '',
    featured: input.featured ?? true,
    created_at: timestamp,
    updated_at: timestamp,
  };

  await writeJson(GALLERY_FILE, [item, ...items], `Create gallery item: ${item.procedure}`);
  return item;
}

export async function updateGalleryItem(id: string, input: Partial<GalleryItemRecord>) {
  const items = await readJson<GalleryItemRecord[]>(GALLERY_FILE);
  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    return null;
  }

  const updated: GalleryItemRecord = {
    ...items[index],
    ...input,
    id,
    updated_at: now(),
  };

  items[index] = updated;
  await writeJson(GALLERY_FILE, sortGallery(items), `Update gallery item: ${updated.procedure}`);
  return updated;
}

export async function deleteGalleryItem(id: string) {
  const items = await readJson<GalleryItemRecord[]>(GALLERY_FILE);
  const item = items.find((entry) => entry.id === id);

  if (!item) {
    return false;
  }

  await writeJson(
    GALLERY_FILE,
    items.filter((entry) => entry.id !== id),
    `Delete gallery item: ${item.procedure}`
  );
  return true;
}
