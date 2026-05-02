"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Share2, 
  Instagram, 
  Facebook, 
  Twitter,
  Video,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  MessageCircle,
  BarChart3
} from "lucide-react"
import Link from "next/link"

const platforms = [
  {
    icon: Instagram,
    name: "Instagram",
    description: "Visual storytelling, Reels, Stories, and feed management",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Facebook,
    name: "Facebook",
    description: "Business pages, groups, advertising, and community building",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: Twitter,
    name: "Twitter/X",
    description: "Real-time engagement, trending topics, and brand voice",
    color: "from-sky-400 to-sky-600",
  },
  {
    icon: Video,
    name: "TikTok",
    description: "Short-form video content and viral marketing",
    color: "from-black to-gray-800",
  },
  {
    icon: MessageCircle,
    name: "LinkedIn",
    description: "B2B marketing, professional networking, and thought leadership",
    color: "from-blue-700 to-blue-900",
  },
  {
    icon: Share2,
    name: "YouTube",
    description: "Long-form video content and channel management",
    color: "from-red-600 to-red-800",
  },
]

const services = [
  {
    icon: TrendingUp,
    title: "Strategy Development",
    description: "Custom social media strategies aligned with your business goals.",
  },
  {
    icon: Users,
    title: "Community Management",
    description: "Engage with your audience, respond to comments, and build relationships.",
  },
  {
    icon: Video,
    title: "Content Creation",
    description: "High-quality graphics, videos, and copy tailored for each platform.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Track performance metrics and optimize for better results.",
  },
]

const packages = [
  {
    name: "Starter",
    price: "₹54,999",
    period: "/month",
    description: "Perfect for small businesses starting out",
    features: [
      "2 social platforms",
      "12 posts per month",
      "Basic content creation",
      "Community management",
      "Monthly analytics report",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹1,19,999",
    period: "/month",
    description: "For businesses ready to scale their presence",
    features: [
      "4 social platforms",
      "20 posts per month",
      "Advanced content creation",
      "Stories/Reels management",
      "Weekly analytics reports",
      "Social media advertising",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹2,49,999",
    period: "/month",
    description: "Comprehensive solution for maximum impact",
    features: [
      "All major platforms",
      "Daily posting schedule",
      "Premium content + video",
      "Influencer outreach",
      "24/7 community management",
      "Advanced advertising campaigns",
      "Custom strategy sessions",
      "Dedicated account manager",
    ],
    popular: false,
  },
]



export default function SocialMediaPage() {
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
                <Share2 className="w-6 h-6 text-pink-400" />
                <span className="text-pink-400 font-semibold">Social Media</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Social Media That Converts
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Strategic social media management that builds your brand, engages your 
                audience, and drives real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-pink-900 hover:bg-gray-100" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white" asChild>
                  <Link href="#platforms">
                    View Platforms
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Platforms We Manage
            </h2>
            <p className="text-gray-600">
              Expert management across all major social platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${platform.color} rounded-lg flex items-center justify-center mb-4`}>
                      <platform.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                    <p className="text-gray-600">{platform.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-600">
              Everything you need for social media success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-pink-600" />
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

      {/* Pricing */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Management Packages
            </h2>
            <p className="text-gray-600">
              Choose the level of support you need
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-pink-900 via-rose-900 to-orange-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Social Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you build a social media presence that drives real business results.
          </p>
          <Button size="lg" className="bg-white text-pink-900 hover:bg-gray-100" asChild>
            <Link href="/contact">
              Start Your Campaign
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
