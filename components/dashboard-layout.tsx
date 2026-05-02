"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 md:pl-64 flex flex-col w-full min-w-0">
        <main className="flex-1 w-full p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
