import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, AlertTriangle, } from "lucide-react";

export const metadata = {
  title: "Failed Hair Transplant | Corrective Hair Transplant Surgery | Eterno Clinic",
  description: "Expert corrective hair transplant surgery for failed procedures. Fix unnatural hairlines, poor density, visible scars by Dr. Chacko Cyriac in Kochi, Kerala.",
  keywords: "failed hair transplant, corrective hair transplant, hair transplant repair, revision hair transplant, botched hair transplant fix",
};

export default function FailedHairTransplantRepairPage() {
  const signs = [
    {
      title: "Unnatural, Pluggy Hairline",
      description: "Large grafts creating \"corn row\" or \"doll hair\" appearance with visible clusters instead of natural single hairs"
    },
    {
      title: "Wrong Hairline Design",
      description: "Hairline positioned too low, too straight, or not matching facial features and age-appropriate aesthetics"
    },
    {
      title: "Poor Density",
      description: "Thin, sparse results with visible scalp showing through transplanted areas despite adequate grafts used"
    },
    {
      title: "Visible Scarring",
      description: "Wide FUT scars, cobblestoning, pitting, or white dots from poorly executed extractions"
    },
    {
      title: "Wrong Hair Direction",
      description: "Grafts planted at incorrect angles causing hair to stick up or grow in unnatural directions"
    },
    {
      title: "Patchy, Uneven Growth",
      description: "Dense patches next to empty areas creating irregular, inconsistent appearance"
    },
    {
      title: "Depleted Donor Area",
      description: "Over-harvesting leaving visible thinning or scarring at the back and sides of the head"
    },
    {
      title: "Bushy Temple Area",
      description: "Too many grafts placed in temples creating overly dense, unnatural \"pom-pom\" effect"
    }
  ];

  const solutions = [
    {
      title: "Hairline Redesign & Correction",
      description: "Removing poorly placed grafts and recreating a natural, age-appropriate hairline with proper single-hair placement",
      technique: "Surgical extraction + FUE refinement"
    },
    {
      title: "Density Enhancement",
      description: "Adding grafts between existing transplants to fill gaps and create fuller, more natural coverage",
      technique: "FUE or DHI method"
    },
    {
      title: "Scar Revision & Camouflage",
      description: "FUT scar excision, scalp micropigmentation, or strategic graft placement to hide visible scarring",
      technique: "Multiple techniques combined"
    },
    {
      title: "Body Hair Transplant (BHT)",
      description: "Using beard, chest, or body hair when donor scalp is depleted from previous over-harvesting",
      technique: "FUE extraction from body"
    },
    {
      title: "Temple Correction",
      description: "Removing excessive grafts from overly dense temple areas and redistributing to needed areas",
      technique: "Graft extraction + redistribution"
    },
    {
      title: "Angle & Direction Correction",
      description: "Strategic placement of new grafts to mask poorly angled existing hair and create natural flow",
      technique: "Precise DHI implantation"
    }
  ];

  const prevention = [
    "Research surgeon qualifications: MCh/Board certification in plastic surgery or dermatology",
    "Review before/after photos from multiple angles, not just front view",
    "Meet previous patients or read verified testimonials",
    "Understand realistic expectations for your donor supply",
    "Avoid clinics offering unrealistically low prices or guarantees",
    "Verify surgeon performs procedure personally, not technicians",
    "Check clinic's infection control and safety standards",
    "Get second opinion before proceeding with any procedure"
  ];

  const whyDrCyriac = [
    "MCh Plastic Surgery specialist with 22+ years surgical experience",
    "International training from UK, USA, Canada, Singapore in advanced techniques",
    "Successfully repaired 200+ failed hair transplants",
    "Expert in body hair transplant for depleted donor areas",
    "Advanced scar revision and camouflage techniques",
    "Honest assessment of what can realistically be achieved",
    "Comprehensive aftercare with lifetime follow-up support",
    "Proven track record with documented results"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="mb-0 text-white">Failed Hair Transplant</h1>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              Expert corrective surgery to fix botched hair transplants - Restore natural results with Dr. Chacko Cyriac
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-block text-center">
                Get Expert Second Opinion
              </Link>
              <Link href="/gallery" className="btn-secondary inline-block text-center">
                View Repair Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 border-l-4 border-gray-900 p-6 rounded-r-lg mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-gray-900 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">You're Not Alone</h3>
                  <p className="text-gray-700">
                    Thousands of people experience disappointing results from hair transplants performed by unqualified practitioners or poorly executed procedures. The good news: most failed transplants can be corrected.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mb-6">Understanding Failed Hair Transplants</h2>
            <p className="text-lg text-gray-700 mb-4">
              A failed hair transplant occurs when the results are unnatural, aesthetically poor, or significantly different from what was promised. This can happen due to inexperienced surgeons, outdated techniques, poor planning, or unrealistic patient expectations.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Common issues include unnatural "pluggy" hairlines, poor density despite adequate grafts, visible scarring, wrong hair direction, and depleted donor areas from over-harvesting. These problems not only affect appearance but can cause significant emotional distress and loss of confidence.
            </p>
            <p className="text-lg text-gray-700">
              At Eterno Clinic, Dr. Chacko Cyriac specializes in corrective hair transplant surgery, using advanced techniques to repair failed procedures and restore natural, aesthetically pleasing results. With over 22 years of surgical experience and international training, he has successfully helped hundreds of patients regain their confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Signs of Failed Transplant */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Signs Your Hair Transplant Failed</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognizing the problem is the first step to correction
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {signs.map((sign, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gray-900 hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{sign.title}</h3>
                <p className="text-gray-600">{sign.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Solutions */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Corrective Solutions & Repair Options</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced techniques to fix failed procedures and achieve natural results
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-900 font-semibold">Technique: {solution.technique}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Our Corrective Assessment Process</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-3">Step 1</div>
                <h3 className="text-lg font-bold mb-2">Comprehensive Evaluation</h3>
                <p className="text-gray-600">Detailed analysis of existing transplant, donor area assessment, and photographic documentation from all angles</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-3">Step 2</div>
                <h3 className="text-lg font-bold mb-2">Honest Consultation</h3>
                <p className="text-gray-600">Realistic discussion of what can be achieved, limitations, required sessions, and expected outcomes</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-3">Step 3</div>
                <h3 className="text-lg font-bold mb-2">Customized Repair Plan</h3>
                <p className="text-gray-600">Tailored strategy addressing specific issues: hairline correction, density enhancement, scar repair, or combination approach</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-3">Step 4</div>
                <h3 className="text-lg font-bold mb-2">Staged Correction</h3>
                <p className="text-gray-600">Multiple sessions if needed, allowing optimal healing and donor recovery between procedures for best results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">How to Avoid a Failed Hair Transplant</h2>
            <p className="text-lg text-gray-700 mb-8">
              If you haven't had a transplant yet, here's how to protect yourself from poor results:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {prevention.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
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
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">Why Trust Dr. Chacko Cyriac for Repair Surgery?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Corrective surgery requires exceptional skill, experience, and artistic judgment. Here's why Dr. Cyriac is your best choice:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {whyDrCyriac.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
                  <p className="text-gray-600">Repairs Completed</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
                  <p className="text-gray-600">Satisfaction Rate</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">22+</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
              <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black inline-flex items-center gap-2">
                Learn More About Dr. Cyriac <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border-2 border-gray-300">
            <p className="text-xl text-gray-700 italic mb-6">
              "I had a botched hair transplant at another clinic that left me with an unnatural hairline and visible scarring. Dr. Cyriac not only fixed the hairline but also camouflaged the scars beautifully. Now I finally have the natural results I always wanted. I only wish I had come to him first!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
                R
              </div>
              <div>
                <p className="font-bold text-gray-900">Rahul M.</p>
                <p className="text-sm text-gray-600">Corrective Hair Transplant Patient</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Don't Live with a Failed Hair Transplant</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get an expert assessment of your situation and discover your repair options. Most cases can be significantly improved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block">
              Book Free Assessment
            </Link>
            <a href="tel:+919645921944" className="btn-secondary inline-flex items-center justify-center gap-2">
              <Phone size={20} />
              Call for Urgent Help
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
