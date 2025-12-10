"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { 
      name: " Our services", 
      href: "/services",
      hasDropdown: true,
      dropdown: [
        { name: "FUE Hair Transplant", href: "/services/fue" },
        { name: "FUT Hair Transplant", href: "/services/fut" },
        { name: "DHI Hair Transplant", href: "/services/dhi" },
        { name: "PRP Treatment", href: "/services/prp" },
        { name: "Beard Transplant", href: "/services/beard" },
        { name: "Eyebrow Transplant", href: "/services/eyebrow" },
      ]
    },
    { name: "Dr. Chacko Cyriac", href: "/about" },
    { name: "Our Results", href: "/gallery" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
         {/* Logo */}
<Link href="/" className="flex items-center space-x-2 relative z-[60]">
  <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
    <img 
      src="/images/logo.png" 
      alt="Eterno Clinic Logo" 
      className="w-full h-full object-cover"
      onError={(e) => {
        // Fallback if image doesn't load
        e.currentTarget.style.display = 'none'
        const parent = e.currentTarget.parentElement!
        parent.classList.add('bg-black')
        const fallback = document.createElement('span')
        fallback.className = 'text-white font-bold text-xl'
        fallback.textContent = 'E'
        parent.appendChild(fallback)
      }}
    />
  </div>
  <div>
    <span className="text-m font-normal text-black block">Eterno</span>
    <span className="text-xs sm:text-sm lg:text-base font-bold text-gray-600 block">Hair Transplant Service</span>
  </div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-black font-medium transition-colors flex items-center gap-1"
                  >
                    {item.name}
                    <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {isServicesOpen && (
                    <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fade-in">
                      <Link
                        href="/services"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-black font-semibold border-b border-gray-200"
                      >
                        All Services
                      </Link>
                      {item.dropdown?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                        >
                          <span className="text-sm font-medium">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-black font-medium transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="btn-primary"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-black relative z-[60]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Slide-in menu from right (60% width) */}
        <div className={`lg:hidden fixed right-0 top-20 bottom-0 w-[60%] bg-white shadow-2xl z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="py-4 px-6 space-y-3">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-black font-medium"
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isServicesOpen && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-300">
                      <Link
                        href="/services"
                        className="block py-2 text-gray-600 hover:text-black font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        All Services
                      </Link>
                      {item.dropdown?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 text-gray-600 hover:text-black"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-sm">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-black font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="pt-4 border-t space-y-3">
              <Link
                href="/contact"
                className="btn-primary w-full text-center block text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
