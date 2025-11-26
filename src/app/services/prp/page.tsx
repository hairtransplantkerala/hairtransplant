import Link from 'next/link'
import { CheckCircle, Clock, DollarSign, Users, ArrowRight, Phone, Droplet } from 'lucide-react'

export const metadata = {
  title: 'PRP Treatment for Hair Loss in Kerala | Platelet Rich Plasma Therapy',
  description: 'Non-surgical PRP hair treatment to stimulate hair growth and reduce hair loss. Safe, natural, and effective platelet-rich plasma therapy.',
  keywords: 'PRP hair treatment Kerala, platelet rich plasma therapy, hair loss treatment, non-surgical hair restoration',
}

export default function PRPPage() {
  const benefits = [
    'Non-surgical procedure',
    'No downtime required',
    '100% natural treatment',
    'Stimulates hair growth',
    'Reduces hair fall',
    'Improves hair thickness',
    'Safe with no side effects',
    'Quick 30-minute sessions'
  ]

  const process = [
    {
      step: '1',
      title: 'Blood Collection',
      description: 'Small amount of blood drawn from your arm (similar to routine blood test)'
    },
    {
      step: '2',
      title: 'Centrifugation',
      description: 'Blood processed in centrifuge to separate platelet-rich plasma'
    },
    {
      step: '3',
      title: 'Activation',
      description: 'PRP activated with growth factors to maximize effectiveness'
    },
    {
      step: '4',
      title: 'Injection',
      description: 'PRP injected into scalp using fine needles or micro-needling'
    }
  ]

  const faqs = [
    {
      question: 'What is PRP treatment for hair loss?',
      answer: 'PRP (Platelet-Rich Plasma) is a non-surgical treatment that uses your own blood\'s healing properties to stimulate hair growth. Platelets contain growth factors that promote cell regeneration and healing, which helps reactivate dormant hair follicles.'
    },
    {
      question: 'How many PRP sessions are needed?',
      answer: 'Typically, 4-6 sessions are recommended initially, spaced 3-4 weeks apart. After the initial phase, maintenance sessions every 3-6 months help sustain results. The exact number depends on your hair loss severity and response to treatment.'
    },
    {
      question: 'When will I see results from PRP?',
      answer: 'Most patients notice reduced hair fall within 2-3 sessions. Visible hair growth and thickness improvements typically appear after 3-6 months. Optimal results are seen after completing the full treatment protocol.'
    },
    {
      question: 'Is PRP treatment painful?',
      answer: 'PRP injections cause minimal discomfort. We use very fine needles and can apply numbing cream before treatment. Most patients describe it as a slight pricking sensation. The entire procedure takes only 30-45 minutes.'
    },
    {
      question: 'Are there any side effects of PRP?',
      answer: 'PRP is extremely safe as it uses your own blood, eliminating risk of allergic reactions. Mild temporary side effects may include slight redness, tenderness, or swelling at injection sites, which resolve within 24-48 hours.'
    },
    {
      question: 'Can PRP be combined with hair transplant?',
      answer: 'Yes! PRP is often combined with hair transplant surgery to enhance graft survival, speed up healing, and improve overall results. It can be done before, during, or after transplant procedures.'
    }
  ]

  const idealCandidates = [
    'Early-stage hair loss',
    'Pattern baldness',
    'Post-transplant care',
    'Thinning hair',
    'Alopecia areata',
    'Hair fall prevention'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4 flex items-center gap-2 w-fit">
                <Droplet size={16} />
                Natural & Non-Surgical
              </div>
              <h1 className="text-white mb-6">PRP Hair Treatment</h1>
              <p className="text-xl text-primary-100 mb-8">
                Platelet-Rich Plasma Therapy - Harness your body's natural healing power to stimulate hair growth and reduce hair loss.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-block text-center">
                  Book Free Consultation
                </Link>
                <a href="tel:+918884447777" className="btn-secondary border-white text-white hover:bg-white/10 inline-flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-2xl font-bold">
                PRP Therapy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Clock className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Duration</h3>
              <p className="text-gray-600">30-45 minutes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Users className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Recovery</h3>
              <p className="text-gray-600">No downtime</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <CheckCircle className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Sessions</h3>
              <p className="text-gray-600">4-6 sessions</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <DollarSign className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Per Session</h3>
              <p className="text-gray-600">₹8,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is PRP */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">What is PRP Treatment?</h2>
            <p className="text-xl text-gray-600">
              PRP (Platelet-Rich Plasma) therapy uses the healing power of your own blood platelets to stimulate dormant hair follicles, strengthen existing hair, and promote new hair growth naturally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">How PRP Works</h3>
              <p className="text-gray-700 mb-4">
                Your blood contains platelets rich in growth factors. When concentrated and injected into the scalp, these growth factors stimulate stem cells in hair follicles, increase blood supply, and promote cell regeneration.
              </p>
              <p className="text-gray-700 mb-6">
                PRP contains proteins like PDGF, VEGF, TGF, and EGF that trigger natural hair growth. The treatment is completely natural, using your body's own healing mechanisms without any synthetic substances.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Started Today <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-primary-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Ideal For:</h4>
              <ul className="space-y-3">
                {idealCandidates.map((candidate, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span>{candidate}</span>
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
            <h2 className="mb-4">Benefits of PRP Treatment</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why PRP is the preferred choice for non-surgical hair restoration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <CheckCircle className="w-8 h-8 text-primary-600 mb-3" />
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
            <h2 className="mb-4">The PRP Process</h2>
            <p className="text-xl text-gray-600">
              Simple, safe, and effective treatment in just 4 steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Protocol */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Treatment Protocol</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Initial Phase</h3>
                <p className="text-gray-600 mb-4">4 sessions over 3-4 months</p>
                <p className="text-sm text-gray-500">Kickstart hair growth and reduce hair fall</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Consolidation</h3>
                <p className="text-gray-600 mb-4">2 sessions over 6 months</p>
                <p className="text-sm text-gray-500">Strengthen and stabilize results</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Maintenance</h3>
                <p className="text-gray-600 mb-4">1 session every 6 months</p>
                <p className="text-sm text-gray-500">Sustain long-term results</p>
              </div>
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
                Everything you need to know about PRP hair treatment
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
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Stop Hair Loss Naturally</h2>
          <p className="text-primary-100 text-xl mb-8 max-w-2xl mx-auto">
            Start your PRP treatment journey today and see visible results in just a few months
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-block">
              Book Your First Session
            </Link>
            <Link href="/blog" className="btn-secondary border-white text-white hover:bg-white/10 inline-block">
              Learn More About PRP
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
