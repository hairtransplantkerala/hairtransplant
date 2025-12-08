import Link from 'next/link'
import { CheckCircle, Clock, IndianRupee, Users, ArrowRight, Phone, Zap } from 'lucide-react'
import ServiceHeroImage from '@/components/ServiceHeroImage'

export const metadata = {
  title: 'DHI Hair Transplant in Kerala | Direct Hair Implantation',
  description: 'Advanced DHI (Direct Hair Implantation) technique with CHOI pen. No shaving required, faster recovery, and natural density.',
  keywords: 'DHI hair transplant Kerala, CHOI implanter pen, direct hair implantation, no shave hair transplant',
}

export default function DHIPage() {
  const benefits = [
    'No shaving required',
    'Minimal bleeding',
    'Faster recovery time',
    'Maximum graft survival (98%)',
    'More precise angle control',
    'Higher hair density',
    'No pre-made incisions',
    'Reduced trauma to scalp'
  ]

  const process = [
    {
      step: '1',
      title: 'Extraction',
      description: 'Individual follicles extracted using micro-punch without shaving'
    },
    {
      step: '2',
      title: 'Loading',
      description: 'Each graft loaded into CHOI implanter pen immediately'
    },
    {
      step: '3',
      title: 'Direct Implantation',
      description: 'Grafts implanted directly at precise angle and depth'
    },
    {
      step: '4',
      title: 'Density Optimization',
      description: 'Maximum density achieved with controlled placement'
    }
  ]

  const faqs = [
    {
      question: 'What makes DHI different from FUE?',
      answer: 'DHI uses a specialized CHOI implanter pen that creates the incision and places the graft simultaneously, unlike FUE where incisions are made first and grafts placed later. This results in less tissue trauma and higher survival rates.'
    },
    {
      question: 'Is shaving required for DHI?',
      answer: 'No, DHI can be performed without shaving the recipient or donor area, making it ideal for those who want to maintain their hairstyle throughout the procedure and recovery.'
    },
    {
      question: 'How long does DHI procedure take?',
      answer: 'DHI typically takes 6-9 hours depending on the number of grafts (usually 2000-3000 per session). The process is more time-intensive than standard FUE due to the precise implantation technique.'
    },
    {
      question: 'What is the success rate of DHI?',
      answer: 'DHI has a graft survival rate of 95-98%, slightly higher than traditional FUE. The direct implantation method minimizes graft handling and time outside the body, improving survival.'
    },
    {
      question: 'Is DHI more expensive than FUE?',
      answer: 'Yes, DHI is generally 20-30% more expensive than FUE due to the specialized equipment (CHOI pens), longer procedure time, and advanced expertise required. However, the superior results often justify the additional cost.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4 flex items-center gap-2 w-fit">
                <Zap size={16} />
                Most Advanced Technology
              </div>
              <h1 className="text-white mb-6">DHI Hair Transplant</h1>
              <p className="text-xl text-gray-300 mb-8">
                Direct Hair Implantation - The revolutionary CHOI pen technique for maximum precision and natural density.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Book Consultation
                </Link>
                <a href="tel:+919645921944" className="btn-secondary inline-flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>
            
            <ServiceHeroImage 
              src="/images/services/dhi.webp"
              alt="DHI Hair Transplant with CHOI Pen"
              placeholder="DHI CHOI Pen"
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
              <p className="text-gray-600">6-9 hours</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Users className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Recovery</h3>
              <p className="text-gray-600">2-4 days</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <CheckCircle className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Survival Rate</h3>
              <p className="text-gray-600">95-98%</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <IndianRupee className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Starting From</h3>
              <p className="text-gray-600">₹55,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is DHI */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">What is DHI Hair Transplant?</h2>
            <p className="text-xl text-gray-600">
              Direct Hair Implantation (DHI) is the most advanced hair restoration technique using specialized CHOI implanter pens that allow for direct placement of follicles without pre-made incisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">How DHI Works</h3>
              <p className="text-gray-700 mb-4">
                DHI uses a pen-like device called the CHOI Implanter Pen. Each extracted follicle is loaded into the pen, which then creates a precise incision and places the graft in a single motion. This eliminates the need for separate channel opening.
              </p>
              <p className="text-gray-700 mb-6">
                The technique allows for perfect control over the angle, direction, and depth of each hair, resulting in the most natural-looking hairline and maximum density possible.
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
                  <span>Those who don't want to shave</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Professionals with busy schedules</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Women seeking hair restoration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Frontal hairline reconstruction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>High-density requirements</span>
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
            <h2 className="mb-4">Benefits of DHI Hair Transplant</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why DHI is the premium choice for hair restoration
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
            <h2 className="mb-4">The DHI Process</h2>
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
                Everything you need to know about DHI hair transplant
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
          <h2 className="text-white mb-4">Experience the Future of Hair Restoration</h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Schedule a Consultation with Dr. Chacko Cyriac to discover if DHI is right for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block">
              Book Consultation
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
