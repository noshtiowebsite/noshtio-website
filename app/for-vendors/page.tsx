import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingDown, DollarSign, Shield, Zap, FileText, Smartphone, CheckCircle, Clock, ChefHat, Package, Cake, Users, Star } from "lucide-react";
import SavingsCalculator from "@/components/vendors/SavingsCalculator";

export const metadata: Metadata = {
  title: "For Vendors | noshtio - Zero Commission Food Platform",
  description: "Join India's zero-commission hyperlocal food marketplace. Keep 100% of your earnings, reach more customers, and grow your food business with noshtio.",
  keywords: "food vendors, zero commission, hyperlocal food delivery, restaurant platform, home kitchen, food business",
  openGraph: {
    title: "For Vendors | noshtio - Zero Commission Food Platform",
    description: "Join India's zero-commission hyperlocal food marketplace. Keep 100% of your earnings.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://noshtio.com/#organization",
      "name": "noshtio",
      "url": "https://noshtio.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://noshtio.com/logo.png"
      },
      "description": "India's zero-commission hyperlocal food vendor marketplace",
      "foundingDate": "2024",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9999999999",
        "contactType": "customer service"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much commission does noshtio charge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "noshtio charges 0% commission on all orders. You keep 100% of your earnings."
          }
        },
        {
          "@type": "Question",
          "name": "Is there any setup fee or monthly subscription?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No setup fees or monthly subscriptions. noshtio is completely free for vendors."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can I start receiving orders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most vendors go live within minutes after completing their profile and menu upload."
          }
        }
      ]
    }
  ]
};

const testimonials = [
  {
    quote: "noshtio has transformed my home kitchen business. Zero commissions mean I can finally make a living doing what I love - cooking traditional Lucknowi dishes for my community.",
    name: "Priya Sharma",
    location: "Lucknow",
    role: "Home Kitchen Owner"
  },
  {
    quote: "As a small restaurant in Delhi, we were struggling with high platform fees. noshtio's zero commission model has increased our profits by 30% and helped us reach more customers.",
    name: "Rahul Verma",
    location: "Delhi",
    role: "Restaurant Owner"
  },
  {
    quote: "My Jaipur sweets business was barely surviving with all the commissions. Now with noshtio, I keep all my earnings and have grown from 50 to 200 daily orders in just 6 months.",
    name: "Meena Choudhary",
    location: "Jaipur",
    role: "Sweets & Bakery Owner"
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Zero Commission",
    description: "Keep 100% of your order value"
  },
  {
    icon: TrendingDown,
    title: "Flat Subscription",
    description: "No hidden fees or charges"
  },
  {
    icon: Shield,
    title: "Custodian Payments",
    description: "Secure payment processing"
  },
  {
    icon: Zap,
    title: "Go Live in Minutes",
    description: "Quick and easy onboarding"
  },
  {
    icon: FileText,
    title: "Phased KYC",
    description: "Complete verification at your pace"
  },
  {
    icon: Smartphone,
    title: "Vendor Mobile App",
    description: "Manage orders on the go"
  }
];

const vendorTypes = [
  {
    icon: ChefHat,
    title: "Home Kitchens",
    description: "Homemade meals from local homes"
  },
  {
    icon: Users,
    title: "Restaurants",
    description: "Traditional and modern eateries"
  },
  {
    icon: Package,
    title: "Cloud Kitchens",
    description: "Delivery-focused kitchens"
  },
  {
    icon: Package,
    title: "Tiffin Services",
    description: "Daily meal delivery services"
  },
  {
    icon: Cake,
    title: "Sweet Shops",
    description: "Traditional sweets and desserts"
  },
  {
    icon: Cake,
    title: "Bakeries",
    description: "Fresh breads and baked goods"
  }
];

