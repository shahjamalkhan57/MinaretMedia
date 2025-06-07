"use client"

import Link from "next/link"
import { ArrowRight, Calculator } from "lucide-react"
import StrategyCallModal from "./StrategyCallModal"
import { useState } from "react"

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gray-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-24 md:w-48 h-24 md:h-48 bg-gray-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-70"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4 md:mb-6">
                Ready to Transform Your HVAC Business?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                Join the elite HVAC businesses that have elevated their operations with our premium digital solutions
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Schedule Strategy Session
                  <ArrowRight className="ml-2 w-5 md:w-6 h-5 md:h-6 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href="/calculator"
                  className="group border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 flex items-center"
                >
                  <Calculator className="mr-2 w-5 md:w-6 h-5 md:h-6" />
                  Calculate Your ROI
                </Link>
              </div>

              <div className="mt-8 md:mt-12 text-gray-500 flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-2 md:gap-y-4 text-sm md:text-base">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                  <span>30-day satisfaction guarantee</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                  <span>Premium support included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StrategyCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}