import { Award, GraduationCap, Globe, Users, CheckCircle, BookOpen, Trophy, Heart } from "lucide-react";
import Link from "next/link";
import DoctorImage from "@/components/DoctorImage";

export const metadata = {
  title: "About Dr. Chacko Cyriac | Expert Hair Transplant Surgeon Kochi",
  description: "Meet Dr. Chacko Cyriac, Senior Consultant Plastic Surgeon with qualifications from 5 countries. Sam C Bose Award winner, leading hair transplant practice in Kochi, Kerala.",
  keywords: "Dr Chacko Cyriac, plastic surgeon Kochi, hair transplant surgeon Kerala, MCh Plastic Surgery, Cooper Foundation Fellowship",
};

export default function AboutPage() {
  const qualifications = [
    "MCh Plastic Surgery, PGI Chandigarh, India",
    "Fellowship in Aesthetic Surgery - United Kingdom",
    "Advanced Hair Restoration Training - United States",
    "Microsurgery Certification - Canada",
    "International Hair Transplant Certification - Singapore",
    "MBBS, MS General Surgery"
  ];

  const expertise = [
    "Hair Transplantation (FUE, FUT, DHI)",
    "Facial Hair Restoration (Beard, Eyebrow, Mustache)",
    "Female Hair Loss Treatment",
    "Pediatric Hair Loss Management",
    "Scar Revision and Hair Restoration",
    "PRP and Medical Hair Loss Therapy",
    "Body Hair to Scalp Transplantation",
    "Repair of Failed Hair Transplants"
  ];

  const achievements = [
    {
      icon: Award,
      title: "Sam C Bose Award 2016",
      description: "Prestigious award by Association of Plastic Surgeons of India for best audit and research paper"
    },
    {
      icon: Trophy,
      title: "Cooper Foundation Fellowship",
      description: "Selected for clinical and research work in Pediatric Plastic Surgery at University of Toronto, Canada"
    },
    {
      icon: GraduationCap,
      title: "Healthy Kids Fellowship",
      description: "Advanced training in Pediatric Plastic Surgery at University of Toronto, Canada"
    },
    {
      icon: Users,
      title: "7000+ Successful Cases",
      description: "Leading one of the largest hair transplant practices in Kochi, Kerala"
    },
    {
      icon: Globe,
      title: "International Clientele",
      description: "Patients from 26+ countries trust Dr. Cyriac's expertise"
    },
    {
      icon: Heart,
      title: "Dual Excellence",
      description: "Heads Plastic Surgery Department at Lourdes Hospital while maintaining hair transplant practice"
    }
  ];

  const innovations = [
    {
      title: "UltraMax PRP",
      description: "Pioneering technique for superior hair growth results",
      link: "/services/prp"
    },
    {
      title: "SC-FUE",
      description: "Stem Cell enhanced FUE for improved graft survival",
      link: "/services/fue"
    },
    {
      title: "InviScar FUT",
      description: "Advanced strip method with minimized scarring",
      link: "/services/fut"
    }
  ];

  const philosophy = [
    {
      title: "Reconstructive Foundation",
      description: "Believes principles of reconstructive surgery hold true in cosmetic surgery. Cannot be a good cosmetic surgeon without knowing reconstructive techniques."
    },
    {
      title: "Continuous Innovation",
      description: "Innovative streak enabled development of newer techniques in both reconstructive and hair transplant surgery."
    },
    {
      title: "Comprehensive Practice",
      description: "Careful not to narrow down to just hair transplant alone, continues to head Plastic Surgery Department at Lourdes Hospital."
    },
    {
      title: "National Recognition",
      description: "High standard of work recognized at national level through prestigious awards and fellowships."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="container-custom">
          <h1 className="mb-4 text-white">Our Plastic Surgeon</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Image */}
            <div className="lg:sticky lg:top-24">
              <DoctorImage 
                src="/images/dr-cyriac.jpg"
                alt="Dr. Chacko Cyriac - Hair Transplant Specialist"
              />
              <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
                <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="text-gray-900 mr-3" size={20} />
                    <span><strong>22+</strong> Years Experience</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-gray-900 mr-3" size={20} />
                    <span><strong>7000+</strong> Successful Procedures</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-gray-900 mr-3" size={20} />
                    <span><strong>26+</strong> Countries Served</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-gray-900 mr-3" size={20} />
                    <span><strong>5</strong> Countries Training</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-4">Dr. Chacko Cyriac</h2>
                <p className="text-gray-700 text-lg mb-4 text-justify">
                  With qualifications from 5 countries and with training from the very best centres in India and abroad, Dr Cyriac returned to India to set up the first Plastic Surgery Unit in the 600 bedded Lourdes Hospital, in Kochi, Kerala, India.
                </p>
                <p className="text-gray-700 text-lg mb-4 text-justify">
                  Over the years, Dr Cyriac was careful to not let himself narrow down to just hair transplant surgery alone as he firmly believes that the principles of reconstructive surgery hold true in cosmetic surgery as well. <strong>"One cannot be a good cosmetic surgeon if one does not know and practice the techniques and principles of reconstructive surgery,"</strong> he claims. Therefore, while leading one of the largest hair transplant practices in Kochi (Cochin), Kerala, he continues to head the Plastic Surgery Department at Lourdes Hospital.
                </p>
                <p className="text-gray-700 text-lg text-justify">
                  The innovative streak in him enabled him to develop newer techniques in several aspects of Plastic Surgery, be it reconstructive surgery or hair transplant surgery.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <GraduationCap className="mr-3 text-gray-900" size={32} />
                  Qualifications & Training
                </h3>
                <ul className="space-y-3">
                  {qualifications.map((qual, index) => (
                    <li key={index} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700 font-medium">{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <BookOpen className="mr-3 text-gray-900" size={32} />
                  Areas of Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
                      <CheckCircle className="text-gray-900 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Recognition */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-black">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">National Recognition</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Sam C Bose and Saroja Bose Award, 2016</h3>
                  <p className="text-gray-700 text-lg text-justify">
                    The prestigious <strong>Sam C Bose and Saroja Bose Award, 2016</strong>, for the best audit and research paper by the <strong>Association of Plastic Surgeons of India</strong> was a recognition of the high standard of his work at the National level.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Cooper Foundation Fellowship Grant</h3>
                  <p className="text-gray-700 text-lg text-justify">
                    Earlier on he had won the <strong>Cooper Foundation Fellowship Grant</strong> for the purpose of pursuing clinical and research work in Pediatric Plastic Surgery at the University of Toronto, Canada.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Healthy Kids International Fellowship</h3>
                  <p className="text-gray-700 text-lg text-justify">
                    He was also selected for the <strong>Healthy Kids International Fellowship Grant</strong> for advanced training in Pediatric Plastic Surgery at the University of Toronto, Canada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pioneering Techniques */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Pioneering Techniques in Hair Transplantation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Dr. Cyriac has developed innovative techniques that have set new standards in hair restoration surgery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {innovations.map((innovation, index) => (
              <Link 
                key={index} 
                href={innovation.link}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all group"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                  {innovation.title}
                </h3>
                <p className="text-gray-600 mb-4">{innovation.description}</p>
                <span className="text-gray-900 font-semibold inline-flex items-center group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              To read more about his pioneering techniques, go to the{" "}
              <Link href="/services" className="text-gray-900 font-semibold underline hover:text-black">
                latest in hair transplant
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy 
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Treatment Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What sets Dr. Cyriac apart in plastic and hair restoration surgery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {philosophy.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-justify">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Achievements */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Recognition & Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A track record of excellence and innovation in plastic surgery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-block bg-gray-100 p-4 rounded-full mb-4">
                  <achievement.icon className="w-10 h-10 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Doctor Wisely 
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl text-white">
              <h2 className="text-3xl font-bold mb-6">Choose Your Doctor Wisely</h2>
              <p className="text-gray-300 mb-6 text-lg text-justify">
                When considering hair transplant surgery, it's crucial to ask the right questions about your surgeon's qualifications and experience:
              </p>
              <ul className="space-y-3 text-gray-300 text-lg mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>What are your surgeon's qualifications?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>What is their primary training background?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Are they qualified and trained to perform surgery?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>What kind of surgical training do they have?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>How many procedures have they performed?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Can you see before and after results?</span>
                </li>
              </ul>
              <p className="text-white font-bold text-xl">
                With Dr. Cyriac, you can trust that you're in the hands of a true expert with qualifications from 5 countries and recognized excellence at the national level.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Schedule an Appointment</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            To schedule an appointment to meet Dr. Chacko Cyriac, contact us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block">
              Book Consultation
            </Link>
            <Link href="/gallery" className="btn-secondary inline-block">
              View Results Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
