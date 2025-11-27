'use client'

import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  link: string
  features: string[]
}

export default function ServiceCard({ title, description, image, link, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 duration-300 overflow-hidden">
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.currentTarget.src = `https://placehold.co/600x400/e5e7eb/1f2937?text=${encodeURIComponent(title)}`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Service Content */}
      <div className="p-6">
        <h3 className="text-xl mb-3 font-bold">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <ul className="space-y-2 mb-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-600">
              <CheckCircle className="text-gray-900 mr-2 flex-shrink-0 mt-0.5" size={16} />
              {feature}
            </li>
          ))}
        </ul>
        <Link href={link} className="text-gray-900 font-semibold hover:text-black inline-flex items-center">
          Learn More <ArrowRight className="ml-2" size={16} />
        </Link>
      </div>
    </div>
  )
}
