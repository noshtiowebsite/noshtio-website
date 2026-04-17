'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, MessageCircle, CheckCircle2, Home } from 'lucide-react';

function WelcomeContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'there';

  return (
    <main className="min-h-screen bg-gradient-to-b from-navy to-navy/95 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        {/* Success Animation */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative h-32 w-32 animate-bounce">
              <div className="absolute inset-0 rounded-full bg-gold/20 blur-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <CheckCircle2 className="h-24 w-24 text-gold" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <h1 className="font-display text-4xl font-bold text-gold">
            Welcome to noshtio Family!
          </h1>
          <p className="mt-3 text-lg text-white/80">
            You are now a founding vendor. Help us reach 1,000 vendors and 10,000 customers together.
          </p>
        </div>

        {/* Main Card */}
        <Card className="border-0 bg-white p-8 shadow-2xl mb-8">
          {/* What Happens Next */}
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-navy mb-6">
              What happens next?
            </h2>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold text-navy font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-navy">
                    We'll WhatsApp you within 2 hours
                  </h3>
                  <p className="mt-1 text-sm text-navy/60">
                    Our onboarding team will reach out to confirm details and answer any questions.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-electricBlue text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Download the vendor app</h3>
                  <p className="mt-1 text-sm text-navy/60">
                    Get the noshtio vendor app to manage orders and payments directly.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy text-gold font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Upload your menu and go live</h3>
                  <p className="mt-1 text-sm text-navy/60">
                    Add your dishes, set pricing, and start receiving orders within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* App Download Buttons */}
          <div className="my-8 border-y border-gray-200 py-8">
            <h3 className="font-display text-lg font-bold text-navy mb-4">
              Download the vendor app
            </h3>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 text-white transition-all hover:bg-navy/90"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs opacity-75">Download from</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 text-white transition-all hover:bg-navy/90"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3.18 23.76a2 2 0 0 0 2.07-.22L17 14.93l-3.47-3.47L3.18 23.76zM20.44 10.66l-2.96-1.7-3.89 3.47 3.89 3.47 2.99-1.73c.85-.49.85-1.53-.03-2.01zM2.05 1.42C1.72 1.72 1.5 2.2 1.5 2.81v18.38c0 .61.22 1.09.55 1.39l.06.06L12.43 12v-.25L2.11 1.36l-.06.06zM13.34 9.56l3.47-3.47L4.99.62a2 2 0 0 0-2.07-.21l10.42 9.15z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs opacity-75">Get it on</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Referral Message */}
          <div className="my-8 border-y border-gray-200 py-8 text-center">
            <h3 className="font-display text-lg font-bold text-navy mb-3">
              Help us grow together
            </h3>
            <p className="text-sm text-navy/70 mb-6">
              Share noshtio with fellow vendors — help us build India's best zero-commission food platform together.
            </p>
            <a
              href={`https://wa.me/?text=${encodeURIComponent("Join me as a founding vendor on noshtio! Zero commission forever. Be among our first 1,000 vendors. Sign up: https://noshtio.com/vendor/register")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-all hover:bg-[#20ba5e]"
            >
              <MessageCircle className="h-5 w-5" />
              Share with Vendor Friends
            </a>
          </div>

          {/* WhatsApp Support Button */}
          <div className="text-center">
            <p className="mb-4 text-sm text-navy/60">Have questions? Connect with us on WhatsApp</p>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-all hover:bg-[#20ba5e]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Support Team
            </a>
          </div>
        </Card>

        {/* Go to Homepage Link */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 text-white hover:text-gold transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Go to Homepage</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function WelcomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy" />}>
      <WelcomeContent />
    </Suspense>
  );
}
