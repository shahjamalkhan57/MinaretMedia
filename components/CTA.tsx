import Link from "next/link"
import { ArrowRight, Calculator } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your HVAC Business?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join hundreds of HVAC businesses that have already made the switch to smart automation
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center group shadow-lg"
          >
            Book Your Free Demo
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/calculator"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center group"
          >
            <Calculator className="mr-2 w-6 h-6" />
            Calculate Your Savings
          </Link>
        </div>

        <div className="mt-12 text-blue-100">
          <p className="text-sm">No contracts • 30-day money-back guarantee • Setup in 2 weeks</p>
        </div>
      </div>
    </section>
  )
}
