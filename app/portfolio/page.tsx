"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight, Filter } from "lucide-react"
import { useState } from "react"

const categories = ["All", "Branding", "Web Design", "Digital Marketing", "Print Design"]

const portfolioItems = [
  {
    title: "TechFlow Solutions",
    category: "Branding",
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
    category: "Print Design",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop",
    description: "Corporate identity and print collateral for a financial services firm.",
    tags: ["Logo", "Business Cards", "Stationery"],
    link: "#",
  },
  {
    title: "Urban Fitness",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    description: "Dynamic website and social media presence for a fitness center.",
    tags: ["Web Design", "Social Media", "Photography"],
    link: "#",
  },
  {
    title: "Artisan Coffee Co.",
    category: "Branding",
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
  {
    title: "Bloom Boutique",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    description: "E-commerce website for a fashion boutique with custom shopping experience.",
    tags: ["E-commerce", "Web Design", "UX/UI"],
    link: "#",
  },
  {
    title: "Peak Performance",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    description: "Complete rebrand for a corporate consulting firm.",
    tags: ["Rebranding", "Strategy", "Identity"],
    link: "#",
  },
  {
    title: "Coastal Resorts",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    description: "Digital presence transformation for luxury resort chain.",
    tags: ["Web Design", "SEO", "Social Media"],
    link: "#",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our latest projects and see how we have helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <Filter className="w-5 h-5 text-gray-500 mr-2 self-center" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
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
                          <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                            <Link href={item.link}>
                              <ExternalLink className="mr-2 w-4 h-4" />
                              View Project
                            </Link>
                          </Button>
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

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
