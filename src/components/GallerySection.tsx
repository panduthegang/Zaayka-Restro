import React from 'react'
import { Instagram } from 'lucide-react'

export const GallerySection: React.FC = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
      caption: 'Main Dining Hall Atmosphere'
    },
    {
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
      caption: 'Artisan Culinary Plating'
    },
    {
      url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop',
      caption: 'Open Kitchen Chef Experience'
    },
    {
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop',
      caption: 'Signature Craft Cocktails'
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-[#FFF5DF] border-b border-[#2A0403]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-jakarta text-xs font-bold uppercase tracking-widest text-[#BF392B] bg-[#BF392B]/10 px-3 py-1 rounded-full">
              Atmosphere & Moments
            </span>
            <h2 className="font-playfair font-semibold text-4xl sm:text-5xl text-[#2A0403] mt-3">
              The Drizzle Experience
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-jakarta text-xs font-bold uppercase tracking-widest text-[#2A0403] hover:text-[#BF392B] transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#BF392B]" />
            <span>Follow @drizzle.restaurant</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden shadow-lg border border-[#2A0403]/10 h-80 cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A0403]/90 via-[#2A0403]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-jakarta font-medium text-sm text-[#FFF5DF]">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
