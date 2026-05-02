import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Logo Design Services | Professional Logo Designer | graffitiCreation",
  description: "Custom logo design services for businesses. Unique, memorable logos that capture your brand essence. Packages starting from ₹24,999.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
