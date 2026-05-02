"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  CreditCard, 
  BookOpen, 
  Megaphone,
  CheckCircle,
  ArrowRight,
  Printer,
  Package,
  Palette
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: CreditCard,
    title: "Business Cards",
    description: "Premium business cards that make a lasting first impression. Various paper stocks and finishes available.",
    price: "From ₹7,999",
  },
  {
    icon: FileText,
    title: "Letterhead & Stationery",
    description: "Professional letterhead, envelopes, and stationery sets for consistent brand communication.",
    price: "From ₹11,999",
  },
  {
    icon: BookOpen,
    title: "Brochures & Catalogs",
    description: "Eye-catching brochures and product catalogs that showcase your offerings effectively.",
    price: "From ₹24,999",
  },
  {
    icon: Megaphone,
    title: "Flyers & Posters",
    description: "High-impact promotional materials for events, sales, and marketing campaigns.",
    price: "From ₹5,999",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description: "Custom packaging solutions that enhance product appeal and brand recognition.",
    price: "From ₹39,999",
  },
  {
    icon: Printer,
    title: "Marketing Collateral",
    description: "Coordinated print materials including rack cards, booklets, and presentation folders.",
    price: "Custom",
  },
]

const features = [
  {
    icon: Palette,
    title: "Custom Design",
    description: "Unique designs tailored to your brand identity and marketing goals.",
  },
  {
    icon: Printer,
    title: "Print-Ready Files",
    description: "Professional files optimized for printing with proper bleed and color profiles.",
  },
  {
    icon: Package,
    title: "Premium Quality",
    description: "High-resolution designs suitable for professional printing and reproduction.",
  },
]

const portfolio = [
  { name: "Business Cards", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=300&fit=crop" },
  { name: "Brochure Design", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop" },
  { name: "Letterhead", image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop" },
  { name: "Flyer Design", image: "https://images.unsplash.com/photo-1569516449771-41c89ee14ca6?w=400&h=300&fit=crop" },
]



export default function PrintDesignPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Printer className="w-6 h-6 text-orange-400" />
                <span className="text-orange-400 font-semibold">Print Design</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional Print Materials
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                High-quality print design services for business cards, stationery, brochures, 
                and all your marketing collateral needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-orange-900 hover:bg-gray-100" asChild>
                  <Link href="/contact">
                    Get a Quote
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
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Print Design Services
            </h2>
            <p className="text-gray-600">
              Professional print materials that make your brand stand out
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
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {service.price}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link href="/contact">
                      <Button variant="ghost" className="p-0 h-auto text-orange-600 hover:text-orange-700">
                        Learn More <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
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
              Recent Print Work
            </h2>
            <p className="text-gray-600">
              Browse our print design portfolio
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
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold">{item.name}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Print Design?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get professional print materials that make your brand memorable.
          </p>
          <Button size="lg" className="bg-white text-orange-900 hover:bg-gray-100" asChild>
            <Link href="/contact">
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
