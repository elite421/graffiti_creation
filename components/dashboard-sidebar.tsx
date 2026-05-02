"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  Globe, 
  ShieldCheck,
  Palette
} from "lucide-react"

export function DashboardSidebar() {
  const { data: session } = useSession()
  const pathname = usePathname()

  if (!pathname?.startsWith("/dashboard") && !pathname?.startsWith("/admin")) {
    return null
  }

  const isAdmin = session?.user?.role === "ADMIN"

  return (
    <div className="hidden md:flex flex-col w-64 bg-gray-900 text-white min-h-screen fixed left-0 top-0">
      <div className="p-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Palette className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">
            graffiti<span className="text-purple-400">Creation</span>
          </span>
        </Link>
      </div>

      <div className="px-4 py-2">
        <div className="text-xs text-gray-400 uppercase tracking-wider mb-2 px-2">Navigation</div>
        <nav className="space-y-1">
          <Link 
            href="/dashboard"
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              pathname === "/dashboard" ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>My Dashboard</span>
          </Link>
          
          {isAdmin && (
            <Link 
              href="/admin"
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                pathname === "/admin" ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <ShieldCheck className="w-5 h-5" />
              <span>Admin Portal</span>
            </Link>
          )}

          <Link 
            href="/"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span>Back to Website</span>
          </Link>
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-gray-800">
        <div className="flex items-center space-x-3 mb-4 px-2">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold">
            {session?.user?.name?.charAt(0) || "U"}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{session?.user?.name || "User"}</span>
            <span className="text-xs text-gray-400 truncate max-w-[140px]">{session?.user?.email}</span>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="flex items-center space-x-3 px-3 py-2 w-full rounded-lg text-red-400 hover:bg-red-400/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  )
}
