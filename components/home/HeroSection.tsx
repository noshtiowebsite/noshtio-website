import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      {/* Animated floating circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-electricBlue/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/5 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gold/5 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              Onboard Yourself.
              <br />
              <span className="text-gold">Earn 100% Profit.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Join noshtio free — zero commission forever. Be among our founding vendors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
              <Link href="/vendor/register">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  Join as Founding Vendor — Free
                </Button>
              </Link>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8 py-3">
                Download App
              </Button>
            </div>

            <div className="bg-gold/20 text-gold font-semibold px-4 py-2 rounded-full text-sm inline-block mb-4">
              Limited founding vendor spots available
            </div>

            <a href="/vendor/register" className="text-gold hover:text-gold/80 text-lg font-medium inline-flex items-center">
              Are you a vendor? Onboard free →
            </a>
          </div>

          {/* Right content - App mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative transform scale-110 lg:scale-125">
              <div className="w-80 h-[600px] bg-gradient-to-br from-electricBlue to-navy rounded-3xl border-4 border-white/20 shadow-2xl">
                <div className="p-8 text-white">
                  <div className="w-full h-10 bg-white/20 rounded-full mb-6"></div>
                  <div className="space-y-4">
                    <div className="w-3/4 h-5 bg-white/10 rounded"></div>
                    <div className="w-1/2 h-5 bg-white/10 rounded"></div>
                    <div className="w-2/3 h-5 bg-white/10 rounded"></div>
                  </div>
                  <div className="mt-12 space-y-6">
                    <div className="w-full h-24 bg-white/10 rounded-lg"></div>
                    <div className="w-full h-24 bg-white/10 rounded-lg"></div>
                    <div className="w-full h-24 bg-white/10 rounded-lg"></div>
                  </div>
                </div>
              </div>
              {/* Floating elements around mockup */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg">
                <span className="text-navy font-bold text-xl">★</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-electricBlue rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}