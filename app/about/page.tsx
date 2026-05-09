import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { MapPin, Users, DollarSign, Calendar, Heart, Target } from "lucide-react";
import DownloadButton from "@/components/about/DownloadButton";

export const metadata: Metadata = {
  title: "About Us | noshtio - Zero Commission Food Platform",
  description: "Learn about noshtio's mission to revolutionize food delivery with zero commissions. Founded in 2024, we're on a mission to ensure every rupee goes to the vendor who cooked it.",
};

const stats = [
  {
    icon: MapPin,
    value: "15+",
    label: "Cities",
    description: "Across India"
  },
  {
    icon: Users,
    value: "500+",
    label: "Vendors",
    description: "Trusted partners"
  },
  {
    icon: DollarSign,
    value: "0%",
    label: "Commission",
    description: "Always free"
  },
  {
    icon: Calendar,
    value: "2024",
    label: "Founded",
    description: "Building the future"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-navy text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Why We Built noshtio
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A story of frustration, inspiration, and the belief that food vendors deserve better.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
                  From Frustration to Mission
                </h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    I started noshtio after watching my friend's small restaurant struggle. Despite serving incredible food, they were barely breaking even. When I asked why, they showed me their monthly statements.
                  </p>
                  <p className="text-lg">
                    30% of every order went to the platform. Marketing fees, delivery charges, hidden costs - it added up to thousands of rupees lost every month. Meanwhile, the platform made millions.
                  </p>
                  <p className="text-lg">
                    That night, I couldn't sleep. I kept thinking about all the talented cooks, home chefs, and small restaurant owners who pour their heart into their food, only to see most of their earnings disappear.
                  </p>
                  <p className="text-lg">
                    The next morning, I quit my job and started building noshtio. A platform where vendors keep what they earn. Where customers get better prices. Where good food thrives.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-navy to-electricBlue rounded-lg p-8 text-white">
                <Heart className="w-16 h-16 text-gold mb-6" />
                <blockquote className="text-xl font-display italic mb-4">
                  "Every rupee should go to the vendor who cooked it."
                </blockquote>
                <div className="text-white/80">
                  - Our founding principle
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              To create a fair, transparent food ecosystem where:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-display font-semibold text-navy mb-3">
                  Vendors Thrive
                </h3>
                <p className="text-gray-600">
                  By keeping 100% of their earnings, vendors can invest in better ingredients, hire more staff, and grow their businesses.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-display font-semibold text-navy mb-3">
                  Customers Win
                </h3>
                <p className="text-gray-600">
                  Lower prices mean more people can afford quality local food. Better value for money, fresher ingredients.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-display font-semibold text-navy mb-3">
                  Communities Grow
                </h3>
                <p className="text-gray-600">
                  Supporting local businesses creates jobs, preserves culinary traditions, and strengthens local economies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Our Impact So Far
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Numbers that tell our story of growth and success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-navy" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-display font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-white/70 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-navy mb-2">
                      Transparency First
                    </h3>
                    <p className="text-gray-600">
                      No hidden fees, no surprise charges. Everything is clear and upfront.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-navy mb-2">
                      Vendor-Centric
                    </h3>
                    <p className="text-gray-600">
                      Every decision we make prioritizes the success of our vendor partners.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-navy mb-2">
                      Quality Over Quantity
                    </h3>
                    <p className="text-gray-600">
                      We'd rather have 10 amazing vendors than 100 mediocre ones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-navy mb-2">
                      Local First
                    </h3>
                    <p className="text-gray-600">
                      Supporting local businesses and preserving regional culinary traditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
            Join the Mission
          </h2>
          <p className="text-xl text-navy/80 mb-8 max-w-2xl mx-auto">
            Whether you're a vendor or a customer, help us build a fairer food ecosystem
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-4 text-lg font-medium">
              Become a Vendor
            </Button>
            <DownloadButton />
          </div>
        </div>
      </section>
    </main>
  );
}