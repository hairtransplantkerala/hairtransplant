import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, } from "lucide-react";

export const metadata = {
  title: "Mesotherapy for Hair Loss | Non-Surgical Hair Treatment | Eterno Clinic",
  description: "Effective mesotherapy treatment for hair loss and thinning. Nutrient-rich scalp injections to stimulate hair growth by Dr. Chacko Cyriac in Kochi, Kerala.",
  keywords: "mesotherapy hair loss, hair mesotherapy treatment, scalp mesotherapy, non-surgical hair treatment, hair growth injections",
};

export default function MesotherapyHairLossPage() {
  const benefits = [
    {
      title: "Promotes Hair Growth",
      description: "Stimulates dormant hair follicles and encourages new hair growth through direct nutrient delivery"
    },
    {
      title: "Reduces Hair Loss",
      description: "Clinical studies show up to 70% reduction in hair shedding after treatment course"
    },
    {
      title: "Improves Hair Thickness",
      description: "Strengthens existing hair shafts, increases diameter and volume for fuller appearance"
    },
    {
      title: "Nourishes Scalp",
      description: "Delivers vitamins, minerals, amino acids, and growth factors directly to hair follicles"
    },
    {
      title: "Stimulates Collagen Production",
      description: "Boosts collagen and elastin in scalp tissue, creating healthier environment for hair growth"
    },
    {
      title: "Non-Invasive & Safe",
      description: "Minimal downtime, no surgery, few side effects - suitable for most patients"
    }
  ];

  const ingredients = [
    "Vitamins (Biotin, B-complex, Vitamin D, Vitamin E)",
    "Minerals (Zinc, Copper, Selenium, Iron)",
    "Amino Acids (building blocks of keratin protein)",
    "Nucleic Acids (DNA/RNA for cell regeneration)",
    "Coenzymes (Q10 for energy production)",
    "Growth Factors (stimulate follicle activity)",
    "Hyaluronic Acid (hydration and scalp health)",
    "Plant Extracts (antioxidants and circulation boosters)"
  ];

  const procedure = [
    {
      step: "1",
      title: "Consultation & Assessment",
      description: "Dr. Cyriac examines your scalp, reviews medical history, and determines if mesotherapy is suitable for your condition"
    },
    {
      step: "2",
      title: "Scalp Preparation",
      description: "Scalp is cleansed and disinfected. Topical numbing cream applied for comfort (optional)"
    },
    {
      step: "3",
      title: "Microinjection Process",
      description: "Nutrient solution injected into mesoderm (middle skin layer) using specialized mesotherapy gun or fine needles"
    },
    {
      step: "4",
      title: "Post-Treatment Care",
      description: "Gentle scalp massage to distribute solution. Instructions provided for next 24-48 hours"
    }
  ];

  const idealFor = [
    "Early stage androgenetic alopecia (male/female pattern baldness)",
    "Diffuse hair thinning across scalp",
    "Telogen effluvium (temporary stress-related hair loss)",
    "Prevention of further hair loss progression",
    "Post-hair transplant maintenance therapy",
    "Alopecia areata (patchy hair loss)",
    "Scalp health improvement before transplant surgery",
    "Patients seeking non-surgical treatment options"
  ];

  const timeline = [
    { phase: "Initial Sessions", description: "Weekly treatments for 8-10 weeks to establish baseline improvement" },
    { phase: "Month 2-3", description: "Reduced shedding noticed, scalp health improves visibly" },
    { phase: "Month 4-5", description: "New hair regrowth begins, existing hair appears thicker" },
    { phase: "Month 6+", description: "Significant improvement in density and volume achieved" },
    { phase: "Maintenance", description: "Monthly or quarterly sessions to sustain results long-term" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="mb-0 text-white">Mesotherapy for Hair Loss</h1>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              Non-surgical hair restoration through nutrient-rich scalp injections by Dr. Chacko Cyriac
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-block text-center">
                Book Consultation
              </Link>
              <Link href="/services/prp" className="btn-secondary inline-block text-center">
                Compare with PRP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">What is Mesotherapy for Hair Loss?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Mesotherapy for hair loss is a non-surgical treatment that involves microinjecting a customized cocktail of vitamins, minerals, amino acids, and growth factors directly into the scalp's mesodermal layer. This targeted delivery system nourishes hair follicles, improves blood circulation, and stimulates natural hair growth.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Originally developed in France in the 1950s for pain management, mesotherapy has evolved into an effective treatment for various conditions, including hair loss. The technique delivers nutrients precisely where they're needed, bypassing systemic absorption and reducing potential side effects.
            </p>
            <p className="text-lg text-gray-700">
              At Eterno Clinic, Dr. Chacko Cyriac uses pharmaceutical-grade mesotherapy solutions customized to your specific hair loss type and scalp condition, ensuring optimal results with minimal discomfort.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Benefits of Hair Mesotherapy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proven advantages for hair restoration and scalp health
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">How Does Mesotherapy Work?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Mesotherapy works by delivering a nutrient-rich solution into the mesoderm (middle skin layer) where hair follicles reside. The treatment improves blood circulation to the scalp, provides essential nutrients for hair growth, and stimulates collagen production.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Key Ingredients in Mesotherapy Solution</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{ingredient}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-900 p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-2">Clinical Evidence</h4>
              <p className="text-gray-700">
                Studies show mesotherapy can reduce hair loss by up to 70% and stimulate new hair regrowth in 30% of patients. It's particularly effective for androgenetic alopecia when combined with other treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">The Mesotherapy Procedure</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick, comfortable treatment with minimal downtime
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {procedure.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="text-5xl font-bold text-gray-900 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Treatment Duration & Comfort</h3>
            <p className="text-gray-700 mb-2">
              <strong>Duration:</strong> Each session takes 30-60 minutes
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Pain Level:</strong> Minimal discomfort. Most patients describe a slight pricking sensation. Numbing cream available if needed.
            </p>
            <p className="text-gray-700">
              <strong>Downtime:</strong> None to minimal. Resume normal activities immediately. Avoid washing hair for 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Who is Mesotherapy Ideal For?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {idealFor.map((condition, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{condition}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gray-100 border-l-4 border-gray-600 p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-2">Not Recommended For:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Advanced baldness with completely inactive follicles</li>
                <li>• Active scalp infections or inflammatory conditions</li>
                <li>• Pregnant or breastfeeding women</li>
                <li>• Blood clotting disorders or on blood thinners</li>
                <li>• Allergies to mesotherapy solution ingredients</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">What to Expect: Results Timeline</h2>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <div className="bg-gray-900 text-white px-4 py-2 rounded-full font-bold text-sm flex-shrink-0">
                    {item.phase}
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center bg-gray-100 p-6 rounded-xl border border-gray-300">
              <p className="text-lg text-gray-700">
                <strong>Important:</strong> Results vary by individual. Patience and consistency with treatment sessions are key to success. Most patients notice improvements after the 5th session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mesotherapy vs Other Treatments */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Mesotherapy vs Other Hair Loss Treatments</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="p-4 text-left">Treatment</th>
                    <th className="p-4 text-left">Invasiveness</th>
                    <th className="p-4 text-left">Downtime</th>
                    <th className="p-4 text-left">Results</th>
                    <th className="p-4 text-left">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4 font-semibold">Mesotherapy</td>
                    <td className="p-4">Micro-injections</td>
                    <td className="p-4">None</td>
                    <td className="p-4">3-6 months</td>
                    <td className="p-4">Moderate</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="p-4 font-semibold">PRP</td>
                    <td className="p-4">Blood draw + injection</td>
                    <td className="p-4">Minimal</td>
                    <td className="p-4">3-6 months</td>
                    <td className="p-4">Moderate-High</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-semibold">Hair Transplant</td>
                    <td className="p-4">Surgical</td>
                    <td className="p-4">7-10 days</td>
                    <td className="p-4">12+ months</td>
                    <td className="p-4">High</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="p-4 font-semibold">Minoxidil</td>
                    <td className="p-4">Topical application</td>
                    <td className="p-4">None</td>
                    <td className="p-4">4-6 months</td>
                    <td className="p-4">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Cyriac */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Expert Mesotherapy at Eterno Clinic</h2>
            <p className="text-lg text-gray-700 mb-8">
              Dr. Chacko Cyriac uses pharmaceutical-grade mesotherapy solutions with customized formulations based on your specific hair loss pattern and scalp analysis. With precise injection techniques and years of experience, you receive safe, effective treatment with optimal results.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
                <p className="text-gray-600">Mesotherapy Sessions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-gray-900 mb-2">22+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-gray-900 mb-2">85%</div>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
            <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black inline-flex items-center gap-2">
              Learn More About Dr. Cyriac <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Start Your Non-Surgical Hair Restoration Journey</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover if mesotherapy is right for you. Book a consultation to discuss your hair loss concerns and treatment options.
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
