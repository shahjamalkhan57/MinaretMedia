"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description:
      "We analyze your business goals, challenges, and market position to create a tailored digital transformation strategy.",
    details: [
      "Comprehensive business analysis",
      "Competitor landscape review",
      "Digital opportunity mapping",
      "Strategic roadmap creation",
    ],
  },
  {
    step: 2,
    title: "Bespoke Design",
    description:
      "Our design team crafts a premium digital experience that reflects your brand's unique value proposition.",
    details: [
      "Custom visual identity",
      "User experience architecture",
      "Conversion-focused layouts",
      "Interactive prototyping",
    ],
  },
  {
    step: 3,
    title: "Development & Integration",
    description:
      "We build your digital solutions with meticulous attention to detail and seamless integration with your existing systems.",
    details: ["Custom development", "System integrations", "Automation implementation", "Quality assurance testing"],
  },
  {
    step: 4,
    title: "Launch & Optimization",
    description:
      "Your new digital assets are deployed with precision, followed by continuous optimization for peak performance.",
    details: [
      "Strategic launch planning",
      "Performance monitoring",
      "Data-driven refinements",
      "Ongoing support & training",
    ],
  },
]

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = Number.parseInt(entry.target.getAttribute("data-step") || "0")
            setVisibleSteps((prev) => [...prev, stepIndex])
          }
        })
      },
      { threshold: 0.1 },
    )

    const stepElements = sectionRef.current?.querySelectorAll("[data-step]")
    stepElements?.forEach((step) => observer.observe(step))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4 md:mb-6">Our Refined Process</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            A methodical approach to transforming your HVAC business with precision and expertise
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const isVisible = visibleSteps.includes(index)
            const isActive = activeStep === index

            return (
              <div
                key={index}
                data-step={index}
                className={`flex flex-col md:flex-row items-start mb-12 md:mb-16 last:mb-0 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8 self-center md:self-start">
                  <div
                    className={`w-12 md:w-16 h-12 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg transition-all duration-300 mx-auto md:mx-0 ${
                      isActive ? "bg-gray-900 scale-110" : "bg-gray-700"
                    }`}
                  >
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block w-0.5 h-16 md:h-24 bg-gray-300 mx-auto mt-4"></div>
                  )}
                </div>

                <div className="flex-1 w-full">
                  <div
                    className={`bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 transition-all duration-300 ${
                      isActive ? "shadow-xl md:-translate-y-2" : ""
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl md:text-2xl font-playfair font-bold text-gray-900">{step.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">{step.description}</p>

                    <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                      {step.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        >
                          <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-gray-700 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm md:text-base leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {isActive && (
                      <div className="mt-6 flex justify-end">
                        <button className="flex items-center text-gray-700 font-medium hover:text-gray-900 transition-colors duration-300 group text-sm md:text-base">
                          Learn more about this phase
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}