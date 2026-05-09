import Link from 'next/link'
import Image from 'next/image'
import {
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  MessageCircle,
  Mail,
  MapPin,
} from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919999999999'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Cities', href: '/cities' },
  { label: 'Vendor Directory', href: '/vendors' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'About Us', href: '/about' },
]

const VENDOR_LINKS = [
  { label: 'List Your Stall', href: '/for-vendors#list-your-stall' },
  { label: 'Vendor FAQ', href: '/for-vendors#faq' },
  { label: 'How Pricing Works', href: '/for-vendors#pricing' },
  { label: 'Partner With Us', href: '/partner' },
  { label: 'Vendor Login', href: '/vendor/login' },
]

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/noshtio',
    Icon: Instagram,
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/noshtio',
    Icon: Twitter,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/noshtio',
    Icon: Linkedin,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/noshtio',
    Icon: Facebook,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="group inline-flex">
              <Image
                src="/images/Noshtio_Logo.png"
                alt="noshTio - Food's Trusted Platform"
                width={160}
                height={56}
                style={{ width: 'auto', height: '56px' }}
                priority={true}
              />
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              India&apos;s first zero-commission hyperlocal food vendor
              marketplace. We connect hungry customers with passionate local
              food vendors — no middlemen, no hidden fees.
            </p>
            <p className="mt-4 text-sm font-medium text-gold">
              Building India's first vendor-first food platform — together.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-all hover:scale-105 hover:bg-electricBlue hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: For Vendors */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-gold">
              For Vendors
            </h3>
            <ul className="space-y-3">
              {VENDOR_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect + App Badges */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-gold">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <MessageCircle
                    className="h-4 w-4 flex-shrink-0 text-[#25D366]"
                    aria-hidden="true"
                  />
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@noshtio.com"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail
                    className="h-4 w-4 flex-shrink-0 text-electricBlue"
                    aria-hidden="true"
                  />
                  hello@noshtio.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-white/60">
                  <MapPin
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  Bengaluru, India
                </span>
              </li>
            </ul>

            {/* App Store Badges */}
            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href="#"
                aria-label="Download noshtio on the App Store (coming soon)"
                className="flex h-10 w-36 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 text-sm font-medium text-white/80 transition-all hover:border-gold/40 hover:bg-white/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 flex-shrink-0 fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                aria-label="Get noshtio on Google Play (coming soon)"
                className="flex h-10 w-36 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 text-sm font-medium text-white/80 transition-all hover:border-gold/40 hover:bg-white/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 flex-shrink-0 fill-current"
                  aria-hidden="true"
                >
                  <path d="M3.18 23.76a2 2 0 0 0 2.07-.22L17 14.93l-3.47-3.47L3.18 23.76zM20.44 10.66l-2.96-1.7-3.89 3.47 3.89 3.47 2.99-1.73c.85-.49.85-1.53-.03-2.01zM2.05 1.42C1.72 1.72 1.5 2.2 1.5 2.81v18.38c0 .61.22 1.09.55 1.39l.06.06L12.43 12v-.25L2.11 1.36l-.06.06zM13.34 9.56l3.47-3.47L4.99.62a2 2 0 0 0-2.07-.21l10.42 9.15z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">
          <div className="flex flex-col gap-2 sm:items-start">
            <p className="text-sm font-medium text-gold">
              Join 500+ founding vendors already onboard
            </p>
            <p className="text-xs text-white/40">
              © {currentYear} noshtio. All rights reserved. Built with love for
              India&apos;s food vendors.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white/70"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-white/70"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap.xml"
              className="transition-colors hover:text-white/70"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
