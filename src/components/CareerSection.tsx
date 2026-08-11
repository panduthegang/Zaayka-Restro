import React from 'react'
import { Coffee, CupSoda, Drumstick, Sandwich } from 'lucide-react'

export const CareerSection: React.FC = () => {

  // 6 Floating Pill Badges with exact coordinates & rotations matching Image 2
  const floatingTags = [
    { label: 'HONEST', top: '12%', left: '15%', rotate: -12 },
    { label: 'FRIENDLY', top: '22%', left: '36%', rotate: -8 },
    { label: 'PASSIONATE', top: '14%', left: '58%', rotate: 10 },
    { label: 'ADAPTABLE', top: '54%', left: '18%', rotate: -10 },
    { label: 'CREATIVE', top: '64%', left: '44%', rotate: -6 },
    { label: 'APPLY NOW', top: '56%', left: '68%', rotate: 12 },
  ]

  return (
    <section className="w-full bg-[#FFF5DF] text-[#2A0403] py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Ultra Wide Container extending near screen edges */}
      <div className="w-full max-w-[1640px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Main Section Frame with vertical side borders matching Image 2 */}
        <div className="relative py-12 sm:py-16 md:py-20 px-6 sm:px-12 md:px-20">
          
          {/* Straight Left Vertical Border */}
          <div
            className="absolute left-0 top-12 bottom-4 w-[1.5px] pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(42, 4, 3, 0.16) 20%, rgba(42, 4, 3, 0.20) 100%)'
            }}
          />

          {/* Straight Right Vertical Border */}
          <div
            className="absolute right-0 top-12 bottom-4 w-[1.5px] pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(42, 4, 3, 0.16) 20%, rgba(42, 4, 3, 0.20) 100%)'
            }}
          />

          {/* Bottom Horizontal Border */}
          <div
            className="absolute left-6 right-6 bottom-0 h-[1.5px] pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(42, 4, 3, 0.20) 10%, rgba(42, 4, 3, 0.22) 50%, rgba(42, 4, 3, 0.20) 90%, transparent 100%)'
            }}
          />

          {/* ===== Decorative Food Icons — Tilted ===== */}

          {/* Top-left: Soda Cup — tilted */}
          <div
            className="absolute top-2 sm:top-4 left-[2%] sm:left-[3.5%] text-[#2A0403] opacity-75"
            style={{ transform: 'rotate(-14deg)' }}
          >
            <CupSoda className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" strokeWidth={1.7} />
          </div>

          {/* Top-right: Drumstick — tilted */}
          <div
            className="absolute top-2 sm:top-4 right-[2%] sm:right-[3.5%] text-[#2A0403] opacity-75"
            style={{ transform: 'rotate(12deg)' }}
          >
            <Drumstick className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16" strokeWidth={1.7} />
          </div>

          {/* Bottom-left: Coffee Cup with steam — tilted */}
          <div
            className="absolute bottom-6 sm:bottom-8 left-[2%] sm:left-[3.5%] text-[#2A0403] opacity-75"
            style={{ transform: 'rotate(-8deg)' }}
          >
            <Coffee className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" strokeWidth={1.7} />
          </div>

          {/* Bottom-right: Sandwich — tilted */}
          <div
            className="absolute bottom-6 sm:bottom-8 right-[2%] sm:right-[3.5%] text-[#2A0403] opacity-75"
            style={{ transform: 'rotate(10deg)' }}
          >
            <Sandwich className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" strokeWidth={1.7} />
          </div>

          {/* ===== Center Content ===== */}
          <div className="flex flex-col items-center text-center relative z-10">

            {/* Pill Badge */}
            <div className="inline-flex items-center px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-[#2A0403] bg-[#FFF5DF] text-xs sm:text-sm font-jakarta text-[#2A0403] mb-8 sm:mb-12">
              <span>Career <strong className="font-bold">Opportunity</strong></span>
            </div>

            {/* Large Headline with 6 floating pill badges overlaid matching Image 2 */}
            <div className="relative max-w-[960px] mx-auto mb-10 sm:mb-12">

              <h2 className="font-instrument font-normal text-[36px] sm:text-[54px] md:text-[66px] lg:text-[76px] text-[#2A0403] leading-[1.06] tracking-tight">
                We're always looking for passionate, dedicated people to join our growing team.
              </h2>

              {/* Floating Pill Badges — exact matching Image 2 placement & colors */}
              {floatingTags.map((tag) => (
                <span
                  key={tag.label}
                  className="absolute hidden sm:inline-flex items-center px-3 sm:px-4 py-1 rounded-full border border-[#BF392B]/40 bg-[#FFF5DF] text-[10px] sm:text-[11px] md:text-[12px] font-jakarta font-bold text-[#BF392B] uppercase tracking-wider whitespace-nowrap select-none pointer-events-none shadow-sm"
                  style={{
                    top: tag.top,
                    left: tag.left,
                    transform: `rotate(${tag.rotate}deg)`,
                  }}
                >
                  {tag.label}
                </span>
              ))}

            </div>

            {/* APPLY NOW CTA Button — Rust Red #BF392B matching Image 2 */}
            <a
              href="#careers"
              className="inline-flex items-center px-8 py-3 sm:px-10 sm:py-3.5 rounded-full bg-[#BF392B] text-[#FFF5DF] text-sm sm:text-base font-jakarta font-bold tracking-[0.06em] uppercase hover:bg-[#a32e22] transition-colors duration-300 shadow-md"
            >
              APPLY NOW
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}
