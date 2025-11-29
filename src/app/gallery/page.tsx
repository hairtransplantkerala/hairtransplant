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
    { id: 'PRP', label: 'PRP Treatment'},
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
      before: '/images/gallery/fue-before-1.webp',
      after: '/images/gallery/fue-after-1.webp',
      timeline: '12 months post-op',
      grafts: '3500 grafts'
    },
    {
      id: 2,
      category: 'fue',
      procedure: 'FUE Hairline Restoration',
      before: '/images/gallery/fue-before-2.jpg',
      after: '/images/gallery/fue-after-2.jpg',
      timeline: '10 months post-op',
      grafts: '2800 grafts'
    },
    {
      id: 3,
      category: 'fut',
      procedure: 'FUT Hair Transplant - Advanced Hair Loss',
      before: '/images/gallery/fut-before-1.jpg',
      after: '/images/gallery/fut-after-1.jpg',
      timeline: '14 months post-op',
      grafts: '5000 grafts'
    },
    {
      id: 4,
      category: 'dhi',
      procedure: 'DHI Method - Frontal Hairline',
      before: '/images/gallery/dhi-before-1.jpg',
      after: '/images/gallery/dhi-after-1.jpg',
      timeline: '8 months post-op',
      grafts: '2200 grafts'
    },
    {
      id: 5,
      category: 'beard',
      procedure: 'Beard Transplant - Full Coverage',
      before: '/images/gallery/beard-before-1.jpg',
      after: '/images/gallery/beard-after-1.jpg',
      timeline: '6 months post-op',
      grafts: '1500 grafts'
    },
    {
      id: 6,
      category: 'female',
      procedure: 'Female Hair Loss Treatment - FUE',
      before: '/images/gallery/female-before-1.jpg',
      after: '/images/gallery/female-after-1.jpg',
      timeline: '10 months post-op',
      grafts: '2500 grafts'
    },
    {
      id: 7,
      category: 'eyebrow',
      procedure: 'Eyebrow Transplant Restoration',
      before: '/images/gallery/eyebrow-before-1.jpg',
      after: '/images/gallery/eyebrow-after-1.jpg',
      timeline: '5 months post-op',
      grafts: '400 grafts'
    },
    {
      id: 8,
      category: 'fue',
      procedure: 'FUE Crown Restoration',
      before: '/images/gallery/fue-before-3.jpg',
      after: '/images/gallery/fue-after-3.jpg',
      timeline: '11 months post-op',
      grafts: '3200 grafts'
    },
    {
      id: 9,
      category: 'PRP',
      procedure: 'PRP Treatment',
      before: '/images/gallery/prp-before.webp',
      after: '/images/gallery/prp-after.webp',
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
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Before & After Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
                  ? 'bg-gray-900 text-white shadow-lg scale-105'
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
                  <span className="inline-block bg-gray-100 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
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
              className="mt-4 text-gray-900 font-semibold hover:text-gray-700"
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
                <div className="text-4xl font-bold text-gray-900 mb-2">5000+</div>
                <p className="text-gray-600">Successful Procedures</p>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
                <p className="text-gray-600">Patient Satisfaction</p>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-gray-900 mb-2">25+</div>
                <p className="text-gray-600">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            These results could be yours. Schedule a free consultation to discuss your hair restoration goals with Dr. Chacko Cyriac.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block">
              Book Free Consultation
            </Link>
            <a href="tel:+918884447777" className="btn-secondary inline-block">
              Call Now: +91 9645921944
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
