"use client"

import ServiceDetailHero from "@/components/ServiceDetailHero"
import ServiceFeatures from "@/components/ServiceFeatures"
import ServiceProcess from "@/components/ServiceProcess"
import ServiceCTA from "@/components/ServiceCTA"

const websiteService = {
  title: "Bespoke HVAC Websites",
  subtitle: "Handcrafted Digital Experiences That Convert",
  description:
    "Premium, custom-designed websites that elevate your HVAC business above the competition. Every pixel crafted with precision, every interaction designed for conversion.",
  features: [
    {
      title: "Intelligent Scheduling System",
      description:
        "AI-powered booking system that learns customer preferences and optimizes appointment slots for maximum efficiency.",
      icon: "calendar",
    },
    {
      title: "Conversational AI Chatbot",
      description:
        "24/7 intelligent assistant that qualifies leads, answers questions, and schedules appointments while you sleep.",
      icon: "bot",
    },
    {
      title: "Dynamic Lead Capture",
      description: "Smart forms that adapt based on user behavior, increasing conversion rates significantly.",
      icon: "magnet",
    },
    {
      title: "Performance Analytics",
      description:
        "Real-time insights into visitor behavior, conversion paths, and ROI metrics that matter to your business.",
      icon: "analytics",
    },
  ],
  process: [
    {
      step: 1,
      title: "Discovery & Strategy",
      description:
        "Deep dive into your business goals, target audience, and competitive landscape to craft the perfect digital strategy.",
    },
    {
      step: 2,
      title: "Custom Design",
      description:
        "Bespoke visual design that reflects your brand's premium positioning and resonates with your ideal customers.",
    },
    {
      step: 3,
      title: "Development & Integration",
      description: "Cutting-edge development with seamless integrations to your existing tools and workflows.",
    },
    {
      step: 4,
      title: "Launch & Optimization",
      description: "Strategic launch with ongoing optimization to ensure peak performance and continuous improvement.",
    },
  ],
}

export default function WebsitesPage() {
  return (
    <div className="pt-20">
      <ServiceDetailHero service={websiteService} />
      <ServiceFeatures features={websiteService.features} />
      <ServiceProcess process={websiteService.process} />
      <ServiceCTA />
    </div>
  )
}
