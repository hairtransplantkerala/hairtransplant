"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  image?: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sona Rosey Jose",
      rating: 5,
      text: "Dr. Chacko Cyriac is nothing less than outstanding. He is down to earth, easy to talk professional and honest in his approach to work. I waited about 6 months to write this review just to be sure that there was no scar on my face after surgery. Dr. Chacko Cyriac is truly an artist. I am extremely happy with the result. Thank you so much doctor and your team for the service.",
    },
    {
      id: 2,
      name: "Aneesh Antony",
      rating: 5,
      text: "Dr Chacko Cyriac is a great plastic surgeon doing all aspects of Plastic and Cosmetic Surgery. He operated on me and am grateful for all the dedication and service. I Know he is skilled in several other areas like hair loss treatment, hair transplant, Gynecomastia surgery fat removal with liposuction etc. Thank you for your help Dr Cyriac",
    },
    {
      id: 3,
      name: "John Paul",
      rating: 5,
      text: "I have been going to Dr Chacko Cyriac in Kochi Kerala for my hair loss treatment. He was the only surgeon who told no need for surgery. I am very much satisfied with my results of treatment. Costs are also reasonable. Thank you Sir for your sincere advice.",
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
