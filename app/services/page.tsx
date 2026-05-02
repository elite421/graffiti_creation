import type { Metadata } from "next"
import { ServicesSection } from "@/components/sections/services-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Services - Digital Marketing & Design | graffitiCreation",
  description: "Explore our comprehensive digital services including marketing, branding, web design, SEO, and more. Professional solutions for your business growth.",
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to help your business thrive in the modern marketplace.
          </p>
        </div>
      </section>

      <ServicesSection />
      <CTASection />
    </div>
  )
}
