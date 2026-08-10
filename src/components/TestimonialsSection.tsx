import React from 'react'
import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  quote: string
  author: string
  location: string
  rating: string
  isDark: boolean
}

export const TestimonialsSection: React.FC = () => {
  const baseTestimonials: Testimonial[] = [
    {
      id: 1,
      quote: "\u201CEvery bite was a burst of flavor! The ambiance, service, and presentation were flawless. Definitely one of the best dining experiences I\u2019ve had in a long time.\u201D",
      author: 'Daniel Johnson',
      location: 'California, USA',
      rating: '4.9',
      isDark: false
    },
    {
      id: 2,
      quote: "\u201CThe staff was incredibly welcoming, and the dishes were beautifully prepared. You can tell they use the freshest ingredients. Highly recommend the chef\u2019s.\u201D",
      author: 'Sophia Lee',
      location: 'New York, USA',
      rating: '5.0',
      isDark: true
    },
    {
      id: 3,
      quote: "\u201CWe celebrated my parents\u2019 anniversary here, and everything was perfect. From the d\u00E9cor to the desserts, it was an unforgettable evening.\u201D",
      author: 'Emily Carter',
      location: 'Texas, USA',
      rating: '4.9',
      isDark: false
    },
    {
      id: 4,
      quote: "\u201CThe culinary craftsmanship at Zaayka is truly unmatched. Every plate is a work of art that tastes even better than it looks!\u201D",
      author: 'Marcus Vance',
      location: 'Chicago, USA',
      rating: '5.0',
      isDark: true
    },
    {
      id: 5,
      quote: "\u201CAn absolute gem of a restaurant! The wine pairings elevated the tasting menu to an entirely new dimension of fine dining.\u201D",
      author: 'Claire Sterling',
      location: 'Miami, USA',
      rating: '4.9',
      isDark: false
    },
    {
      id: 6,
      quote: "\u201CFrom the moment we walked in, the service was royal. The desserts were unforgettable\u2014especially the cocoa creation!\u201D",
      author: 'Julian Ross',
      location: 'Seattle, USA',
      rating: '5.0',
      isDark: true
    }
  ]

  const marqueeTestimonials = [...baseTestimonials, ...baseTestimonials]

  // Inline gradient styles
  const lightDividerStyle: React.CSSProperties = {
    height: '1px',
    border: 'none',
    background: 'linear-gradient(90deg, transparent 0%, rgba(42,4,3,0.18) 25%, rgba(42,4,3,0.22) 50%, rgba(42,4,3,0.18) 75%, transparent 100%)'
  }

  const darkDividerStyle: React.CSSProperties = {
    height: '1px',
    border: 'none',
    background: 'linear-gradient(90deg, transparent 0%, rgba(255,245,223,0.12) 25%, rgba(255,245,223,0.18) 50%, rgba(255,245,223,0.12) 75%, transparent 100%)'
  }

  // Light card uses a wrapper approach for gradient fading border
  // Outer = gradient background, Inner = solid card background
  const lightBorderGradient: React.CSSProperties = {
    background: 'linear-gradient(180deg, transparent 0%, rgba(42,4,3,0.15) 20%, rgba(42,4,3,0.22) 50%, rgba(42,4,3,0.15) 80%, transparent 100%)',
    borderRadius: '24px',
    padding: '1.5px'
  }

  const lightCardInner: React.CSSProperties = {
    background: '#FFF9EC',
    borderRadius: '22.5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  }

  const darkCardStyle: React.CSSProperties = {
    background: '#2A0403',
    borderRadius: '24px'
  }

  return (
    <section className="w-full bg-[#FFF5DF] text-[#2A0403] py-12 sm:py-14 md:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">

          {/* Left Column: Pill Badge & Headline */}
          <div className="lg:col-span-4 space-y-4 relative z-20 bg-[#FFF5DF] pr-2">

            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#2A0403] bg-[#FFF5DF] text-xs sm:text-sm font-jakarta text-[#2A0403]">
                <span>Customer <strong className="font-bold">Reviews</strong></span>
              </div>
            </div>

            <h2 className="font-instrument font-normal text-4xl sm:text-5xl lg:text-[54px] text-[#2A0403] leading-[1.05] tracking-tight max-w-[380px]">
              Where every visit becomes a great Memory
            </h2>

          </div>

          {/* Right Column: Infinite Marquee of Cards */}
          <div className="lg:col-span-8 relative overflow-hidden">

            {/* Left fade mask — only on desktop where heading sits beside cards */}
            <div
              className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none hidden lg:block"
              style={{ background: 'linear-gradient(to right, #FFF5DF 0%, #FFF5DF 40%, rgba(255,245,223,0) 100%)' }}
            />

            <div className="w-full overflow-hidden py-4">
              <div className="animate-infinite-marquee flex items-stretch gap-5">
                {marqueeTestimonials.map((item, index) => (
                  item.isDark ? (
                    /* ===== DARK CARD ===== */
                    <div
                      key={`${item.id}-${index}`}
                      className="shrink-0 w-[280px] sm:w-[300px] md:w-[320px] flex flex-col justify-between p-5 sm:p-6 cursor-pointer transition-transform duration-300 hover:scale-[1.02] shadow-lg"
                      style={darkCardStyle}
                    >
                      <p className="font-instrument text-[21px] sm:text-[23px] md:text-[24px] leading-[1.25] tracking-[-0.01em] flex-1 text-[#BF392B]">
                        {item.quote}
                      </p>

                      <div className="mt-5">
                        <div style={darkDividerStyle} />
                        <div className="flex items-end justify-between pt-4">
                          <div>
                            <h4 className="font-instrument font-bold text-lg sm:text-xl leading-tight text-[#FFF5DF]">
                              — {item.author}
                            </h4>
                            <p className="font-jakarta text-xs mt-0.5 text-[#FFF5DF]/60">
                              {item.location}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 text-sm font-jakarta font-bold text-[#BF392B]">
                            <Star className="w-3.5 h-3.5 fill-[#BF392B] text-[#BF392B]" />
                            <span>{item.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* ===== LIGHT CARD with gradient fading border wrapper ===== */
                    <div
                      key={`${item.id}-${index}`}
                      className="shrink-0 w-[280px] sm:w-[300px] md:w-[320px] cursor-pointer transition-transform duration-300 hover:scale-[1.02] shadow-sm"
                      style={lightBorderGradient}
                    >
                      <div className="p-5 sm:p-6" style={lightCardInner}>
                        <p className="font-instrument text-[21px] sm:text-[23px] md:text-[24px] leading-[1.25] tracking-[-0.01em] flex-1 text-[#2A0403]">
                          {item.quote}
                        </p>

                        <div className="mt-5">
                          <div style={lightDividerStyle} />
                          <div className="flex items-end justify-between pt-4">
                            <div>
                              <h4 className="font-instrument font-bold text-lg sm:text-xl leading-tight text-[#2A0403]">
                                — {item.author}
                              </h4>
                              <p className="font-jakarta text-xs mt-0.5 text-[#2A0403]/50">
                                {item.location}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 text-sm font-jakarta font-bold text-[#BF392B]">
                              <Star className="w-3.5 h-3.5 fill-[#BF392B] text-[#BF392B]" />
                              <span>{item.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
