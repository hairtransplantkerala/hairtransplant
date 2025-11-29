import Link from 'next/link'
import { CheckCircle, Clock, IndianRupee, Users, ArrowRight, Phone } from 'lucide-react'
import ServiceHeroImage from '@/components/ServiceHeroImage'

export const metadata = {
  title: 'FUT Hair Transplant in Kerala | Strip Method Hair Restoration',
  description: 'FUT (Follicular Unit Transplantation) hair transplant with maximum graft yield. Cost-effective solution for advanced hair loss.',
  keywords: 'FUT hair transplant Kerala, strip method, hair restoration, follicular unit transplantation',
}

export default function FUTPage() {
  const benefits = [
    'Maximum graft yield in single session',
    'Cost-effective for large areas',
    'Higher graft survival rate',
    'Ideal for advanced baldness',
    'Can harvest 3000-4000 grafts',
    'Less time-consuming extraction',
    'Better for dense packing',
    'Single linear scar (easily hidden)'
  ]

  const process = [
    {
      step: '1',
      title: 'Strip Removal',
      description: 'A thin strip of scalp tissue removed from donor area under local anesthesia'
    },
    {
      step: '2',
      title: 'Follicle Dissection',
      description: 'Strip dissected into individual follicular units under microscope'
    },
    {
      step: '3',
      title: 'Site Creation',
      description: 'Recipient sites created following natural hair growth pattern'
    },
    {
      step: '4',
      title: 'Graft Placement',
      description: 'Follicular units carefully implanted for maximum density'
    }
  ]

  const faqs = [
    {
      question: 'What is the difference between FUT and FUE?',
      answer: 'FUT involves removing a strip of scalp from the donor area and dissecting it into individual grafts, while FUE extracts individual follicles directly. FUT leaves a linear scar but allows for more grafts in one session.'
    },
    {
      question: 'Will the FUT scar be visible?',
      answer: 'The linear scar can be easily hidden with hair as short as 1-2 cm. With proper surgical technique and post-op care, the scar becomes a thin line that is not noticeable when hair is grown out.'
    },
    {
      question: 'How many grafts can be transplanted with FUT?',
      answer: 'FUT typically allows harvesting of 3000-4000 grafts in a single session, making it ideal for covering large bald areas. This is often more than what can be safely extracted with FUE in one session.'
    },
    {
      question: 'What is the recovery time for FUT?',
      answer: 'Recovery takes about 10-14 days. Stitches are removed after 10-14 days. Most patients can return to work after 7-10 days. Full healing of the donor area takes 2-3 weeks.'
    },
    {
      question: 'Is FUT painful?',
      answer: 'The procedure is performed under local anesthesia, so there is no pain during surgery. Post-operative discomfort in the donor area is manageable with prescribed pain medication and typically subsides within 3-5 days.'
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
                Maximum Graft Yield
              </div>
              <h1 className="text-white mb-6">FUT Hair Transplant</h1>
              <p className="text-xl text-gray-300 mb-8">
                Follicular Unit Transplantation - The proven strip method for maximum coverage in advanced hair loss cases.
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
            
            <ServiceHeroImage 
              src="/images/services/fut.webp"
              alt="FUT Hair Transplant Procedure"
              placeholder="FUT Procedure"
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
              <p className="text-gray-600">4-6 hours</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Users className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Recovery</h3>
              <p className="text-gray-600">10-14 days</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <CheckCircle className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Grafts</h3>
              <p className="text-gray-600">3000-4000</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <IndianRupee className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Starting From</h3>
              <p className="text-gray-600">₹35,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is FUT */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">What is FUT Hair Transplant?</h2>
            <p className="text-xl text-gray-600">
              Follicular Unit Transplantation (FUT), also known as the strip method, is a time-tested hair restoration technique where a strip of scalp is removed from the donor area and dissected into individual follicular units.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">How FUT Works</h3>
              <p className="text-gray-700 mb-4">
                A thin strip of hair-bearing scalp (typically 1-1.5 cm wide and 15-25 cm long) is surgically removed from the back of the head. This strip is then carefully dissected under stereoscopic microscopes into individual follicular units.
              </p>
              <p className="text-gray-700 mb-6">
                The donor area is closed with sutures, leaving a fine linear scar that can be easily hidden by surrounding hair. The dissected grafts are then implanted into the recipient area, creating natural density and coverage.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Personalized Quote <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h4 className="text-xl font-bold mb-4">Ideal For:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Advanced hair loss (Norwood 4-7)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Patients needing maximum grafts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Those comfortable with longer hair</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Cost-conscious patients</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Dense packing requirements</span>
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
            <h2 className="mb-4">Benefits of FUT Hair Transplant</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why FUT remains a preferred choice for extensive hair restoration
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
            <h2 className="mb-4">The FUT Process</h2>
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
                Everything you need to know about FUT hair transplant
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
          <h2 className="text-white mb-4">Ready for Maximum Coverage?</h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with Dr. Chacko Cyriac to discuss your personalized FUT treatment plan
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
