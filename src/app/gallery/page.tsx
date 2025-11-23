'use client';

import { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Link from 'next/link';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Results' },
    { id: 'fue', label: 'FUE Hair Transplant' },
    { id: 'fut', label: 'FUT Hair Transplant' },
    { id: 'dhi', label: 'DHI Method' },
    { id: 'beard', label: 'Beard Transplant' },
    { id: 'eyebrow', label: 'Eyebrow Transplant' },
    { id: 'female', label: 'Female Hair Loss' },
  ];

  // Hair transplant gallery items with before/after images
  const galleryItems = [
    {
      id: 1,
      category: 'fue',
      procedure: 'FUE Hair Transplant - 3500 Grafts',
      before: 'https://images.unsplash.com/photo-1560869713-da86a9ec0744?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1622296089863-eb7fc47b3d72?w=800&h=600&fit=crop',
      timeline: '12 months post-op',
      grafts: '3500 grafts'
    },
    {
      id: 2,
      category: 'fue',
      procedure: 'FUE Hairline Restoration',
      before: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop',
      timeline: '10 months post-op',
      grafts: '2800 grafts'
    },
    {
      id: 3,
      category: 'fut',
      procedure: 'FUT Hair Transplant - Advanced Hair Loss',
      before: 'https://images.unsplash.com/photo-1542190891-2093d38760f2?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop',
      timeline: '14 months post-op',
      grafts: '5000 grafts'
    },
    {
      id: 4,
      category: 'dhi',
      procedure: 'DHI Method - Frontal Hairline',
      before: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      timeline: '8 months post-op',
      grafts: '2200 grafts'
    },
    {
      id: 5,
      category: 'beard',
      procedure: 'Beard Transplant - Full Coverage',
      before: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?w=800&h=600&fit=crop',
      timeline: '6 months post-op',
      grafts: '1500 grafts'
    },
    {
      id: 6,
      category: 'female',
      procedure: 'Female Hair Loss Treatment - FUE',
      before: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&h=600&fit=crop',
      timeline: '10 months post-op',
      grafts: '2500 grafts'
    },
    {
      id: 7,
      category: 'eyebrow',
      procedure: 'Eyebrow Transplant Restoration',
      before: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop',
      timeline: '5 months post-op',
      grafts: '400 grafts'
    },
    {
      id: 8,
      category: 'fue',
      procedure: 'FUE Crown Restoration',
      before: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&h=600&fit=crop',
      timeline: '11 months post-op',
      grafts: '3200 grafts'
    },
  ];

  const filteredGallery = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Before & After Gallery</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Real transformations from real patients. See the life-changing results achieved at Eterno Clinic.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container-custom py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all shadow-md ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGallery.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-96">
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
                {/* Before Label */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                  Before
                </div>
                {/* After Label */}
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                  After
                </div>
              </div>
              
              {/* Card Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category.toUpperCase()}
                  </span>
                  <span className="text-gray-500 text-sm font-medium">{item.grafts}</span>
                </div>
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

        {/* Empty State */}
        {filteredGallery.length === 0 && (
          <div className="text-center py-20">
            <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-500 text-lg font-medium">No results found in this category.</p>
            <button 
              onClick={() => setActiveCategory('all')}
              className="mt-4 text-primary-600 font-semibold hover:text-primary-700"
            >
              View All Results
            </button>
          </div>
        )}
      </div>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Understanding Your Results</h2>
            <p className="text-gray-600 text-lg mb-6">
              Every patient's journey is unique. Results vary based on hair type, extent of hair loss, 
              number of grafts, and individual healing. These photos represent actual patient outcomes 
              achieved at Eterno Clinic under the expert care of Dr. Chacko Cyriac.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4">
                <div className="text-4xl font-bold text-primary-600 mb-2">5000+</div>
                <p className="text-gray-600">Successful Procedures</p>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                <p className="text-gray-600">Patient Satisfaction</p>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
                <p className="text-gray-600">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            These results could be yours. Schedule a free consultation to discuss your hair restoration goals with Dr. Chacko Cyriac.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-block">
              Book Free Consultation
            </Link>
            <a href="tel:+918884447777" className="btn-secondary border-white text-white hover:bg-white/10 inline-block">
              Call Now: +91 888 444 7777
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
