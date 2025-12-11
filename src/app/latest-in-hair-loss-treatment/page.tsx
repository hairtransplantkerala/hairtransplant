import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

export const metadata = {
  title: "Hair Loss in Men | Causes, Treatments & Solutions | Eterno Clinic",
  description: "Expert treatment for male pattern baldness and hair loss in men. Learn about causes, stages, and effective solutions including hair transplant by Dr. Chacko Cyriac in Kochi, Kerala.",
  keywords: "male hair loss, male pattern baldness, men hair loss treatment, androgenetic alopecia, hair loss causes men",
};

export default function HairLossMenPage() {
  const causes = [
    {
      title: "Androgenetic Alopecia (Male Pattern Baldness)",
      description: "The most common cause affecting 50% of men by age 50, caused by genetic factors and DHT hormone sensitivity"
    },
    {
      title: "Hormonal Changes",
      description: "Testosterone conversion to DHT affects hair follicles, leading to miniaturization and hair thinning"
    },
    {
      title: "Stress & Lifestyle",
      description: "Physical or emotional stress, poor diet, lack of sleep can trigger temporary or permanent hair loss"
    },
    {
      title: "Medical Conditions",
      description: "Thyroid disorders, anemia, scalp infections, and autoimmune diseases can cause hair loss"
    },
    {
      title: "Medications",
      description: "Certain drugs for blood pressure, depression, heart problems may have hair loss as a side effect"
    },
    {
      title: "Age",
      description: "Natural aging process slows hair growth and causes follicles to shrink over time"
    }
  ];

  const stages = [
    { stage: "Stage 1-2", description: "Minimal recession at temples, often unnoticeable" },
    { stage: "Stage 3", description: "Visible M-shaped hairline with deepening at temples" },
    { stage: "Stage 4", description: "Significant frontal baldness with thinning crown" },
    { stage: "Stage 5", description: "Large bald areas on top with narrow bridge of hair" },
    { stage: "Stage 6-7", description: "Advanced baldness with only sides and back remaining" },
  ];

  const treatments = [
    {
      title: "FUE Hair Transplant",
      description: "Individual follicle extraction with minimal scarring and natural results",
      ideal: "Stages 3-6, permanent solution"
    },
    {
      title: "FUT Hair Transplant",
      description: "Strip method for maximum grafts in single session",
      ideal: "Advanced baldness, cost-effective"
    },
    {
      title: "DHI Method",
      description: "Direct Hair Implantation for precise placement and denser packing",
      ideal: "Younger patients, early stages"
    },
    {
      title: "PRP Therapy",
      description: "Platelet-Rich Plasma injections to stimulate natural growth",
      ideal: "Early stages, hair thinning prevention"
    },
    {
      title: "Medical Management",
      description: "Minoxidil and Finasteride to slow progression",
      ideal: "Early intervention, maintenance"
    },
  ];

  const prevention = [
    "Maintain a balanced diet rich in proteins, vitamins, and minerals",
    "Manage stress through exercise, meditation, or counseling",
    "Avoid harsh chemical treatments and excessive heat styling",
    "Get adequate sleep (7-8 hours) for optimal hair health",
    "Stay hydrated and avoid smoking and excessive alcohol",
    "Regular scalp massage to improve blood circulation",
    "Early medical consultation at first signs of hair loss"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-white">Hair Loss in Men</h1>
            <p className="text-xl text-gray-300 mb-8">
              Understanding male pattern baldness and advanced treatment solutions by Dr. Chacko Cyriac
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-block text-center">
                Book Free Consultation
              </Link>
              <Link href="/gallery" className="btn-secondary inline-block text-center">
                View Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Understanding Male Hair Loss</h2>
            <p className="text-lg text-gray-700 mb-4">
              Hair loss in men is an extremely common condition that affects millions worldwide. While often associated with aging, male pattern baldness can begin as early as the late teens or early twenties. Understanding the causes, progression, and treatment options is crucial for effective management.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              At Eterno Clinic, Dr. Chacko Cyriac specializes in comprehensive evaluation and treatment of male hair loss, offering personalized solutions ranging from non-surgical therapies to advanced hair transplant procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Common Causes of Hair Loss in Men</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple factors contribute to male hair loss
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {causes.map((cause, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{cause.title}</h3>
                <p className="text-gray-600">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Norwood Scale */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Norwood-Hamilton Scale: Stages of Male Pattern Baldness</h2>
            <p className="text-lg text-gray-700 mb-8">
              The Norwood-Hamilton scale is the leading classification system for measuring male pattern baldness progression.
            </p>
            <div className="space-y-4">
              {stages.map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                  <div className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.stage}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Treatment Options for Male Hair Loss</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your stage and needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{treatment.title}</h3>
                <p className="text-gray-600 mb-4">{treatment.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 font-semibold">Ideal For:</p>
                  <p className="text-sm text-gray-700">{treatment.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Prevention & Maintenance Tips</h2>
            <p className="text-lg text-gray-700 mb-8">
              While genetic hair loss cannot be completely prevented, these steps can slow progression and maintain overall hair health:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {prevention.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Cyriac */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Why Choose Dr. Chacko Cyriac for Male Hair Loss Treatment?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-gray-900 mb-2">7000+</div>
                <p className="text-gray-600">Successful Procedures</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-gray-900 mb-2">22+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              MCh Plastic Surgery specialist with international training from UK, USA, Canada, and Singapore. Expert in all modern hair restoration techniques with proven results.
            </p>
            <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black inline-flex items-center gap-2">
              Learn More About Dr. Cyriac <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Take Control of Your Hair Loss Today</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a personalized consultation to discuss your hair loss concerns and explore the best treatment options for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block">
              Book Free Consultation
            </Link>
            <a href="tel:+919645921944" className="btn-secondary inline-flex items-center justify-center gap-2">
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
