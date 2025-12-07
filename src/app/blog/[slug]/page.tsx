import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react'
import TableOfContents from '@/components/blog/TableOfContents'
import { addIdsToHeadings } from '@/lib/utils/toc'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = await createClient()
  
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    keywords: post.meta_keywords,
    openGraph: {
      title: post.og_title || post.title,
      description: post.og_description || post.excerpt,
      images: post.og_image ? [post.og_image] : [],
      type: 'article',
      publishedTime: post.published_at,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.og_title || post.title,
      description: post.og_description || post.excerpt,
      images: post.og_image ? [post.og_image] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = await createClient()
  
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error || !post) {
    notFound()
  }

  // Increment views
  await supabase
    .from('posts')
    .update({ views: (post.views || 0) + 1 })
    .eq('id', post.id)

  // Add IDs to headings for ToC navigation
  const contentWithIds = addIdsToHeadings(post.content)

  // Get related posts
  const { data: relatedPosts } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, image, published_at, read_time, category')
    .eq('published', true)
    .eq('category', post.category)
    .neq('id', post.id)
    .limit(3)

  return (
    <>
      {/* Schema Markup */}
      {post.schema_markup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: post.schema_markup }}
        />
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 border-b">
        <div className="container-custom">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-gray-700 hover:text-black mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          {post.category && (
            <span className="inline-block bg-gray-100 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-gray-600 mb-6 max-w-3xl">
              {post.excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(post.published_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}</span>
            </div>
            {post.read_time && (
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.read_time}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.image && (
        <div className="container-custom py-8">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Main Content with ToC */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar with ToC */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <TableOfContents content={post.content} />
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-9 order-1 lg:order-2">
            <div 
              className="prose prose-lg prose-gray max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3
                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                prose-a:text-gray-900 prose-a:underline prose-a:decoration-gray-300 hover:prose-a:decoration-gray-900 prose-a:transition-colors
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-em:text-gray-700 prose-em:italic
                prose-ul:my-6 prose-ul:space-y-2
                prose-ol:my-6 prose-ol:space-y-2
                prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-lg
                prose-blockquote:border-l-4 prose-blockquote:border-gray-400 prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:italic
                prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-8
                prose-img:rounded-xl prose-img:shadow-2xl prose-img:my-8
                prose-hr:border-gray-200 prose-hr:my-12
                prose-table:my-8
                prose-th:bg-gray-100 prose-th:text-gray-900 prose-th:font-semibold prose-th:p-3
                prose-td:p-3 prose-td:border prose-td:border-gray-200"
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Related Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">About {post.author}</h4>
                  <p className="text-gray-700 mb-4">
                    Expert hair transplant surgeon with 22+ years of experience. MCh Plastic Surgery from PGI Chandigarh with international training from UK, USA, Canada, and Singapore.
                  </p>
                  <Link href="/about" className="text-gray-900 font-semibold hover:text-black inline-flex items-center gap-2 underline">
                    Learn More <ArrowLeft className="rotate-180" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
                >
                  {related.image && (
                    <div className="aspect-video bg-gray-200 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-2" />
                      {new Date(related.published_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                      {related.read_time && (
                        <>
                          <span className="mx-2">•</span>
                          {related.read_time}
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Transform Your Look Today
          </h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Schedule a personalized consultation with Dr. Chacko Cyriac and take the first step towards restoring your confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-gray-900 hover:bg-gray-100 inline-block">
              Book Consultation
            </Link>
            <Link href="/gallery" className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900 inline-block">
              View Before & After
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
