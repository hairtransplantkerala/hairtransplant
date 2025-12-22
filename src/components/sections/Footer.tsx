"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Message, Instagram, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Eterno </h3>
            <p className="text-sm mb-4">
              The leading hair transplant clinic in Kochi, Kerala. <br></br>Our Plastic Surgeon : Dr. Chacko Cyriac.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/about" className="hover:text-white">About Dr. Cyriac</Link></li>
              <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
<div>
  <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
  <ul className="space-y-2 text-sm">
    <li>
      <Link href="/stem-cell-fue" className="hover:text-white transition-colors">
        FUE Hair Transplant
      </Link>
    </li>
    <li>
      <Link href="/inviscar-fut" className="hover:text-white transition-colors">
        FUT Hair Transplant
      </Link>
    </li>
    <li>
      <Link href="/prp-therapy" className="hover:text-white transition-colors">
        PRP Treatment
      </Link>
    </li>
    <li>
      <Link href="/beard-transplant" className="hover:text-white transition-colors">
        Beard Transplant
      </Link>
    </li>
    <li>
      <Link href="/eyebrow-transplant" className="hover:text-white transition-colors">
        Eyebrow Transplant
      </Link>
    </li>
  </ul>
</div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>4th Floor, AC Estate, Janatha Junction, S.A. Road, Vytilla, Kochi -682019</span>
              </li>
              <li>WhatsApp for appointment</li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="https://wa.me/+919645921944" className="hover:text-white">+91 9645921944</a>
              </li>
              <li>WhatsApp for consultation</li>
              <li className="flex items-center space-x-2">
                <MessageCircle size={16} />
                <a href="https://wa.me/+919995580363" className="hover:text-white">+91 9995580363</a></li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:eternocosmeticsurgery@gmail.com" className="hover:text-white">eternocosmeticsurgery@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <h4 className="text-white text-lg font-semibold mb-2">Disclaimer</h4>
          <p className="text-gray-400 text-justify">The contents on this website, written or pictorial, cannot replace a formal medical consultation. Enquiries via phone, email, WhatsApp or other social media platforms do not constitute a formal medical consultation. These enquiries do not establish a doctor-patient relationship. Follow up for advice using these platforms too cannot replace a formal medical review consultation. The inability to provide accurate advice in the absence of a medical examination is very real. The final treatment protocol, including the type of treatment for each individual, will vary and is decided upon by our Plastic Surgeon only after a detailed formal consultation. Results for each individual will also vary and is dependent on multiple factors many of which are beyond the control of the treating Plastic Surgeon. Therefore none of the information provided, the pictures or videos shown or anything our Plastic Surgeon or anybody else from our service say can or should be viewed as a guarantee of the outcome desired.</p>
</div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
  <p>&copy; {new Date().getFullYear()} CC Infotech Pvt Ltd. All rights reserved.</p> 
  <br />
  Developed by <a 
    href="https://creativewired.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors underline"
  >
    Creative Wired
  </a>
</div>
      </div>
    </footer>
  );
}
