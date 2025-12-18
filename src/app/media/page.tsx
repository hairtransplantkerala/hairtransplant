"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

export default function MediaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const mediaItems = [
    {
      title: "Manorama News",
      videoId: "lOh8jPTjP80",
      link: "https://www.youtube.com/watch?v=lOh8jPTjP80",
      type: "video"
    },
    {
      title: "Asianet News",
      videoId: "cG4rkfJnUGQ",
      link: "https://www.youtube.com/watch?v=cG4rkfJnUGQ",
      type: "video"
    },
    {
      title: "Mathrubhumi News",
      videoId: "beWJFyVrE9c",
      link: "https://www.youtube.com/watch?v=beWJFyVrE9c",
      type: "video"
    },
    {
      title: "Manorama News Interview",
      videoId: "lOh8jPTjP80",
      link: "https://www.youtube.com/watch?v=lOh8jPTjP80&t=1s",
      type: "video"
    },
    {
      title: "Media One TV",
      videoId: "WacY7-h7l44",
      link: "https://www.youtube.com/watch?v=WacY7-h7l44",
      type: "video"
    },
    {
      title: "Jaihind TV",
      videoId: "1WoT1TCJ56w",
      link: "https://www.youtube.com/watch?v=1WoT1TCJ56w&t=2s",
      type: "video"
    },
    {
      title: "Reporter TV",
      videoId: "Ybjf7EmXe60",
      link: "https://www.youtube.com/watch?v=Ybjf7EmXe60&t=12s",
      type: "video"
    },
    {
      title: "Kairali TV",
      videoId: "eZEz6fXCbRg",
      link: "https://www.youtube.com/watch?v=eZEz6fXCbRg&t=9s",
      type: "video"
    },
    {
      title: "News 18",
      videoId: "atG2OaN-ggQ",
      link: "https://www.youtube.com/watch?v=atG2OaN-ggQ",
      type: "video"
    },
    {
      title: "NDTV",
      videoId: "xyz123abc",
      link: "https://www.youtube.com/watch?v=xyz123abc",
      type: "video"
    },
    {
      title: "Chandrika",
      image: "/images/media/articles/chandrika.webp",
      type: "article"
    },
    {
      title: "Deepika",
      image: "/images/media/articles/deepika 2.webp",
      type: "article"
    },
    {
      title: "Deepika",
      image: "/images/media/articles/Deepika 3.webp",
      type: "article"
    },
    {
      title: "Deepika",
      image: "/images/media/articles/Deepika 4.webp",
      type: "article"
    },
    {
      title: "Deepika",
      image: "/images/media/articles/Deepika 5.webp",
      type: "article"
    },
    {
      title: "Deepika",
      image: "/images/media/articles/Deepika 6.webp",
      type: "article"
    },
    {
      title: "Deepika",
      image: "/images/media/articles/Deepika 7.webp",
      type: "article"
    },
    {
      title: "Deshabhimani",
      image: "/images/media/articles/deshabhimani.webp",
      type: "article"
    },
    {
      title: "Deshabhimani",
      image: "/images/media/articles/deshabhimani 2.webp",
      type: "article"
    },
    {
      title: "Indian Express",
      image: "/images/media/articles/Indian Express.webp",
      type: "article"
    },
    {
      title: "Kerala Chronicles",
      image: "/images/media/articles/kerala chronicles.webp",
      type: "article"
    },
    {
      title: "Kerala Kaumudi",
      image: "/images/media/articles/Kerala Kaumudi.webp",
      type: "article"
    },
    {
      title: "Keralavaani",
      image: "/images/media/articles/keralavaani.webp",
      type: "article"
    },
    {
      title: "Kochi Times",
      image: "/images/media/articles/Kochi Times.webp",
      type: "article"
    },
    {
      title: "Malayala Manorama",
      image: "/images/media/articles/malayala manorama.webp",
      type: "article"
    },
    {
      title: "Malayala Manorama",
      image: "/images/media/articles/malayala manorama 2.webp",
      type: "article"
    },
    {
      title: "Malayala Manorama",
      image: "/images/media/articles/malayala manorama 3.webp",
      type: "article"
    },
    {
      title: "Malayala Manorama",
      image: "/images/media/articles/malayala manorama 4.webp",
      type: "article"
    },
    {
      title: "Malayala Manorama",
      image: "/images/media/articles/malayala manorama5.webp",
      type: "article"
    },
    {
      title: "Malayala Manorama",
      image: "/images/media/articles/malayala manorama 6.webp",
      type: "article"
    },
    {
      title: "Mangalam",
      image: "/images/media/articles/mangalam.webp",
      type: "article"
    },
    {
      title: "Mathrubhumi",
      image: "/images/media/articles/mathrubhumi.webp",
      type: "article"
    },
    {
      title: "Mathrubhumi",
      image: "/images/media/articles/mathrubhumi 2.webp",
      type: "article"
    },
    {
      title: "Metro Manorama",
      image: "/images/media/articles/metro manorama.webp",
      type: "article"
    },
    {
      title: "Metro Manorama",
      image: "/images/media/articles/metro manorama - 2.webp",
      type: "article"
    },
    {
      title: "NDTV",
      image: "/images/media/articles/ndtv.webp",
      type: "article"
    },
    {
      title: "New Indian Express",
      image: "/images/media/articles/new indian express.webp",
      type: "article"
    },
    {
      title: "News Express",
      image: "/images/media/articles/news express.webp",
      type: "article"
    },
    {
      title: "Rashtradeepika",
      image: "/images/media/articles/rashtradeepika.webp",
      type: "article"
    },
    {
      title: "The Hindu",
      image: "/images/media/articles/the hindu.webp",
      type: "article"
    },
    {
      title: "The Hindu",
      image: "/images/media/articles/the hindu 2.webp",
      type: "article"
    },
    {
      title: "The New Indian Express",
      image: "/images/media/articles/the new india express.webp",
      type: "article"
    },
    {
      title: "The Times of India",
      image: "/images/media/articles/the times of india.webp",
      type: "article"
    },
    {
      title: "Times City",
      image: "/images/media/articles/times city.webp",
      type: "article"
    },
    {
      title: "The Times of India",
      image: "/images/media/articles/times of india.webp",
      type: "article"
    },
    {
      title: "The Times of India",
      image: "/images/media/articles/times of india 2.webp",
      type: "article"
    },
    {
      title: "Times of Oman",
      image: "/images/media/articles/times of oman.webp",
      type: "article"
    },
    {
      title: "Varthamanam",
      image: "/images/media/articles/varthamanam.webp",
      type: "article"
    },
    {
      title: "Varthamanam",
      image: "/images/media/articles/varthamanam 2.webp",
      type: "article"
    },
    {
      title: "Veekshanam",
      image: "/images/media/articles/veekshanam.webp",
      type: "article"
    },
    {
      title: "Veekshanam",
      image: "/images/media/articles/veekshanam 2.webp",
      type: "article"
    },
    {
      title: "Veekshanam",
      image: "/images/media/articles/veekshanam 3.webp",
      type: "article"
    },
    {
      title: "Web India 123",
      image: "/images/media/articles/webindia 123.webp",
      type: "article"
    }
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <style jsx>{`
        .article-img {
          background-color: white !important;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">In the Media</h1>
            <p className="text-xl text-gray-300 mb-8">
              Featured in leading newspapers, TV channels, and digital media across India and internationally
            </p>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Press Coverage & Media Features</h2>
              <p className="text-lg text-gray-600">
                Click on videos to watch or articles to read
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaItems.map((item, index) => (
                <div key={index}>
                  {item.type === "video" ? (
                    // Video Item
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="relative aspect-video">
                        <img
                          src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                          onError={(e) => {
                            e.currentTarget.src = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`;
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                            <svg className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900 p-4">
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <span className="text-xs text-gray-400 uppercase">
                          Video Interview
                        </span>
                      </div>
                    </a>
                  ) : (
                    // Article Item - Square Preview
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                      <button
                        onClick={() => handleImageClick(item.image!)}
                        className="w-full group relative"
                      >
                        {/* Square container with fixed aspect ratio */}
                        <div className="relative w-full aspect-square bg-white p-4 flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full article-img"
                            style={{ 
                              objectFit: 'contain',
                              backgroundColor: 'white'
                            }}
                          />
                        </div>
                      </button>
                      
                      <div className="bg-white p-4 border-t border-gray-200">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <span className="text-xs text-gray-500">Press Article • Click to Expand</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal - Same image source */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
          >
            <X size={36} />
          </button>
          
          <div className="relative max-w-7xl max-h-[95vh] w-full h-full flex items-center justify-center p-8 bg-white rounded-lg">
            <img
              src={selectedImage}
              alt="Press article expanded"
              className="max-w-full max-h-full object-contain"
              style={{ backgroundColor: 'white' }}
            />
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center text-white text-sm opacity-75">
            <p>Click outside the image or press ESC to close</p>
          </div>
        </div>
      )}

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Recognized Excellence in Plastic Surgery</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
              Dr. Chacko Cyriac and Eterno have been extensively featured in leading media outlets across India and internationally. Our pioneering work in hair transplantation and cosmetic surgery has garnered attention from major newspapers, television channels, and digital media platforms.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
              From Malayala Manorama and Times of India to international publications like Times of Oman, our expertise and patient-centric approach have been recognized and celebrated by the media industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="btn-primary inline-block">
                About Dr. Chacko Cyriac
              </Link>
              <Link href="/contact" className="btn-secondary inline-block">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Experience Award-Winning Care</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have transformed their lives with our world-class plastic surgery services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block">
              Book Your Consultation
            </Link>
            <Link href="/gallery" className="btn-secondary inline-block">
              View Results Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
