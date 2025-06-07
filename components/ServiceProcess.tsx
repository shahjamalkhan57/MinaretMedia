"use client"

import { useState, useEffect, useRef } from "react"

interface ProcessStep {
  step: number
  title: string
  description: string
}

interface ServiceProcessProps {
  process: ProcessStep[]
}

export default function ServiceProcess({ process }: ServiceProcessProps) {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleSteps((prev) => [...prev, stepIndex])
          }
        })
      },
      { threshold: 0.1 },
    )

    const stepElements = sectionRef.current?.querySelectorAll("[data-index]")
    stepElements?.forEach((step) => observer.observe(step))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A methodical approach to delivering exceptional results
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 z-0"></div>

            {/* Process Steps */}
            {process.map((step, index) => {
              const isVisible = visibleSteps.includes(index)
              const isHovered = hoveredStep === index
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`relative z-10 mb-16 last:mb-0 transition-all duration-700 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl font-bold border-4 transition-all duration-300 ${
                        isHovered ? "border-gray-900 scale-110" : "border-gray-300"
                      }`}
                    >
                      {step.step}
                    </div>
                  </div>

                  <div
                    className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-lg mx-auto transition-all duration-300 ${
                      isHovered ? "shadow-xl -translate-y-2" : ""
                    }`}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-center">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
