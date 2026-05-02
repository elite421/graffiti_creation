import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Services | Search Engine Optimization | graffitiCreation",
  description: "Professional SEO services to improve your search rankings, drive organic traffic, and grow your business. Technical SEO, content optimization, and link building.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
