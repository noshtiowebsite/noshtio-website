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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4">
              Discover Local Food.
              <br />
              <span className="text-gold">Support Real Vendors.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
              India's zero-commission hyperlocal food vendor marketplace. The Art of Shared Plates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <Download className="w-5 h-5 mr-2" />
                Download Android
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8 py-3">
                <Smartphone className="w-5 h-5 mr-2" />
                Download iOS
              </Button>
            </div>

            <a href="#" className="text-gold hover:text-gold/80 text-lg font-medium inline-flex items-center">
              Are you a vendor? List free →
            </a>
          </div>

          {/* Right content - App mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-[500px] bg-gradient-to-br from-electricBlue to-navy rounded-3xl border-4 border-white/20 shadow-2xl">
                <div className="p-6 text-white">
                  <div className="w-full h-8 bg-white/20 rounded-full mb-4"></div>
                  <div className="space-y-3">
                    <div className="w-3/4 h-4 bg-white/10 rounded"></div>
                    <div className="w-1/2 h-4 bg-white/10 rounded"></div>
                    <div className="w-2/3 h-4 bg-white/10 rounded"></div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <div className="w-full h-20 bg-white/10 rounded-lg"></div>
                    <div className="w-full h-20 bg-white/10 rounded-lg"></div>
                    <div className="w-full h-20 bg-white/10 rounded-lg"></div>
                  </div>
                </div>
              </div>
              {/* Floating elements around mockup */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <span className="text-navy font-bold">★</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-electricBlue rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}