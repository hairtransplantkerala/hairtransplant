"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export default function GalleryCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryItems = [
    {
      id: 1,
      procedure: "FUE Hair Transplant - 3500 Grafts",
      before: "/images/gallery/fue-before-1.webp",
      after: "/images/gallery/fue-after-1.webp",
      timeline: "12 months post-op",
    },
    {
      id: 2,
      procedure: "FUE Hairline Restoration",
      before: "/images/gallery/fue-before-2.webp",
      after: "/images/gallery/fue-after-2.webp",
      timeline: "10 months post-op",
    },
    {
      id: 3,
      procedure: "FUT Hair Transplant",
      before: "/images/gallery/fut-before-1.webp",
      after: "/images/gallery/fut-after-1.webp",
      timeline: "14 months post-op",
    },
    {
      id: 4,
      procedure: "DHI Method",
      before: "/images/gallery/dhi-before-1.webp",
      after: "/images/gallery/dhi-after-1.webp",
      timeline: "8 months post-op",
    },
    {
      id: 5,
      procedure: "Beard Transplant",
      before: "/images/gallery/beard-before-1.webp",
      after: "/images/gallery/beard-after-1.webp",
      timeline: "6 months post-op",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {galleryItems.map((item) => (
            <div key={item.id} className="min-w-full">
              <div className="relative h-[400px] md:h-[500px]">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={item.before}
                      alt="Before hair transplant"
                      className="object-cover"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={item.after}
                      alt="After hair transplant"
                      className="object-cover"
                    />
                  }
                  position={50}
                  className="h-full"
                />
                {/* Before/After Labels */}
                <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                  Before
                </div>
                <div className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                  After
                </div>
              </div>
              
              {/* Info Section */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.procedure}</h3>
                <p className="text-gray-600 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.timeline}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-gray-900" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="text-gray-900" size={24} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {galleryItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-gray-900 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
