"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Monitor, 
  Code, 
  Smartphone, 
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Layout,
  Database
} from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Layout,
    title: "Custom Design",
    description: "Unique, tailor-made designs that reflect your brand and captivate your audience.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Websites that look and function perfectly on all devices, from desktop to mobile.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Well-structured, maintainable code following industry best practices.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized for speed with excellent Core Web Vitals scores.",
  },
  {
    icon: Database,
    title: "CMS Integration",
    description: "Easy-to-use content management systems for effortless updates.",
  },
  {
    icon: Globe,
    title: "SEO Ready",
    description: "Built with search engine optimization in mind from the ground up.",
  },
]

const packages = [
  {
    name: "Landing Page",
    price: "₹79,999",
    description: "Single-page website for products or services",
    features: [
      "Custom landing page design",
      "Mobile responsive",
      "Contact form integration",
      "Basic SEO setup",
      "1 round of revisions",
      "2 weeks delivery",
    ],
    popular: false,
  },
  {
    name: "Business Website",
    price: "₹2,49,999",
    description: "Multi-page website for established businesses",
    features: [
      "Up to 5 custom pages",
      "CMS integration (WordPress/Strapi)",
      "Blog setup",
      "Advanced SEO optimization",
      "Google Analytics setup",
      "3 rounds of revisions",
      "4-6 weeks delivery",
    ],
    popular: true,
  },
  {
    name: "E-Commerce",
    price: "₹4,99,999",
    description: "Full-featured online store",
    features: [
      "Custom store design",
      "Shopify/WooCommerce setup",
      "Payment gateway integration",
      "Product catalog (up to 50)",
      "Inventory management",
      "User accounts & checkout",
      "Email notifications",
      "6-8 weeks delivery",
    ],
    popular: false,
  },
]

const technologies = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "WordPress", "Shopify", "Node.js", "PostgreSQL"
]



export default function WebDesignPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Monitor className="w-6 h-6 text-indigo-400" />
                <span className="text-indigo-400 font-semibold">Web Design</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Websites That Drive Results
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Stunning, responsive websites built with modern technologies to help your 
                business stand out and convert visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100" asChild>
                  <Link href="/contact">
                    Start Your Website
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white" asChild>
                  <Link href="/portfolio">
                    View Our Work
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Modern Web Development
            </h2>
            <p className="text-gray-600">
              Built with the latest technologies for performance and scalability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8">Technologies We Use</p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Website Packages
            </h2>
            <p className="text-gray-600">
              Solutions for every stage of your business
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
                <Card className={`h-full relative ${pkg.popular ? 'border-indigo-500 shadow-xl' : ''}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600">
                      Most Popular
                    </Badge>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${pkg.popular ? 'bg-indigo-600 hover:bg-indigo-700' : ''}`}
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a New Website?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us build a website that helps your business grow and succeed online.
          </p>
          <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100" asChild>
            <Link href="/contact">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
