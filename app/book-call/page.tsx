"use client"

import { useState, useEffect } from "react"
import StrategyCallModal from "@/components/StrategyCallModal"

export default function BookCallPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Open modal immediately when page loads
    setIsModalOpen(true)
  }, [])

  return (
    <>
      <div className="min-h-screen pt-20 bg-gradient-to-br from-white via-blue-50/20 to-white flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900 mb-6">
            Schedule Your Strategy Call
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your HVAC business? Let's discuss how our solutions can help you achieve your goals.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Open Booking Form
          </button>
        </div>
      </div>

      <StrategyCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}