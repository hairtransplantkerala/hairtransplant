import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import ServiceImage from "@/components/ServiceImage";

export const metadata = {
  title: "Hair Transplant Services | FUE, FUT, PRP - Eterno Clinic",
  description: "Comprehensive hair restoration services including FUE, FUT, PRP, beard, eyebrow transplants by Dr. Chacko Cyriac in Kochi, Kerala.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "FUE Hair Transplant",
      subtitle: "Follicular Unit Extraction",
      description: "Advanced minimally invasive technique where individual hair follicles are extracted and transplanted. No linear scar, faster recovery, and natural-looking results.",
      image: "/images/services/fue.webp",
      features: [
        "No linear scarring",
        "Minimal downtime - back to work in 2-3 days",
        "Natural hairline design with artistic precision",
        "Suitable for body hair transplant",
        "Latest micro-FUE technology with microscopic precision",
        "Can be repeated multiple times if needed"
      ],
      ideal: "Ideal for patients who prefer short hairstyles and want minimal scarring",
      recoveryTime: "7-10 days",
      procedure: "4-8 hours",
      results: "Visible in 6-12 months",
      link: "/services/fue"
    },
    {
      title: "FUT Hair Transplant",
      subtitle: "Follicular Unit Transplantation (Strip Method)",
      description: "Traditional and proven method where a strip of hair-bearing scalp is removed and dissected into individual follicular units for transplantation. Offers maximum graft yield.",
      image: "/images/services/fut.webp",
      features: [
        "Maximum graft yield in single session",
        "Cost-effective solution for extensive coverage",
        "Single session for large areas (up to 5000 grafts)",
        "Excellent for advanced baldness (Norwood 5-7)",
        "Proven track record over 30+ years",
        "Higher graft survival rate"
      ],
      ideal: "Ideal for extensive hair loss coverage and maximum density",
      recoveryTime: "10-14 days",
      procedure: "4-6 hours",
      results: "Visible in 8-12 months",
      link: "/services/fut"
    },
    {
      title: "DHI Method",
      subtitle: "Direct Hair Implantation",
      description: "Modified FUE technique where hair follicles are implanted directly using a Choi implanter pen, allowing for precise control, denser packing, and no need for pre-made incisions.",
      image: "/images/services/dhi.webp",
      features: [
        "No pre-made incisions needed",
        "Minimal bleeding during procedure",
        "Faster healing time",
        "Higher density possible (up to 60 grafts/cm²)",
        "More control over angle and direction",
        "Less handling of grafts = better survival"
      ],
      ideal: "Ideal for frontal hairline work and creating maximum density",
      recoveryTime: "5-7 days",
      procedure: "6-9 hours",
      results: "Visible in 6-12 months",
      link: "/services/dhi"
    },
    {
      title: "PRP Treatment",
      subtitle: "Platelet-Rich Plasma Therapy",
      description: "Non-surgical hair loss treatment using your own blood platelets to stimulate hair growth and strengthen existing hair follicles. Natural and safe approach.",
      image: "/images/services/prp.webp",
      features: [
        "Non-surgical procedure - no incisions",
        "Natural growth stimulation using your own blood",
        "Minimal side effects and risks",
        "Quick recovery - resume activities immediately",
        "Complementary to hair transplants for better results",
        "Multiple sessions recommended for optimal results"
      ],
      ideal: "Ideal for early-stage hair loss, thinning hair, and post-transplant care",
      recoveryTime: "Immediate",
      procedure: "30-45 minutes",
      results: "Visible in 3-6 months",
      link: "/services/prp"
    },
    {
      title: "Beard Transplant",
      subtitle: "Facial Hair Restoration",
      description: "Specialized technique to create or enhance beard density using hair follicles from the scalp, creating a natural and masculine appearance with customizable patterns.",
      image: "/images/services/beard.webp",
      features: [
        "Natural beard pattern creation",
        "Customizable density and shape",
        "Permanent results that grow naturally",
        "Scar coverage from injuries or burns",
        "FUE technique used - minimal scarring",
        "Can design goatee, mustache, or full beard"
      ],
      ideal: "Ideal for patchy or thin beards, and facial scar coverage",
      recoveryTime: "7-10 days",
      procedure: "3-5 hours",
      results: "Visible in 6-9 months",
      link: "/services/beard"
    },
    {
      title: "Eyebrow Transplant",
      subtitle: "Eyebrow Restoration",
      description: "Precise transplantation to restore or enhance eyebrow shape and density, considering natural growth direction and aesthetic balance for perfect facial harmony.",
      image: "/images/services/eyebrow.webp",
      features: [
        "Natural appearance matching facial features",
        "Customized shape to complement face",
        "Permanent solution to over-plucking",
        "Minimal scarring with FUE technique",
        "Artistic precision and attention to detail",
        "Single hair grafts for realistic appearance"
      ],
      ideal: "Ideal for over-plucked, thinning eyebrows, or congenital absence",
      recoveryTime: "5-7 days",
      procedure: "2-3 hours",
      results: "Visible in 4-6 months",
      link: "/services/eyebrow"
    },
  ];

  const specializedTreatments = [
    {
      title: "Hair Loss in Women",
      description: "Specialized approach for female pattern hair loss with customized treatment plans considering hormonal factors, lifestyle, and aesthetic goals. We understand women's hair loss is different.",
      approach: ["Hormonal evaluation", "Customized FUE technique", "Minimal shaving options", "PRP combination therapy"]
    },
    {
      title: "Hair Loss in Children",
      description: "Careful evaluation and age-appropriate treatments for pediatric hair loss conditions with focus on long-term outcomes and psychological well-being.",
      approach: ["Comprehensive medical evaluation", "Non-surgical options first", "Family counseling", "Long-term monitoring"]
    },
    {
      title: "Scar Hair Transplant",
      description: "Advanced techniques to restore hair growth in scarred areas from injuries, burns, or previous surgeries. Camouflage scars naturally with hair growth.",
      approach: ["Scar tissue preparation", "Modified extraction technique", "Higher density packing", "Multiple session planning"]
    },
    {
      title: "Body Hair Transplant",
      description: "Using body hair as donor source when scalp donor area is limited, expanding treatment possibilities for extensive baldness. Innovative solution for advanced cases.",
      approach: ["Body hair assessment", "Chest/beard hair extraction", "Texture matching", "Strategic placement"]
    },
  ];

  const comparisonData = [
    { feature: "Scarring", fue: "Tiny dots (invisible)", fut: "Linear scar", dhi: "Tiny dots (invisible)" },
    { feature: "Recovery Time", fue: "7-10 days", fut: "10-14 days", dhi: "5-7 days" },
    { feature: "Grafts per Session", fue: "2000-4000", fut: "3000-5000+", dhi: "2000-3500" },
    { feature: "Shaving Required", fue: "Yes (donor area)", fut: "Yes (donor area)", dhi: "Minimal/No" },
    { feature: "Procedure Time", fue: "4-8 hours", fut: "4-6 hours", dhi: "6-9 hours" },
    { feature: "Best For", fue: "Short hairstyles", fut: "Maximum coverage", dhi: "Frontal hairline" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="container-custom">
          <h1 className="mb-4 text-white">Our Hair Loss Treatments</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive range of advanced hair restoration procedures tailored to your unique needs by Dr. Chacko Cyriac
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-block bg-gray-200 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {service.subtitle}
                  </div>
                  <h2 className="text-3xl md:text-4xl mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                      <div className="text-2xl font-bold text-gray-900">{service.procedure}</div>
                      <div className="text-sm text-gray-600">Procedure Time</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                      <div className="text-2xl font-bold text-gray-900">{service.recoveryTime}</div>
                      <div className="text-sm text-gray-600">Recovery</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                      <div className="text-2xl font-bold text-gray-900">{service.results}</div>
                      <div className="text-sm text-gray-600">Results</div>
                    </div>
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
                  <ServiceImage src={service.image} alt={service.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Compare Hair Transplant Methods</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the right technique for your needs
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">FUE</th>
                  <th className="px-6 py-4 text-center">FUT</th>
                  <th className="px-6 py-4 text-center">DHI</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.fue}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.fut}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.dhi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Specialized Treatments */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Specialized Treatments</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced solutions for specific hair loss conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specializedTreatments.map((treatment, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200">
                <h3 className="text-2xl font-bold mb-3">{treatment.title}</h3>
                <p className="text-gray-600 mb-6">{treatment.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Our Approach:</h4>
                  <ul className="space-y-2">
                    {treatment.approach.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle className="text-gray-900 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="inline-flex items-center text-gray-900 font-semibold hover:text-black">
                  Learn More <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
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
