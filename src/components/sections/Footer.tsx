"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Eterno Clinic</h3>
            <p className="text-sm mb-4">
              The leading hair transplant clinic in Kochi, Kerala. Expert care by Dr. Chacko Cyriac.
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
              <li>FUE Hair Transplant</li>
              <li>FUT Hair Transplant</li>
              <li>PRP Treatment</li>
              <li>Beard Transplant</li>
              <li>Eyebrow Transplant</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Eterno Clinic, Kochi, Kerala, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+918884447777" className="hover:text-white">+91 9645921944</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:eternocosmeticsurgery@gmail.com" className="hover:text-white">eternocosmeticsurgery@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Eterno Hair Transplant Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
