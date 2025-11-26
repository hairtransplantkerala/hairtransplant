'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import TiptapImage from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { 
  Bold, 
  Italic, 
  Underline as UnderlineIcon, 
  List, 
  ListOrdered,
  Heading2,
  Heading3,
  Quote,
  Code,
  Link as LinkIcon,
  Image as ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo
} from 'lucide-react'

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
}

// Custom resizable image extension
const ResizableImage = TiptapImage.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
        renderHTML: attributes => {
          if (!attributes.width) return {}
          return { 
            width: attributes.width,
            style: `width: ${attributes.width}; height: auto;`
          }
        },
      },
    }
  },
  
  addNodeView() {
    return ({ node, getPos, editor }) => {
      const container = document.createElement('div')
      container.style.position = 'relative'
      container.style.display = 'inline-block'
      container.style.maxWidth = '100%'
      container.contentEditable = 'false'
      container.className = 'image-resizer'

      const img = document.createElement('img')
      img.src = node.attrs.src
      img.alt = node.attrs.alt || ''
      img.className = 'rounded-lg'
      img.style.width = node.attrs.width || '100%'
      img.style.height = 'auto'
      img.style.display = 'block'
      img.style.cursor = 'pointer'

      // Resize handle
      const resizeHandle = document.createElement('div')
      resizeHandle.className = 'resize-handle'
      resizeHandle.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        width: 20px;
        height: 20px;
        background: #000;
        border: 2px solid #fff;
        cursor: nwse-resize;
        border-radius: 50%;
        display: none;
      `

      container.addEventListener('mouseenter', () => {
        resizeHandle.style.display = 'block'
      })

      container.addEventListener('mouseleave', () => {
        resizeHandle.style.display = 'none'
      })

      let startX: number, startWidth: number

      const onMouseDown = (e: MouseEvent) => {
        e.preventDefault()
        startX = e.clientX
        startWidth = img.offsetWidth

        const onMouseMove = (e: MouseEvent) => {
          const width = startWidth + (e.clientX - startX)
          const maxWidth = container.parentElement?.offsetWidth || 800
          const newWidth = Math.min(Math.max(100, width), maxWidth)
          img.style.width = `${newWidth}px`
        }

        const onMouseUp = () => {
          document.removeEventListener('mousemove', onMouseMove)
          document.removeEventListener('mouseup', onMouseUp)
          
          if (typeof getPos === 'function') {
            editor.commands.updateAttributes('image', {
              width: img.style.width
            })
          }
        }

        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
      }

      resizeHandle.addEventListener('mousedown', onMouseDown)

      container.appendChild(img)
      container.appendChild(resizeHandle)

      return {
        dom: container,
        update: (updatedNode) => {
          if (updatedNode.type.name !== 'image') return false
          img.src = updatedNode.attrs.src
          img.alt = updatedNode.attrs.alt || ''
          if (updatedNode.attrs.width) {
            img.style.width = updatedNode.attrs.width
          }
          return true
        },
        destroy: () => {
          resizeHandle.removeEventListener('mousedown', onMouseDown)
        }
      }
    }
  }
})

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc pl-6 space-y-2 my-4',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal pl-6 space-y-2 my-4',
          },
        },
        listItem: {
          HTMLAttributes: {
            class: 'pl-1',
          },
        },
        heading: {
          levels: [1, 2, 3, 4],
        },
        paragraph: {
          HTMLAttributes: {
            class: 'mb-4',
          },
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-gray-900 underline hover:text-black',
        },
      }),
      ResizableImage.configure({
        HTMLAttributes: {
          class: 'rounded-lg my-6',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[500px] p-6',
      },
    },
  })

  if (!editor) {
    return null
  }

  const addLink = () => {
    const url = window.prompt('Enter URL:')
    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }

  const addImage = () => {
    const url = window.prompt('Enter image URL:')
    if (url) {
      editor.chain().focus().setImage({ 
        src: url
      }).run()
    }
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-1 items-center">
        {/* Text Formatting */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('bold') ? 'bg-gray-900 text-white' : ''
          }`}
          title="Bold (Ctrl+B)"
          type="button"
        >
          <Bold size={18} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('italic') ? 'bg-gray-900 text-white' : ''
          }`}
          title="Italic (Ctrl+I)"
          type="button"
        >
          <Italic size={18} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('underline') ? 'bg-gray-900 text-white' : ''
          }`}
          title="Underline (Ctrl+U)"
          type="button"
        >
          <UnderlineIcon size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* Headings */}
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-2 rounded hover:bg-gray-200 transition-colors font-semibold text-sm ${
            editor.isActive('heading', { level: 2 }) ? 'bg-gray-900 text-white' : ''
          }`}
          title="Heading 2"
          type="button"
        >
          H2
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`px-3 py-2 rounded hover:bg-gray-200 transition-colors font-semibold text-sm ${
            editor.isActive('heading', { level: 3 }) ? 'bg-gray-900 text-white' : ''
          }`}
          title="Heading 3"
          type="button"
        >
          H3
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* Lists */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('bulletList') ? 'bg-gray-900 text-white' : ''
          }`}
          title="Bullet List"
          type="button"
        >
          <List size={18} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('orderedList') ? 'bg-gray-900 text-white' : ''
          }`}
          title="Numbered List"
          type="button"
        >
          <ListOrdered size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* Other Formatting */}
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('blockquote') ? 'bg-gray-900 text-white' : ''
          }`}
          title="Quote"
          type="button"
        >
          <Quote size={18} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('codeBlock') ? 'bg-gray-900 text-white' : ''
          }`}
          title="Code Block"
          type="button"
        >
          <Code size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* Alignment */}
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive({ textAlign: 'left' }) ? 'bg-gray-900 text-white' : ''
          }`}
          title="Align Left"
          type="button"
        >
          <AlignLeft size={18} />
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive({ textAlign: 'center' }) ? 'bg-gray-900 text-white' : ''
          }`}
          title="Align Center"
          type="button"
        >
          <AlignCenter size={18} />
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive({ textAlign: 'right' }) ? 'bg-gray-900 text-white' : ''
          }`}
          title="Align Right"
          type="button"
        >
          <AlignRight size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* Insert */}
        <button
          onClick={addLink}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('link') ? 'bg-gray-900 text-white' : ''
          }`}
          title="Insert Link"
          type="button"
        >
          <LinkIcon size={18} />
        </button>

        <button
          onClick={addImage}
          className="p-2 rounded hover:bg-gray-200 transition-colors"
          title="Insert Image (Drag corner to resize)"
          type="button"
        >
          <ImageIcon size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* Undo/Redo */}
        <button
          onClick={() => editor.chain().focus().undo().run()}
          className="p-2 rounded hover:bg-gray-200 transition-colors disabled:opacity-50"
          disabled={!editor.can().undo()}
          title="Undo"
          type="button"
        >
          <Undo size={18} />
        </button>

        <button
          onClick={() => editor.chain().focus().redo().run()}
          className="p-2 rounded hover:bg-gray-200 transition-colors disabled:opacity-50"
          disabled={!editor.can().redo()}
          title="Redo"
          type="button"
        >
          <Redo size={18} />
        </button>
      </div>

      {/* Editor with proper list styling */}
      <style jsx global>{`
        .ProseMirror ul {
          list-style-type: disc !important;
          padding-left: 1.5rem !important;
          margin: 1rem 0 !important;
        }
        
        .ProseMirror ol {
          list-style-type: decimal !important;
          padding-left: 1.5rem !important;
          margin: 1rem 0 !important;
        }
        
        .ProseMirror li {
          margin-left: 0.5rem !important;
          padding-left: 0.25rem !important;
          margin-top: 0.5rem !important;
          margin-bottom: 0.5rem !important;
        }

        .ProseMirror li p {
          margin: 0 !important;
        }

        .image-resizer {
          margin: 1.5rem 0;
        }

        .image-resizer:hover .resize-handle {
          display: block !important;
        }
      `}</style>

      <EditorContent editor={editor} />
    </div>
  )
}
