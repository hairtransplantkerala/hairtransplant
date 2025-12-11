"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { 
      name: "Our Services", 
      href: "/services",
      hasDropdown: true,
      dropdown: [
        { name: "ET-Protocol For Hair Loss & Hair Transplant", href: "/et-protocol" },
        { name: "SC-FUE", href: "/services/fue" },
        { name: "Inviscar FUT", href: "/services/fut" },
        { name: "DHI Hair Transplant", href: "/services/dhi" },
        { name: "UltraMax PRP", href: "/services/prp" },
        { name: "Beard Transplant", href: "/services/beard" },
        { name: "Eyebrow Transplant", href: "/services/eyebrow" },
      ]
    },
    { 
      name: "About", 
      href: "/about",
      hasDropdown: true,
      dropdown: [
        { name: "Dr. Chacko Cyriac", href: "/about" },
        { name: "In the Media", href: "/media" },
        { name: "Plastic Surgery Center", href: "/plastic-surgery-center" },
      ] 
    },
    { name: "Our Results", href: "/gallery" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
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
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement!;
                    parent.classList.add('bg-black');
                    const fallback = document.createElement('span');
                    fallback.className = 'text-white font-bold text-xl';
                    fallback.textContent = 'E';
                    parent.appendChild(fallback);
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
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-black font-medium transition-colors flex items-center gap-1"
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                      />
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all duration-200 ${
                      activeDropdown === item.name 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-black font-semibold border-b border-gray-200"
                      >
                        {item.name === "Our Services" ? "All Services" : "About Us"}
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

            {/* CTA Button */}
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
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="lg:hidden p-2 text-gray-700 hover:text-black relative z-[60]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 top-20"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation - Slide-in menu from right */}
      <div 
        className={`lg:hidden fixed right-0 top-20 bottom-0 w-[75%] sm:w-[60%] bg-white shadow-2xl z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="py-4 px-6 space-y-1">
          {navigation.map((item) => (
            item.hasDropdown ? (
              <div key={item.name}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-black font-medium"
                >
                  <span>{item.name}</span>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {activeDropdown === item.name && (
                  <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-300">
                    <Link
                      href={item.href}
                      className="block py-2 text-gray-600 hover:text-black font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name === "Our Services" ? "All Services" : "About Us"}
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
                className="block py-3 text-gray-700 hover:text-black font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
          
          {/* Mobile CTA */}
          <div className="pt-4 border-t space-y-3 mt-4">
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
    </>
  );
}
