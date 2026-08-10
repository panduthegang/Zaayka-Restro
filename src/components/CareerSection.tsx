import React from 'react'

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

          {/* ===== Decorative Food Icons — Tilted like Image 2 ===== */}

          {/* Top-left: Milkshake / Cold Drink cup — tilted */}
          <svg
            className="absolute top-2 sm:top-4 left-[2%] sm:left-[3.5%] w-[46px] h-[58px] sm:w-[58px] sm:h-[72px] md:w-[68px] md:h-[82px] text-[#2A0403] opacity-75"
            style={{ transform: 'rotate(-14deg)' }}
            viewBox="0 0 56 72" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M16 26 L19 64 L37 64 L40 26" />
            <line x1="13" y1="26" x2="43" y2="26" />
            <path d="M18 26 L20 20 L36 20 L38 26" />
            <line x1="30" y1="6" x2="26" y2="20" />
            <path d="M28 6 L32 6" />
            <line x1="20" y1="38" x2="36" y2="38" />
            <line x1="21" y1="50" x2="35" y2="50" />
          </svg>

          {/* Top-right: Chicken bucket — tilted */}
          <svg
            className="absolute top-2 sm:top-4 right-[2%] sm:right-[3.5%] w-[50px] h-[56px] sm:w-[62px] sm:h-[70px] md:w-[72px] md:h-[80px] text-[#2A0403] opacity-75"
            style={{ transform: 'rotate(12deg)' }}
            viewBox="0 0 64 72" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M14 28 L18 62 L46 62 L50 28" />
            <line x1="10" y1="28" x2="54" y2="28" />
            <circle cx="26" cy="20" r="5" />
            <circle cx="38" cy="18" r="4" />
            <line x1="42" y1="14" x2="46" y2="6" />
            <circle cx="47" cy="5" r="2.5" />
            <line x1="22" y1="15" x2="20" y2="8" />
            <circle cx="19" cy="7" r="2" />
            <line x1="32" y1="40" x2="32" y2="52" />
            <line x1="26" y1="46" x2="38" y2="46" />
          </svg>

          {/* Bottom-left: Coffee Cup with steam — tilted */}
          <svg
            className="absolute bottom-6 sm:bottom-8 left-[2%] sm:left-[3.5%] w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] md:w-[64px] md:h-[64px] text-[#2A0403] opacity-75"
            style={{ transform: 'rotate(-8deg)' }}
            viewBox="0 0 64 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M10 24 L14 50 L42 50 L46 24" />
            <path d="M46 30 Q56 30 56 38 Q56 46 46 46" />
            <path d="M6 54 Q28 60 50 54" />
            <path d="M20 18 Q22 12 24 18" />
            <path d="M28 16 Q30 8 32 16" />
            <path d="M36 18 Q38 12 40 18" />
          </svg>

          {/* Bottom-right: Burger + Drink combo — tilted */}
          <svg
            className="absolute bottom-6 sm:bottom-8 right-[2%] sm:right-[3.5%] w-[54px] h-[48px] sm:w-[66px] sm:h-[58px] md:w-[78px] md:h-[68px] text-[#2A0403] opacity-75"
            style={{ transform: 'rotate(10deg)' }}
            viewBox="0 0 80 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M6 32 Q6 18 24 18 Q42 18 42 32" />
            <line x1="4" y1="32" x2="44" y2="32" />
            <path d="M6 36 Q14 40 24 36 Q34 32 42 36" />
            <line x1="4" y1="40" x2="44" y2="40" />
            <path d="M6 40 L6 44 Q6 48 10 48 L38 48 Q42 48 42 44 L42 40" />
            <rect x="50" y="20" width="18" height="32" rx="2" />
            <line x1="48" y1="20" x2="70" y2="20" />
            <line x1="62" y1="10" x2="58" y2="20" />
            <path d="M62 10 L66 10" />
          </svg>

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
