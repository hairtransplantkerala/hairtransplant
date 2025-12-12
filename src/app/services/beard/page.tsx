import Link from 'next/link'
import { CheckCircle, Clock, IndianRupee, Users, ArrowRight, Phone } from 'lucide-react'
import ServiceHeroImage from '@/components/ServiceHeroImage'

export const metadata = {
  title: 'Beard Transplant in Kerala | Facial Hair Restoration',
  description: 'Natural beard transplant for patchy beards, scars, and thin facial hair. Expert FUE technique by Dr. Chacko Cyriac.',
  keywords: 'beard transplant Kerala, facial hair restoration, beard hair transplant, mustache transplant',
}

export default function BeardTransplantPage() {
  const benefits = [
    'Natural-looking results',
    'Permanent facial hair',
    'Customizable design',
    'Covers patches & scars',
    'Minimal scarring',
    'Quick recovery',
    'Boosts confidence',
    'Long-lasting results'
  ]

  const process = [
    {
      step: '1',
      title: 'Design',
      description: 'Beard shape and density designed based on facial structure and preferences'
    },
    {
      step: '2',
      title: 'Extraction',
      description: 'Hair follicles extracted from scalp donor area using FUE technique'
    },
    {
      step: '3',
      title: 'Preparation',
      description: 'Grafts prepared and sorted based on hair thickness and characteristics'
    },
    {
      step: '4',
      title: 'Implantation',
      description: 'Follicles implanted at precise angles matching natural beard growth'
    }
  ]

  const faqs = [
    {
      question: 'Who is a good candidate for beard transplant ',
      answer: 'Ideal candidates include men with patchy beards, facial scars from burns or accidents, thin beard growth, or those who cannot grow facial hair due to genetics. You should be at least 25 years old with stable hair patterns.'
    },
    {
      question: 'How many grafts are needed for a full beard ?',
      answer: 'A full beard typically requires 2000-3000 grafts, mustache needs 400-600 grafts, and goatee requires 500-800 grafts. The exact number depends on desired density and coverage area.'
    },
    {
      question: 'Is beard transplant permanent ?',
      answer: 'Yes, transplanted facial hair is permanent. However, the transplanted hair retains characteristics of scalp hair, so you may need to trim it more frequently as it grows faster than natural beard hair.'
    },
    {
      question: 'Does beard transplant look natural ?',
      answer: 'When performed by an experienced surgeon like Dr. Chacko Cyriac, results are completely natural. Careful attention to angle, direction, and distribution ensures the transplanted beard blends seamlessly with existing facial hair.'
    },
    {
      question: 'What is the recovery time ?',
      answer: 'Most swelling and redness resolve within 5-7 days. You can return to work after 3-5 days. Transplanted hair will shed within 2-3 weeks and regrow permanently after 3-4 months. Full results visible in 8-12 months.'
    },
    {
      question: 'Can I shave after beard transplant ?',
      answer: 'You should avoid shaving for the first 10 days. After that, you can shave carefully with an electric razor. After 3 weeks, you can shave normally. The transplanted follicles are permanent and will regrow like regular beard hair.'
    }
  ]

  const treatmentAreas = [
    'Full beard',
    'Mustache',
    'Goatee',
    'Sideburns',
    'Chin strap',
    'Patchy areas',
    'Scar coverage',
    'Beard thickening'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Transform Your Look
              </div>
              <h1 className="text-white mb-6">Beard Transplant</h1>
              <p className="text-xl text-gray-300 mb-8">
                Facial Hair Restoration - Achieve the full, masculine beard you've always wanted with natural, permanent results.
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
              src="/images/services/beard.webp"
              alt="Beard Transplant Procedure"
              placeholder="Beard Transformation"
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
              <p className="text-gray-600">3-5 hours</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Users className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Recovery</h3>
              <p className="text-gray-600">5-7 days</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <CheckCircle className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Grafts</h3>
              <p className="text-gray-600">1500-3000</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <IndianRupee className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Starting From</h3>
              <p className="text-gray-600">₹50,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Beard Transplant */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">What is Beard Transplant?</h2>
            <p className="text-xl text-gray-600">
              Beard transplant is a cosmetic procedure that uses FUE technique to transplant hair follicles from the scalp to facial areas, creating a natural, permanent beard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">How Beard Transplant Works</h3>
              <p className="text-gray-700 mb-4">
                Hair follicles are extracted individually from the back of your scalp (where hair is permanent and DHT-resistant) and transplanted to beard, mustache, or other facial areas. The procedure follows the natural growth pattern of facial hair.
              </p>
              <p className="text-gray-700 mb-6">
                Each graft is placed at a specific angle (typically 30-40 degrees) to match natural beard growth direction. Different hair characteristics are used for different areas - finer hair for mustache, coarser for chin.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Your Custom Design <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h4 className="text-xl font-bold mb-4">Treatment Areas:</h4>
              <div className="grid grid-cols-2 gap-3">
                {treatmentAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-900 flex-shrink-0" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Benefits of Beard Transplant</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why men choose beard transplant for facial hair restoration
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
            <h2 className="mb-4">The Beard Transplant Process</h2>
            <p className="text-xl text-gray-600">
              Your journey to a fuller beard in 4 steps
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

      {/* Before & After Care */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Post-Procedure Care</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Do's</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Keep the area clean and dry</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Sleep with head elevated</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Take prescribed medications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Apply ice packs to reduce swelling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Follow washing instructions</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Don'ts</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0 mt-1">✕</span>
                  <span>Don't touch or scratch the area</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0 mt-1">✕</span>
                  <span>Avoid smoking and alcohol</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0 mt-1">✕</span>
                  <span>No strenuous exercise for 2 weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0 mt-1">✕</span>
                  <span>Don't expose to direct sunlight</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0 mt-1">✕</span>
                  <span>Avoid swimming pools/saunas</span>
                </li>
              </ul>
            </div>
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
                Everything you need to know about beard transplant
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
          <h2 className="text-white mb-4">Get the Beard You've Always Wanted</h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Schedule a Consultation to discuss your custom beard design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block">
              Book Consultation
            </Link>
            <Link href="/gallery" className="btn-secondary inline-block">
              View Beard Transformations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
