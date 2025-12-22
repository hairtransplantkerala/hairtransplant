import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Users, Heart, Baby, Microscope, Target, TrendingUp, Shield } from "lucide-react";

export const metadata = {
  title: "Scar Hair Transplant | Scar Camouflage | Eterno Clinic Kochi",
  description: "Expert scar hair transplant by Dr. Chacko Cyriac. Camouflage surgical scars, burns, and injury scars with natural hair restoration in Kochi, Kerala.",
  keywords: "scar hair transplant, scar camouflage, FUT scar repair, burn scar hair restoration Kochi, injury scar transplant Kerala",
};

export default function ScarHairTransplantPage() {
  const benefits = [
    {
      icon: Target,
      title: "Complete Scar Camouflage",
      description: "Natural hair growth to completely hide visible scars"
    },
    {
      icon: Microscope,
      title: "Specialized Technique",
      description: "Advanced implantation method for scarred tissue with poor blood supply"
    },
    {
      icon: TrendingUp,
      title: "Permanent Coverage",
      description: "Lifetime natural hair growth in previously scarred areas"
    },
    {
      icon: Shield,
      title: "Expert Precision",
      description: "Dr. Cyriac's surgical expertise ensures maximum graft survival in scars"
    },
  ];

  const whoItHelps = [
    {
      icon: Users,
      title: "FUT Strip Scar Repair",
      description: "Perfect solution for visible linear scars from previous strip hair transplant procedures"
    },
    {
      icon: Heart,
      title: "Burn & Injury Scars",
      description: "Restore hair growth in areas affected by burns, accidents, or traumatic injuries"
    },
    {
      icon: Baby,
      title: "Surgical Scars",
      description: "Camouflage scars from neurosurgery, plastic surgery, or other head surgeries"
    },
  ];

  const principles = [
    "Specialized technique for scar tissue implantation",
    "Higher graft density for maximum coverage",
    "Pre-treatment protocols for tough scar tissue",
    "Multiple sessions for extensive scarring",
    "Perfect angle matching surrounding hair",
    "FUE extraction prevents additional scarring",
    "Natural blending with existing hair",
    "Long-term scar camouflage guaranteed"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">Scar Hair Transplant</h1>
            <p className="text-2xl text-gray-300 mb-4 font-semibold">
              Complete Scar Camouflage with Natural Hair Restoration
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
            <h3 className="mb-6">What is Scar Hair Transplant?</h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                Scar hair transplant is a specialized procedure to restore natural hair growth in scarred areas of the scalp. Whether from previous FUT strip surgery, burns, injuries, or surgical procedures, <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black">Dr. Chacko Cyriac</Link> uses advanced techniques to implant hair follicles into scar tissue.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                Scar tissue has poor blood supply, making hair transplantation technically challenging. Dr. Cyriac's expertise as a plastic surgeon ensures maximum graft survival and complete scar camouflage using <Link href="/stem-cell-fue" className="text-gray-900 font-semibold underline hover:text-black">advanced FUE technique</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Important */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Scar Hair Transplant</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Scars on the scalp can be emotionally distressing and difficult to hide. Hair transplantation offers permanent, natural camouflage that restores confidence and eliminates visible scarring.
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
              <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black">Dr. Chacko Cyriac</Link> has successfully treated hundreds of scar cases, from small FUT strip scars to extensive burn injuries. His plastic surgery background provides unique expertise in scar tissue management and aesthetic restoration.
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
                Specialized Technique for Scar Tissue
              </h3>
              <p className="text-lg text-gray-700 mb-4 text-justify">
                Scar hair transplantation requires specialized expertise because:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Scar tissue has poor blood supply reducing graft survival</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Dense, fibrous tissue makes implantation technically challenging</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Multiple sessions often required for complete coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Perfect angle matching crucial for natural appearance</span>
                </li>
              </ul>
              <p className="text-lg text-gray-900 font-bold text-justify">
                Choose a plastic surgeon with extensive experience in scar tissue management like Dr. Chacko Cyriac at Eterno Clinic, Kochi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It Helps */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Who Benefits from Scar Hair Transplant</h2>
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
              <h2 className="mb-4">Why Dr. Cyriac's Expertise Matters</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
                As a qualified plastic surgeon with years of scar management experience, Dr. Cyriac provides superior results in challenging scar tissue transplantation.
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
                  Can all scars be covered with hair transplant?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Most scars can be effectively camouflaged. However, very wide or thick scars may require scar revision surgery first. Dr. Cyriac will assess your scar and recommend the best approach during consultation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  How many sessions are needed for scar coverage?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Small scars may need only one session. Larger or wider scars typically require 2-3 sessions spaced 8-12 months apart for complete coverage and maximum density.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Is graft survival lower in scar tissue?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Yes, scar tissue has reduced blood supply affecting graft survival. Dr. Cyriac uses specialized techniques and higher graft density to compensate, ensuring excellent final results.
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
            Hide your scars permanently with natural hair restoration. Book consultation with Dr. Chacko Cyriac at Eterno Clinic, Kochi, Kerala.
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
