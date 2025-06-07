"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

interface ServicePricingProps {
  pricing: {
    starting: number
    features: string[]
  }
}

export default function ServicePricing({ pricing }: ServicePricingProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("pricing-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">Investment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Premium solutions for businesses serious about growth
          </p>
        </div>

        <div
          className={`max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="text-sm text-gray-500 mb-2">Starting from</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">${pricing.starting.toLocaleString()}</div>
                <div className="text-gray-600">Custom-tailored to your specific needs</div>
              </div>

              <div className="space-y-4 mb-8">
                {pricing.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-gray-700 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/book-call"
                  className="group inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 p-6 text-center border-t border-gray-100">
              <p className="text-gray-600">
                Each solution is custom-tailored to your specific business needs and goals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
