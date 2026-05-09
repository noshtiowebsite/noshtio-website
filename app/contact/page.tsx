import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MessageSquare, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | noshtio — Vendor Support, Partnerships & Enquiries",
  description:
    "Get in touch with the noshtio team. Reach out for vendor support, partnership opportunities, press enquiries, or general questions. We respond within 24 hours.",
  keywords:
    "contact noshtio, vendor support, food platform help, noshtio partnership, press media noshtio",
  openGraph: {
    title: "Contact noshtio — We're Here to Help",
    description:
      "Reach our team for vendor support, partnerships, or general enquiries. Response within 24 hours.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-navy text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have questions? Need support? We're here to help you succeed with noshtio.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                  Send us a Message
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600">
                  Prefer to reach out directly? Here are all the ways to contact us.
                </p>
              </div>

              <div className="space-y-8">
                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-navy mb-1">
                      WhatsApp Support
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Get instant help from our support team
                    </p>
                    <a
                      href="https://wa.me/919999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      +91 99999 99999
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-navy mb-1">
                      Email Support
                    </h3>
                    <p className="text-gray-600 mb-2">
                      For detailed inquiries and partnerships
                    </p>
                    <a
                      href="mailto:hello@noshtio.com"
                      className="text-navy hover:text-gold font-medium"
                    >
                      hello@noshtio.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-electricBlue rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-navy mb-1">
                      Phone Support
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Call us for immediate assistance
                    </p>
                    <a
                      href="tel:+919999999999"
                      className="text-electricBlue hover:text-electricBlue/80 font-medium"
                    >
                      +91 99999 99999
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-navy mb-1">
                      Office Address
                    </h3>
                    <p className="text-gray-600">
                      123 Food Street<br />
                      Tech Park, Bangalore<br />
                      Karnataka 560001<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-display font-semibold text-navy mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  * WhatsApp support available 24/7 for urgent vendor issues
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
            Looking for Quick Answers?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Check out our comprehensive FAQ section for instant answers to common questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/how-it-works"
              className="bg-navy text-white px-8 py-4 rounded-lg hover:bg-navy/90 transition-colors duration-300 font-medium"
            >
              View FAQ
            </a>
            <a
              href="/for-vendors"
              className="bg-gold text-navy px-8 py-4 rounded-lg hover:bg-gold/90 transition-colors duration-300 font-medium"
            >
              For Vendors
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}