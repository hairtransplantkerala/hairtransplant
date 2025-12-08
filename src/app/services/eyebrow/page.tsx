import Link from 'next/link'
import { CheckCircle, Clock, IndianRupee, Users, ArrowRight, Phone, Eye } from 'lucide-react'
import ServiceHeroImage from '@/components/ServiceHeroImage'

export const metadata = {
  title: 'Eyebrow Transplant in Kerala | Natural Eyebrow Restoration',
  description: 'Eyebrow transplant for sparse, thin, or missing eyebrows. Natural-looking results with advanced FUE technique.',
  keywords: 'eyebrow transplant Kerala, eyebrow restoration, eyebrow hair transplant, sparse eyebrows treatment',
}

export default function EyebrowTransplantPage() {
  const benefits = [
    'Natural-looking eyebrows',
    'Permanent solution',
    'Customizable shape',
    'Minimal scarring',
    'Quick recovery',
    'Restores facial symmetry',
    'Boosts confidence',
    'No daily makeup needed'
  ]

  const process = [
    {
      step: '1',
      title: 'Design',
      description: 'Eyebrow shape designed based on face structure, golden ratio, and preferences'
    },
    {
      step: '2',
      title: 'Extraction',
      description: 'Single-hair follicles carefully selected and extracted from scalp'
    },
    {
      step: '3',
      title: 'Preparation',
      description: 'Grafts prepared ensuring finest single-hair units for natural appearance'
    },
    {
      step: '4',
      title: 'Implantation',
      description: 'Follicles placed at precise angles following natural eyebrow direction'
    }
  ]

  const faqs = [
    {
      question: 'Who needs eyebrow transplant?',
      answer: 'Eyebrow transplant is ideal for those with naturally sparse eyebrows, over-plucked brows that won\'t grow back, eyebrow loss due to burns/accidents/medical conditions, aging-related thinning, or those seeking fuller, more defined eyebrows.'
    },
    {
      question: 'How many grafts are needed for eyebrows?',
      answer: 'Typically, 200-400 grafts per eyebrow are needed (400-800 total). The exact number depends on existing eyebrow density and desired thickness. Women usually need more grafts than men for a fuller look.'
    },
    {
      question: 'Will transplanted eyebrows look natural?',
      answer: 'Yes! When performed by an expert like Dr. Chacko Cyriac, results are completely natural. We use single-hair follicles placed at specific angles (10-15 degrees) to mimic natural eyebrow growth. The direction, curl, and density are carefully planned.'
    },
    {
      question: 'How long does eyebrow transplant last?',
      answer: 'Eyebrow transplant results are permanent. The transplanted hair follicles are from the scalp and will continue to grow throughout your lifetime. You\'ll need regular trimming every 2-3 weeks as scalp hair grows faster than eyebrow hair.'
    },
    {
      question: 'What is the recovery time?',
      answer: 'Recovery is quick - most swelling and redness resolve within 5-7 days. You can return to work after 3-5 days with makeup coverage if needed. Transplanted hairs shed within 2-3 weeks and regrow permanently after 3-4 weeks.'
    },
    {
      question: 'Can I shape my transplanted eyebrows?',
      answer: 'Yes! After 3 months when hair is fully grown, you can pluck, trim, or shape your eyebrows normally. The transplanted follicles are permanent and will continue to grow, so regular maintenance is needed.'
    }
  ]

  const commonCauses = [
    {
      title: 'Over-plucking',
      description: 'Excessive tweezing damages follicles permanently'
    },
    {
      title: 'Genetics',
      description: 'Naturally sparse or thin eyebrows'
    },
    {
      title: 'Aging',
      description: 'Age-related hair thinning and loss'
    },
    {
      title: 'Medical Conditions',
      description: 'Alopecia, thyroid issues, chemotherapy'
    },
    {
      title: 'Burns/Scars',
      description: 'Accidents or trauma causing hair loss'
    },
    {
      title: 'Trichotillomania',
      description: 'Compulsive hair-pulling disorder'
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
                <Eye size={16} />
                Frame Your Face
              </div>
              <h1 className="text-white mb-6">Eyebrow Transplant</h1>
              <p className="text-xl text-gray-300 mb-8">
                Eyebrow Restoration - Achieve perfectly shaped, natural eyebrows that enhance your facial beauty permanently.
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
              src="/images/services/eyebrow.webp"
              alt="Eyebrow Transplant Procedure"
              placeholder="Perfect Eyebrows"
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
              <p className="text-gray-600">2-3 hours</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Users className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Recovery</h3>
              <p className="text-gray-600">5-7 days</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <CheckCircle className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Grafts</h3>
              <p className="text-gray-600">400-800</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <IndianRupee className="w-10 h-10 text-gray-900 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Starting From</h3>
              <p className="text-gray-600">₹40,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Eyebrow Transplant */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">What is Eyebrow Transplant?</h2>
            <p className="text-xl text-gray-600">
              Eyebrow transplant is a precise cosmetic procedure that transplants individual hair follicles to create fuller, naturally-shaped eyebrows that perfectly frame your face.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">How Eyebrow Transplant Works</h3>
              <p className="text-gray-700 mb-4">
                Single-hair follicles are carefully selected from the nape of your neck (where hair is finest and most similar to eyebrow hair). These follicles are then meticulously implanted following the natural eyebrow growth pattern.
              </p>
              <p className="text-gray-700 mb-6">
                The procedure requires extreme precision - each hair must be placed at the correct angle (10-15 degrees) and direction to create natural-looking eyebrows. We use the golden ratio principles to design eyebrows that complement your facial features.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Your Custom Design <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h4 className="text-xl font-bold mb-4">Common Causes of Eyebrow Loss:</h4>
              <ul className="space-y-3">
                {commonCauses.map((cause, index) => (
                  <li key={index} className="border-b border-gray-200 pb-3 last:border-0">
                    <div className="font-semibold text-gray-900">{cause.title}</div>
                    <div className="text-sm text-gray-600">{cause.description}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Benefits of Eyebrow Transplant</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why eyebrow transplant is the ultimate solution for beautiful brows
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
            <h2 className="mb-4">The Eyebrow Transplant Process</h2>
            <p className="text-xl text-gray-600">
              Precision artistry in 4 steps
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

      {/* Golden Ratio Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">The Golden Ratio in Eyebrow Design</h2>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <p className="text-gray-700 mb-6 text-center">
                We use the golden ratio (phi = 1.618) to design eyebrows that are mathematically proportional to your face, creating the most aesthetically pleasing and harmonious look.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900 mb-2">Point 1</div>
                  <div className="text-sm text-gray-600">Eyebrow Start</div>
                  <p className="text-xs mt-2">Aligned with inner corner of eye</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900 mb-2">Point 2</div>
                  <div className="text-sm text-gray-600">Arch Peak</div>
                  <p className="text-xs mt-2">Aligned with outer edge of iris</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900 mb-2">Point 3</div>
                  <div className="text-sm text-gray-600">Eyebrow End</div>
                  <p className="text-xs mt-2">Aligned with outer corner of eye</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Timeline */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-center mb-12">Recovery Timeline</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gray-900">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-bold">Day 1-3</div>
                <h3 className="text-xl font-bold">Immediate Post-Op</h3>
              </div>
              <p className="text-gray-600">Mild swelling and redness. Small scabs form around transplanted hairs. Keep area dry and clean.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gray-700">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-bold">Day 4-7</div>
                <h3 className="text-xl font-bold">Early Healing</h3>
              </div>
              <p className="text-gray-600">Swelling subsides. Scabs begin to fall off naturally. You can return to work with makeup if needed.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gray-600">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-bold">Week 2-3</div>
                <h3 className="text-xl font-bold">Hair Shedding</h3>
              </div>
              <p className="text-gray-600">Transplanted hairs shed (normal process). Follicles remain intact and will regrow. Don't worry!</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gray-500">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-bold">Week 3-4</div>
                <h3 className="text-xl font-bold">New Growth</h3>
              </div>
              <p className="text-gray-600">New hairs start growing. Initially thin and fine, gradually becoming thicker and darker.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gray-900">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-bold">Week 8-12</div>
                <h3 className="text-xl font-bold">Final Results</h3>
              </div>
              <p className="text-gray-600">Full, natural-looking eyebrows achieved. Regular trimming needed every 2-3 weeks.</p>
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
                Everything you need to know about eyebrow transplant
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
          <h2 className="text-white mb-4">Wake Up with Perfect Eyebrows Every Day</h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Schedule a Consultation to discover how eyebrow transplant can transform your look
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block">
              Book Consultation
            </Link>
            <Link href="/gallery" className="btn-secondary inline-block">
              View Eyebrow Transformations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
