import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { AboutSection } from '../components/AboutSection'
import { GallerySection } from '../components/GallerySection'
import { Footer } from '../components/Footer'
import { ReservationModal } from '../components/ReservationModal'

export const LandingPage: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false)

  const handleOpenReservation = () => {
    setIsReservationOpen(true)
  }

  const handleCloseReservation = () => {
    setIsReservationOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#FFF5DF] flex flex-col font-jakarta text-[#2A0403] selection:bg-[#BF392B] selection:text-[#FFF5DF]">
      {/* Navbar Component */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* About Us Section */}
        <AboutSection />

        {/* Gallery Section */}
        <GallerySection />
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={handleCloseReservation}
      />
    </div>
  )
}
