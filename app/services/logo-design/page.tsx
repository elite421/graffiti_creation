"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Palette, 
  Sparkles, 
  Layers, 
  PenTool, 
  FileImage,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Award
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    icon: Sparkles,
    title: "Unique Concepts",
    description: "Multiple original logo concepts tailored to your brand identity and target audience.",
  },
  {
    icon: Layers,
    title: "Scalable Design",
    description: "Vector-based logos that look perfect at any size, from business cards to billboards.",
  },
  {
    icon: PenTool,
    title: "Custom Typography",
    description: "Custom lettering and font selection that perfectly represents your brand personality.",
  },
  {
    icon: FileImage,
    title: "Full File Package",
    description: "Receive all file formats including AI, EPS, PDF, PNG, and JPG for every use case.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising quality - initial concepts in 3-5 business days.",
  },
  {
    icon: Award,
    title: "Unlimited Revisions",
    description: "We work until you're 100% satisfied with your final logo design.",
  },
]

const packages = [
  {
    name: "Basic Logo",
    price: "₹24,999",
    description: "Perfect for startups and small businesses",
    features: [
      "2 initial logo concepts",
      "3 revision rounds",
      "Full color & black/white versions",
      "Web-ready files (PNG, JPG)",
      "Ownership rights",
    ],
    delivery: "5 business days",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹49,999",
    description: "Comprehensive branding solution",
    features: [
      "5 initial logo concepts",
      "Unlimited revisions",
      "Full brand color palette",
      "All file formats including vector",
      "Social media kit",
      "Business card design",
    ],
    delivery: "7 business days",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹99,999",
    description: "Complete brand identity package",
    features: [
      "8+ premium logo concepts",
      "Unlimited revisions",
      "Complete brand guidelines",
      "Stationery design suite",
      "Brand strategy session",
      "Priority support",
    ],
    delivery: "10-14 business days",
    popular: false,
  },
]

const portfolio = [
  { name: "TechStart Inc.", category: "Technology", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop" },
  { name: "GreenLife Organics", category: "Health & Wellness", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop" },
  { name: "Urban Fitness", category: "Fitness", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop" },
  { name: "Artisan Coffee Co.", category: "Food & Beverage", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop" },
]

export default function LogoDesignPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Palette className="w-6 h-6 text-pink-400" />
                <span className="text-pink-400 font-semibold">Logo Design</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Create a Logo That Stands Out
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Professional custom logo design that captures your brand essence and makes 
                a lasting impression on your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100" asChild>
                  <Link href="/contact">
                    Start Your Logo Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white" asChild>
                  <Link href="#portfolio">
                    View Portfolio
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {portfolio.slice(0, 2).map((item, index) => (
                  <div key={item.name} className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                ))}
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
              Why Choose Our Logo Design?
            </h2>
            <p className="text-gray-600">
              Professional logos that make your brand unforgettable
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
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-purple-600" />
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
              Logo Design Packages
            </h2>
            <p className="text-gray-600">
              Choose the package that fits your needs
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
                <Card className={`h-full relative ${pkg.popular ? 'border-purple-500 shadow-xl' : ''}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600">
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
                      <Zap className="w-4 h-4" />
                      Delivery: {pkg.delivery}
                    </div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button 
                        className={`w-full ${pkg.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                        variant={pkg.popular ? 'default' : 'outline'}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Logo Designs
            </h2>
            <p className="text-gray-600">
              Browse some of our favorite logo projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-sm text-gray-300">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a New Logo?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us create a logo that perfectly represents your brand and makes you stand out from the competition.
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100" asChild>
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
