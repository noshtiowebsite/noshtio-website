'use client'
import { Button } from '@/components/ui/button'
import { incrementCounter } from '@/lib/counters'

export default function DownloadButton() {
  return (
    <Button
      variant="outline"
      className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 text-lg font-medium"
      onClick={() => incrementCounter('downloads')}
    >
      Download App
    </Button>
  )
}
