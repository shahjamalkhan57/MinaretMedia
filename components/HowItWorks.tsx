"use client"

import { useState, useEffect, useRef } from "react"
import { MessageSquare, Wrench, Rocket, BarChart } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We learn about your business, challenges, and goals in a 30-minute consultation.",
    details: ["Current pain points analysis", "Goal setting session", "Custom solution planning"],
  },
  {
    icon: Wrench,
    title: "Custom Build",
    description: "Our team creates your personalized website and automation systems.",
    details: ["Website development", "Automation setup", "Integration testing"],
  },
  {
    icon: Rocket,
    title: "Launch & Training",
    description: "We launch your new systems and train your team on how to use everything.",
    details: ["System deployment", "Team training sessions", "Go-live support"],
  },
  {
    icon: BarChart,
    title: "Ongoing Success",
    description: "We monitor performance and continuously optimize for better results.",
    details: ["Performance monitoring", "Monthly optimization", "24/7 support"],
  },
]

export default function HowItWorks() {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From first call to full automation in just 4 simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isVisible = visibleSteps.includes(index)

            return (
              <div
                key={index}
                data-step={index}
                className={`flex items-start mb-12 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0 mr-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && <div className="w-0.5 h-20 bg-blue-200 mx-auto mt-4"></div>}
                </div>

                <div className="flex-1">
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{step.description}</p>

                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
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
