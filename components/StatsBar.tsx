'use client'
import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default function StatsBar() {
  const [visits, setVisits] = useState<number | null>(null)
  const [downloads, setDownloads] = useState<number | null>(null)

  useEffect(() => {
    const unsubVisits = onSnapshot(doc(db, 'counters', 'visits'), (snap) => {
      setVisits(snap.data()?.count ?? 0)
    })
    const unsubDownloads = onSnapshot(doc(db, 'counters', 'downloads'), (snap) => {
      setDownloads(snap.data()?.count ?? 0)
    })
    return () => { unsubVisits(); unsubDownloads() }
  }, [])

  if (visits === null && downloads === null) return null

  return (
    <div className="bg-navy/5 border-t border-navy/10 py-2 text-center text-sm text-navy/60 font-sans">
      👁️ {visits?.toLocaleString('en-IN') ?? '—'} Visits &nbsp;|&nbsp; 📥 {downloads?.toLocaleString('en-IN') ?? '—'} Downloads
    </div>
  )
}
