"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Package,
  Download,
  MessageSquare,
  User,
  FileText,
  Clock,
  ShoppingCart,
  CreditCard,
  Send,
  X,
  CheckCircle,
  IndianRupee,
} from "lucide-react"

/* ───────── mock data ───────── */
const orders = [
  { id: "ORD-001", service: "Logo Design Package", status: "Pending Delivery", progress: 90, date: "2024-01-15", amount: "24,999", paymentStatus: "Paid" },
  { id: "ORD-002", service: "Website Redesign", status: "In Progress", progress: 45, date: "2024-01-10", amount: "99,999", paymentStatus: "Paid" },
  { id: "ORD-003", service: "SEO Package Monthly", status: "Payment Pending", progress: 0, date: "2024-01-20", amount: "64,999", paymentStatus: "Pending" },
]

const downloads = [
  { id: 1, name: "Logo_Final_Version.pdf", size: "2.4 MB", date: "2024-01-12", type: "PDF" },
  { id: 2, name: "Brand_Guidelines.pdf", size: "5.1 MB", date: "2024-01-12", type: "PDF" },
  { id: 3, name: "Social_Media_Templates.zip", size: "45.2 MB", date: "2024-01-12", type: "ZIP" },
]

const servicePackages = [
  { id: 1, name: "Logo Design Starter", price: "24,999", desc: "Professional logo with 3 concepts & unlimited revisions", category: "Design" },
  { id: 2, name: "Website Redesign Basic", price: "99,999", desc: "Modern responsive website up to 10 pages", category: "Development" },
  { id: 3, name: "SEO Package Monthly", price: "64,999", desc: "Full on-page & off-page SEO with monthly reports", category: "Marketing" },
  { id: 4, name: "Social Media Growth", price: "1,19,999", desc: "30 posts/month with ads management & analytics", category: "Marketing" },
  { id: 5, name: "Complete Branding Pro", price: "3,49,999", desc: "Logo, brand guide, stationery, social media kit", category: "Design" },
  { id: 6, name: "Digital Marketing Starter", price: "79,999", desc: "Google Ads + Meta Ads setup & management", category: "Marketing" },
  { id: 7, name: "Print Design (Brochure)", price: "11,999", desc: "Bi-fold / Tri-fold brochure design, print-ready", category: "Design" },
  { id: 8, name: "Digital Cards Regular", price: "3,999", desc: "Interactive digital business card with QR", category: "Design" },
]

