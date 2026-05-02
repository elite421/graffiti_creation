import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Branding & Identity Design Services | graffitiCreation",
  description: "Comprehensive brand identity design services. From logo to complete visual systems, we create brands that resonate with your audience.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
