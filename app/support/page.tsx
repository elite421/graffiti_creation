"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  HelpCircle, 
  MessageSquare, 
  FileText, 
  Video, 
  Mail,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  Search,
  BookOpen,
  Users,
  Zap
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const faqs = [
  {
    question: "What services does graffitiCreation offer?",
    answer: "We offer a comprehensive range of digital services including digital marketing, logo design, branding, web design and development, SEO optimization, print design, digital business cards, and social media marketing.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. Logo designs typically take 1-2 weeks, websites 4-8 weeks, and comprehensive branding projects 6-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing based on project scope and requirements. We provide detailed quotes after understanding your needs. Contact us for a free consultation and estimate.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes! We offer various support packages including website maintenance, hosting, content updates, and continued marketing services. We believe in building long-term relationships with our clients.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer: "Absolutely! Visit our portfolio page to see case studies of our work across various industries. We can also provide specific examples relevant to your project during our consultation.",
  },
  {
    question: "What is your revision policy?",
    answer: "We include 2-3 rounds of revisions in all our projects to ensure you're completely satisfied with the final result. Additional revisions can be accommodated if needed.",
  },
]

const supportOptions = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team in real-time during business hours.",
    action: "Start Chat",
    link: "#chat",
    available: "9AM - 6PM EST",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email and we'll respond within 24 hours.",
    action: "Send Email",
    link: "mailto:support@graffiticreation.com",
    available: "24/7",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our support team.",
    action: "Call Now",
    link: "tel:+15551234567",
    available: "Mon-Fri, 9AM-6PM EST",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Browse our comprehensive knowledge base and guides.",
    action: "View Docs",
    link: "#docs",
    available: "Always Available",
  },
]

const resources = [
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Detailed articles and guides",
    link: "#",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    link: "#",
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Connect with other users",
    link: "#",
  },
  {
    icon: Zap,
    title: "System Status",
    description: "Check our service status",
    link: "#",
  },
]

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Help?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Find answers, get support, and connect with our team. We're here to help you succeed.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get Support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the support option that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <option.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4" />
                      {option.available}
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={option.link}>
                        {option.action}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-lg pr-4">{faq.question}</span>
                      <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                        <ArrowRight className="w-5 h-5 rotate-90" />
                      </span>
                    </button>
                    {openFaq === index && (
                      <CardContent className="pt-0 pb-6 px-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No FAQs found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our resources to get the most out of our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={resource.link}>
                  <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <resource.icon className="w-10 h-10 text-purple-600 mb-4" />
                      <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                      <p className="text-gray-600 text-sm">{resource.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our support team is ready to assist you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100" asChild>
              <Link href="/contact">
                <Mail className="mr-2 w-5 h-5" />
                Contact Us
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/dashboard">
                <MessageSquare className="mr-2 w-5 h-5" />
                Open Ticket
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
