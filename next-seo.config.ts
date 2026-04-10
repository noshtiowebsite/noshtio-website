import type { Metadata } from 'next'

export const siteConfig = {
  name: 'noshtio',
  tagline: 'The Art of Shared Plates',
  description:
    "India's zero-commission hyperlocal food vendor marketplace. Discover authentic local food vendors near you and support your community.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://noshtio.com',
  titleTemplate: "%s | noshtio — India's Food Marketplace",
  defaultTitle: "noshtio — India's Zero-Commission Food Marketplace",
  twitter: '@noshtio',
  locale: 'en_IN',
  ogImage: '/og-image.jpg',
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: [
    'food vendors India',
    'local food marketplace',
    'zero commission food',
    'hyperlocal food delivery',
    'street food vendors',
    'noshtio',
    'India food marketplace',
  ],
  authors: [{ name: 'noshtio', url: siteConfig.url }],
  creator: 'noshtio',
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "noshtio — India's Zero-Commission Food Marketplace",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitter,
    creator: siteConfig.twitter,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}
