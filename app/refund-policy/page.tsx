import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | noshtio - Subscription & Order Refunds",
  description: "Learn about noshtio's refund policy for subscriptions and orders. Includes dispute resolution process and refund timelines.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6">
              Refund Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: April 11, 2026
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              At noshtio, we strive to provide excellent service to all our users. This Refund Policy outlines our policies and procedures for refunds related to subscriptions and orders on our platform.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We distinguish between subscription refunds (for vendor platform access) and order refunds (for food orders). Please read this policy carefully to understand your rights and our processes.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-display font-bold text-navy mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><a href="#subscription-refunds" className="text-electricBlue hover:text-electricBlue/80">Subscription Refunds</a></li>
              <li><a href="#order-refunds" className="text-electricBlue hover:text-electricBlue/80">Order Refunds</a></li>
              <li><a href="#refund-process" className="text-electricBlue hover:text-electricBlue/80">Refund Process</a></li>
              <li><a href="#dispute-resolution" className="text-electricBlue hover:text-electricBlue/80">Dispute Resolution</a></li>
              <li><a href="#non-refundable" className="text-electricBlue hover:text-electricBlue/80">Non-Refundable Items</a></li>
              <li><a href="#contact" className="text-electricBlue hover:text-electricBlue/80">Contact Information</a></li>
            </ol>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <section id="subscription-refunds">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">1. Subscription Refunds</h2>

              <h3 className="text-xl font-semibold text-navy mb-3">Free Trial Period</h3>
              <p className="text-gray-700 mb-4">
                New vendors are eligible for a 7-day free trial. If you cancel during the trial period, no charges will apply and no refund is necessary.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3">Paid Subscription Refunds</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Within 7 days:</strong> Full refund if you haven't used premium features extensively</li>
                <li><strong>8-30 days:</strong> Pro-rated refund for remaining days in the billing period</li>
                <li><strong>After 30 days:</strong> No refund available; subscription continues until end of period</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3">Eligibility Criteria</h3>
              <p className="text-gray-700 mb-4">
                Refunds are available if:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Technical issues prevent you from using the platform</li>
                <li>Billing errors occur</li>
                <li>You cancel within the specified timeframes</li>
                <li>Platform downtime exceeds 24 hours in a month</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Refunds are not available for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Change of mind after the trial period</li>
                <li>Failure to meet minimum order requirements</li>
                <li>Account suspension due to policy violations</li>
                <li>Unused subscription time after 30 days</li>
              </ul>
            </section>

            <section id="order-refunds">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">2. Order Refunds</h2>

              <h3 className="text-xl font-semibold text-navy mb-3">Customer Order Refunds</h3>
              <p className="text-gray-700 mb-4">
                Order refunds are handled directly between customers and vendors. noshtio facilitates the refund process but does not control vendor refund policies. Common refund scenarios include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Order not delivered:</strong> Full refund within 24 hours</li>
                <li><strong>Wrong order:</strong> Full refund or order correction</li>
                <li><strong>Food quality issues:</strong> Full or partial refund based on severity</li>
                <li><strong>Late delivery:</strong> Partial refund (10-20% of order value)</li>
                <li><strong>Order cancellation:</strong> Full refund if cancelled before preparation</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3">Vendor Responsibilities</h3>
              <p className="text-gray-700 mb-4">
                Vendors are responsible for processing refunds promptly and maintaining clear refund policies. noshtio may intervene in cases of:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Unreasonable vendor refund policies</li>
                <li>Failure to respond to refund requests within 48 hours</li>
                <li>Pattern of customer complaints regarding refunds</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3">Payment Gateway Refunds</h3>
              <p className="text-gray-700 mb-4">
                Refunds are processed through the original payment method. Processing times vary by payment method:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Credit/Debit Cards:</strong> 3-5 business days</li>
                <li><strong>UPI:</strong> Instant to 24 hours</li>
                <li><strong>Net Banking:</strong> 2-3 business days</li>
                <li><strong>Wallets:</strong> Instant to 24 hours</li>
              </ul>
            </section>

            <section id="refund-process">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">3. Refund Process</h2>

              <h3 className="text-xl font-semibold text-navy mb-3">Initiating a Refund</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>Contact the vendor directly through the app or our support team</li>
                <li>Provide order details and reason for refund</li>
                <li>Submit any supporting evidence (photos, receipts, etc.)</li>
                <li>Wait for vendor approval (typically within 24 hours)</li>
                <li>Refund processed to original payment method</li>
              </ol>

              <h3 className="text-xl font-semibold text-navy mb-3">Refund Timelines</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Approval:</strong> Within 24-48 hours of request</li>
                <li><strong>Processing:</strong> 1-3 business days</li>
                <li><strong>Credit to account:</strong> 3-7 business days (varies by payment method)</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3">Refund Tracking</h3>
              <p className="text-gray-700 mb-4">
                You can track refund status through:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Order history in the app</li>
                <li>Email notifications</li>
                <li>Support ticket updates</li>
                <li>Bank statement (for completed refunds)</li>
              </ul>
            </section>

            <section id="dispute-resolution">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">4. Dispute Resolution</h2>

              <h3 className="text-xl font-semibold text-navy mb-3">Escalation Process</h3>
              <p className="text-gray-700 mb-4">
                If you're unsatisfied with a vendor's refund decision:
              </p>
              <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>Contact noshtio support with your order details</li>
                <li>Provide evidence supporting your refund request</li>
                <li>Our team will review within 48 hours</li>
                <li>Final decision communicated via email and app notification</li>
              </ol>

              <h3 className="text-xl font-semibold text-navy mb-3">Mediation</h3>
              <p className="text-gray-700 mb-4">
                For disputes over ₹500, we offer free mediation services. Both parties must agree to participate. Our mediators are trained professionals who help reach fair resolutions.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3">Legal Recourse</h3>
              <p className="text-gray-700 mb-4">
                If mediation fails, you may pursue legal action through Consumer Courts in India. We comply with all Consumer Protection Act requirements and maintain records for legal proceedings.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3">Chargeback Protection</h3>
              <p className="text-gray-700 mb-4">
                For credit/debit card payments, you may initiate a chargeback through your bank if other resolution methods fail. We cooperate fully with legitimate chargeback requests.
              </p>
            </section>

            <section id="non-refundable">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">5. Non-Refundable Items</h2>
              <p className="text-gray-700 mb-4">
                The following are generally not eligible for refunds:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Consumed or partially consumed orders</li>
                <li>Orders cancelled after food preparation has begun</li>
                <li>Subscription fees after 30 days</li>
                <li>Delivery charges for completed deliveries</li>
                <li>Service fees for processed orders</li>
                <li>Refunds requested after 7 days from delivery</li>
              </ul>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">6. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For refund requests or questions about this policy:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> refunds@noshtio.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 99999 99999</p>
                <p className="text-gray-700 mb-2"><strong>WhatsApp:</strong> +91 99999 99999</p>
                <p className="text-gray-700"><strong>Response Time:</strong> Within 24 hours</p>
              </div>
              <p className="text-gray-700 mt-4">
                For urgent refund issues, please call our support line during business hours (9 AM - 6 PM IST, Monday to Friday).
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}