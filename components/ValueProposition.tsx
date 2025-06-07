"use client"

import { useState, useEffect, useRef } from "react"
import { Shield, Zap, Users, Target, Award, TrendingUp, CheckCircle } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level security protocols protect your business data and customer information",
    features: ["SSL Encryption", "Data Backup", "GDPR Compliant", "24/7 Monitoring"],
  },
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description: "Optimized for speed with advanced caching and CDN delivery worldwide",
    features: ["Sub-2s Load Times", "Global CDN", "Image Optimization", "Mobile First"],
  },
  {
    icon: Users,
    title: "Dedicated Support Team",
    description: "Expert support team available whenever you need assistance or guidance",
    features: ["24/7 Support", "Expert Guidance", "Training Included", "Priority Response"],
  },
  {
    icon: Target,
    title: "Conversion Optimization",
    description: "Every element designed and tested to maximize lead generation and sales",
    features: ["A/B Testing", "Heat Mapping", "User Analytics", "Conversion Tracking"],
  },
]

export default function ValueProposition() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-4 md:left-10 w-16 md:w-20 h-16 md:h-20 bg-blue-200 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 md:right-20 w-20 md:w-32 h-20 md:h-32 bg-blue-100 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-12 md:w-16 h-12 md:h-16 bg-blue-300 rounded-full blur-lg animate-bounce delay-500"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Award className="absolute top-1/4 right-1/6 w-6 md:w-8 h-6 md:h-8 text-blue-200 animate-float opacity-40" />
        <TrendingUp className="absolute bottom-1/4 left-1/5 w-5 md:w-6 h-5 md:h-6 text-blue-300 animate-float delay-1000 opacity-50" />
        <CheckCircle className="absolute top-1/3 left-1/4 w-6 md:w-7 h-6 md:h-7 text-blue-200 animate-float delay-2000 opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center bg-blue-100 border border-blue-200 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 hover:bg-blue-200 transition-colors duration-300">
            <Award className="w-4 md:w-5 h-4 md:h-5 text-blue-600 mr-2" />
            <span className="text-xs md:text-sm font-medium text-blue-700">Why Choose Minaret</span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-outfit font-bold text-gray-900 mb-3 md:mb-4">Built for HVAC Excellence</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Every solution crafted with precision, backed by expertise, and designed for your success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            const isVisible = visibleCards.includes(index)
            const isHovered = hoveredCard === index

            return (
              <div
                key={index}
                data-index={index}
                className={`group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 hover:border-blue-200 h-full relative overflow-hidden">
                  {/* Hover Effect Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-3 md:mb-4">
                      <div
                        className={`bg-blue-50 border border-blue-100 p-3 md:p-4 rounded-lg md:rounded-xl group-hover:bg-blue-100 transition-all duration-300 ${isHovered ? "scale-110 rotate-3" : ""}`}
                      >
                        <Icon className="w-6 md:w-8 h-6 md:h-8 text-blue-600" />
                      </div>
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 text-center group-hover:text-blue-800 transition-colors duration-300 leading-tight">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm text-center">{value.description}</p>

                    <ul className="space-y-1 md:space-y-2">
                      {value.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300"></div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}