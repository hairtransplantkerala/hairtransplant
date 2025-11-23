"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  procedure: string;
  rating: number;
  text: string;
  image?: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Mumbai, India",
      procedure: "FUE Hair Transplant - 3500 Grafts",
      rating: 5,
      text: "Dr. Chacko Cyriac and his team transformed my life! The procedure was painless, and the results exceeded my expectations. After 10 months, my hair looks completely natural. I'm so grateful for their expertise and care throughout the journey.",
    },
    {
      id: 2,
      name: "James Wilson",
      location: "London, UK",
      procedure: "FUT Hair Transplant - 4500 Grafts",
      rating: 5,
      text: "I traveled from UK specifically for Dr. Cyriac's expertise. His international training and experience are evident in every aspect. The facility is world-class, and the results are outstanding. Worth every penny and every mile traveled!",
    },
    {
      id: 3,
      name: "Priya Menon",
      location: "Kochi, Kerala",
      procedure: "Female Hair Loss Treatment",
      rating: 5,
      text: "As a woman dealing with hair loss, I was nervous about the procedure. Dr. Cyriac was incredibly understanding and professional. The FUE technique left no visible scarring, and my hair density has improved dramatically. I feel confident again!",
    },
    {
      id: 4,
      name: "Ahmed Al-Rashid",
      location: "Dubai, UAE",
      procedure: "Beard Transplant",
      rating: 5,
      text: "Always wanted a full beard but had patchy growth. Dr. Cyriac created a perfectly natural-looking beard that exceeded my expectations. The attention to detail in designing the beard pattern was impressive. Highly recommend!",
    },
    {
      id: 5,
      name: "Michael Chen",
      location: "Singapore",
      procedure: "DHI Hair Transplant - 2800 Grafts",
      rating: 5,
      text: "The DHI method was perfect for my hairline restoration. No shaving required, minimal downtime, and exceptional results. Dr. Cyriac's artistic approach to hairline design is what sets him apart. Very happy with my decision!",
    },
    {
      id: 6,
      name: "Arun Prakash",
      location: "Bangalore, India",
      procedure: "FUE + PRP Combination",
      rating: 5,
      text: "Opted for FUE with PRP therapy as recommended by Dr. Cyriac. The combination worked wonders! Recovery was quick, and my existing hair also became thicker. The team's post-operative care and follow-up were excellent.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-primary-50 to-white p-8 md:p-12 rounded-2xl shadow-xl">
      <Quote className="absolute top-8 left-8 text-primary-200 opacity-50" size={48} />
      
      <div className="max-w-4xl mx-auto">
        {/* Rating Stars */}
        <div className="flex justify-center mb-6">
          {[...Array(currentTestimonial.rating)].map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-current" size={24} />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
          "{currentTestimonial.text}"
        </p>

        {/* Patient Info */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-700">
              {currentTestimonial.name.charAt(0)}
            </span>
          </div>
          <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
          <p className="text-gray-600">{currentTestimonial.location}</p>
          <p className="text-sm text-primary-600 font-semibold mt-2">
            {currentTestimonial.procedure}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white shadow-lg hover:bg-primary-600 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white shadow-lg hover:bg-primary-600 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
