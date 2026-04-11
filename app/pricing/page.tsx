import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Star, TrendingDown, DollarSign, BarChart3, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | noshtio - Simple, Honest Pricing for Vendors",
  description: "Transparent pricing for food vendors. Just ₹999/month with unlimited orders, menu management, analytics, and support. No hidden commissions.",
};

const features = [
  {
    icon: Check,
    text: "Unlimited orders processing"
  },
  {
    icon: BarChart3,
    text: "Advanced analytics dashboard"
  },
  {
    icon: DollarSign,
    text: "Direct payment to your account"
  },
  {
    icon: Headphones,
    text: "24/7 vendor support"
  },
  {
    icon: TrendingDown,
    text: "Zero commission on all orders"
  },
  {
    icon: Star,
    text: "Priority customer support"
  }
];

const comparisonData = [
  {
    feature: "Commission Rate",
    noshtio: "0%",
    zomato: "25-30%",
    swiggy: "22-25%"
  },
  {
    feature: "Monthly Subscription",
    noshtio: "₹999",
    zomato: "₹2,000+",
    swiggy: "₹1,500+"
  },
  {
    feature: "Payment Processing",
    noshtio: "Direct to vendor",
    zomato: "After commission",
    swiggy: "After commission"
  },
  {
    feature: "Analytics Dashboard",
    noshtio: "Advanced",
    zomato: "Basic",
    swiggy: "Basic"
  },
  {
    feature: "Customer Support",
    noshtio: "24/7 Priority",
    zomato: "Business hours",
    swiggy: "Business hours"
  }
];

const pricingFaqs = [
  {
    question: "Is there a setup fee or hidden charges?",
    answer: "No setup fees, no hidden charges. Just ₹999 per month for unlimited access to all features. The only additional cost is the payment gateway charges (typically 1-2%) which are industry standard."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. If you cancel within the first 7 days, you'll receive a full refund. After 7 days, you can continue using the service until the end of your billing period."
  },
  {
    question: "What happens if I don't get enough orders?",
    answer: "Your subscription gives you access to our platform regardless of order volume. We work with you to optimize your menu and marketing to increase visibility and orders."
  },
  {
    question: "Do you offer discounts for multiple outlets?",
    answer: "Yes, we offer volume discounts for vendors with multiple outlets. Contact our sales team for custom pricing based on your business needs."
  },
  {
    question: "Is the ₹999 fee per outlet or per vendor account?",
    answer: "The ₹999 monthly fee is per vendor account. If you have multiple outlets under the same vendor account, they are covered under this single fee."
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-navy text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Simple, Honest Pricing
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            No commissions, no hidden fees. Just transparent pricing that helps your business grow.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-br from-navy to-electricBlue rounded-2xl p-8 text-center text-white shadow-2xl">
              <div className="mb-6">
                <div className="text-5xl font-display font-bold mb-2">₹999</div>
                <div className="text-white/80">per month</div>
              </div>

              <h3 className="text-2xl font-display font-bold mb-6">
                Vendor Subscription
              </h3>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-gold mr-3" />
                    <span className="text-white/90">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 text-lg font-medium w-full">
                Start Free Trial
              </Button>

              <p className="text-white/60 text-sm mt-4">
                7-day free trial • No credit card required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
              Why Choose noshtio?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our pricing compares to traditional platforms
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-display font-semibold">Features</th>
                  <th className="px-6 py-4 text-center font-display font-semibold text-gold">noshtio</th>
                  <th className="px-6 py-4 text-center font-display font-semibold">Zomato</th>
                  <th className="px-6 py-4 text-center font-display font-semibold">Swiggy</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-medium text-navy">{row.feature}</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600 bg-green-50">
                      {row.noshtio}
                    </td>
                    <td className="px-6 py-4 text-center text-red-600">{row.zomato}</td>
                    <td className="px-6 py-4 text-center text-red-600">{row.swiggy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
              Pricing FAQ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion className="w-full">
              {pricingFaqs.map((faq, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
            Ready to Save Money?
          </h2>
          <p className="text-xl text-navy/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of vendors who are already saving thousands in commissions
          </p>
          <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-4 text-lg font-medium">
            Start Your Free Trial
          </Button>
          <p className="text-navy/70 mt-4 text-sm">
            7 days free • No commitment • Cancel anytime
          </p>
        </div>
      </section>
    </main>
  );
}