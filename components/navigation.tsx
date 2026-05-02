"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Menu,
  X,
  Home,
  Briefcase,
  Image,
  Users,
  Mail,
  User,
  LogOut,
  LayoutDashboard,
  Palette,
  Sparkles,
  Search,
  TrendingUp,
  Monitor,
  CreditCard,
  FileText,
  Smartphone,
} from "lucide-react"

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  {
    href: "#",
    label: "Services",
    icon: Briefcase,
    children: [
      { href: "/services/digital-marketing", label: "Digital Marketing", icon: TrendingUp },
      { href: "/services/logo-design", label: "Logo Design", icon: Palette },
      { href: "/services/branding", label: "Branding", icon: Sparkles },
      { href: "/services/web-design", label: "Web Design", icon: Monitor },
      { href: "/services/seo", label: "SEO Services", icon: Search },
      { href: "/services/print-design", label: "Print Design", icon: FileText },
      { href: "/services/digital-cards", label: "Digital Cards", icon: CreditCard },
      { href: "/services/social-media", label: "Social Media", icon: Smartphone },
    ],
  },
  { href: "/portfolio", label: "Portfolio", icon: Image },
  { href: "/about", label: "About", icon: Users },
  { href: "/contact", label: "Contact", icon: Mail },
]

export function Navigation() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isSolid = !isHomePage || isScrolled

  if (pathname?.startsWith("/dashboard") || pathname?.startsWith("/admin")) {
    return null
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <span className={`text-2xl font-bold transition-colors ${
              isSolid ? "text-gray-900" : "text-white"
            }`}>
              graffiti<span className="text-purple-600">Creation</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.children ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-purple-600 ${
                        isSolid ? "text-gray-700" : "text-white"
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                    >
                      <span>{link.label}</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          <div className="p-4 space-y-2">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                              >
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                  <child.icon className="w-4 h-4 text-purple-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600">
                                  {child.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                      isSolid ? "text-gray-700" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar>
                      <AvatarImage src={session.user?.image || ""} />
                      <AvatarFallback className="bg-purple-100 text-purple-600">
                        {session.user?.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center gap-2 p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={session.user?.image || ""} />
                      <AvatarFallback className="bg-purple-100 text-purple-600 text-xs">
                        {session.user?.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{session.user?.name}</span>
                      <span className="text-xs text-muted-foreground">{session.user?.email}</span>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="cursor-pointer">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  {session.user?.role === "ADMIN" && (
                    <DropdownMenuItem asChild>
                      <Link href="/admin" className="cursor-pointer">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Admin Panel
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer text-red-600 focus:text-red-600"
                    onClick={() => signOut()}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button
                  variant="ghost"
                  className={`${
                    isSolid ? "text-gray-700" : "text-white"
                  } hover:text-purple-600`}
                  asChild
                >
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:opacity-90 text-white" asChild>
                  <Link href="/register">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isSolid ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isSolid ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white rounded-b-2xl shadow-xl"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.children ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="flex items-center justify-between w-full p-3 text-left rounded-lg hover:bg-purple-50"
                        >
                          <div className="flex items-center space-x-3">
                            <link.icon className="w-5 h-5 text-purple-600" />
                            <span className="font-medium text-gray-700">
                              {link.label}
                            </span>
                          </div>
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              isServicesOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <child.icon className="w-4 h-4 text-purple-500" />
                                  <span className="text-sm text-gray-600">
                                    {child.label}
                                  </span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <link.icon className="w-5 h-5 text-purple-600" />
                        <span className="font-medium text-gray-700">
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t">
                  {session ? (
                    <div className="space-y-2">
                      <Link
                        href="/dashboard"
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50"
                      >
                        <LayoutDashboard className="w-5 h-5 text-purple-600" />
                        <span className="font-medium text-gray-700">
                          Dashboard
                        </span>
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 w-full"
                      >
                        <LogOut className="w-5 h-5 text-red-600" />
                        <span className="font-medium text-red-600">
                          Log out
                        </span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Link href="/login">
                        <Button variant="outline" className="w-full">
                          Sign In
                        </Button>
                      </Link>
                      <Link href="/register">
                        <Button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
