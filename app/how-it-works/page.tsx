import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, ShoppingCart, Truck, UserPlus, Upload, Package, CreditCard, Download, Store } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | noshtio - Zero Commission Food Delivery",
  description: "Learn how noshtio works for both customers and vendors. Simple ordering process and easy vendor onboarding with zero commission fees.",
};

const customerSteps = [
  {
    icon: Search,
    title: "Browse",
    description: "Discover local food vendors in your area through our app"
  },
  {
    icon: ShoppingCart,
    title: "Order",
    description: "Select your favorite dishes and place your order securely"
  },
  {
    icon: Truck,
    title: "Get Delivered",
    description: "Enjoy fresh, hot food delivered right to your doorstep"
  }
];

const vendorSteps = [
  {
    icon: UserPlus,
    title: "Register",
    description: "Create your vendor account with basic business details"
  },
  {
    icon: Upload,
    title: "Upload Menu",
    description: "Add your delicious dishes with photos and pricing"
  },
  {
    icon: Package,
    title: "Receive Orders",
    description: "Get notified of new orders through our vendor app"
  },
  {
    icon: CreditCard,
    title: "Get Paid",
    description: "Receive 100% of your earnings directly to your account"
  }
];

const faqs = [
  {
    question: "How does noshtio differ from other food delivery platforms?",
    answer: "noshtio is India's first zero-commission food delivery platform. While traditional platforms take 25-30% commission, we charge vendors nothing. This means better prices for customers and higher profits for vendors."
  },
  {
    question: "Is noshtio available in my city?",
    answer: "We're currently operating in 15+ Indian cities including Mumbai, Delhi, Bangalore, Chennai, and more. Check our app to see if we're in your area, and let us know if you'd like us to expand to your city!"
  },
  {
    question: "How do I become a noshtio vendor?",
    answer: "Simply download our vendor app or visit our website to register. The process takes just a few minutes - provide your business details, upload your menu, and start receiving orders immediately."
  },
  {
    question: "What are the delivery charges?",
    answer: "Delivery charges vary by location and order value. We strive to keep charges reasonable and transparent. The exact charges will be shown at checkout."
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes, we use industry-standard encryption and secure payment gateways. Your payment information is never stored on our servers and is processed through certified payment processors."
  }
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-navy text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            How noshtio Works
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Simple, transparent, and fair. Whether you're ordering food or running a food business, we've made it easy.
          </p>
        </div>
      </section>

      {/* How It Works Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* For Customers */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                  For Customers
                </h2>
                <p className="text-lg text-gray-600">
                  Discover and order from local food vendors with just a few taps
                </p>
              </div>

              <div className="space-y-8">
                {customerSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-gold" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-sm mr-3">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-display font-semibold text-navy">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Vendors */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                  For Vendors
                </h2>
                <p className="text-lg text-gray-600">
                  Start your zero-commission food business in minutes
                </p>
              </div>

              <div className="space-y-8">
                {vendorSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-gold" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-sm mr-3">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-display font-semibold text-navy">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about noshtio
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
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

      {/* CTA Section */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-navy/80 mb-8 max-w-2xl mx-auto">
            Join thousands of customers and vendors who trust noshtio for their food needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-4 text-lg font-medium">
              <Download className="w-5 h-5 mr-2" />
              Download App
            </Button>
            <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 text-lg font-medium">
              <Store className="w-5 h-5 mr-2" />
              List Your Business
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}