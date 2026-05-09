'use client'
import { useState, useRef, useEffect } from 'react'
import { X, Send, Loader2, Bot } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME = "Hi! I'm noshtio's assistant. Ask me about vendor registration, our cities, or how zero-commission works! 🍽️"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [open])

  async function send() {
    const text = input.trim()
    if (!text || streaming) return
    setInput('')

    const next: Message[] = [...messages, { role: 'user', content: text }]
    setMessages(next)
    setStreaming(true)

    const assistantIndex = next.length
    setMessages((m) => [...m, { role: 'assistant', content: '' }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })

      if (!res.ok || !res.body) throw new Error('Failed')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += decoder.decode(value, { stream: true })
        setMessages((m) => {
          const copy = [...m]
          copy[assistantIndex] = { role: 'assistant', content: accumulated }
          return copy
        })
      }
    } catch {
      setMessages((m) => {
        const copy = [...m]
        copy[assistantIndex] = {
          role: 'assistant',
          content: "Sorry, I couldn't connect right now. Please try again or email hello@noshtio.com.",
        }
        return copy
      })
    } finally {
      setStreaming(false)
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-36 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-white/10"
          style={{ height: 'clamp(380px, 60vh, 500px)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0D1B3E]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center text-sm">
                🤖
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">noshtio Assistant</p>
                <p className="text-white/50 text-xs mt-0.5">Powered by AI</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-[#0D1B3E]/95 px-4 py-4 space-y-3">
            {/* Welcome bubble */}
            <div className="flex gap-2 items-start">
              <div className="w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center shrink-0 text-xs mt-0.5">
                🤖
              </div>
              <div className="bg-white/10 text-white/90 text-sm rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%] leading-relaxed">
                {WELCOME}
              </div>
            </div>

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 items-start ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center shrink-0 text-xs mt-0.5">
                    🤖
                  </div>
                )}
                <div
                  className={`text-sm rounded-2xl px-3.5 py-2.5 max-w-[85%] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#C9A84C] text-[#0D1B3E] font-medium rounded-tr-sm'
                      : 'bg-white/10 text-white/90 rounded-tl-sm'
                  }`}
                >
                  {msg.content || (
                    <span className="flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce [animation-delay:300ms]" />
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 bg-[#0D1B3E] border-t border-white/10 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about noshtio…"
              disabled={streaming}
              className="flex-1 bg-white/10 text-white placeholder-white/40 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/60 disabled:opacity-50 transition-all"
            />
            <button
              onClick={send}
              disabled={streaming || !input.trim()}
              className="w-10 h-10 rounded-xl bg-[#C9A84C] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all shrink-0"
              aria-label="Send message"
            >
              {streaming ? (
                <Loader2 className="w-4 h-4 text-[#0D1B3E] animate-spin" />
              ) : (
                <Send className="w-4 h-4 text-[#0D1B3E]" />
              )}
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-20 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-[#C9A84C] hover:brightness-110 shadow-lg hover:shadow-xl hover:shadow-[#C9A84C]/30 transition-all duration-200 flex items-center justify-center text-2xl"
        aria-label={open ? 'Close chat' : 'Open AI chat'}
      >
        {open ? <X className="w-6 h-6 text-[#0D1B3E]" /> : '🤖'}
      </button>
    </>
  )
}
