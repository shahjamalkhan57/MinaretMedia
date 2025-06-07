"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/data"

export default function ServicesShowcase() {
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
    <section ref={sectionRef} className="py-16 md:py-20 bg-gradient-to-br from-white via-blue-50/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-outfit font-bold text-gray-900 mb-3 md:mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Every aspect of your digital presence, meticulously crafted and intelligently automated
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)
            const isHovered = hoveredCard === index

            return (
              <div
                key={service.id}
                data-index={index}
                className={`group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link href={`/services/${service.id}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 hover:border-blue-200 relative overflow-hidden h-full flex flex-col">
                    {/* Hover Effect Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="flex items-center mb-3 md:mb-4">
                        <div
                          className={`bg-blue-50 border border-blue-100 p-2 md:p-3 rounded-lg md:rounded-xl group-hover:bg-blue-100 transition-all duration-300 ${isHovered ? "scale-110" : ""}`}
                        >
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                        </div>
                      </div>

                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-800 transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm flex-1">{service.description}</p>

                      <ul className="space-y-1 md:space-y-2 mb-4 md:mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300"></div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-300 font-medium text-sm mt-auto">
                        Learn More
                        <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link
            href="/services"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
          >
            Explore All Services
            <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}