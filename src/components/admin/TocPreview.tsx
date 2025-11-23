'use client'

import { useEffect, useState } from 'react'
import { List, Eye } from 'lucide-react'

interface TocItem {
  text: string
  level: number
}

interface TocPreviewProps {
  content: string
}

export default function TocPreview({ content }: TocPreviewProps) {
  const [toc, setToc] = useState<TocItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!content || content === '<p></p>') {
      setToc([])
      return
    }

    const parser = new DOMParser()
    const doc = parser.parseFromString(content, 'text/html')
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6')
    
    const items: TocItem[] = []
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.substring(1))
      const text = heading.textContent || ''
      if (text) {
        items.push({ text, level })
      }
    })
    
    setToc(items)
  }, [content])

  if (toc.length === 0) return null

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-3 flex items-center justify-between hover:bg-blue-100 transition-colors"
      >
        <div className="flex items-center gap-2">
          <List className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-blue-900">
            Table of Contents Preview ({toc.length} headings)
          </span>
        </div>
        <Eye className="w-5 h-5 text-blue-600" />
      </button>

      {isOpen && (
        <div className="px-6 py-4 border-t border-blue-200 space-y-2">
          {toc.map((item, index) => (
            <div
              key={index}
              className="text-sm text-gray-700"
              style={{ paddingLeft: `${(item.level - 1) * 16}px` }}
            >
              <span className="text-blue-600 font-mono mr-2">H{item.level}</span>
              {item.text}
            </div>
          ))}
          
          <div className="pt-4 mt-4 border-t border-blue-200">
            <p className="text-xs text-blue-700">
              💡 This ToC will be automatically generated on your published post
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
