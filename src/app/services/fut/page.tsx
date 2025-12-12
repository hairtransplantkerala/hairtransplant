import Link from 'next/link'
import { CheckCircle, Clock, IndianRupee, Users, ArrowRight, Phone, Award, Shield, Zap, Target } from 'lucide-react'
import ServiceHeroImage from '@/components/ServiceHeroImage'

export const metadata = {
  title: 'InviScar FUT Hair Transplant in Kerala | Invisible Scar Strip Method',
  description: 'Advanced InviScar FUT hair transplant by Dr. Chacko Cyriac with minimized scarring. Maximum graft yield for extensive coverage in Kochi, Kerala.',
  keywords: 'InviScar FUT, invisible scar FUT, strip method, MDEE, follicular unit transplantation Kerala, advanced hair transplant',
}

export default function InviScarFUTPage() {
  const benefits = [
    'Minimized scar formation with advanced techniques',
    'Maximum graft yield (3000-7000+ grafts)',
    'Microscopically Dissected Elliptical Excision (MDEE)',
    'Single session mega coverage',
    'Cost-effective for large areas',
    'No additional cost for advanced technique',
    'Proven method with 30+ years track record',
    'Scar revision methods available if needed'
  ]

  const process = [
    {
      step: '1',
      title: 'Strip Removal',
      description: 'Thin strip of hair-bearing scalp removed from donor zone under anesthesia'
    },
    {
      step: '2',
      title: 'Microscopic Dissection',
      description: 'Strip placed under microscope, follicular units separated into naturally occurring clusters'
    },
    {
      step: '3',
      title: 'InviScar Closure',
      description: 'Advanced closure technique to minimize scar formation'
    },
    {
      step: '4',
      title: 'Graft Placement',
      description: 'Follicular units implanted for maximum density and natural appearance'
    }
  ]

  const faqs = [
    {
      question: 'Does the InviScar FUT method guarantee a totally scarless hair transplantation ?',
      answer: 'This technique is done to minimise the incidence of scar formation. However, scar formation occurs even after the best hair transplantation in Kochi (Cochin), Kerala, and is dependent on several factors and not just the surgical technique. Therefore if there is an increased scar formation in spite of all this, our centre has proven methods to treat it too.'
    },
    {
      question: 'Is not the FUT technique proven to be superior to the FUE ?',
      answer: 'This is an endless discussion. World over proponents of both methods advocate their technique as the best hair transplantation method. But Dr. Chacko Cyriac is proficient in both. He provides his patients with both options and has developed his own method to choose the better technique for the patient.'
    },
    {
      question: 'Does this technique take longer to do than the FUE ?',
      answer: 'Yes. The duration of the procedure is slightly more than the regular FUE hair transplant surgery. But the patient does not feel it as the patient is given more "breaks" between the procedure.'
    },
    {
      question: 'Does this technique cost more ?',
      answer: 'No. Dr. Chacko Cyriac ensures that his patients receive the best hair transplant surgical technique without having to pay more for either.'
    }
  ]

  const advantages = [
    {
      icon: Shield,
      title: 'Minimized Scarring',
      description: 'Dr. Cyriac\'s technical modifications to minimize scar formation compared to traditional FUT'
    },
    {
      icon: Award,
      title: 'MDEE Technique',
      description: 'Microscopically Dissected Elliptical Excision for precise follicular unit separation'
    },
    {
      icon: Zap,
      title: 'Maximum Yield',
      description: 'Up to 5000-7000+ grafts in single session for extensive coverage'
    },
    {
      icon: Target,
      title: 'Proven Results',
      description: 'Best hair transplantation method followed worldwide with proven track record'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-white mb-6">Inviscar-FUT</h1>
              {/*<p className="text-xl text-gray-300 mb-8">
                FUT (Follicular Unit Transplant) hair transplant technique or the strip method, is a surgical hair restoration procedure that harvests hair from the donor area on the back and sides of the head where your hair is genetically designed as permanent hair, and then transplants it into the balding or thinning areas of your scalp.</p> */}
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
              src="/images/services/fut.webp"
              alt="InviScar FUT Hair Transplant Procedure"
              placeholder="InviScar FUT Procedure"
            />
          </div>
        </div>
      </section>

      {/* What is InviScar FUT */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">What is InviScar FUT Hair Transplant?</h2>
            <p className="text-xl text-gray-600 text-justify">
              FUT (Follicular Unit Transplant) hair transplant technique or the strip method, is a surgical hair restoration procedure that harvests hair from the donor area on the back and sides of the head where your hair is genetically designed as permanent hair, and then transplants it into the balding or thinning areas of your scalp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dr. Cyriac's Innovation: MDEE Technique</h3>
              <p className="text-gray-700 mb-4 text-justify">
                <strong>Microscopically Dissected Elliptical Excision (MDEE)</strong> is a term used to describe the technique by which a strip of donor tissue is removed from the donor zone, placed under a microscope, and the follicular units within the strip are separated into their naturally occurring clusters.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                The older strip technique or the FUT method is a proven method followed to produce the best results following hair transplantation in many centers and not just in Kochi (Cochin), Kerala.
              </p>
              <p className="text-gray-700 mb-6 text-justify">
                <strong>Dr. Chacko Cyriac has gone one step further with technical modifications to improve the appearance of the scar following this surgery.</strong>
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h4 className="text-xl font-bold mb-4">Key Features:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span className="text-justify">Minimized scar formation with advanced closure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span className="text-justify">Maximum graft yield up to 5000-7000+ grafts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span className="text-justify">Microscopic dissection for precision</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span className="text-justify">Scar revision methods available if needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span className="text-justify">No additional cost for advanced technique</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why InviScar FUT */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose InviScar FUT?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Cyriac's advanced modifications minimize scarring while maximizing results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section> 

      {/* Benefits 
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Benefits of InviScar FUT</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced FUT technique with minimized scarring and maximum coverage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200">
                <CheckCircle className="w-8 h-8 text-gray-900 mb-3" />
                <p className="font-semibold text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Important Note */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-100 to-gray-100 p-8 rounded-2xl border-l-4 border-black">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Is there a situation when the Invi-scar technique for hair transplantation is not to be done ?
            </h3>
            <p className="text-lg text-gray-700 mb-4 text-justify">
              Our Senior Consultant Plastic Surgeon Dr. Chacko Cyriac makes sure the general condition of all his hair transplant patients is good enough for them to go through a procedure under general anesthesia. Only then does he do it under local anesthesia.
            </p>
            <p className="text-lg text-gray-700 text-justify">
              This is in stark contrast with what most centres claim, that this procedure only requires local anesthesia and not general anesthesia and therefore many medical issues can be ignored. <strong>After all, the safety of the patient is paramount.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-lg hover:bg-gray-50 transition-colors">
                    {faq.question}
                  </summary>
                  <div className="px-6 pb-4 text-gray-600 text-justify">
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
          {/*<h2 className="text-white mb-4">Experience InviScar FUT by Dr. Chacko Cyriac</h2>*/}
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto text-justify">
            To know more about this hair transplant technique, and if this is the best option for your hair loss problem, contact our Kochi (Cochin) office in Kerala for an appointment.
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
