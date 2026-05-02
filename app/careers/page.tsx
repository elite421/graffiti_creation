import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers | graffitiCreation",
  description: "Join our team of creative professionals and help build the future of digital experiences.",
}

export default function CareersPage() {
  return (
    <div className="pt-20 pb-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 pt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600">
            Build your career with a team of passionate creators and digital strategists.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Open Positions Currently</h2>
          <p className="text-gray-500 mb-8">
            We are always looking for talented individuals. Feel free to send your resume to our email!
          </p>
          <a href="mailto:contact@graffiticreation.com" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-purple-600 text-white hover:bg-purple-700 h-10 px-8 py-2">
            Send Resume
          </a>
        </div>
      </div>
    </div>
  )
}
