"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  Palette,
  Sparkles,
  Monitor,
  Search,
  FileText,
  CreditCard,
  Smartphone,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies that drive growth, engagement, and conversions across all digital channels.",
    features: ["SEO & SEM", "Content Marketing", "Email Campaigns", "Analytics"],
    href: "/services/digital-marketing",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Logo Design",
    description: "Unique, memorable logos that capture your brand essence and make lasting impressions on your audience.",
    features: ["Custom Design", "Multiple Concepts", "Vector Files", "Brand Guidelines"],
    href: "/services/logo-design",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Branding",
    description: "Complete brand identity systems that tell your story and differentiate you from competitors.",
    features: ["Brand Strategy", "Visual Identity", "Brand Voice", "Guidelines"],
    href: "/services/branding",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Monitor,
    title: "Web Design",
    description: "Stunning, responsive websites that deliver exceptional user experiences and drive conversions.",
    features: ["Custom Design", "Responsive", "E-commerce", "CMS Integration"],
    href: "/services/web-design",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Data-driven SEO strategies that improve rankings, increase visibility, and drive organic traffic.",
    features: ["Technical SEO", "Content Optimization", "Link Building", "Local SEO"],
    href: "/services/seo",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: FileText,
    title: "Print Design",
    description: "Professional print materials including business cards, letterheads, brochures, and marketing collateral.",
    features: ["Business Cards", "Letterheads", "Brochures", "Flyers"],
    href: "/services/print-design",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: CreditCard,
    title: "Digital Cards",
    description: "Modern digital business cards that can be shared instantly and updated in real-time.",
    features: ["Interactive", "QR Code", "Contact Integration", "Analytics"],
    href: "/services/digital-cards",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Smartphone,
    title: "Social Media",
    description: "Strategic social media management and content creation that builds community and drives engagement.",
    features: ["Content Creation", "Management", "Advertising", "Analytics"],
    href: "/services/social-media",
    color: "from-teal-500 to-cyan-500",
  },
]

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-purple-600 font-semibold mb-4"
          >
            OUR SERVICES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Creative Solutions for{' '}
            <span className="text-gradient">Digital Success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            From brand identity to digital marketing, we provide comprehensive creative 
            services that help your business stand out and succeed online.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group/btn" asChild>
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
