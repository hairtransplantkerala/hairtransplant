'use client'

import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
        <img 
          src="/images/logo.png" 
          alt="Eterno Clinic Logo" 
          className="w-full h-full object-cover"
          onError={(e) => {
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
        <span className="text-2xl font-bold text-black block">Eterno</span>
        <span className="text-xs text-gray-600 hidden sm:block">Hair Transplant Clinic</span>
      </div>
    </Link>
  )
}
