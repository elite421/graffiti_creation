"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Package,
  Settings,
  BarChart3,
  MessageSquare,
  DollarSign,
  TrendingUp,
  CheckCircle,
  XCircle,
  Send,
  Upload,
  CreditCard,
  Clock,
  ShieldCheck,
  IndianRupee,
  Truck,
} from "lucide-react"

/* ───────── mock data ───────── */
const initialOrders = [
  { id: "ORD-001", client: "John Doe", email: "john@example.com", service: "Logo Design", status: "In Progress", priority: "High", progress: 90, amount: "24,999", paymentStatus: "Verified", description: "Need a modern tech logo, blue & white theme", projectType: "Business / Corporate" },
  { id: "ORD-002", client: "Acme Corp", email: "info@acme.com", service: "Website Redesign", status: "In Progress", priority: "Normal", progress: 45, amount: "99,999", paymentStatus: "Verified", description: "Complete e-commerce redesign with payment gateway", projectType: "E-Commerce" },
  { id: "ORD-003", client: "Jane Smith", email: "jane@mail.com", service: "SEO Package", status: "Pending Acceptance", priority: "High", progress: 0, amount: "64,999", paymentStatus: "Pending Verification", description: "SEO for local bakery website", projectType: "Restaurant / Cafe" },
  { id: "ORD-004", client: "TechFlow Inc.", email: "admin@techflow.io", service: "Social Media Campaign", status: "In Progress", priority: "Normal", progress: 20, amount: "1,19,999", paymentStatus: "Verified", description: "Launch campaign for SaaS product, target 25-45 age group", projectType: "Business / Corporate" },
  { id: "ORD-005", client: "Sarah Jenkins", email: "sarah@mail.com", service: "Complete Branding", status: "Pending Acceptance", priority: "High", progress: 0, amount: "3,49,999", paymentStatus: "Pending Verification", description: "Full brand identity for new organic skincare line", projectType: "E-Commerce" },
  { id: "ORD-006", client: "Local Cafe", email: "hello@localcafe.in", service: "Digital Cards & Menus", status: "Review", priority: "Normal", progress: 95, amount: "3,999", paymentStatus: "Verified", description: "QR menu card + digital business card", projectType: "Restaurant / Cafe" },
  { id: "ORD-007", client: "Vertex Solutions", email: "contact@vertex.com", service: "Print Design (Brochures)", status: "In Progress", priority: "Low", progress: 10, amount: "11,999", paymentStatus: "Verified", description: "Corporate brochure with product catalog", projectType: "Business / Corporate" },
  { id: "ORD-008", client: "Global Reach", email: "ops@globalreach.com", service: "Digital Marketing Strategy", status: "Pending Acceptance", priority: "Urgent", progress: 0, amount: "79,999", paymentStatus: "Pending Verification", description: "Complete Google & Meta ads strategy for real estate", projectType: "Real Estate" },
]

const servicePricing = [
  { id: 1, name: "Logo Design Starter", currentPrice: "24,999", status: "Active" },
  { id: 2, name: "Website Redesign Basic", currentPrice: "99,999", status: "Active" },
  { id: 3, name: "Complete Branding Pro", currentPrice: "3,49,999", status: "Active" },
  { id: 4, name: "SEO Package Monthly", currentPrice: "64,999", status: "Active" },
  { id: 5, name: "Social Media Growth", currentPrice: "1,19,999", status: "Active" },
  { id: 6, name: "Digital Marketing Starter", currentPrice: "79,999", status: "Active" },
  { id: 7, name: "Print Design (Brochure)", currentPrice: "11,999", status: "Active" },
  { id: 8, name: "Digital Cards Regular", currentPrice: "3,999", status: "Active" },
]

const adminChatMessages = [
  { id: 1, sender: "user", clientName: "John Doe", text: "Can you share the logo concepts?", time: "10:35 AM" },
  { id: 2, sender: "admin", clientName: "Admin", text: "Sure! I've uploaded 2 concepts to your Downloads. Please check.", time: "10:40 AM" },
  { id: 3, sender: "user", clientName: "Acme Corp", text: "When will the homepage design be ready?", time: "11:00 AM" },
]

