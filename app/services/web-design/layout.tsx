import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Design & Development Services | graffitiCreation",
  description: "Professional web design and development services. Custom websites, e-commerce solutions, and web applications built with modern technologies.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
