import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, Users, TrendingUp } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-gold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-6">
            Be a Founding Vendor on noshtio
          </h2>

          <p className="text-xl text-navy/80 mb-8 max-w-2xl mx-auto">
            Onboard yourself today — zero commission, full profit, forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/vendor/register">
              <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-4 text-lg font-medium">
                Claim Your Free Vendor Spot
              </Button>
            </Link>
            <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 text-lg font-medium">
              Download App
            </Button>
          </div>

          <div className="text-navy/70 text-center mb-8">
            Already 500+ vendors have joined | No credit card required
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-navy">
            <div className="flex flex-col items-center">
              <Star className="w-8 h-8 mb-3" />
              <div className="font-display font-bold text-2xl mb-1">Target: 1,000</div>
              <div className="text-navy/70">Founding Vendors</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 mb-3" />
              <div className="font-display font-bold text-2xl mb-1">10,000</div>
              <div className="text-navy/70">Customers</div>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-8 h-8 mb-3" />
              <div className="font-display font-bold text-2xl mb-1">15+</div>
              <div className="text-navy/70">Cities Covered</div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-navy/20">
            <p className="text-navy/70 text-sm">
              No setup fees • No monthly charges • No commission on orders • 24/7 support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}