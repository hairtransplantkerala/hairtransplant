import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Users, Heart, Baby, Microscope, Target, TrendingUp, Shield } from "lucide-react";

export const metadata = {
  title: "Micro FUE Hair Transplant | Ultra-Fine Extraction | Eterno Clinic Kochi",
  description: "Advanced Micro FUE hair transplant by Dr. Chacko Cyriac. Ultra-fine extraction for scarless, natural results in Kochi, Kerala.",
  keywords: "micro FUE, ultra fine extraction, scarless hair transplant Kochi, advanced FUE technique Kerala, minimal invasive hair restoration",
};

export default function MicroFUEPage() {
  const benefits = [
    {
      icon: Target,
      title: "Ultra-Fine Extraction",
      description: "0.6-0.8mm punch size for minimal scarring and faster healing"
    },
    {
      icon: Microscope,
      title: "Maximum Precision",
      description: "Microscopic extraction preserves follicle integrity for higher survival"
    },
    {
      icon: TrendingUp,
      title: "Virtually Scarless",
      description: "Tiny extraction points heal completely with no visible scarring"
    },
    {
      icon: Shield,
      title: "Minimal Downtime",
      description: "Faster healing, less discomfort, quick return to normal activities"
    },
  ];

  const whoItHelps = [
    {
      icon: Users,
      title: "Men Seeking Scarless Results",
      description: "Perfect for those wanting short hairstyles without visible donor area scarring"
    },
    {
      icon: Heart,
      title: "Athletes & Active Lifestyle",
      description: "Minimal downtime allows quick return to sports and physical activities"
    },
    {
      icon: Baby,
      title: "Young Patients",
      description: "Conservative approach preserving donor area for potential future procedures"
    },
  ];

  const principles = [
    "Ultra-fine 0.6-0.8mm punch extraction",
    "Microscopic precision for follicle integrity",
    "Individual follicular unit extraction",
    "Virtually invisible donor area healing",
    "Maximum graft survival rate (95%+)",
    "Less trauma to surrounding tissue",
    "Faster recovery than traditional FUE",
    "Natural density and distribution"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">Micro FUE Hair Transplant</h1>
            <p className="text-2xl text-gray-300 mb-4 font-semibold">
              Ultra-Fine Extraction for Scarless Natural Results
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
            <h3 className="mb-6">What is Micro FUE?</h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                Micro FUE (Follicular Unit Extraction) is the most advanced form of <Link href="/stem-cell-fue" className="text-gray-900 font-semibold underline hover:text-black">FUE hair transplant</Link> using ultra-fine extraction punches (0.6-0.8mm) compared to standard FUE (0.9-1.0mm). This minimally invasive technique extracts individual hair follicles with microscopic precision, leaving virtually no visible scarring.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black">Dr. Chacko Cyriac</Link> pioneered Micro FUE in Kerala, combining surgical precision with advanced instrumentation to achieve superior graft survival rates and completely natural, undetectable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Important */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Micro FUE</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              The most refined hair transplant technique available today - minimal invasiveness, maximum precision, and truly scarless results even with very short hairstyles.
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
              <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black">Dr. Chacko Cyriac</Link>'s expertise in Micro FUE ensures the finest extraction technique with maximum follicle preservation, resulting in industry-leading graft survival rates and completely natural aesthetics.
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
                Micro FUE vs Standard FUE - The Difference
              </h3>
              <p className="text-lg text-gray-700 mb-4 text-justify">
                While both are follicular unit extraction methods, Micro FUE offers significant advantages:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Ultra-fine punches (0.6-0.8mm vs 0.9-1.0mm standard)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Virtually invisible donor area scars even with buzz cuts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Higher graft survival due to minimal follicle trauma</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Faster healing with less post-operative discomfort</span>
                </li>
              </ul>
              <p className="text-lg text-gray-900 font-bold text-justify">
                Requires exceptional surgical skill and experience. Trust only qualified plastic surgeons like Dr. Chacko Cyriac.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It Helps */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Who Benefits from Micro FUE</h2>
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
              <h2 className="mb-4">Dr. Cyriac's Micro FUE Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
                Micro FUE requires exceptional precision and years of experience. Dr. Cyriac's plastic surgery training ensures the finest extraction technique with maximum results.
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
                  Is Micro FUE completely scarless?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  While no surgery is 100% scarless, Micro FUE leaves such tiny extraction points (0.6-0.8mm) that they heal virtually invisibly - undetectable even with very short buzz cuts or shaved heads.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  How long is recovery time?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Much faster than standard FUE. Most patients return to desk work in 2-3 days. Donor area heals within 5-7 days. Physical activities can resume after 10-14 days.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  What's the graft survival rate?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Dr. Cyriac achieves 95%+ graft survival with Micro FUE due to minimal follicle trauma and advanced preservation techniques - among the highest success rates in hair transplantation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Can I get multiple Micro FUE procedures?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Yes! The minimal scarring preserves donor area for future procedures if needed. This conservative approach is ideal for younger patients or those wanting to keep options open.
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
            Experience the most advanced hair transplant technique. Book consultation with Dr. Chacko Cyriac at Eterno Clinic, Kochi, Kerala.
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
