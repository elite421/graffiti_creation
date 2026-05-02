"use client"

import { motion } from "framer-motion"
import { Shield, Lock, FileWarning, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Forbidden() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          {/* Lock Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-red-500/20">
              <Shield className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-6xl md:text-7xl font-bold mb-4"
          >
            403
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Access Forbidden
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-gray-400 mb-8 max-w-lg mx-auto"
          >
            You don&apos;t have permission to access this resource. 
            This area is restricted to authorized users only.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="mr-2 w-5 h-5" />
                Return Home
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8"
              asChild
            >
              <Link href="/login">
                <Lock className="mr-2 w-5 h-5" />
                Sign In
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-gray-500 text-sm">
              If you believe this is an error, please{" "}
              <Link href="/contact" className="text-red-400 hover:text-red-300">
                contact support
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
