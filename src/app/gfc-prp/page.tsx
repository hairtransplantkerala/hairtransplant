import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Users, Heart, Baby, Microscope, Target, TrendingUp, Shield } from "lucide-react";

export const metadata = {
  title: "GFC PRP Hair Treatment | Growth Factor Concentrate | Eterno Clinic Kochi",
  description: "Advanced GFC (Growth Factor Concentrate) and PRP therapy for hair loss by Dr. Chacko Cyriac. Non-surgical hair regrowth treatment in Kochi, Kerala.",
  keywords: "GFC hair treatment, PRP hair therapy Kochi, growth factor concentrate, non-surgical hair regrowth Kerala, platelet rich plasma",
};

export default function GFCPRPPage() {
  const benefits = [
    {
      icon: Target,
      title: "Natural Hair Stimulation",
      description: "Your own growth factors stimulate dormant follicles naturally"
    },
    {
      icon: Microscope,
      title: "Advanced GFC Technology",
      description: "Higher concentration of growth factors than traditional PRP"
    },
    {
      icon: TrendingUp,
      title: "Non-Surgical Treatment",
      description: "No surgery, minimal downtime, safe and effective results"
    },
    {
      icon: Shield,
      title: "Zero Side Effects",
      description: "Your own blood components - completely safe and natural"
    },
  ];

  const whoItHelps = [
    {
      icon: Users,
      title: "Early Hair Loss",
      description: "Perfect for men and women with early-stage hair thinning, diffuse hair loss, or androgenetic alopecia"
    },
    {
      icon: Heart,
      title: "Post-Transplant Enhancement",
      description: "Improves graft survival, accelerates healing, and enhances overall hair transplant results"
    },
    {
      icon: Baby,
      title: "Medical Hair Loss",
      description: "Effective for alopecia areata, telogen effluvium, and stress-related hair loss conditions"
    },
  ];

  const principles = [
    "Your own blood's healing properties",
    "Concentrated growth factors extracted",
    "Injected into scalp to stimulate follicles",
    "Improves blood circulation to hair roots",
    "Reduces inflammation and DHT effects",
    "3-4 sessions spaced monthly recommended",
    "Maintenance sessions every 6-12 months",
    "Combines well with medical treatments"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">GFC & PRP Hair Treatment</h1>
            <p className="text-2xl text-gray-300 mb-4 font-semibold">
              Growth Factor Concentrate for Natural Hair Regrowth
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
            <h3 className="mb-6">What is GFC & PRP Treatment?</h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                GFC (Growth Factor Concentrate) and PRP (Platelet-Rich Plasma) are advanced regenerative therapies that use your own blood's healing properties to stimulate hair growth. Your blood is processed to extract concentrated growth factors and platelets, which are then injected into the scalp to revitalize dormant hair follicles.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black">Dr. Chacko Cyriac</Link> offers both traditional PRP and advanced GFC treatments as part of the <Link href="/et-protocol" className="text-gray-900 font-semibold underline hover:text-black">ET-Protocol</Link>, choosing the best option based on your specific hair loss condition and stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Important */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose GFC & PRP Treatment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Non-surgical, natural approach to hair regrowth using your body's own healing mechanisms. Perfect for those seeking alternatives to surgery or complementing medical treatments.
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
              <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black">Dr. Chacko Cyriac</Link> uses advanced centrifugation protocols and precise injection techniques to maximize growth factor delivery and optimize results for each patient.
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
                GFC vs Traditional PRP - What's the Difference?
              </h3>
              <p className="text-lg text-gray-700 mb-4 text-justify">
                While both treatments use your blood, GFC offers several advantages:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">10x higher concentration of growth factors than PRP</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">No red blood cells or white blood cells (purer concentrate)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Less pain and inflammation post-treatment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Faster results with fewer sessions needed</span>
                </li>
              </ul>
              <p className="text-lg text-gray-900 font-bold text-justify">
                Dr. Cyriac will recommend the best option based on your hair loss severity and treatment goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It Helps */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Who Benefits from GFC & PRP Treatment</h2>
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
              <h2 className="mb-4">How GFC & PRP Treatment Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
                Safe, simple outpatient procedure using your body's natural healing properties to rejuvenate hair follicles.
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
                  How many sessions are needed?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Typically 3-4 sessions spaced 4-6 weeks apart for initial treatment. Maintenance sessions every 6-12 months recommended for sustained results.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Is the treatment painful?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Minimal discomfort. Local anesthesia cream is applied before injections. Most patients tolerate it well with no downtime.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  When do results appear?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Initial improvements visible at 2-3 months. Maximum results seen at 6-9 months after completing treatment protocol. Results vary based on hair loss severity.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Can it be combined with hair transplant?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Yes! <Link href="/prp-therapy" className="text-gray-900 font-semibold underline hover:text-black">PRP therapy</Link> post-transplant improves graft survival and accelerates healing. Many patients benefit from combination approach.
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
            Stimulate natural hair regrowth without surgery. Book consultation with Dr. Chacko Cyriac at Eterno Clinic, Kochi, Kerala.
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
