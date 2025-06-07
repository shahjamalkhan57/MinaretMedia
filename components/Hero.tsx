"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Play, Sparkles, Zap, Clock, CheckCircle } from "lucide-react"
import StrategyCallModal from "./StrategyCallModal"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white flex items-center overflow-hidden pt-16 md:pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-4 md:left-10 w-20 md:w-32 h-20 md:h-32 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-4 md:right-10 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 md:w-24 h-16 md:h-24 bg-blue-100 rounded-full blur-2xl animate-bounce delay-500"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Zap className="absolute top-1/4 left-1/6 w-4 md:w-6 h-4 md:h-6 text-blue-300 animate-float opacity-60" />
          <CheckCircle className="absolute top-1/3 right-1/4 w-4 md:w-5 h-4 md:h-5 text-blue-400 animate-float delay-1000 opacity-50" />
          <Clock className="absolute bottom-1/3 left-1/3 w-5 md:w-7 h-5 md:h-7 text-blue-200 animate-float delay-2000 opacity-40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="inline-flex items-center bg-blue-50 border border-blue-100 rounded-full px-3 md:px-4 py-2 mb-6 md:mb-8 hover:bg-blue-100 transition-colors duration-300">
                <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-blue-600 mr-2" />
                <span className="text-xs md:text-sm font-medium text-blue-700">Bespoke Digital Excellence</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Elevate Your HVAC Business to
                <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Premium Standards
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed">
                Handcrafted digital solutions that transform traditional HVAC businesses into industry leaders. Every
                detail designed for excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
                >
                  Schedule Strategy Call
                  <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href="/calculator"
                  className="group border-2 border-blue-200 text-blue-700 hover:border-blue-300 hover:bg-blue-50 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center text-sm md:text-base"
                >
                  <Play className="mr-2 w-4 md:w-5 h-4 md:h-5" />
                  Calculate ROI
                </Link>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative">
                {/* Main Dashboard Mockup */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border border-blue-100 p-4 md:p-8 transform rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <div className="w-2 md:w-3 h-2 md:h-3 bg-red-400 rounded-full"></div>
                      <div className="w-2 md:w-3 h-2 md:h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 md:w-3 h-2 md:h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500 font-medium">minaret.agency</div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg md:rounded-xl border border-blue-200">
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <div className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-700 font-medium text-sm md:text-base">AI Assistant Active</span>
                      </div>
                      <div className="text-blue-600 text-xs md:text-sm font-semibold">24/7</div>
                    </div>

                    <div className="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg md:rounded-xl border border-blue-200">
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <div className="w-2 md:w-3 h-2 md:h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-700 font-medium text-sm md:text-base">Smart Scheduler</span>
                      </div>
                      <div className="text-blue-600 text-xs md:text-sm font-semibold">Optimized</div>
                    </div>

                    <div className="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg md:rounded-xl border border-blue-200">
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <div className="w-2 md:w-3 h-2 md:h-3 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-700 font-medium text-sm md:text-base">Follow-ups Automated</span>
                      </div>
                      <div className="text-blue-600 text-xs md:text-sm font-semibold">Active</div>
                    </div>

                    <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg md:rounded-xl border border-blue-200">
                      <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">250+ Hours</div>
                      <div className="text-gray-600 text-xs md:text-sm">Saved Monthly</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 bg-white rounded-full p-2 md:p-4 shadow-lg border border-blue-100 animate-bounce">
                  <Sparkles className="w-4 md:w-6 h-4 md:h-6 text-blue-600" />
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