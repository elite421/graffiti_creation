import type { Metadata } from "next"
import { AboutSection } from "@/components/sections/about-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "About Us - Digital Marketing & Design Agency | graffitiCreation",
  description: "Learn about graffitiCreation, our mission, values, and the team behind our award-winning digital marketing and design services.",
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are a team of passionate creatives dedicated to transforming businesses through innovative digital solutions.
          </p>
        </div>
      </section>

      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
