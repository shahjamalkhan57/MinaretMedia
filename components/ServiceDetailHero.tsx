"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceDetailHeroProps {
  service: {
    title: string
    subtitle: string
    description: string
  }
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">{service.title}</h1>
            <p className="text-xl text-gray-600">{service.subtitle}</p>
          </div>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed">{service.description}</p>

          <div className="flex justify-center">
            <Link
              href="/book-call"
              className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
