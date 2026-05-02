"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Mail, 
  Globe, 
  Megaphone,
  CheckCircle,
  ArrowRight,
  LineChart,
  PieChart,
  Users,
  Search
} from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Data-driven marketing strategies tailored to your business goals and target audience.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive tracking and reporting to measure campaign performance and ROI.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Engaging email campaigns that nurture leads and drive conversions.",
  },
  {
    icon: Globe,
    title: "Content Marketing",
    description: "Compelling content that attracts, engages, and converts your audience.",
  },
  {
    icon: Megaphone,
    title: "PPC Advertising",
    description: "Targeted pay-per-click campaigns on Google, Facebook, and other platforms.",
  },
  {
    icon: LineChart,
    title: "Conversion Optimization",
    description: "CRO strategies to maximize the value of your existing traffic.",
  },
]

const packages = [
  {
    name: "Starter",
    price: "₹79,999",
    period: "/month",
    description: "Perfect for small businesses starting their digital journey",
    features: [
      "Social media management (2 platforms)",
      "Basic SEO optimization",
      "Monthly performance report",
      "Email support",
      "2 blog posts per month",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹1,99,999",
    period: "/month",
    description: "Ideal for growing businesses ready to scale",
    features: [
      "Social media management (4 platforms)",
      "Advanced SEO strategy",
      "PPC campaign management",
      "Weekly performance reports",
      "Priority support",
      "4 blog posts per month",
      "Email marketing campaigns",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹3,99,999",
    period: "/month",
    description: "Comprehensive solution for established businesses",
    features: [
      "Full social media management",
      "Enterprise SEO & content strategy",
      "Multi-channel PPC campaigns",
      "Daily monitoring & optimization",
      "24/7 dedicated support",
      "Unlimited content creation",
      "Marketing automation",
      "Custom integrations",
    ],
    popular: false,
  },
]

const stats = [
  { value: "300%", label: "Average ROI Increase" },
  { value: "50K+", label: "Leads Generated" },
  { value: "200%", label: "Traffic Growth" },
  { value: "95%", label: "Client Retention" },
]



export default function DigitalMarketingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <span className="text-blue-400 font-semibold">Digital Marketing</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Drive Growth with Data-Driven Marketing
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your online presence with comprehensive digital marketing strategies 
                that deliver measurable results and sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100" asChild>
                  <Link href="/contact">
                    Get Free Consultation
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

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Marketing Solutions
            </h2>
            <p className="text-gray-600">
              Everything you need to succeed in the digital landscape
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
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
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

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Marketing Packages
            </h2>
            <p className="text-gray-600">
              Choose the plan that fits your business needs
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
                <Card className={`h-full relative ${pkg.popular ? 'border-blue-500 shadow-xl' : ''}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600">
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
                      className={`w-full ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
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
              Our Process
            </h2>
            <p className="text-gray-600">
              A proven methodology for marketing success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understand your business & goals" },
              { step: "02", title: "Strategy", desc: "Develop customized marketing plan" },
              { step: "03", title: "Execution", desc: "Implement campaigns & optimize" },
              { step: "04", title: "Growth", desc: "Scale & achieve sustainable results" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how we can help you achieve your marketing goals.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100" asChild>
            <Link href="/contact">
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