export default function AdminPage() {
  const { data: session, status } = useSession()
  const [orders, setOrders] = useState(initialOrders)
  const [chatMessages, setChatMessages] = useState(adminChatMessages)
  const [newAdminMsg, setNewAdminMsg] = useState("")
  const [selectedClient, setSelectedClient] = useState("John Doe")

  if (status === "loading") {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600"></div>
        </div>
      </DashboardLayout>
    )
  }

  if (!session || session.user?.role !== "ADMIN") {
    redirect("/dashboard")
  }

  const handleAcceptOrder = (orderId: string) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: "In Progress", paymentStatus: "Verified" } : o))
  }

  const handleRejectOrder = (orderId: string) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: "Rejected" } : o))
  }

  const handleUpdateProgress = (orderId: string, newProgress: number) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, progress: Math.min(100, Math.max(0, newProgress)) } : o))
  }

  const handleMarkDelivered = (orderId: string) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: "Delivered", progress: 100 } : o))
  }

  const handleSendAdminMsg = () => {
    if (!newAdminMsg.trim()) return
    setChatMessages([...chatMessages, { id: chatMessages.length + 1, sender: "admin", clientName: "Admin", text: newAdminMsg, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }])
    setNewAdminMsg("")
  }

  const pendingCount = orders.filter(o => o.status === "Pending Acceptance").length
  const activeCount = orders.filter(o => o.status === "In Progress").length
  const paymentPendingCount = orders.filter(o => o.paymentStatus === "Pending Verification").length

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage orders, payments, deliveries, services and client communication.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Revenue", value: "₹38,60,000", icon: DollarSign, color: "text-green-600" },
            { label: "Active Orders", value: String(activeCount), icon: Package, color: "text-purple-600" },
            { label: "Pending Approval", value: String(pendingCount), icon: Clock, color: "text-orange-600", highlight: pendingCount > 0 },
            { label: "Payment Pending", value: String(paymentPendingCount), icon: CreditCard, color: "text-red-600", highlight: paymentPendingCount > 0 },
          ].map((s) => (
            <Card key={s.label} className={s.highlight ? "border-orange-300 bg-orange-50/50" : ""}>
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
            <TabsTrigger value="orders"><Package className="w-4 h-4 mr-2" />Orders {pendingCount > 0 && <Badge className="ml-1 bg-red-500 text-white text-xs h-5 w-5 p-0 flex items-center justify-center rounded-full">{pendingCount}</Badge>}</TabsTrigger>
            <TabsTrigger value="payments"><CreditCard className="w-4 h-4 mr-2" />Payments</TabsTrigger>
            <TabsTrigger value="delivery"><Truck className="w-4 h-4 mr-2" />Delivery</TabsTrigger>
            <TabsTrigger value="services"><DollarSign className="w-4 h-4 mr-2" />Services</TabsTrigger>
            <TabsTrigger value="chat"><MessageSquare className="w-4 h-4 mr-2" />Chat</TabsTrigger>
            <TabsTrigger value="qr"><IndianRupee className="w-4 h-4 mr-2" />UPI QR</TabsTrigger>
            <TabsTrigger value="settings"><Settings className="w-4 h-4 mr-2" />Settings</TabsTrigger>
          </TabsList>

          {/* ────── ORDERS TAB: Accept / Reject / Progress ────── */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order Management</CardTitle>
                <CardDescription>Accept, reject, and manage progress of all client orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className={`p-4 border rounded-lg transition-colors ${order.status === "Pending Acceptance" ? "border-orange-300 bg-orange-50/30" : "hover:bg-gray-50"}`}>
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1 flex-wrap">
                            <h4 className="font-semibold text-lg">{order.id} — {order.service}</h4>
                            <Badge variant={
                              order.status === "Pending Acceptance" ? "destructive" :
                              order.status === "In Progress" ? "secondary" :
                              order.status === "Delivered" ? "default" :
                              order.status === "Review" ? "outline" : "secondary"
                            }>{order.status}</Badge>
                            {order.priority === "Urgent" && <Badge variant="destructive" className="bg-red-500">Urgent</Badge>}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2 flex-wrap">
                            <span>Client: <strong>{order.client}</strong></span>
                            <span>{order.email}</span>
                            <span>₹{order.amount}</span>
                            <Badge variant={order.paymentStatus === "Verified" ? "default" : "destructive"} className={order.paymentStatus === "Verified" ? "bg-green-600 text-xs" : "text-xs"}>
                              {order.paymentStatus}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-2">
                            <span className="font-medium text-gray-700">Type:</span> {order.projectType} · <span className="font-medium text-gray-700">Brief:</span> {order.description}
                          </div>

                          {/* Progress bar for active orders */}
                          {order.status === "In Progress" || order.status === "Review" ? (
                            <div className="mt-2">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-xs font-medium text-purple-700">Progress</span>
                                <div className="flex items-center gap-2">
                                  <input type="number" defaultValue={order.progress} min={0} max={100} className="w-16 h-6 text-xs px-2 border rounded" onBlur={(e) => handleUpdateProgress(order.id, Number(e.target.value))} />
                                  <span className="text-xs text-gray-500">%</span>
                                </div>
                              </div>
                              <Progress value={order.progress} className="h-2 bg-purple-100" />
                            </div>
                          ) : null}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-2 items-start shrink-0">
                          {order.status === "Pending Acceptance" && (
                            <>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white h-8 text-xs" onClick={() => handleAcceptOrder(order.id)}>
                                <CheckCircle className="w-3 h-3 mr-1" />Accept
                              </Button>
                              <Button size="sm" variant="destructive" className="h-8 text-xs" onClick={() => handleRejectOrder(order.id)}>
                                <XCircle className="w-3 h-3 mr-1" />Reject
                              </Button>
                            </>
                          )}
                          {(order.status === "In Progress" || order.status === "Review") && (
                            <>
                              <Button size="sm" variant="outline" className="h-8 text-xs" onClick={() => handleUpdateProgress(order.id, order.progress)}>
                                Save Progress
                              </Button>
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white h-8 text-xs" onClick={() => handleMarkDelivered(order.id)}>
                                <Truck className="w-3 h-3 mr-1" />Deliver
                              </Button>
                            </>
                          )}
                          {order.status === "Delivered" && <Badge className="bg-green-600 text-white"><CheckCircle className="w-3 h-3 mr-1" />Delivered</Badge>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ────── PAYMENTS TAB ────── */}
          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment Management</CardTitle>
                <CardDescription>Verify payments, mark as received, and track pending payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg ${order.paymentStatus === "Pending Verification" ? "border-orange-300 bg-orange-50/30" : "hover:bg-gray-50"}`}>
                      <div>
                        <h4 className="font-semibold">{order.id} — {order.client}</h4>
                        <p className="text-sm text-gray-500">{order.service} · ₹{order.amount}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-3 sm:mt-0">
                        <Badge variant={order.paymentStatus === "Verified" ? "default" : "destructive"} className={order.paymentStatus === "Verified" ? "bg-green-600" : ""}>
                          {order.paymentStatus}
                        </Badge>
                        {order.paymentStatus === "Pending Verification" && (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white h-8 text-xs" onClick={() => handleAcceptOrder(order.id)}>
                            <CheckCircle className="w-3 h-3 mr-1" />Mark Paid
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ────── DELIVERY TAB ────── */}
          <TabsContent value="delivery">
            <Card>
              <CardHeader>
                <CardTitle>Project Delivery</CardTitle>
                <CardDescription>Upload final deliverables and mark projects as delivered</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.filter(o => o.status === "In Progress" || o.status === "Review" || o.status === "Delivered").map((order) => (
                    <div key={order.id} className="p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="font-semibold">{order.id} — {order.service}</h4>
                            <Badge variant={order.status === "Delivered" ? "default" : "secondary"} className={order.status === "Delivered" ? "bg-green-600" : ""}>{order.status}</Badge>
                          </div>
                          <p className="text-sm text-gray-500">Client: {order.client} · Progress: {order.progress}%</p>
                          <Progress value={order.progress} className="h-2 mt-2 bg-purple-100" />
                        </div>
                        {order.status !== "Delivered" && (
                          <div className="flex flex-col gap-2 shrink-0">
                            <input type="file" className="text-xs text-gray-500 file:mr-2 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700" />
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white h-8 text-xs" onClick={() => handleMarkDelivered(order.id)}>
                              <Truck className="w-3 h-3 mr-1" />Mark Delivered
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ────── SERVICES & PRICING TAB ────── */}
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Services & Pricing</CardTitle>
                <CardDescription>Manage the base pricing for all services displayed on the website</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {servicePricing.map((service) => (
                    <div key={service.id} className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="mb-2 sm:mb-0">
                        <h4 className="font-medium text-gray-900">{service.name}</h4>
                        <Badge variant="outline" className="text-xs mt-1">{service.status}</Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                          <input type="text" defaultValue={service.currentPrice} className="pl-8 pr-3 py-1.5 border rounded-md text-sm w-32" />
                        </div>
                        <Button size="sm" variant="outline">Update</Button>
                      </div>
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
                  Chat with Clients
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className="text-xs text-gray-400">Talking to:</span>
                    {["John Doe", "Acme Corp", "Jane Smith"].map(name => (
                      <button key={name} onClick={() => setSelectedClient(name)} className={`text-xs px-3 py-1 rounded-full transition-colors ${selectedClient === name ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{name}</button>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-0">
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {chatMessages.filter(m => m.clientName === selectedClient || m.sender === "admin").map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === "admin" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm ${
                        msg.sender === "admin" ? "bg-purple-600 text-white rounded-br-sm" : "bg-gray-100 text-gray-800 rounded-bl-sm"
                      }`}>
                        {msg.sender !== "admin" && <p className="text-xs font-bold mb-1 text-purple-600">{msg.clientName}</p>}
                        <p>{msg.text}</p>
                        <p className={`text-xs mt-1 ${msg.sender === "admin" ? "text-purple-200" : "text-gray-400"}`}>{msg.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t p-4 flex gap-3">
                  <input value={newAdminMsg} onChange={(e) => setNewAdminMsg(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSendAdminMsg()} placeholder={`Reply to ${selectedClient}…`} className="flex-1 px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  <Button size="icon" className="rounded-full bg-purple-600 hover:bg-purple-700" onClick={handleSendAdminMsg}><Send className="w-4 h-4" /></Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ────── UPI QR TAB ────── */}
          <TabsContent value="qr">
            <Card>
              <CardHeader>
                <CardTitle>UPI QR Code Settings</CardTitle>
                <CardDescription>Update your UPI QR code that clients use to make payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4">Current QR Code</h4>
                    <div className="inline-block p-4 border-2 border-dashed border-purple-300 rounded-xl bg-white">
                      <Image src="/upi-qr.png" alt="Current UPI QR" width={220} height={220} className="rounded-lg" />
                    </div>
                    <p className="text-sm text-gray-500 mt-3">This QR code is displayed to clients during checkout</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Upload New QR Code</h4>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors">
                      <Upload className="w-10 h-10 mx-auto text-gray-400 mb-3" />
                      <p className="text-sm text-gray-500 mb-3">Drag & drop or click to upload</p>
                      <input type="file" accept="image/*" className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">UPI ID</label>
                      <input type="text" defaultValue="graffiticreation@upi" className="w-full px-3 py-2 border rounded-lg text-sm" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Merchant Name</label>
                      <input type="text" defaultValue="graffitiCreation" className="w-full px-3 py-2 border rounded-lg text-sm" />
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      <Upload className="w-4 h-4 mr-2" />Update QR Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ────── SETTINGS TAB ────── */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Site Settings</CardTitle>
                <CardDescription>Configure website settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Site Name</label>
                    <input type="text" defaultValue="graffitiCreation" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Contact Email</label>
                    <input type="email" defaultValue="contact@graffiticreation.com" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone Number</label>
                    <input type="text" defaultValue="+91 98765 43210" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" />
                  </div>
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </DashboardLayout>
  )
}
