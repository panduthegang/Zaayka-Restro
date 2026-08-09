import React, { useState } from 'react'
import { ChevronDown, Menu, X, Utensils, Calendar, Phone, Image as GalleryIcon, Info } from 'lucide-react'

interface NavbarProps {
  onOpenReservation?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const menuItems = [
    { title: 'Breakfast', desc: 'Artisanal coffee & morning delicacies' },
    { title: 'Lunch Tasting', desc: 'Seasonal 3-course midday experience' },
    { title: 'Dinner A La Carte', desc: 'Signature gourmet creations' },
    { title: 'Wine & Cocktails', desc: 'Sommelier curated vintage pairings' }
  ]

  const reservationOptions = [
    { title: 'Main Dining Room', desc: 'Standard table reservation' },
    { title: 'Private Chef Table', desc: 'Exclusive multi-course experience' },
    { title: 'Outdoor Patio', desc: 'Al-fresco dining with panoramic views' }
  ]

  return (
    <header className="w-full bg-[#FFF5DF] border-b border-[#2A0403]/15 relative z-40 sticky top-0 backdrop-blur-md bg-[#FFF5DF]/95">
      {/* Desktop Navigation - 7 Column Grid with Vertical Dividers as per Reference Image */}
      <div className="hidden lg:grid grid-cols-7 min-h-[72px] items-stretch text-[#2A0403]">
        
        {/* 1. HOME */}
        <a 
          href="#home" 
          className="nav-divider flex items-center justify-center font-jakarta font-semibold text-sm md:text-[15px] tracking-[0.1em] uppercase hover:bg-[#2A0403]/[0.03] transition-colors duration-200"
        >
          HOME
        </a>

        {/* 2. OUR MENU (with dropdown) */}
        <div 
          className="nav-divider relative flex items-center justify-center group"
          onMouseEnter={() => setActiveDropdown('menu')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button className="flex items-center gap-2 font-jakarta font-semibold text-sm md:text-[15px] tracking-[0.1em] uppercase hover:text-[#BF392B] transition-colors duration-200 py-6 px-4 w-full justify-center">
            <span>OUR MENU</span>
            <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
          </button>

          {/* Menu Dropdown Card */}
          {activeDropdown === 'menu' && (
            <div className="absolute top-full left-0 w-72 bg-[#FFF5DF] border border-[#2A0403]/15 shadow-xl rounded-b-xl overflow-hidden py-3 px-2 transition-all duration-200">
              {menuItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#menu"
                  className="flex flex-col p-3 rounded-lg hover:bg-[#BF392B]/10 transition-colors group/item"
                >
                  <span className="font-jakarta font-semibold text-base text-[#2A0403] group-hover/item:text-[#BF392B]">
                    {item.title}
                  </span>
                  <span className="font-jakarta text-xs text-[#2A0403]/60 mt-0.5">
                    {item.desc}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* 3. ABOUT US */}
        <a 
          href="#about" 
          className="nav-divider flex items-center justify-center font-jakarta font-semibold text-sm md:text-[15px] tracking-[0.1em] uppercase hover:bg-[#2A0403]/[0.03] hover:text-[#BF392B] transition-colors duration-200"
        >
          ABOUT US
        </a>

        {/* 4. LOGO (Center Column) */}
        <a 
          href="#home" 
          className="nav-divider flex items-center justify-center font-instrument font-normal text-3xl md:text-4xl lg:text-[46px] tracking-tight text-[#2A0403] hover:opacity-90 transition-opacity"
        >
          ZAAYKA.
        </a>

        {/* 5. GALLERY */}
        <a 
          href="#gallery" 
          className="nav-divider flex items-center justify-center font-jakarta font-semibold text-sm md:text-[15px] tracking-[0.1em] uppercase hover:bg-[#2A0403]/[0.03] hover:text-[#BF392B] transition-colors duration-200"
        >
          GALLERY
        </a>

        {/* 6. RESERVATIONS (with dropdown) */}
        <div 
          className="nav-divider relative flex items-center justify-center group"
          onMouseEnter={() => setActiveDropdown('reservations')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button 
            onClick={onOpenReservation}
            className="flex items-center gap-2 font-jakarta font-semibold text-sm md:text-[15px] tracking-[0.1em] uppercase hover:text-[#BF392B] transition-colors duration-200 py-6 px-4 w-full justify-center"
          >
            <span>RESERVATIONS</span>
            <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
          </button>

          {/* Reservations Dropdown Card */}
          {activeDropdown === 'reservations' && (
            <div className="absolute top-full right-0 w-72 bg-[#FFF5DF] border border-[#2A0403]/15 shadow-xl rounded-b-xl overflow-hidden py-3 px-2 transition-all duration-200">
              {reservationOptions.map((item, idx) => (
                <button
                  key={idx}
                  onClick={onOpenReservation}
                  className="w-full text-left flex flex-col p-3 rounded-lg hover:bg-[#BF392B]/10 transition-colors group/item"
                >
                  <span className="font-jakarta font-semibold text-base text-[#2A0403] group-hover/item:text-[#BF392B]">
                    {item.title}
                  </span>
                  <span className="font-jakarta text-xs text-[#2A0403]/60 mt-0.5">
                    {item.desc}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 7. CONTACT */}
        <a 
          href="#contact" 
          className="flex items-center justify-center font-jakarta font-semibold text-sm md:text-[15px] tracking-[0.1em] uppercase hover:bg-[#2A0403]/[0.03] hover:text-[#BF392B] transition-colors duration-200"
        >
          CONTACT
        </a>

      </div>

      {/* Mobile Navigation Header */}
      <div className="lg:hidden flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-playfair font-extrabold text-3xl tracking-tight text-[#2A0403]">
          ZAAYKA.
        </a>
        
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenReservation}
            className="bg-[#BF392B] text-[#FFF5DF] font-jakarta font-medium text-xs tracking-wider uppercase px-4 py-2 rounded-full shadow-sm hover:bg-[#a63023] transition-colors"
          >
            Book Table
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2A0403] rounded-lg hover:bg-[#2A0403]/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF5DF] border-b border-[#2A0403]/15 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-jakarta font-semibold text-sm tracking-widest uppercase text-[#2A0403] py-2 border-b border-[#2A0403]/10"
          >
            HOME
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-jakarta font-semibold text-sm tracking-widest uppercase text-[#2A0403] py-2 border-b border-[#2A0403]/10"
          >
            OUR MENU
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-jakarta font-semibold text-sm tracking-widest uppercase text-[#2A0403] py-2 border-b border-[#2A0403]/10"
          >
            ABOUT US
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-jakarta font-semibold text-sm tracking-widest uppercase text-[#2A0403] py-2 border-b border-[#2A0403]/10"
          >
            GALLERY
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              if (onOpenReservation) onOpenReservation()
            }}
            className="w-full text-left font-jakarta font-semibold text-sm tracking-widest uppercase text-[#2A0403] py-2 border-b border-[#2A0403]/10 flex items-center justify-between"
          >
            <span>RESERVATIONS</span>
            <span className="text-xs bg-[#BF392B] text-[#FFF5DF] px-2 py-0.5 rounded">Book</span>
          </button>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-jakarta font-semibold text-sm tracking-widest uppercase text-[#2A0403] py-2"
          >
            CONTACT
          </a>
        </div>
      )}
    </header>
  )
}
