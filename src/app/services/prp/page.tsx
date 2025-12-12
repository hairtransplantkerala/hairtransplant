import Link from 'next/link'
import { CheckCircle, Clock, IndianRupee, Users, ArrowRight, Phone, Droplet, Award, Zap, Shield, Target } from 'lucide-react'
import ServiceHeroImage from '@/components/ServiceHeroImage'

export const metadata = {
  title: 'UltraMax PRP for Hair Loss in Kerala | Advanced Platelet Rich Plasma',
  description: 'Dr. Chacko Cyriac\'s advanced UltraMax PRP technique for consistent and superior hair regrowth results. Best alternative to hair transplantation in Kochi, Kerala.',
  keywords: 'UltraMax PRP, advanced PRP hair treatment Kerala, platelet rich plasma therapy, non-surgical hair restoration Kochi',
}

export default function UltraMaxPRPPage() {
  const benefits = [
    'Consistent and superior results',
    'Best alternative to hair transplantation',
    'Strictly adheres to harvest rules',
    'Superior platelet cell preparation',
    'Less frequent treatments needed',
    'Important for women\'s hair loss',
    'Perfect for young boys and girls',
    'Uses patient\'s own blood - safe'
  ]

  const process = [
    {
      step: '1',
      title: 'Blood Collection',
      description: 'Patient\'s blood is drawn following strict protocols'
    },
    {
      step: '2',
      title: 'Centrifugation',
      description: 'Blood centrifuged to remove red blood cells'
    },
    {
      step: '3',
      title: 'Advanced Preparation',
      description: 'Strict adherence to harvest and preparation rules for superior quality'
    },
    {
      step: '4',
      title: 'Injection',
      description: 'Concentrated platelet-rich plasma injected into scalp'
    }
  ]

  const faqs = [
    {
      question: 'Is this also PRP or Platelet Rich Plasma?',
      answer: 'Yes it is. But it is what we get when we strictly adhere to the rules involved in the harvest and preparation of the platelet cells. Therefore the results too are found to be superior. Many a case we are able to produce best results without doing hair transplantation.'
    },
    {
      question: 'Is this technique useful for ladies?',
      answer: 'Certainly. It forms an important part of the treatment protocol for hair loss in ladies.'
    },
    {
      question: 'What about hair loss in young boys as young as 18?',
      answer: 'Certainly. In fact the treatment of hair loss in this population is quite different from that for older patients. Hair transplantation is certainly not an option. The Ultra-max PRP helps control hair loss in many such young boys and girls.'
    },
    {
      question: 'Does this need to be done every month?',
      answer: 'Certainly not. Dr Chacko Cyriac only asks his patients to come once every 5-6 months. With his improved methods, most often he does not find the reason to do this more frequently. Many a time we are able to thus avoid a hair transplantation.'
    },
    {
      question: 'Is there a reason then to do this more frequently?',
      answer: 'Yes. When the quality of hair is that bad. When the response is suboptimal, we try our best to improve upon the situation by increasing the frequency of injections. If it still does not improve, we might be moving towards a hair transplantation.'
    },
    {
      question: 'Are there any side effects of this injection?',
      answer: 'The patient\'s own blood is the source of this injection. No other medications are being injected. Therefore we do not anticipate any problem whatsoever. This is certainly safer than a hair transplant surgery.'
    },
    {
      question: 'What are the possible problems arising from this injection?',
      answer: 'There may be a swelling on the forehead (will disappear by next morning). There may be a numb feeling on the top of the head (takes about 3 hours to disappear). If there is any pain in the injection site, it will settle down with massage.'
    }
  ]

  const advantages = [
    {
      icon: Award,
      title: 'Strict Protocol Adherence',
      description: 'Strictly adheres to rules for harvest and preparation of platelet cells'
    },
    {
      icon: Zap,
      title: 'Consistent Superior Results',
      description: 'Helps produce consistent and superior results compared to regular PRP'
    },
    {
      icon: Shield,
      title: 'Best Alternative',
      description: 'Emerged as the best alternative to hair transplantation in Kochi, Kerala'
    },
    {
      icon: Target,
      title: 'Less Frequent Treatments',
      description: 'Patients only need to come once every 5-6 months with improved methods'
    },
  ]

  const idealFor = [
    'Ladies with hair loss - important part of treatment protocol',
    'Young boys and girls (18+) where transplantation is not an option',
    'Patients wanting to avoid hair transplantation',
    'Those seeking consistent and superior results',
    'Cases with suboptimal response to regular PRP',
    'Anyone preferring non-surgical options'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4 flex items-center gap-2 w-fit">
                <Droplet size={16} />
                Dr. Cyriac's Advanced PRP
              </div>
              <h1 className="text-white mb-6">UltraMax PRP Hair Treatment</h1>
              <p className="text-xl text-gray-300 mb-8">
                Dr. Chacko Cyriac's advanced PRP technique with strict protocol adherence for consistent and superior results. The best alternative to hair transplantation in Kochi, Kerala.
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
              src="/images/services/prp.webp"
              alt="UltraMax PRP Hair Treatment Therapy"
              placeholder="UltraMax PRP"
            />
          </div>
        </div>
      </section>

      {/* What is UltraMax PRP */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">What is UltraMax PRP?</h2>
            <p className="text-xl text-gray-600">
              Platelet-rich plasma (PRP), alternatively referred to as autologous conditioned plasma, is concentrated platelet-rich plasma extracted from blood that has been centrifuged to remove red blood cells [web:296].
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dr. Cyriac's Advanced Technique</h3>
              <p className="text-gray-700 mb-4">
                The regular PRP technique is quite popular, but with <strong>highly variable results</strong>. Dr Chacko Cyriac's advanced PRP technique, the <strong>UltraMax PRP</strong>, helps produce <strong>consistent and superior results</strong> [web:296].
              </p>
              <p className="text-gray-700 mb-6">
                Over the years this has emerged as the <strong>best alternative to hair transplantation in Cochin (Kochi), Kerala</strong>. By strictly adhering to the rules involved in the harvest and preparation of platelet cells, Dr. Cyriac achieves superior results, often eliminating the need for hair transplantation [web:296].
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h4 className="text-xl font-bold mb-4">Ideal For:</h4>
              <ul className="space-y-3">
                {idealFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why UltraMax is Superior */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why UltraMax PRP is Superior</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Cyriac's strict adherence to protocols produces consistent, superior results
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
            <h2 className="mb-4">Benefits of UltraMax PRP</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why UltraMax PRP delivers superior results compared to regular PRP
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


      {/* Treatment Frequency */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border-l-4 border-gray-900">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Less Frequent Treatments Needed
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Unlike regular PRP that requires monthly treatments, Dr. Chacko Cyriac's improved UltraMax PRP method only requires patients to come <strong>once every 5-6 months</strong>.
            </p>
            <p className="text-lg text-gray-700">
              With his improved methods, most often he does not find the reason to do this more frequently. <strong>Many a time we are able to thus avoid a hair transplantation.</strong>
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
              <p className="text-xl text-gray-600">
                Everything you need to know about UltraMax PRP
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
          <h2 className="text-white mb-4">Experience UltraMax PRP by Dr. Chacko Cyriac</h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Get consistent and superior results with advanced PRP technique. Best alternative to hair transplantation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block">
              Book Your Consultation
            </Link>
            <Link href="/gallery" className="btn-secondary inline-block">
              View Results
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
