'use client'

import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { incrementCounter } from '@/lib/counters'

async function trackClick(platform: 'ios' | 'android') {
  try {
    await Promise.all([
      incrementCounter('downloads'),
      addDoc(collection(db, 'app_downloads'), {
        platform,
        timestamp: serverTimestamp(),
        page: '/download',
      }),
    ])
  } catch {
    // silently fail — analytics must never break the UI
  }
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 flex-shrink-0 fill-current" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 flex-shrink-0 fill-current" aria-hidden="true">
      <path d="M3.18 23.76a2 2 0 0 0 2.07-.22L17 14.93l-3.47-3.47L3.18 23.76zM20.44 10.66l-2.96-1.7-3.89 3.47 3.89 3.47 2.99-1.73c.85-.49.85-1.53-.03-2.01zM2.05 1.42C1.72 1.72 1.5 2.2 1.5 2.81v18.38c0 .61.22 1.09.55 1.39l.06.06L12.43 12v-.25L2.11 1.36l-.06.06zM13.34 9.56l3.47-3.47L4.99.62a2 2 0 0 0-2.07-.21l10.42 9.15z" />
    </svg>
  )
}

interface Props {
  size?: 'lg' | 'sm'
}

export default function DownloadButtons({ size = 'lg' }: Props) {
  const isLg = size === 'lg'

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {/* App Store */}
      <a
        href="#"
        onClick={() => trackClick('ios')}
        aria-label="Download noshtio on the App Store (coming soon)"
        className={`group inline-flex items-center gap-3 rounded-2xl border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-all hover:border-gold/50 hover:bg-white/15 hover:shadow-xl hover:shadow-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
          isLg ? 'h-14 px-6 text-base' : 'h-12 px-5 text-sm'
        }`}
      >
        <AppleIcon />
        <div className="text-left">
          <p className={`leading-tight text-white/60 ${isLg ? 'text-[11px]' : 'text-[10px]'}`}>
            Download on the
          </p>
          <p className="font-semibold">App Store</p>
        </div>
      </a>

      {/* Google Play */}
      <a
        href="#"
        onClick={() => trackClick('android')}
        aria-label="Get noshtio on Google Play (coming soon)"
        className={`group inline-flex items-center gap-3 rounded-2xl bg-gold text-navy transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
          isLg ? 'h-14 px-6 text-base' : 'h-12 px-5 text-sm'
        }`}
      >
        <PlayIcon />
        <div className="text-left">
          <p className={`leading-tight text-navy/60 ${isLg ? 'text-[11px]' : 'text-[10px]'}`}>
            Get it on
          </p>
          <p className="font-semibold">Google Play</p>
        </div>
      </a>
    </div>
  )
}
