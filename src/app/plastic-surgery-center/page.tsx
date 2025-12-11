import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, MapPin, Clock, Shield, Lock, Building2, Play } from "lucide-react";

export const metadata = {
  title: "The Plastic Surgery Centre Kochi | World-Class Cosmetic Surgery Facility | Eterno",
  description: "First-of-its-kind plastic surgery center in Kochi, Kerala. Outpatient cosmetic procedures, hair transplant surgery in safe, private, patient-friendly environment by Dr. Chacko Cyriac.",
  keywords: "plastic surgery center Kochi, cosmetic surgery clinic Kochi, hair transplant center Kerala, outpatient cosmetic surgery, private plastic surgery Kochi",
};

export default function PlasticSurgeryCenterPage() {
  const facilities = [
    {
      icon: Building2,
      title: "First of its Kind",
      description: "Probably the first dedicated plastic surgery center in this part of the country"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Located in the heart of Kochi, Kerala, easily accessible to all"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Patient-friendly facility designed for minor outpatient cosmetic procedures"
    },
    {
      icon: Lock,
      title: "Complete Privacy",
      description: "Ambience and total privacy for all patients coming in for consultation"
    },
  ];

  const hairServices = [
    "Hair Transplantation (FUE & FUT)",
    "Body Hair Transplantation",
    "Beard Hair Transplantation",
    "Moustache Hair Transplantation",
    "Eyebrow Hair Transplantation"
  ];

  const galleryMedia = [
    {
      type: "video",
      src: "/videos/clinic-tour.mp4",
      thumbnail: "/images/clinic/video-thumb-1.webp",
      title: "Virtual Clinic Tour"
    },
    {
      type: "image",
      src: "/images/clinic/reception.webp",
      title: "Reception & Waiting Area"
    },
    {
      type: "image",
      src: "/images/clinic/consultation-room.webp",
      title: "Private Consultation Room"
    },
    {
      type: "video",
      src: "/videos/operating-suite.mp4",
      thumbnail: "/images/clinic/video-thumb-2.webp",
      title: "Operating Suite"
    },
    {
      type: "image",
      src: "/images/clinic/recovery-room.webp",
      title: "Recovery Area"
    },
    {
      type: "image",
      src: "/images/clinic/exterior.webp",
      title: "Clinic Exterior"
    },
  ];

  return (
    <>
      {/* Hero Section with Background Video */}
      <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/videos/clinic-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/95"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">The Plastic Surgery Centre</h1>
            <p className="text-2xl text-gray-300 mb-4">
              First of its Kind in Kochi, Kerala
            </p>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              World-class plastic surgical services with a focus on cosmetic surgery and hair transplantation in a safe, private, patient-friendly environment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-block text-center">
                Book Consultation
              </Link>
              <a href="tel:+919645921944" className="btn-secondary inline-flex items-center justify-center gap-2">
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction with Image */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">About The Plastic Surgery Centre</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The Plastic Surgery Centre is probably the <strong>first of its kind in this part of the country</strong>. Located in the heart of Kochi, Kerala, this outpatient cosmetic service is easily accessible.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  It provides the ambience and privacy required for any patient coming in for a consultation. With a <strong>safe and patient-friendly environment</strong>, minor outpatient cosmetic procedures including hair transplant surgeries can easily be done.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For the past several years, we have been providing <strong>world-class plastic surgical services</strong> with a particular focus on cosmetic surgery and hair transplant surgery.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/images/clinic/exterior.webp"
                  alt="Eterno Plastic Surgery Centre"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A unique facility designed for your comfort, safety, and complete privacy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900 text-center">{facility.title}</h3>
                  <p className="text-gray-600 text-sm text-center">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clinic Gallery - Images & Videos */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Tour Our Facility</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the ambience and world-class infrastructure
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryMedia.map((media, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {media.type === "video" ? (
                  <div className="relative aspect-video bg-gray-900">
                    <img
                      src={media.thumbnail}
                      alt={media.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="text-gray-900 ml-1" size={32} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-semibold">{media.title}</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-video">
                    <img
                      src={media.src}
                      alt={media.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-semibold">{media.title}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">Our Services</h2>
            <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
              We provide the full range of cosmetic surgical services, from minor outpatient procedures to major inpatient surgical procedures.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Hair Loss Treatments</h3>
              <p className="text-gray-700 mb-6">
                Amongst our outpatient services, we provide the best hair loss treatments in Kochi (Cochin), Kerala, India:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {hairServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/services" className="btn-primary inline-block">
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section with Video */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <Lock size={18} />
                  <span>Your Privacy is Our Priority</span>
                </div>
                <h2 className="mb-6">Total Privacy & Confidentiality</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The Centre provides for <strong>total privacy for all its clients</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  However, when some patients require a greater degree of privacy, we are even willing to <strong>shut down most of our services</strong> to ensure you are the only patient at our premises.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Even <strong>extended timings are possible</strong> to ensure your privacy is maintained.
                </p>
                <Link href="/contact" className="btn-primary inline-block">
                  Request Private Appointment
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  >
                    <source src="/videos/privacy-features.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Why Patients Trust Us</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">22+</div>
                <p className="text-gray-600 font-semibold">Years of Excellence</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">7000+</div>
                <p className="text-gray-600 font-semibold">Successful Procedures</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">26+</div>
                <p className="text-gray-600 font-semibold">Countries Served</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Dr. Chacko Cyriac</h3>
              <p className="text-lg text-gray-300 mb-6">
                MCh Plastic Surgery from PGI Chandigarh with international training from UK, USA, Canada, and Singapore. Personally performs all procedures with proven expertise.
              </p>
              <Link href="/about" className="btn-secondary inline-block">
                Learn More About Dr. Cyriac
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Easily Accessible Location</h2>
                <div className="bg-gray-50 p-8 rounded-2xl shadow-lg mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="text-gray-900 flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Eterno - The Plastic Surgery Centre</h3>
                      <p className="text-gray-700 mb-2">
                        Located in the heart of Kochi, Kerala<br />
                        Near St. Teresa's College<br />
                        Ernakulam, Kochi - 682011
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 mb-4">
                    <Clock size={20} className="text-gray-900" />
                    <span>Monday - Saturday: 9:00 AM - 6:00 PM</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Extended timings available for privacy on request
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary inline-block text-center">
                    Book Appointment
                  </Link>
                  <a href="tel:+919645921944" className="btn-secondary inline-flex items-center justify-center gap-2">
                    <Phone size={20} />
                    +91 96459 21944
                  </a>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/clinic/location-map.webp"
                  alt="Eterno Clinic Location"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready for Your Transformation?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience world-class plastic surgery and hair transplantation in a safe, private, and patient-friendly environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block">
              Schedule Consultation
            </Link>
            <Link href="/gallery" className="btn-secondary inline-block">
              View Results
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
