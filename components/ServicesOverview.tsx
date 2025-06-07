"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { services } from "@/lib/data"
import ServiceCard from "./ServiceCard"

export default function ServicesOverview() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
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
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Everything Your HVAC Business Needs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From custom websites to complete automation, we handle the tech so you can focus on what you do best
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={service.id} data-index={index}>
              <ServiceCard service={service} index={index} isVisible={visibleCards.includes(index)} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/solutions"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
          >
            View All Solutions
          </Link>
        </div>
      </div>
    </section>
  )
}
