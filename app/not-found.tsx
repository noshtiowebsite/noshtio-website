import Link from 'next/link'
import { ChefHat, ArrowLeft, Utensils } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description:
    "Looks like this dish left the menu. Let's get you back to something delicious.",
}

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-navy px-4 text-center">
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-electricBlue/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electricBlue/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <Link
          href="/"
          className="group mb-12 flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          aria-label="Return to noshtio home"
        >
          <ChefHat
            className="h-8 w-8 text-gold transition-colors group-hover:text-gold-400"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span className="font-display text-xl font-bold text-white">
            noshtio
          </span>
        </Link>

        {/* Ghost 404 with icon overlay */}
        <div className="relative mb-2 flex items-center justify-center">
          <span
            className="select-none font-display text-[9rem] font-extrabold leading-none text-white/[0.04] sm:text-[12rem]"
            aria-hidden="true"
          >
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Utensils
              className="h-14 w-14 text-gold sm:h-16 sm:w-16"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">
          This dish left the menu
        </h1>

        {/* Subtext */}
        <p className="mt-3 max-w-sm text-base leading-relaxed text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved. Let&apos;s get you back to something delicious.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            href="/for-vendors"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            List Your Stall
          </Link>
        </div>

        {/* Tagline */}
        <p className="mt-12 text-xs font-medium uppercase tracking-widest text-white/25">
          The Art of Shared Plates
        </p>
      </div>
    </div>
  )
}
