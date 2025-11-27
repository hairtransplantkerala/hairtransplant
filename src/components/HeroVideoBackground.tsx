'use client'

import { useState } from 'react'

interface HeroVideoBackgroundProps {
  videoSrc: string
  children: React.ReactNode
}

export default function HeroVideoBackground({ videoSrc, children }: HeroVideoBackgroundProps) {
  const [videoError, setVideoError] = useState(false)

  return (
    <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-20 md:py-32 overflow-hidden">
      {/* Video Background */}
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
        </video>
      )}

      {/* Fallback Gradient Background (shown if video fails) */}
      {videoError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-black z-0" />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 z-[2]" />

      {/* Content */}
      <div className="container-custom relative z-10">
        {children}
      </div>
    </section>
  )
}
