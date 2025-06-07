import ServiceDetailHero from "@/components/ServiceDetailHero"
import ServiceFeatures from "@/components/ServiceFeatures"
import ServiceProcess from "@/components/ServiceProcess"
import ServiceCTA from "@/components/ServiceCTA"

const followupsService = {
  title: "Customer Follow-ups",
  subtitle: "Intelligent Relationship Management",
  description:
    "Sophisticated follow-up systems that nurture leads, maintain customer relationships, and generate repeat business through personalized automation.",
  features: [
    {
      title: "Lead Nurturing Campaigns",
      description:
        "Automated email and SMS sequences that guide prospects through your sales funnel with personalized messaging.",
      icon: "chat",
    },
    {
      title: "Customer Satisfaction Tracking",
      description:
        "Automated surveys and feedback collection to monitor satisfaction and identify improvement opportunities.",
      icon: "analytics",
    },
    {
      title: "Maintenance Reminders",
      description: "Intelligent scheduling of maintenance reminders based on equipment type and service history.",
      icon: "calendar",
    },
    {
      title: "Review Generation",
      description: "Automated review requests sent at optimal times to generate positive online reviews.",
      icon: "network",
    },
  ],
  process: [
    {
      step: 1,
      title: "Customer Journey Mapping",
      description: "Analysis of your customer lifecycle to identify key touchpoints for follow-up.",
    },
    {
      step: 2,
      title: "Campaign Development",
      description: "Creation of personalized follow-up campaigns for different customer segments.",
    },
    {
      step: 3,
      title: "Automation Setup",
      description: "Implementation of automated systems for seamless customer communication.",
    },
    {
      step: 4,
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization of follow-up campaigns for maximum effectiveness.",
    },
  ],
}

export default function FollowupsPage() {
  return (
    <div className="pt-20">
      <ServiceDetailHero service={followupsService} />
      <ServiceFeatures features={followupsService.features} />
      <ServiceProcess process={followupsService.process} />
      <ServiceCTA />
    </div>
  )
}
