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
  Quote,
  Code,
  Link as LinkIcon,
  Image as ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo,
  HelpCircle
} from 'lucide-react'
import { useState } from 'react'

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
  const [showFaqModal, setShowFaqModal] = useState(false)
  const [faqQuestion, setFaqQuestion] = useState('')
  const [faqAnswer, setFaqAnswer] = useState('')

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
          levels: [2, 3, 4, 5],
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

  const addFaq = () => {
    if (!faqQuestion || !faqAnswer) {
      alert('Please enter both question and answer')
      return
    }

    const faqHtml = `
      <div class="faq-item border border-gray-200 rounded-lg mb-4 p-4 bg-white shadow-sm">
        <details>
          <summary class="font-bold text-lg cursor-pointer hover:text-gray-700 flex justify-between items-center">
            ${faqQuestion}
            <span class="faq-icon text-2xl">+</span>
          </summary>
          <div class="mt-3 text-gray-600">
            ${faqAnswer}
          </div>
        </details>
      </div>
    `

    editor.chain().focus().insertContent(faqHtml).run()
    setFaqQuestion('')
    setFaqAnswer('')
    setShowFaqModal(false)
  }

  return (
    <>
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

          {/* Headings H2 to H5 */}
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

          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            className={`px-3 py-2 rounded hover:bg-gray-200 transition-colors font-semibold text-sm ${
              editor.isActive('heading', { level: 4 }) ? 'bg-gray-900 text-white' : ''
            }`}
            title="Heading 4"
            type="button"
          >
            H4
          </button>

          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
            className={`px-3 py-2 rounded hover:bg-gray-200 transition-colors font-semibold text-sm ${
              editor.isActive('heading', { level: 5 }) ? 'bg-gray-900 text-white' : ''
            }`}
            title="Heading 5"
            type="button"
          >
            H5
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

          <button
            onClick={() => setShowFaqModal(true)}
            className="p-2 rounded hover:bg-gray-200 transition-colors"
            title="Add FAQ Item"
            type="button"
          >
            <HelpCircle size={18} />
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

        {/* Editor with proper styling */}
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

          .ProseMirror h2 {
            font-size: 1.875rem;
            font-weight: 700;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }

          .ProseMirror h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }

          .ProseMirror h4 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-top: 1.25rem;
            margin-bottom: 0.5rem;
          }

          .ProseMirror h5 {
            font-size: 1.125rem;
            font-weight: 600;
            margin-top: 1rem;
            margin-bottom: 0.5rem;
          }

          .image-resizer {
            margin: 1.5rem 0;
          }

          .image-resizer:hover .resize-handle {
            display: block !important;
          }

          .faq-item details summary::-webkit-details-marker {
            display: none;
          }

          .faq-item details[open] .faq-icon {
            content: "−";
          }

          .faq-item details[open] summary .faq-icon::before {
            content: "−";
          }
        `}</style>

        <EditorContent editor={editor} />
      </div>

      {/* FAQ Modal */}
      {showFaqModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Add FAQ Item</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question
                </label>
                <input
                  type="text"
                  value={faqQuestion}
                  onChange={(e) => setFaqQuestion(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="What is hair transplant?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Answer
                </label>
                <textarea
                  value={faqAnswer}
                  onChange={(e) => setFaqAnswer(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                  placeholder="Hair transplant is a surgical procedure..."
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setShowFaqModal(false)
                  setFaqQuestion('')
                  setFaqAnswer('')
                }}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                type="button"
              >
                Cancel
              </button>
              <button
                onClick={addFaq}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                type="button"
              >
                Add FAQ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
