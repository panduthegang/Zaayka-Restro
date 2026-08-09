import React from 'react'
import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="bg-[#2A0403] text-[#FFF5DF] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#FFF5DF]/15">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="font-playfair font-extrabold text-4xl tracking-tight text-[#FFF5DF]">
              Drizzle.
            </h2>
            <p className="font-jakarta text-sm text-[#FFF5DF]/80 max-w-sm leading-relaxed">
              Experience the language of taste at Drizzle. An elevated fine-dining sanctuary offering seasonal gastronomy, rare vintage wines, and artisanal hospitalities.
            </p>
            <div className="pt-2">
              <span className="inline-block font-jakarta text-xs font-semibold uppercase tracking-widest text-[#BF392B] bg-[#BF392B]/20 px-3 py-1 rounded-full">
                #FFF5DF • #BF392B • #2A0403
              </span>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-jakarta font-bold text-xs uppercase tracking-widest text-[#BF392B]">
              Opening Hours
            </h4>
            <div className="space-y-2 font-jakarta text-xs text-[#FFF5DF]/80">
              <div className="flex justify-between border-b border-[#FFF5DF]/10 pb-1">
                <span>Mon — Thu:</span>
                <span>5:00 PM – 10:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-[#FFF5DF]/10 pb-1">
                <span>Fri — Sat:</span>
                <span>5:00 PM – 11:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-[#FFF5DF]/10 pb-1">
                <span>Sunday Brunch:</span>
                <span>11:00 AM – 3:30 PM</span>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-jakarta font-bold text-xs uppercase tracking-widest text-[#BF392B]">
              Location & Contact
            </h4>
            <ul className="space-y-2.5 font-jakarta text-xs text-[#FFF5DF]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#BF392B] shrink-0 mt-0.5" />
                <span>482 Grand Promenade, Suite 100, Culinary District</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#BF392B] shrink-0" />
                <span>+1 (800) 492-7281</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#BF392B] shrink-0" />
                <span>reservations@drizzlerestro.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-jakarta text-xs text-[#FFF5DF]/60">
          <p>© {new Date().getFullYear()} Drizzle Restro. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#FFF5DF]/80 hover:text-[#BF392B] transition-colors"
          >
            <span>Back to top</span>
            <div className="p-2 rounded-full bg-[#FFF5DF]/10 hover:bg-[#BF392B] hover:text-[#FFF5DF] transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  )
}
