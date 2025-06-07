"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function CalendlyScheduler() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white via-blue-50/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-outfit font-bold text-gray-900 mb-4 md:mb-6">
            Schedule Your Strategy Call
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Book a time that works best for you to discuss how we can transform your HVAC business
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="calendly-inline-widget bg-white rounded-2xl shadow-lg overflow-hidden" 
            data-url="https://calendly.com/sh-jamal-khan" 
            style={{ 
              minWidth: "320px", 
              height: "600px",
              width: "100%"
            }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </div>
      </div>
    </section>
  )
}