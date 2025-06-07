"use client"

import { useState, useEffect, useRef } from "react"
import { TrendingUp, Users, Clock, Award } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: 300,
    suffix: "%",
    label: "Average ROI Increase",
    description: "Our clients see dramatic revenue growth",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Elite HVAC Partners",
    description: "Industry leaders trust our solutions",
  },
  {
    icon: Clock,
    value: 25,
    suffix: "hrs",
    label: "Time Saved Monthly",
    description: "Automation that works while you sleep",
  },
  {
    icon: Award,
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Exceptional results, every time",
  },
]

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate numbers
          stats.forEach((stat, index) => {
            let start = 0
            const end = stat.value
            const duration = 2000
            const increment = end / (duration / 16)

            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                start = end
                clearInterval(timer)
              }
              setAnimatedValues((prev) => {
                const newValues = [...prev]
                newValues[index] = Math.floor(start)
                return newValues
              })
            }, 16)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`text-center group transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-gray-700" />
                  </div>

                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {animatedValues[index]}
                    {stat.suffix}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
