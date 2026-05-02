"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight } from "lucide-react"

const portfolioItems = [
  {
    title: "TechFlow Solutions",
    category: "Branding & Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Complete brand identity and responsive website for a SaaS company.",
    tags: ["Logo Design", "Web Design", "Branding"],
    link: "#",
  },
  {
    title: "GreenLeaf Organics",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    description: "Comprehensive digital marketing campaign for an organic food brand.",
    tags: ["SEO", "Social Media", "Content Marketing"],
    link: "#",
  },
  {
    title: "Metro Finance",
    category: "Logo & Print Design",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop",
    description: "Corporate identity and print collateral for a financial services firm.",
    tags: ["Logo", "Business Cards", "Stationery"],
    link: "#",
  },
  {
    title: "Urban Fitness",
    category: "Web & Social Media",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    description: "Dynamic website and social media presence for a fitness center.",
    tags: ["Web Design", "Social Media", "Photography"],
    link: "#",
  },
  {
    title: "Artisan Coffee Co.",
    category: "Branding & Packaging",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    description: "Artisan coffee brand identity and packaging design.",
    tags: ["Branding", "Packaging", "Logo Design"],
    link: "#",
  },
  {
    title: "SmartHome Living",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
    description: "SEO and content marketing strategy for smart home technology company.",
    tags: ["SEO", "Content Marketing", "PPC"],
    link: "#",
  },
]

export function PortfolioSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-purple-600 font-semibold mb-4"
          >
            OUR PORTFOLIO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Explore our latest work and see how we have helped businesses transform 
            their digital presence and achieve their goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <Link href={item.link}>
                          <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                            <ExternalLink className="mr-2 w-4 h-4" />
                            View Project
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-purple-600 font-medium">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
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
          <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50" asChild>
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
