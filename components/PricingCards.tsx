"use client"

import { useState } from "react"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: 2997,
    description: "Perfect for small HVAC businesses ready to go digital",
    features: [
      "Professional HVAC website",
      "Basic lead forms",
      "Mobile-responsive design",
      "SEO optimization",
      "3 months support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: 4997,
    description: "Complete automation suite for growing HVAC companies",
    features: [
      "Everything in Starter",
      "AI chatbot integration",
      "Smart scheduling system",
      "Automated follow-ups",
      "Social media automation",
      "Digital forms & workflows",
      "6 months support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 7997,
    description: "Full-scale digital transformation for established businesses",
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Advanced analytics",
      "Multi-location support",
      "Priority support",
      "Monthly optimization calls",
      "12 months support",
    ],
    popular: false,
  },
]

export default function PricingCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 ${
            plan.popular ? "ring-2 ring-blue-500 scale-105" : "hover:shadow-xl hover:scale-105"
          }`}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                <Star className="w-4 h-4 mr-1 fill-current" />
                Most Popular
              </div>
            </div>
          )}

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <div className="text-4xl font-bold text-gray-900 mb-2">${plan.price.toLocaleString()}</div>
            <div className="text-gray-500">One-time setup fee</div>
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
              plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"
            }`}
          >
            Get Started
          </button>

          <div className="text-center mt-4 text-sm text-gray-500">+ Monthly hosting from $97/month</div>
        </div>
      ))}
    </div>
  )
}
