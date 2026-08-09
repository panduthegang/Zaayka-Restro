import React from 'react'
import { Sparkles, Award, Compass } from 'lucide-react'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFF5DF] text-[#2A0403] border-b border-[#2A0403]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#BF392B] font-jakarta text-xs font-bold uppercase tracking-widest px-3 py-1 bg-[#BF392B]/10 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Culinary Philosophy</span>
            </div>

            <h2 className="font-playfair font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#2A0403]">
              Where Every Flavor Tells a Story
            </h2>

            <p className="font-jakarta text-base sm:text-lg text-[#2A0403]/80 leading-relaxed">
              At <strong className="font-bold text-[#2A0403]">Drizzle.</strong>, we believe dining is an art of sensory immersion. Founded with a passion for hyper-seasonal gastronomy, our kitchen marries artisanal techniques with local organic produce to craft unforgettable culinary moments.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#2A0403]/15">
              <div>
                <div className="font-playfair font-bold text-3xl text-[#BF392B]">3 Michelin</div>
                <div className="font-jakarta text-xs text-[#2A0403]/70 uppercase tracking-wider mt-1">Star Culinary Standard</div>
              </div>
              <div>
                <div className="font-playfair font-bold text-3xl text-[#2A0403]">100%</div>
                <div className="font-jakarta text-xs text-[#2A0403]/70 uppercase tracking-wider mt-1">Organic Farm Direct</div>
              </div>
            </div>
          </div>

          {/* Right Image Grid (Unsplash Images) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
                alt="Chef preparing dish"
                className="w-full h-64 object-cover rounded-2xl shadow-lg border border-[#2A0403]/10"
              />
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
                alt="Fine dining table arrangement"
                className="w-full h-44 object-cover rounded-2xl shadow-lg border border-[#2A0403]/10"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
                alt="Gourmet dish plating"
                className="w-full h-44 object-cover rounded-2xl shadow-lg border border-[#2A0403]/10"
              />
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
                alt="Cocktail pairing"
                className="w-full h-64 object-cover rounded-2xl shadow-lg border border-[#2A0403]/10"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
