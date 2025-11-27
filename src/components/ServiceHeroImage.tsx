'use client'

interface ServiceHeroImageProps {
  src: string
  alt: string
  placeholder?: string
}

export default function ServiceHeroImage({ src, alt, placeholder = "Service Image" }: ServiceHeroImageProps) {
  return (
    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          const parent = e.currentTarget.parentElement!
          const gradientDiv = document.createElement('div')
          gradientDiv.className = 'w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white text-2xl font-bold'
          gradientDiv.textContent = placeholder
          parent.appendChild(gradientDiv)
        }}
      />
    </div>
  )
}
