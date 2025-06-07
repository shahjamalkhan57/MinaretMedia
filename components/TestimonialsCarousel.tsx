"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight, Quote, Award, TrendingUp } from "lucide-react"

const testimonials = [
  {
    name: "Michael Johnson",
    position: "CEO",
    company: "Johnson HVAC Services",
    location: "Dallas, TX",
    rating: 5,
    text: "Minaret completely transformed our business operations. The custom website and automation tools have increased our lead conversion significantly and saved us countless hours of administrative work.",
    results: "Lead conversion increased",
    category: "Conversion",
  },
  {
    name: "Sarah Chen",
    position: "Operations Director",
    company: "Elite Climate Solutions",
    location: "Phoenix, AZ",
    rating: 5,
    text: "The digital workflows Minaret implemented have revolutionized how we operate. What used to take hours of manual work now happens automatically. The ROI has been remarkable.",
    results: "Operations streamlined",
    category: "Efficiency",
  },
  {
    name: "Robert Martinez",
    position: "Founder",
    company: "Martinez Heating & Cooling",
    location: "Denver, CO",
    rating: 5,
    text: "Our new website and automation system paid for itself within the first month. We're booking more jobs than ever and our customers consistently comment on how professional and seamless the experience is.",
    results: "ROI in first month",
    category: "Growth",
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [visibleSection, setVisibleSection] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleSection(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    intervalRef.current = setInterval(() => {
      nextTestimonial()
    }, 6000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoPlaying, currentIndex])

  const nextTestimonial = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return

    setIsAnimating(true)
    setCurrentIndex(index)
    setIsAutoPlaying(false)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Conversion":
        return <TrendingUp className="w-5 h-5 text-blue-600" />
      case "Efficiency":
        return <Award className="w-5 h-5 text-green-600" />
      case "Growth":
        return <Star className="w-5 h-5 text-purple-600" />
      default:
        return <Award className="w-5 h-5 text-blue-600" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Conversion":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "Efficiency":
        return "bg-green-100 text-green-700 border-green-200"
      case "Growth":
        return "bg-purple-100 text-purple-700 border-purple-200"
      default:
        return "bg-blue-100 text-blue-700 border-blue-200"
    }
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleSection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center bg-blue-100 border border-blue-200 rounded-full px-6 py-3 mb-6 hover:bg-blue-200 transition-colors duration-300">
            <Quote className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">Client Success Stories</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-outfit font-bold text-gray-900 mb-4">
            Real Results from Real HVAC Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover how we've helped HVAC businesses like yours achieve remarkable transformations
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div
            className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-100 p-8 md:p-12 mb-8 transition-all duration-1000 ${
              visibleSection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-full p-4">
                <Quote className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center items-center mb-8">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mx-1" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote
              className={`text-xl md:text-2xl text-gray-800 text-center mb-8 leading-relaxed font-medium transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Client Info */}
            <div
              className={`flex flex-col md:flex-row items-center justify-between transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="text-center md:text-left mb-4 md:mb-0">
                <div className="font-bold text-gray-900 text-lg mb-1">{testimonials[currentIndex].name}</div>
                <div className="text-gray-600 mb-1">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </div>
                <div className="text-gray-500 text-sm">{testimonials[currentIndex].location}</div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className={`flex items-center px-4 py-2 rounded-full border text-sm font-medium ${getCategoryColor(
                    testimonials[currentIndex].category,
                  )}`}
                >
                  {getCategoryIcon(testimonials[currentIndex].category)}
                  <span className="ml-2">{testimonials[currentIndex].results}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-8">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              disabled={isAnimating}
              className="bg-white/90 backdrop-blur-sm hover:bg-white border border-blue-200 hover:border-blue-300 p-4 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </button>

            {/* Dots Navigation */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  disabled={isAnimating}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex ? "w-12 h-3 bg-blue-600" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="bg-white/90 backdrop-blur-sm hover:bg-white border border-blue-200 hover:border-blue-300 p-4 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
