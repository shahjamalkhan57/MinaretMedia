import ServiceCard from "@/components/ServiceCard"
import { services } from "@/lib/data"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Digital Solutions for HVAC Businesses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to modernize your HVAC business and scale efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
