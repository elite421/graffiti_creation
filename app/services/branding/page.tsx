"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Sparkles, 
  Palette, 
  Type, 
  ImageIcon,
  CheckCircle,
  ArrowRight,
  BookOpen,
  FileText,
  Package
} from "lucide-react"
import Link from "next/link"

const deliverables = [
  {
    icon: Palette,
    title: "Brand Color Palette",
    description: "Primary, secondary, and accent colors with hex codes and usage guidelines.",
  },
  {
    icon: Type,
    title: "Typography System",
    description: "Curated font pairings with sizing, spacing, and hierarchy specifications.",
  },
  {
    icon: ImageIcon,
    title: "Visual Elements",
    description: "Patterns, textures, icons, and imagery style guide for consistent visuals.",
  },
  {
    icon: BookOpen,
    title: "Brand Guidelines",
    description: "Comprehensive brand book covering dos and don'ts, applications, and examples.",
  },
  {
    icon: FileText,
    title: "Stationery Design",
    description: "Business cards, letterhead, envelopes, and email signature templates.",
  },
  {
    icon: Package,
    title: "Marketing Collateral",
    description: "Brochures, flyers, presentation templates, and social media templates.",
  },
]

const packages = [
  {
    name: "Brand Starter",
    price: "₹1,19,999",
    description: "Essential branding for new businesses",
    features: [
      "Logo design (3 concepts)",
      "Brand color palette",
      "Typography selection",
      "Basic brand guidelines (PDF)",
      "Business card design",
      "Social media templates",
    ],
    deliverables: "10+ items",
    popular: false,
  },
  {
    name: "Brand Professional",
    price: "₹2,79,999",
    description: "Complete identity for growing brands",
    features: [
      "Logo design (6 concepts)",
      "Complete visual identity",
      "Comprehensive brand guidelines",
      "Stationery suite design",
      "Marketing collateral templates",
      "Brand strategy session",
      "Social media brand kit",
    ],
    deliverables: "25+ items",
    popular: true,
  },
  {
    name: "Brand Enterprise",
    price: "₹5,49,999",
    description: "Full rebrand for established companies",
    features: [
      "Logo design (unlimited concepts)",
      "Complete brand ecosystem",
      "Digital brand guidelines (web-based)",
      "Full stationery & collateral suite",
      "Brand strategy & positioning",
      "Packaging design concepts",
      "Brand launch strategy",
      "1 year brand support",
    ],
    deliverables: "50+ items",
    popular: false,
  },
]

const process = [
  { step: "01", title: "Discovery", desc: "Brand audit, competitor analysis, stakeholder interviews" },
  { step: "02", title: "Strategy", desc: "Brand positioning, personality, messaging framework" },
  { step: "03", title: "Design", desc: "Visual identity development and refinement" },
  { step: "04", title: "Delivery", desc: "Brand guidelines, assets, and launch support" },
]



export default function BrandingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-pink-900 via-rose-900 to-orange-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-pink-400" />
                <span className="text-pink-400 font-semibold">Branding</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Build a Brand That Resonates
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Complete brand identity systems that tell your story, differentiate you from 
                competitors, and connect with your target audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-pink-900 hover:bg-gray-100" asChild>
                  <Link href="/contact">
                    Start Your Brand Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white" asChild>
                  <Link href="/portfolio">
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Brand Deliverables
            </h2>
            <p className="text-gray-600">
              Everything you need for a consistent, professional brand presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Branding Packages
            </h2>
            <p className="text-gray-600">
              Choose the level of branding support you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full relative ${pkg.popular ? 'border-pink-500 shadow-xl' : ''}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-600">
                      Most Popular
                    </Badge>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                      <Package className="w-4 h-4" />
                      {pkg.deliverables}
                    </div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${pkg.popular ? 'bg-pink-600 hover:bg-pink-700' : ''}`}
                      variant={pkg.popular ? 'default' : 'outline'}
                      asChild
                    >
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Branding Process
            </h2>
            <p className="text-gray-600">
              A strategic approach to building memorable brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-pink-900 via-rose-900 to-orange-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us create a brand identity that captures your essence and resonates with your audience.
          </p>
          <Button size="lg" className="bg-white text-pink-900 hover:bg-gray-100" asChild>
            <Link href="/contact">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
