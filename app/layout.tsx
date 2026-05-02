import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SessionProvider } from '@/components/session-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {

  title: 'graffitiCreation - Digital Marketing & Design Agency',
  description: 'graffitiCreation offers professional digital marketing, logo design, branding, web design, SEO services, and more. Transform your business with our creative solutions.',
  keywords: 'digital marketing, logo design, branding, web design, SEO, social media marketing, graphic design, business cards, letterhead design, digital cards',
  authors: [{ name: 'graffitiCreation' }],
  creator: 'graffitiCreation',
  publisher: 'graffitiCreation',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://graffiticreation.com'),
  openGraph: {
    title: 'graffitiCreation - Digital Marketing & Design Agency',
    description: 'Transform your business with our creative digital solutions. Professional marketing, design, and development services.',
    url: 'https://graffiticreation.com',
    siteName: 'graffitiCreation',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'graffitiCreation - Digital Marketing & Design Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'graffitiCreation - Digital Marketing & Design Agency',
    description: 'Transform your business with our creative digital solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <div className="relative min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
