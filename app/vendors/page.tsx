import type { Metadata } from 'next'
import { generatePageMeta } from '@/lib/seo'
import VendorsDirectory from '@/components/vendors/VendorsDirectory'

export const metadata: Metadata = generatePageMeta(
  'Vendor Directory',
  'Discover authentic local food vendors across Delhi, Noida, Ghaziabad, and Gurugram. Browse restaurants, home chefs, cloud kitchens, street food stalls, and caterers — all on noshtio.',
  '/vendors'
)

export default function VendorsPage() {
  return <VendorsDirectory />
}
