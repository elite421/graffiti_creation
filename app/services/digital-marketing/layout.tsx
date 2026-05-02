import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Marketing Services | graffitiCreation",
  description: "Comprehensive digital marketing services including SEO, PPC, social media, and content marketing to grow your business online.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
