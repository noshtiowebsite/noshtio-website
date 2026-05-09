import type { Metadata } from 'next'
import { generatePageMeta } from '@/lib/seo'
import { BadgePercent, Compass, Navigation, MessageCircle, Smartphone } from 'lucide-react'
import DownloadButtons from '@/components/download/DownloadButtons'

export const metadata: Metadata = generatePageMeta(
  'Download noshtio App',
  'Order local food with zero commission. Download the noshtio app on iOS and Android — discover vendors near you, chat directly, and track your order in real time.',
  '/download'
)

const FEATURES = [
  {
    icon: BadgePercent,
    title: 'Zero Commission',
    description: 'Every rupee goes straight to the vendor. No platform cut, no hidden charges — ever.',
  },
  {
    icon: Compass,
    title: 'Hyperlocal Discovery',
    description: 'Find authentic food vendors within your neighbourhood — restaurants, home chefs, street food, and more.',
  },
  {
    icon: Navigation,
    title: 'Real-time Tracking',
    description: 'Know exactly where your order is from the moment it leaves the kitchen to your doorstep.',
  },
  {
    icon: MessageCircle,
    title: 'Direct Vendor Chat',
    description: 'Message your vendor directly to customise your order, ask about allergens, or just say thanks.',
  },
]

const SCREENS = [
  { label: 'Browse Vendors', gradient: 'from-electricBlue/40 to-navy' },
  { label: 'Vendor Profile', gradient: 'from-gold/30 to-navy' },
  { label: 'Track Order', gradient: 'from-emerald-500/30 to-navy' },
]

function PhoneMockup({ label, gradient }: { label: string; gradient: string }) {
  return (
    <div
      aria-label={`App screen: ${label}`}
      className="relative mx-auto h-[400px] w-[190px] overflow-hidden rounded-[36px] border-[5px] border-white/15 bg-navy shadow-2xl shadow-black/40"
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-0 z-10 h-5 w-16 -translate-x-1/2 rounded-b-2xl bg-navy/90" />
      {/* Screen */}
      <div className={`flex h-full flex-col bg-gradient-to-b ${gradient}`}>
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-7 pb-2">
          <span className="text-[10px] text-white/50">9:41</span>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-white/30" />
            ))}
          </div>
        </div>
        {/* Content placeholder */}
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-5">
          <Smartphone className="h-10 w-10 text-white/20" aria-hidden="true" />
          <p className="text-center text-xs font-semibold text-white/50">{label}</p>
          <div className="w-full space-y-2.5">
            <div className="h-8 w-full rounded-xl bg-white/10" />
            <div className="h-16 w-full rounded-xl bg-white/8" />
            <div className="mx-auto h-8 w-3/4 rounded-xl bg-white/10" />
            <div className="h-12 w-full rounded-xl bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  )
}

