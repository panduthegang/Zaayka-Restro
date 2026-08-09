import React from 'react'
import { ArrowDown } from 'lucide-react'

interface HeroProps {
  onOpenReservation?: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative bg-[#FFF5DF] overflow-hidden pt-8 sm:pt-12 md:pt-16 pb-0">
      
      {/* Top Header Text Container with ample bottom spacing to prevent overlapping */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-20 sm:mb-24 md:mb-28 lg:mb-32">
        
        {/* Top Pill Badge */}
        <div className="inline-block mb-6 sm:mb-8">
          <div className="inline-flex items-center px-4 sm:px-5 py-1.5 rounded-full border border-[#2A0403] bg-[#FFF5DF] text-xs sm:text-[13px] md:text-sm font-jakarta text-[#2A0403] tracking-wide shadow-sm">
            <span>Made with <strong className="font-bold">Love</strong>, Served with <strong className="font-bold">Joy</strong></span>
          </div>
        </div>

        {/* Main Headline - Playfair Display serif matching attached image */}
        <h1 className="font-playfair font-medium text-5xl sm:text-7xl md:text-8xl lg:text-[100px] text-[#2A0403] leading-[1.08] tracking-tight max-w-6xl mx-auto">
          Experience the <br className="hidden sm:inline" />
          Language of Taste
        </h1>

      </div>

      {/* Full-width Edge-to-Edge Image Section Container */}
      <div className="relative w-full">
        
        {/* Center Floating Red Circular CTA Button - Perfectly centered on top edge of image */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20">
          <button
            onClick={onOpenReservation}
            className="group relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-[#BF392B] text-[#FFF5DF] ring-8 ring-[#FFF5DF] shadow-2xl flex flex-col items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-[#a63023] focus:outline-none"
            aria-label="Reserve a Table"
          >
            {/* Soft pulse animation ring */}
            <span className="absolute inset-0 rounded-full bg-[#BF392B] animate-ping opacity-25 pointer-events-none" />

            {/* Downward Arrow */}
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 mb-1 text-[#FFF5DF] transform group-hover:translate-y-1 transition-transform duration-300 stroke-[2]" />
            
            {/* Text inside CTA */}
            <span className="font-jakarta font-bold text-[10px] sm:text-xs tracking-widest leading-tight uppercase text-center text-[#FFF5DF] px-2">
              RESERVE A<br />TABLE
            </span>
          </button>
        </div>

        {/* Unsplash Warm Restaurant Interior Hero Image - 100% Edge to Edge Full Width */}
        <div className="w-full relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2600&auto=format&fit=crop"
            alt="Drizzle Luxury Restaurant Interior"
            className="w-full h-[420px] sm:h-[540px] md:h-[660px] lg:h-[780px] object-cover object-center rounded-none"
            loading="eager"
          />
        </div>

      </div>
    </section>
  )
}