const chatMessages = [
  { id: 1, sender: "admin", text: "Hello! Your logo design project is progressing well. We have 2 concepts ready for your review.", time: "10:30 AM" },
  { id: 2, sender: "user", text: "Great! Can you share the concepts? I'd love to see them.", time: "10:35 AM" },
  { id: 3, sender: "admin", text: "Absolutely! I've uploaded them to your Downloads section. Please check and let me know your feedback.", time: "10:40 AM" },
]

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<typeof servicePackages[0] | null>(null)
  const [projectDescription, setProjectDescription] = useState("")
  const [projectType, setProjectType] = useState("")
  const [showPaymentQR, setShowPaymentQR] = useState(false)
  const [messages, setMessages] = useState(chatMessages)
  const [newMessage, setNewMessage] = useState("")

  if (status === "loading") {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600"></div>
        </div>
      </DashboardLayout>
    )
  }

  if (!session) {
    redirect("/login")
  }

  const handlePurchase = (pkg: typeof servicePackages[0]) => {
    setSelectedPackage(pkg)
    setShowPurchaseModal(true)
    setProjectDescription("")
    setProjectType("")
    setShowPaymentQR(false)
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return
    setMessages([...messages, { id: messages.length + 1, sender: "user", text: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }])
    setNewMessage("")
  }

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {session.user?.name || "User"}!</h1>
          <p className="text-gray-600 mt-2">Manage your projects, purchases, payments and downloads.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Orders", value: "12", icon: Package, color: "text-purple-600" },
            { label: "Active Projects", value: "3", icon: Clock, color: "text-blue-600" },
            { label: "Downloads", value: "24", icon: Download, color: "text-green-600" },
            { label: "Messages", value: "5", icon: MessageSquare, color: "text-pink-600" },
          ].map((s) => (
            <Card key={s.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div><p className="text-sm text-gray-500">{s.label}</p><p className="text-2xl font-bold">{s.value}</p></div>
                  <s.icon className={`w-8 h-8 ${s.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="bg-white border flex-wrap h-auto gap-1 p-1">
            <TabsTrigger value="orders"><Package className="w-4 h-4 mr-2" />Orders</TabsTrigger>
            <TabsTrigger value="purchase"><ShoppingCart className="w-4 h-4 mr-2" />Purchase</TabsTrigger>
            <TabsTrigger value="downloads"><Download className="w-4 h-4 mr-2" />Downloads</TabsTrigger>
            <TabsTrigger value="chat"><MessageSquare className="w-4 h-4 mr-2" />Chat</TabsTrigger>
            <TabsTrigger value="profile"><User className="w-4 h-4 mr-2" />Profile</TabsTrigger>
          </TabsList>

          {/* ────── ORDERS TAB ────── */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Your Orders</CardTitle>
                <CardDescription>Track progress and payment status of your projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="font-semibold text-lg">{order.service}</h4>
                            <Badge variant={order.status === "Pending Delivery" ? "default" : order.status === "In Progress" ? "secondary" : "outline"}>{order.status}</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{order.id}</span><span>{order.date}</span><span>₹{order.amount}</span>
                            <Badge variant={order.paymentStatus === "Paid" ? "default" : "destructive"} className={order.paymentStatus === "Paid" ? "bg-green-600" : ""}>
                              {order.paymentStatus === "Paid" ? <><CheckCircle className="w-3 h-3 mr-1" />Paid</> : "Payment Pending"}
                            </Badge>
                          </div>
                        </div>
                        {order.paymentStatus === "Pending" && (
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white" onClick={() => setShowPaymentQR(true)}>
                            <CreditCard className="w-4 h-4 mr-2" />Pay Now
                          </Button>
                        )}
                      </div>
                      {order.status !== "Payment Pending" && (
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-purple-700">Project Progress</span>
                            <span className="text-sm font-bold text-purple-700">{order.progress}%</span>
                          </div>
                          <Progress value={order.progress} className="h-2 bg-purple-100" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ────── PURCHASE TAB ────── */}
          <TabsContent value="purchase">
            <Card>
              <CardHeader>
                <CardTitle>Purchase a New Package</CardTitle>
                <CardDescription>Choose a service, describe your project and make payment via UPI QR code</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {servicePackages.map((pkg) => (
                    <div key={pkg.id} className="p-5 border rounded-xl hover:border-purple-400 hover:shadow-md transition-all group">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <Badge variant="outline" className="mb-2 text-xs">{pkg.category}</Badge>
                          <h4 className="font-semibold text-gray-900 text-lg">{pkg.name}</h4>
                        </div>
                        <span className="text-lg font-bold text-purple-700">₹{pkg.price}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">{pkg.desc}</p>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white" onClick={() => handlePurchase(pkg)}>
                        <ShoppingCart className="w-4 h-4 mr-2" />Select & Order
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ────── DOWNLOADS TAB ────── */}
          <TabsContent value="downloads">
            <Card>
              <CardHeader>
                <CardTitle>Your Downloads</CardTitle>
                <CardDescription>Access all your deliverables and files</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {downloads.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-purple-600" />
                        <div>
                          <h4 className="font-medium">{file.name}</h4>
                          <p className="text-sm text-gray-500">{file.size} • {file.date}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm"><Download className="w-4 h-4 mr-2" />Download</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ────── CHAT TAB ────── */}
          <TabsContent value="chat">
            <Card className="flex flex-col" style={{ minHeight: 500 }}>
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  Chat with Admin
                </CardTitle>
                <CardDescription>Discuss your project requirements and updates</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-0">
                {/* messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm ${
                        msg.sender === "user"
                          ? "bg-purple-600 text-white rounded-br-sm"
                          : "bg-gray-100 text-gray-800 rounded-bl-sm"
                      }`}>
                        <p>{msg.text}</p>
                        <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-purple-200" : "text-gray-400"}`}>{msg.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* input */}
                <div className="border-t p-4 flex gap-3">
                  <input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message…"
                    className="flex-1 px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Button size="icon" className="rounded-full bg-purple-600 hover:bg-purple-700" onClick={handleSendMessage}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ────── PROFILE TAB ────── */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Manage your account information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="text-sm font-medium">Name</label><p className="text-gray-600">{session.user?.name}</p></div>
                    <div><label className="text-sm font-medium">Email</label><p className="text-gray-600">{session.user?.email}</p></div>
                  </div>
                  <Button variant="outline">Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* ─────────── PURCHASE MODAL ─────────── */}
      <AnimatePresence>
        {showPurchaseModal && selectedPackage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Order: {selectedPackage.name}</h2>
                  <button onClick={() => setShowPurchaseModal(false)} className="p-2 hover:bg-gray-100 rounded-full"><X className="w-5 h-5" /></button>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg mb-6">
                  <span className="font-medium text-purple-900">Package Price</span>
                  <span className="text-xl font-bold text-purple-700">₹{selectedPackage.price}</span>
                </div>

                {!showPaymentQR ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Product Type *</label>
                      <select value={projectType} onChange={(e) => setProjectType(e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
                        <option value="">Select type…</option>
                        <option>Business / Corporate</option>
                        <option>E-Commerce</option>
                        <option>Personal / Portfolio</option>
                        <option>Blog / Content</option>
                        <option>Restaurant / Cafe</option>
                        <option>Real Estate</option>
                        <option>Healthcare</option>
                        <option>Education</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Describe Your Idea *</label>
                      <textarea value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} rows={5} placeholder="Tell us what you need: colors, style, references, content details, target audience…" className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Reference Files (Optional)</label>
                      <input type="file" multiple className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 h-12 text-base" disabled={!projectType || !projectDescription} onClick={() => setShowPaymentQR(true)}>
                      <CreditCard className="w-5 h-5 mr-2" />Proceed to Payment
                    </Button>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <p className="text-sm text-gray-600">Scan the QR code below with any UPI app to make the payment</p>
                    <div className="inline-block p-4 bg-white border-2 border-dashed border-purple-300 rounded-xl">
                      <Image src="/upi-qr.png" alt="UPI QR Code" width={220} height={220} className="mx-auto rounded-lg" />
                    </div>
                    <div className="flex items-center justify-center gap-2 text-lg font-bold text-purple-700">
                      <IndianRupee className="w-5 h-5" /> {selectedPackage.price}
                    </div>
                    <p className="text-xs text-gray-400">After payment, upload the screenshot below</p>
                    <input type="file" accept="image/*" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-base" onClick={() => { setShowPurchaseModal(false); setShowPaymentQR(false) }}>
                      <CheckCircle className="w-5 h-5 mr-2" />Submit Payment Proof
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─────────── INLINE PAYMENT QR (for existing orders) ─────────── */}
      <AnimatePresence>
        {showPaymentQR && !showPurchaseModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Complete Payment</h3>
                <button onClick={() => setShowPaymentQR(false)} className="p-2 hover:bg-gray-100 rounded-full"><X className="w-5 h-5" /></button>
              </div>
              <div className="inline-block p-4 bg-white border-2 border-dashed border-purple-300 rounded-xl mb-4">
                <Image src="/upi-qr.png" alt="UPI QR Code" width={200} height={200} className="mx-auto rounded-lg" />
              </div>
              <p className="text-sm text-gray-500 mb-4">Scan & pay, then upload proof below</p>
              <input type="file" accept="image/*" className="w-full text-sm mb-4 text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={() => setShowPaymentQR(false)}>
                <CheckCircle className="w-4 h-4 mr-2" />Submit Proof
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DashboardLayout>
  )
}
