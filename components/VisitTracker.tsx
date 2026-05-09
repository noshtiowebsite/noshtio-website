'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { incrementCounter } from '@/lib/counters'

export default function VisitTracker() {
  const pathname = usePathname()
  useEffect(() => {
    incrementCounter('visits')
  }, [pathname])
  return null
}
