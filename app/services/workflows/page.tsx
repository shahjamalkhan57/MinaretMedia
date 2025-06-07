import ServiceDetailHero from "@/components/ServiceDetailHero"
import ServiceFeatures from "@/components/ServiceFeatures"
import ServiceProcess from "@/components/ServiceProcess"
import ServiceCTA from "@/components/ServiceCTA"

const workflowsService = {
  title: "Digital Workflows",
  subtitle: "Streamlined Operations for Maximum Efficiency",
  description:
    "Transform your business processes with intelligent digital workflows that eliminate paperwork, reduce errors, and create seamless customer experiences.",
  features: [
    {
      title: "Digital Contract Management",
      description: "Paperless contract system with e-signatures, automated approvals, and secure document storage.",
      icon: "brain",
    },
    {
      title: "Automated Workflows",
      description:
        "Custom automation that handles routine tasks, approvals, and notifications without manual intervention.",
      icon: "network",
    },
    {
      title: "Document Management",
      description: "Centralized document storage with version control, search capabilities, and secure access.",
      icon: "analytics",
    },
    {
      title: "Process Optimization",
      description: "Continuous analysis and optimization of business processes for maximum efficiency.",
      icon: "chart",
    },
  ],
  process: [
    {
      step: 1,
      title: "Process Mapping",
      description: "Detailed analysis of your current workflows to identify optimization opportunities.",
    },
    {
      step: 2,
      title: "Digital Transformation",
      description: "Design and implementation of digital workflows tailored to your business needs.",
    },
    {
      step: 3,
      title: "Integration & Testing",
      description: "Seamless integration with existing systems and comprehensive testing.",
    },
    {
      step: 4,
      title: "Training & Optimization",
      description: "Team training and ongoing optimization to ensure maximum efficiency.",
    },
  ],
}

export default function WorkflowsPage() {
  return (
    <div className="pt-20">
      <ServiceDetailHero service={workflowsService} />
      <ServiceFeatures features={workflowsService.features} />
      <ServiceProcess process={workflowsService.process} />
      <ServiceCTA />
    </div>
  )
}
