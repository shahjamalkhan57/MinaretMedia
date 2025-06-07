"use client"

import { useState } from "react"
import { ArrowRight, ArrowLeft, Clock, TrendingUp } from "lucide-react"

interface Question {
  id: string
  question: string
  options: { value: number; label: string }[]
}

const questions: Question[] = [
  {
    id: "calls",
    question: "How many service calls do you handle per week?",
    options: [
      { value: 5, label: "1-10 calls" },
      { value: 15, label: "11-20 calls" },
      { value: 25, label: "21-30 calls" },
      { value: 40, label: "30+ calls" },
    ],
  },
  {
    id: "followups",
    question: "Do you manually follow up with leads?",
    options: [
      { value: 0, label: "No, we don't follow up" },
      { value: 2, label: "Sometimes, when we remember" },
      { value: 5, label: "Yes, regularly" },
      { value: 8, label: "Yes, very systematically" },
    ],
  },
  {
    id: "social",
    question: "Are you managing social media yourself?",
    options: [
      { value: 0, label: "We don't use social media" },
      { value: 2, label: "Occasionally post" },
      { value: 5, label: "Regular posting" },
      { value: 10, label: "Daily management" },
    ],
  },
  {
    id: "paperwork",
    question: "Do you use paper forms/contracts?",
    options: [
      { value: 0, label: "Fully digital" },
      { value: 3, label: "Mostly digital" },
      { value: 6, label: "Mix of both" },
      { value: 10, label: "Mostly paper" },
    ],
  },
  {
    id: "admin",
    question: "How many hours per week on admin tasks?",
    options: [
      { value: 5, label: "1-5 hours" },
      { value: 10, label: "6-10 hours" },
      { value: 15, label: "11-15 hours" },
      { value: 25, label: "15+ hours" },
    ],
  },
]

export default function TimeSavedCalculator() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers, [questions[currentStep].id]: value }
    setAnswers(newAnswers)

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300)
    } else {
      setTimeout(() => setShowResults(true), 300)
    }
  }

  const calculateResults = () => {
    const totalHours = Object.values(answers).reduce((sum, value) => sum + value, 0)
    const monthlyHours = totalHours * 4
    const categories = {
      "Call Management": (answers.calls || 0) * 4,
      "Follow-ups": (answers.followups || 0) * 4,
      "Social Media": (answers.social || 0) * 4,
      Paperwork: (answers.paperwork || 0) * 4,
      "Admin Tasks": (answers.admin || 0) * 4,
    }

    return { totalHours: monthlyHours, categories }
  }

  const reset = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    const results = calculateResults()

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Time Savings Report</h2>
            <p className="text-gray-600">Here's how much time Minaret can save your business</p>
          </div>

          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-blue-600 mb-2">{results.totalHours}</div>
            <div className="text-xl text-gray-600">Hours saved per month</div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Breakdown by category:</h3>
            {Object.entries(results.categories).map(([category, hours]) => (
              <div key={category} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">{category}</span>
                <span className="font-semibold text-blue-600">{hours}h/month</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold text-blue-900">Potential Monthly Value</span>
            </div>
            <p className="text-blue-800">
              At $50/hour, that's <strong>${(results.totalHours * 50).toLocaleString()}</strong> worth of time back in
              your business every month!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={reset}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Start Over
            </button>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Book a Free Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>
              Question {currentStep + 1} of {questions.length}
            </span>
            <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{questions[currentStep].question}</h2>

          <div className="space-y-3">
            {questions[currentStep].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full p-4 text-left bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 group-hover:text-blue-800 font-medium">{option.label}</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </button>

          <div className="text-sm text-gray-500 flex items-center">Skip this question →</div>
        </div>
      </div>
    </div>
  )
}
