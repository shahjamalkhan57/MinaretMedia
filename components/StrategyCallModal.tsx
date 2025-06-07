"use client"

import { useState, useEffect } from "react"
import { X, Calendar, User, Mail, Phone, Building, MapPin, MessageSquare, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface StrategyCallModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function StrategyCallModal({ isOpen, onClose }: StrategyCallModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    location: "",
    preferredDate: "",
    services: "",
    comments: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [submitError, setSubmitError] = useState("")
  const [showFallback, setShowFallback] = useState(false)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsSubmitted(false)
        setCurrentStep(1)
        setSubmitError("")
        setShowFallback(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          location: "",
          preferredDate: "",
          services: "",
          comments: ""
        })
      }, 300)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitError("")
    setShowFallback(false)

    try {
      // Add timeout to the fetch request
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

      const response = await fetch('https://orangepeeldust.app.n8n.cloud/webhook/6b0bd2e3-07de-4f1c-9826-0ee13a081e7d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'strategy_call_booking',
          timestamp: new Date().toISOString(),
          formData: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            businessName: formData.businessName,
            location: formData.location,
            preferredDate: formData.preferredDate,
            services: formData.services,
            comments: formData.comments
          }
        }),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      setIsLoading(false)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsLoading(false)
      
      // Check if it's a network error or CORS issue
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setSubmitError("Unable to connect to our booking system. This might be due to network restrictions.")
        setShowFallback(true)
      } else if (error.name === 'AbortError') {
        setSubmitError("The request timed out. Please check your internet connection and try again.")
        setShowFallback(true)
      } else {
        setSubmitError("There was an error submitting your form. Please try the alternative contact method below.")
        setShowFallback(true)
      }
    }
  }

  const handleEmailFallback = () => {
    const subject = encodeURIComponent('Strategy Call Request - ' + formData.businessName)
    const body = encodeURIComponent(`
Hello,

I would like to schedule a strategy call for my HVAC business.

Business Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Business Name: ${formData.businessName}
- Location: ${formData.location}
- Preferred Date/Time: ${formData.preferredDate}
- Services of Interest: ${formData.services}
- Additional Comments: ${formData.comments}

Please contact me to schedule our strategy call.

Best regards,
${formData.name}
    `)
    
    window.location.href = `mailto:contact@minaretdigital.com?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const nextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const isStep1Valid = formData.name && formData.email && formData.businessName
  const isStep2Valid = formData.preferredDate

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg sm:max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden bg-white rounded-xl sm:rounded-2xl shadow-2xl"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 px-4 sm:px-6 py-6 sm:py-8 text-white">
              <button
                onClick={onClose}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center mb-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <Calendar className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">Schedule Your Strategy Call</h2>
                  <p className="text-blue-100 text-sm sm:text-base">Let's discuss how we can transform your HVAC business</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="flex items-center space-x-4">
                <div className="flex-1 bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(currentStep / 2) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-blue-100">Step {currentStep} of 2</span>
              </div>
            </div>

            {/* Content */}
            <div className="max-h-[60vh] sm:max-h-[60vh] overflow-y-auto">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 sm:p-8 text-center"
                >
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <CheckCircle className="w-8 sm:w-10 h-8 sm:h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Strategy Call Scheduled!</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                    Thank you for your interest! We'll send you a confirmation email with all the details shortly.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-blue-900 text-sm sm:text-base">What's Next?</span>
                    </div>
                    <p className="text-blue-800 text-xs sm:text-sm">
                      Our team will contact you within 24 hours to confirm your preferred time slot and prepare for your personalized strategy session.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-colors text-sm sm:text-base"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-4 sm:p-6">
                  {submitError && (
                    <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl">
                      <div className="flex items-start">
                        <AlertCircle className="w-4 sm:w-5 h-4 sm:h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-red-800 text-xs sm:text-sm mb-2">{submitError}</p>
                          {showFallback && (
                            <button
                              type="button"
                              onClick={handleEmailFallback}
                              className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors"
                            >
                              Send via Email Instead
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4 sm:space-y-6"
                    >
                      <div className="text-center mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Tell Us About Your Business</h3>
                        <p className="text-gray-600 text-sm sm:text-base">We'll use this information to prepare for your call</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
                            <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                              placeholder="John Smith"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                              placeholder="john@hvaccompany.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                              placeholder="(555) 123-4567"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Business Name *
                          </label>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
                            <input
                              type="text"
                              name="businessName"
                              required
                              value={formData.businessName}
                              onChange={handleChange}
                              className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                              placeholder="Smith HVAC Services"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Business Location
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
                            <input
                              type="text"
                              name="location"
                              value={formData.location}
                              onChange={handleChange}
                              className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                              placeholder="City, State"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4 sm:space-y-6"
                    >
                      <div className="text-center mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Schedule Your Call</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Let us know your preferences and interests</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date & Time *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
                          <input
                            type="datetime-local"
                            name="preferredDate"
                            required
                            value={formData.preferredDate}
                            onChange={handleChange}
                            min={new Date().toISOString().slice(0, 16)}
                            className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Services of Interest
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
                          <select
                            name="services"
                            value={formData.services}
                            onChange={handleChange}
                            className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                          >
                            <option value="">Select services you're interested in</option>
                            <option value="website">Bespoke HVAC Website</option>
                            <option value="automation">Social Media Automation</option>
                            <option value="seo">SEO Excellence</option>
                            <option value="workflows">Digital Workflows</option>
                            <option value="followups">Customer Follow-ups</option>
                            <option value="scheduling">Smart Scheduling</option>
                            <option value="multiple">Multiple Services</option>
                            <option value="all">Complete Digital Transformation</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Comments
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
                          <textarea
                            name="comments"
                            rows={3}
                            value={formData.comments}
                            onChange={handleChange}
                            className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                            placeholder="Tell us about your current challenges, goals, or any specific questions you have..."
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between items-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                    {currentStep === 1 ? (
                      <div></div>
                    ) : (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-4 sm:px-6 py-2 sm:py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors text-sm sm:text-base"
                      >
                        ← Previous
                      </button>
                    )}

                    {currentStep === 1 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!isStep1Valid}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all disabled:cursor-not-allowed text-sm sm:text-base"
                      >
                        Next Step →
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!isStep2Valid || isLoading}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all disabled:cursor-not-allowed flex items-center text-sm sm:text-base"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Scheduling...
                          </>
                        ) : (
                          'Schedule Call'
                        )}
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}