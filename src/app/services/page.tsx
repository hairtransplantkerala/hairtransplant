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
      description: "Dr. Chacko Cyriac's comprehensive Eterno-Protocol for hair loss management combines all treatment modalities to provide personalized care based on your unique needs, age, stage of baldness, and extent of hair loss.",
      image: "/images/services/et-protocol.webp",
      features: [
        "Customized treatment plan for each patient's unique condition",
        "All treatment options available - not just hair transplantation",
        "Suitable for men, women, and children with hair loss",
        "Treatment evolves as your condition changes over time",
        "No bias towards any single treatment method",
        "Focus on long-term hair health maintenance"
      ],
      ideal: "Ideal for anyone experiencing hair loss at any stage - provides the most appropriate treatment based on individual needs",
      link: "/et-protocol"
    },
    {
      title: "SC-FUE (Stem Cell FUE)",
      description: "Advanced FUE technique developed by Dr. Chacko Cyriac that maximizes stem cell harvest along with hair grafts during transplantation, ensuring improved graft survival and superior results.",
      image: "/images/services/fue.webp",
      features: [
        "Maximum stem cell harvest with hair grafts",
        "Improved graft survival rates",
        "No additional time or cost compared to regular FUE",
        "Individual follicles extracted with micro punches",
        "Almost no visible scarring",
        "Dr. Cyriac personally performs all graft extractions"
      ],
      ideal: "Ideal for patients seeking the best possible results from FUE hair transplantation with advanced stem cell benefits",
      link: "/stem-cell-fue"
    },
    {
      title: "InviScar FUT",
      description: "Dr. Chacko Cyriac's advanced FUT technique with technical modifications to minimize scarring. The Microscopically Dissected Elliptical Excision (MDEE) method ensures maximum graft yield with minimal visible evidence.",
      image: "/images/services/fut.webp",
      features: [
        "Minimized scar formation with advanced closure techniques",
        "Maximum graft yield in single session (up to 5000+ grafts)",
        "Microscopically dissected follicular units",
        "Proven method for extensive hair loss",
        "No additional cost for advanced technique",
        "Scar revision methods available if needed"
      ],
      ideal: "Ideal for extensive baldness requiring maximum coverage in a single session",
      link: "/inviscar-fut"
    },
    {
      title: "DHI Method",
      description: "Direct Hair Implantation using Choi implanter pen for precise control and maximum density. Hair follicles are implanted directly without pre-made incisions.",
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
      link: "/dhi"
    },
  ];

  const nonSurgicalTreatments = [
    {
      title: "UltraMax PRP",
      description: "Dr. Chacko Cyriac's advanced Platelet-Rich Plasma technique that produces consistent and superior results compared to regular PRP. Emerged as the best alternative to hair transplantation in Kochi, Kerala.",
      image: "/images/services/prp.webp",
      features: [
        "Strict adherence to harvest and preparation protocols",
        "Consistent and superior results",
        "Sessions every 5-6 months (not monthly)",
        "Uses your own blood - completely safe",
        "No surgery required",
        "Effective for men, women, and young adults (18+)"
      ],
      ideal: "Ideal for early-stage hair loss, thinning hair, young patients, and women experiencing hair loss",
      link: "/prp-therapy"
    },
    {
      title: "Mesotherapy for Hair Loss",
      description: "Non-surgical treatment with microinjections of vitamins, minerals, and growth factors directly into the scalp to stimulate hair growth and improve scalp health.",
      image: "/images/conditions/mesotherapy.webp",
      features: [
        "Direct nutrient delivery to hair follicles",
        "Reduces hair loss significantly",
        "Improves overall scalp health",
        "No downtime required",
        "Complements hair transplant procedures",
        "Safe and minimally invasive"
      ],
      ideal: "Ideal for early-stage hair loss, thinning hair, and maintenance therapy",
      link: "/mesotherapy-hair-loss"
    },
  ];

  const specializedServices = [
    {
      title: "Beard Transplant",
      description: "Specialized FUE technique to create or enhance beard density using hair follicles from the scalp, creating a natural and masculine appearance with customizable patterns.",
      image: "/images/services/beard.webp",
      features: [
        "Natural beard pattern creation",
        "Customizable density and shape",
        "Permanent results that grow naturally",
        "Scar coverage from injuries or burns",
        "FUE technique - minimal scarring",
        "Design goatee, mustache, or full beard"
      ],
      ideal: "Ideal for patchy or thin beards, and facial scar coverage",
      link: "/beard-transplant"
    },
    {
      title: "Eyebrow Transplant",
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
      link: "/eyebrow-transplant"
    },
  ];

  const hairLossConditions = [
    {
      title: "Hair Loss in Men",
      description: "Expert treatment for male pattern baldness and androgenetic alopecia. Dr. Chacko Cyriac evaluates each patient's stage of baldness, extent of hair loss, and age to recommend the most appropriate treatment from the full range of options.",
      image: "/images/conditions/hair-loss-men.webp",
      features: [
        "Pattern analysis using Norwood scale",
        "Comprehensive donor area assessment",
        "Customized treatment selection (not just transplantation)",
        "Long-term maintenance planning",
        "Age-appropriate treatment recommendations",
        "Prevention strategies for future hair loss"
      ],
      ideal: "Ideal for men experiencing pattern baldness at any stage - treatment tailored to individual needs",
      link: "/hair-loss-men"
    },
    {
      title: "Hair Loss in Women",
      description: "Specialized approach for female pattern hair loss with customized treatment plans. Hair transplantation is often the last option for women, with non-surgical treatments like UltraMax PRP, Mesotherapy, and Minoxidil prioritized first.",
      image: "/images/conditions/hair-loss-women.webp",
      features: [
        "Comprehensive hormonal evaluation",
        "Minoxidil therapy (FDA-approved for women)",
        "UltraMax PRP combination therapy",
        "Iron deficiency assessment and treatment",
        "Nutritional guidance for healthy hair",
        "DHI technique with minimal shaving when transplantation is needed"
      ],
      ideal: "Ideal for women experiencing diffuse thinning, pattern hair loss, or hormonal hair loss",
      link: "/hair-loss-women"
    },
    {
      title: "Hair Loss in Children",
      description: "Careful evaluation and age-appropriate treatments for pediatric hair loss. This is a classic example where the ET-Protocol is essential - all hair loss cannot be treated with hair transplantation, especially in young patients.",
      image: "/images/conditions/hair-loss-children.webp",
      features: [
        "Comprehensive medical evaluation for underlying causes",
        "Non-surgical treatment options prioritized",
        "UltraMax PRP for young patients (18+)",
        "Family counseling and support",
        "Long-term monitoring and follow-up care",
        "Psychological support and guidance"
      ],
      ideal: "Ideal for children and young adults with alopecia areata, trauma-related hair loss, or genetic conditions",
      link: "/hair-loss-children"
    },
    {
      title: "Failed Hair Transplant Repair",
      description: "Expert corrective surgery to fix unnatural results, poor density, visible scarring, and complications from previous procedures performed elsewhere.",
      image: "/images/conditions/failed-transplant.webp",
      features: [
        "Comprehensive assessment of previous work",
        "Hairline redesign for natural appearance",
        "Density enhancement in sparse areas",
        "Scar revision and camouflage techniques",
        "Advanced extraction from limited donor area",
        "Restoration of confidence and natural look"
      ],
      ideal: "Ideal for patients unhappy with previous hair transplant results from other clinics",
      link: "/failed-hair-transplant"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="container-custom">
          <h1 className="mb-4 text-white">Our Hair Loss Treatments & Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive range of advanced hair restoration procedures tailored to your unique needs by Dr. Chacko Cyriac. 
            All treatments available - not just hair transplantation.
          </p>
        </div>
      </section>

      {/* Advanced Treatments */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Advanced Hair Restoration Techniques</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Chacko Cyriac's proven methods developed over years of experience in Kochi, Kerala
            </p>
          </div>

          <div className="space-y-20">
            {advancedTreatments.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Non-Surgical Treatments */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Non-Surgical Options
            </div>
            <h2 className="mb-4">Hair Growth Stimulation Therapies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Safe and effective treatments without surgery - often the best alternative to hair transplantation
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
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Facial Hair & Eyebrow Restoration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert solutions beyond scalp hair restoration
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
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Hair Loss Conditions We Treat</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert care for different types of hair loss across all age groups - men, women, and children
            </p>
          </div>

          <div className="space-y-20">
            {hairLossConditions.map((condition, index) => (
              <ServiceCard key={index} service={condition} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gray-50 border-l-4 border-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Why All Treatment Options Matter</h3>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-start gap-3">
                <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                <span><strong>Not all hair loss can be treated with transplantation.</strong> The causes, stages, and extent of hair loss vary from person to person.</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                <span><strong>Different ages require different approaches.</strong> Young patients need different treatment than older patients. Hair transplantation is often not an option for teenagers.</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                <span><strong>Treatment evolves over time.</strong> As your condition changes, your treatment plan should adapt. That's why ongoing care is essential.</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                <span><strong>Safety is paramount.</strong> Dr. Chacko Cyriac evaluates each patient's overall health before recommending any procedure, ensuring the safest approach.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-white mb-4">Ready to Restore Your Hair?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized consultation with Dr. Chacko Cyriac to determine the best treatment option for your unique situation. 
              Get expert advice on whether you need hair transplantation or other treatments.
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
