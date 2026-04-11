import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import VendorCard from "@/components/cities/VendorCard";
import { cities, citySlugs, cityList } from "@/lib/cities";
import { ChevronRight, MapPin, Home } from "lucide-react";

export async function generateStaticParams() {
  return citySlugs.map((slug) => ({
    city: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityData = cities[city];

  if (!cityData) {
    return {
      title: "City Not Found",
    };
  }

  return {
    title: `Order Food Near Me in ${cityData.displayName} | noshtio Local Vendors`,
    description: `Discover authentic ${cityData.displayName} food from local vendors. Order ${cityData.famousDishes.slice(0, 3).join(", ")} and more with zero commission from nosztio.`,
    keywords: `food delivery ${cityData.displayName}, local food ${cityData.displayName}, order food online ${cityData.displayName}, ${cityData.famousDishes.join(", ")}`,
    openGraph: {
      title: `Order Food in ${cityData.displayName} | noshtio`,
      description: `Local food vendors in ${cityData.displayName}. Order from verified vendors with zero commissions.`,
      type: "website",
    },
  };
}

// Mock vendor data generator
function generateMockVendors(city: string, count: number = 6) {
  const vendorNames = [
    "Ravi's Kitchen",
    "Home Tastes",
    "Local Flavors",
    "Family Food",
    "Traditional Bites",
    "Chef's Corner",
    "Quick Bites Cafe",
    "Food Paradise",
  ];

  const foodTypes = [
    "North Indian",
    "Home-style",
    "Street Food",
    "Traditional",
    "Regional",
    "Comfort Food",
  ];

  return Array(count)
    .fill(0)
    .map((_, i) => ({
      id: i,
      name: vendorNames[i % vendorNames.length],
      foodType: foodTypes[i % foodTypes.length],
      rating: 4.2 + Math.random() * 0.7,
      isOpen: Math.random() > 0.3,
    }));
}

const generatedFaqs = (city: string) => [
  {
    question: `Where can I find the best ${city} food on noshtio?`,
    answer: `noshtio connects you with verified local vendors and home chefs in ${city} offering authentic regional cuisine. Use our filters to discover vendors based on cuisine type, ratings, and delivery time. All vendors on our platform are vetted for quality and authenticity.`,
  },
  {
    question: `Why are prices lower on noshtio compared to other apps in ${city}?`,
    answer: `We operate on a zero-commission model for vendors. Traditional platforms charge 25-30% commission, which gets passed to customers as higher prices. On noshtio, vendors keep 100% of order value, so they can offer better prices while earning more. It's truly a win-win.`,
  },
  {
    question: `Can I support local food businesses in ${city} through noshtio?`,
    answer: `Absolutely! When you order through noshtio, you're directly supporting local vendors and home chefs. The money goes directly to them without platform deductions. You're not just getting great food; you're supporting your community's small businesses.`,
  },
];

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityData = cities[city];

  if (!cityData) {
    notFound();
  }

  const mockVendors = generateMockVendors(cityData.displayName);
  const otherCities = cityList
    .filter((c) => c.slug !== city)
    .slice(0, 5);
  const faqs = generatedFaqs(cityData.displayName);

  // JSON-LD Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://noshtio.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cities",
        item: "https://noshtio.com/areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cityData.displayName,
        item: `https://noshtio.com/areas/${cityData.slug}`,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `noshtio - Food Delivery in ${cityData.displayName}`,
    url: `https://noshtio.com/areas/${cityData.slug}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: cityData.mapLat,
      longitude: cityData.mapLng,
    },
    areaServed: {
      "@type": "City",
      name: cityData.displayName,
    },
    description: `Order authentic local food from verified vendors in ${cityData.displayName} with zero commission`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-electricBlue hover:text-electricBlue/80 flex items-center">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href="/areas" className="text-electricBlue hover:text-electricBlue/80">
                Cities
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-navy font-semibold">{cityData.displayName}</span>
            </div>
          </div>
        </div>

        {/* City Hero */}
        <section className="py-20 bg-navy text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Local Food in {cityData.displayName}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Discover authentic {cityData.displayName} cuisine from verified local vendors. Order with zero commission platform taking a cut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 text-lg font-medium">
                Download App
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy px-8 py-4 text-lg font-medium"
              >
                List Your Food in {cityData.displayName}
              </Button>
            </div>
          </div>
        </section>

        {/* Category Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-navy mb-12 text-center">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {["Home Kitchens", "Restaurants", "Cloud Kitchens", "Tiffin Services", "Sweets & Bakeries", "Specialty Foods"].map(
                (category) => (
                  <div
                    key={category}
                    className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  >
                    <div className="text-4xl mb-3">🍲</div>
                    <h3 className="font-display font-semibold text-navy">
                      {category}
                    </h3>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Featured Vendors */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-navy mb-12 text-center">
              Featured Vendors in {cityData.displayName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {mockVendors.map((vendor) => (
                <VendorCard key={vendor.id} {...vendor} />
              ))}
            </div>
          </div>
        </section>

        {/* Food Scene */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-navy mb-6">
                The Food Scene in {cityData.displayName}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {cityData.foodScene}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-display font-semibold text-navy mb-4">
                    Famous Dishes
                  </h3>
                  <ul className="space-y-2">
                    {cityData.famousDishes.map((dish) => (
                      <li key={dish} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                        {dish}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-navy mb-4">
                    Popular Areas
                  </h3>
                  <ul className="space-y-2">
                    {cityData.popularAreas.map((area) => (
                      <li key={area} className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 text-gold mr-3" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-navy mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-display font-semibold text-navy hover:text-gold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Other Cities */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-navy mb-12 text-center">
              Explore Other Cities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {otherCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/areas/${city.slug}`}
                  className="bg-navy hover:bg-navy/90 text-white py-3 px-4 rounded-lg text-center font-medium transition-colors duration-300"
                >
                  {city.displayName}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-16 bg-gold">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
              Are you a food vendor in {cityData.displayName}?
            </h2>
            <p className="text-lg text-navy/80 mb-8 max-w-2xl mx-auto">
              List your food on noshtio for free. Reach more customers and keep 100% of your earnings.
            </p>
            <a
              href={`/vendor/register?city=${cityData.slug}&utm_source=city_page`}
              className="inline-block bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300"
            >
              List Your Food Free
            </a>
          </div>
        </section>
      </main>
    </>
  );
}