'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '919645921944'; // Replace with actual WhatsApp number
  const message = 'Hello! I would like to know more about hair transplant services at Eterno Clinic.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 animate-pulse"
        aria-label="WhatsApp Contact"
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
              <h3 className="font-bold text-gray-900">Chat with us!</h3>
              <p className="text-sm text-gray-600">Typically replies instantly</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Hi! Click below to chat with us on WhatsApp about hair transplant consultations.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            Start Chat on WhatsApp
          </button>
        </div>
      )}
    </>
  );
}
