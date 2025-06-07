import ServiceDetailHero from "@/components/ServiceDetailHero"
import ServiceFeatures from "@/components/ServiceFeatures"
import ServiceProcess from "@/components/ServiceProcess"
import ServiceCTA from "@/components/ServiceCTA"

const schedulingService = {
  title: "Smart Scheduling",
  subtitle: "Never Miss Another Opportunity",
  description:
    "Intelligent scheduling system that optimizes appointments, coordinates teams, and ensures maximum efficiency while providing exceptional customer experience.",
  features: [
    {
      title: "Intelligent Booking",
      description:
        "AI-powered scheduling that considers technician skills, location, and availability for optimal appointments.",
      icon: "brain",
    },
    {
      title: "Automated Reminders",
      description: "Smart reminder system that reduces no-shows with personalized notifications via email and SMS.",
      icon: "chat",
    },
    {
      title: "Route Optimization",
      description: "Advanced routing algorithms that minimize travel time and maximize daily appointments.",
      icon: "network",
    },
    {
      title: "Team Coordination",
      description: "Real-time coordination tools that keep your entire team synchronized and informed.",
      icon: "calendar",
    },
  ],
  process: [
    {
      step: 1,
      title: "Current System Analysis",
      description: "Evaluation of your existing scheduling processes and identification of inefficiencies.",
    },
    {
      step: 2,
      title: "Custom Configuration",
      description: "Setup of intelligent scheduling system tailored to your business requirements.",
    },
    {
      step: 3,
      title: "Integration & Training",
      description: "Seamless integration with existing tools and comprehensive team training.",
    },
    {
      step: 4,
      title: "Optimization & Support",
      description: "Ongoing optimization and support to ensure maximum scheduling efficiency.",
    },
  ],
}

export default function SchedulingPage() {
  return (
    <div className="pt-20">
      <ServiceDetailHero service={schedulingService} />
      <ServiceFeatures features={schedulingService.features} />
      <ServiceProcess process={schedulingService.process} />
      <ServiceCTA />
    </div>
  )
}
