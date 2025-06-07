"use client"

import { useState, useEffect, useRef } from "react"
import { Bot, Calendar, Magnet, BarChart, Brain, Network, MessageSquare, TrendingUp } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: string
}

interface ServiceFeaturesProps {
  features: Feature[]
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleFeatures((prev) => [...prev, featureIndex])
          }
        })
      },
      { threshold: 0.1 },
    )

    const featureElements = sectionRef.current?.querySelectorAll("[data-index]")
    featureElements?.forEach((feature) => observer.observe(feature))

    return () => observer.disconnect()
  }, [])

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "bot":
        return <Bot className="w-8 h-8 text-gray-700" />
      case "calendar":
        return <Calendar className="w-8 h-8 text-gray-700" />
      case "magnet":
        return <Magnet className="w-8 h-8 text-gray-700" />
      case "analytics":
        return <BarChart className="w-8 h-8 text-gray-700" />
      case "brain":
        return <Brain className="w-8 h-8 text-gray-700" />
      case "network":
        return <Network className="w-8 h-8 text-gray-700" />
      case "chat":
        return <MessageSquare className="w-8 h-8 text-gray-700" />
      case "chart":
        return <TrendingUp className="w-8 h-8 text-gray-700" />
      default:
        return <Bot className="w-8 h-8 text-gray-700" />
    }
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sophisticated capabilities designed to transform your HVAC business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const isVisible = visibleFeatures.includes(index)
            const isHovered = hoveredFeature === index

            return (
              <div
                key={index}
                data-index={index}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div
                  className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 border border-gray-100 h-full ${
                    isHovered ? "shadow-xl -translate-y-2" : ""
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <div
                      className={`bg-gray-100 p-4 rounded-xl transition-all duration-300 ${
                        isHovered ? "bg-gray-200 scale-110" : ""
                      }`}
                    >
                      {getIcon(feature.icon)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