function QRPlaceholder() {
  const navy = '#0D1B3E'
  const gold = '#C9A84C'
  const modules: [number, number, string][] = [
    // Top-left finder
    [0, 0, navy], [7, 0, navy], [0, 7, navy], [7, 7, navy],
    // Top-right finder
    [18, 0, navy], [25, 0, navy], [18, 7, navy], [25, 7, navy],
    // Bottom-left finder
    [0, 18, navy], [7, 18, navy], [0, 25, navy], [7, 25, navy],
    // Data modules (representative pattern)
    [10, 0, navy], [12, 0, navy], [14, 0, navy],
    [10, 2, navy], [14, 2, navy],
    [10, 4, navy], [12, 4, navy],
    [0, 10, navy], [2, 10, navy], [10, 10, navy], [12, 10, navy], [14, 10, navy], [20, 10, navy], [24, 10, navy],
    [0, 12, navy], [4, 12, navy], [12, 12, gold], [18, 12, navy], [24, 12, navy],
    [0, 14, navy], [2, 14, navy], [10, 14, navy], [14, 14, navy], [20, 14, navy], [22, 14, navy],
    [10, 18, navy], [12, 18, navy], [14, 18, navy], [24, 18, navy],
    [10, 20, navy], [18, 20, navy], [22, 20, navy],
    [10, 22, navy], [12, 22, navy], [20, 22, navy], [24, 22, navy],
    [10, 24, navy], [14, 24, navy], [18, 24, navy],
  ]
  const cell = 10
  const size = 26 * cell

  return (
    <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-white p-3 shadow-lg">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-full w-full"
        aria-label="QR code placeholder for noshtio app download"
      >
        {/* Finder pattern borders (simplified) */}
        <rect x="0" y="0" width="70" height="70" rx="4" fill={navy} />
        <rect x="10" y="10" width="50" height="50" rx="3" fill="white" />
        <rect x="20" y="20" width="30" height="30" rx="2" fill={navy} />
        <rect x="180" y="0" width="70" height="70" rx="4" fill={navy} />
        <rect x="190" y="10" width="50" height="50" rx="3" fill="white" />
        <rect x="200" y="20" width="30" height="30" rx="2" fill={navy} />
        <rect x="0" y="180" width="70" height="70" rx="4" fill={navy} />
        <rect x="10" y="190" width="50" height="50" rx="3" fill="white" />
        <rect x="20" y="200" width="30" height="30" rx="2" fill={navy} />
        {/* Data modules */}
        {modules.map(([col, row, fill], i) => (
          <rect key={i} x={col * cell + 2} y={row * cell + 2} width={cell - 2} height={cell - 2} fill={fill} rx="1" />
        ))}
      </svg>
    </div>
  )
}

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 text-center">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,111,255,0.15)_0%,_transparent_65%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <p className="mb-3 font-display text-xs font-semibold uppercase tracking-widest text-gold">
            Coming Soon to iOS &amp; Android
          </p>
          <h1 className="font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Order Local Food.{' '}
            <span className="gradient-text">Zero Commission.</span>
            <br />
            Download noshtio App.
          </h1>
          <p className="mt-5 text-lg text-white/60">
            Your neighbourhood's food vendors — one tap away. No commissions, no middlemen.
          </p>

          <div className="mt-10">
            <DownloadButtons size="lg" />
          </div>

          {/* Social proof strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm">
            {['500+ Vendors', '4 Cities', 'Zero Commission'].map((stat, i) => (
              <span key={stat} className="flex items-center gap-3">
                <span className="font-semibold text-white">{stat}</span>
                {i < 2 && <span className="text-white/20" aria-hidden="true">|</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-t border-white/10 py-20" aria-labelledby="features-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2
            id="features-heading"
            className="mb-12 text-center font-display text-3xl font-bold text-white"
          >
            Why download noshtio?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-gold/30 hover:bg-white/8"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15">
                  <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-display text-base font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screenshots ── */}
      <section className="border-t border-white/10 py-20" aria-labelledby="screenshots-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2
            id="screenshots-heading"
            className="mb-12 text-center font-display text-3xl font-bold text-white"
          >
            Built for food lovers
          </h2>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-end">
            {SCREENS.map((screen, i) => (
              <div
                key={screen.label}
                className={`transition-transform ${i === 1 ? 'sm:scale-110 sm:-translate-y-4' : 'opacity-80'}`}
              >
                <PhoneMockup label={screen.label} gradient={screen.gradient} />
                <p className="mt-4 text-center text-xs font-medium text-white/40">{screen.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QR Code ── */}
      <section className="border-t border-white/10 py-20 text-center" aria-labelledby="qr-heading">
        <div className="mx-auto max-w-sm px-4">
          <h2
            id="qr-heading"
            className="mb-2 font-display text-2xl font-bold text-white"
          >
            Scan to Download
          </h2>
          <p className="mb-8 text-sm text-white/50">
            Point your phone camera at this code
          </p>
          <div className="flex justify-center">
            <QRPlaceholder />
          </div>
          <p className="mt-4 text-xs text-white/30">App launching soon — register your interest below</p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="border-t border-white/10 bg-electricBlue/10 py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <p className="mb-2 font-display text-xl font-bold text-white">Ready to order?</p>
          <p className="mb-8 text-sm text-white/55">
            Join 500+ founding vendors already on noshtio — and the customers who love them.
          </p>
          <DownloadButtons size="sm" />
        </div>
      </section>
    </div>
  )
}
