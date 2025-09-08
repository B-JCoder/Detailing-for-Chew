import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { TestimonialsSection } from "@/components/Testimonials"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        {/* <PricingSection /> */}
        <GallerySection />
         <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
