import React from 'react'

interface GalleryItem {
  id: number
  title: string
  image: string
  rotation: string
  offsetY: string
  zIndex: string
}

export const GallerySection: React.FC = () => {
  const baseItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Fried Rice',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
      rotation: 'rotate-[6deg]',
      offsetY: 'translate-y-2',
      zIndex: 'z-10'
    },
    {
      id: 2,
      title: 'Burger',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
      rotation: '-rotate-[5deg]',
      offsetY: '-translate-y-2',
      zIndex: 'z-20'
    },
    {
      id: 3,
      title: 'Rice & Meet',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
      rotation: 'rotate-[7deg]',
      offsetY: 'translate-y-1',
      zIndex: 'z-30'
    },
    {
      id: 4,
      title: 'Salad & Soup',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop',
      rotation: '-rotate-[5deg]',
      offsetY: '-translate-y-2',
      zIndex: 'z-20'
    },
    {
      id: 5,
      title: 'Special Burger',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
      rotation: 'rotate-[6deg]',
      offsetY: 'translate-y-2',
      zIndex: 'z-30'
    },
    {
      id: 6,
      title: 'Pasta & Noodles',
      image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281313?q=80&w=800&auto=format&fit=crop',
      rotation: '-rotate-[7deg]',
      offsetY: '-translate-y-1',
      zIndex: 'z-10'
    }
  ]

  // Duplicate items twice to ensure a seamless infinite scrolling marquee track
  const marqueeItems = [...baseItems, ...baseItems]

  return (
    <section id="gallery" className="relative w-full bg-[#2A0403] text-[#FFF5DF] py-10 sm:py-12 md:py-16 overflow-hidden border-t border-[#FFF5DF]/10">
      
      {/* Subtle Food Doodle Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none bg-repeat bg-[length:320px_320px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpath d='M20 20 Q 30 10, 40 20 T 60 20' stroke='%23FFF5DF' stroke-width='1.5' fill='none'/%3E%3Ccircle cx='85' cy='30' r='14' stroke='%23FFF5DF' stroke-width='1.5' fill='none'/%3E%3Cpath d='M15 80 Q 30 100, 55 80' stroke='%23FFF5DF' stroke-width='1.5' fill='none'/%3E%3Ccircle cx='35' cy='55' r='10' stroke='%23FFF5DF' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`
        }}
      />

      <div className="w-full relative z-10 text-center">
        
        {/* Top Pill Badge */}
        <div className="inline-block mb-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#FFF5DF]/40 bg-[#2A0403] text-xs sm:text-sm font-jakarta text-[#FFF5DF]">
            <span>A <strong className="font-bold">Feast</strong> for the Eyes</span>
          </div>
        </div>

        {/* Main Section Headline */}
        <h2 className="font-instrument font-normal text-4xl sm:text-5xl lg:text-[56px] text-[#FFF5DF] leading-tight max-w-4xl mx-auto mb-4 md:mb-6 px-4">
          Taste the vibes through our gallery
        </h2>

        {/* Infinite Marquee Track Container */}
        <div className="w-full overflow-hidden pt-8 pb-14 md:pt-10 md:pb-16">
          <div className="animate-infinite-marquee flex items-center -space-x-4 sm:-space-x-6 md:-space-x-8 lg:-space-x-10 px-4">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`relative shrink-0 w-[190px] sm:w-[230px] md:w-[260px] lg:w-[285px] transform transition-all duration-500 ease-out hover:scale-110 hover:rotate-0 hover:z-50 cursor-pointer ${item.rotation} ${item.offsetY} ${item.zIndex}`}
              >
                {/* Polaroid Frame Card */}
                <div className="bg-[#FFF5DF] p-3 sm:p-3.5 pb-4 sm:pb-5 rounded-2xl shadow-2xl border border-[#FFF5DF]/60 flex flex-col items-center">
                  
                  {/* Photo inside Polaroid */}
                  <div className="w-full h-[210px] sm:h-[250px] md:h-[280px] lg:h-[305px] rounded-xl overflow-hidden mb-3 bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Caption Text in Instrument Serif */}
                  <h3 className="font-instrument font-bold text-xl sm:text-2xl md:text-3xl text-[#2A0403] text-center tracking-tight">
                    {item.title}
                  </h3>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
