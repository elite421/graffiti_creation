import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { AboutSection } from '@/components/sections/about-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'Digital Marketing & Creative Design Agency | graffitiCreation',
  description: 'graffitiCreation is a leading digital marketing and creative design agency. We offer logo design, branding, web design, SEO services, social media marketing, and more. Transform your business with us!',
  keywords: [
    'digital marketing agency',
    'logo design services',
    'branding agency',
    'web design company',
    'SEO services',
    'social media marketing',
    'graphic design',
    'business card design',
    'letterhead design',
    'digital business cards',
    'creative agency',
    'marketing agency',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'graffitiCreation - Digital Marketing & Creative Design Agency',
    description: 'Transform your business with our comprehensive digital solutions. From marketing to design, we deliver results that matter.',
    url: '/',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
