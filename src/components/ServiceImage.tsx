'use client'

interface ServiceImageProps {
  src: string
  alt: string
}

export default function ServiceImage({ src, alt }: ServiceImageProps) {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-96 overflow-hidden shadow-xl">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = `https://placehold.co/800x600/e5e7eb/1f2937?text=${encodeURIComponent(alt)}`
        }}
      />
    </div>
  )
}
