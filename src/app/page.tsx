import Link from "next/link";
import { CheckCircle, Award, Users, Globe, Phone, ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import ServiceCard from "@/components/ServiceCard";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import GalleryCarousel from "@/components/GalleryCarousel";

export default function HomePage() {
  const services = [
    {
      title: "FUE Hair Transplant",
      description: "Follicular Unit Extraction - minimally invasive, no linear scar, faster recovery",
      image: "/images/homepage/fue.webp",
      link: "/services/fue",
      features: ["No linear scarring", "Quick recovery", "Natural results"]
    },
    {
      title: "FUT Hair Transplant",
      description: "Strip technique for maximum graft harvesting in single session",
      image: "/images/homepage/fut.webp",
      link: "/services/fut",
      features: ["Maximum grafts", "Cost-effective", "Proven technique"]
    },
    {
      title: "PRP Treatment",
      description: "Platelet-Rich Plasma therapy for natural hair regrowth stimulation",
      image: "/images/homepage/prp.webp",
      link: "/services/prp",
      features: ["Non-surgical", "Natural growth", "Minimal side effects"]
    },
    {
      title: "Beard & Eyebrow",
      description: "Specialized transplants for facial hair restoration and enhancement",
      image: "/images/homepage/beard.webp",
      link: "/services/beard",
      features: ["Natural appearance", "Customizable", "Permanent results"]
    },
  ];

  const stats = [
    { icon: Award, label: "Years of Excellence", value: "22+" },
    { icon: Users, label: "Happy Patients", value: "5000+" },
    { icon: Globe, label: "Countries Served", value: "26+" },
    { icon: Star, label: "Success Rate", value: "98%" },
  ];

  const whyChooseUs = [
    "Expert surgeon with MCh Plastic Surgery qualification from PGI Chandigarh",
    "International training from UK, USA, Canada, and Singapore",
    "Latest techniques: FUE, FUT, DHI, Modified Hair Implantation",
    "State-of-the-art equipment and world-class facilities",
    "Patients from 26+ countries worldwide trust our expertise",
    "Personalized treatment plans tailored to individual needs",
    "Comprehensive post-operative care and lifetime support",
    "Transparent pricing with no hidden costs"
  ];

  const procedureSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "Meet Dr. Cyriac for personalized assessment and treatment plan"
    },
    {
      number: "02",
      title: "Preparation",
      description: "Pre-operative instructions and scheduling your procedure date"
    },
    {
      number: "03",
      title: "Procedure Day",
      description: "Comfortable procedure under local anesthesia, 4-8 hours duration"
    },
    {
      number: "04",
      title: "Recovery & Results",
      description: "Follow-up care and watch your hair transform over 12 months"
    }
  ];

  return (
    <>
      {/* Hero Section with Video Background */}
      <HeroVideoBackground 
        videoSrc="/videos/hero-background.mp4"
      >
        <div className="max-w-4xl mx-auto text-center">
  <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6">
    <div className="flex items-center gap-1">
      <span className="text-yellow-400 text-base sm:text-lg">★★★★★</span>
    </div>
    <a 
      href="https://share.google/et94AAsNCgNKbPHAr" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white whitespace-nowrap hover:text-yellow-400 transition-colors underline"
    >
      4.9 out of 5
    </a>
    <span className="text-white/70 xs:inline">|</span>
    <span className="text-white/90 whitespace-nowrap">5000+ Happy Patients</span>
  </div>


          <h1 className="mb-6 leading-tight text-white">
            <span className="block text-xl md:text-2xl font-normal mb-2">The Leading</span>
            <span className="block">Hair Transplant Clinic</span>
            <span className="block text-xl md:text-2xl font-normal mt-2">in Kochi, Kerala</span>
          </h1>
          <p className="text-xl md:text-xl mb-8 text-gray-300 leading-relaxed">
            All hair loss treatments & hair transplant will be done only by our Senior Consultant Plastic Surgeon, <strong className="text-white">Dr. Chacko Cyriac</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <Link href="/contact" className="btn-primary text-center shadow-xl">
              Book Consultation
            </Link>
            <Link href="/gallery" className="btn-secondary text-center">
              View Results Gallery
            </Link>
          </div>
          <div className="flex items-center gap-6 text-sm justify-center flex-wrap">
            <div className="flex items-center gap-2">
              <Users className="text-white" size={20} />
              <span>5000+ Successful Cases</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="text-white" size={20} />
              <span>26+ Countries Served</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-white" size={20} />
              <span>22+ Years Experience</span>
            </div>
          </div>
        </div>
      </HeroVideoBackground>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Services
            </div>
            <h2 className="mb-4">Comprehensive Hair Loss Treatments</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced solutions for all types of hair loss, backed by international expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
                features={service.features}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Real Results
            </div>
            <h2 className="mb-4">Before & After Transformations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the incredible transformations achieved by Dr. Chacko Cyriac at Eterno Clinic
            </p>
          </div>
          <GalleryCarousel />
          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-primary inline-block">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Why Eterno Clinic
              </div>
              <h2 className="mb-6">Why Choose Eterno for Your Hair Restoration?</h2>
              <p className="text-gray-600 text-lg mb-8">
                With over 22+ years of experience and international training, Dr. Chacko Cyriac brings world-class expertise to Kerala. Our commitment to excellence and patient satisfaction sets us apart.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/contact" className="btn-primary inline-block">
                Schedule Your Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Simple Process
            </div>
            <h2 className="mb-4">Your Hair Restoration Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From consultation to transformation - we guide you every step of the way
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procedureSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 p-6 rounded-xl shadow-lg h-full">
                  <div className="text-6xl font-bold text-gray-900 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < procedureSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-gray-300" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Patient Stories
            </div>
            <h2 className="mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read real stories from patients who transformed their lives at Eterno Clinic
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Before/After CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">See Real Results from Real Patients</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Browse our gallery of before and after transformations. These could be your results!
          </p>
          <Link href="/gallery" className="btn-primary inline-block">
            View Results Gallery
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Got Questions?
            </div>
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to the most common questions about hair transplant procedures
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
          <div className="text-center mt-8">
            <Link href="/contact" className="btn-primary inline-block">
              Still Have Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-white mb-4">Start Your Hair Restoration Journey Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait any longer. Schedule your Consultation with Dr. Chacko Cyriac and take the first step towards regaining your confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary inline-block">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
