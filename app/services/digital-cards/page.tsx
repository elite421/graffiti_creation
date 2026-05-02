"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Smartphone, 
  QrCode, 
  Share2, 
  Contact,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  BarChart3,
  RefreshCw
} from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Smartphone,
    title: "Always Available",
    description: "Your digital card is accessible 24/7 from any device with a web browser.",
  },
  {
    icon: QrCode,
    title: "QR Code Integration",
    description: "Built-in QR code for quick sharing and scanning at networking events.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share via email, text, social media, or NFC with a single tap.",
  },
  {
    icon: Contact,
    title: "Contact Integration",
    description: "One-click save to phone contacts for seamless networking.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track views, clicks, and engagement with built-in analytics.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Updates",
    description: "Update your information instantly - no reprinting needed.",
  },
]

const packages = [
  {
    name: "Basic",
    price: "₹3,999",
    period: "/year",
    description: "Essential digital card for individuals",
    features: [
      "Custom digital card design",
      "Contact information",
      "Social media links",
      "QR code generation",
      "Mobile optimized",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "₹7,999",
    period: "/year",
    description: "Enhanced features for professionals",
    features: [
      "Everything in Basic",
      "Custom branding",
      "Portfolio/Gallery section",
      "Video introduction",
      "Analytics dashboard",
      "Click-to-call & email",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹14,999",
    period: "/year",
    description: "Team solution for businesses",
    features: [
      "Everything in Professional",
      "Multiple card designs",
      "Team management",
      "CRM integration",
      "Lead capture forms",
      "Advanced analytics",
      "API access",
      "White-label option",
    ],
    popular: false,
  },
]



export default function DigitalCardsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Smartphone className="w-6 h-6 text-violet-400" />
                <span className="text-violet-400 font-semibold">Digital Cards</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                The Future of Business Cards
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Modern digital business cards with QR codes and instant sharing. 
                Always up-to-date, eco-friendly, and accessible from any device.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-violet-900 hover:bg-gray-100" asChild>
                  <Link href="/contact">
                    Create Your Card
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white" asChild>
                  <Link href="#features">
                    Learn More
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-80 h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] border-8 border-gray-700 shadow-2xl mx-auto">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-700 rounded-b-xl"></div>
                <div className="p-6 pt-12 h-full">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white h-64">
                    <div className="w-16 h-16 bg-white/20 rounded-full mb-4"></div>
                    <h3 className="font-bold text-lg">Your Name</h3>
                    <p className="text-sm opacity-80">Your Position</p>
                    <div className="mt-4">
                      <QrCode className="w-24 h-24 mx-auto opacity-80" />
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Go Digital?
            </h2>
            <p className="text-gray-600">
              Modern features that traditional cards can&apos;t match
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
                    <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-violet-600" />
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

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple Pricing
            </h2>
            <p className="text-gray-600">
              Choose the plan that fits your needs
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
                <Card className={`h-full relative ${pkg.popular ? 'border-violet-500 shadow-xl' : ''}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600">
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
                      className={`w-full ${pkg.popular ? 'bg-violet-600 hover:bg-violet-700' : ''}`}
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Go Digital?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have switched to digital business cards.
          </p>
          <Button size="lg" className="bg-white text-violet-900 hover:bg-gray-100" asChild>
            <Link href="/contact">
              Create Your Card
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
