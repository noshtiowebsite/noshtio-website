import { Metadata } from 'next'
import CitiesGrid from '@/components/cities/CitiesGrid'

export const metadata: Metadata = {
  title: 'Cities | noshtio — Check Availability in Your City',
  description:
    'noshtio is live in Delhi, Noida, Ghaziabad, and Gurugram with 12 more cities coming soon. Check if your city is available and get notified when we launch near you.',
  keywords:
    'noshtio cities, food delivery cities India, zero commission food, hyperlocal food platform, Delhi food delivery, Noida food vendors',
  openGraph: {
    title: 'Cities | noshtio — Check Availability in Your City',
    description:
      'Currently live in 4 cities. 12 more coming soon. Zero-commission hyperlocal food marketplace.',
    type: 'website',
  },
}

export default function CitiesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              Coverage Map
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Is noshtio in{' '}
              <span className="text-gold">Your City?</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We&apos;re live in 4 cities and expanding fast. Search your city below.
            </p>
          </div>

          <CitiesGrid />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-3">
            Don&apos;t see your city?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Register as a founding vendor in your city — it helps us prioritise where we launch next.
          </p>
          <a
            href="/for-vendors#register"
            className="inline-block bg-gold hover:brightness-105 text-navy font-semibold px-8 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-gold/25 text-sm"
          >
            Register as a Founding Vendor
          </a>
        </div>
      </section>
    </main>
  )
}
