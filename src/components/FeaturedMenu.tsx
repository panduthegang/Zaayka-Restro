import React, { useState } from 'react'
import { Utensils } from 'lucide-react'

interface MenuItem {
  name: string
  price: string
  description: string
  category: 'starters' | 'mains' | 'desserts' | 'wines'
  tag?: string
  image: string
}

export const FeaturedMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'starters' | 'mains' | 'desserts' | 'wines'>('mains')

  const menuItems: MenuItem[] = [
    {
      name: 'Truffle Glazed Wagyu Ribeye',
      price: '$78',
      description: 'A5 Miyazakigyu, smoked bone marrow drizzle, wild chanterelles & pomme purée.',
      category: 'mains',
      tag: 'Chef Signature',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Pan-Seared Chilean Sea Bass',
      price: '$64',
      description: 'Saffron champagne reduction, heirloom fennel salad & crisp caviar pearls.',
      category: 'mains',
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Burrata & Compressed Melon',
      price: '$28',
      description: 'Aged balsamic glaze, pistachio crunch & hand-harvested wild micro basil.',
      category: 'starters',
      tag: 'Fresh Organic',
      image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb23659?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Hokkaido Scallop Tartare',
      price: '$34',
      description: 'Yuzu emulsion, ossetra caviar & toasted sesame crisp shards.',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Smoked Dark Chocolate Sphere',
      price: '$24',
      description: 'Valrhona 70% dark cocoa, warm Madagascar vanilla drizzle & edible gold leaf.',
      category: 'desserts',
      tag: 'Decadent',
      image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Château Margaux Premier Grand Cru',
      price: '$180 / glass',
      description: 'Vintage 2015 Bordeaux with complex notes of cassis, violet & oak spice.',
      category: 'wines',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop'
    }
  ]

  const filteredItems = menuItems.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FFF5DF] text-[#2A0403] border-b border-[#2A0403]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="font-jakarta text-xs font-bold uppercase tracking-widest text-[#BF392B] bg-[#BF392B]/10 px-4 py-1.5 rounded-full inline-block">
            Culinary Offerings
          </span>
          <h2 className="font-playfair font-semibold text-4xl sm:text-6xl text-[#2A0403]">
            Curated Tasting Experience
          </h2>
          <p className="font-jakarta text-base text-[#2A0403]/70">
            Hand-selected seasonal ingredients crafted into extraordinary flavor harmonies by Chef Antoine Laurent.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-14">
          {[
            { id: 'mains', label: 'Main Courses' },
            { id: 'starters', label: 'Starters' },
            { id: 'desserts', label: 'Desserts' },
            { id: 'wines', label: 'Sommelier Selection' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`font-jakarta text-xs sm:text-sm font-semibold uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === tab.id
                  ? 'bg-[#BF392B] text-[#FFF5DF] shadow-md scale-105'
                  : 'bg-[#FFF5DF] border border-[#2A0403]/20 text-[#2A0403] hover:bg-[#2A0403]/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Items Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-5 p-5 bg-[#FFF5DF] border border-[#2A0403]/15 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full sm:w-36 h-36 object-cover rounded-xl border border-[#2A0403]/10 group-hover:scale-[1.02] transition-transform"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-playfair font-bold text-xl text-[#2A0403] group-hover:text-[#BF392B] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-playfair font-bold text-xl text-[#BF392B]">
                      {item.price}
                    </span>
                  </div>

                  {item.tag && (
                    <span className="inline-block text-[10px] font-jakarta font-bold uppercase tracking-wider text-[#BF392B] bg-[#BF392B]/10 px-2 py-0.5 rounded mb-2">
                      {item.tag}
                    </span>
                  )}

                  <p className="font-jakarta text-xs sm:text-sm text-[#2A0403]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
