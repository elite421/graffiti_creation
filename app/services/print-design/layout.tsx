import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Print Design Services | Business Cards, Brochures, Stationery | graffitiCreation",
  description: "Professional print design services including business cards, letterheads, brochures, flyers, and marketing collateral. Print-ready files delivered.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
