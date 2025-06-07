import ServiceDetailHero from "@/components/ServiceDetailHero"
import ServiceFeatures from "@/components/ServiceFeatures"
import ServiceProcess from "@/components/ServiceProcess"
import ServiceCTA from "@/components/ServiceCTA"

const automationService = {
  title: "Social Media Automation",
  subtitle: "Effortless Brand Presence That Never Sleeps",
  description:
    "Sophisticated automation that maintains your professional presence across all platforms while you focus on what matters most - serving your customers.",
  features: [
    {
      title: "Content Intelligence",
      description:
        "AI-curated content that resonates with your audience and positions you as the local HVAC authority.",
      icon: "brain",
    },
    {
      title: "Multi-Platform Orchestration",
      description:
        "Seamless posting across Facebook, Instagram, LinkedIn, and Google My Business with platform-optimized content.",
      icon: "network",
    },
    {
      title: "Engagement Automation",
      description: "Intelligent response system that maintains authentic conversations with prospects and customers.",
      icon: "chat",
    },
    {
      title: "Performance Insights",
      description: "Advanced analytics that reveal which content drives the most leads and customer engagement.",
      icon: "chart",
    },
  ],
  process: [
    {
      step: 1,
      title: "Brand Analysis",
      description: "Comprehensive audit of your current presence and development of a sophisticated content strategy.",
    },
    {
      step: 2,
      title: "Content Creation",
      description: "Professional content library creation with seasonal campaigns and industry-specific messaging.",
    },
    {
      step: 3,
      title: "Automation Setup",
      description: "Implementation of intelligent posting schedules and engagement automation across all platforms.",
    },
    {
      step: 4,
      title: "Optimization & Growth",
      description: "Continuous refinement based on performance data to maximize reach and engagement.",
    },
  ],
}

export default function AutomationPage() {
  return (
    <div className="pt-20">
      <ServiceDetailHero service={automationService} />
      <ServiceFeatures features={automationService.features} />
      <ServiceProcess process={automationService.process} />
      <ServiceCTA />
    </div>
  )
}
