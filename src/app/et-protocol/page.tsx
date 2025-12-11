import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Users, Heart, Baby, Microscope, Target, TrendingUp, Shield } from "lucide-react";

export const metadata = {
  title: "ET-Protocol | Personalized Hair Loss Treatment | Eterno Clinic Kochi",
  description: "Dr. Chacko Cyriac's revolutionary ET-Protocol (Eterno-Protocol) for comprehensive hair loss management. Customized treatment plans for men, women, and children in Kochi, Kerala.",
  keywords: "ET protocol, Eterno protocol, personalized hair loss treatment, customized hair restoration, comprehensive hair loss management Kochi",
};

export default function ETProtocolPage() {
  const benefits = [
    {
      icon: Target,
      title: "Personalized Assessment",
      description: "Comprehensive evaluation of your unique hair loss pattern, stage, extent, and age-specific requirements"
    },
    {
      icon: Microscope,
      title: "Evidence-Based Approach",
      description: "No bias towards any single treatment. Recommendations based on clinical evidence and decades of experience with all techniques"
    },
    {
      icon: TrendingUp,
      title: "Adaptive Treatment",
      description: "As your condition evolves, treatments adapt. Regular monitoring ensures optimal results at every stage"
    },
    {
      icon: Shield,
      title: "Holistic Management",
      description: "Combines medical treatments, surgical procedures, and lifestyle modifications for comprehensive care"
    },
  ];

  const whoItHelps = [
    {
      icon: Users,
      title: "Men with Hair Loss",
      description: "From early-stage thinning to advanced baldness, the ET-Protocol determines whether you need medical therapy, PRP, hair transplant, or a combination approach."
    },
    {
      icon: Heart,
      title: "Women with Hair Loss",
      description: "Given the different causes and extent of female hair loss, the protocol ensures all treatment options are considered. Hair transplantation is typically the last option for women."
    },
    {
      icon: Baby,
      title: "Children & Adolescents",
      description: "A classic example of when the ET-Protocol is most essential. Not all childhood hair loss can be treated with transplantation, making comprehensive evaluation crucial."
    },
  ];

  const principles = [
    "Thorough diagnosis to identify root causes of hair loss",
    "Stage-specific treatment recommendations based on Norwood or Ludwig scale",
    "Age-appropriate solutions considering future hair loss patterns",
    "Integration of medical, non-surgical, and surgical treatments",
    "Consideration of donor area preservation for long-term planning",
    "Patient lifestyle, budget, and downtime preferences",
    "Regular follow-ups to monitor progress and adjust treatments",
    "Realistic expectations with honest communication about outcomes"
  ];

  const treatmentOptions = [
    {
      category: "Medical Treatments",
      options: [
        "Minoxidil (topical solution)",
        "Finasteride (oral medication)",
        "Dutasteride (advanced DHT blocker)",
        "Nutritional supplementation",
        "Hormonal therapy (when indicated)"
      ]
    },
    {
      category: "Non-Surgical Procedures",
      options: [
        "PRP (Platelet-Rich Plasma) therapy",
        "Mesotherapy scalp injections",
        "Low-level laser therapy",
        "Stem cell therapy",
        "Scalp micropigmentation"
      ]
    },
    {
      category: "Surgical Solutions",
      options: [
        "FUE (Follicular Unit Extraction)",
        "FUT (Follicular Unit Transplantation)",
        "DHI (Direct Hair Implantation)",
        "Body hair transplant",
        "Corrective/revision surgery"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Revolutionary Treatment Approach
            </div>
            <h1 className="mb-6 text-white">The ET-Protocol</h1>
            <p className="text-2xl text-gray-300 mb-4 font-semibold">
              Eterno-Protocol for Comprehensive Hair Loss Management
            </p>
            <p className="text-xl text-gray-400 mb-8">
              Dr. Chacko Cyriac's personalized, evidence-based approach to treating all types of hair loss
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-block text-center">
                Get Your Personalized Assessment
              </Link>
              <Link href="/gallery" className="btn-secondary inline-block text-center">
                View Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">What is the ET-Protocol?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Though a Plastic Surgeon by training, <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black">Dr. Chacko Cyriac</Link> provides all medical treatments for hair loss, not just hair transplantation. He firmly believes that all treatments have definitive indications and limitations too.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                With no bias towards any one type of treatment and with his wide range of experience with all techniques, he has developed the <strong>ET-Protocol</strong> (Eterno-Protocol) for comprehensive hair loss management .
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This personalized approach ensures that each patient receives the most appropriate treatment based on their specific cause of hair loss, stage of baldness, extent of hair loss, age, and individual requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Important */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Following the ET-Protocol is Essential</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One-size-fits-all approaches fail because every patient's hair loss is unique. The ET-Protocol provides customized solutions for optimal results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">Who Benefits from the ET-Protocol?</h2>
            <div className="space-y-6">
              {whoItHelps.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-gray-900">
                    <div className="flex items-start gap-6">
                      <div className="bg-gray-900 p-4 rounded-full flex-shrink-0">
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">Core Principles of the ET-Protocol</h2>
            <p className="text-lg text-gray-700 text-center mb-10">
              Dr. Cyriac's decades of experience with all hair restoration techniques enable him to provide unbiased, evidence-based recommendations.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-6 text-center">Comprehensive Treatment Options Available</h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              The ET-Protocol draws from a complete spectrum of proven hair loss treatments
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {treatmentOptions.map((category, index) => (
                <div key={index} className="bg-gradient-to-b from-gray-50 to-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 border-b-2 border-gray-900 pb-3">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.options.map((option, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-700 text-sm">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Not All Hair Loss Can Be Treated with Hair Transplantation
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                This is a fundamental principle of the ET-Protocol. Hair transplantation is a powerful tool, but it's not always the right solution. Some patients benefit more from:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• Medical therapy to stabilize hair loss before considering surgery</li>
                <li>• PRP or mesotherapy to stimulate dormant follicles</li>
                <li>• Combination approaches for maximum effectiveness</li>
                <li>• Delayed transplantation until hair loss pattern stabilizes</li>
              </ul>
              <p className="text-lg text-gray-700 mt-4 font-semibold">
                Therefore, you should choose a clinic in Kochi where <strong>all different options are available</strong>, not just hair transplantation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  What is the duration of treatment as per this protocol?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  There is no definitive duration of therapy. As the problem evolves, treatments change. The requirements too change with time. Therefore, we encourage our patients to return to us regularly to maintain a healthy head of hair.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Can this protocol be applied for ladies?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, absolutely. Given the different causes and extent of hair loss amongst women, it is definitely necessary to provide all treatment options. Hair transplantation is typically the last option for female patients.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  How about hair loss in young boys and girls?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This is a classic example of when the ET-Protocol is most essential. All hair loss cannot be treated with hair transplantation. Young patients require comprehensive evaluation and age-appropriate treatments that may include medical therapy, PRP, nutritional support, and lifestyle modifications.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Does Dr. Cyriac perform all the treatments himself?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes. Dr. Chacko Cyriac personally performs all medical treatments and hair transplant procedures. This ensures consistent quality, personalized care, and optimal results for every patient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Cyriac */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Why Dr. Chacko Cyriac for the ET-Protocol?</h2>
            <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With <strong>22+ years of experience</strong> practicing almost all techniques in hair loss management, Dr. Cyriac has the unique advantage of providing completely unbiased recommendations .
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                His training as an <strong>MCh Plastic Surgeon from PGI Chandigarh</strong> combined with <strong>international training from UK, USA, Canada, and Singapore</strong> ensures world-class expertise in every aspect of hair restoration.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">7000+</div>
                <p className="text-gray-300">Patients Treated</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">22+</div>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">26+</div>
                <p className="text-gray-300">Countries Served</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">98%</div>
                <p className="text-gray-300">Success Rate</p>
              </div>
            </div>
            <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black inline-flex items-center gap-2 text-lg">
              Learn More About Dr. Cyriac <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Discover How the ET-Protocol Can Help You</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a comprehensive consultation to learn how the ET-Protocol can be best applied to your unique hair loss situation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="btn-primary inline-block">
              Book Your Assessment
            </Link>
            <Link href="/gallery" className="btn-secondary inline-block">
              View Our Results
            </Link>
          </div>
          <a href="tel:+919645921944" className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <Phone size={20} />
            <span className="text-lg">Or call us: +91 96459 21944</span>
          </a>
        </div>
      </section>
    </>
  );
}
