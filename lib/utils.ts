import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export function generateSEO({
  title,
  description,
  image = '/og-image.jpg',
  url = process.env.NEXT_PUBLIC_APP_URL,
  noIndex = false,
}: {
  title: string
  description: string
  image?: string
  url?: string
  noIndex?: boolean
}) {
  const seo = {
    title: `${title} | graffitiCreation`,
    description,
    openGraph: {
      title: `${title} | graffitiCreation`,
      description,
      images: [{ url: image }],
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | graffitiCreation`,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  }

  return seo
}
