'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { Star, PenLine, X, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { db } from '@/lib/firebase'
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore'
import { getSeedReviews, type Review } from '@/lib/reviews'

interface Props {
  vendorSlug: string
  vendorName: string
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function StarRow({
  rating,
  size = 'md',
}: {
  rating: number
  size?: 'sm' | 'md'
}) {
  const cls = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`${cls} ${s <= rating ? 'fill-gold text-gold' : 'fill-white/10 text-white/20'}`}
          aria-hidden="true"
        />
      ))}
    </span>
  )
}

function RatingBar({ star, count, total }: { star: number; count: number; total: number }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="w-4 text-right text-white/60">{star}</span>
      <Star className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden="true" />
      <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/10">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gold transition-all duration-500"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${star} star: ${count} reviews`}
        />
      </div>
      <span className="w-6 text-right text-xs text-white/40">{count}</span>
    </div>
  )
}

interface FormState {
  name: string
  rating: number
  text: string
}

export default function ReviewsSection({ vendorSlug, vendorName }: Props) {
  const seeds = getSeedReviews(vendorSlug)
  const [reviews, setReviews] = useState<Review[]>(seeds)
  const [modalOpen, setModalOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState<FormState>({ name: '', rating: 0, text: '' })
  const [hoverRating, setHoverRating] = useState(0)
  const firstFocusRef = useRef<HTMLInputElement>(null)

  // Fetch Firestore reviews and prepend to seeds
  useEffect(() => {
    const fetchFirestoreReviews = async () => {
      try {
        const q = query(
          collection(db, 'reviews', vendorSlug, 'entries'),
          orderBy('createdAt', 'desc')
        )
        const snap = await getDocs(q)
        const fetched: Review[] = snap.docs.map((doc) => {
          const d = doc.data()
          const ts = d.createdAt
          return {
            id: doc.id,
            customerName: d.customerName,
            rating: d.rating,
            text: d.text,
            createdAt: ts instanceof Timestamp ? ts.toDate().toISOString() : String(ts),
          }
        })
        if (fetched.length > 0) {
          setReviews([...fetched, ...seeds])
        }
      } catch {
        // Firebase not configured or permission denied — seeds remain
      }
    }
    fetchFirestoreReviews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vendorSlug])

  // Close modal on Escape
  useEffect(() => {
    if (!modalOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [modalOpen])

  // Focus first input when modal opens
  useEffect(() => {
    if (modalOpen) {
      setTimeout(() => firstFocusRef.current?.focus(), 50)
    }
  }, [modalOpen])

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!form.name.trim() || form.rating === 0 || !form.text.trim()) {
        toast.error('Please fill in all fields and select a star rating.')
        return
      }

      setSubmitting(true)
      try {
        const docRef = await addDoc(
          collection(db, 'reviews', vendorSlug, 'entries'),
          {
            customerName: form.name.trim(),
            rating: form.rating,
            text: form.text.trim(),
            createdAt: serverTimestamp(),
          }
        )
        const newReview: Review = {
          id: docRef.id,
          customerName: form.name.trim(),
          rating: form.rating,
          text: form.text.trim(),
          createdAt: new Date().toISOString(),
        }
        setReviews((prev) => [newReview, ...prev])
        setModalOpen(false)
        setForm({ name: '', rating: 0, text: '' })
        toast.success('Review submitted! Thank you for sharing your experience.')
      } catch {
        toast.error('Could not save review. Please try again.')
      } finally {
        setSubmitting(false)
      }
    },
    [form, vendorSlug]
  )

  // Rating summary
  const total = reviews.length
  const avg = total > 0 ? reviews.reduce((s, r) => s + r.rating, 0) / total : 0
  const breakdown = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }))

  const displayRating = (hoverRating || form.rating)

  return (
    <section aria-labelledby="reviews-heading">
      {/* Section header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-gold" id="reviews-heading">
          Customer Reviews
        </h2>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-white/8 px-4 py-2 text-sm font-medium text-white/80 transition-all hover:bg-gold/15 hover:text-gold border border-white/10 hover:border-gold/30"
        >
          <PenLine className="h-4 w-4" aria-hidden="true" />
          Write a Review
        </button>
      </div>

      {/* Rating summary */}
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center sm:gap-8">
        {/* Big average number */}
        <div className="flex flex-col items-center sm:min-w-[100px]">
          <span className="font-display text-5xl font-black text-gold">
            {avg.toFixed(1)}
          </span>
          <StarRow rating={Math.round(avg)} size="sm" />
          <span className="mt-1 text-xs text-white/40">{total} review{total !== 1 ? 's' : ''}</span>
        </div>

        {/* Breakdown bars */}
        <div className="flex-1 space-y-2">
          {breakdown.map(({ star, count }) => (
            <RatingBar key={star} star={star} count={count} total={total} />
          ))}
        </div>
      </div>

      {/* Review cards */}
      {reviews.length === 0 ? (
        <p className="py-8 text-center text-sm text-white/40">
          No reviews yet — be the first to share your experience!
        </p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 font-display text-sm font-bold text-gold"
                  >
                    {review.customerName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{review.customerName}</p>
                    <StarRow rating={review.rating} size="sm" />
                  </div>
                </div>
                <time
                  dateTime={review.createdAt}
                  className="flex-shrink-0 text-xs text-white/30"
                >
                  {formatDate(review.createdAt)}
                </time>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{review.text}</p>
            </li>
          ))}
        </ul>
      )}

      {/* ——— Write a Review Modal ——— */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/15 bg-navy shadow-2xl">
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <h3 className="font-display text-base font-semibold text-white" id="modal-title">
                Review <span className="text-gold">{vendorName}</span>
              </h3>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-lg p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Close review modal"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 p-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="review-name"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50"
                >
                  Your Name
                </label>
                <input
                  id="review-name"
                  ref={firstFocusRef}
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="e.g. Priya S."
                  maxLength={60}
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
                />
              </div>

              {/* Star selector */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                  Your Rating
                </p>
                <div
                  className="flex gap-1"
                  role="radiogroup"
                  aria-label="Select star rating"
                  onMouseLeave={() => setHoverRating(0)}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      role="radio"
                      aria-checked={form.rating === star}
                      aria-label={`${star} star${star > 1 ? 's' : ''}`}
                      onMouseEnter={() => setHoverRating(star)}
                      onClick={() => setForm((f) => ({ ...f, rating: star }))}
                      className="rounded p-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      <Star
                        className={`h-8 w-8 transition-all ${
                          star <= displayRating
                            ? 'fill-gold text-gold scale-110'
                            : 'fill-white/10 text-white/30 hover:fill-gold/30 hover:text-gold/50'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  ))}
                </div>
                {form.rating > 0 && (
                  <p className="mt-1 text-xs text-gold/70">
                    {['', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'][form.rating]}
                  </p>
                )}
              </div>

              {/* Review text */}
              <div>
                <label
                  htmlFor="review-text"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50"
                >
                  Your Review
                </label>
                <textarea
                  id="review-text"
                  value={form.text}
                  onChange={(e) => setForm((f) => ({ ...f, text: e.target.value }))}
                  placeholder="What did you love? What could be better?"
                  rows={4}
                  maxLength={500}
                  required
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
                />
                <p className="mt-1 text-right text-xs text-white/30">
                  {form.text.length}/500
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="flex-1 rounded-xl border border-white/15 py-3 text-sm font-medium text-white/60 transition-colors hover:border-white/30 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gold py-3 text-sm font-semibold text-navy transition-all hover:bg-gold-400 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Saving…
                    </>
                  ) : (
                    'Submit Review'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
