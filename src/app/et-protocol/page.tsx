import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Users, Heart, Baby, Microscope, Target, TrendingUp, Shield } from "lucide-react";

export const metadata = {
  title: "ET-Protocol | Personalized Hair Loss Treatment | Eterno Clinic Kochi",
  description: "Dr. Chacko Cyriac's revolutionary ET-Protocol (Eterno-Protocol) for comprehensive hair loss management. Customized treatment plans for men, women, and children in Kochi, Kerala.",
  keywords: "ET protocol, Eterno protocol, personalized hair loss treatment, customized hair restoration, comprehensive hair loss management Kochi",
};

export default function ETProtocolPage() {
  const benefits = [
    {
      icon: Target,
      title: "Customized for Each Patient",
      description: "Best treatment based on your specific cause, extent, stage of baldness, and age"
    },
    {
      icon: Microscope,
      title: "All Treatments Available",
      description: "Not just hair transplantation - medical treatments, PRP, mesotherapy, and surgical options"
    },
    {
      icon: TrendingUp,
      title: "Evolving Treatment Plans",
      description: "As your problem evolves, treatments change to maintain healthy hair long-term"
    },
    {
      icon: Shield,
      title: "No Bias Approach",
      description: "Wide experience with all techniques ensures unbiased recommendations for your best outcome"
    },
  ];

  const whoItHelps = [
    {
      icon: Users,
      title: "Men with Hair Loss",
      description: "Appropriate treatment for your extent of hair loss, stage of baldness, and age. Dr. Cyriac advises the best probable method - not all hair loss can be managed with hair transplantation."
    },
    {
      icon: Heart,
      title: "Women with Hair Loss",
      description: "Absolutely essential for women. Given the different causes and extent of hair loss amongst ladies, it's necessary to provide all treatment options. Hair transplantation is typically the last option."
    },
    {
      icon: Baby,
      title: "Young Boys and Girls",
      description: "Classic example of when ET-Protocol is most essential. All hair loss cannot be treated with hair transplantation, especially in young patients. Go to a center where all different options are available."
    },
  ];

  const principles = [
    "Addresses different causes of hair loss for each person",
    "Considers stage of hair loss progression",
    "Evaluates extent of hair loss area",
    "Age-appropriate treatment recommendations",
    "Requirements vary with different age groups",
    "Several years of experience with all techniques",
    "Able to advise best probable method for each patient",
    "Treatments change as the problem evolves over time"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">The ET-Protocol</h1>
            <p className="text-2xl text-gray-300 mb-4 font-semibold">
              Eterno-Protocol for Hair Loss Management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-block text-center">
                Book Consultation
              </Link>
              <Link href="/gallery" className="btn-secondary inline-block text-center">
                View Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="mb-6">What is the ET-Protocol ?</h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                Though a Plastic Surgeon by training, <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black">Dr. Chacko Cyriac</Link> does all the medical treatments for hair loss, and not just the best hair transplantation in Kochi (Cochin), Kerala. He firmly believes all treatments have definitive indications, and limitations too.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                With no bias towards any one type of treatment and with his wide range of experience with all techniques, he has developed the <strong>ET-Protocol</strong> for hair loss (read as Eterno-Protocol).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Important */}
<section className="py-20 bg-gray-50">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="mb-4">Why Following the ET-Protocol is So Important for Hair Loss Management</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
        Causes of hair loss vary from person to person. So does the stage of hair loss. So does the extent of hair loss. The requirements for restoration too are different with different age groups.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {benefits.map((benefit, index) => {
        const IconComponent = benefit.icon;
        return (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconComponent className="text-white" size={32} />
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900">{benefit.title}</h3>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        );
      })}
    </div>

    <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-2xl shadow-xl">
      <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
        <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black">Dr. Chacko Cyriac</Link> has been practicing almost all techniques in the management for hair loss for several years. Therefore he is able to advise each patient the best probable method for treating his hair loss, for his extent of hair loss, for his stage of baldness, for his age.
      </p>
      <p className="text-lg text-gray-900 font-bold text-justify">
        All hair loss can certainly not be managed with hair transplantation.
      </p>
    </div>
  </div>
</section>


      {/* Important Note */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-black">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                All Hair Loss Cannot Be Treated with Hair Transplantation
              </h3>
              <p className="text-lg text-gray-700 mb-4 text-justify">
                This is the fundamental principle behind the ET-Protocol. Different conditions require different approaches:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Young patients often need medical treatments, not surgery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Women typically benefit from non-surgical options first</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Early-stage hair loss may respond to PRP or medications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-justify">Some conditions require combination treatments</span>
                </li>
              </ul>
              <p className="text-lg text-gray-900 font-bold text-justify">
                Therefore one should go to a centre in Cochin (Kochi), Kerala, where all different options are available, and not just hair transplantation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Why following the ET-Protocol is so important for hair loss management ?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Causes of hair loss varies from person to person. So does the stage of hair loss. So does the extent of hair loss. The requirements for restoration too are different with different age groups. Dr. Chacko Cyriac has been practicing almost all techniques in the management for hair loss for several years. Therefore he is able to advise each patient the best probable method for treating his hair loss, for his extent of hair loss, for his stage of baldness, for his age. All hair loss can certainly not be managed with hair transplantation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Can this protocol be applied for ladies ?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Yes. It certainly can. Given the different causes and extent of hair loss amongst ladies, it is definitely necessary to be able to provide all treatments. Doing hair transplantation is probably the last option.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  How about hair loss in young boys and girls ?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Here lies a classic example of when the ET-Protocol is most essential. All hair loss cannot be treated with hair transplantation. Therefore one should go to a centre in Cochin (Kochi), Kerala, where all different options are available, and not just hair transplantation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  What is the duration of the treatment for hair loss as per this protocol ?
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  There is no definitive duration of therapy. As the problem evolves treatments change. The requirements too change with time. Therefore we encourage our patients to come back to us to maintain a healthy head of hair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Important */}
<section className="py-20 bg-gray-50">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="mb-4">Why Following the ET-Protocol is So Important for Hair Loss Management</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
        Causes of hair loss vary from person to person. So does the stage of hair loss. So does the extent of hair loss. The requirements for restoration too are different with different age groups.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {benefits.map((benefit, index) => {
        const IconComponent = benefit.icon;
        return (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconComponent className="text-white" size={32} />
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900">{benefit.title}</h3>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        );
      })}
    </div>

    <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-2xl shadow-xl">
      <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
        <Link href="/about" className="text-gray-900 font-semibold underline hover:text-black">Dr. Chacko Cyriac</Link> has been practicing almost all techniques in the management for hair loss for several years. Therefore he is able to advise each patient the best probable method for treating his hair loss, for his extent of hair loss, for his stage of baldness, for his age.
      </p>
      <p className="text-lg text-gray-900 font-bold text-justify">
        All hair loss can certainly not be managed with hair transplantation.
      </p>
    </div>
  </div>
</section>

{/* Why Dr. Cyriac's Experience Matters */}
<section className="py-20 bg-white">
  <div className="container-custom">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="mb-4">Why Dr. Cyriac's Experience Matters</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
          With several years practicing all techniques in hair loss management, Dr. Cyriac provides unbiased recommendations based on your unique situation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {principles.map((principle, index) => (
          <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
            <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
            <span className="text-gray-700">{principle}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready to Find Your Best Treatment ?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-justify">
            To know how the ET-Protocol for hair loss can be best applied to you, and for other questions regarding hair transplantation, take an appointment at our Kochi (Cochin) office in Kerala
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="btn-primary inline-block">
              Book Consultation
            </Link>
            <Link href="/gallery" className="btn-secondary inline-block">
              View Our Results
            </Link>
          </div>
          <a href="tel:+919645921944" className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <Phone size={20} />
            <span className="text-lg">Call us: +91 96459 21944</span>
          </a>
        </div>
      </section>
    </>
  );
}
