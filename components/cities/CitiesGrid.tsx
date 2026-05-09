'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Search, MapPin } from 'lucide-react'

interface City {
  name: string
  state: string
  available: boolean
  areaSlug?: string
}

const CITIES: City[] = [
  // Available first
  { name: 'Delhi',      state: 'Delhi',            available: true,  areaSlug: 'delhi'   },
  { name: 'Noida',      state: 'Uttar Pradesh',    available: true,  areaSlug: 'noida'   },
  { name: 'Ghaziabad',  state: 'Uttar Pradesh',    available: true                        },
  { name: 'Gurugram',   state: 'Haryana',          available: true,  areaSlug: 'gurgaon' },
  // Coming Soon alphabetically
  { name: 'Ahmedabad',  state: 'Gujarat',          available: false },
  { name: 'Bangalore',  state: 'Karnataka',        available: false },
  { name: 'Chandigarh', state: 'Punjab',           available: false },
  { name: 'Chennai',    state: 'Tamil Nadu',       available: false },
  { name: 'Hyderabad',  state: 'Telangana',        available: false },
  { name: 'Indore',     state: 'Madhya Pradesh',   available: false },
  { name: 'Jaipur',     state: 'Rajasthan',        available: false },
  { name: 'Kolkata',    state: 'West Bengal',      available: false },
  { name: 'Lucknow',    state: 'Uttar Pradesh',    available: false },
  { name: 'Mumbai',     state: 'Maharashtra',      available: false },
  { name: 'Pune',       state: 'Maharashtra',      available: false },
  { name: 'Surat',      state: 'Gujarat',          available: false },
]

export default function CitiesGrid() {
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? CITIES.filter((c) =>
        c.name.toLowerCase().includes(query.trim().toLowerCase()) ||
        c.state.toLowerCase().includes(query.trim().toLowerCase())
      )
    : CITIES

  const liveCount = CITIES.filter((c) => c.available).length
  const soonCount = CITIES.filter((c) => !c.available).length

  return (
    <>
      {/* Stats strip */}
      <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
        <div>
          <div className="text-3xl font-display font-bold text-gold">{liveCount}</div>
          <div className="text-sm text-white/60 mt-1">Cities Live</div>
        </div>
        <div className="w-px bg-white/10 hidden sm:block" />
        <div>
          <div className="text-3xl font-display font-bold text-white/60">{soonCount}</div>
          <div className="text-sm text-white/60 mt-1">Coming Soon</div>
        </div>
        <div className="w-px bg-white/10 hidden sm:block" />
        <div>
          <div className="text-3xl font-display font-bold text-white">{CITIES.length}</div>
          <div className="text-sm text-white/60 mt-1">Total Cities</div>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto mb-12">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search city or state…"
          className="w-full bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-xl pl-12 pr-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent focus:bg-white/15 transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 text-lg leading-none"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-white/60 text-lg mb-4">No city found for &quot;{query}&quot;</p>
          <Link
            href="/for-vendors#register"
            className="inline-block bg-gold text-navy font-semibold px-6 py-3 rounded-lg hover:brightness-105 transition-all text-sm"
          >
            Request Your City
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((city) => (
            <CityCard key={city.name} city={city} />
          ))}
        </div>
      )}
    </>
  )
}

function CityCard({ city }: { city: City }) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-all duration-200 border-2 ${
        city.available ? 'border-gold/40 hover:border-gold' : 'border-gray-100 hover:border-gray-200'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-lg shrink-0 ${
            city.available ? 'bg-navy text-gold' : 'bg-gray-100 text-gray-400'
          }`}
        >
          {city.name[0]}
        </div>
        {city.available ? (
          <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-200">
            ✅ Available
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-500 text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-200">
            🕐 Coming Soon
          </span>
        )}
      </div>

      {/* City info */}
      <div>
        <h3 className="text-lg font-display font-bold text-navy leading-tight">{city.name}</h3>
        <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          {city.state}
        </p>
      </div>

      {/* Button */}
      <div className="mt-auto">
        {city.available ? (
          <Link
            href={city.areaSlug ? `/areas/${city.areaSlug}` : '/for-vendors'}
            className="block w-full text-center bg-gold hover:brightness-105 text-navy font-semibold text-sm py-2.5 rounded-lg transition-all hover:shadow-md hover:shadow-gold/25"
          >
            View Vendors
          </Link>
        ) : (
          <Link
            href="/for-vendors#register"
            className="block w-full text-center border-2 border-gray-200 hover:border-navy text-gray-500 hover:text-navy font-semibold text-sm py-2.5 rounded-lg transition-all"
          >
            Notify Me
          </Link>
        )}
      </div>
    </div>
  )
}
