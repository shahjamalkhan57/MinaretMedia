"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, User, Mail, Phone, Building, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react"

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
]

export default function BookingScheduler() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      // Only include future dates (excluding weekends for business)
      if (date >= today && date.getDay() !== 0 && date.getDay() !== 6) {
        days.push(date)
      } else {
        days.push(null)
      }
    }

    return days
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const prevMonth = () => {
    const today = new Date()
    const prevMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    if (prevMonthDate >= new Date(today.getFullYear(), today.getMonth())) {
      setCurrentMonth(prevMonthDate)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-blue-100">
          <div className="w-20 h-20 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-2xl font-outfit font-bold text-gray-900 mb-4">Strategy Call Scheduled!</h2>
          <p className="text-gray-600 mb-6">
            We've sent you a confirmation email with all the details. Looking forward to discussing your business
            transformation.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-gray-700">
              <strong>Date:</strong> {selectedDate ? formatDate(selectedDate) : ""} at {selectedTime}
            </p>
          </div>
        </div>
      </div>
    )
  }

  const days = getDaysInMonth(currentMonth)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
        <div className="grid lg:grid-cols-2">
          {/* Left Side - Calendar */}
          <div className="p-8 bg-gradient-to-br from-blue-50/50 to-white">
            <h3 className="text-xl font-outfit font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-blue-600" />
              Select Date & Time
            </h3>

            {/* Calendar Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth} className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <h4 className="font-semibold text-gray-800">
                  {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </h4>
                <button onClick={nextMonth} className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="p-2 text-center text-xs font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {days.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => date && setSelectedDate(date)}
                    disabled={!date}
                    className={`p-2 text-sm rounded-lg transition-all duration-200 ${
                      !date
                        ? "invisible"
                        : selectedDate && date.getTime() === selectedDate.getTime()
                          ? "bg-blue-600 text-white"
                          : "hover:bg-blue-100 text-gray-700"
                    }`}
                  >
                    {date?.getDate()}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            {selectedDate && (
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Available Times
                </h4>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg border transition-all duration-300 text-sm ${
                        selectedTime === time
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Form */}
          <div className="p-8">
            <h3 className="text-xl font-outfit font-bold text-gray-900 mb-6 flex items-center">
              <User className="w-6 h-6 mr-3 text-blue-600" />
              Your Information
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@hvaccompany.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Smith HVAC Services"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your goals</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="What challenges are you facing? What are your growth goals?"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!selectedDate || !selectedTime || !formData.name || !formData.email}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none disabled:cursor-not-allowed"
              >
                Schedule Strategy Call
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
