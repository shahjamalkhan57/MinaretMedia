"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle, ArrowRight, XCircle } from "lucide-react"
import StrategyCallModal from "./StrategyCallModal"

const painPoints = [
  "Missed calls leading to lost revenue",
  "Overwhelming administrative paperwork",
  "Inconsistent social media presence",
  "Manual customer follow-up processes",
  "Inefficient scheduling systems",
  "Outdated or non-existent web presence",
]

const solutions = [
  "24/7 intelligent call routing & AI chatbot",
  "Streamlined digital workflows & smart forms",
  "Sophisticated social media automation",
  "Personalized customer follow-up sequences",
  "Precision scheduling optimization system",
  "Premium, conversion-focused websites",
]

export default function WhyMinaret() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <>
      <section ref={sectionRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4 md:mb-6">
              Transforming HVAC Business Challenges
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              We understand the unique obstacles HVAC businesses face. Our solutions are precisely engineered to overcome
              these challenges and elevate your operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
            {/* Pain Points */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h3 className="text-xl md:text-2xl font-playfair font-bold text-gray-900 mb-6 md:mb-8 flex items-center">
                <span className="w-8 md:w-12 h-1 bg-gray-900 mr-3 md:mr-4"></span>
                Industry Challenges
              </h3>
              <div className="space-y-3 md:space-y-4">
                {painPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 md:p-4 bg-gray-50 rounded-lg md:rounded-xl border-l-4 border-gray-300 transition-all duration-300 hover:border-gray-900 hover:shadow-md group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <XCircle className="w-4 md:w-5 h-4 md:h-5 text-gray-400 mr-3 md:mr-4 flex-shrink-0 group-hover:text-gray-700 transition-colors duration-300 mt-0.5" />
                    <span className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <h3 className="text-xl md:text-2xl font-playfair font-bold text-gray-900 mb-6 md:mb-8 flex items-center">
                <span className="w-8 md:w-12 h-1 bg-gray-900 mr-3 md:mr-4"></span>
                Our Solutions
              </h3>
              <div className="space-y-3 md:space-y-4">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 md:p-4 bg-gray-50 rounded-lg md:rounded-xl border-l-4 border-gray-300 transition-all duration-300 hover:border-gray-900 hover:shadow-md group"
                    style={{ animationDelay: `${(index + 6) * 100}ms` }}
                  >
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-gray-400 mr-3 md:mr-4 flex-shrink-0 group-hover:text-gray-700 transition-colors duration-300 mt-0.5" />
                    <span className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-10 py-4 md:py-5 rounded-full font-semibold text-base md:text-lg transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule Your Transformation Consultation
              <ArrowRight className="ml-2 md:ml-3 w-5 md:w-6 h-5 md:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <StrategyCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}