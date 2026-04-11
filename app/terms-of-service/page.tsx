import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | noshtio - Platform Terms & Conditions",
  description: "Read noshtio's terms of service governing the use of our platform. Includes vendor obligations, user responsibilities, and governing law for India.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: April 11, 2026
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to noshtio! These Terms of Service ("Terms") govern your use of the noshtio mobile application and website (collectively, the "Service") operated by noshtio Technologies Private Limited ("we," "us," or "our").
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-display font-bold text-navy mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><a href="#acceptance" className="text-electricBlue hover:text-electricBlue/80">Acceptance of Terms</a></li>
              <li><a href="#description" className="text-electricBlue hover:text-electricBlue/80">Description of Service</a></li>
              <li><a href="#user-accounts" className="text-electricBlue hover:text-electricBlue/80">User Accounts</a></li>
              <li><a href="#vendor-obligations" className="text-electricBlue hover:text-electricBlue/80">Vendor Obligations</a></li>
              <li><a href="#customer-responsibilities" className="text-electricBlue hover:text-electricBlue/80">Customer Responsibilities</a></li>
              <li><a href="#payments" className="text-electricBlue hover:text-electricBlue/80">Payments and Fees</a></li>
              <li><a href="#prohibited-activities" className="text-electricBlue hover:text-electricBlue/80">Prohibited Activities</a></li>
              <li><a href="#intellectual-property" className="text-electricBlue hover:text-electricBlue/80">Intellectual Property</a></li>
              <li><a href="#disclaimers" className="text-electricBlue hover:text-electricBlue/80">Disclaimers and Limitations</a></li>
              <li><a href="#termination" className="text-electricBlue hover:text-electricBlue/80">Termination</a></li>
              <li><a href="#governing-law" className="text-electricBlue hover:text-electricBlue/80">Governing Law</a></li>
              <li><a href="#changes" className="text-electricBlue hover:text-electricBlue/80">Changes to Terms</a></li>
              <li><a href="#contact" className="text-electricBlue hover:text-electricBlue/80">Contact Information</a></li>
            </ol>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <section id="acceptance">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By creating an account or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are entering into these Terms on behalf of a business or other legal entity, you represent that you have the authority to bind such entity.
              </p>
            </section>

            <section id="description">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                noshtio is a zero-commission hyperlocal food delivery platform that connects customers with local food vendors. Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Food discovery and ordering platform for customers</li>
                <li>Vendor onboarding and management tools</li>
                <li>Order processing and payment facilitation</li>
                <li>Delivery coordination services</li>
                <li>Analytics and reporting tools</li>
              </ul>
            </section>

            <section id="user-accounts">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">3. User Accounts</h2>
              <h3 className="text-xl font-semibold text-navy mb-3">Account Creation</h3>
              <p className="text-gray-700 mb-4">
                To use certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information and to update this information as necessary to maintain its accuracy.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3">Account Security</h3>
              <p className="text-gray-700 mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
              </p>
            </section>

            <section id="vendor-obligations">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">4. Vendor Obligations</h2>
              <p className="text-gray-700 mb-4">Vendors using our platform agree to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide accurate and up-to-date menu information</li>
                <li>Maintain food safety and hygiene standards</li>
                <li>Honor all confirmed orders and deliver within promised timeframes</li>
                <li>Accept payments through our designated payment methods</li>
                <li>Comply with all applicable food safety and business regulations</li>
                <li>Maintain appropriate licenses and permits</li>
                <li>Provide accurate business and contact information</li>
                <li>Respond to customer inquiries and complaints promptly</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3">Quality Standards</h3>
              <p className="text-gray-700 mb-4">
                Vendors must maintain the quality and safety standards of their food and service. We reserve the right to remove vendors who consistently receive poor ratings or violate our quality guidelines.
              </p>
            </section>

            <section id="customer-responsibilities">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">5. Customer Responsibilities</h2>
              <p className="text-gray-700 mb-4">Customers using our platform agree to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide accurate delivery information</li>
                <li>Be available to receive orders at the specified delivery time</li>
                <li>Pay for orders using approved payment methods</li>
                <li>Treat delivery personnel with respect</li>
                <li>Report any issues with orders promptly</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section id="payments">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">6. Payments and Fees</h2>
              <h3 className="text-xl font-semibold text-navy mb-3">Zero Commission Policy</h3>
              <p className="text-gray-700 mb-4">
                noshtio charges zero commission on food orders. Vendors receive 100% of the order value minus any applicable payment processing fees.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3">Vendor Subscription</h3>
              <p className="text-gray-700 mb-4">
                Vendors may be required to pay a monthly subscription fee for access to premium features and analytics. Current pricing is ₹999 per month, subject to change with notice.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3">Payment Processing</h3>
              <p className="text-gray-700 mb-4">
                Payment processing fees (typically 1-2%) are deducted by payment gateways and are not controlled by noshtio. These fees are industry standard and transparent.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3">Refunds</h3>
              <p className="text-gray-700 mb-4">
                Refunds for subscription fees are handled according to our Refund Policy. Order refunds are processed based on vendor policies and order circumstances.
              </p>
            </section>

            <section id="prohibited-activities">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">7. Prohibited Activities</h2>
              <p className="text-gray-700 mb-4">You agree not to engage in any of the following prohibited activities:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Violating any applicable laws or regulations</li>
                <li>Providing false or misleading information</li>
                <li>Harassing or abusing other users, vendors, or our staff</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Using the Service for any fraudulent or illegal purpose</li>
                <li>Interfering with the proper functioning of the Service</li>
                <li>Creating multiple accounts for deceptive purposes</li>
                <li>Sharing account credentials with third parties</li>
              </ul>
            </section>

            <section id="intellectual-property">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">8. Intellectual Property</h2>
              <h3 className="text-xl font-semibold text-navy mb-3">Our Content</h3>
              <p className="text-gray-700 mb-4">
                The Service and its original content, features, and functionality are owned by noshtio and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3">User Content</h3>
              <p className="text-gray-700 mb-4">
                By posting content on our platform, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, display, and distribute such content in connection with the Service.
              </p>
            </section>

            <section id="disclaimers">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">9. Disclaimers and Limitations</h2>
              <p className="text-gray-700 mb-4">
                The Service is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the Service's operation or the information, content, or materials included therein.
              </p>
              <p className="text-gray-700 mb-4">
                We do not guarantee that the Service will be uninterrupted, error-free, or secure. Food quality and safety are the responsibility of individual vendors.
              </p>
              <p className="text-gray-700 mb-4">
                In no event shall noshtio be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service.
              </p>
            </section>

            <section id="termination">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">10. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms.
              </p>
              <p className="text-gray-700 mb-4">
                Upon termination, your right to use the Service will cease immediately. All provisions of these Terms which by their nature should survive termination shall survive.
              </p>
            </section>

            <section id="governing-law">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">11. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700 mb-4">
                Any disputes arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.
              </p>
            </section>

            <section id="changes">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">13. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@noshtio.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 99999 99999</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Food Street, Tech Park, Bangalore, Karnataka 560001, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}