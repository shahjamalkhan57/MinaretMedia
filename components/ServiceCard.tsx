"use client"

import type { LucideIcon } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  features: string[]
}

interface ServiceCardProps {
  service: Service
  index: number
  isVisible?: boolean
}

export default function ServiceCard({ service, index, isVisible = true }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <div
      className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer border border-gray-100 hover:border-blue-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
          <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
        {service.title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
