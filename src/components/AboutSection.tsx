import React from 'react'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-[#FFF5DF] text-[#2A0403] py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Grid Layout matching reference design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Pill Badge, Large Playfair Heading, CTA Button & Social Proof */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            
            {/* Top Pill Badge */}
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#2A0403] bg-[#FFF5DF] text-xs sm:text-sm font-jakarta text-[#2A0403]">
                <span>Know <strong className="font-bold">About Us</strong></span>
              </div>
            </div>

            {/* Main Heading - Instrument Serif */}
            <h2 className="font-instrument font-normal text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-[#2A0403] leading-[1.05] tracking-tight max-w-3xl">
              Blending tradition & innovation to create unforgettable dining experiences
            </h2>

            {/* Bottom Row: Read Our Story Button + Satisfied Customers Avatar Group */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              
              {/* READ OUR STORY Red CTA Pill Button */}
              <a
                href="#story"
                className="inline-flex items-center justify-center bg-[#BF392B] hover:bg-[#a63023] text-[#FFF5DF] font-jakarta font-bold text-xs sm:text-sm tracking-widest uppercase px-8 py-4 rounded-full shadow-md transition-all duration-300 transform hover:scale-[1.02]"
              >
                READ OUR STORY
              </a>

              {/* Satisfied Customers Reviews Badge */}
              <div className="flex items-center gap-4">
                
                {/* 3 Overlapping Avatars */}
                <div className="flex -space-x-3 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                    alt="Customer review 1"
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-[#FFF5DF] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="Customer review 2"
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-[#FFF5DF] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                    alt="Customer review 3"
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-[#FFF5DF] object-cover"
                  />
                </div>

                {/* Customer Text */}
                <div className="font-jakarta">
                  <h4 className="font-bold text-sm text-[#2A0403] leading-tight">
                    Satisfied Customers
                  </h4>
                  <p className="text-xs text-[#2A0403]/70 mt-0.5">
                    Thousands of reviews from customers
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Top Right Subheading + Dining Image */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end space-y-6">
            
            {/* Top Right Subheading */}
            <p className="font-jakarta text-base sm:text-lg text-[#2A0403] self-start lg:self-end">
              Experience the perfect <strong className="font-bold">harmony</strong> of heritage
            </p>

            {/* High Quality Unsplash Dining Image with Rounded Corners matching target UI */}
            <div className="w-full relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-[#2A0403]/10">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop"
                alt="Happy guests enjoying dining experience at Zaayka"
                className="w-full h-[320px] sm:h-[400px] md:h-[450px] object-cover object-center transform transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