export default function ForVendorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* HERO */}
        <section className="py-20 bg-navy text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              <span className="text-gold">Onboard Yourself.</span>
              <br />
              <span className="text-navy">Keep Every Rupee.</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join noshtio as a founding vendor — zero commission forever. 
              We are building India's most vendor-friendly food platform together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/vendor/register">
                <Button className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 text-lg font-medium">
                  Claim Your Founding Vendor Spot — Free
                </Button>
              </Link>
            </div>
            <p className="text-gold text-lg font-medium">
              Be among our first 1,000 founding vendors
            </p>
          </div>
        </section>

        {/* COMMISSION PROBLEM */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                The Commission Problem
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Traditional platforms take a huge cut of your earnings. Here's the reality:
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-display font-semibold text-navy">Platform</th>
                      <th className="px-6 py-4 text-left font-display font-semibold text-navy">Commission</th>
                      <th className="px-6 py-4 text-left font-display font-semibold text-navy">Monthly Loss (₹1L revenue)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200">
                      <td className="px-6 py-4 font-medium text-gray-900">Traditional Platforms</td>
                      <td className="px-6 py-4 text-red-600 font-semibold">25-30%</td>
                      <td className="px-6 py-4 text-red-600 font-semibold">₹25,000-₹30,000</td>
                    </tr>
                    <tr className="border-t border-gold bg-gold/5">
                      <td className="px-6 py-4 font-display font-bold text-navy">noshtio</td>
                      <td className="px-6 py-4 text-green-600 font-bold text-xl">0%</td>
                      <td className="px-6 py-4 text-green-600 font-bold text-xl">₹0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SAVINGS CALCULATOR */}
        <SavingsCalculator />

        {/* VENDOR BENEFITS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                Why Choose noshtio?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                More than just zero commission - we provide everything you need to succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-navy mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ONBOARDING TIMELINE */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                Get Started in Minutes
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Simple 4-step process to start receiving orders
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 relative">
                {/* Connecting line */}
                <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-navy z-0"></div>

                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-navy font-display font-bold text-2xl">1</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-navy mb-3">
                    Register
                  </h3>
                  <p className="text-gray-600">
                    Create your vendor account with basic details
                  </p>
                </div>

                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-navy font-display font-bold text-2xl">2</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-navy mb-3">
                    Upload Menu
                  </h3>
                  <p className="text-gray-600">
                    Add your delicious dishes and pricing
                  </p>
                </div>

                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-navy font-display font-bold text-2xl">3</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-navy mb-3">
                    Set Hours
                  </h3>
                  <p className="text-gray-600">
                    Define your operating hours and availability
                  </p>
                </div>

                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-navy font-display font-bold text-2xl">4</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-navy mb-3">
                    Receive Orders
                  </h3>
                  <p className="text-gray-600">
                    Start getting orders and earning money
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VENDOR TYPES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                Perfect For All Vendor Types
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Whether you're a home kitchen or a full restaurant, noshtio supports all food businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vendorTypes.map((type, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                    <type.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-navy mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real vendors, real results. Hear from those who've transformed their businesses with noshtio
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-8 relative shadow-sm">
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-gold mr-1" />
                    <Star className="w-5 h-5 text-gold mr-1" />
                    <Star className="w-5 h-5 text-gold mr-1" />
                    <Star className="w-5 h-5 text-gold mr-1" />
                    <Star className="w-5 h-5 text-gold mr-1" />
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4">
                      <span className="text-gold font-display font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-display font-semibold text-navy">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-gold">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 bg-gold">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-6">
                Start earning more.
                <br />
                List your food on noshtio - free.
              </h2>
              <p className="text-xl text-navy/80 mb-8 max-w-2xl mx-auto">
                Join hundreds of vendors who are already keeping 100% of their earnings and growing their businesses.
              </p>
              <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-4 text-lg font-medium">
                Join Free Today
              </Button>
              <p className="text-navy/70 mt-6 text-sm">
                No setup fees • No monthly charges • No commission on orders • 24/7 support
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}