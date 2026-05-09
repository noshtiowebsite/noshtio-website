import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, MapPin, Star, MessageCircle, ShoppingBag } from 'lucide-react'
import { VENDORS, getVendorBySlug } from '@/lib/vendors'
import { generatePageMeta } from '@/lib/seo'
import ReviewsSection from '@/components/vendors/ReviewsSection'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return VENDORS.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const vendor = getVendorBySlug(slug)
  if (!vendor) return {}
  return generatePageMeta(
    vendor.name,
    `${vendor.shortDescription} Order via WhatsApp on noshtio — zero commission.`,
    `/vendors/${vendor.slug}`
  )
}

const CATEGORY_COLORS: Record<string, string> = {
  Restaurant: 'bg-electricBlue/15 text-electricBlue border-electricBlue/30',
  'Home Chef': 'bg-gold/15 text-gold border-gold/30',
  'Cloud Kitchen': 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  'Street Food': 'bg-orange-500/15 text-orange-300 border-orange-500/30',
  Catering: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${star <= Math.round(rating) ? 'fill-gold text-gold' : 'fill-white/10 text-white/20'}`}
          aria-hidden="true"
        />
      ))}
    </span>
  )
}

export default async function VendorProfilePage({ params }: Props) {
  const { slug } = await params
  const vendor = getVendorBySlug(slug)
  if (!vendor) notFound()

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919999999999'
  const whatsappMessage = encodeURIComponent(
    `Hi! I found ${vendor.name} on noshtio and would like to place an order.`
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Cover image placeholder */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-navy-700 via-electricBlue/20 to-navy sm:h-72">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[160px] font-black text-white/5 select-none leading-none">
            {vendor.name.charAt(0)}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="py-6">
          <Link
            href="/vendors"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Directory
          </Link>
        </div>

        {/* Profile header */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start">
          {/* Logo placeholder */}
          <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-white/5 text-3xl font-black text-gold font-display">
            {vendor.name.charAt(0)}
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-display text-3xl font-bold text-white">{vendor.name}</h1>
              <span
                className={`rounded-full border px-3 py-0.5 text-xs font-semibold ${CATEGORY_COLORS[vendor.category]}`}
              >
                {vendor.category}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-1.5 text-white/60">
                <MapPin className="h-4 w-4 text-gold/70" aria-hidden="true" />
                {vendor.area}, {vendor.city}
              </span>
              <span className="flex items-center gap-2">
                <StarRating rating={vendor.rating} />
                <span className="font-semibold text-gold">{vendor.rating}</span>
                <span className="text-white/40">({vendor.reviewCount} reviews)</span>
              </span>
            </div>

            <p className="mt-3 text-base text-white/70">{vendor.shortDescription}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {vendor.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* About + Menu */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <section>
              <h2 className="mb-3 font-display text-lg font-semibold text-gold">About</h2>
              <p className="leading-relaxed text-white/70">{vendor.about}</p>
            </section>

            {/* Menu */}
            <section>
              <h2 className="mb-4 font-display text-lg font-semibold text-gold">
                <ShoppingBag className="mr-2 inline h-5 w-5 text-gold/70" aria-hidden="true" />
                Sample Menu
              </h2>
              <ul className="divide-y divide-white/8 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                {vendor.menuItems.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4 px-5 py-4">
                    <div>
                      <p className="font-medium text-white">{item.name}</p>
                      {item.description && (
                        <p className="mt-0.5 text-sm text-white/50">{item.description}</p>
                      )}
                    </div>
                    <span className="flex-shrink-0 font-semibold text-gold">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-white/30">
                * Prices are indicative. Confirm current menu with vendor via WhatsApp.
              </p>
            </section>

            {/* Reviews */}
            <ReviewsSection vendorSlug={vendor.slug} vendorName={vendor.name} />
          </div>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-1 font-display text-base font-semibold text-white">Ready to order?</h3>
              <p className="mb-5 text-sm text-white/50">
                Message {vendor.name} directly on WhatsApp — zero commission, no hidden fees.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1ebe5d] hover:shadow-lg hover:shadow-[#25D366]/30"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Order via WhatsApp
              </a>
              <p className="mt-4 text-center text-xs text-white/30">
                noshtio earns zero commission on your order.
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">City</p>
                <p className="text-sm text-white">{vendor.city}</p>
                <p className="mt-1 text-sm text-white/50">{vendor.area}</p>

                <p className="mb-3 mt-5 text-xs font-semibold uppercase tracking-wider text-white/40">Category</p>
                <span
                  className={`inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${CATEGORY_COLORS[vendor.category]}`}
                >
                  {vendor.category}
                </span>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-14 pb-20 text-center">
          <Link
            href="/vendors"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white/70 transition-all hover:border-gold/40 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Vendor Directory
          </Link>
        </div>
      </div>
    </div>
  )
}
