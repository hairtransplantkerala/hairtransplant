'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import RichTextEditor from '@/components/admin/RichTextEditor'
import TocPreview from '@/components/admin/TocPreview'
import imageCompression from 'browser-image-compression'
import { ArrowLeft, Save, Eye, Upload, X, Sparkles, Copy, Check, Plus, Trash2, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { generateMetaTitle, generateMetaDescription, generateKeywords, generateSchemaMarkup } from '@/lib/utils/seo'

interface FAQItem {
  question: string
  answer: string
}

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

export default function NewPostPage() {
  const router = useRouter()
  
  const [loading, setLoading] = useState(false)
  const [imageUploading, setImageUploading] = useState(false)
  const [schemaCopied, setSchemaCopied] = useState(false)
  const [showSEO, setShowSEO] = useState(false)
  const [showFAQ, setShowFAQ] = useState(false)
  
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

  const [faqs, setFaqs] = useState<FAQItem[]>([
    { question: '', answer: '' }
  ])

  // Auto-generate SEO fields when title or content changes
  useEffect(() => {
    if (formData.title) {
      const tagsArray = formData.tags.split(',').map(t => t.trim()).filter(Boolean)
      const keywords = generateKeywords(formData.title, tagsArray, formData.category)
      
      setFormData(prev => ({
        ...prev,
        meta_title: prev.meta_title || generateMetaTitle(formData.title),
        meta_description: prev.meta_description || generateMetaDescription(formData.excerpt, formData.content),
        meta_keywords: keywords.join(', '),
        og_title: prev.og_title || formData.title,
        og_description: prev.og_description || formData.excerpt,
      }))
    }
  }, [formData.title, formData.excerpt, formData.content, formData.tags, formData.category])

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
        published_at: new Date().toISOString(),
      })
      setFormData(prev => ({ ...prev, schema_markup: schema }))
    }
  }, [formData.title, formData.slug, formData.excerpt, formData.content, formData.image, formData.author, formData.category])

  const handleTitleChange = (title: string) => {
    const slug = slugify(title)
    setFormData({ ...formData, title, slug })
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

      const uploadData = new FormData()
      uploadData.append('file', compressedFile, `blog-${Date.now()}.webp`)
      uploadData.append('folder', 'kerala-hair-transplant/blog')
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData,
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Image upload failed')
      }

      setFormData({ 
        ...formData, 
        image: result.url,
        og_image: result.url 
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

  // FAQ handlers
  const addFAQ = () => {
    setFaqs([...faqs, { question: '', answer: '' }])
  }

  const removeFAQ = (index: number) => {
    const newFaqs = faqs.filter((_, i) => i !== index)
    setFaqs(newFaqs.length > 0 ? newFaqs : [{ question: '', answer: '' }])
  }

  const updateFAQ = (index: number, field: 'question' | 'answer', value: string) => {
    const newFaqs = [...faqs]
    newFaqs[index][field] = value
    setFaqs(newFaqs)
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

      // Filter out empty FAQs
      const validFaqs = faqs.filter(faq => faq.question.trim() && faq.answer.trim())

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
        published_at: published ? new Date().toISOString() : null,
        meta_title: formData.meta_title.trim(),
        meta_description: formData.meta_description.trim(),
        meta_keywords: formData.meta_keywords,
        og_title: formData.og_title.trim(),
        og_description: formData.og_description.trim(),
        og_image: formData.og_image || formData.image,
        schema_markup: formData.schema_markup,
        faqs: validFaqs.length > 0 ? validFaqs : null,
      }

      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
        body: JSON.stringify(postData),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to create post')
      }

      alert(`Post ${published ? 'published' : 'saved as draft'} successfully!`)
      router.push('/admin/posts')
    } catch (error: any) {
      console.error('Error saving post:', error)
      alert(error.message || 'Error saving post. Please try again.')
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
            <h1 className="text-3xl font-bold text-gray-900">Create New Post</h1>
            <p className="text-gray-600">Write and publish your blog post</p>
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
            <span>{loading ? 'Publishing...' : 'Publish'}</span>
          </button>
        </div>
      </div>

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
            <span className="text-gray-500 text-sm">hairtransplantkerala.com/blog/</span>
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
            placeholder="Brief description (auto-generates meta description if empty)..."
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none"
          />
        </div>

        {/* Featured Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Featured Image (Auto-compressed to &lt;200KB)
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
                    <p className="text-sm text-gray-500">Compressing & uploading...</p>
                  </>
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-gray-400 mb-3" />
                    <p className="text-sm text-gray-500">Click to upload featured image</p>
                    <p className="text-xs text-gray-400 mt-1">Auto-compressed to WebP &lt;200KB</p>
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

        {/* Content Editor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content *
          </label>
          <RichTextEditor
            content={formData.content}
            onChange={(content) => setFormData({ ...formData, content })}
          />
        </div>

        {/* ToC Preview */}
        <TocPreview content={formData.content} />

        {/* Author Info & Category */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Author Name
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              placeholder="Dr. Chacko Cyriac"
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
              <option value="">Select a category</option>
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
              placeholder="hair transplant, fue, recovery"
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
              placeholder="Auto-calculated"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 bg-gray-50"
              disabled
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <button
          onClick={() => setShowFAQ(!showFAQ)}
          className="w-full px-8 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-primary-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              FAQ Section (Optional)
            </h3>
          </div>
          <span className="text-gray-400">{showFAQ ? '−' : '+'}</span>
        </button>

        {showFAQ && (
          <div className="px-8 py-6 border-t space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-gray-700">Question {index + 1}</h4>
                  {faqs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFAQ(index)}
                      className="text-red-600 hover:text-red-700 p-1"
                      title="Remove FAQ"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">Question</label>
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => updateFAQ(index, 'question', e.target.value)}
                    placeholder="Enter your question..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">Answer</label>
                  <textarea
                    value={faq.answer}
                    onChange={(e) => updateFAQ(index, 'answer', e.target.value)}
                    placeholder="Enter your answer..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none"
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addFAQ}
              className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-600 hover:text-primary-600 transition-colors flex items-center justify-center gap-2"
            >
              <Plus size={20} />
              Add Another FAQ
            </button>

            <p className="text-xs text-gray-500 mt-4">
              💡 FAQs will be displayed at the end of your blog post with proper schema markup for SEO
            </p>
          </div>
        )}
      </div>

      {/* SEO Section */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <button
          onClick={() => setShowSEO(!showSEO)}
          className="w-full px-8 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-primary-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              SEO Settings (Auto-Generated)
            </h3>
          </div>
          <span className="text-gray-400">{showSEO ? '−' : '+'}</span>
        </button>

        {showSEO && (
          <div className="px-8 py-6 space-y-6 border-t">
            {/* Meta Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Title
                <span className="ml-2 text-xs text-gray-500">({formData.meta_title.length}/60)</span>
              </label>
              <input
                type="text"
                value={formData.meta_title}
                onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                maxLength={60}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>

            {/* Meta Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Description
                <span className="ml-2 text-xs text-gray-500">({formData.meta_description.length}/160)</span>
              </label>
              <textarea
                value={formData.meta_description}
                onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                maxLength={160}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none"
              />
            </div>

            {/* Meta Keywords */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Keywords (Auto-generated from title & tags)
              </label>
              <input
                type="text"
                value={formData.meta_keywords}
                onChange={(e) => setFormData({ ...formData, meta_keywords: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 bg-gray-50"
                placeholder="Keywords will be auto-generated"
              />
            </div>

            {/* Open Graph */}
            <div className="border-t pt-6">
              <h4 className="text-md font-semibold text-gray-900 mb-4">Open Graph (Social Media)</h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    OG Title
                  </label>
                  <input
                    type="text"
                    value={formData.og_title}
                    onChange={(e) => setFormData({ ...formData, og_title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    OG Description
                  </label>
                  <textarea
                    value={formData.og_description}
                    onChange={(e) => setFormData({ ...formData, og_description: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    OG Image URL
                  </label>
                  <input
                    type="text"
                    value={formData.og_image}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 bg-gray-50"
                    placeholder="Auto-filled from featured image"
                    disabled
                  />
                </div>
              </div>
            </div>

            {/* Schema Markup */}
            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-md font-semibold text-gray-900">Schema Markup (JSON-LD)</h4>
                <button
                  onClick={copySchemaToClipboard}
                  className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  {schemaCopied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                  {schemaCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <textarea
                value={formData.schema_markup}
                readOnly
                rows={12}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 font-mono text-xs"
              />
              <p className="text-xs text-gray-500 mt-2">
                This structured data will be automatically added to your post for better SEO
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
