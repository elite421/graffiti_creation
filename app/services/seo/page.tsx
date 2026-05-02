"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  Target,
  CheckCircle,
  ArrowRight,
  Globe,
  FileText,
  Zap,
  Award
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Search,
    title: "Technical SEO",
    description: "Website audits, speed optimization, mobile-friendliness, and crawl error fixes.",
  },
  {
    icon: FileText,
    title: "Content Optimization",
    description: "Keyword research, content strategy, and on-page optimization for better rankings.",
  },
  {
    icon: Globe,
    title: "Local SEO",
    description: "Google Business Profile optimization, local citations, and location-based targeting.",
  },
  {
    icon: Target,
    title: "Link Building",
    description: "Quality backlink acquisition through outreach, content marketing, and PR.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive tracking, monthly reports, and data-driven recommendations.",
  },
  {
    icon: TrendingUp,
    title: "Competitor Analysis",
    description: "In-depth analysis of competitors' strategies and opportunities for outranking.",
  },
]

const packages = [
  {
    name: "SEO Starter",
    price: "₹64,999",
    period: "/month",
    description: "Essential SEO for small businesses",
    features: [
      "Website technical audit",
      "10 target keywords",
      "On-page optimization",
      "Google Analytics setup",
      "Monthly ranking report",
      "Content recommendations",
    ],
    popular: false,
  },
  {
    name: "SEO Growth",
    price: "₹1,49,999",
    period: "/month",
    description: "Comprehensive SEO for growing businesses",
    features: [
      "Everything in Starter",
      "30 target keywords",
      "Content creation (4 articles/month)",
      "Link building (5 links/month)",
      "Local SEO optimization",
      "Bi-weekly strategy calls",
      "Competitor monitoring",
    ],
    popular: true,
  },
  {
    name: "SEO Enterprise",
    price: "₹3,99,999",
    period: "/month",
    description: "Advanced SEO for competitive markets",
    features: [
      "Everything in Growth",
      "Unlimited keywords",
      "Content creation (10 articles/month)",
      "Premium link building",
      "Technical SEO support",
      "Weekly strategy calls",
      "Custom reporting dashboard",
      "Priority support",
    ],
    popular: false,
  },
]

const results = [
  { label: "Average Traffic Increase", value: "+150%" },
  { label: "First Page Rankings", value: "85%" },
  { label: "Client Retention Rate", value: "95%" },
  { label: "Keywords Ranked", value: "10K+" },
]



export default function SEOPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Search className="w-6 h-6 text-green-400" />
                <span className="text-green-400 font-semibold">SEO Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Rank Higher, Grow Faster
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Data-driven SEO strategies that improve your search visibility, drive organic 
                traffic, and deliver measurable business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100" asChild>
                  <Link href="/contact">
                    Get Free SEO Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white" asChild>
                  <Link href="/portfolio">
                    View Results
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive SEO Services
            </h2>
            <p className="text-gray-600">
              Everything you need to dominate search results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
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
              SEO Packages
            </h2>
            <p className="text-gray-600">
              Flexible plans for every business size
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
                <Card className={`h-full relative ${pkg.popular ? 'border-green-500 shadow-xl' : ''}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600">
                      Most Popular
                    </Badge>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-gray-500">{pkg.period}</span>
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
                      className={`w-full ${pkg.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}
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
      <section className="py-24 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Boost Your Rankings?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free SEO audit and discover opportunities to improve your search visibility.
          </p>
          <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100" asChild>
            <Link href="/contact">
              Request Free Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
