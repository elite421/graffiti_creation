import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Social Media Marketing Services | graffitiCreation",
  description: "Professional social media management and marketing services. Content creation, community management, and advertising across all major platforms.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
