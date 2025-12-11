import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Hair Transplant Services | FUE, FUT, PRP - Eterno Clinic",
  description: "Comprehensive hair restoration services including FUE, FUT, PRP, beard, eyebrow transplants by Dr. Chacko Cyriac in Kochi, Kerala.",
};

export default function ServicesPage() {
  const advancedTreatments = [
    {
      title: "ET Protocol",
      description: "Revolutionary protocol combining advanced techniques for maximum graft survival and natural results. Our premium treatment option.",
      image: "/images/services/et-protocol.webp",
      features: [
        "Maximum graft survival rate (95%+)",
        "Advanced preservation solutions",
        "Optimized surgical workflow",
        "Enhanced post-operative care",
        "Premium service with guaranteed results",
        "Combines best of all techniques"
      ],
      ideal: "Ideal for patients seeking the absolute best results with premium care",
      link: "/et-protocol"
    },
    {
      title: "Stem Cell FUE",
      description: "Revolutionary stem cell-enhanced FUE for superior results. Faster healing, better graft survival (90%), and improved scalp health through regenerative medicine.",
      image: "/images/services/fue.webp",
      features: [
        "90% graft survival rate",
        "Faster healing (2-3 days)",
        "Improved hair density (45% increase)",
        "Healthier scalp environment",
        "Stimulates existing hair growth",
        "Better results on scarred tissue"
      ],
      ideal: "Ideal for maximum results, depleted donor areas, and repair cases",
      link: "/stem-cell-fue"
    },
    {
      title: "InviScar FUT",
      description: "Advanced FUT technique with trichophytic closure for virtually invisible scarring. Maximum graft yield with minimal visible evidence.",
      image: "/images/services/fut.webp",
      features: [
        "Virtually invisible linear scar",
        "Maximum graft yield (5000-7000+)",
        "Hair grows through scar line",
        "Advanced closure techniques",
        "Single session mega coverage",
        "Cost-effective for large areas"
      ],
      ideal: "Ideal for extensive coverage with minimal visible scarring",
      link: "/inviscar-fut"
    },
    {
      title: "DHI Method",
      description: "Modified FUE technique where hair follicles are implanted directly using a Choi implanter pen, allowing for precise control and denser packing.",
      image: "/images/services/dhi.webp",
      features: [
        "No pre-made incisions needed",
        "Minimal bleeding during procedure",
        "Faster healing time",
        "Higher density possible (60 grafts/cm²)",
        "More control over angle and direction",
        "Less handling of grafts = better survival"
      ],
      ideal: "Ideal for frontal hairline work and creating maximum density",
      link: "/dhi"
    },
  ];

  const standardServices = [
    {
      title: "FUE Hair Transplant",
      description: "Advanced minimally invasive technique where individual hair follicles are extracted and transplanted. No linear scar, faster recovery, and natural-looking results.",
      image: "/images/services/fue.webp",
      features: [
        "No linear scarring",
        "Minimal downtime - back to work in 2-3 days",
        "Natural hairline design with artistic precision",
        "Suitable for body hair transplant",
        "Latest micro-FUE technology",
        "Can be repeated multiple times"
      ],
      ideal: "Ideal for patients who prefer short hairstyles and want minimal scarring",
      link: "/services/fue"
    },
    {
      title: "FUT Hair Transplant",
      description: "Traditional and proven method where a strip of hair-bearing scalp is removed and dissected into individual follicular units for transplantation.",
      image: "/images/services/fut.webp",
      features: [
        "Maximum graft yield in single session",
        "Cost-effective solution for extensive coverage",
        "Up to 5000 grafts in one session",
        "Excellent for advanced baldness",
        "Proven track record over 30+ years",
        "Higher graft survival rate"
      ],
      ideal: "Ideal for extensive hair loss coverage and maximum density",
      link: "/services/fut"
    },
  ];

  const nonSurgicalTreatments = [
    {
      title: "Mesotherapy for Hair Loss",
      description: "Non-surgical treatment with microinjections of vitamins, minerals, and growth factors directly into the scalp to stimulate hair growth.",
      image: "/images/conditions/mesotherapy.webp",
      features: [
        "Non-surgical procedure",
        "Direct nutrient delivery to follicles",
        "Reduces hair loss by 70%",
        "Improves scalp health",
        "No downtime required",
        "Complements hair transplant"
      ],
      ideal: "Ideal for early-stage hair loss, thinning hair, and maintenance therapy",
      link: "/mesotherapy-hair-loss"
    },
    {
      title: "PRP Therapy",
      description: "Non-surgical hair loss treatment using your own blood platelets to stimulate hair growth and strengthen existing hair follicles.",
      image: "/images/services/prp.webp",
      features: [
        "Natural growth stimulation",
        "No incisions or surgery",
        "Minimal side effects",
        "Quick recovery - immediate",
        "Complements hair transplants",
        "Multiple sessions for optimal results"
      ],
      ideal: "Ideal for early-stage hair loss, thinning hair, and post-transplant care",
      link: "/prp-therapy"
    },
  ];

  const specializedServices = [
    {
      title: "Beard Transplant",
      description: "Specialized technique to create or enhance beard density using hair follicles from the scalp, creating a natural and masculine appearance.",
      image: "/images/services/beard.webp",
      features: [
        "Natural beard pattern creation",
        "Customizable density and shape",
        "Permanent results",
        "Scar coverage capability",
        "FUE technique - minimal scarring",
        "Design goatee, mustache, or full beard"
      ],
      ideal: "Ideal for patchy or thin beards, and facial scar coverage",
      link: "/beard-transplant"
    },
    {
      title: "Eyebrow Transplant",
      description: "Precise transplantation to restore or enhance eyebrow shape and density, considering natural growth direction and aesthetic balance.",
      image: "/images/services/eyebrow.webp",
      features: [
        "Natural appearance",
        "Customized shape to complement face",
        "Permanent solution",
        "Minimal scarring with FUE",
        "Artistic precision",
        "Single hair grafts for realism"
      ],
      ideal: "Ideal for over-plucked, thinning eyebrows, or congenital absence",
      link: "/eyebrow-transplant"
    },
  ];

  const hairLossConditions = [
    {
      title: "Hair Loss in Men",
      description: "Expert treatment for male pattern baldness and androgenetic alopecia with customized approaches based on Norwood scale classification.",
      image: "/images/conditions/hair-loss-men.webp",
      features: [
        "Pattern analysis using Norwood scale",
        "Comprehensive donor area assessment",
        "Customized FUE/FUT technique selection",
        "Long-term maintenance planning",
        "Hairline design tailored to age and facial structure",
        "Prevention strategies for future hair loss"
      ],
      ideal: "Ideal for men experiencing pattern baldness at any stage",
      link: "/hair-loss-men"
    },
    {
      title: "Hair Loss in Women",
      description: "Specialized approach for female pattern hair loss with customized treatment plans considering hormonal factors, lifestyle, and aesthetic goals.",
      image: "/images/conditions/hair-loss-women.webp",
      features: [
        "Comprehensive hormonal evaluation",
        "Customized DHI technique with minimal shaving",
        "Ludwig scale classification assessment",
        "PRP combination therapy for enhanced results",
        "Focus on maintaining existing hair density",
        "Discreet treatment options"
      ],
      ideal: "Ideal for women experiencing diffuse thinning or pattern hair loss",
      link: "/hair-loss-women"
    },
    {
      title: "Hair Loss in Children",
      description: "Careful evaluation and age-appropriate treatments for pediatric hair loss conditions with focus on long-term outcomes and psychological well-being.",
      image: "/images/conditions/hair-loss-children.webp",
      features: [
        "Comprehensive medical evaluation for underlying causes",
        "Non-surgical treatment options prioritized",
        "Family counseling and support",
        "Long-term monitoring and follow-up care",
        "Age-appropriate treatment planning",
        "Psychological support and guidance"
      ],
      ideal: "Ideal for children with alopecia areata, trauma-related hair loss, or genetic conditions",
      link: "/hair-loss-children"
    },
    {
      title: "Failed Hair Transplant Repair",
      description: "Expert corrective surgery to fix unnatural results, poor density, visible scarring, and complications from previous procedures.",
      image: "/images/conditions/failed-transplant.webp",
      features: [
        "Comprehensive assessment of previous work",
        "Hairline redesign for natural appearance",
        "Density enhancement in sparse areas",
        "Scar revision and camouflage techniques",
        "Advanced extraction from limited donor area",
        "Restoration of confidence and natural look"
      ],
      ideal: "Ideal for patients unhappy with previous hair transplant results",
      link: "/failed-hair-transplant"
    },
  ];

  const comparisonData = [
    { feature: "Scarring", fue: "Tiny dots (invisible)", fut: "Linear scar", dhi: "Tiny dots (invisible)", scfue: "Minimal" },
    { feature: "Recovery Time", fue: "7-10 days", fut: "10-14 days", dhi: "5-7 days", scfue: "2-3 days" },
    { feature: "Grafts per Session", fue: "2000-4000", fut: "3000-7000+", dhi: "2000-3500", scfue: "3000-5000" },
    { feature: "Graft Survival", fue: "70-80%", fut: "80-85%", dhi: "80-90%", scfue: "90%+" },
    { feature: "Procedure Time", fue: "4-8 hours", fut: "4-6 hours", dhi: "6-9 hours", scfue: "7-10 hours" },
    { feature: "Best For", fue: "Short hairstyles", fut: "Maximum coverage", dhi: "Frontal hairline", scfue: "Premium results" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="container-custom">
          <h1 className="mb-4 text-white">Our Hair Loss Treatments & Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive range of advanced hair restoration procedures tailored to your unique needs by Dr. Chacko Cyriac
          </p>
        </div>
      </section>

      {/* Advanced Treatments */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Latest Hair Restoration Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge techniques for superior results
            </p>
          </div>

          <div className="space-y-20">
            {advancedTreatments.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Standard Services 
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Standard Procedures
            </div>
            <h2 className="mb-4">Proven Hair Transplant Methods</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Time-tested techniques with excellent results
            </p>
          </div>

          <div className="space-y-20">
            {standardServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Non-Surgical Treatments */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Non-Surgical Options
            </div>
            <h2 className="mb-4">Hair Growth Stimulation Therapies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Effective treatments without surgery
            </p>
          </div>

          <div className="space-y-20">
            {nonSurgicalTreatments.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Specialized Services
            </div>
            <h2 className="mb-4">Facial Hair & Eyebrow Restoration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert solutions beyond scalp hair
            </p>
          </div>

          <div className="space-y-20">
            {specializedServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Hair Loss Conditions */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Specialized Conditions
            </div>
            <h2 className="mb-4">Hair Loss Conditions We Treat</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert care for different types of hair loss across all age groups
            </p>
          </div>

          <div className="space-y-20">
            {hairLossConditions.map((condition, index) => (
              <ServiceCard key={index} service={condition} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-white mb-4">Ready to Restore Your Hair?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized consultation with Dr. Chacko Cyriac to discuss the best treatment option for your unique situation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-block">
                Book Consultation
              </Link>
              <Link href="/gallery" className="btn-secondary inline-block">
                View Results Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Service Card Component
function ServiceCard({ service, index }: { service: any; index: number }) {
  return (
    <div 
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
        <h2 className="text-3xl md:text-4xl mb-4">{service.title}</h2>
        <p className="text-gray-600 text-lg mb-6">{service.description}</p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Key Features:</h3>
          <ul className="space-y-3">
            {service.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-100 border-l-4 border-gray-900 p-4 mb-6">
          <p className="text-gray-900 font-semibold">✓ {service.ideal}</p>
        </div>

        <Link href={service.link} className="btn-primary inline-flex items-center gap-2">
          Learn More About {service.title}
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
