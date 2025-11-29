import Link from 'next/link'
import { CheckCircle, Clock, Users, ArrowRight, Phone, IndianRupee } from 'lucide-react'
import ServiceHeroImage from '@/components/ServiceHeroImage'

export const metadata = {
  title: 'FUE Hair Transplant in Kerala | Follicular Unit Extraction',
  description: 'Advanced FUE hair transplant technique with no linear scarring. Natural results with minimal downtime. Expert surgeon Dr. Chacko Cyriac.',
  keywords: 'FUE hair transplant Kerala, follicular unit extraction, scarless hair transplant, hair restoration Kerala',
}

export default function FUEPage() {
  const benefits = [
    'No linear scarring',
    'Minimal downtime (3-5 days)',
    'Natural-looking results',
    'Less post-operative discomfort',
    'Can wear hair short',
    'Faster healing process',
    'Suitable for body hair extraction',
    'Minimal invasion'
  ]

  const process = [
    {
      step: '1',
      title: 'Consultation',
      description: 'Detailed scalp analysis and personalized treatment plan'
    },
    {
      step: '2',
      title: 'Preparation',
      description: 'Donor area trimming and local anesthesia application'
    },
    {
      step: '3',
      title: 'Extraction',
      description: 'Individual follicles extracted using micro-punch technique'
    },
    {
      step: '4',
      title: 'Implantation',
      description: 'Grafts carefully placed in recipient area for natural density'
    }
  ]

  const faqs = [
    {
      question: 'Is FUE hair transplant permanent?',
      answer: 'Yes, FUE hair transplant provides permanent results. The transplanted hair follicles are resistant to DHT (the hormone responsible for hair loss) and will continue to grow naturally for a lifetime.'
    },
    {
      question: 'How long does FUE surgery take?',
      answer: 'FUE procedure typically takes 6-8 hours depending on the number of grafts needed. Most patients require 2000-4000 grafts for optimal coverage.'
    },
    {
      question: 'When will I see results?',
      answer: 'Initial hair growth appears after 3-4 months. Significant results are visible by 6-9 months, with full results achieved after 12-18 months as the transplanted hair matures.'
    },
    {
      question: 'Does FUE leave scars?',
      answer: 'FUE leaves tiny dot scars (less than 1mm) that are virtually invisible, even with short haircuts. This is a major advantage over FUT which leaves a linear scar.'
    },
    {
      question: 'What is the success rate of FUE?',
      answer: 'With an experienced surgeon like Dr. Chacko Cyriac, FUE has a 95-98% graft survival rate. Proper post-operative care is essential for optimal results.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Most Advanced Technique
              </div>
              <h1 className="text-white mb-6">FUE Hair Transplant</h1>
              <p className="text-xl text-gray-300 mb-8">
                Follicular Unit Extraction - The gold standard in hair restoration with no linear scarring and natural results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Book Free Consultation
                </Link>
                <a href="tel:+918884447777" className="btn-secondary inline-flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>
            
            {/* Reusable Image Component */}
            <ServiceHeroImage 
              src="/images/services/fue.webp"
              alt="FUE Hair Transplant Procedure"
              placeholder="FUE Procedure"
            />
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Clock className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Duration</h3>
              <p className="text-gray-600">6-8 hours</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Users className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Recovery</h3>
              <p className="text-gray-600">3-5 days</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <CheckCircle className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Success Rate</h3>
              <p className="text-gray-600">95-98%</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <IndianRupee className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Starting From</h3>
              <p className="text-gray-600">₹40,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is FUE */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">What is FUE Hair Transplant?</h2>
            <p className="text-xl text-gray-600">
              Follicular Unit Extraction (FUE) is an advanced hair restoration technique where individual hair follicles are extracted from the donor area and transplanted to balding or thinning areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">How FUE Works</h3>
              <p className="text-gray-700 mb-4">
                Unlike traditional strip methods, FUE uses a specialized micro-punch tool (0.6-1.0mm) to extract individual follicular units from the donor area. This minimally invasive technique leaves tiny circular scars that are virtually undetectable.
              </p>
              <p className="text-gray-700 mb-6">
                The extracted grafts are then carefully implanted into the recipient area following your natural hair growth pattern, ensuring completely natural-looking results.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Personalized Quote <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h4 className="text-xl font-bold mb-4">Perfect For:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Those who prefer wearing hair short</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Patients with limited donor availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Active lifestyle with minimal downtime</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Body hair transplant candidates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Scar revision procedures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Benefits of FUE Hair Transplant</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why thousands choose FUE for their hair restoration journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <CheckCircle className="w-8 h-8 text-gray-900 mb-3" />
                <p className="font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">The FUE Process</h2>
            <p className="text-xl text-gray-600">
              Step-by-step journey to your new look
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-900" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about FUE hair transplant
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-lg hover:bg-gray-50 transition-colors">
                    {faq.question}
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Start Your Hair Restoration Journey?</h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with Dr. Chacko Cyriac to discuss your personalized FUE treatment plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block">
              Book Free Consultation
            </Link>
            <Link href="/gallery" className="btn-secondary inline-block">
              View Before & After Results
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
