"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/data"

export default function ServicesGrid() {
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
      id="services"
      className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)
            const isHovered = hoveredCard === index

            return (
              <div
                key={service.id}
                data-index={index}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link href={`/services/${service.id}`}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 hover:border-blue-200 h-full flex flex-col relative overflow-hidden group">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Decorative Corner Element */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/50 rounded-bl-[100px] -translate-y-12 translate-x-12 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700"></div>

                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="flex items-center mb-6">
                        <div
                          className={`bg-blue-100 border border-blue-200 p-4 rounded-xl group-hover:bg-blue-200 transition-all duration-300 ${isHovered ? "scale-110 rotate-3" : ""}`}
                        >
                          <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>

                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto">
                        <div
                          className={`flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-300 font-medium ${
                            isHovered ? "text-blue-700" : ""
                          }`}
                        >
                          Explore Solution
                          <ArrowRight
                            className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                              isHovered ? "translate-x-1" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/pricing"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
          >
            View Our Pricing Packages
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
