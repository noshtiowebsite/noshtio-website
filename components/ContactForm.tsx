'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { toast } from 'sonner'
import { Loader2, Send, CheckCircle } from 'lucide-react'

const SUBJECTS = [
  'General Enquiry',
  'Vendor Support',
  'Partnership',
  'Press/Media',
  'Other',
] as const

const schema = z.object({
  fullName: z.string().min(2, 'Enter your full name'),
  email: z.string().email('Enter a valid email address'),
  phone: z
    .string()
    .refine(
      (v) => v === '' || /^[6-9]\d{9}$/.test(v),
      'Enter a valid 10-digit Indian mobile number'
    )
    .optional(),
  subject: z.string().min(1, 'Select a subject'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FormData = z.infer<typeof schema>

function generateRef(): string {
  return 'ENQ-' + Math.random().toString(36).substring(2, 6).toUpperCase()
}

const inputClass =
  'w-full rounded-lg border border-gray-300 px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all placeholder:text-gray-400'

const labelClass = 'block text-sm font-semibold text-navy mb-1.5'
const errorClass = 'mt-1 text-xs text-red-500'

export default function ContactForm() {
  const [refNumber, setRefNumber] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const messageValue = watch('message') ?? ''

  async function onSubmit(data: FormData) {
    const ref = generateRef()
    try {
      await addDoc(collection(db, 'enquiries'), {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone ?? '',
        subject: data.subject,
        message: data.message,
        refNumber: ref,
        createdAt: serverTimestamp(),
        status: 'new',
      })
      setRefNumber(ref)
      toast.success('Message received! Reference: ' + ref)
      reset()
    } catch {
      toast.error('Failed to send message. Please try again.')
    }
  }

  if (refNumber) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-display font-bold text-navy mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-600 mb-6">
          We&apos;ll get back to you within 24 hours.
        </p>
        <div className="inline-block bg-navy text-gold font-mono font-bold text-lg px-6 py-3 rounded-xl mb-6 tracking-widest">
          {refNumber}
        </div>
        <p className="text-xs text-gray-500 mb-6">
          Save this reference number for follow-ups.
        </p>
        <button
          onClick={() => setRefNumber(null)}
          className="text-sm text-gold underline underline-offset-2 hover:text-gold/80 transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Full Name + Email */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className={labelClass}>Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="Your full name"
            className={inputClass}
            {...register('fullName')}
          />
          {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className={inputClass}
            {...register('email')}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Phone (optional) */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number{' '}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
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

      {/* Subject */}
      <div>
        <label htmlFor="subject" className={labelClass}>Subject</label>
        <select
          id="subject"
          className={inputClass}
          defaultValue=""
          {...register('subject')}
        >
          <option value="" disabled>Select a subject</option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          rows={6}
          placeholder="Tell us how we can help you… (min 20 characters)"
          className={inputClass + ' resize-none'}
          {...register('message')}
        />
        <div className="flex items-center justify-between mt-1">
          {errors.message
            ? <p className={errorClass}>{errors.message.message}</p>
            : <span />}
          <span className={`text-xs ${messageValue.length < 20 ? 'text-gray-400' : 'text-green-600'}`}>
            {messageValue.length} / 20 min
          </span>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-4 text-base font-semibold text-white transition-all hover:bg-navy/90 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
