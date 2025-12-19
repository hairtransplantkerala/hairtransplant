'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { Calendar, ArrowRight, Clock, Tag, Loader } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  image: string
  author: string
  category: string
  read_time: string
  published_at: string
  tags: string[]
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("All")

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts?status=published")
      const data = await response.json()

      if (data.success) {
        setBlogPosts(data.posts || [])
      }
    } catch (error) {
      console.error("Error fetching posts:", error)
    } finally {
      setLoading(false)
    }
  }

  const categories = ["All", ...new Set(blogPosts.map(post => post.category).filter(Boolean))]

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="animate-spin text-primary-600" size={48} />
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="container-custom">
          <h1 className="mb-4">Hair Restoration Blog</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Expert insights, tips, and comprehensive guides on hair transplantation and hair loss treatment from Dr. Chacko Cyriac
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 1 && (
        <section className="py-8 bg-gray-50 border-b sticky top-20 z-40">
          <div className="container-custom">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors shadow-md ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">No posts yet</h2>
              <p className="text-xl text-gray-600 mb-8">
                Check back soon for expert articles on hair transplantation and hair care.
              </p>
              <Link href="/" className="btn-primary inline-block">
                Return to Homepage
              </Link>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {filteredPosts.length > 0 && (
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 mb-12">
                  <div className="aspect-[4/3] lg:aspect-auto bg-gray-200">
                    {filteredPosts[0].image ? (
                      <img
                        src={filteredPosts[0].image}
                        alt={filteredPosts[0].title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                        <span className="text-primary-400 text-lg font-semibold">No Image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                      Featured Post
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{filteredPosts[0].title}</h2>
                    <p className="text-gray-600 text-lg mb-6">{filteredPosts[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {new Date(filteredPosts[0].published_at).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      {filteredPosts[0].read_time && (
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2" />
                          {filteredPosts[0].read_time}
                        </div>
                      )}
                    </div>
                    <Link
                      href={`/blog/${filteredPosts[0].slug}`}
                      className="btn-primary inline-flex items-center w-fit"
                    >
                      Read Full Article <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </div>
              )}

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="aspect-video bg-gray-200 overflow-hidden">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                            <span className="text-primary-400 font-semibold">No Image</span>
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        {post.category && (
                          <span className="inline-flex items-center bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                            <Tag size={14} className="mr-1" />
                            {post.category}
                          </span>
                        )}
                        {post.read_time && (
                          <span className="text-gray-500 text-sm">{post.read_time}</span>
                        )}
                      </div>
                      
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={16} className="mr-2" />
                          {new Date(post.published_at).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                        >
                          Read More <ArrowRight className="ml-2" size={18} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-white mb-4">Stay Updated with Latest Articles</h2>
            <p className="text-xl text-primary-100 mb-8">
              Subscribe to our newsletter for the latest hair restoration tips, news, and exclusive content
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-lg focus:ring-2 focus:ring-white focus:outline-none text-gray-900"
              />
              <button type="submit" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
