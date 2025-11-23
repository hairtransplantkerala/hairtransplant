'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import { createClient } from '@/lib/supabase/client'
import imageCompression from 'browser-image-compression'

import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Quote, 
  Undo, 
  Redo, 
  Link as LinkIcon,
  Image as ImageIcon,
  Code,
  Strikethrough,
} from 'lucide-react'

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
}

export default function RichTextEditor({ 
  content, 
  onChange, 
  placeholder = 'Start writing your post...' 
}: RichTextEditorProps) {
  const supabase = createClient()

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline hover:text-blue-700',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg my-4',
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: content || '<p></p>',
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none focus:outline-none min-h-[400px] p-4',
      },
      handlePaste: (view, event) => {
        const items = Array.from(event.clipboardData?.items || [])
        for (const item of items) {
          if (item.type.startsWith('image/')) {
            event.preventDefault()
            const file = item.getAsFile()
            if (!file) continue

            ;(async () => {
              try {
                const options = {
                  maxSizeMB: 0.2,
                  maxWidthOrHeight: 1920,
                  useWebWorker: true,
                  fileType: 'image/webp' as const,
                }
                const compressedFile = await imageCompression(file, options)
                const fileName = `${Math.random()
                  .toString(36)
                  .substring(2)}-${Date.now()}.webp`
                const filePath = `blog-images/${fileName}`

                const { error: uploadError } = await supabase.storage
                  .from('uploads')
                  .upload(filePath, compressedFile, {
                    contentType: 'image/webp',
                    cacheControl: '3600',
                  })

                if (uploadError) throw uploadError

                const { data } = supabase.storage
                  .from('uploads')
                  .getPublicUrl(filePath)

                if (editor) {
                  editor.chain().focus().setImage({ src: data.publicUrl }).run()
                }
              } catch (err) {
                console.error('Pasted image upload error:', err)
                alert('Error uploading pasted image')
              }
            })()

            return true
          }
        }
        return false
      },
      handleDrop: (view, event, slice, moved) => {
        if (!moved && event.dataTransfer?.files && event.dataTransfer.files[0]) {
          const file = event.dataTransfer.files[0]
          if (file.type.startsWith('image/')) {
            event.preventDefault()

            ;(async () => {
              try {
                const options = {
                  maxSizeMB: 0.2,
                  maxWidthOrHeight: 1920,
                  useWebWorker: true,
                  fileType: 'image/webp' as const,
                }
                const compressedFile = await imageCompression(file, options)
                const fileName = `${Math.random()
                  .toString(36)
                  .substring(2)}-${Date.now()}.webp`
                const filePath = `blog-images/${fileName}`

                const { error: uploadError } = await supabase.storage
                  .from('uploads')
                  .upload(filePath, compressedFile, {
                    contentType: 'image/webp',
                    cacheControl: '3600',
                  })

                if (uploadError) throw uploadError

                const { data } = supabase.storage
                  .from('uploads')
                  .getPublicUrl(filePath)

                const coordinates = view.posAtCoords({
                  left: event.clientX,
                  top: event.clientY,
                })

                if (coordinates && editor) {
                  editor
                    .chain()
                    .focus()
                    .insertContentAt(coordinates.pos, {
                      type: 'image',
                      attrs: { src: data.publicUrl },
                    })
                    .run()
                }
              } catch (err) {
                console.error('Dropped image upload error:', err)
                alert('Error uploading image')
              }
            })()

            return true
          }
        }
        return false
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      onChange(html)
    },
  })

  if (!editor) return null

  const addLink = () => {
    const url = window.prompt('Enter URL:')
    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }

  const removeLink = () => {
    editor.chain().focus().unsetLink().run()
  }

  const addImage = async () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = async (e: any) => {
      const file = e.target.files?.[0]
      if (!file) return

      try {
        editor
          .chain()
          .focus()
          .insertContent(
            '<p class="text-gray-500 italic">Uploading image...</p>',
          )
          .run()

        const options = {
          maxSizeMB: 0.2,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
          fileType: 'image/webp' as const,
        }

        console.log('Compressing image...')
        const compressedFile = await imageCompression(file, options)
        console.log(
          'Compressed size:',
          (compressedFile.size / 1024).toFixed(2),
          'KB',
        )

        const fileName = `${Math.random()
          .toString(36)
          .substring(2)}-${Date.now()}.webp`
        const filePath = `blog-images/${fileName}`

        const { error: uploadError } = await supabase.storage
          .from('uploads')
          .upload(filePath, compressedFile, {
            contentType: 'image/webp',
            cacheControl: '3600',
          })

        if (uploadError) throw uploadError

        const { data } = supabase.storage
          .from('uploads')
          .getPublicUrl(filePath)

        const { from, to } = editor.state.selection
        editor.chain().focus().deleteRange({ from: from - 35, to }).run()

        editor.chain().focus().setImage({ src: data.publicUrl }).run()

        console.log('Image uploaded successfully!')
      } catch (err) {
        console.error('Image upload error:', err)
        alert('Error uploading image')
      }
    }
    input.click()
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-1">
        {/* Text Formatting */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('bold') ? 'bg-gray-300' : ''
          }`}
          title="Bold (Ctrl+B)"
        >
          <Bold className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('italic') ? 'bg-gray-300' : ''
          }`}
          title="Italic (Ctrl+I)"
        >
          <Italic className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('strike') ? 'bg-gray-300' : ''
          }`}
          title="Strikethrough"
        >
          <Strikethrough className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('code') ? 'bg-gray-300' : ''
          }`}
          title="Inline Code"
        >
          <Code className="w-4 h-4" />
        </button>

        <div className="w-px bg-gray-300 mx-1" />

        {/* Headings */}
        {([1, 2, 3, 4, 5, 6] as const).map((level) => (
          <button
            key={level}
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level }).run()
            }
            className={`px-2 py-1 rounded hover:bg-gray-200 text-xs font-semibold transition-colors ${
              editor.isActive('heading', { level }) ? 'bg-gray-300' : ''
            }`}
            title={`Heading ${level}`}
          >
            H{level}
          </button>
        ))}

        <div className="w-px bg-gray-300 mx-1" />

        {/* Lists */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('bulletList') ? 'bg-gray-300' : ''
          }`}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('orderedList') ? 'bg-gray-300' : ''
          }`}
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('blockquote') ? 'bg-gray-300' : ''
          }`}
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </button>

        <div className="w-px bg-gray-300 mx-1" />

        {/* Link & Image */}
        <button
          type="button"
          onClick={addLink}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('link') ? 'bg-gray-300' : ''
          }`}
          title="Add Link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>

        {editor.isActive('link') && (
          <button
            type="button"
            onClick={removeLink}
            className="px-2 py-1 rounded bg-red-100 hover:bg-red-200 text-xs font-semibold text-red-700"
            title="Remove Link"
          >
            Unlink
          </button>
        )}

        <button
          type="button"
          onClick={addImage}
          className="p-2 rounded hover:bg-primary-100 bg-primary-50 transition-colors"
          title="Upload Image"
        >
          <ImageIcon className="w-4 h-4 text-primary-600" />
        </button>

        <div className="w-px bg-gray-300 mx-1" />

        {/* Undo/Redo */}
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-2 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Undo (Ctrl+Z)"
        >
          <Undo className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-2 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Redo (Ctrl+Y)"
        >
          <Redo className="w-4 h-4" />
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} className="min-h-[400px]" />

      {/* Footer Hint */}
      <div className="bg-gray-50 border-t border-gray-300 px-4 py-2 text-xs text-gray-500">
        💡 Tips: Paste images directly • Drag & drop images • All images
        auto-compress to WebP &lt;200KB
      </div>
    </div>
  )
}
