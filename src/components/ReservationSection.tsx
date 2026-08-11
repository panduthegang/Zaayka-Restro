import React from 'react'

interface ReservationSectionProps {
  onOpenReservation: () => void
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ onOpenReservation }) => {
  return (
    <section className="w-full bg-[#FFF5DF] text-[#2A0403] py-10 sm:py-20 md:py-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Text Column + Right Asymmetric Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Pill Badge + Instrument Serif Headline + Rust Red Button) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            
            {/* Top Pill Badge */}
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#2A0403] bg-[#FFF5DF] text-xs sm:text-sm font-jakarta text-[#2A0403]">
                <span>Reserve your <strong className="font-bold">Table</strong></span>
              </div>
            </div>

            {/* Main Headline in Instrument Serif */}
            <h2 className="font-instrument font-normal text-4xl sm:text-5xl lg:text-[58px] text-[#2A0403] leading-[1.04] tracking-tight max-w-md">
              Reserve your spot! ultimate joy of dining done right
            </h2>

            {/* CTA Button */}
            <div>
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#BF392B] text-[#FFF5DF] text-sm sm:text-base font-jakarta font-bold tracking-[0.06em] uppercase hover:bg-[#a32e22] transition-colors duration-300 shadow-md cursor-pointer"
              >
                RESERVE YOUR TABLE
              </button>
            </div>

          </div>

          {/* Right Column: Asymmetric Image Grid (2 Stacked Left + 1 Tall Right) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-stretch">
            
            {/* Sub-column 1: Two Stacked Landscape Images */}
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* Top Landscape Image */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-[180px] sm:h-[200px] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Couple clinking wine glasses at dining table"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Landscape Image */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-[180px] sm:h-[200px] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
                  alt="Elegant empty restaurant tables interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Sub-column 2: Single Tall Portrait Image matching right height */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-[375px] sm:h-[420px] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
                alt="Smiling couple having dinner at luxury restaurant"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
