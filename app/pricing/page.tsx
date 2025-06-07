"use client"

import { useState } from "react"
import { Check, Star, Zap, Crown, Rocket } from "lucide-react"
import StrategyCallModal from "@/components/StrategyCallModal"

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: 800,
    billing: "one-time",
    description: "Perfect for HVAC businesses ready to establish their digital presence",
    features: [
      "Professional HVAC website",
      "Mobile-responsive design",
      "Basic SEO optimization",
      "Contact forms",
      "Google My Business setup",
      "3 months support",
      "SSL certificate included",
      "Basic analytics setup",
    ],
    popular: false,
    color: "blue",
  },
  {
    name: "Professional",
    icon: Crown,
    price: 1500,
    billing: "monthly",
    description: "Complete digital transformation with website + 3 core solutions",
    features: [
      "Everything in Starter",
      "Choose 3 solutions:",
      "• Social Media Automation",
      "• Smart Scheduling System",
      "• Customer Follow-ups",
      "• Digital Workflows",
      "• SEO Excellence",
      "AI chatbot integration",
      "Advanced analytics",
      "Priority support",
      "Monthly optimization",
    ],
    popular: true,
    color: "purple",
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: 2000,
    billing: "monthly",
    description: "Full-scale digital ecosystem with all 6 solutions included",
    features: [
      "Everything in Professional",
      "All 6 solutions included:",
      "• Bespoke Website",
      "• Social Media Automation",
      "• SEO Excellence",
      "• Digital Workflows",
      "• Customer Follow-ups",
      "• Smart Scheduling",
      "Custom integrations",
      "Dedicated account manager",
      "Weekly strategy calls",
      "Advanced reporting",
      "24/7 priority support",
    ],
    popular: false,
    color: "green",
  },
]

export default function PricingPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/20 to-white pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 border border-blue-200 rounded-full px-6 py-3 mb-6 hover:bg-blue-200 transition-colors duration-300">
              <Star className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Simple, Transparent Pricing</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900 mb-6">
              Choose Your Digital Transformation Package
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to modernize your HVAC business, from basic web presence to complete automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon
              const isHovered = hoveredCard === index

              return (
                <div
                  key={index}
                  className={`relative transition-all duration-500 ${
                    plan.popular ? "scale-105 z-10" : "hover:scale-105"
                  } ${isHovered ? "z-20" : ""}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div
                    className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 h-full relative overflow-hidden ${
                      plan.popular ? "border-purple-200 hover:border-purple-300" : "border-blue-100 hover:border-blue-200"
                    }`}
                  >
                    {/* Animated Background */}
                    <div
                      className={`absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ${
                        plan.popular
                          ? "bg-gradient-to-br from-purple-50/50 to-purple-100/30"
                          : "bg-gradient-to-br from-blue-50/50 to-blue-100/30"
                      }`}
                    ></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-6">
                        <div
                          className={`p-4 rounded-2xl transition-all duration-300 ${
                            plan.popular ? "bg-purple-100 border border-purple-200" : "bg-blue-100 border border-blue-200"
                          } ${isHovered ? "scale-110 rotate-3" : ""}`}
                        >
                          <Icon className={`w-8 h-8 ${plan.popular ? "text-purple-600" : "text-blue-600"}`} />
                        </div>
                      </div>

                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-outfit font-bold text-gray-900 mb-2">{plan.name}</h3>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">{plan.description}</p>
                        <div className="mb-2">
                          <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                          <span className="text-gray-500 ml-1">
                            {plan.billing === "monthly" ? "/month" : " one-time"}
                          </span>
                        </div>
                        {plan.billing === "monthly" && <div className="text-sm text-gray-500">+ $800 setup fee</div>}
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            {feature.startsWith("•") ? (
                              <div className="flex items-center w-full pl-4">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 flex-shrink-0 mt-2"></div>
                                <span className="text-gray-600 text-sm">{feature.substring(2)}</span>
                              </div>
                            ) : feature.includes(":") ? (
                              <span className="text-gray-800 font-medium text-sm w-full">{feature}</span>
                            ) : (
                              <>
                                <Check
                                  className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                                    plan.popular ? "text-purple-500" : "text-blue-500"
                                  }`}
                                />
                                <span className="text-gray-700 text-sm">{feature}</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => setIsModalOpen(true)}
                        className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                            : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                        }`}
                      >
                        Get Started
                      </button>

                      <div className="text-center mt-4 text-xs text-gray-500">
                        {plan.billing === "monthly" ? "Cancel anytime" : "One-time payment"}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 max-w-4xl mx-auto">
              <h3 className="text-xl font-outfit font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-600 mb-6">
                Every HVAC business is unique. Let's discuss a tailored package that fits your specific needs and budget.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us for Custom Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      <StrategyCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}