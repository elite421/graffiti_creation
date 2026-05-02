import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | graffitiCreation",
  description: "Terms and conditions for using graffitiCreation services.",
}

export default function TermsPage() {
  return (
    <div className="pt-20 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto pt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-purple max-w-none text-gray-600">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
            <p className="mb-4">Permission is granted to temporarily view the materials on our website for personal, non-commercial transitory viewing only.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Disclaimer</h2>
            <p className="mb-4">The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitations</h2>
            <p className="mb-4">In no event shall we be liable for any damages arising out of the use or inability to use the materials on our website.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
