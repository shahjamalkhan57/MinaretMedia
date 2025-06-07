"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Sparkles, Zap, Shield, Award } from "lucide-react"
import Link from "next/link"

export default function ServiceHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Zap className="absolute top-1/4 right-1/6 w-8 h-8 text-blue-300 animate-float opacity-40" />
        <Shield className="absolute bottom-1/3 left-1/4 w-6 h-6 text-blue-400 animate-float delay-1000 opacity-50" />
        <Award className="absolute top-1/3 left-1/5 w-7 h-7 text-blue-200 animate-float delay-2000 opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center bg-blue-100 border border-blue-200 rounded-full px-6 py-3 mb-8 hover:bg-blue-200 transition-colors duration-300">
            <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">Comprehensive Solutions</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900 mb-6">
            Premium Digital Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              HVAC Excellence
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Discover our comprehensive suite of bespoke services designed to transform your HVAC business into an
            industry leader. Each solution is meticulously crafted to address specific challenges and unlock new growth
            opportunities.
          </p>

          <div className="flex justify-center">
            <Link
              href="#services"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
