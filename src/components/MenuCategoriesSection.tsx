import React from 'react'
import { UtensilsCrossed, Soup, Leaf, Coffee, ChefHat, ArrowUpRight } from 'lucide-react'

interface CategoryCard {
  title: string
  subtitle: string
  icon: React.ReactNode
  items: { name: string; price?: string }[]
  accentClass?: string
  isDark?: boolean
  image: string
}

export const MenuCategoriesSection: React.FC = () => {
  const lightBorderGradient: React.CSSProperties = {
    background: 'linear-gradient(180deg, transparent 0%, rgba(42,4,3,0.14) 20%, rgba(42,4,3,0.20) 50%, rgba(42,4,3,0.14) 80%, transparent 100%)',
    borderRadius: '28px',
    padding: '1.5px'
  }

  const lightCardInner: React.CSSProperties = {
    background: '#FFF9EC',
    borderRadius: '26.5px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }

  const lightDividerStyle: React.CSSProperties = {
    height: '1px',
    border: 'none',
    background: 'linear-gradient(90deg, transparent 0%, rgba(42,4,3,0.15) 20%, rgba(42,4,3,0.18) 80%, transparent 100%)'
  }

  const darkDividerStyle: React.CSSProperties = {
    height: '1px',
    border: 'none',
    background: 'linear-gradient(90deg, transparent 0%, rgba(255,245,223,0.14) 20%, rgba(255,245,223,0.18) 80%, transparent 100%)'
  }

  const categories: CategoryCard[] = [
    {
      title: 'Main Course',
      subtitle: 'Where bold flavors and perfection meet',
      icon: <UtensilsCrossed className="w-7 h-7 stroke-[1.8]" />,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=900&auto=format&fit=crop',
      
      items: [
        { name: 'Seafood Delights', price: '$48' },
        { name: 'Pasta & Risotto', price: '$32' },
        { name: "Chef's Signature", price: '$78' }
      ]
    },
    {
      title: 'Soups & Salads',
      subtitle: 'Light, healthy, and packed with flavor',
      icon: <Soup className="w-7 h-7 stroke-[1.8]" />,
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=900&auto=format&fit=crop',
      items: [
        { name: 'Signature Soups', price: '$14' },
        { name: 'Seasonal Salads', price: '$16' },
        { name: 'Classic Favorites', price: '$12' },
        { name: 'Light & Healthy', price: '$15' }
      ]
    },
    {
      title: 'Vegan & Vegetarian',
      subtitle: 'Colorful creations inspired by nature',
      icon: <Leaf className="w-7 h-7 stroke-[1.8]" />,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop',
      isDark: true,
      items: [
        { name: 'Hearty Mains', price: '$28' },
        { name: 'Wraps & Sandwiches', price: '$18' },
        { name: 'Vegan Desserts', price: '$12' }
      ]
    },
    {
      title: 'Beverages / Drinks',
      subtitle: 'Sip, savor, and refresh your senses',
      icon: <Coffee className="w-7 h-7 stroke-[1.8]" />,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=900&auto=format&fit=crop',
      items: [
        { name: 'Specialty Mocktails', price: '$12' },
        { name: 'Juices & Smoothies', price: '$9' }
      ]
    }
  ]

  return (
    <section id="menu" className="w-full bg-[#FFF5DF] text-[#2A0403] py-14 sm:py-18 md:py-24 overflow-hidden ">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-10 sm:mb-14">

          <div className="space-y-4">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#2A0403]/20 bg-[#FFF9EC] flex items-center justify-center text-[#2A0403] shrink-0 shadow-sm">
                <ChefHat className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
              </div> */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#2A0403] bg-[#FFF5DF] text-xs sm:text-sm font-jakarta text-[#2A0403]">
                <span>Your next <strong className="font-bold">favorite meal</strong> awaits</span>
              </div>
            </div>

            <h2 className="font-instrument font-normal text-4xl sm:text-5xl lg:text-[68px] text-[#2A0403] leading-[1.03] tracking-tight max-w-3xl">
              Explore our Signature Categories
            </h2>
          </div>

          <a
            href="#featured-menu"
            className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#2A0403] bg-[#FFF5DF] text-xs sm:text-sm font-jakarta font-semibold text-[#2A0403] hover:bg-[#2A0403] hover:text-[#FFF5DF] transition-all duration-300"
          >
            View Full Menu
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

          {categories.map((cat, idx) => (
            cat.isDark ? (
              /* ---------- DARK ACCENT CARD (Vegan & Vegetarian) ---------- */
              <a
                key={cat.title}
                href="#featured-menu"
                className="group relative rounded-[28px] bg-[#2A0403] text-[#FFF5DF] overflow-hidden flex flex-col shadow-xl border border-[#FFF5DF]/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A0403] via-[#2A0403]/40 to-transparent" />
                  {/* <div className="absolute top-3 right-3 font-instrument font-bold text-[34px] sm:text-[40px] leading-none text-[#BF392B] drop-shadow-md">
                    {cat.count}
                    <span className="block text-[10px] sm:text-xs font-jakarta font-bold uppercase tracking-widest text-[#FFF5DF]/70 mt-1">Dishes</span>
                  </div> */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#BF392B] text-[#FFF5DF] flex items-center justify-center shadow-lg">
                    <div className="text-[#FFF5DF]">
                      {cat.icon}
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="font-instrument text-2xl sm:text-[26px] text-[#FFF5DF] leading-tight tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="font-jakarta text-xs text-[#FFF5DF]/65 leading-relaxed">
                      {cat.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 space-y-1.5">
                    <div style={darkDividerStyle} />
                    {cat.items.map((it, i) => (
                      <React.Fragment key={it.name}>
                        <div className="py-1.5 font-jakarta text-xs sm:text-sm text-[#FFF5DF]/90 flex items-center justify-between gap-3 group/item hover:text-[#FFF5DF] transition-colors">
                          <span className="flex items-center gap-2">
                            <span className="font-bold text-[#BF392B] tabular-nums text-[11px]">{String(i + 1).padStart(2, '0')}.</span>
                            <span className="truncate">{it.name}</span>
                          </span>
                          {it.price && (
                            <span className="font-instrument font-bold text-[#BF392B] text-sm sm:text-base tabular-nums shrink-0">
                              {it.price}
                            </span>
                          )}
                        </div>
                        <div style={darkDividerStyle} />
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-jakarta font-bold uppercase tracking-widest text-[#BF392B] group-hover:gap-2.5 transition-all duration-300">
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </a>
            ) : (
              /* ---------- LIGHT CARD with gradient fading border wrapper ---------- */
              <a
                key={cat.title}
                href="#featured-menu"
                className="group block cursor-pointer hover:-translate-y-1 transition-all duration-500"
              >
                <div style={lightBorderGradient} className="shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                  <div style={lightCardInner} className="overflow-hidden">
                    <div className="relative h-44 sm:h-48 overflow-hidden rounded-t-[26.5px]">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#FFF9EC]/95 via-[#FFF9EC]/20 to-transparent" />
                      {/* <div className="absolute top-3 right-3 font-instrument font-bold text-[34px] sm:text-[40px] leading-none text-[#BF392B] drop-shadow-sm">
                        {cat.count}
                        <span className="block text-[10px] sm:text-xs font-jakarta font-bold uppercase tracking-widest text-[#2A0403]/60 mt-1">Dishes</span>
                      </div> */}
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#FFF5DF] text-[#2A0403] flex items-center justify-center shadow-md border border-[#2A0403]/10">
                        <div className="text-[#2A0403]">
                          {cat.icon}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <h3 className="font-instrument text-2xl sm:text-[26px] text-[#2A0403] leading-tight tracking-tight">
                          {cat.title}
                        </h3>
                        <p className="font-jakarta text-xs text-[#2A0403]/60 leading-relaxed">
                          {cat.subtitle}
                        </p>
                      </div>

                      <div className="mt-6 space-y-1.5">
                        <div style={lightDividerStyle} />
                        {cat.items.map((it, i) => (
                          <React.Fragment key={it.name}>
                            <div className="py-1.5 font-jakarta text-xs sm:text-sm text-[#2A0403] flex items-center justify-between gap-3 group/item hover:text-[#BF392B] transition-colors">
                              <span className="flex items-center gap-2">
                                <span className="font-bold text-[#BF392B] tabular-nums text-[11px]">{String(i + 1).padStart(2, '0')}.</span>
                                <span className="truncate">{it.name}</span>
                              </span>
                              {it.price && (
                                <span className="font-instrument font-bold text-[#BF392B] text-sm sm:text-base tabular-nums shrink-0">
                                  {it.price}
                                </span>
                              )}
                            </div>
                            <div style={lightDividerStyle} />
                          </React.Fragment>
                        ))}
                      </div>

                      <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-jakarta font-bold uppercase tracking-widest text-[#BF392B] group-hover:gap-2.5 transition-all duration-300">
                        <span>Explore</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            )
          ))}

        </div>

      </div>
    </section>
  )
}
