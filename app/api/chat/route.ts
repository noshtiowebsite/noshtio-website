import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

export const runtime = 'nodejs'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are noshtio's friendly assistant. noshtio is India's first zero-commission hyperlocal food vendor marketplace.

Key facts:
- Zero commission platform — vendors keep 100% of their earnings
- Currently live in 4 cities: Delhi, Noida, Ghaziabad, Gurugram
- 12 more cities coming soon (Bangalore, Mumbai, Hyderabad, Chennai, Pune, Kolkata, Jaipur, Ahmedabad, Chandigarh, Indore, Lucknow, Surat)
- Founding vendors get premium placement, early access, and free onboarding support
- Vendors register at noshtio.com/for-vendors
- Contact: hello@noshtio.com or WhatsApp support

Help visitors:
1. Understand how noshtio works (zero commission, hyperlocal discovery)
2. Learn about vendor registration and benefits
3. Check city availability
4. Navigate to the right page (for-vendors, cities, contact)

Keep responses concise (2-4 sentences max). Be warm, helpful, and enthusiastic about food. If asked something outside noshtio, gently redirect to noshtio topics.`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    const stream = client.messages.stream({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages,
    })

    const encoder = new TextEncoder()

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text))
            }
          }
          controller.close()
        } catch (streamErr) {
          controller.error(streamErr)
        }
      },
    })

    return new Response(readable, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  } catch (err) {
    console.error('[chat] error:', err)
    return Response.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    )
  }
}
