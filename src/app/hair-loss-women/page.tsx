import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Heart } from "lucide-react";

export const metadata = {
  title: "Hair Loss in Women | Female Pattern Hair Loss Treatment | Eterno Clinic",
  description: "Expert treatment for female hair loss and thinning. Understand causes, types, and effective solutions including PRP, hair transplant by Dr. Chacko Cyriac in Kochi, Kerala.",
  keywords: "female hair loss, women hair loss treatment, female pattern baldness, FPHL, hair thinning women, alopecia in women",
};

export default function HairLossWomenPage() {
  const causes = [
    {
      title: "Female Pattern Hair Loss (FPHL)",
      description: "Androgenetic alopecia affecting 30 million women in the US, causing diffuse thinning on crown and top of scalp"
    },
    {
      title: "Hormonal Changes",
      description: "Pregnancy, childbirth, menopause, thyroid disorders, and PCOS can trigger significant hair loss"
    },
    {
      title: "Nutritional Deficiencies",
      description: "Low iron, vitamin D, B12, protein, and biotin levels commonly cause female hair thinning"
    },
    {
      title: "Stress & Emotional Factors",
      description: "Physical trauma, surgery, illness, or emotional stress can lead to telogen effluvium (temporary hair loss)"
    },
    {
      title: "Medical Conditions",
      description: "Autoimmune diseases, anemia, lupus, and scalp infections affect hair growth cycles"
    },
    {
      title: "Styling & Chemical Damage",
      description: "Tight hairstyles (traction alopecia), heat styling, harsh chemicals, and excessive coloring damage hair"
    }
  ];

  const types = [
    {
      type: "Ludwig Scale Type I",
      description: "Mild thinning at the crown with widening of the center part"
    },
    {
      type: "Ludwig Scale Type II",
      description: "Moderate thinning with noticeable decrease in hair density at the crown"
    },
    {
      type: "Ludwig Scale Type III",
      description: "Severe diffuse thinning with visible scalp at the top, frontal hairline usually preserved"
    },
    {
      type: "Telogen Effluvium",
      description: "Temporary, diffuse shedding triggered by stress, illness, or hormonal changes"
    },
    {
      type: "Alopecia Areata",
      description: "Autoimmune condition causing patchy, round bald spots anywhere on scalp"
    },
    {
      type: "Traction Alopecia",
      description: "Hair loss from tight hairstyles like braids, ponytails, or extensions"
    }
  ];

  const treatments = [
    {
      title: "FUE Hair Transplant for Women",
      description: "Individual follicle extraction for natural, undetectable results without linear scarring",
      ideal: "Permanent solution for pattern hair loss"
    },
    {
      title: "PRP Therapy",
      description: "Platelet-Rich Plasma injections stimulate dormant follicles and strengthen existing hair",
      ideal: "Early thinning, maintenance therapy"
    },
    {
      title: "DHI Method",
      description: "Direct Hair Implantation for precise placement without shaving large areas",
      ideal: "Women who want to keep hair long"
    },
    {
      title: "Minoxidil (Rogaine)",
      description: "FDA-approved topical solution (2% or 5%) to slow hair loss and promote regrowth",
      ideal: "Mild to moderate thinning"
    },
    {
      title: "Low-Level Laser Therapy",
      description: "FDA-approved laser caps/combs stimulate cellular activity in hair follicles",
      ideal: "Non-invasive maintenance option"
    },
    {
      title: "Nutritional Supplementation",
      description: "Iron, biotin, vitamin D supplements to address deficiencies causing hair loss",
      ideal: "Deficiency-related hair loss"
    }
  ];

  const tips = [
    "Eat protein-rich diet with iron, zinc, omega-3 fatty acids",
    "Avoid tight hairstyles that pull on hair follicles",
    "Use gentle, sulfate-free shampoos and conditioners",
    "Minimize heat styling and harsh chemical treatments",
    "Manage stress through yoga, meditation, or therapy",
    "Get regular blood tests to check for nutritional deficiencies",
    "Protect hair from sun damage with hats or UV-protection products",
    "Consult specialist at first signs of unusual shedding"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-900 to-pink-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Heart size={40} className="text-pink-300" />
              <h1 className="mb-0 text-white">Hair Loss in Women</h1>
            </div>
            <p className="text-xl text-gray-200 mb-8">
              Compassionate, expert care for female hair loss by Dr. Chacko Cyriac - Understanding your unique needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-block text-center bg-white text-gray-900 hover:bg-gray-100">
                Book Confidential Consultation
              </Link>
              <Link href="/gallery" className="btn-secondary inline-block text-center border-white text-white hover:bg-white hover:text-gray-900">
                View Female Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Understanding Hair Loss in Women</h2>
            <p className="text-lg text-gray-700 mb-4">
              Hair loss can be emotionally devastating for women, as hair is deeply tied to femininity, identity, and self-confidence. Unlike men, women's hair loss patterns are typically more diffuse, with thinning spread across the crown and top of the scalp rather than receding hairlines [web:216].
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Female pattern hair loss (FPHL) affects up to 30 million women in the United States, with most experiencing symptoms in their 40s, 50s, or 60s . However, hair loss can occur at any age due to various factors including hormonal changes, nutritional deficiencies, stress, and medical conditions.
            </p>
            <p className="text-lg text-gray-700">
              At Eterno Clinic, Dr. Chacko Cyriac provides compassionate, comprehensive evaluation and personalized treatment plans for women experiencing hair loss, ensuring both effective results and emotional support throughout your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Common Causes of Female Hair Loss</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding the root cause is essential for effective treatment
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

      {/* Types & Classification */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Types & Classification of Female Hair Loss</h2>
            <p className="text-lg text-gray-700 mb-8">
              The Ludwig Scale is the primary classification system for female pattern hair loss, measuring severity of diffuse thinning.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {types.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-pink-600">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{item.type}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
            <h2 className="mb-4">Treatment Options for Women</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions addressing the unique needs of female hair loss [web:217][web:219]
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{treatment.title}</h3>
                <p className="text-gray-600 mb-4">{treatment.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 font-semibold">Best For:</p>
                  <p className="text-sm text-gray-700">{treatment.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Considerations */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Special Considerations for Women</h2>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-xl border border-pink-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Why Women's Hair Loss Requires Specialized Care</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>Different Hair Loss Patterns:</strong> Women experience diffuse thinning rather than distinct bald patches, requiring specialized transplant techniques like DHI for undetectable results.</p>
                <p><strong>Hormonal Factors:</strong> Pregnancy, menopause, thyroid issues require thorough medical evaluation before treatment planning.</p>
                <p><strong>Aesthetic Concerns:</strong> Women often cannot shave their heads, necessitating no-shave FUE or DHI techniques.</p>
                <p><strong>Emotional Impact:</strong> Hair loss affects women's self-esteem differently, requiring compassionate, confidential care throughout treatment.</p>
                <p><strong>Donor Area Preservation:</strong> Women need careful donor management to maintain overall hair volume and styling options.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Hair Care & Prevention Tips for Women</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="text-pink-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Cyriac */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Compassionate Expert Care for Women</h2>
            <p className="text-lg text-gray-700 mb-8">
              Dr. Chacko Cyriac understands the emotional impact of female hair loss and provides personalized, confidential care with proven results. With specialized training in female hair restoration techniques and over 22 years of experience, you're in expert hands.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-pink-600 mb-2">2000+</div>
                <p className="text-gray-600">Female Patients Treated</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-pink-600 mb-2">98%</div>
                <p className="text-gray-600">Patient Satisfaction</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-pink-600 mb-2">5★</div>
                <p className="text-gray-600">Average Rating</p>
              </div>
            </div>
            <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black inline-flex items-center gap-2">
              Learn More About Dr. Cyriac <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-900 to-pink-900">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">You Don't Have to Face Hair Loss Alone</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule a confidential consultation to discuss your concerns in a supportive, judgment-free environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block bg-white text-gray-900 hover:bg-gray-100">
              Book Free Consultation
            </Link>
            <a href="tel:+919645921944" className="btn-secondary inline-flex items-center justify-center gap-2 border-white text-white hover:bg-white hover:text-gray-900">
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
