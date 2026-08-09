import React, { useState } from 'react'
import { X, Calendar, Clock, Users, CheckCircle2, UtensilsCrossed } from 'lucide-react'

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [guests, setGuests] = useState('2')
  const [date, setDate] = useState('2026-08-10')
  const [time, setTime] = useState('19:30')
  const [seatingArea, setSeatingArea] = useState('Main Dining Room')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [specialRequests, setSpecialRequests] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A0403]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#FFF5DF] border border-[#2A0403]/20 rounded-2xl shadow-2xl overflow-hidden text-[#2A0403]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#2A0403]/15 bg-[#FFF5DF]">
          <div className="flex items-center gap-2.5">
            <UtensilsCrossed className="w-5 h-5 text-[#BF392B]" />
            <h3 className="font-playfair font-bold text-2xl text-[#2A0403]">Reserve a Table at Drizzle.</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#2A0403]/10 text-[#2A0403] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#BF392B]/10 text-[#BF392B] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-playfair font-bold text-3xl text-[#2A0403]">Reservation Confirmed!</h4>
            <p className="font-jakarta text-sm text-[#2A0403]/80 max-w-md mx-auto">
              Thank you <strong className="text-[#2A0403]">{name || 'Valued Guest'}</strong>. We have reserved a table for <strong className="text-[#2A0403]">{guests} guests</strong> on <strong className="text-[#2A0403]">{date} at {time}</strong> in our {seatingArea}.
            </p>
            <p className="font-jakarta text-xs text-[#2A0403]/60">
              A confirmation email has been sent to {email || 'your email address'}.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-[#BF392B] text-[#FFF5DF] font-jakarta font-semibold text-sm px-8 py-3 rounded-full shadow-md hover:bg-[#aa3124] transition-all"
              >
                Back to Drizzle
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Guest & Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block font-jakarta text-xs font-semibold uppercase tracking-wider text-[#2A0403]/70 mb-1.5 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#BF392B]" /> Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#FFF5DF] border border-[#2A0403]/25 rounded-lg px-3 py-2.5 text-sm font-jakarta text-[#2A0403] focus:outline-none focus:border-[#BF392B]"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="8+">8+ Guests (Chef Table)</option>
                </select>
              </div>

              <div>
                <label className="block font-jakarta text-xs font-semibold uppercase tracking-wider text-[#2A0403]/70 mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#BF392B]" /> Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#FFF5DF] border border-[#2A0403]/25 rounded-lg px-3 py-2 text-sm font-jakarta text-[#2A0403] focus:outline-none focus:border-[#BF392B]"
                />
              </div>

              <div>
                <label className="block font-jakarta text-xs font-semibold uppercase tracking-wider text-[#2A0403]/70 mb-1.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#BF392B]" /> Time
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#FFF5DF] border border-[#2A0403]/25 rounded-lg px-3 py-2.5 text-sm font-jakarta text-[#2A0403] focus:outline-none focus:border-[#BF392B]"
                >
                  <option value="17:00">5:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:30">9:30 PM</option>
                </select>
              </div>
            </div>

            {/* Seating preference */}
            <div>
              <label className="block font-jakarta text-xs font-semibold uppercase tracking-wider text-[#2A0403]/70 mb-1.5">
                Seating Area
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Main Dining Room', 'Chef Table', 'Patio Deck'].map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setSeatingArea(area)}
                    className={`py-2 px-3 text-xs font-jakarta rounded-lg border transition-all ${
                      seatingArea === area
                        ? 'bg-[#BF392B] text-[#FFF5DF] border-[#BF392B] font-semibold'
                        : 'border-[#2A0403]/20 hover:bg-[#2A0403]/5 text-[#2A0403]'
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block font-jakarta text-xs font-semibold uppercase tracking-wider text-[#2A0403]/70 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Eleanor Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#FFF5DF] border border-[#2A0403]/25 rounded-lg px-3.5 py-2 text-sm font-jakarta text-[#2A0403] focus:outline-none focus:border-[#BF392B]"
                />
              </div>

              <div>
                <label className="block font-jakarta text-xs font-semibold uppercase tracking-wider text-[#2A0403]/70 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="eleanor@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#FFF5DF] border border-[#2A0403]/25 rounded-lg px-3.5 py-2 text-sm font-jakarta text-[#2A0403] focus:outline-none focus:border-[#BF392B]"
                />
              </div>
            </div>

            <div>
              <label className="block font-jakarta text-xs font-semibold uppercase tracking-wider text-[#2A0403]/70 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 019-2834"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#FFF5DF] border border-[#2A0403]/25 rounded-lg px-3.5 py-2 text-sm font-jakarta text-[#2A0403] focus:outline-none focus:border-[#BF392B]"
              />
            </div>

            <div>
              <label className="block font-jakarta text-xs font-semibold uppercase tracking-wider text-[#2A0403]/70 mb-1">
                Dietary Notes or Special Occasion
              </label>
              <textarea
                rows={2}
                placeholder="Anniversary celebration, gluten-free preference, window seat request..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full bg-[#FFF5DF] border border-[#2A0403]/25 rounded-lg px-3.5 py-2 text-sm font-jakarta text-[#2A0403] focus:outline-none focus:border-[#BF392B]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#BF392B] hover:bg-[#aa3124] text-[#FFF5DF] font-jakarta font-bold text-sm uppercase tracking-widest py-3.5 rounded-xl shadow-lg transition-all transform active:scale-[0.99]"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
