import Link from "next/link";
import { CheckCircle, Award, Users, Globe, ArrowRight, Calendar, Clock } from "lucide-react";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import GalleryCarousel from "@/components/GalleryCarousel";
import WorldMapClientele from "@/components/WorldMapClientele";
import { createClient } from '@/lib/supabase/server';

export default async function HomePage() {
  const specializedTreatments = [
    {
      title: "Hair Loss in Men",
      description: "Expert treatment for male pattern baldness and androgenetic alopecia",
      image: "/images/conditions/hair-loss-men.webp",
      link: "/hair-loss-men",
      tag: "Most Common"
    },
    {
      title: "Hair Loss in Women",
      description: "Specialized care for female pattern hair loss with DHI techniques",
      image: "/images/conditions/hair-loss-women.webp",
      link: "/hair-loss-women",
      tag: "Specialized Care"
    },
    {
      title: "Hair Loss in Children",
      description: "Gentle treatment for pediatric alopecia and childhood conditions",
      image: "/images/conditions/hair-loss-children.webp",
      link: "/hair-loss-children",
      tag: "Pediatric Care"
    },
    {
      title: "Failed Hair Transplant",
      description: "Expert corrective surgery to fix unnatural results and scarring",
      image: "/images/conditions/failed-transplant.webp",
      link: "/failed-hair-transplant",
      tag: "Corrective Surgery"
    },
    {
      title: "Mesotherapy for Hair Loss",
      description: "Non-surgical nutrient injections for natural hair regrowth",
      image: "/images/conditions/mesotherapy.webp",
      link: "/mesotherapy-hair-loss",
      tag: "Non-Surgical"
    },
    {
      title: "Stem Cell FUE",
      description: "Revolutionary regenerative medicine for 90% graft survival",
      image: "/images/conditions/stem-cell.webp",
      link: "/stem-cell-fue",
      tag: "Advanced Tech"
    },
  ];

  const whyChooseUs = [
    "Expert surgeon with MCh Plastic Surgery qualification from PGI Chandigarh",
    "International training from UK, USA, Canada, and Singapore",
    "Latest techniques: FUE, FUT, DHI, Modified Hair Implantation",
    "State-of-the-art equipment and world-class facilities",
    "Patients from 26+ countries worldwide trust our expertise",
    "Personalized treatment plans tailored to individual needs",
    "Comprehensive post-operative care and lifetime support",
    "Transparent pricing with no hidden costs"
  ];

  // Fetch latest blog posts
  const supabase = await createClient();
  const { data: latestPosts } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, image, published_at, read_time, category, author')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(3);

  return (
    <>
      {/* Hero Section with Video Background */}
      <HeroVideoBackground 
        videoSrc="/videos/hero-background.mp4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-base sm:text-lg">★★★★★</span>
            </div>
            <a 
              href="https://share.google/et94AAsNCgNKbPHAr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white whitespace-nowrap hover:text-yellow-400 transition-colors underline"
            >
              4.9 out of 5
            </a>
            <span className="text-white/70 xs:inline">|</span>
            <span className="text-white/90 whitespace-nowrap">7000+ Happy Patients</span>
          </div>

          <h1 className="mb-6 leading-tight text-white">
            <span className="block text-xl md:text-2xl font-normal mb-2">The Leading</span>
            <span className="block">Hair Transplant Clinic</span>
            <span className="block text-xl md:text-2xl font-normal mt-2">in Kochi, Kerala</span>
          </h1>
          <p className="text-xl md:text-xl mb-8 text-gray-300 leading-relaxed">
            All hair loss treatments & hair transplant will be done only by our Senior Consultant Plastic Surgeon, <strong className="text-white">Dr. Chacko Cyriac</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <Link href="/contact" className="btn-primary text-center shadow-xl">
              Book Consultation
            </Link>
            <Link href="/gallery" className="btn-secondary text-center">
              Our Results
            </Link>
          </div>
          <div className="flex items-center gap-6 text-sm justify-center flex-wrap">
            <div className="flex items-center gap-2">
              <Users className="text-white" size={20} />
              <span>7000+ Successful Cases</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="text-white" size={20} />
              <span>26+ Countries Served</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-white" size={20} />
              <span>22+ Years Experience</span>
            </div>
          </div>
        </div>
      </HeroVideoBackground>

      {/* Specialized Care & Advanced Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Specialized Expertise
            </div>
            <h2 className="mb-4">The Latest in Hair Loss Treatments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For the recent advances in hair loss treatment we have incorporated into our practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedTreatments.map((treatment, index) => (
              <Link
                key={index}
                href={treatment.link}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                      {treatment.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-gray-200 transition-colors">
                      {treatment.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {treatment.description}
                  </p>
                  <div className="flex items-center text-gray-900 font-semibold group-hover:gap-2 transition-all">
                    Learn More 
                    <ArrowRight className="ml-1 group-hover:translate-x-2 transition-transform duration-300" size={18} />
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-900 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/treatments" className="btn-primary inline-block">
View all Latest Treatments            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
     {/* <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Services
            </div>
            <h2 className="mb-4">Comprehensive Hair Loss Treatments</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced solutions for all types of hair loss, backed by international expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
                features={service.features}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section> */}

      {/* Gallery Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Real Results
            </div>
            <h2 className="mb-4">Before & After Transformations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the incredible transformations achieved by Dr. Chacko Cyriac at Eterno Clinic
            </p>
          </div>
          <GalleryCarousel />
          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-primary inline-block">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Why Eterno Clinic
              </div>
              <h2 className="mb-6">Why Choose Dr. Chacko Cyriac for Your Hair Treatment?</h2>
              <p className="text-gray-600 text-lg mb-8">
                With over 22+ years of experience and international training, Dr. Chacko Cyriac brings world-class expertise to Kerala. Our commitment to excellence and patient satisfaction sets us apart.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/contact" className="btn-primary inline-block">
                Schedule Your Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs Section - Mobile Slider */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Expert Insights
            </div>
            <h2 className="mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with expert advice, tips, and updates on hair restoration
            </p>
          </div>
          
          {latestPosts && latestPosts.length > 0 ? (
            <>
              {/* Desktop Grid View */}
              <div className="hidden md:grid md:grid-cols-3 gap-8">
                {latestPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {post.image && (
                      <div className="aspect-video bg-gray-200 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {post.category && (
                        <span className="inline-block bg-gray-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                          {post.category}
                        </span>
                      )}
                      <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-gray-600 transition-colors">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-gray-500 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>
                            {new Date(post.published_at).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                        {post.read_time && (
                          <div className="flex items-center gap-2">
                            <Clock size={14} />
                            <span>{post.read_time}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile Horizontal Scroll Slider */}
              <div className="md:hidden -mx-4 px-4">
                <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
                  {latestPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group flex-shrink-0 w-[85vw] bg-white rounded-xl shadow-lg overflow-hidden snap-start"
                    >
                      {post.image && (
                        <div className="aspect-video bg-gray-200 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        {post.category && (
                          <span className="inline-block bg-gray-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                            {post.category}
                          </span>
                        )}
                        <h3 className="text-xl font-bold mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="flex items-center justify-between text-gray-500 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>
                              {new Date(post.published_at).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                          </div>
                          {post.read_time && (
                            <div className="flex items-center gap-2">
                              <Clock size={14} />
                              <span>{post.read_time}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="flex justify-center gap-2 mt-6">
                  {latestPosts.map((_, index) => (
                    <div key={index} className="w-2 h-2 rounded-full bg-gray-300" />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts available yet. Check back soon!</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-primary inline-block">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Patient Stories
            </div>
            <h2 className="mb-4">What Our Patients Say About us! </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Verified customer reviews and ratings.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Our Clientele - World Map Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Global Reach
            </div>
            <h2 className="mb-6">Our Clientele</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our patients for hair loss treatments and hair transplantation have come to us from various countries including the United States, Canada, Ireland, United Kingdom, Switzerland, Germany, Austria, Italy, South Africa, Ghana, almost all the Middle-Eastern countries, from various parts of India, Nepal, Singapore, Malaysia, Vietnam, Hong Kong, Japan, Australia and New Zealand.
            </p>
          </div>
          
          <WorldMapClientele />
        </div>
      </section>

      {/* Before/After CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">See Real Results from Real Patients</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Browse our gallery of before and after transformations. These could be your results!
          </p>
          <Link href="/gallery" className="btn-primary inline-block">
            View Results Gallery
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Got Questions?
            </div>
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to the most common questions about hair transplant procedures
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
          <div className="text-center mt-8">
            <Link href="/contact" className="btn-primary inline-block">
              Still Have Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-white mb-4">Start Your Hair Restoration Journey Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait any longer. Schedule your Consultation with Dr. Chacko Cyriac and take the first step towards regaining your confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary inline-block">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
