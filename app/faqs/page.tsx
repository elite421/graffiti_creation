import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQs | graffitiCreation",
  description: "Frequently asked questions about our digital marketing, design, and web development services.",
}

export default function FAQsPage() {
  return (
    <div className="pt-20 pb-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 pt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about working with us.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">What services do you provide?</h3>
            <p className="text-gray-600">We provide comprehensive digital solutions including web design, logo design, digital marketing, SEO, and branding services.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">How long does a typical project take?</h3>
            <p className="text-gray-600">Timelines vary depending on the scope of the project. A logo design might take 1-2 weeks, while a full website build could take 4-8 weeks.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Do you offer ongoing support?</h3>
            <p className="text-gray-600">Yes, we offer maintenance and marketing retainers to ensure your digital presence continues to perform well after launch.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
