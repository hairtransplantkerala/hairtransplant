import Link from "next/link";
import { AlertTriangle, CheckCircle, Shield, Award, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Choose Your Doctor Wisely | Hair Transplant Surgeon Selection Guide",
  description: "Important guide on choosing a qualified plastic surgeon for hair transplantation in Kerala. Learn why training and qualifications matter for your safety and results.",
  keywords: "choose hair transplant surgeon, qualified plastic surgeon Kerala, hair transplant safety, MCh Plastic Surgery, hair transplant qualifications",
};

export default function ChooseYourDoctorPage() {
  const redFlags = [
    "Technicians (non-medical personnel) performing procedures",
    "Ayurvedic and homeopathic doctors claiming to be cosmetic surgeons",
    "General physicians without surgical training",
    "Dentists performing hair transplants",
    "ENT surgeons claiming cosmetic surgery expertise",
    "Anyone without formal Plastic Surgery training and degree"
  ];

  const questionsToAsk = [
    {
      question: "What are your surgeon's qualifications?",
      importance: "Verify MCh or equivalent in Plastic Surgery"
    },
    {
      question: "What is their primary training background?",
      importance: "Ensure it's in Plastic and Reconstructive Surgery"
    },
    {
      question: "Are they qualified and trained to perform surgery?",
      importance: "Confirm surgical training, not just technical courses"
    },
    {
      question: "What kind of surgical training do they have?",
      importance: "Look for comprehensive surgical residency programs"
    },
    {
      question: "How many procedures have they performed?",
      importance: "Experience matters for natural-looking results"
    },
    {
      question: "Can you see before and after results?",
      importance: "Verify actual patient outcomes"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">Choose Your Doctor Wisely</h1>
          </div>
        </div>
      </section>

      {/* The Reality Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">The Reality of Hair Transplant Industry</h2>
            </div>

            <div className="bg-gradient-to-r from-gray-100 to-gray-100 p-8 rounded-2xl border-l-4 border-gray-700 mb-12">
              <p className="text-lg text-black-300 leading-relaxed mb-4 text-justify">
                Today, with the booming cosmetic surgery industry coupled with little or no control over the practice of medicine, untrained and unqualified personnel too are pitching in, to get for themselves a share of the pie.
              </p>
              <p className="text-lg text-black font-semibold">
                Hair transplantation is a typical example.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Who's Performing Hair Transplants? (That Shouldn't Be)
              </h3>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-300">
                <p className="text-gray-700 mb-6 text-justify">
                  There are technicians (non-medical personnel), Ayurvedic and homeopathic doctors, physicians, dentists, ENT surgeons claiming to be cosmetic surgeons, doing hair transplantation, in all parts of the world, including in Kerala, India.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {redFlags.map((flag, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border-2 border-gray-900">
                      <AlertTriangle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{flag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Plastic Surgeons */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-gray-900 mx-auto mb-4" />
              <h2 className="mb-6">Why Choose a Plastic Surgeon?</h2>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-white p-8 rounded-2xl border-l-4 border-gray-900 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                As far as training and expertise is concerned, your best bet for your hair transplant is a qualified, trained Plastic Surgeon.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                <strong>The specialty of Plastic Surgery is the only specialty where the trainees go through training in cosmetic surgery and hair transplantation as part of their curriculum.</strong>
              </p>
              <p className="text-xl text-gray-900 font-bold">
                Therefore look for the degree in Plastic Surgery before you decide on going under the knife...
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:border-gray-900 transition-all">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Comprehensive Training</h3>
                <p className="text-gray-600 text-sm">
                  Years of surgical residency in plastic and reconstructive surgery
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:border-gray-900 transition-all">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Specialized Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Hair transplantation taught as part of official curriculum
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:border-gray-900 transition-all">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Patient Safety</h3>
                <p className="text-gray-600 text-sm">
                  Trained to handle complications and ensure optimal outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions to Ask 
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">Essential Questions to Ask Your Surgeon</h2>
              <p className="text-xl text-gray-600">
                Don't be afraid to ask these important questions before your procedure
              </p>
            </div>

            <div className="space-y-4">
              {questionsToAsk.map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-gray-900">{item.question}</h3>
                      <p className="text-gray-600 flex items-center gap-2">
                        <CheckCircle size={16} className="text-gray-900 flex-shrink-0" />
                        {item.importance}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Dr. Cyriac's Qualifications */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-2xl text-white text-center border-2 border-gray-700">
              <h2 className="text-white mb-6">Dr. Chacko Cyriac - Qualified Plastic Surgeon</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Find out more about our Plastic Surgeon and how he can help you with getting the best results for your hair transplantation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/about" className="btn-primary inline-block">
                  View Full Qualifications
                </Link>
                <Link href="/gallery" className="btn-secondary inline-block">
                  See His Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Make an Informed Decision</h2>
            <p className="text-xl text-gray-600 mb-8">
              Find out more about our Plastic Surgeon and how he can help you get the best results for your hair transplantation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/about" className="btn-primary inline-block">
                About Our Plastic Surgeon
              </Link>
              <Link href="/contact" className="btn-secondary inline-block">
                Book Consultation
              </Link>
            </div>
            <p className="text-gray-600">
              View our{" "}
              <Link href="/gallery" className="text-gray-900 font-semibold underline hover:text-black">
                Gallery
              </Link>
              {" "}to understand better our approach to the problem of hair loss and the role of hair transplantation in Kochi, Kerala, India.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
