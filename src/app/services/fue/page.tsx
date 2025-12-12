import Link from 'next/link'
import { CheckCircle, Clock, Users, ArrowRight, Phone, IndianRupee, Zap, Heart, Shield, Award } from 'lucide-react'
import ServiceHeroImage from '@/components/ServiceHeroImage'

export const metadata = {
  title: 'SC-FUE Hair Transplant in Kerala | Stem Cell FUE | Eterno Clinic',
  description: 'Advanced SC-FUE hair transplant technique by Dr. Chacko Cyriac. Maximum stem cell harvest for improved graft survival and superior results in Kochi, Kerala.',
  keywords: 'SC-FUE, stem cell FUE, follicular unit extraction Kerala, advanced hair transplant, hair restoration Kerala',
}

export default function SCFUEPage() {
  const benefits = [
    'Maximum stem cell harvest with grafts',
    'Improved graft survival rates',
    'No additional time required',
    'No extra charges for advanced technique',
    'Dr. Cyriac personally performs all extractions',
    'Individual follicles extracted precisely',
    'Almost no visible scarring',
    'Same recovery as regular FUE'
  ]

  const process = [
    {
      step: '1',
      title: 'Personal Assessment',
      description: 'Dr. Cyriac evaluates your condition and donor area'
    },
    {
      step: '2',
      title: 'SC-FUE Extraction',
      description: 'Dr. Cyriac personally punches all grafts to maximize stem cell harvest'
    },
    {
      step: '3',
      title: 'Graft Preparation',
      description: 'Follicles with stem cells carefully preserved'
    },
    {
      step: '4',
      title: 'Implantation',
      description: 'Strategic placement for natural results and maximum survival'
    }
  ]

  const faqs = [
    {
      question: 'Does the SC-FUE hair transplant surgery take more time ?',
      answer: 'No it does not. As Dr. Cyriac is himself personally punching all the grafts, it does not take more time than regular FUE.'
    },
    {
      question: 'Does the SC-FUE hair transplant technique cost more than the regular FUE ?',
      answer: 'No. Dr. Chacko Cyriac passes on the benefit of this advanced technique to all of his patients without any extra charges.'
    },
    {
      question: 'Will there be any side effects of the SC-FUE hair transplant technique ?',
      answer: 'None whatsoever. The issues related to the regular FUE technique are applicable here too. There are no additional side effects from the stem cell harvesting.'
    },
    {
      question: 'Is there more scarring with the SC-FUE hair transplantation method ?',
      answer: 'No. It is the same as for regular FUE surgery. The scar from the regular FUE is due to the loss of hair growth from the site of punching. This will happen with this technique too.'
    },
    {
      question: 'Is there a patient in whom the SC-FUE hair transplantation technique should not be done ?',
      answer: 'Of course the general condition of the patient should be good enough for him to go through the procedure. These aspects are strictly looked into by our Senior Consultant Plastic Surgeon Dr. Chacko Cyriac. If the patients are unfit for a general anesthesia procedure, then he does not do the same under local anesthesia too. After all, the safety of the patient is paramount. If the patient has an increased tendency for scar formation as keloids etc then the patient is not fit for any cosmetic surgery technique, leave alone SC-FUE.'
    }
  ]

  const advantages = [
    {
      icon: Zap,
      title: 'Maximum Stem Cell Harvest',
      description: 'Dr. Cyriac developed this method to ensure maximal harvest of stem cells along with hair grafts'
    },
    {
      icon: Heart,
      title: 'Improved Graft Survival',
      description: 'Stem cells not only ensure better graft survival but help achieve the best results'
    },
    {
      icon: Shield,
      title: 'No Extra Charges',
      description: 'Dr. Cyriac passes on the benefit of this advanced technique without any additional cost'
    },
    {
      icon: Award,
      title: 'Personal Expertise',
      description: 'Dr. Cyriac himself personally punches all the grafts during SC-FUE procedures'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Dr. Cyriac's Advanced Innovation
              </div>
              <h1 className="text-white mb-6">SC-FUE Hair Transplant</h1>
              <p className="text-xl text-gray-300 mb-8">
                Stem Cell Enhanced FUE - Dr. Chacko Cyriac's advanced method for maximum stem cell harvest and superior graft survival.
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
            
            {/* Reusable Image Component */}
            <ServiceHeroImage 
              src="/images/services/fue.webp"
              alt="SC-FUE Hair Transplant Procedure"
              placeholder="SC-FUE Procedure"
            />
          </div>
        </div>
      </section>

      {/* What is SC-FUE */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">What is SC-FUE Hair Transplant?</h2>
            <p className="text-xl text-gray-600">
              As the name suggests, follicular unit extraction (FUE) is a hair transplant procedure that involves extracting individual hair follicles from your scalp and transplanting them to an area of your scalp where hair is sparse or non-existent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dr. Cyriac's Innovation</h3>
              <p className="text-gray-700 mb-4">
                Single follicles are extracted and transplanted using micro punches, which leave almost no evidence of extraction. <strong>The SC-FUE is an advancement of this technique.</strong>
              </p>
              <p className="text-gray-700 mb-4">
                Dr. Chacko Cyriac has developed this method to ensure the <strong>maximal harvest of stem cells along with the hair grafts</strong> during hair transplantation.
              </p>
              <p className="text-gray-700 mb-6">
                Not only does this ensure the improved survival of the hair grafts but it also helps him achieve the <strong>best results for the hair transplantation surgery</strong> he does in Kochi (Cochin), Kerala, India.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h4 className="text-xl font-bold mb-4">Key Advantages:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Maximum stem cell harvest with each graft</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Improved graft survival for better results</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Dr. Cyriac personally performs all extractions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>No additional time or cost required</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Same recovery period as regular FUE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why SC-FUE is Better */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose SC-FUE Over Regular FUE?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Cyriac's advanced technique provides superior results without extra cost or time
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

      {/* Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Benefits of SC-FUE Hair Transplant</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All the advantages of FUE with enhanced stem cell benefits
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
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about SC-FUE hair transplant
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

            <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-500">
              <p className="text-gray-700">
                <strong>For more information on this technique,</strong> <Link href="/contact" className="text-gray-900 font-semibold underline hover:text-black">contact us</Link> for an appointment with Dr. Chacko Cyriac.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Experience SC-FUE by Dr. Chacko Cyriac</h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Get the advanced SC-FUE technique with maximum stem cell harvest at no extra cost
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
