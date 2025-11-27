'use client'

interface DoctorImageProps {
  src: string
  alt: string
}

export default function DoctorImage({ src, alt }: DoctorImageProps) {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-[600px] overflow-hidden shadow-2xl">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          const parent = e.currentTarget.parentElement!
          parent.classList.add('flex', 'items-center', 'justify-center')
          const placeholder = document.createElement('div')
          placeholder.className = 'text-center'
          placeholder.innerHTML = `
            <div class="w-40 h-40 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
              <span class="text-6xl font-bold text-gray-900">DC</span>
            </div>
            <span class="text-gray-600 text-lg font-semibold">[Dr. Cyriac Professional Photo]</span>
          `
          parent.appendChild(placeholder)
        }}
      />
    </div>
  )
}
