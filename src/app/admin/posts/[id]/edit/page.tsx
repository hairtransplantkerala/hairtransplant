'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import RichTextEditor from '@/components/admin/RichTextEditor'
import TocPreview from '@/components/admin/TocPreview'
import imageCompression from 'browser-image-compression'
import { ArrowLeft, Save, Eye, Upload, X, Sparkles, Copy, Check } from 'lucide-react'
import Link from 'next/link'
import { generateMetaTitle, generateMetaDescription, generateKeywords, generateSchemaMarkup } from '@/lib/utils/seo'
import { createClient } from '@/lib/supabase/client'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function calculateReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, '')
  const words = text.split(/\s+/).length
  return Math.ceil(words / 200)
}

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const supabase = createClient()
  
  // Unwrap params Promise
  const { id } = use(params)
  
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [imageUploading, setImageUploading] = useState(false)
  const [schemaCopied, setSchemaCopied] = useState(false)
  const [showSEO, setShowSEO] = useState(false)
  const [originalPublishedAt, setOriginalPublishedAt] = useState<string | null>(null)
  const [wasPublished, setWasPublished] = useState(false)
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image: '',
    author: 'Dr. Chacko Cyriac',
    category: '',
    tags: '',
    read_time: '',
    meta_title: '',
    meta_description: '',
    meta_keywords: '',
    og_title: '',
    og_description: '',
    og_image: '',
    schema_markup: '',
  })

  useEffect(() => {
    fetchPost()
  }, [id])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${id}`)
      const data = await response.json()

      if (data.success && data.post) {
        const post = data.post
        
        // Store original publication status and date
        setWasPublished(post.published || false)
        setOriginalPublishedAt(post.published_at || null)
        
        setFormData({
          title: post.title || '',
          slug: post.slug || '',
          excerpt: post.excerpt || '',
          content: post.content || '',
          image: post.image || '',
          author: post.author || 'Dr. Chacko Cyriac',
          category: post.category || '',
          tags: Array.isArray(post.tags) ? post.tags.join(', ') : '',
          read_time: post.read_time || '',
          meta_title: post.meta_title || '',
          meta_description: post.meta_description || '',
          meta_keywords: post.meta_keywords || '',
          og_title: post.og_title || '',
          og_description: post.og_description || '',
          og_image: post.og_image || '',
          schema_markup: post.schema_markup || '',
        })
      }
    } catch (error) {
      console.error('Error fetching post:', error)
      alert('Error loading post')
    } finally {
      setFetching(false)
    }
  }

  // Auto-generate SEO fields when title or content changes
  useEffect(() => {
    if (formData.title) {
      const tagsArray = formData.tags.split(',').map(t => t.trim()).filter(Boolean)
      const keywords = generateKeywords(formData.title, tagsArray, formData.category)
      
      setFormData(prev => ({
        ...prev,
        meta_keywords: keywords.join(', '),
      }))
    }
  }, [formData.title, formData.tags, formData.category])

  // Generate schema markup
  useEffect(() => {
    if (formData.title && formData.slug) {
      const schema = generateSchemaMarkup({
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt || formData.meta_description,
        content: formData.content,
        image: formData.image,
        author: formData.author,
        category: formData.category,
        published_at: originalPublishedAt || new Date().toISOString(),
      })
      setFormData(prev => ({ ...prev, schema_markup: schema }))
    }
  }, [formData.title, formData.slug, formData.excerpt, formData.content, formData.image, formData.author, formData.category, originalPublishedAt])

  const handleTitleChange = (title: string) => {
    setFormData({ ...formData, title })
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file')
      return
    }

    setImageUploading(true)

    try {
      const options = {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        fileType: 'image/webp' as const
      }

      console.log('Original file size:', (file.size / 1024).toFixed(2), 'KB')
      const compressedFile = await imageCompression(file, options)
      console.log('Compressed file size:', (compressedFile.size / 1024).toFixed(2), 'KB')

      const fileExt = 'webp'
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
      const filePath = `blog-images/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('uploads')
        .upload(filePath, compressedFile, {
          cacheControl: '3600',
          upsert: false,
          contentType: 'image/webp'
        })

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('uploads')
        .getPublicUrl(filePath)

      setFormData({ 
        ...formData, 
        image: publicUrl,
        og_image: publicUrl 
      })
      
      alert('Image uploaded successfully!')
    } catch (error: any) {
      console.error('Error uploading image:', error)
      alert(`Error uploading image: ${error.message || 'Unknown error'}`)
    } finally {
      setImageUploading(false)
    }
  }

  const copySchemaToClipboard = () => {
    navigator.clipboard.writeText(formData.schema_markup)
    setSchemaCopied(true)
    setTimeout(() => setSchemaCopied(false), 2000)
  }

  const handleSubmit = async (published: boolean) => {
    setLoading(true)

    try {
      if (!formData.title.trim()) {
        alert('Please enter a title')
        setLoading(false)
        return
      }

      if (!formData.content || formData.content === '<p></p>') {
        alert('Please enter some content')
        setLoading(false)
        return
      }

      let readTime = formData.read_time
      if (!readTime) {
        const minutes = calculateReadingTime(formData.content)
        readTime = `${minutes} min read`
      }

      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag)

      // Determine the published_at value:
      // - If already published and staying published, keep original date
      // - If publishing for first time, use current date
      // - If unpublishing, set to null
      let publishedAt = null
      if (published) {
        if (wasPublished && originalPublishedAt) {
          // Keep original publication date
          publishedAt = originalPublishedAt
        } else {
          // First time publishing
          publishedAt = new Date().toISOString()
        }
      }

      const postData = {
        title: formData.title.trim(),
        slug: formData.slug.trim(),
        excerpt: formData.excerpt.trim() || null,
        content: formData.content,
        image: formData.image || null,
        author: formData.author.trim(),
        category: formData.category || null,
        tags: tagsArray,
        read_time: readTime,
        published,
        published_at: publishedAt,
        meta_title: formData.meta_title.trim(),
        meta_description: formData.meta_description.trim(),
        meta_keywords: formData.meta_keywords,
        og_title: formData.og_title.trim(),
        og_description: formData.og_description.trim(),
        og_image: formData.og_image || formData.image,
        schema_markup: formData.schema_markup,
      }

      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to update post')
      }

      alert('Post updated successfully!')
      router.push('/admin/posts')
    } catch (error: any) {
      console.error('Error updating post:', error)
      alert(error.message || 'Error updating post. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const categories = [
    "Hair Transplant",
    "Recovery",
    "Hair Loss",
    "Treatments",
    "FAQ",
    "Cost & Planning",
    "Procedures",
    "Before & After"
  ]

  if (fetching) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading post...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between sticky top-0 bg-gray-100 z-50 py-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/admin/posts"
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Edit Post</h1>
            <p className="text-gray-600">
              {wasPublished ? 'Editing published post' : 'Update your blog post'}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleSubmit(false)}
            disabled={loading || !formData.title || !formData.content}
            className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Draft</span>
          </button>

          <button
            onClick={() => handleSubmit(true)}
            disabled={loading || !formData.title || !formData.content}
            className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>{loading ? 'Updating...' : wasPublished ? 'Update Post' : 'Update & Publish'}</span>
          </button>
        </div>
      </div>

      {/* Show publication status */}
      {wasPublished && originalPublishedAt && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 text-sm">
            ✓ This post was published on {new Date(originalPublishedAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      )}

      {/* Main Form */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Post Title *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Enter your post title..."
            className="w-full px-4 py-3 text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            URL Slug *
          </label>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">eternoclinic.com/blog/</span>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: slugify(e.target.value) })}
              placeholder="post-url-slug"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Excerpt
          </label>
          <textarea
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            placeholder="Brief description..."
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none"
          />
        </div>

        {/* Featured Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Featured Image
          </label>
          {formData.image ? (
            <div className="relative">
              <img
                src={formData.image}
                alt="Featured"
                className="w-full h-64 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => setFormData({ ...formData, image: '', og_image: '' })}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {imageUploading ? (
                  <>
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mb-3"></div>
                    <p className="text-sm text-gray-500">Uploading...</p>
                  </>
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-gray-400 mb-3" />
                    <p className="text-sm text-gray-500">Click to upload</p>
                  </>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                disabled={imageUploading}
              />
            </label>
          )}
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content *
          </label>
          <RichTextEditor
            content={formData.content}
            onChange={(content) => setFormData({ ...formData, content })}
          />
        </div>

        <TocPreview content={formData.content} />

        {/* Author & Category */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Author
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            >
              <option value="">Select</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Tags & Reading Time */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags (comma separated)
            </label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reading Time
            </label>
            <input
              type="text"
              value={formData.read_time || `${calculateReadingTime(formData.content)} min read`}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
              disabled
            />
          </div>
        </div>
      </div>

      {/* SEO Section */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <button
          onClick={() => setShowSEO(!showSEO)}
          className="w-full px-8 py-4 flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-primary-600" />
            <h3 className="text-lg font-semibold">SEO Settings</h3>
          </div>
          <span>{showSEO ? '−' : '+'}</span>
        </button>

        {showSEO && (
          <div className="px-8 py-6 space-y-6 border-t">
            <div>
              <label className="block text-sm font-medium mb-2">Meta Title</label>
              <input
                type="text"
                value={formData.meta_title}
                onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                maxLength={60}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Meta Description</label>
              <textarea
                value={formData.meta_description}
                onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                maxLength={160}
                rows={3}
                className="w-full px-4 py-3 border rounded-lg resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Keywords</label>
              <input
                type="text"
                value={formData.meta_keywords}
                onChange={(e) => setFormData({ ...formData, meta_keywords: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg bg-gray-50"
              />
            </div>

            <div className="border-t pt-6">
              <h4 className="font-semibold mb-4">Open Graph</h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">OG Title</label>
                  <input
                    type="text"
                    value={formData.og_title}
                    onChange={(e) => setFormData({ ...formData, og_title: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">OG Description</label>
                  <textarea
                    value={formData.og_description}
                    onChange={(e) => setFormData({ ...formData, og_description: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-3 border rounded-lg resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Schema Markup</h4>
                <button
                  onClick={copySchemaToClipboard}
                  className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
                >
                  {schemaCopied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                  {schemaCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <textarea
                value={formData.schema_markup}
                readOnly
                rows={12}
                className="w-full px-4 py-3 border rounded-lg bg-gray-50 font-mono text-xs"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
