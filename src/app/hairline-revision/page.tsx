import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Users, Heart, Baby, Microscope, Target, TrendingUp, Shield } from "lucide-react";

export const metadata = {
  title: "Hairline Revision | Hairline Lowering | Eterno Clinic Kochi",
  description: "Expert hairline revision and lowering by Dr. Chacko Cyriac. Correct unnatural hairlines, lower high foreheads, repair poor transplants in Kochi, Kerala.",
  keywords: "hairline revision, hairline lowering, high forehead correction Kochi, unnatural hairline repair Kerala, failed transplant correction",
};

export default function HairlineRevisionPage() {
  const benefits = [
    {
      icon: Target,
      title: "Natural Hairline Design",
      description: "Age-appropriate, ethnically suitable hairline customized for your face"
    },
    {
      icon: Microscope,
      title: "Artistic Precision",
      description: "Irregular pattern, proper density gradient for undetectable results"
    },
    {
      icon: TrendingUp,
      title: "Forehead Reduction",
      description: "Lower high foreheads by 2-4 cm for balanced facial proportions"
    },
    {
      icon: Shield,
      title: "Corrective Expertise",
      description: "Repair unnatural plug-like or straight hairlines from poor transplants"
    },
  ];

  const whoItHelps = [
    {
      icon: Users,
      title: "High Forehead Concerns",
      description: "Perfect for men and women wanting to lower naturally high foreheads for better facial balance"
    },
    {
      icon: Heart,
      title: "Failed Transplant Repair",
      description: "Correct unnatural, pluggy, or straight hairlines from previous poor quality hair transplants"
    },
    {
      icon: Baby,
      title: "Receding Hairline",
      description: "Restore youthful hairline for early-stage baldness or maturing hairlines"
    },
  ];

  const principles = [
    "Age-appropriate hairline design (not too low)",
    "Irregular, natural hairline pattern (no straight lines)",
    "Single hair follicles at frontal edge",
    "Gradual density increase from front to back",
    "Consideration of future hair loss progression",
    "Ethnic and cultural hairline characteristics",
    "Temporal point restoration for natural framing",
    "Conservative approach for long-term satisfaction"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">Hairline Revision</h1>
            <p className="text-2xl text-gray-300 mb-4 font-semibold">
              Natural Hairline Design & High Forehead Correction
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
            <h3 className="mb-6">What is Hairline Revision?</h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                Hairline revision is a specialized hair transplant procedure to create natural-looking hairlines or correct unnatural results from previous transplants. It involves careful design, precise implantation, and artistic skills to recreate hairlines that look completely natural and age-appropriate.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black">Dr. Chacko Cyriac</Link> specializes in both primary hairline creation for high foreheads and corrective surgery for <Link href="/failed-hair-transplant" className="text-gray-900 font-semibold underline hover:text-black">failed hair transplants</Link> with unnatural, pluggy, or straight hairlines using advanced <Link href="/stem-cell-fue" className="text-gray-900 font-semibold underline hover:text-black">FUE technique</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Important */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Hairline Design Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Your hairline frames your face and significantly impacts your appearance. A well-designed hairline looks natural at all ages, while poor hairlines appear obvious and age inappropriately.
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
              <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black">Dr. Chacko Cyriac</Link>'s artistic eye and surgical precision ensure hairlines that look natural from every angle, under any lighting, and appropriate for your age and ethnicity.
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
                Common Hairline Mistakes to Avoid
              </h3>
              <p className="text-lg text-gray-700 mb-4 text-justify">
                Many clinics create unnatural hairlines that reveal hair transplant work:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Straight hairlines that look like a ruler was used</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Too low hairlines inappropriate for age (will look odd as you age)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Multi-hair grafts at front edge creating pluggy appearance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Uniform density without natural gradient transition</span>
                </li>
              </ul>
              <p className="text-lg text-gray-900 font-bold text-justify">
                Dr. Cyriac's experience prevents these mistakes, creating hairlines that look natural for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It Helps */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Who Benefits from Hairline Revision</h2>
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
              <h2 className="mb-4">Dr. Cyriac's Hairline Design Principles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
                Creating natural hairlines requires artistic vision, surgical precision, and years of experience understanding facial aesthetics and hair growth patterns.
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
                  How low can the hairline be placed?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Typically 2-4 cm lower than your current hairline. Dr. Cyriac designs age-appropriate hairlines that won't look odd as you age. Too-low hairlines look unnatural in older age.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Can unnatural hairlines from previous transplants be fixed?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Yes. Dr. Cyriac specializes in corrective procedures, adding irregular pattern, proper density gradient, and single-hair frontal edge to create natural appearance. See our <Link href="/failed-hair-transplant" className="text-gray-900 font-semibold underline hover:text-black">failed transplant repair</Link> page.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  How many grafts are needed for hairline revision?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Typically 1000-2000 grafts depending on forehead width and desired density. Conservative approach ensures natural results without depleting donor area.
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
            Get a natural, age-appropriate hairline. Book consultation with Dr. Chacko Cyriac at Eterno Clinic, Kochi, Kerala.
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
