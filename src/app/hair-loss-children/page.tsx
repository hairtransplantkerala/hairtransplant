import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Baby } from "lucide-react";

export const metadata = {
  title: "Hair Loss in Children | Pediatric Alopecia Treatment | Eterno Clinic",
  description: "Expert diagnosis and treatment for childhood hair loss. Safe, effective solutions for alopecia areata, tinea capitis, and other pediatric hair conditions by Dr. Chacko Cyriac.",
  keywords: "child hair loss, pediatric alopecia, children hair loss treatment, alopecia areata children, tinea capitis, childhood baldness",
};

export default function HairLossChildrenPage() {
  const causes = [
    {
      title: "Alopecia Areata",
      description: "Autoimmune condition causing round, smooth bald patches. Most common cause of hair loss in children. Usually reversible with treatment [web:220]."
    },
    {
      title: "Tinea Capitis (Ringworm)",
      description: "Fungal scalp infection causing scaly, itchy patches with broken hair. Highly contagious among children, requires antifungal treatment."
    },
    {
      title: "Telogen Effluvium",
      description: "Temporary hair shedding triggered by fever, surgery, severe illness, emotional stress, or rapid weight loss."
    },
    {
      title: "Trichotillomania",
      description: "Hair-pulling disorder often stress-related. Behavioral therapy and family support essential for treatment."
    },
    {
      title: "Traction Alopecia",
      description: "Hair loss from tight hairstyles like braids, ponytails, or buns pulling on delicate hair follicles."
    },
    {
      title: "Nutritional Deficiencies",
      description: "Low iron, zinc, biotin, or protein can cause hair thinning. More common in picky eaters or restricted diets."
    }
  ];

  const treatments = [
    {
      title: "Topical Corticosteroids",
      description: "Prescription-strength creams applied to bald spots, most effective first-line treatment for children with alopecia areata [web:220]",
      age: "Safe for all ages"
    },
    {
      title: "Minoxidil",
      description: "FDA-approved topical solution to help maintain regrown hair. Few side effects, good option after corticosteroid treatment stops [web:220]",
      age: "Children 10+ years"
    },
    {
      title: "Antifungal Medications",
      description: "Oral medications (griseofulvin, terbinafine) for tinea capitis. Medicated shampoos to prevent spread to others.",
      age: "As prescribed by doctor"
    },
    {
      title: "Behavioral Therapy",
      description: "Cognitive behavioral therapy (CBT) for trichotillomania. Family counseling to address underlying stress triggers.",
      age: "All ages with parental support"
    },
    {
      title: "Nutritional Supplementation",
      description: "Iron, zinc, vitamin D supplements when deficiencies identified through blood tests. Dietary counseling for balanced nutrition.",
      age: "As recommended by pediatrician"
    },
    {
      title: "Observation & Reassurance",
      description: "Many childhood hair loss conditions resolve on their own. Regular monitoring with supportive care often sufficient.",
      age: "First approach for mild cases"
    }
  ];

  const whenToConsult = [
    "Sudden appearance of bald patches or rapid hair loss",
    "Scalp itching, redness, scaling, or pain",
    "Hair loss accompanied by other symptoms (fatigue, weight changes)",
    "Visible hair pulling or repetitive touching behaviors",
    "Emotional distress or social withdrawal due to hair loss",
    "Hair breakage at scalp with black dots (tinea capitis sign)",
    "No improvement after 6-12 months of observation"
  ];

  const support = [
    {
      title: "Emotional Support",
      description: "Listen to your child's concerns without judgment. Validate their feelings about appearance changes."
    },
    {
      title: "School Communication",
      description: "Inform teachers about the condition to prevent bullying. Request support from school counselor if needed."
    },
    {
      title: "Age-Appropriate Explanation",
      description: "Explain the condition in simple terms. Reassure that it's not their fault and treatment is available."
    },
    {
      title: "Styling Options",
      description: "Try fun hats, headbands, or age-appropriate wigs if child desires. Make it a positive, empowering choice."
    },
    {
      title: "Peer Connections",
      description: "Connect with support groups for children with alopecia. Meeting others with similar experiences reduces isolation."
    },
    {
      title: "Professional Counseling",
      description: "Consider child psychologist if hair loss causes significant anxiety, depression, or social avoidance."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Baby size={40} className="text-blue-300" />
              <h1 className="mb-0 text-white">Hair Loss in Children</h1>
            </div>
            <p className="text-xl text-gray-200 mb-8">
              Expert pediatric hair loss diagnosis and treatment - Compassionate care for your child by Dr. Chacko Cyriac
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-block text-center bg-white text-gray-900 hover:bg-gray-100">
                Book Pediatric Consultation
              </Link>
              <Link href="/about" className="btn-secondary inline-block text-center border-white text-white hover:bg-white hover:text-gray-900">
                Meet Dr. Cyriac
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Understanding Hair Loss in Children</h2>
            <p className="text-lg text-gray-700 mb-4">
              Discovering that your child is losing hair can be alarming for parents. While childhood hair loss is less common than in adults, it affects many children and is rarely dangerous or life-threatening [web:223]. Most causes are treatable, and with proper diagnosis and care, children can regrow their hair.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Children experience hair loss differently than adults. The most common condition is alopecia areata, an autoimmune disorder causing patchy bald spots. Other causes include fungal infections, stress-related shedding, nutritional deficiencies, and hair-pulling behaviors [web:223].
            </p>
            <p className="text-lg text-gray-700">
              At Eterno Clinic, Dr. Chacko Cyriac provides gentle, child-friendly evaluation and evidence-based treatments, ensuring both your child's physical and emotional wellbeing throughout the process.
            </p>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Common Causes of Childhood Hair Loss</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Accurate diagnosis is the first step to effective treatment
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

      {/* Treatment Options */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Safe, Effective Treatments for Children</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Age-appropriate, evidence-based care tailored to your child's needs [web:220][web:223]
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{treatment.title}</h3>
                <p className="text-gray-600 mb-4">{treatment.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-indigo-600 font-semibold">{treatment.age}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Consult */}
      <section className="py-20 bg-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">When to Consult a Specialist</h2>
            <p className="text-lg text-gray-700 mb-8">
              Early consultation helps identify the cause and start appropriate treatment. Contact Dr. Cyriac if your child experiences:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {whenToConsult.map((sign, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Your Child */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">How to Support Your Child</h2>
            <p className="text-lg text-gray-700 mb-8">
              Hair loss can be emotionally challenging for children, affecting self-esteem and social interactions. Here's how to help:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {support.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prognosis */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Good News: Most Children Regrow Their Hair</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700 mb-4">
                With proper treatment, most children with alopecia areata will regrow hair within one year [web:223]. Even without treatment, hair may spontaneously regrow in young children.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Fungal infections respond well to antifungal medications when treated promptly. Telogen effluvium typically resolves once the triggering factor is addressed.
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                Early diagnosis and appropriate treatment significantly improve outcomes and reduce emotional distress for your child.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Cyriac */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Child-Friendly Expert Care</h2>
            <p className="text-lg text-gray-700 mb-8">
              Dr. Chacko Cyriac provides gentle, compassionate care for children with hair loss. With extensive experience in pediatric cases and a warm, reassuring approach, he helps children and families navigate treatment with confidence.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
                <p className="text-gray-600">Children Treated</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-indigo-600 mb-2">22+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
                <p className="text-gray-600">Treatment Success</p>
              </div>
            </div>
            <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black inline-flex items-center gap-2">
              Learn More About Dr. Cyriac <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Get Expert Help for Your Child Today</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule a gentle, child-friendly consultation to understand the cause and explore treatment options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block bg-white text-gray-900 hover:bg-gray-100">
              Book Consultation
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
