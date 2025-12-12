import { Award, GraduationCap, Globe, Users, CheckCircle, BookOpen, Trophy, Heart } from "lucide-react";
import Link from "next/link";
import DoctorImage from "@/components/DoctorImage";

export const metadata = {
  title: "About Dr. Chacko Cyriac | Expert Hair Transplant Surgeon",
  description: "Meet Dr. Chacko Cyriac, MCh Plastic Surgery from PGI Chandigarh with international training from UK, USA, Canada, and Singapore. 22+ years experience, 7000+ successful procedures.",
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
      title: "22+ Years Experience",
      description: "Extensive experience in plastic surgery and hair restoration with continuous learning"
    },
    {
      icon: Users,
      title: "7000+ Successful Cases",
      description: "Thousands of satisfied patients with life-changing transformations"
    },
    {
      icon: Globe,
      title: "International Clientele",
      description: "Patients from 26+ countries including USA, UK, UAE, Singapore, and more"
    },
    {
      icon: GraduationCap,
      title: "Advanced Training",
      description: "Trained at world-renowned institutions across multiple countries"
    },
    {
      icon: Trophy,
      title: "Industry Recognition",
      description: "Featured speaker at national and international hair restoration conferences"
    },
    {
      icon: Heart,
      title: "Patient-Centric Care",
      description: "Personalized approach with lifetime follow-up and support"
    }
  ];

  const mediaFeatures = [
    {
      title: "Featured in Leading Medical Journals",
      description: "Published research on advanced hair transplant techniques"
    },
    {
      title: "International Conference Speaker",
      description: "Regular presenter at hair restoration conferences worldwide"
    },
    {
      title: "Medical Innovation",
      description: "Pioneered modified techniques for better graft survival"
    },
    {
      title: "Media Appearances",
      description: "Featured in health magazines and medical television programs"
    }
  ];

  const philosophy = [
    {
      title: "Artistic Excellence",
      description: "Every hairline is designed as a unique work of art that complements your facial features and age"
    },
    {
      title: "Natural Results",
      description: "Focus on creating undetectable, natural-looking results that restore confidence"
    },
    {
      title: "Ethical Practice",
      description: "Honest assessment of candidacy and realistic expectations with transparent pricing"
    },
    {
      title: "Continuous Innovation",
      description: "Staying updated with latest techniques and technology for optimal patient outcomes"
    }
  ];

  const journey = [
    {
      year: "2008",
      title: "MCh Plastic Surgery",
      description: "Completed advanced training from prestigious PGI Chandigarh"
    },
    {
      year: "2010",
      title: "International Fellowship",
      description: "Specialized training in UK focusing on aesthetic and reconstructive surgery"
    },
    {
      year: "2012",
      title: "Hair Restoration Expertise",
      description: "Advanced certification in hair transplant techniques from USA and Singapore"
    },
    {
      year: "2015",
      title: "Eterno Clinic Established",
      description: "Founded state-of-the-art hair transplant clinic in Kochi, Kerala"
    },
    {
      year: "2020",
      title: "7000+ Successful Procedures",
      description: "Milestone achievement with patients from 26+ countries"
    },
    {
      year: "2025",
      title: "Industry Leader",
      description: "Recognized as one of Kerala's leading hair transplant surgeons"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="container-custom">
          <h1 className="mb-4 text-white">Meet Dr. Chacko Cyriac</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Senior Consultant Plastic Surgeon | MCh Plastic Surgery | International Expert in Hair Restoration
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Image - Removed sticky on mobile, only sticky on lg+ */}
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
                    <span><strong>98%</strong> Patient Satisfaction</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  About Dr. Cyriac
                </div>
                <h2 className="mb-4">A Leader in Hair Restoration Surgery</h2>
                <p className="text-gray-600 text-lg mb-4">
                  Dr. Chacko Cyriac is a highly qualified and experienced plastic surgeon with specialized expertise in hair transplantation and restoration. With his MCh in Plastic Surgery from the prestigious Post Graduate Institute (PGI), Chandigarh, he represents the pinnacle of surgical training in India.
                </p>
                <p className="text-gray-600 text-lg mb-4">
                  What sets Dr. Cyriac apart is his pursuit of international excellence. After completing his MCh, he pursued advanced training and qualifications from leading institutions in the United Kingdom, United States, Canada, and Singapore. This international exposure has equipped him with cutting-edge techniques and a global perspective on hair restoration.
                </p>
                <p className="text-gray-600 text-lg">
                  His commitment to excellence and continuous learning has positioned him as one of the most sought-after hair transplant surgeons in India, with patients traveling from around the world to receive his expert care.
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

              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Choose Your Doctor Wisely</h3>
                <p className="text-gray-300 mb-4">
                  When considering hair transplant surgery, it's crucial to ask the right questions:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ What are your surgeon's qualifications ?</li>
                  <li>✓ What is their primary training background ?</li>
                  <li>✓ Are they qualified and trained to perform surgery ?</li>
                  <li>✓ What kind of surgical training do they have ?</li>
                  <li>✓ How many procedures have they performed ?</li>
                  <li>✓ Can you see before and after results ?</li>
                </ul>
                <p className="text-white font-semibold mt-4 text-lg">
                  With Dr. Cyriac, you can trust that you're in the hands of a true expert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Treatment Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What guides our approach to hair restoration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Recognition & Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A track record of excellence and patient satisfaction
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

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Professional Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones in a career dedicated to excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {journey.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-900 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {milestone.year}
                    </div>
                    {index < journey.length - 1 && (
                      <div className="w-1 h-full bg-gray-200 mt-2"></div>
                    )}
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg flex-1 mb-8">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Dr. Cyriac in the Media</h2>
              <p className="text-gray-600 text-lg">
                Dr. Chacko Cyriac is a recognized expert whose work extends beyond hair transplant surgery. His innovative techniques and successful outcomes have been featured in various media outlets.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Consult with Dr. Cyriac</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get personalized expert advice for your hair restoration journey. Book your Consultation today.
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
