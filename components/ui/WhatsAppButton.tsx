'use client'

import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919999999999'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hi noshtio! I have a question about listing my stall on the marketplace.'
)

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with noshtio support on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 animate-bounce-gentle"
    >
      <MessageCircle
        className="h-7 w-7 fill-white text-white"
        strokeWidth={0}
        aria-hidden="true"
      />
      <span className="sr-only">WhatsApp Support</span>
    </a>
  )
}
