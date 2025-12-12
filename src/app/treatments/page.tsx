import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";

export const metadata = {
  title: "Latest Hair Loss Treatments | Advanced Solutions | Eterno Clinic",
  description: "Explore the latest advances in hair loss treatment including specialized care for men, women, children, failed transplant repair, mesotherapy, and stem cell FUE at Eterno Clinic.",
  keywords: "hair loss treatment, male pattern baldness, female hair loss, pediatric alopecia, hair transplant repair, mesotherapy, stem cell therapy",
};

export default function TreatmentsPage() {
  const treatments = [
    {
      title: "Hair Loss in Men",
      description: "Expert treatment for male pattern baldness and androgenetic alopecia using advanced FUE and FUT techniques",
      image: "/images/conditions/hair-loss-men.webp",
      slug: "hair-loss-men",
      tag: "Most Common",
      features: [
        "Personalized treatment plans",
        "Natural-looking hairline restoration",
        "Minimal downtime and scarring",
        "Long-lasting permanent results"
      ],
      stats: { success: "98%", patients: "7000+", recovery: "7-10 days" }
    },
    {
      title: "Hair Loss in Women",
      description: "Specialized care for female pattern hair loss with DHI techniques and customized treatment protocols",
      image: "/images/conditions/hair-loss-women.webp",
      slug: "hair-loss-women",
      tag: "Specialized Care",
      features: [
        "Gentle DHI (Direct Hair Implantation)",
        "Preservation of existing hair",
        "No shaving required options",
        "Natural density restoration"
      ],
      stats: { success: "97%", patients: "1500+", recovery: "5-7 days" }
    },
    {
      title: "Hair Loss in Children",
      description: "Gentle treatment for pediatric alopecia and childhood hair loss conditions with age-appropriate care",
      image: "/images/conditions/hair-loss-children.webp",
      slug: "hair-loss-children",
      tag: "Pediatric Care",
      features: [
        "Child-friendly environment",
        "Non-surgical options prioritized",
        "Family-centered approach",
        "Psychological support included"
      ],
      stats: { success: "95%", patients: "200+", recovery: "Varies" }
    },
    {
      title: "Failed Hair Transplant Repair",
      description: "Expert corrective surgery to fix unnatural results, scarring, and complications from previous procedures",
      image: "/images/conditions/failed-transplant.webp",
      slug: "failed-hair-transplant",
      tag: "Corrective Surgery",
      features: [
        "Scar revision techniques",
        "Hairline redesign",
        "Density improvement",
        "Plug removal and replacement"
      ],
      stats: { success: "96%", patients: "500+", recovery: "10-14 days" }
    },
    {
      title: "Mesotherapy for Hair Loss",
      description: "Non-surgical nutrient injections for natural hair regrowth stimulation and scalp health improvement",
      image: "/images/conditions/mesotherapy.webp",
      slug: "mesotherapy-hair-loss",
      tag: "Non-Surgical",
      features: [
        "Vitamin and mineral cocktails",
        "Improved blood circulation",
        "No downtime required",
        "Complements hair transplant"
      ],
      stats: { success: "85%", patients: "3000+", recovery: "None" }
    },
    {
      title: "Stem Cell FUE",
      description: "Revolutionary regenerative medicine for 90% graft survival using cutting-edge stem cell technology",
      image: "/images/conditions/stem-cell.webp",
      slug: "stem-cell-fue",
      tag: "Advanced Tech",
      features: [
        "90% graft survival rate",
        "Faster healing process",
        "Enhanced hair growth",
        "Regenerative benefits"
      ],
      stats: { success: "90%", patients: "800+", recovery: "5-7 days" }
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Advanced Solutions
            </div>
            <h1 className="mb-6 text-white">The Latest in Hair Loss Treatments</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              For the recent advances in hair loss treatment we have incorporated into our practice. From specialized care for different age groups to cutting-edge regenerative therapies, we offer comprehensive solutions tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-center">
                Schedule Consultation
              </Link>
              <Link href="/gallery" className="btn-secondary text-center">
                View Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Tag Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                      {treatment.tag}
                    </span>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-white text-3xl font-bold mb-2">
                      {treatment.title}
                    </h2>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {treatment.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{treatment.stats.success}</div>
                      <div className="text-xs text-gray-600 mt-1">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{treatment.stats.patients}</div>
                      <div className="text-xs text-gray-600 mt-1">Patients Treated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{treatment.stats.recovery}</div>
                      <div className="text-xs text-gray-600 mt-1">Recovery Time</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h3>
                    <ul className="space-y-2">
                      {treatment.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="text-gray-900 flex-shrink-0 mt-1 mr-3" size={18} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/${treatment.slug}`}
                    className="group/btn inline-flex items-center justify-center w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition-all duration-300"
                  >
                    Learn More About This Treatment
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Treatments */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">Why Choose Our Advanced Treatments ?</h2>
              <p className="text-lg text-gray-600">
                Dr. Chacko Cyriac stays at the forefront of hair restoration technology and techniques
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Evidence-Based Protocols</h3>
                    <p className="text-gray-600">
                      All treatments backed by scientific research and proven clinical outcomes
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Personalized Approach</h3>
                    <p className="text-gray-600">
                      Customized treatment plans based on your unique hair loss pattern and goals
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">International Standards</h3>
                    <p className="text-gray-600">
                      Training and techniques learned from leading institutions worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comprehensive Care</h3>
                    <p className="text-gray-600">
                      From consultation to post-treatment follow-up, we're with you every step
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-white mb-4">Not Sure Which Treatment Is Right for You ?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a comprehensive consultation with Dr. Chacko Cyriac. We'll assess your condition and recommend the most effective treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary inline-block">
                Book Free Consultation
              </Link>
              <Link href="/about" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 inline-block">
                Meet Dr. Chacko Cyriac
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
