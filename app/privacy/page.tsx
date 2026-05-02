import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | graffitiCreation",
  description: "Privacy policy and data protection guidelines for graffitiCreation.",
}

export default function PrivacyPage() {
  return (
    <div className="pt-20 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto pt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-purple max-w-none text-gray-600">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us when you fill out a form, request support, or communicate with us.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
            <p className="mb-4">We do not share your personal information with third parties except as described in this privacy policy.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at contact@graffiticreation.com.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
