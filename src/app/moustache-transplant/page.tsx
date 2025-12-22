import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Users, Heart, Baby, Microscope, Target, TrendingUp, Shield } from "lucide-react";

export const metadata = {
  title: "Moustache Hair Transplant | Beard Restoration | Eterno Clinic Kochi",
  description: "Expert moustache hair transplant by Dr. Chacko Cyriac at Eterno Clinic. Natural-looking moustache restoration for men in Kochi, Kerala.",
  keywords: "moustache hair transplant, moustache restoration, beard hair transplant Kochi, facial hair transplant Kerala",
};

export default function MoustacheTransplantPage() {
  const benefits = [
    {
      icon: Target,
      title: "Natural Moustache Design",
      description: "Customized moustache shape based on your face structure and preferences"
    },
    {
      icon: Microscope,
      title: "Advanced FUE Technique",
      description: "Follicular Unit Extraction for scarless, natural-looking moustache restoration"
    },
    {
      icon: TrendingUp,
      title: "Permanent Results",
      description: "Your own hair follicles that grow naturally for lifetime results"
    },
    {
      icon: Shield,
      title: "Expert Precision",
      description: "Dr. Cyriac's surgical precision ensures perfect angle and density"
    },
  ];

  const whoItHelps = [
    {
      icon: Users,
      title: "Men with Sparse Moustache",
      description: "Perfect solution for patchy or thin moustache growth due to genetics"
    },
    {
      icon: Heart,
      title: "Post-Scar Restoration",
      description: "Ideal for moustache area affected by scars, burns, or injuries"
    },
    {
      icon: Baby,
      title: "Young Adults",
      description: "Safe and effective for men seeking fuller moustache from early age"
    },
  ];

  const principles = [
    "Individual moustache design matching facial features",
    "Precise donor hair selection from scalp or beard",
    "Single hair follicles for natural front hairline",
    "Perfect angulation for realistic moustache growth",
    "High density implantation for fuller appearance",
    "Minimal downtime with FUE technique",
    "Scarless results with advanced extraction",
    "Lifetime natural growth guaranteed"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">Moustache Hair Transplant</h1>
            <p className="text-2xl text-gray-300 mb-4 font-semibold">
              Natural Moustache Restoration
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
            <h3 className="mb-6">What is Moustache Hair Transplant?</h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                Moustache hair transplant involves transplanting hair follicles from donor areas (typically scalp or beard) to moustache region using <Link href="/stem-cell-fue" className="text-gray-900 font-semibold underline hover:text-black">advanced FUE technique</Link>. 
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black">Dr. Chacko Cyriac</Link> specializes in creating natural-looking moustaches with perfect density, angle, and design tailored to your facial features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Important */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Moustache Hair Transplant</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Perfect solution for men seeking permanent, natural moustache enhancement with minimal downtime.
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

      {/* Important Note */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-black">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Natural Results Guaranteed
              </h3>
              <p className="text-lg text-gray-700 mb-4 text-justify">
                Dr. Cyriac's expertise ensures undetectable results:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Custom moustache design matching your face</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Perfect hair angle and direction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">High density for fuller appearance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Scarless FUE extraction method</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dr. Cyriac's Experience Matters */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Dr. Cyriac's Moustache Transplant Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
                Years of experience ensure perfect natural results with precise implantation technique.
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
                  Is moustache transplant permanent?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Yes. Transplanted hair grows naturally for lifetime just like your normal moustache hair.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Does it leave scars?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  No visible scars with FUE technique. Donor area heals completely without linear scars.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  When do results appear?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  New growth starts at 3-4 months. Full results visible by 10-12 months.
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
            Ready for your perfect moustache? Book consultation with Dr. Chacko Cyriac at Eterno Clinic Kochi.
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
