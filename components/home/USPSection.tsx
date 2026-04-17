import Link from 'next/link'

const menuUploadBullets = [
  'Works with printed, handwritten or digital menus',
  'Supports Hindi, English and regional languages',
  'Edit and update your menu anytime after upload',
]

const posBullets = [
  'Walk-in, takeaway and delivery — all in one place',
  'Daily sales summary and cash reconciliation',
  'Works on mobile, tablet and desktop',
]

export default function USPSection() {
  return (
    <section aria-label="Key features">
      {/* Block 1: Menu Upload — navy left, white right */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: navy emoji panel */}
        <div className="bg-[#0D1B3E] flex items-center justify-center min-h-[240px] lg:min-h-[400px] py-16 lg:py-0">
          <span
            className="text-8xl select-none"
            style={{ filter: 'drop-shadow(0 0 32px rgba(201,168,76,0.75))' }}
            role="img"
            aria-label="Camera"
          >
            📸
          </span>
        </div>

        {/* Right: white copy panel */}
        <div className="bg-white flex items-center py-14 px-8 sm:px-12 lg:px-14 min-h-[400px]">
          <div className="max-w-lg w-full">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#C9A84C] mb-4">
              EXCLUSIVE FEATURE
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] leading-tight mb-2">
              Your Menu is Already Ready
            </h2>
            <p className="text-lg font-medium text-[#0D1B3E]/60 mb-5">
              Just Click a Photo
            </p>
            <p className="text-gray-600 leading-relaxed mb-7">
              Already have a printed menu? Take one photo.{' '}
              We put it online in under 2 minutes.{' '}
              No typing. No tech skills needed.
            </p>
            <ul className="space-y-3 mb-8">
              {menuUploadBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                  <span className="text-[#C9A84C] font-bold leading-snug mt-0.5 shrink-0">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/vendor/register"
              className="inline-flex items-center justify-center rounded-lg bg-[#C9A84C] px-7 py-3 text-sm font-semibold text-[#0D1B3E] transition-all hover:brightness-105 hover:shadow-lg hover:shadow-[#C9A84C]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
            >
              Upload Your Menu Free
            </Link>
          </div>
        </div>
      </div>

      {/* Block 2: POS — white left, navy right */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: white copy panel — shows below emoji on mobile */}
        <div className="bg-white flex items-center py-14 px-8 sm:px-12 lg:px-14 min-h-[400px] order-2 lg:order-1">
          <div className="max-w-lg w-full">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#1E6FFF] mb-4">
              FREE WITH NOSHTIO
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] leading-tight mb-2">
              One Screen. Every Order.
            </h2>
            <p className="text-lg font-medium text-[#0D1B3E]/60 mb-5">
              Zero Confusion.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7">
              Walk-in customers, online orders, takeaways —{' '}
              all managed from one single screen.{' '}
              Built-in POS, free with noshtio.
            </p>
            <ul className="space-y-3 mb-8">
              {posBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                  <span className="text-[#C9A84C] font-bold leading-snug mt-0.5 shrink-0">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/vendor/register"
              className="inline-flex items-center justify-center rounded-lg bg-[#0D1B3E] px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-[#0D1B3E]/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B3E]"
            >
              Get Your Free POS
            </Link>
          </div>
        </div>

        {/* Right: navy emoji panel */}
        <div className="bg-[#0D1B3E] flex items-center justify-center min-h-[240px] lg:min-h-[400px] py-16 lg:py-0 order-1 lg:order-2">
          <span
            className="text-8xl select-none"
            style={{ filter: 'drop-shadow(0 0 32px rgba(30,111,255,0.75))' }}
            role="img"
            aria-label="Desktop computer"
          >
            🖥️
          </span>
        </div>
      </div>
    </section>
  )
}
