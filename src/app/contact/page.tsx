"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";
import { useState } from "react";

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  preferredDate: z.string().optional(),
  serviceInterest: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Format the WhatsApp message
      const whatsappMessage = `
*New Consultation Request*

*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Service Interest:* ${data.serviceInterest || 'Not specified'}
*Subject:* ${data.subject}
*Preferred Date:* ${data.preferredDate || 'Not specified'}

*Message:*
${data.message}

---
Sent from Eterno Clinic Website
      `.trim();

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // WhatsApp number (without + symbol, with country code)
      const whatsappNumber = "919645921944";
      
      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');
      
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Eterno Hair Transplant Clinic", "Panampilly Nagar, Kochi", "Kerala 682036, India"],
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9645921944", "+91 843 137 3779"],
      link: "tel:+918884447777"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["eternocosmeticsurgery@gmail.com", "appointments@eternoclinic.com"],
      link: "mailto:eternocosmeticsurgery@gmail.com"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: By Appointment Only"],
      link: null
    },
  ];

  const services = [
    "FUE Hair Transplant",
    "FUT Hair Transplant",
    "DHI Method",
    "PRP Treatment",
    "Beard Transplant",
    "Eyebrow Transplant",
    "Female Hair Loss",
    "Other"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="container-custom">
          <h1 className="mb-4 text-white">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Schedule your free consultation with Dr. Chacko Cyriac today. We're here to answer all your questions.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="inline-block bg-gray-100 p-4 rounded-full mb-4">
                  <info.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm mb-1">
                    {info.link && idx === 0 ? (
                      <a href={info.link} className="hover:text-gray-900 transition-colors">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h2 className="text-3xl font-bold mb-2">Book Your Free Consultation</h2>
              <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              {submitSuccess && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded">
                  <div className="flex items-center">
                    <Check className="mr-3" size={24} />
                    <div>
                      <p className="font-bold">WhatsApp message sent successfully!</p>
                      <p className="text-sm">We'll contact you shortly to confirm your appointment.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                      placeholder="+91 9876543210"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Service Interest
                  </label>
                  <select
                    {...register("serviceInterest")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    {...register("subject")}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                    placeholder="Hair Transplant Consultation"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Preferred Appointment Date
                  </label>
                  <input
                    {...register("preferredDate")}
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your hair loss concerns and what you hope to achieve..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send via WhatsApp</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Your message will be sent via WhatsApp. By submitting, you agree to our privacy policy.
                </p>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.590222200979!2d76.30854187527144!3d9.968010473583847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0873ba3f3a0e5d%3A0x96d4cdcbaa9e9b21!2sDr%20Chacko%20Cyriac%20Cosmetic%20Plastic%20Surgeon%2C%20PRP%20Hair%2C%20Laser%20Hair%20Removal!5e0!3m2!1sen!2sin!4v1764174583133!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="text-gray-600">
                  We're conveniently located in the heart of Kochi, Kerala. Our state-of-the-art facility provides a comfortable and private environment for all consultations and procedures.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4">International Patients</h3>
                <p className="text-gray-300 mb-4">
                  We welcome patients from around the world. We can assist with:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <Check className="mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Travel and accommodation arrangements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Airport pickup and drop services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Hotel recommendations near clinic</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Post-procedure care instructions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Virtual consultations available</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Multi-language support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Why Choose Eterno?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-gray-900 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Free consultation with Dr. Chacko Cyriac</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gray-900 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">15+ years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gray-900 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">5000+ successful procedures</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gray-900 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">State-of-the-art facility</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gray-900 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Transparent pricing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gray-900 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Lifetime follow-up support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="mb-4">Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Check out our FAQ section for detailed answers about hair transplant procedures, recovery, and costs.
            </p>
            <a href="/#faq" className="btn-secondary inline-block">
              View All FAQs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
