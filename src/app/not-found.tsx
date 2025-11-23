'use client'

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">Looking for something?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <Link href="/services" className="p-4 border rounded-lg hover:bg-primary-50 transition-colors">
              <div className="font-semibold text-primary-600 mb-1">Our Services</div>
              <div className="text-sm text-gray-600">FUE, FUT, DHI treatments</div>
            </Link>
            <Link href="/gallery" className="p-4 border rounded-lg hover:bg-primary-50 transition-colors">
              <div className="font-semibold text-primary-600 mb-1">Results Gallery</div>
              <div className="text-sm text-gray-600">Before & after photos</div>
            </Link>
            <Link href="/about" className="p-4 border rounded-lg hover:bg-primary-50 transition-colors">
              <div className="font-semibold text-primary-600 mb-1">About Dr. Cyriac</div>
              <div className="text-sm text-gray-600">Expert credentials</div>
            </Link>
            <Link href="/contact" className="p-4 border rounded-lg hover:bg-primary-50 transition-colors">
              <div className="font-semibold text-primary-600 mb-1">Contact Us</div>
              <div className="text-sm text-gray-600">Book consultation</div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex items-center justify-center gap-2">
            <Home size={20} />
            Go to Homepage
          </Link>
          <button onClick={() => window.history.back()} className="btn-secondary inline-flex items-center justify-center gap-2">
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
