"use client";

import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  MessageCircle, 
  Instagram, 
  Youtube 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        {/* Quick Links and Services - Side by side on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links - First column */}
          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Dr. Cyriac</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/choose-your-doctor" className="hover:text-white transition-colors">Choose Your Doctor</Link></li>
            </ul>
          </div>

          {/* Our Services - Second column */}
          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/et-protocol" className="hover:text-white transition-colors">
                  ET-Protocol
                </Link>
              </li>
              <li>
                <Link href="/stem-cell-fue" className="hover:text-white transition-colors">
                  SC-FUE
                </Link>
              </li>
              <li>
                <Link href="/inviscar-fut" className="hover:text-white transition-colors">
                  InviScar FUT
                </Link>
              </li>
              <li>
                <Link href="/micro-fue" className="hover:text-white transition-colors">
                  Micro FUE
                </Link>
              </li>
              <li>
                <Link href="/prp-therapy" className="hover:text-white transition-colors">
                  UltraMax PRP
                </Link>
              </li>
              <li>
                <Link href="/gfc-prp" className="hover:text-white transition-colors">
                  GFC Treatment
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

          {/* Contact - Third column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white text-base md:text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>4th Floor, AC Estate, Janatha Junction, S.A. Road, Vytilla, Kochi -682019</span>
              </li>
              
              {/* WhatsApp for Appointment */}
              <li>
                <div className="flex items-center space-x-2 mb-1">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <path 
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" 
                      fill="currentColor"
                    />
                  </svg>
                  <span className="font-semibold text-xs md:text-sm">WhatsApp for appointment</span>
                </div>
                <a href="https://wa.me/919645921944" className="hover:text-white pl-6 block">
                  +91 9645921944
                </a>
              </li>
              
              {/* WhatsApp for Consultation */}
              <li>
                <div className="flex items-center space-x-2 mb-1">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <path 
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" 
                      fill="currentColor"
                    />
                  </svg>
                  <span className="font-semibold text-xs md:text-sm">WhatsApp for consultation</span>
                </div>
                <a href="https://wa.me/919995580363" className="hover:text-white pl-6 block">
                  +91 9995580363
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:eternocosmeticsurgery@gmail.com" className="hover:text-white break-all">eternocosmeticsurgery@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-6 text-center text-xs md:text-sm">
          <h4 className="text-white text-base md:text-lg font-semibold mb-2">Disclaimer</h4>
          <p className="text-gray-400 leading-relaxed text-justify">
            The contents on this website, written or pictorial, cannot replace a formal medical consultation. 
            Enquiries via phone, email, WhatsApp or other social media platforms do not constitute a formal medical consultation. 
            These enquiries do not establish a doctor-patient relationship. 
            Follow up for advice using these platforms too cannot replace a formal medical review consultation. 
            The inability to provide accurate advice in the absence of a medical examination is very real. 
            The final treatment protocol, including the type of treatment for each individual, will vary and is decided upon by our Plastic Surgeon only after a detailed formal consultation. 
            Results for each individual will also vary and is dependent on multiple factors many of which are beyond the control of the treating Plastic Surgeon. 
            Therefore none of the information provided, the pictures or videos shown or anything our Plastic Surgeon or anybody else from our service say can or should be viewed as a guarantee of the outcome desired.
          </p>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-xs md:text-sm">
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
