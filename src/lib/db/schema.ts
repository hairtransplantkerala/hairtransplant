export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  image: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  published: boolean;
  tags: string[];
}

export interface Admin {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  role: 'admin' | 'editor';
  createdAt: string;
}
