import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Business Cards | Modern NFC & QR Code Cards | graffitiCreation",
  description: "Create modern digital business cards with QR codes and NFC. Share instantly, track engagement, and update in real-time. Eco-friendly and always accessible.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
