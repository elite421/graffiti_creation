"use client"

export default function ProfilePage() {
  return (
    <div className="pt-20 pb-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto pt-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-32"></div>
            <div className="px-8 pb-8">
              <div className="relative -mt-16 mb-6">
                <div className="w-32 h-32 bg-white rounded-full p-2">
                  <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-4xl font-bold">
                    U
                  </div>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2">User Profile</h1>
              <p className="text-gray-600 mb-8">Manage your account settings and preferences.</p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="John Doe" disabled />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="user@example.com" disabled />
                  </div>
                </div>
                <div>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
