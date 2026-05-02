"use client"

import { motion } from "framer-motion"
import { Server, Clock, AlertCircle, RefreshCw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServiceUnavailable() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Server Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Server className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-6xl md:text-7xl font-bold text-gray-900 mb-4"
          >
            503
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Service Unavailable
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-gray-600 mb-4 max-w-lg mx-auto"
          >
            Our servers are currently experiencing high traffic or undergoing maintenance. 
            We&apos;re working to restore service as quickly as possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center gap-2 text-yellow-600 mb-8"
          >
            <Clock className="w-5 h-5" />
            <span>Estimated restoration: 15-30 minutes</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8"
            >
              <RefreshCw className="mr-2 w-5 h-5" />
              Retry
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 w-5 h-5" />
                Back to Home
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-yellow-100 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <p className="text-sm text-yellow-800 text-left">
                If the issue persists, please check our{" "}
                <Link href="/status" className="underline font-medium">
                  status page
                </Link>{" "}
                or{" "}
                <Link href="/contact" className="underline font-medium">
                  contact us
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
