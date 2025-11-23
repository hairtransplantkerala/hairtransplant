export function generateMetaTitle(title: string): string {
  const suffix = ' | Eterno Hair Transplant Clinic';
  const maxLength = 60;
  
  if (title.length + suffix.length <= maxLength) {
    return title + suffix;
  }
  
  return title.substring(0, maxLength - suffix.length - 3) + '...' + suffix;
}

export function generateMetaDescription(excerpt: string, content: string): string {
  const maxLength = 160;
  
  // Use excerpt if available
  if (excerpt && excerpt.length > 20) {
    return excerpt.length <= maxLength 
      ? excerpt 
      : excerpt.substring(0, maxLength - 3) + '...';
  }
  
  // Otherwise extract from content
  const text = content.replace(/<[^>]*>/g, '').trim();
  return text.length <= maxLength 
    ? text 
    : text.substring(0, maxLength - 3) + '...';
}

export function generateKeywords(title: string, tags: string[], category: string): string[] {
  const keywords = new Set<string>();
  
  // Add from title
  title.toLowerCase().split(' ').forEach(word => {
    if (word.length > 3) keywords.add(word);
  });
  
  // Add tags
  tags.forEach(tag => keywords.add(tag.toLowerCase()));
  
  // Add category
  if (category) keywords.add(category.toLowerCase());
  
  // Add default keywords
  keywords.add('hair transplant');
  keywords.add('kochi');
  keywords.add('kerala');
  
  return Array.from(keywords).slice(0, 10);
}

export function generateSchemaMarkup(post: {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  category: string;
  published_at: string;
  updated_at?: string;
}): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image || "https://eternoclinic.com/og-image.jpg",
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://eternoclinic.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Eterno Hair Transplant Clinic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://eternoclinic.com/logo.png"
      }
    },
    "datePublished": post.published_at,
    "dateModified": post.updated_at || post.published_at,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://eternoclinic.com/blog/${post.slug}`
    },
    "articleSection": post.category,
    "inLanguage": "en-US"
  };
  
  return JSON.stringify(schema, null, 2);
}
