"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg text-gray-600 mb-8 max-w-lg mx-auto"
          >
            Oops! The page you&apos;re looking for seems to have vanished into thin air. 
            It might have been moved, deleted, or never existed.
          </motion.p>

          {/* Animated Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-8"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 w-5 h-5" />
                Back to Home
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="px-8"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="border-t pt-8"
          >
            <p className="text-gray-500 mb-4">Popular destinations:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700" asChild>
                <Link href="/services">Services</Link>
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700" asChild>
                <Link href="/portfolio">Portfolio</Link>
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700" asChild>
                <Link href="/about">About Us</Link>
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
