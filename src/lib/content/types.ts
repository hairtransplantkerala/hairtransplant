export interface BlogPostRecord {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  image: string | null;
  author: string;
  category: string | null;
  tags: string[];
  read_time: string | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  meta_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string | null;
  og_title?: string | null;
  og_description?: string | null;
  og_image?: string | null;
  schema_markup?: string | null;
  views?: number;
  faqs?: Array<{ question: string; answer: string }> | null;
}

export interface GalleryItemRecord {
  id: string;
  category: string;
  procedure: string;
  before: string;
  after: string;
  timeline: string;
  grafts: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}
