import TimeSavedCalculator from "@/components/TimeSavedCalculator"

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/20 to-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900 mb-4">Time Saved Calculator</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how much time Minaret can save your HVAC business every month
          </p>
        </div>
        <TimeSavedCalculator />
      </div>
    </div>
  )
}
