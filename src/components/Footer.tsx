import React, { useState } from 'react'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 4000)
      setEmail('')
    }
  }

  const navLinks = [
    { num: '1', label: 'Home', href: '#home' },
    { num: '2', label: 'About Us', href: '#about' },
    { num: '3', label: 'Our Menu', href: '#menu' },
    { num: '4', label: 'Gallery', href: '#gallery' },
    { num: '5', label: 'Contact', href: '#contact' },
    { num: '6', label: 'Book a Table', href: '#reservations' },
    { num: '7', label: 'Events', href: '#events' },
    { num: '8', label: 'Careers', href: '#careers' },
    { num: '9', label: 'Blogs', href: '#blogs' }
  ]

  return (
    <footer className="w-full bg-[#2A0403] text-[#FFF5DF] pt-16 pb-8 border-t border-[#FFF5DF]/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Grid split into Left Logo & Right Newsletter + Nav Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-[#FFF5DF]/15">
          
          {/* Left Column: Massive & Tall ZAAYKA. Logo covering empty space + Social Icons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:border-r lg:border-[#FFF5DF]/15 lg:pr-10">
            <div className="pt-1">
              {/* Tall, bold, condensed ZAAYKA. Logo in Instrument Serif */}
              <h2 className="font-instrument font-normal text-6xl sm:text-7xl md:text-8xl lg:text-[116px] xl:text-[132px] tracking-tighter text-[#FFF5DF] leading-[0.88] uppercase transform scale-y-110 origin-left inline-block">
                ZAAYKA<span className="text-[#BF392B]">.</span>
              </h2>
            </div>

            {/* Social Media Section */}
            <div className="space-y-3 pt-6">
              <h4 className="font-instrument font-normal text-2xl md:text-3xl text-[#FFF5DF]">
                Social Media
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-[#FFF5DF]/30 flex items-center justify-center font-jakarta text-sm text-[#FFF5DF] hover:bg-[#FFF5DF] hover:text-[#2A0403] hover:border-[#FFF5DF] transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-[#FFF5DF]/30 flex items-center justify-center font-jakarta text-sm text-[#FFF5DF] hover:bg-[#FFF5DF] hover:text-[#2A0403] hover:border-[#FFF5DF] transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-[#FFF5DF]/30 flex items-center justify-center font-jakarta text-sm text-[#FFF5DF] hover:bg-[#FFF5DF] hover:text-[#2A0403] hover:border-[#FFF5DF] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Newsletter Subscription + Quick Links */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10 lg:pl-2">
            
            {/* Newsletter Subscription Box */}
            <div className="space-y-3.5">
              <h3 className="font-instrument font-normal text-3xl sm:text-4xl lg:text-[44px] text-[#FFF5DF] leading-tight">
                Get tasty news straight to your inbox
              </h3>
              <p className="font-jakarta text-xs sm:text-sm text-[#FFF5DF]/75">
                No spam — just fresh updates, special offers, and mouthwatering news.
              </p>

              <form onSubmit={handleSubscribe} className="pt-2">
                <div className="relative flex items-center max-w-xl bg-[#FFF5DF]/[0.06] border border-[#FFF5DF]/15 rounded-full p-1.5 focus-within:border-[#BF392B] transition-colors">
                  <input
                    type="email"
                    required
                    placeholder="Write your email ..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent px-4 py-2.5 text-sm font-jakarta text-[#FFF5DF] placeholder-[#FFF5DF]/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 bg-[#BF392B] hover:bg-[#a63023] text-[#FFF5DF] font-jakarta font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-200 shadow-md"
                  >
                    {subscribed ? 'SUBSCRIBED!' : 'SUBSCRIBE NOW'}
                  </button>
                </div>
              </form>
            </div>

            {/* Navigation Grid (Strictly single-line without wrapping, matching target UI) */}
            <div className="pt-8 border-t border-[#FFF5DF]/15">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-6 lg:gap-x-8">
                {navLinks.map((item) => (
                  <a
                    key={item.num}
                    href={item.href}
                    className="font-jakarta text-sm sm:text-[15px] font-medium text-[#FFF5DF] hover:text-[#BF392B] transition-colors whitespace-nowrap flex items-center gap-1.5 group"
                  >
                    <span className="font-bold text-[#FFF5DF] group-hover:text-[#BF392B]">{item.num}.</span>
                    <span className="whitespace-nowrap">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-jakarta text-xs sm:text-sm text-[#FFF5DF]/70">
          <p>All the rights reserved to ©Ryllic Studio 2025</p>
          <div className="flex items-center gap-5 font-normal">
            <a href="#terms" className="hover:text-[#FFF5DF] transition-colors">Terms & Condition</a>
            <span className="text-[#FFF5DF]/40">•</span>
            <a href="#privacy" className="hover:text-[#FFF5DF] transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
