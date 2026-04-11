import Link from 'next/link';
import { ChefHat } from 'lucide-react';

export default function VendorCTA() {
  return (
    <div className="my-8 rounded-lg bg-gradient-to-r from-navy to-navy/90 p-6 text-center text-white">
      <ChefHat className="mx-auto mb-4 h-12 w-12 text-gold" />
      <h3 className="mb-2 font-display text-xl font-bold">
        Ready to Start Your Food Business?
      </h3>
      <p className="mb-6 text-white/80">
        Join noshtio today and keep 100% of your food sales. No commissions, no hidden fees.
      </p>
      <Link
        href="/vendor/register?utm_source=blog"
        className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-semibold text-navy transition-all hover:bg-gold/90 hover:shadow-lg"
      >
        Join as Vendor
        <ChefHat className="h-4 w-4" />
      </Link>
    </div>
  );
}
