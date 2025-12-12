import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, } from "lucide-react";

export const metadata = {
  title: "Hair Loss in Women | Female Pattern Hair Loss Treatment | Eterno Clinic",
  description: "Expert treatment for female hair loss and thinning by Dr. Chacko Cyriac. FDA-approved treatments including Minoxidil, PRP, and hair transplantation in Kochi, Kerala.",
  keywords: "female hair loss, women hair loss treatment, female pattern baldness, FPHL, hair thinning women, alopecia in women, Minoxidil for women",
};

export default function HairLossWomenPage() {
  const treatments = [
    {
      title: "Minoxidil (Rogaine)",
      description: "FDA-approved topical treatment available over-the-counter. Increases hair growth and may lengthen their growth cycle. Can thicken hair and minimize the impression of patchiness or widening hair parting.",
      details: "Safe for both men and women with high user satisfaction. Available under trade name Rogaine and several generic names."
    },
    {
      title: "Platelet-Rich Plasma Injections",
      description: "Doctor draws patient's blood, separates platelet-rich plasma, and reinjects it into damaged areas of the scalp. Contributes to acceleration of tissue repair.",
      details: "Preliminary evidence suggests PRP injections may help prevent hair loss."
    },
    {
      title: "Healthy Diet & Nutrition",
      description: "Eating a nutritious diet promotes regular hair development. Should include variety of vegetables, fruits, and iron-rich foods. Iron levels have an effect on hair health.",
      details: "Consult physician for blood test to check for iron deficiency. May recommend iron-rich diet or supplements."
    },
    {
      title: "Low-Level Light Therapy",
      description: "May not be adequate to treat hair loss on its own, but can enhance effectiveness of other treatments such as minoxidil.",
      details: "Works best when combined with other approved hair loss treatments."
    },
    {
      title: "Hair Transplantation",
      description: "When patient does not respond to treatment, specialists may propose hair transplantation. Involves transplanting hair from donor areas to areas of baldness.",
      details: "Naturally increases the area's hair density. Recommended when other treatments are insufficient."
    }
  ];

  const commonCauses = [
    "Hormonal changes (pregnancy, childbirth, menopause)",
    "Thyroid disorders and PCOS",
    "Nutritional deficiencies (iron, vitamin D, B12)",
    "Stress and emotional factors",
    "Medical conditions and medications",
    "Styling and chemical damage"
  ];

  const preventionTips = [
    "Eat protein-rich diet with iron, zinc, omega-3 fatty acids",
    "Get regular blood tests to check for nutritional deficiencies",
    "Avoid tight hairstyles that pull on hair follicles",
    "Use gentle, sulfate-free shampoos and conditioners",
    "Minimize heat styling and harsh chemical treatments",
    "Manage stress through yoga, meditation, or therapy",
    "Consult specialist at first signs of unusual shedding"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="mb-0 text-white">Hair Loss in Women</h1>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              Do you treat hair loss for ladies? Yes. Dr. Chacko Cyriac provides comprehensive, FDA-approved treatments for female hair loss in Kochi, Kerala.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-block text-center">
                Book Consultation
              </Link>
              <Link href="/gallery" className="btn-secondary inline-block text-center">
                View Female Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Hair Loss Treatments For Women</h2>
            <p className="text-lg text-gray-700 mb-6">
              Hair loss can be emotionally devastating for women, as hair is deeply tied to femininity, identity, and self-confidence. At Eterno Clinic, Dr. Chacko Cyriac provides compassionate, comprehensive evaluation and personalized treatment plans for women experiencing hair loss.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Below are some of the <strong>approved hair loss treatments for Women:</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">FDA-Approved Treatment Options</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Evidence-based solutions for female hair loss
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{treatment.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {treatment.description}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-900">
                  <p className="text-gray-600 text-sm">
                    <strong>Note:</strong> {treatment.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Causes */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Common Causes of Female Hair Loss</h2>
            <p className="text-lg text-gray-700 mb-8">
              Understanding the root cause is essential for effective treatment. Female pattern hair loss can occur due to various factors:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {commonCauses.map((cause, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{cause}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Minoxidil Details */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-gray-900">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Minoxidil - FDA Approved Treatment
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Minoxidil has been approved by the Food and Drug Administration (FDA) to treat hair loss.</strong> Minoxidil topical is available over-the-counter under the trade name Rogaine and several generic names (OTC).
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Minoxidil is safe for both men and women, and <strong>users report a high level of satisfaction with the product</strong>. Minoxidil increases hair growth and may lengthen their growth cycle.
              </p>
              <p className="text-lg text-gray-700">
                It can <strong>thicken hair and minimize the impression of patchiness or widening hair parting</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRP Details */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-gray-900">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Platelet-Rich Plasma Injections
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Preliminary evidence suggests that platelet-rich plasma injections may also help prevent hair loss.</strong>
              </p>
              <p className="text-lg text-gray-700">
                A plasma-rich injection is performed by a doctor who <strong>draws the patient's blood, separates the platelet-rich plasma from the blood, and then reinjects it into the damaged areas of the scalp</strong>. This contributes to the acceleration of tissue repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition & Diet */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Consume a Healthy Diet
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Eating a nutritious diet may also promote regular hair development.</strong> A healthy diet would often include a variety of foods, including a variety of vegetables and fruits. These contain a variety of vital nutrients and chemicals that contribute to the health of the skin and hair.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Iron levels may also have an effect on the health of your hair.</strong> Females experiencing hair loss should consult their physician for a blood test to determine if they have an iron deficit.
              </p>
              <p className="text-lg text-gray-700">
                A physician may recommend an <strong>iron-rich diet or the use of an iron supplement</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hair Transplantation */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Hair Transplantation for Women
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                <strong>In some instances, when a patient does not respond to treatment, specialists may propose hair transplantation.</strong>
              </p>
              <p className="text-lg text-gray-700">
                This procedure includes <strong>transplanting hair from donor areas to areas of baldness in order to naturally increase the area's hair density</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Hair Care & Prevention Tips</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {preventionTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
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
            <h2 className="mb-6">Expert Care for Women's Hair Loss</h2>
            <p className="text-lg text-gray-700 mb-8">
              Dr. Chacko Cyriac understands the emotional impact of female hair loss and provides personalized, confidential care with proven results. With specialized training in female hair restoration techniques and over 22 years of experience, you're in expert hands.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                <div className="text-4xl font-bold text-gray-900 mb-2">2000+</div>
                <p className="text-gray-600">Female Patients Treated</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                <div className="text-4xl font-bold text-gray-900 mb-2">22+</div>
                <p className="text-gray-600">Years Experience</p>
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
          <h2 className="text-white mb-6">Start Your Hair Restoration Journey</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss FDA-approved treatment options for your hair loss concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block">
              Book Consultation
            </Link>
            <a href="tel:+919645921944" className="btn-secondary inline-flex items-center justify-center gap-2">
              <Phone size={20} />
              Call Now: +91 96459 21944
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
