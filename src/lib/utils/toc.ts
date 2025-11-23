export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function generateTableOfContents(html: string): TocItem[] {
  if (typeof window === 'undefined') return []
  
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
  const toc: TocItem[] = [];
  
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.substring(1));
    const text = heading.textContent || '';
    const id = `heading-${index}-${text.toLowerCase().replace(/[^\w]+/g, '-')}`;
    
    // Add ID to heading if it doesn't have one
    heading.id = id;
    
    toc.push({ id, text, level });
  });
  
  return toc;
}

export function calculateReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200); // 200 words per minute
}

export function addIdsToHeadings(html: string): string {
  if (typeof window === 'undefined') {
    // Server-side: use a simple regex approach
    return html.replace(/<(h[1-6])([^>]*)>(.*?)<\/\1>/gi, (match, tag, attrs, content) => {
      const text = content.replace(/<[^>]*>/g, '').trim()
      const id = `heading-${text.toLowerCase().replace(/[^\w]+/g, '-')}`
      
      // Check if ID already exists in attrs
      if (attrs.includes('id=')) {
        return match
      }
      
      return `<${tag}${attrs} id="${id}">${content}</${tag}>`
    })
  }
  
  // Client-side: use DOMParser
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
  headings.forEach((heading, index) => {
    const text = heading.textContent || '';
    const id = `heading-${index}-${text.toLowerCase().replace(/[^\w]+/g, '-')}`;
    heading.id = id;
  });
  
  return doc.body.innerHTML;
}
