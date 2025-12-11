"use client";

import { useState } from "react";

export default function WorldMapClientele() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  // Countries with their approximate coordinates (percentages based on standard world map)
  const countries = [
    { name: "USA", x: 20, y: 40 },
    { name: "Canada", x: 20, y: 28 },
    { name: "Ireland", x: 45, y: 33 },
    { name: "United Kingdom", x: 46, y: 33 },
    { name: "Switzerland", x: 49, y: 40 },
    { name: "Germany", x: 49, y: 36 },
    { name: "Austria", x: 51, y: 40 },
    { name: "Italy", x: 50, y: 44 },
    { name: "Turkey", x: 56, y: 44 },
    { name: "UAE", x: 63, y: 48 },
    { name: "Saudi Arabia", x: 60, y: 48 },
    { name: "Bahrain", x: 62, y: 47 },
    { name: "Kuwait", x: 61, y: 46 },
    { name: "Qatar", x: 62, y: 48 },
    { name: "Oman", x: 64, y: 50 },
    { name: "India", x: 70, y: 48 },
    { name: "Nepal", x: 72, y: 46 },
    { name: "Sri Lanka", x: 71, y: 52 },
    { name: "Singapore", x: 78, y: 55 },
    { name: "Malaysia", x: 78, y: 53 },
    { name: "Vietnam", x: 79, y: 48 },
    { name: "Hong Kong", x: 82, y: 46 },
    { name: "Japan", x: 87, y: 42 },
    { name: "Indonesia", x: 81, y: 58 },
    { name: "Australia", x: 86, y: 68 },
    { name: "New Zealand", x: 93, y: 74 },
    { name: "South Africa", x: 52, y: 68 },
    { name: "Ghana", x: 46, y: 52 },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Interactive World Map */}
      <div className="relative bg-white rounded-2xl p-4 sm:p-8 shadow-xl border border-gray-200 mb-8 overflow-hidden">
        <div className="relative w-full">
          {/* World Map Background Image */}
          <div className="relative">
            <img 
              src="/images/world-map.png" 
              alt="World Map" 
              className="w-full h-auto opacity-20 grayscale"
              onError={(e) => {
                // Fallback to inline SVG if image doesn't load
                e.currentTarget.style.display = 'none';
              }}
            />
            
            {/* Fallback SVG World Map if image not available */}
            <svg 
              viewBox="0 0 1000 500" 
              className="w-full h-auto"
              style={{ display: 'none' }}
              onLoad={(e) => {
                const img = e.currentTarget.previousElementSibling as HTMLImageElement;
                if (!img || img.style.display === 'none') {
                  e.currentTarget.style.display = 'block';
                }
              }}
            >
              <rect width="1000" height="500" fill="#f9fafb" />
              {/* Continents as simple shapes */}
              <path d="M 100 150 Q 150 120 200 150 L 220 200 Q 200 220 180 240 L 120 220 Q 90 200 100 150 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="2"/>
              <path d="M 180 260 Q 200 250 220 270 L 210 350 Q 190 380 170 370 L 160 300 Q 170 270 180 260 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="2"/>
              <path d="M 440 140 Q 480 120 520 130 L 550 160 Q 540 190 520 200 L 470 190 Q 440 170 440 140 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="2"/>
              <path d="M 460 220 Q 500 210 540 230 L 560 300 Q 550 360 520 380 L 470 370 Q 450 320 460 220 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="2"/>
              <path d="M 560 100 Q 650 80 750 100 L 850 140 Q 870 180 840 220 L 750 240 Q 660 200 560 160 L 560 100 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="2"/>
              <path d="M 800 330 Q 860 320 900 340 L 920 380 Q 900 410 860 420 L 800 400 Q 780 360 800 330 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="2"/>
            </svg>
          </div>

          {/* Country Markers Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="relative w-full h-full pointer-events-auto">
              {countries.map((country) => (
                <div
                  key={country.name}
                  onMouseEnter={() => setHoveredCountry(country.name)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  className="absolute cursor-pointer z-10"
                  style={{
                    left: `${country.x}%`,
                    top: `${country.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Pin/Marker */}
                  <div className="relative group">
                    {/* Outer pulse ring (always visible) */}
                    <div className="absolute inset-0 -m-2">
                      <div className={`w-7 h-7 rounded-full bg-gray-900 opacity-10 ${
                        hoveredCountry === country.name ? 'animate-ping' : ''
                      }`} />
                    </div>
                    
                    {/* Main dot */}
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 relative z-10 ${
                        hoveredCountry === country.name
                          ? "bg-black scale-150 ring-4 ring-black ring-opacity-30 shadow-lg"
                          : "bg-gray-900 hover:bg-black hover:scale-125 shadow-md"
                      }`}
                    />
                    
                    {/* Tooltip */}
                    <div
                      className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 text-white text-xs font-semibold rounded-lg whitespace-nowrap shadow-xl transition-all duration-200 z-20 ${
                        hoveredCountry === country.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2 pointer-events-none"
                      }`}
                    >
                      {country.name}
                      {/* Tooltip arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                        <div className="border-[6px] border-transparent border-t-gray-900" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-900 rounded-full shadow-md" />
            <span className="font-medium">Patient Origins (26+ Countries)</span>
          </div>
          <span className="hidden sm:inline text-gray-400">•</span>
          <span className="text-gray-500 text-xs sm:text-sm">Hover over markers to see country names</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center border-2 border-gray-200 hover:border-gray-900 transition-colors">
          <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">26+</div>
          <p className="text-gray-600 font-semibold text-sm sm:text-base">Countries Worldwide</p>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center border-2 border-gray-200 hover:border-gray-900 transition-colors">
          <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">5</div>
          <p className="text-gray-600 font-semibold text-sm sm:text-base">Continents</p>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center border-2 border-gray-200 hover:border-gray-900 transition-colors">
          <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">7000+</div>
          <p className="text-gray-600 font-semibold text-sm sm:text-base">International Patients</p>
        </div>
      </div>
    </div>
  );
}
