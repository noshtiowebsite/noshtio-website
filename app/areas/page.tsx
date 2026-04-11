import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cityList } from "@/lib/cities";
import { MapPin, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Order Food Near Me | Find Local Food Vendors in 15 Indian Cities | noshtio",
  description: "Order authentic local food from verified vendors in Delhi, Mumbai, Bengaluru, Hyderabad, and 11+ cities. Zero commission platform supporting local food businesses.",
  keywords: "order food online, local food vendors, food delivery, hyperlocal food, Indian food",
  openGraph: {
    title: "Order Food Near Me | noshtio Local Vendors",
    description: "Order authentic local food from verified vendors in 15 Indian cities",
    type: "website",
  },
};

export default function AreasPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-navy text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Find Local Food Near You
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Discover authentic food from local vendors in your city. Zero commission means better prices for you, better earnings for them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 text-lg font-medium">
              <Download className="w-5 h-5 mr-2" />
              Download App
            </Button>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
              Available in 15 Cities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select your city to explore local food vendors and discover authentic cuisines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cityList.map((city) => (
              <Link
                key={city.slug}
                href={`/areas/${city.slug}`}
              >
                <div className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gold hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-navy group-hover:text-gold transition-colors duration-300">
                        {city.displayName}
                      </h3>
                    </div>
                    <MapPin className="w-6 h-6 text-gold flex-shrink-0" />
                  </div>

                  <p className="text-gray-600 mb-4">
                    Discover authentic local food and support regional vendors
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-navy mb-2">
                      Famous Dishes:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {city.famousDishes.slice(0, 3).map((dish) => (
                        <span
                          key={dish}
                          className="bg-gold/10 text-navy text-xs px-3 py-1 rounded-full"
                        >
                          {dish}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-navy hover:bg-navy/90 text-white py-2 rounded-lg text-sm font-medium transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    Explore {city.displayName}
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
            Your City Not Listed Yet?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're expanding to more cities every month. Let us know where you'd like us to launch.
          </p>
          <Button className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 text-lg font-medium">
            Request Your City
          </Button>
        </div>
      </section>
    </main>
  );
}