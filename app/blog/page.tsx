import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | graffitiCreation",
  description: "Read our latest articles and insights on digital marketing, design, and web development.",
}

export default function BlogPage() {
  return (
    <div className="pt-20 pb-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 pt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-gray-600">
            Insights, news, and tips from our experts.
          </p>
        </div>
        
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h2>
          <p className="text-gray-500">We are working on some amazing content. Check back later!</p>
        </div>
      </div>
    </div>
  )
}
