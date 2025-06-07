"use client"

import ServiceDetailHero from "@/components/ServiceDetailHero"
import ServiceFeatures from "@/components/ServiceFeatures"
import ServiceProcess from "@/components/ServiceProcess"
import ServiceCTA from "@/components/ServiceCTA"

const seoService = {
  title: "SEO Excellence",
  subtitle: "Dominate Local Search Results",
  description:
    "Comprehensive SEO strategies that position your HVAC business at the top of search results, attracting high-quality leads and establishing market authority.",
  features: [
    {
      title: "Local SEO Mastery",
      description:
        "Optimize your presence for local searches with advanced geo-targeting and location-based optimization strategies.",
      icon: "chart",
    },
    {
      title: "Google My Business Optimization",
      description:
        "Complete optimization of your Google My Business profile to maximize visibility and customer engagement.",
      icon: "network",
    },
    {
      title: "Content Strategy",
      description:
        "Strategic content creation that positions you as the local HVAC authority and drives organic traffic.",
      icon: "brain",
    },
    {
      title: "Technical SEO",
      description: "Advanced technical optimizations that improve site speed, mobile experience, and search rankings.",
      icon: "analytics",
    },
  ],
  process: [
    {
      step: 1,
      title: "SEO Audit & Analysis",
      description:
        "Comprehensive analysis of your current SEO performance and identification of optimization opportunities.",
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Creation of a customized SEO strategy tailored to your local market and business goals.",
    },
    {
      step: 3,
      title: "Implementation & Optimization",
      description: "Systematic implementation of SEO improvements across all digital touchpoints.",
    },
    {
      step: 4,
      title: "Monitoring & Refinement",
      description: "Continuous monitoring and refinement to maintain and improve search rankings.",
    },
  ],
}

export default function SEOPage() {
  return (
    <div className="pt-20">
      <ServiceDetailHero service={seoService} />
      <ServiceFeatures features={seoService.features} />
      <ServiceProcess process={seoService.process} />
      <ServiceCTA />
    </div>
  )
}
