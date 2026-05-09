'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

const schema = z.object({
  fullName: z.string().min(2, 'Enter your full name'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  city: z.string().min(1, 'Select your city'),
  category: z.string().min(1, 'Select food category'),
  monthlyOrders: z.string().min(1, 'Select monthly orders range'),
})

type FormData = z.infer<typeof schema>

const cities = [
  'Delhi', 'Mumbai', 'Lucknow', 'Jaipur', 'Kanpur',
  'Agra', 'Varanasi', 'Noida', 'Gurgaon', 'Pune',
  'Hyderabad', 'Bengaluru', 'Ahmedabad', 'Indore', 'Bhopal', 'Other',
]

const categories = [
  'Restaurant',
  'Home Chef',
  'Cloud Kitchen',
  'Street Food',
  'Catering',
]

const monthlyOrderOptions = ['0–50', '50–200', '200–500', '500+']

const inputClass =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all placeholder:text-gray-400'

const labelClass = 'block text-sm font-semibold text-navy mb-1.5'

const errorClass = 'mt-1 text-xs text-red-500'

export default function VendorLeadForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    try {
      await addDoc(collection(db, 'vendor_leads'), {
        ...data,
        createdAt: serverTimestamp(),
      })
      toast.success("You're on the list! We'll reach out on WhatsApp shortly.", {
        description: 'Welcome to the noshtio founding vendor family.',
        duration: 5000,
      })
      setSubmitted(true)
      reset()
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-display font-bold text-navy mb-2">
          You're in!
        </h3>
        <p className="text-gray-600">
          We'll reach out on WhatsApp within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-gold underline underline-offset-2 hover:text-gold/80 transition-colors"
        >
          Submit another response
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className={labelClass}>Full Name</label>
        <input
          id="fullName"
          type="text"
          placeholder="e.g. Priya Sharma"
          className={inputClass}
          {...register('fullName')}
        />
        {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className={labelClass}>Phone Number</label>
        <input
          id="phone"
          type="tel"
          placeholder="10-digit mobile number"
          maxLength={10}
          className={inputClass}
          {...register('phone')}
        />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      {/* City */}
      <div>
        <label htmlFor="city" className={labelClass}>City</label>
        <select id="city" className={inputClass} {...register('city')} defaultValue="">
          <option value="" disabled>Select your city</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {errors.city && <p className={errorClass}>{errors.city.message}</p>}
      </div>

      {/* Food Category */}
      <div>
        <label htmlFor="category" className={labelClass}>Food Category</label>
        <select id="category" className={inputClass} {...register('category')} defaultValue="">
          <option value="" disabled>Select category</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {errors.category && <p className={errorClass}>{errors.category.message}</p>}
      </div>

      {/* Monthly Orders */}
      <div>
        <label htmlFor="monthlyOrders" className={labelClass}>Monthly Orders</label>
        <select id="monthlyOrders" className={inputClass} {...register('monthlyOrders')} defaultValue="">
          <option value="" disabled>Select range</option>
          {monthlyOrderOptions.map((o) => (
            <option key={o} value={o}>{o} orders/month</option>
          ))}
        </select>
        {errors.monthlyOrders && <p className={errorClass}>{errors.monthlyOrders.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-4 text-base font-semibold text-navy transition-all hover:brightness-105 hover:shadow-lg hover:shadow-gold/30 disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Saving…
          </>
        ) : (
          'Claim My Founding Vendor Spot — Free'
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        No fees • No commission • We'll contact you on WhatsApp
      </p>
    </form>
  )
}
