import Hero from "@/components/Hero"
import ServicesShowcase from "@/components/ServicesShowcase"
import WhyMinaret from "@/components/WhyMinaret"
import ProcessTimeline from "@/components/ProcessTimeline"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import CTASection from "@/components/CTASection"
import CalendlyScheduler from "@/components/CalendlyScheduler"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesShowcase />
      <WhyMinaret />
      <ProcessTimeline />
      <TestimonialsCarousel />
      <CalendlyScheduler />
      <CTASection />
    </>
  )
}