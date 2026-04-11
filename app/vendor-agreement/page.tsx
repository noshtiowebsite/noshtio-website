import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vendor Agreement | noshtio - Terms for Food Vendors",
  description: "Official vendor agreement for noshtio platform. Includes terms for food vendors, commission structure, and partnership obligations.",
};

export default function VendorAgreementPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6">
              Vendor Agreement
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: April 11, 2026
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              This Vendor Agreement ("Agreement") is entered into between noshtio Technologies Private Limited ("noshtio," "we," "us," or "our") and the food vendor ("Vendor," "you," or "your") accessing our platform.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              By registering as a vendor on the noshtio platform, you agree to be bound by this Agreement, our Terms of Service, and Privacy Policy. This Agreement governs your use of our platform and services.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-display font-bold text-navy mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><a href="#services" className="text-electricBlue hover:text-electricBlue/80">Services Provided</a></li>
              <li><a href="#obligations" className="text-electricBlue hover:text-electricBlue/80">Vendor Obligations</a></li>
              <li><a href="#commission" className="text-electricBlue hover:text-electricBlue/80">Commission Structure</a></li>
              <li><a href="#payments" className="text-electricBlue hover:text-electricBlue/80">Payment Terms</a></li>
              <li><a href="#quality" className="text-electricBlue hover:text-electricBlue/80">Quality Standards</a></li>
              <li><a href="#termination" className="text-electricBlue hover:text-electricBlue/80">Termination</a></li>
              <li><a href="#liability" className="text-electricBlue hover:text-electricBlue/80">Liability and Indemnification</a></li>
              <li><a href="#confidentiality" className="text-electricBlue hover:text-electricBlue/80">Confidentiality</a></li>
              <li><a href="#governing-law" className="text-electricBlue hover:text-electricBlue/80">Governing Law</a></li>
              <li><a href="#amendments" className="text-electricBlue hover:text-electricBlue/80">Amendments</a></li>
            </ol>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <section id="services">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">1. Services Provided</h2>
              <p className="text-gray-700 mb-4">
                noshtio provides the following services to registered vendors:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Online platform for menu management and order processing</li>
                <li>Customer acquisition and order routing</li>
                <li>Payment processing and settlement</li>
                <li>Analytics and reporting tools</li>
                <li>Marketing and promotional support</li>
                <li>Customer service and dispute resolution</li>
                <li>Technical support and training</li>
              </ul>
            </section>

            <section id="obligations">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">2. Vendor Obligations</h2>

              <h3 className="text-xl font-semibold text-navy mb-3">Business Information</h3>
              <p className="text-gray-700 mb-4">
                You agree to provide accurate and complete information about your business, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Legal business name and registration details</li>
                <li>Valid FSSAI license and other required permits</li>
                <li>Complete menu with accurate pricing and descriptions</li>
                <li>Business address and operating hours</li>
                <li>Bank account details for payment settlement</li>
                <li>Contact information for customers and support</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3">Order Fulfillment</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Accept and fulfill all confirmed orders promptly</li>
                <li>Maintain promised delivery times and quality standards</li>
                <li>Prepare food according to customer specifications</li>
                <li>Handle order modifications and special requests professionally</li>
                <li>Provide accurate order status updates</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3">Customer Service</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Respond to customer inquiries within 2 hours</li>
                <li>Handle complaints and feedback professionally</li>
                <li>Maintain customer satisfaction ratings above 4.0 stars</li>
                <li>Honor refund and exchange policies fairly</li>
              </ul>
            </section>

            <section id="commission">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">3. Commission Structure</h2>

              <h3 className="text-xl font-semibold text-navy mb-3">Zero Commission Policy</h3>
              <p className="text-gray-700 mb-4">
                noshtio operates on a zero-commission model. You retain 100% of the order value paid by customers, subject only to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Payment gateway processing fees (typically 1-2%)</li>
                <li>Applicable taxes as per Indian law</li>
                <li>Delivery charges (if applicable)</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3">Subscription Fees</h3>
              <p className="text-gray-700 mb-4">
                Access to the noshtio platform requires a monthly subscription fee of ₹999. This fee covers:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Platform access and order management tools</li>
                <li>Analytics and reporting dashboard</li>
                <li>Marketing and customer acquisition support</li>
                <li>Technical support and training</li>
                <li>Priority customer service</li>
              </ul>
            </section>

            <section id="payments">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">4. Payment Terms</h2>

              <h3 className="text-xl font-semibold text-navy mb-3">Settlement Process</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Payments settled within 24-48 hours of successful order delivery</li>
                <li>Direct bank transfer to your registered account</li>
                <li>Settlement reports provided for each transaction</li>
                <li>Held payments released upon dispute resolution</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3">Payment Holds</h3>
              <p className="text-gray-700 mb-4">
                We may hold payments in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Customer reports issues with order quality or delivery</li>
                <li>Disputes requiring investigation</li>
                <li>Suspicion of fraudulent activity</li>
                <li>Violation of platform policies</li>
              </ul>
            </section>

            <section id="quality">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">5. Quality Standards</h2>

              <h3 className="text-xl font-semibold text-navy mb-3">Food Safety</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Valid FSSAI license and compliance with food safety regulations</li>
                <li>Hygiene standards maintained in preparation areas</li>
                <li>Fresh ingredients and proper food storage</li>
                <li>Clean packaging and safe delivery practices</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3">Service Standards</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Order acceptance within 5 minutes of receipt</li>
                <li>Preparation time not exceeding promised estimates</li>
                <li>Accurate order fulfillment (95% accuracy rate)</li>
                <li>Professional communication with customers</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3">Performance Metrics</h3>
              <p className="text-gray-700 mb-4">
                Vendors are expected to maintain:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Customer rating of 4.0 stars or higher</li>
                <li>Order acceptance rate above 90%</li>
                <li>On-time delivery rate above 85%</li>
                <li>Customer complaint resolution within 24 hours</li>
              </ul>
            </section>

            <section id="termination">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">6. Termination</h2>

              <h3 className="text-xl font-semibold text-navy mb-3">Termination by Vendor</h3>
              <p className="text-gray-700 mb-4">
                You may terminate this Agreement at any time by providing 30 days written notice. Subscription fees will be prorated for the remaining period.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3">Termination by noshtio</h3>
              <p className="text-gray-700 mb-4">
                We may terminate this Agreement immediately for:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Violation of terms or policies</li>
                <li>Consistent poor performance or customer complaints</li>
                <li>Fraudulent activity or misrepresentation</li>
                <li>Non-payment of subscription fees</li>
                <li>Legal or regulatory violations</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3">Post-Termination</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Outstanding payments will be settled within 7 business days</li>
                <li>Customer data will be handled according to privacy laws</li>
                <li>Platform access will be revoked immediately</li>
                <li>Outstanding disputes will be resolved through agreed procedures</li>
              </ul>
            </section>

            <section id="liability">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">7. Liability and Indemnification</h2>

              <h3 className="text-xl font-semibold text-navy mb-3">Vendor Liability</h3>
              <p className="text-gray-700 mb-4">
                You are solely responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Food quality, safety, and preparation</li>
                <li>Compliance with local laws and regulations</li>
                <li>Employee conduct and workplace safety</li>
                <li>Tax obligations and business licenses</li>
                <li>Customer injuries or property damage</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3">Indemnification</h3>
              <p className="text-gray-700 mb-4">
                You agree to indemnify and hold noshtio harmless from any claims, damages, or losses arising from:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Food-related illnesses or injuries</li>
                <li>Violation of applicable laws or regulations</li>
                <li>Breach of this Agreement</li>
                <li>Customer disputes or legal actions</li>
                <li>Intellectual property infringement</li>
              </ul>
            </section>

            <section id="confidentiality">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">8. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                Both parties agree to maintain confidentiality of:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Customer personal information and order data</li>
                <li>Proprietary business information and trade secrets</li>
                <li>Platform algorithms and business strategies</li>
                <li>Financial information and pricing structures</li>
              </ul>
              <p className="text-gray-700">
                This obligation survives termination of this Agreement.
              </p>
            </section>

            <section id="governing-law">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">9. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                This Agreement shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
              </p>
              <p className="text-gray-700">
                Disputes will first be resolved through mediation, with arbitration as a final resort if mediation fails.
              </p>
            </section>

            <section id="amendments">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">10. Amendments</h2>
              <p className="text-gray-700 mb-4">
                noshtio reserves the right to modify this Agreement with 30 days notice. Material changes will be communicated via email and platform notifications. Continued use of the platform constitutes acceptance of amendments.
              </p>
              <p className="text-gray-700">
                For questions about this Agreement, contact legal@noshtio.com
              </p>
            </section>

            {/* Signature */}
            <div className="mt-16 p-8 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-display font-bold text-navy mb-4">Agreement Acceptance</h3>
              <p className="text-gray-700 mb-4">
                By registering as a vendor on the noshtio platform, you acknowledge that you have read, understood, and agree to be bound by this Vendor Agreement.
              </p>
              <p className="text-gray-700">
                This Agreement is effective as of the date of your vendor registration and continues until terminated as provided herein.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}