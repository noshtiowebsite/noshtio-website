'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const ANNOUNCEMENT_TEXT = '🆕 Smart Menu Upload + Built-in POS — Join noshtio Free Today →'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'For Vendors', href: '/for-vendors' },
  { label: 'Cities', href: '/cities' },
  { label: 'Vendors', href: '/vendors' },
  { label: 'Contact', href: '/contact' },
  { label: 'About', href: '/about' },
] as const

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Fixed wrapper: announcement bar + main header */}
      <div className="fixed inset-x-0 top-0 z-40">
        {/* Announcement Bar */}
        {showBanner && (
          <Link
            href="/vendor/register"
            className="flex h-9 items-center justify-center bg-[#C9A84C] relative"
            aria-label="Announcement: Smart Menu Upload and Built-in POS — Join noshtio Free Today"
          >
            <span className="text-sm font-semibold text-[#0D1B3E] px-10 text-center truncate">
              {ANNOUNCEMENT_TEXT}
            </span>
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowBanner(false) }}
              className="absolute right-3 flex h-7 w-7 items-center justify-center rounded-full text-[#0D1B3E]/70 transition-colors hover:bg-[#0D1B3E]/10 hover:text-[#0D1B3E]"
              aria-label="Dismiss announcement"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </Link>
        )}

      {/* Main Header */}
      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-navy/95 shadow-lg shadow-navy/20 backdrop-blur-md'
            : 'bg-navy'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              aria-label="noshtio home"
            >
              <Image
                src="/images/Noshtio_Logo.png"
                alt="noshTio - Food's Trusted Platform"
                width={140}
                height={48}
                style={{ width: 'auto', height: '48px' }}
                priority={true}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden items-center gap-2 lg:flex"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    pathname === link.href
                      ? 'bg-white/10 text-gold'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <Link
                href="/vendor/register"
                className="inline-flex items-center justify-center rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Onboard Free
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex items-center justify-center rounded-lg p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold lg:hidden"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>
      </div>{/* end fixed wrapper */}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-out Drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-40 flex w-72 flex-col bg-navy shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/images/Noshtio_Logo.png"
              alt="noshTio - Food's Trusted Platform"
              width={120}
              height={40}
              style={{ width: 'auto', height: '40px' }}
              priority={true}
            />
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav
          className="flex flex-col gap-1 p-4"
          aria-label="Mobile navigation links"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-white/10 text-gold'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer Footer CTA */}
        <div className="mt-auto border-t border-white/10 p-5">
          <Link
            href="/for-vendors#list-your-stall"
            className="flex w-full items-center justify-center rounded-lg bg-gold px-5 py-3 text-base font-semibold text-navy transition-all hover:bg-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            onClick={() => setIsMenuOpen(false)}
          >
            List Your Stall
          </Link>
          <p className="mt-3 text-center text-xs text-white/40">
            Zero commission. Always.
          </p>
        </div>
      </div>
    </>
  )
}
