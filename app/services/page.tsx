import ServicesGrid from "@/components/ServicesGrid"
import ServiceHero from "@/components/ServiceHero"

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServiceHero />
      <ServicesGrid />
    </div>
  )
}
