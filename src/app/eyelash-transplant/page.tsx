import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Users, Heart, Baby, Microscope, Target, TrendingUp, Shield } from "lucide-react";

export const metadata = {
  title: "Eyelash Hair Transplant | Eyelash Restoration | Eterno Clinic Kochi",
  description: "Expert eyelash hair transplant by Dr. Chacko Cyriac. Natural eyelash restoration for sparse, damaged, or missing eyelashes in Kochi, Kerala.",
  keywords: "eyelash hair transplant, eyelash restoration, eyelash implant Kochi, sparse eyelash treatment Kerala",
};

export default function EyelashTransplantPage() {
  const benefits = [
    {
      icon: Target,
      title: "Natural Eyelash Design",
      description: "Perfect curl, angle, and density matching your natural lashes"
    },
    {
      icon: Microscope,
      title: "Ultra-Precise Technique",
      description: "Microscopic implantation for delicate eyelid tissue"
    },
    {
      icon: TrendingUp,
      title: "Permanent Enhancement",
      description: "Lifetime natural eyelash growth without extensions"
    },
    {
      icon: Shield,
      title: "Safe & Gentle",
      description: "Local anesthesia, minimal discomfort, quick recovery"
    },
  ];

  const whoItHelps = [
    {
      icon: Users,
      title: "Sparse Natural Lashes",
      description: "For those born with thin, short, or sparse eyelashes seeking permanent enhancement"
    },
    {
      icon: Heart,
      title: "Trauma & Burn Victims",
      description: "Restore eyelashes lost due to accidents, burns, chemical injuries, or medical treatments"
    },
    {
      icon: Baby,
      title: "Medical Conditions",
      description: "Trichotillomania, alopecia areata, chemotherapy-related eyelash loss"
    },
  ];

  const principles = [
    "Single hair follicles for natural appearance",
    "Perfect outward curl angle (40-50 degrees)",
    "Precise spacing for natural density",
    "Upper and lower lash line restoration",
    "Donor hair from fine scalp areas",
    "Regular trimming needed post-procedure",
    "Microscopic precision for safety",
    "Natural growth with proper maintenance"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">Eyelash Hair Transplant</h1>
            <p className="text-2xl text-gray-300 mb-4 font-semibold">
              Natural Eyelash Restoration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-block text-center">
                Book Consultation
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
            <h3 className="mb-6">What is Eyelash Hair Transplant?</h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                Eyelash hair transplant is a highly specialized microsurgical procedure to restore natural eyelashes. Individual hair follicles are carefully extracted from the scalp and transplanted into the eyelid margins with precise angulation to create natural-looking lashes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black">Dr. Chacko Cyriac</Link>, as a qualified plastic surgeon, performs this delicate procedure with microscopic precision, ensuring safe and natural results without damage to the delicate eyelid structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Important */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Eyelash Hair Transplant</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Unlike temporary solutions like extensions or false lashes, eyelash transplantation provides permanent, natural-growing lashes that enhance your appearance for life.
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

          <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-2xl shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
              <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black">Dr. Chacko Cyriac</Link>'s plastic surgery expertise is crucial for eyelash transplantation - one of the most delicate procedures in cosmetic surgery requiring precision, safety awareness, and aesthetic eye for natural results.
            </p>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-black">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Why Choose a Qualified Plastic Surgeon
              </h3>
              <p className="text-lg text-gray-700 mb-4 text-justify">
                Eyelash transplantation requires specialized surgical expertise:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Delicate eyelid tissue requires microsurgical precision</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Risk of eye damage if performed by inexperienced practitioners</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Perfect angulation essential for natural curl</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Regular trimming needed as transplanted hair grows continuously</span>
                </li>
              </ul>
              <p className="text-lg text-gray-900 font-bold text-justify">
                Trust only qualified plastic surgeons like Dr. Chacko Cyriac for safe eyelash transplantation in Kochi, Kerala.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It Helps */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Who Benefits from Eyelash Transplant</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whoItHelps.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-white" size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-justify">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Dr. Cyriac's Experience Matters */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Dr. Cyriac's Eyelash Transplant Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
                As a plastic surgeon trained in delicate reconstructive procedures, Dr. Cyriac ensures safe, natural, and beautiful eyelash restoration results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{principle}</span>
                </div>
              ))}
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
                  Is eyelash transplant permanent?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Yes. Transplanted lashes grow permanently like scalp hair and require regular trimming every 2-3 weeks.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Is the procedure safe?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  When performed by qualified plastic surgeons like Dr. Cyriac, it's extremely safe. Local anesthesia ensures comfort with minimal risks.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  How many grafts are needed?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Typically 30-40 grafts per upper eyelid, 20-30 for lower lids. Total 100-140 grafts for complete restoration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-justify">
            Get beautiful, permanent eyelashes. Book consultation with Dr. Chacko Cyriac at Eterno Clinic, Kochi, Kerala.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="btn-primary inline-block">
              Book Consultation
            </Link>
            <Link href="/gallery" className="btn-secondary inline-block">
              View Our Results
            </Link>
          </div>
          <a href="tel:+919645921944" className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <Phone size={20} />
            <span className="text-lg">Call us: +91 96459 21944</span>
          </a>
        </div>
      </section>
    </>
  );
}
