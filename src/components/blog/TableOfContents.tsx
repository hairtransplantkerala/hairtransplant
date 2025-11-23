'use client'

import { useEffect, useState } from 'react'
import { ChevronRight, List } from 'lucide-react'

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    // Generate ToC from content
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, 'text/html')
    const headings = doc.querySelectorAll('h2, h3, h4')
    
    const items: TocItem[] = []
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.substring(1))
      const text = heading.textContent || ''
      const id = `heading-${index}-${text.toLowerCase().replace(/[^\w]+/g, '-')}`
      items.push({ id, text, level })
    })
    
    setToc(items)
  }, [content])

  useEffect(() => {
    // Track active heading on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    const headings = document.querySelectorAll('h2, h3, h4')
    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [toc])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  if (toc.length === 0) return null

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mb-4"
      >
        <div className="flex items-center gap-2">
          <List className="w-5 h-5 text-primary-600" />
          <h3 className="text-lg font-bold text-gray-900">Table of Contents</h3>
        </div>
        <ChevronRight 
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} 
        />
      </button>

      {isOpen && (
        <nav className="space-y-2">
          {toc.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`block w-full text-left py-2 px-3 rounded-lg transition-colors text-sm ${
                activeId === item.id
                  ? 'bg-primary-50 text-primary-700 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              style={{ paddingLeft: `${(item.level - 2) * 16 + 12}px` }}
            >
              {item.text}
            </button>
          ))}
        </nav>
      )}
    </div>
  )
}
