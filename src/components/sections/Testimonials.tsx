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
    {
      id: 4,
      name: "Glian Tony Antonio",
      rating: 5,
      text: "I have nothing but total joy in writing this review for Dr Chacko Cyriac.... I have been doing hair loss treatment with him. He has been guiding me through the months and years....  Unlike most centers he advised me against aggressive treatments and to instead have a steady long term approach.... Certainly not running for business. Thank you Sir for your help.",
    },
    {
      id: 5,
      name: "Ginesh K George",
      rating: 5,
      text: "I had my hair transplant surgery done by Dr. Chacko 5 years back and had a wonderful result. Moreover he is not Business minded in his profession, educates his patients in the right way and such a simple person to deal with. He had done an Ear surgery also for my wife and the result was again outstanding. He is a God gifted person no doubt. God Bless.",
    },
    {
      id: 6,
      name: "Yasar Arafath",
      rating: 5,
      text: "I had my hair loss treatment with Dr Chacko Cyriac. He is a genuine plastic surgeon who will not hesitate to say the truth even if it is bad. He had guided me well. Thanks a lot sir for the sincere advice.",
    },
    {
      id: 7,
      name: "Vishal James",
      rating: 5,
      text: "Thank you doc for the hospitality. Had great results from the very first procedure. The care and hospitality was upto the mark. Was very happy to see my results.",
    },
    {
      id: 8,
      name: "Muhammad Rihan",
      rating: 5,
      text: "Thank you Dr Chacko for doing my scalp surgery...I had an electric burn injury to my head causing a big wound on my head with bone damage....After plastic surgery by Dr Chacko Cyriac I am so happy the wounds have all healed. My entire family is grateful. Thank you sir",
    },
    {
      id: 9,
      name: "Saikishan Sasi Kumar Menon",
      rating: 5,
      text: "Thank you so much Dr Chacko Cyriac for treating my hair loss problem. First, he helped me understand my problem before moving forward to start the treatment.The manner in which he explained the condition, treatment plan and the possible outcomes was definitely helpful. Moreover, the ease by which he does procedures while keeping one comfortable is truly amazing. I have been a patient of his for more than a year and the results I have been getting are extremely satisfying.Thank you so much for your help and support.",
    },
    {
      id: 10,
      name: "Shijil A C",
      rating: 5,
      text: "I was looking to get my hair transplant for a long time. I had gone to several clinics and places to get consultation; I wasn't impressed at all. Then I finally landed up at the Eterno hair transplant center. The way Dr. Chacko cyriac explained everything was very impressive. The doctor made me understand the process and structure in a much more friendly manner.I'm really impressed with your great service. Thank you, Dr. Chacko, for your wonderful service and thanks for your entire team. It's been now 7 weeks over after the Hair transplant surgery, eagerly waiting to see my final result.",
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
    <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">
      <Star className="absolute top-8 left-8 text-gray-300 opacity-50" size={48} />
      
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
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">
              {currentTestimonial.name.charAt(0)}
            </span>
          </div>
          <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
          <p className="text-sm text-gray-600 font-semibold mt-2">Verified Patient</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-900 hover:text-white transition-colors border border-gray-200"
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
                    ? "bg-gray-900 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-900 hover:text-white transition-colors border border-gray-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
