"use client"

import { ArrowRight, Calculator } from "lucide-react"
import Link from "next/link"
import StrategyCallModal from "./StrategyCallModal"
import { useState } from "react"

export default function ServiceCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a complimentary strategy session to discover how our solutions can elevate your HVAC business
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Your Strategy Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/calculator"
                className="group border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center"
              >
                <Calculator className="mr-2 w-5 h-5" />
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StrategyCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}