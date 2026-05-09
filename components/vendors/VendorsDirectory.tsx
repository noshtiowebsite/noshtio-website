'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, MapPin, Star } from 'lucide-react'
import { VENDORS, CITIES, CATEGORIES, type VendorCity, type VendorCategory } from '@/lib/vendors'

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3.5 w-3.5 ${
            star <= Math.round(rating)
              ? 'fill-gold text-gold'
              : 'fill-white/10 text-white/20'
          }`}
          aria-hidden="true"
        />
      ))}
    </span>
  )
}

const CATEGORY_COLORS: Record<string, string> = {
  Restaurant: 'bg-electricBlue/15 text-electricBlue',
  'Home Chef': 'bg-gold/15 text-gold',
  'Cloud Kitchen': 'bg-purple-500/15 text-purple-300',
  'Street Food': 'bg-orange-500/15 text-orange-300',
  Catering: 'bg-emerald-500/15 text-emerald-300',
}

export default function VendorsDirectory() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState<VendorCity | 'All'>('All')
  const [selectedCategory, setSelectedCategory] = useState<VendorCategory | 'All'>('All')

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return VENDORS.filter((v) => {
      const matchesSearch = !q || v.name.toLowerCase().includes(q) || v.tags.some((t) => t.toLowerCase().includes(q))
      const matchesCity = selectedCity === 'All' || v.city === selectedCity
      const matchesCategory = selectedCategory === 'All' || v.category === selectedCategory
      return matchesSearch && matchesCity && matchesCategory
    })
  }, [searchQuery, selectedCity, selectedCategory])

  const filterPillBase = 'rounded-full px-4 py-1.5 text-sm font-medium transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-gold'
  const activeFilter = 'bg-gold text-navy border-gold'
  const inactiveFilter = 'border-white/20 text-white/70 hover:border-gold/50 hover:text-white bg-transparent'

  return (
    <section className="min-h-screen bg-navy">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/10 bg-navy py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,111,255,0.12)_0%,_transparent_60%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <p className="mb-3 font-display text-xs font-semibold uppercase tracking-widest text-gold">
            Vendor Directory
          </p>
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Discover Local <span className="gradient-text">Food Vendors</span>
          </h1>
          <p className="mt-4 text-lg text-white/60">
            Explore authentic home chefs, street food legends, and cloud kitchens across Delhi-NCR — all zero-commission on noshtio.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="relative mx-auto mb-8 max-w-xl">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" aria-hidden="true" />
          <input
            type="search"
            placeholder="Search vendors or cuisine..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-white/20 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/40 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/30"
            aria-label="Search vendors"
          />
        </div>

        {/* City Filters */}
        <div className="mb-4 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by city">
          <button
            onClick={() => setSelectedCity('All')}
            className={`${filterPillBase} ${selectedCity === 'All' ? activeFilter : inactiveFilter}`}
          >
            All Cities
          </button>
          {CITIES.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`${filterPillBase} ${selectedCity === city ? activeFilter : inactiveFilter}`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by category">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`${filterPillBase} ${selectedCategory === 'All' ? activeFilter : inactiveFilter}`}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`${filterPillBase} ${selectedCategory === cat ? activeFilter : inactiveFilter}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-white/50">
          Showing <span className="font-semibold text-white">{filtered.length}</span> of {VENDORS.length} vendors
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((vendor) => (
              <article
                key={vendor.slug}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 transition-all hover:border-gold/40 hover:bg-white/8 hover:shadow-xl hover:shadow-gold/5"
              >
                {/* Cover placeholder */}
                <div className="relative h-40 overflow-hidden rounded-t-2xl bg-gradient-to-br from-navy-600 to-electricBlue/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-white/10 select-none">
                      {vendor.name.charAt(0)}
                    </span>
                  </div>
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${CATEGORY_COLORS[vendor.category]}`}
                  >
                    {vendor.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-display text-lg font-bold text-white group-hover:text-gold transition-colors">
                    {vendor.name}
                  </h2>

                  <div className="mt-1 flex items-center gap-2">
                    <StarRating rating={vendor.rating} />
                    <span className="text-sm font-semibold text-gold">{vendor.rating}</span>
                    <span className="text-xs text-white/40">({vendor.reviewCount} reviews)</span>
                  </div>

                  <div className="mt-2 flex items-center gap-1 text-sm text-white/50">
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-gold/70" aria-hidden="true" />
                    <span>{vendor.area}, {vendor.city}</span>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                    {vendor.shortDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {vendor.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/vendors/${vendor.slug}`}
                    className="btn-primary mt-5 block rounded-xl py-2.5 text-center text-sm font-semibold transition-all hover:shadow-lg hover:shadow-electricBlue/20"
                  >
                    View Menu
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-lg font-semibold text-white/50">No vendors found</p>
            <p className="mt-2 text-sm text-white/30">Try adjusting your search or filters.</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCity('All')
                setSelectedCategory('All')
              }}
              className="btn-gold mt-6 inline-block rounded-xl px-6 py-2.5 text-sm font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* CTA band */}
      <div className="border-t border-white/10 bg-electricBlue/10 py-14 text-center">
        <p className="font-display text-xl font-bold text-white">Are you a food vendor?</p>
        <p className="mt-2 text-sm text-white/60">List your stall on noshtio — zero commission, always.</p>
        <Link
          href="/vendor/register"
          className="btn-gold mt-6 inline-block rounded-xl px-8 py-3 text-sm font-semibold"
        >
          Join Free Today
        </Link>
      </div>
    </section>
  )
}
