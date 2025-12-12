import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Zap } from "lucide-react";

export const metadata = {
  title: "Stem Cell FUE Hair Transplant | Advanced Hair Restoration | Eterno Clinic",
  description: "Revolutionary stem cell-enhanced FUE hair transplant for superior results. Faster healing, better graft survival by Dr. Chacko Cyriac in Kochi, Kerala.",
  keywords: "stem cell hair transplant, stem cell FUE, regenerative hair transplant, advanced FUE, stem cell therapy hair loss",
};

export default function StemCellFUEPage() {
  const advantages = [
    {
      title: "Enhanced Graft Survival Rate",
      description: "Stem cells improve graft survival rate from standard 60-70% to 85-90%, ensuring more transplanted hair survives and grows"
    },
    {
      title: "Faster Healing & Recovery",
      description: "Regenerative properties accelerate wound healing. Most patients resume activities within 2-3 days vs 7-10 days with traditional FUE"
    },
    {
      title: "Improved Hair Density",
      description: "45% increase in hair density compared to 25% with FUE alone. Stem cells stimulate dormant follicles to activate"
    },
    {
      title: "Healthier Scalp Environment",
      description: "Stem cells promote neovascularization (new blood vessel formation) and reduce scalp fibrosis, creating optimal conditions for growth"
    },
    {
      title: "Stimulates Existing Hair",
      description: "Not just transplanted follicles - nearby existing hair becomes thicker and healthier due to growth factor stimulation"
    },
    {
      title: "Better Results on Scarred Tissue",
      description: "Particularly effective for repair cases or patients with scalp scarring from previous surgeries"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Stem Cell Harvesting",
      description: "Small amount of adipose (fat) tissue or scalp tissue extracted using minor liposuction-like procedure or follicle collection"
    },
    {
      step: "2",
      title: "Cell Processing & Isolation",
      description: "Harvested tissue processed with enzymes and centrifugation to isolate and concentrate stem/progenitor cells"
    },
    {
      step: "3",
      title: "Nutrient-Rich Solution Preparation",
      description: "Isolated stem cells suspended in nutrient-rich solution, often mixed with bioactive factors from patient's own blood plasma"
    },
    {
      step: "4",
      title: "Standard FUE Extraction",
      description: "Individual hair follicles extracted from donor area using micro-punch technique (same as traditional FUE)"
    },
    {
      step: "5",
      title: "Recipient Site Creation",
      description: "Tiny incisions made in balding areas at precise angles for natural hair direction"
    },
    {
      step: "6",
      title: "Stem Cell + Graft Implantation",
      description: "Extracted follicles mixed with stem cell solution before implantation. Stem cell solution also injected into recipient area"
    },
    {
      step: "7",
      title: "Post-Procedure Stem Cell Therapy",
      description: "Additional stem cell injections administered in follow-up sessions to maximize results and stimulate healing"
    }
  ];

  const vsTraditional = [
    {
      aspect: "Graft Survival Rate",
      traditional: "60-70%",
      stemCell: "85-90%",
      advantage: "stem"
    },
    {
      aspect: "Healing Time",
      traditional: "7-10 days",
      stemCell: "2-3 days",
      advantage: "stem"
    },
    {
      aspect: "Hair Density Improvement",
      traditional: "25%",
      stemCell: "45%",
      advantage: "stem"
    },
    {
      aspect: "Scalp Health Improvement",
      traditional: "Minimal",
      stemCell: "Significant",
      advantage: "stem"
    },
    {
      aspect: "Existing Hair Stimulation",
      traditional: "No",
      stemCell: "Yes",
      advantage: "stem"
    },
    {
      aspect: "Procedure Complexity",
      traditional: "Standard",
      stemCell: "Advanced",
      advantage: "neutral"
    },
    {
      aspect: "Cost",
      traditional: "Moderate",
      stemCell: "Higher",
      advantage: "traditional"
    }
  ];

  const idealFor = [
    "Patients seeking maximum graft survival and density",
    "Younger patients wanting to preserve donor area",
    "Advanced baldness requiring optimal use of limited grafts",
    "Repair/revision hair transplant cases",
    "Patients with scalp scarring or poor blood circulation",
    "Those wanting faster recovery and minimal downtime",
    "Individuals with diffuse thinning seeking overall improvement",
    "Patients who can afford premium treatment for best results"
  ];

  const science = [
    {
      title: "What Are Stem Cells ?",
      description: "Regenerative cells with ability to self-renew and develop into specialized cell types. They repair damaged tissues and stimulate cellular regeneration throughout the body."
    },
    {
      title: "How They Help Hair Growth",
      description: "Stem cells secrete growth factors (VEGF, FGF, IGF) that promote blood vessel formation, activate dormant follicles, reduce inflammation, and create optimal environment for hair growth."
    },
    {
      title: "Source of Stem Cells",
      description: "Autologous (patient's own) stem cells harvested from adipose tissue (fat), scalp tissue, or hair follicles. No rejection risk since they're from your own body."
    },
    {
      title: "Safety & Ethics",
      description: "Uses adult stem cells (not embryonic), making treatment ethically sound and legally approved. Extensively studied with established safety profile."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="mb-0 text-white">Stem Cell FUE Hair Transplant</h1>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              Revolutionary regenerative hair transplant technology - The future of hair restoration by Dr. Chacko Cyriac
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-block text-center">
                Book Advanced Consultation
              </Link>
              <Link href="/services/fue" className="btn-secondary inline-block text-center">
                Compare with Standard FUE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-gray-900 p-6 rounded-r-lg mb-8">
              <div className="flex items-start gap-3">
                <Zap className="text-gray-900 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-xl">Next-Generation Hair Restoration</h3>
                  <p className="text-gray-700">
                    Stem Cell FUE combines traditional follicular unit extraction with cutting-edge regenerative medicine for superior, longer-lasting results.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mb-6">What is Stem Cell FUE Hair Transplant ?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Stem Cell FUE (Follicular Unit Extraction) is an advanced hair transplant technique that enhances traditional FUE with regenerative stem cell therapy. The procedure extracts individual hair follicles from the donor area and enriches them with concentrated stem cells before implantation, while also injecting stem cell solution into the recipient scalp.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Unlike traditional FUE which simply moves hair follicles from one area to another, Stem Cell FUE actively stimulates the scalp's healing and regenerative processes. The stem cells promote neovascularization (new blood vessel growth), reduce inflammation, and create an optimal environment for both transplanted and existing hair to thrive.
            </p>
            <p className="text-lg text-gray-700">
              Clinical studies demonstrate that stem cell therapy prior to FUE significantly improves outcomes: 87% graft survival vs 60% with FUE alone, and 45% density increase vs 25%. At Eterno Clinic, Dr. Chacko Cyriac offers this cutting-edge treatment for patients seeking the absolute best hair restoration results.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Advantages of Stem Cell-Enhanced FUE</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Superior results backed by clinical research
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-900 hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">The Stem Cell FUE Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced 7-step procedure combining surgery and regenerative medicine
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {process.map((item, index) => (
              <div key={index} className="flex gap-6 bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stem Cell vs Traditional FUE */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-6 text-center">Stem Cell FUE vs Traditional FUE</h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
              See the measurable differences that make Stem Cell FUE worth the investment
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="p-4 text-left font-bold">Aspect</th>
                    <th className="p-4 text-center font-bold">Traditional FUE</th>
                    <th className="p-4 text-center font-bold">Stem Cell FUE</th>
                  </tr>
                </thead>
                <tbody>
                  {vsTraditional.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-semibold">{row.aspect}</td>
                      <td className={`p-4 text-center ${row.advantage === 'traditional' ? 'bg-gray-200 font-bold' : ''}`}>
                        {row.traditional}
                      </td>
                      <td className={`p-4 text-center ${row.advantage === 'stem' ? 'bg-gray-800 font-bold text-white' : ''}`}>
                        {row.stemCell}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* The Science */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">The Science Behind Stem Cell Therapy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {science.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-gray-300">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Who Should Consider Stem Cell FUE?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {idealFor.map((candidate, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{candidate}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Investment Consideration</h3>
              <p className="text-gray-700 mb-2">
                Stem Cell FUE typically costs 30-50% more than traditional FUE due to additional processing, equipment, and expertise required. However, the superior results, faster healing, and better graft survival make it worthwhile for patients seeking optimal outcomes.
              </p>
              <p className="text-gray-700">
                <strong>Think of it as:</strong> Paying more upfront for better long-term value - higher density, fewer follow-up procedures, and more natural results that last longer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Cyriac */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Advanced Stem Cell FUE at Eterno Clinic</h2>
            <p className="text-lg text-gray-700 mb-8">
              Dr. Chacko Cyriac brings cutting-edge regenerative medicine expertise to hair restoration. With 22+ years of surgical experience, international training, and access to state-of-the-art stem cell processing facilities, you receive the highest standard of care.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
                <p className="text-gray-700 font-semibold">Stem Cell FUE Procedures</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-gray-900 mb-2">90%</div>
                <p className="text-gray-700 font-semibold">Graft Survival Rate</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-gray-900 mb-2">22+</div>
                <p className="text-gray-700 font-semibold">Years Expertise</p>
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
          <h2 className="text-white mb-6">Experience the Future of Hair Restoration</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover if Stem Cell FUE is right for you. Schedule an advanced consultation to explore this revolutionary treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block">
              Book Advanced Consultation
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
