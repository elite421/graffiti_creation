"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw, Home, Bug } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <AlertTriangle className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Something Went Wrong
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg text-gray-600 mb-4 max-w-lg mx-auto"
          >
            We apologize, but an unexpected error has occurred. 
            Our team has been notified and is working to fix the issue.
          </motion.p>

          {error.digest && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-8"
            >
              <code className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-600 font-mono">
                Error ID: {error.digest}
              </code>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              onClick={reset}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8"
            >
              <RefreshCw className="mr-2 w-5 h-5" />
              Try Again
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

          {/* Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="border-t pt-8"
          >
            <p className="text-gray-500 mb-4">Need help?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700" asChild>
                <Link href="/contact">
                  <Bug className="mr-2 w-4 h-4" />
                  Report Issue
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700" asChild>
                <Link href="/support">Contact Support</Link>
              </Button>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-20 right-10 w-32 h-32 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
