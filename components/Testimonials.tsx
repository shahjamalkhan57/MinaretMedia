"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Mike Johnson",
    company: "Johnson HVAC Services",
    location: "Dallas, TX",
    rating: 5,
    text: "Minaret transformed our business completely. We went from missing 30% of calls to capturing every single lead. The automated follow-ups alone increased our conversion rate by 40%.",
    results: "40% more conversions",
  },
  {
    name: "Sarah Chen",
    company: "Elite Climate Solutions",
    location: "Phoenix, AZ",
    rating: 5,
    text: "The time savings are incredible. What used to take me 15 hours a week in admin work now takes 2 hours. I can focus on growing the business instead of drowning in paperwork.",
    results: "13 hours saved weekly",
  },
  {
    name: "Robert Martinez",
    company: "Martinez Heating & Cooling",
    location: "Denver, CO",
    rating: 5,
    text: "Our new website and automation system paid for itself in the first month. We're booking 60% more jobs and our customers love the professional experience.",
    results: "60% more bookings",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Real Results from Real HVAC Businesses</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how Minaret has helped HVAC companies like yours scale and succeed
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-gray-600">{testimonials[currentIndex].company}</div>
                <div className="text-gray-500 text-sm">{testimonials[currentIndex].location}</div>
              </div>

              <div className="bg-blue-100 px-4 py-2 rounded-lg">
                <div className="text-blue-800 font-bold">{testimonials[currentIndex].results}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
