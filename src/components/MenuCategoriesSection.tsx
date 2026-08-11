import React from 'react'
import { UtensilsCrossed, Soup, Leaf, Coffee, ChefHat } from 'lucide-react'

export const MenuCategoriesSection: React.FC = () => {
  // Inline styles for gradient borders matching Testimonials Section card design
  const lightBorderGradient: React.CSSProperties = {
    background: 'linear-gradient(180deg, transparent 0%, rgba(42,4,3,0.14) 20%, rgba(42,4,3,0.20) 50%, rgba(42,4,3,0.14) 80%, transparent 100%)',
    borderRadius: '24px',
    padding: '1.5px'
  }

  const lightCardInner: React.CSSProperties = {
    background: '#FFF9EC',
    borderRadius: '22.5px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }

  const lightDividerStyle: React.CSSProperties = {
    height: '1px',
    border: 'none',
    background: 'linear-gradient(90deg, transparent 0%, rgba(42,4,3,0.15) 20%, rgba(42,4,3,0.18) 80%, transparent 100%)'
  }

  const darkDividerStyle: React.CSSProperties = {
    height: '1px',
    border: 'none',
    background: 'linear-gradient(90deg, transparent 0%, rgba(255,245,223,0.12) 20%, rgba(255,245,223,0.16) 80%, transparent 100%)'
  }

  return (
    <section className="w-full bg-[#FFF5DF] text-[#2A0403] py-12 sm:py-16 md:py-18 overflow-hidden border-t border-[#2A0403]/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== Top Header Bar ===== */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8 sm:mb-12">
          
          {/* Left Title Group with ChefHat Icon */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#2A0403]/20 bg-[#FFF9EC] flex items-center justify-center text-[#2A0403] shrink-0 shadow-sm">
              <ChefHat className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
            </div>

            {/* Main Section Headline in Instrument Serif */}
            <h2 className="font-instrument font-normal text-3xl sm:text-4xl lg:text-[50px] text-[#2A0403] leading-[1.05] tracking-tight">
              Your next favorite meal awaits
            </h2>

          </div>

          {/* Right Top Pill Button */}
          <div>
            <a
              href="#menu"
              className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-[#2A0403] bg-[#FFF5DF] text-xs sm:text-sm font-jakarta font-medium text-[#2A0403] hover:bg-[#2A0403] hover:text-[#FFF5DF] transition-colors duration-300"
            >
              Discover our Menu
            </a>
          </div>

        </div>

        {/* ===== 4 Equal Cards Grid Layout ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          
          {/* ----- Card 1: Main Course ----- */}
          <div style={lightBorderGradient} className="shadow-sm">
            <div style={lightCardInner} className="p-5 sm:p-6 min-h-[310px] sm:min-h-[330px]">
              
              {/* Top Section */}
              <div className="space-y-3">
                <div className="w-8 h-8 text-[#2A0403]">
                  <UtensilsCrossed className="w-7 h-7 stroke-[1.8]" />
                </div>

                <div>
                  <h3 className="font-instrument text-2xl sm:text-[26px] text-[#2A0403] leading-tight">
                    Main Course
                  </h3>
                  <p className="font-jakarta text-xs text-[#2A0403]/60 mt-0.5">
                    Where bold flavors and perfect meet
                  </p>
                </div>
              </div>

              {/* Numbered List Items */}
              <div className="mt-8 space-y-1.5">
                <div style={lightDividerStyle} />
                <div className="py-1 font-jakarta text-xs sm:text-sm text-[#2A0403]">
                  1. Seafood Delights
                </div>
                <div style={lightDividerStyle} />
                <div className="py-1 font-jakarta text-xs sm:text-sm text-[#2A0403]">
                  2. Pasta & Risotto
                </div>
                <div style={lightDividerStyle} />
                <div className="py-1 font-jakarta text-xs sm:text-sm text-[#2A0403]">
                  3. Chef's Signature Dishes
                </div>
              </div>

            </div>
          </div>

          {/* ----- Card 2: Soups & Salads ----- */}
          <div style={lightBorderGradient} className="shadow-sm">
            <div style={lightCardInner} className="p-5 sm:p-6 min-h-[310px] sm:min-h-[330px]">
              
              {/* Top Section */}
              <div className="space-y-3">
                <div className="w-8 h-8 text-[#2A0403]">
                  <Soup className="w-7 h-7 stroke-[1.8]" />
                </div>

                <div>
                  <h3 className="font-instrument text-2xl sm:text-[26px] text-[#2A0403] leading-tight">
                    Soups & Salads
                  </h3>
                  <p className="font-jakarta text-xs text-[#2A0403]/60 mt-0.5">
                    Light, healthy, and packed with flavor
                  </p>
                </div>
              </div>

              {/* Numbered List Items */}
              <div className="mt-8 space-y-1.5">
                <div style={lightDividerStyle} />
                <div className="py-1 font-jakarta text-xs sm:text-sm text-[#2A0403]">
                  1. Signature Soups
                </div>
                <div style={lightDividerStyle} />
                <div className="py-1 font-jakarta text-xs sm:text-sm text-[#2A0403]">
                  2. Seasonal Salads
                </div>
                <div style={lightDividerStyle} />
                <div className="py-1 font-jakarta text-xs sm:text-sm text-[#2A0403]">
                  3. Classic Favorites
                </div>
                <div style={lightDividerStyle} />
                <div className="py-1 font-jakarta text-xs sm:text-sm text-[#2A0403]">
                  4. Light & Healthy
                </div>
              </div>

            </div>
          </div>

          {/* ----- Card 3: Vegan & Vegetarian (Dark Accent Card) ----- */}
          <div className="rounded-[24px] bg-[#2A0403] text-[#FFF5DF] p-5 sm:p-6 min-h-[310px] sm:min-h-[330px] flex flex-col justify-between shadow-xl border border-[#FFF5DF]/10">
            
            {/* Top Section */}
            <div className="space-y-3">
              <div className="w-8 h-8 text-[#E64A38]">
                <Leaf className="w-7 h-7 stroke-[1.8]" />
              </div>

              <div>
                <h3 className="font-instrument text-2xl sm:text-[26px] text-[#FFF5DF] leading-tight">
                  Vegan & Vegetarian
                </h3>
                <p className="font-jakarta text-xs text-[#FFF5DF]/70 mt-0.5">
                  Colorful creations inspired by nature
                </p>
              </div>
            </div>

            {/* Numbered List Items */}
            <div className="mt-8 space-y-1.5">
              <div style={darkDividerStyle} />
              <div className="py-1 font-jakarta text-xs sm:text-sm text-[#FFF5DF]">
                1. Hearty Mains
              </div>
              <div style={darkDividerStyle} />
              <div className="py-1 font-jakarta text-xs sm:text-sm text-[#FFF5DF]">
                2. Wraps & Sandwiches
              </div>
              <div style={darkDividerStyle} />
              <div className="py-1 font-jakarta text-xs sm:text-sm text-[#FFF5DF]">
                3. Vegan Desserts
              </div>
            </div>

          </div>

          {/* ----- Card 4: Beverages / Drinks ----- */}
          <div style={lightBorderGradient} className="shadow-sm">
            <div style={lightCardInner} className="p-5 sm:p-6 min-h-[310px] sm:min-h-[330px]">
              
              {/* Top Section */}
              <div className="space-y-3">
                <div className="w-8 h-8 text-[#2A0403]">
                  <Coffee className="w-7 h-7 stroke-[1.8]" />
                </div>

                <div>
                  <h3 className="font-instrument text-2xl sm:text-[26px] text-[#2A0403] leading-tight">
                    Beverages / Drinks
                  </h3>
                  <p className="font-jakarta text-xs text-[#2A0403]/60 mt-0.5">
                    Sip, savor, and refresh your senses
                  </p>
                </div>
              </div>

              {/* Numbered List Items */}
              <div className="mt-8 space-y-1.5">
                <div style={lightDividerStyle} />
                <div className="py-1 font-jakarta text-xs sm:text-sm text-[#2A0403]">
                  1. Mocktails & Specialty Drinks
                </div>
                <div style={lightDividerStyle} />
                <div className="py-1 font-jakarta text-xs sm:text-sm text-[#2A0403]">
                  2. Juices & Smoothies
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
