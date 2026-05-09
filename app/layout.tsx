import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { WebVitals } from '@/components/WebVitals'
import VisitTracker from '@/components/VisitTracker'
import StatsBar from '@/components/StatsBar'
import { Toaster } from 'sonner'
import ChatWidget from '@/components/ChatWidget'
import { defaultMetadata } from '@/next-seo.config'
import './globals.css'
import { cn } from "@/lib/utils";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(plusJakarta.variable, inter.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="min-h-screen">
        <WebVitals />
        <VisitTracker />
        <Navbar />
        <main className="pt-[100px] lg:pt-[116px]">{children}</main>
        <StatsBar />
        <Footer />
        <ChatWidget />
        <WhatsAppButton />
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  )
}
