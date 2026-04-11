import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | noshtio - Your Privacy Matters",
  description: "noshtio's privacy policy explains how we collect, use, and protect your personal information in compliance with India's Digital Personal Data Protection Act 2023.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: April 11, 2026
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              At noshtio ("we," "us," or "our"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service").
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              This policy complies with India's Digital Personal Data Protection Act, 2023 (DPDP Act) and other applicable data protection laws. By using our Service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-display font-bold text-navy mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><a href="#information-we-collect" className="text-electricBlue hover:text-electricBlue/80">Information We Collect</a></li>
              <li><a href="#how-we-use" className="text-electricBlue hover:text-electricBlue/80">How We Use Your Information</a></li>
              <li><a href="#information-sharing" className="text-electricBlue hover:text-electricBlue/80">Information Sharing and Disclosure</a></li>
              <li><a href="#data-security" className="text-electricBlue hover:text-electricBlue/80">Data Security</a></li>
              <li><a href="#your-rights" className="text-electricBlue hover:text-electricBlue/80">Your Rights Under DPDP Act</a></li>
              <li><a href="#cookies" className="text-electricBlue hover:text-electricBlue/80">Cookies and Tracking Technologies</a></li>
              <li><a href="#third-party" className="text-electricBlue hover:text-electricBlue/80">Third-Party Services</a></li>
              <li><a href="#data-retention" className="text-electricBlue hover:text-electricBlue/80">Data Retention</a></li>
              <li><a href="#international" className="text-electricBlue hover:text-electricBlue/80">International Data Transfers</a></li>
              <li><a href="#children" className="text-electricBlue hover:text-electricBlue/80">Children's Privacy</a></li>
              <li><a href="#changes" className="text-electricBlue hover:text-electricBlue/80">Changes to This Privacy Policy</a></li>
              <li><a href="#contact" className="text-electricBlue hover:text-electricBlue/80">Contact Us</a></li>
            </ol>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <section id="information-we-collect">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-navy mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>For Customers:</strong> Name, email address, phone number, delivery address, payment information</li>
                <li><strong>For Vendors:</strong> Business name, owner details, contact information, bank account details, menu information</li>
                <li><strong>Support Communications:</strong> Messages, feedback, and support requests</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
                <li><strong>Location Data:</strong> GPS location for delivery services (with your permission)</li>
                <li><strong>Usage Data:</strong> App usage patterns, features accessed, order history</li>
                <li><strong>Log Data:</strong> IP addresses, browser type, pages visited, time spent</li>
              </ul>
            </section>

            <section id="how-we-use">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use collected information for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Providing and maintaining our food delivery services</li>
                <li>Processing orders and payments securely</li>
                <li>Connecting customers with nearby food vendors</li>
                <li>Improving our services and developing new features</li>
                <li>Communicating with you about orders, updates, and promotions</li>
                <li>Ensuring platform security and preventing fraud</li>
                <li>Complying with legal obligations</li>
                <li>Analyzing usage patterns to improve user experience</li>
              </ul>
            </section>

            <section id="information-sharing">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We do not sell your personal information. We may share information in the following circumstances:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>With Vendors:</strong> Customer delivery details necessary for order fulfillment</li>
                <li><strong>With Customers:</strong> Vendor business information for order placement</li>
                <li><strong>Service Providers:</strong> Payment processors, delivery partners, cloud services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect rights</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
              </ul>
            </section>

            <section id="data-security">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and employee training</li>
                <li>Secure data centers and cloud infrastructure</li>
                <li>Incident response procedures</li>
              </ul>
            </section>

            <section id="your-rights">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">5. Your Rights Under DPDP Act</h2>
              <p className="text-gray-700 mb-4">Under the Digital Personal Data Protection Act, 2023, you have the following rights:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Right to Access:</strong> Request information about what personal data we hold about you</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data in certain circumstances</li>
                <li><strong>Right to Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                <li><strong>Right to Grievance Redressal:</strong> File complaints with the Data Protection Board</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us using the information provided in the Contact Us section.
              </p>
            </section>

            <section id="cookies">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your experience and analyze usage patterns. Our use of Google Analytics 4 (GA4) helps us understand how users interact with our service.
              </p>
              <p className="text-gray-700 mb-4">
                You can control cookie preferences through your browser settings. However, disabling certain cookies may affect the functionality of our service.
              </p>
            </section>

            <section id="third-party">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">7. Third-Party Services</h2>
              <h3 className="text-xl font-semibold text-navy mb-3">Firebase</h3>
              <p className="text-gray-700 mb-4">
                We use Google Firebase for authentication, database storage, and analytics. Firebase processes data in accordance with Google's privacy policy and our data processing agreement.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3">Google Analytics 4</h3>
              <p className="text-gray-700 mb-4">
                GA4 helps us understand user behavior and improve our services. We have implemented appropriate safeguards and only collect anonymized data where possible.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3">Payment Processors</h3>
              <p className="text-gray-700 mb-4">
                Payment information is processed by certified payment gateways that comply with PCI DSS standards. We do not store payment card details on our servers.
              </p>
            </section>

            <section id="data-retention">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">8. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information only as long as necessary for the purposes outlined in this policy, unless a longer retention period is required by law. Specific retention periods include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Account Data:</strong> Retained while your account is active and for 3 years after deactivation</li>
                <li><strong>Order History:</strong> Retained for 7 years for tax and legal compliance</li>
                <li><strong>Communication Records:</strong> Retained for 3 years for customer service purposes</li>
                <li><strong>Analytics Data:</strong> Anonymized and retained for up to 26 months</li>
              </ul>
            </section>

            <section id="international">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">9. International Data Transfers</h2>
              <p className="text-gray-700">
                Your data may be transferred to and processed in countries other than India. We ensure that such transfers comply with DPDP Act requirements and implement appropriate safeguards, including standard contractual clauses and adequacy decisions where applicable.
              </p>
            </section>

            <section id="children">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700">
                Our service is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.
              </p>
            </section>

            <section id="changes">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">12. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@noshtio.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 99999 99999</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> 123 Food Street, Tech Park, Bangalore, Karnataka 560001, India</p>
                <p className="text-gray-700"><strong>Data Protection Officer:</strong> dpo@noshtio.com</p>
              </div>
              <p className="text-gray-700 mt-4">
                For complaints to the Data Protection Board of India, please visit: <a href="https://dpdpb.gov.in" className="text-electricBlue hover:text-electricBlue/80" target="_blank" rel="noopener noreferrer">dpdpb.gov.in</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}