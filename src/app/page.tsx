import Link from "next/link";
import { CheckCircle, Award, Users, Globe, Calendar, Clock, Newspaper, MapPin } from "lucide-react";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import GalleryCarousel from "@/components/GalleryCarousel";
import WorldMapClientele from "@/components/WorldMapClientele";
import YouTubeThumbnail from "@/components/YouTubeThumbnail";
import { createClient } from '@/lib/supabase/server';

export default async function HomePage() {
  const specializedTreatments = [
    {
      title: "ET Protocol For Hair Loss",
      description: "Eterno Protocol for maximum graft survival and natural results",
      image: "/images/conditions/et-protocol.webp",
      link: "/et-protocol"
    },
    {
      title: "SC-FUE",
      description: "Revolutionary regenerative medicine for 90% graft survival and faster healing",
      image: "/images/conditions/stem-cell.webp",
      link: "/fue"
    },
    {
      title: "InviScar FUT",
      description: "Invisible scar FUT technique combining density with minimal visible scarring",
      image: "/images/conditions/fut.webp",
      link: "/fut"
    },
    {
      title: "Mesotherapy for Hair Loss",
      description: "Non-surgical nutrient injections for natural hair regrowth and scalp health",
      image: "/images/conditions/mesotherapy.webp",
      link: "/mesotherapy-hair-loss"
    },
    {
      title: "Advanced UltraMax PRP",
      description: "Platelet-Rich Plasma injections to stimulate hair growth and strengthen follicles",
      image: "/images/conditions/prp.webp",
      link: "/prp"
    },
    {
      title: "Stem Cell Therapy",
      description: "",
      image: "/images/services/dhi.webp",
      link: "/stem-cell-fue"
    },
  ];

  const commonConditions = [
    {
      title: "Failed Hair Transplant",
      description: "Expert corrective surgery to fix unnatural results and scarring",
      image: "/images/conditions/failed-transplant.webp",
      link: "/failed-hair-transplant"
    },
    {
      title: "Hair Loss in Women",
      description: "A huge problem in a silent population. A different approach is required.",
      image: "/images/conditions/hair-loss-women.webp",
      link: "/hair-loss-women"
    },
    {
      title: "Hair Loss in Children",
      description: "A problem presenting in increasing numbers. Treatments too vary.",
      image: "/images/conditions/hair-loss-children.webp",
      link: "/hair-loss-children"
    },
  ];

  const mediaFeatures = [
    {
      title: "Asianet News",
      description: "Featured interview discussing advanced hair transplant techniques and patient care",
      videoId: "lOh8jPTjP80",
      link: "https://www.youtube.com/watch?v=lOh8jPTjP80",
      type: "video",
      customThumbnail: "/images/media/thumbnails/asianetnews.webp" // Add custom thumbnail here (optional)
    },
    {
      title: "Asianet News",
      description: "Coverage of innovative plastic surgery procedures and success stories",
      videoId: "cG4rkfJnUGQ",
      link: "https://www.youtube.com/watch?v=cG4rkfJnUGQ",
      type: "video",
      customThumbnail: "/images/media/thumbnails/asianetnews2.webp"
      // No customThumbnail = uses YouTube default
    },
    {
      title: "Asianet News",
      description: "Expert insights on hair restoration and cosmetic surgery advancements",
      videoId: "beWJFyVrE9c",
      link: "https://www.youtube.com/watch?v=Ybjf7EmXe60&t=12s",
      type: "video",
      customThumbnail: "/images/media/thumbnails/asianetnews3.webp"
    },
    {
      title: "Kairali TV",
      description: "Discussing patient-centric approach to hair transplantation in Kerala",
      videoId: "WacY7-h7l44",
      link: "https://www.youtube.com/watch?v=eZEz6fXCbRg&t=9s",
      type: "video",
      customThumbnail: "/images/media/thumbnails/kairali.webp"
    },
  ];

  const clinicImages = [
    {
      title: "Reception",
      description: "Welcoming and comfortable reception at Eterno Clinic",
      image: "/images/clinic/reception.webp"
    },
    {
      title: "Consultation",
      description: "Private consultation rooms for personalized treatment planning",
      image: "/images/clinic/consultation.webp"
    },
    {
      title: "Recovery",
      description: "Comfortable recovery areas for post-procedure care",
      image: "/images/clinic/recovery.webp"
    },
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
      All hair loss treatments & hair transplant will be done only by our Senior Consultant Plastic Surgeon,
      <br />
      <strong className="text-white">Dr. Chacko Cyriac</strong>
    </p>

    <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
      <Link 
        href="/contact" 
        className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition-colors duration-200 text-center shadow-xl"
      >
        Book Consultation
      </Link>
      <Link 
        href="/gallery" 
        className="inline-block bg-white text-gray-900 border-2 border-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center"
      >
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


      {/* Gallery Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Gallery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-centre">
              Browse through some of our results.<br></br> You might find a hair loss problem similar to yours !
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

     {/* Specialized Care & Advanced Solutions */}
<section className="py-20 bg-gray-50">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="mb-4">The Latest in<br></br> Hair Loss Treatments</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto text-centre">
        The recent advances in hair loss treatment we have incorporated into our practice
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

            <div className="absolute -bottom-4 left-0 right-0 p-6 text-center">
             {/* <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-gray-200 transition-colors">
                {treatment.title}
              </h3> */}
            </div>
          </div>

          <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
            {/*<p className="text-gray-600 mb-4 leading-relaxed text-justify">
              {treatment.description}
            </p>*/}
            <h3 className="text-black text-xl text-center font-bold mb-2 transition-colors">
                {treatment.title}
              </h3>
            <div className="flex justify-center">
            <div className="flex items-center text-gray-900 font-semibold group-hover:gap-2 transition-all">
              Learn More 
              <div className="ml-1 group-hover:translate-x-2 transition-transform duration-300"/>
            </div>
            </div>
          </div>

          <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-900 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
        </Link>
      ))}
    </div>

    <div className="text-center mt-12">
      <Link href="/services" className="btn-primary inline-block">
        View All Services
      </Link>
    </div>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Our Plastic Surgeon </h2>
                <h3 className="mb-4 text-xl text-black">Dr. Chacko Cyriac</h3>
              <p className="text-gray-600 text-xl mb-8 text-centre">
                After completing his MCh Plastic Surgery training from the prestigious PGI, Chandigarh, India, he went on to get formal training and qualifications from the UK, USA, Canada and Singapore.</p>
            </div>
            
            {/* Doctor Image */}
            <div className="flex justify-center mb-12">
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-gray-300">
                <img
                  src="/images/dr-cyriac.jpg"
                  alt="Dr. Chacko Cyriac - Hair Transplant Surgeon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/about" className="btn-primary inline-block">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Most Common Hair Loss Conditions */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Changing Hair Loss Complaints</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-centre">
              Increased awareness has resulted in new and evolving hair loss complaints among patients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {commonConditions.map((condition, index) => (
              <Link
                key={index}
                href={condition.link}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={condition.image}
                    alt={condition.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/*<h3 className="text-white text-2xl font-bold mb-2 group-hover:text-gray-200 transition-colors">
                      {condition.title}
                    </h3>*/}
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <h3 className="text-black text-xl font-bold mb-2 transition-colors text-center">
                      {condition.title}
                    </h3>
                  <div className="flex justify-center">
  <div className="flex items-center text-gray-900 font-semibold group-hover:gap-2 transition-all">
    Learn More 
    <div
      className="ml-1 group-hover:translate-x-2 transition-transform duration-300"></div>
    <div/>
  </div>
</div>

                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-900 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary inline-block">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blogs Section - Mobile Slider */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-centre">
              Read more about our unique approach to all aspects of hair loss and its treatments.
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
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4 text-justify">
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
                          <p className="text-gray-600 text-sm line-clamp-3 mb-4 text-justify">
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
              <p className="text-gray-600 text-lg text-justify">No blog posts available yet. Check back soon!</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-primary inline-block">
              View All 
            </Link>
          </div>
        </div>
      </section>

      {/* Our Clientele - World Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-6">Our Clientele</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed text-centre">
              Our patients for hair loss treatments and hair transplantation, have come to us from various countries including the United States, Canada, Ireland, United Kingdom, Switzerland, Germany, Austria, Italy, South Africa, Ghana, almost all the Middle-Eastern countries, from various parts of India, Nepal, Singapore, Malaysia, Vietnam, Hong Kong, Japan, Australia and New Zealand.
            </p>
          </div>
          
          <WorldMapClientele />
        </div>
      </section>

       {/* Dr. Cyriac in the Media */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <h2 className="mb-0">Dr. Cyriac in the Media</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-centre">
              Dr Chacko Cyriac is a Senior Consultant Plastic Surgeon whose area of expertise is not confined to just hair transplant surgery. Some of the reports of his procedures in the media are shown below.
            </p>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaFeatures.map((media, index) => (
              <a
                key={index}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-video">
                  <YouTubeThumbnail
                    videoId={media.videoId}
                    title={media.title}
                    customThumbnail={media.customThumbnail}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 p-4">
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-gray-300 transition-colors">
                    {media.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2 text-justify">
                    {media.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile Horizontal Scroll Slider */}
          <div className="md:hidden -mx-4 px-4">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
              {mediaFeatures.map((media, index) => (
                <a
                  key={index}
                  href={media.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-[85vw] bg-black rounded-xl overflow-hidden shadow-lg snap-start"
                >
                  <div className="relative aspect-video">
                    <YouTubeThumbnail
                      videoId={media.videoId}
                      title={media.title}
                      customThumbnail={media.customThumbnail}
                      className="w-full h-full object-cover"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-xl">
                        <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900 p-4">
                    <h3 className="text-lg font-bold mb-2 text-white">
                      {media.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 text-justify">
                      {media.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {mediaFeatures.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-gray-300" />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/media" className="btn-primary inline-block">
              View All
            </Link>
          </div>
        </div>
      </section>

       {/* Choose Your Doctor Wisely */}
<section className="py-20 bg-gray-50">
  <div className="container-custom">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="mb-6">Choose Your Doctor Wisely</h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed text-centre">
          Before choosing your hair transplant surgeon, ask yourself these important questions :
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Ask for Qualifications</h3>
              <p className="text-gray-600 text-justify">What are your surgeon's qualifications and certifications?</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Primary Training</h3>
              <p className="text-gray-600 text-justify">What is their primary training and medical background?</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Qualified for Surgery</h3>
              <p className="text-gray-600 text-justify">Are they qualified and trained to perform surgical procedures?</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Type of Surgery Training</h3>
              <p className="text-gray-600 text-justify">What specific type of surgery are they trained in?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link href="/choose-your-doctor" className="btn-primary inline-block mb-4">
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Where We Are */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <MapPin className="text-gray-900" size={32} />
              <h2 className="mb-0">Where We Are</h2>
            </div>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicImages.map((clinic, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img
                    src={clinic.image}
                    alt={clinic.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    {clinic.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-justify">
                    {clinic.description}
                  </p>
                </div> */}
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll Slider */}
          <div className="md:hidden -mx-4 px-4">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
              {clinicImages.map((clinic, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85vw] bg-white rounded-xl shadow-lg overflow-hidden snap-start"
                >
                  <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                    <img
                      src={clinic.image}
                      alt={clinic.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/*<div className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      {clinic.title}
                    </h3>
                    <p className="text-gray-600 text-sm text-justify">
                      {clinic.description}
                    </p>
                  </div> */}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {clinicImages.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-gray-300" />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/plastic-surgery-center" className="btn-primary inline-block">
              Visit Our Clinic
            </Link>
            <Link href="/plastic-surgery-center#our-location" className="btn-primary inline-block">
  View Map
</Link>
          </div>
        </div>
      </section>

      {/* Where We Are */}
<section className="py-20 bg-gray-50">
  <div className="container-custom">
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center gap-2 mb-4">
        <h2 className="mb-0 font-bold text-gray-900">Our Location</h2>
      </div>
    </div>
    <div className="aspect-video bg-gray-200 rounded-2xl shadow-lg overflow-hidden mb-8 mx-auto max-w-4xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.590222200979!2d76.30854187527144!3d9.968010473583847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0873ba3f3a0e5d%3A0x96d4cdcbaa9e9b21!2sDr%20Chacko%20Cyriac%20Cosmetic%20Plastic%20Surgeon%2C%20PRP%20Hair%2C%20Laser%20Hair%20Removal!5e0!3m2!1sen!2sin!4v1764174583133!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full rounded-2xl"
      />
    </div>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center leading-relaxed">
      We're conveniently located in the heart of Kochi, Kerala. Our state-of-the-art facility provides a comfortable and private environment for all consultations and procedures.
    </p>
  </div>
</section>

{/* Testimonials Section */}
<section className="py-20 bg-white">
  <div className="container-custom">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Patients Say About Us!</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Verified customer reviews and ratings from real patients.
      </p>
    </div>
    <Testimonials />
    <div className="text-center mt-12">
      <Link href="https://share.google/et94AAsNCgNKbPHAr" className="btn-primary inline-block px-8 py-4 text-lg">
        View All Reviews
      </Link>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-centre">
              Get answers to the most common questions about hair transplant procedures
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
          <div className="text-center mt-8">
            <h3 className="text-xl text-gray-600 max-w-2xl mx-auto text-centre">
              Still have questions ?
            </h3> 
            <br></br>
            <Link href="/contact" className="btn-primary inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
  <div className="container-custom">
    <div className="bg-gradient-to-br from-gray-400 to-gray-400 rounded-2xl p-12 text-center text-white shadow-2xl">
      <h2 className="text-white mb-4">Start Your Hair Restoration Journey Today</h2>
      <p className="text-xl text-white font-medium mb-8 max-w-2xl mx-auto text-centre">
  Don't wait any longer. <br></br>Schedule your Consultation with <br></br>Dr. Chacko Cyriac. <br></br>Take the first step towards regaining your confidence.
</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          href="/contact" 
          className="btn-secondary text-center shadow-xl">
          Book Consultation
        </Link>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
