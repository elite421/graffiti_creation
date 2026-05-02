"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "CEO",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    content: "graffitiCreation transformed our brand completely. Their team delivered a stunning logo and website that perfectly captures our company vision. Our online presence has never been stronger.",
    rating: 5,
  },
  {
    name: "Robert Thompson",
    role: "Marketing Director",
    company: "Global Retail Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    content: "The digital marketing campaign they created increased our leads by 300% in just three months. Their data-driven approach and creative execution exceeded all our expectations.",
    rating: 5,
  },
  {
    name: "Amanda Chen",
    role: "Founder",
    company: "Organic Beauty Co.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    content: "Working with graffitiCreation was an absolute pleasure. They designed our entire brand identity from scratch - from packaging to digital presence. Highly professional and creative team!",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Operations Manager",
    company: "Metro Logistics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    content: "Our new website designed by graffitiCreation has significantly improved our customer engagement. The SEO work they did has us ranking on the first page for our key terms.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Owner",
    company: "Boutique Fashion Studio",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    content: "The team at graffitiCreation understood my vision perfectly. They created a beautiful e-commerce website that has helped me reach customers worldwide. Sales have doubled since launch!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Director",
    company: "Premier Consulting Group",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    content: "Professional, responsive, and incredibly talented. graffitiCreation designed our complete corporate identity including business cards, letterheads, and a stunning website. Highly recommended!",
    rating: 5,
  },
]

export function TestimonialsSection() {
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
            TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Do not just take our word for it. Here is what our clients have to say 
            about working with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
