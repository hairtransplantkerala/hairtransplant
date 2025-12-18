'use client';

import { MessageCircle, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '919895666099'; // Replace with actual WhatsApp number
  const callNumber = '+91 96459 21944'; // Display format
  const message = 'Hello! I would like to know more about hair transplant services at Eterno Clinic.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${callNumber}`;
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 animate-pulse"
        aria-label="Contact Us"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-6 w-80 border-2 border-green-500 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-500 p-2 rounded-full">
              <MessageCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Get in Touch !</h3>
              <p className="text-sm text-gray-600">We're here to help you</p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">
            Have questions about hair transplant? Contact us via WhatsApp or call us directly.
          </p>
          
          {/* WhatsApp Button */}
<button
  onClick={handleWhatsAppClick}
  className="w-full bg-transparent border-2 border-green-500 text-green-500 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 mb-3"
>
  <MessageCircle size={20} />
  Chat on WhatsApp
</button>

{/* Call Button */}
<button
  onClick={handleCallClick}
  className="w-full bg-transparent border-2 border-green-500 text-green-500 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
>
  <Phone size={20} />
  Call Now
</button>

          {/* Phone Number Display 
          <div className="mt-4 pt-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500 mb-1">Direct Line</p>
            <a 
              href={`tel:${callNumber}`}
              className="text-gray-900 font-semibold hover:text-green-500 transition-colors"
            >
              {callNumber}
            </a>
          </div> */}
        </div>
      )}
    </>
  );
}
