import { LanguageSwitcher } from "@/app/components/LanguageSwitcher";

export function PrivacyPolicyPage() {

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 mt-12">
        <h1 className="text-xl md:text-2xl text-center font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-lg text-center font-semibold text-gray-900 mt-8">
          Halali Life Pty Ltd
        </p>
        <hr className="mt-8 border-gray-300" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="prose prose-gray max-w-none">

          {/* Section 1: Contact Details */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Contact Details
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                1.1 This is the privacy policy for the Halali mobile application and website (together, our "Platform") operated by Halali Life Pty Ltd (ABN 23 689 962 427) ("we", "us", or "Halali"), a company registered in Australia.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                Our registered office is located in Australia.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                1.2 If you have any queries regarding this Privacy Policy or how we handle your personal information, please contact:{' '}
                <span className="text-secondary font-medium">
                  support@halali.co
                </span>
              </p>
              <div className="mt-4 text-gray-700">
                <p className="font-semibold mb-2">
                  This Policy explains:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>How we collect your information</li>
                  <li>How & why we use your information</li>
                  <li>Promotional communications</li>
                  <li>Retention of your information</li>
                  <li>Disclosure of your information</li>
                  <li>International data transfers</li>
                  <li>Payment processing</li>
                  <li>Security</li>
                  <li>Your rights</li>
                  <li>Changes to this Privacy Policy</li>
                </ul>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                1.3 Please read this Policy carefully to understand our practices regarding your personal information.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                1.4 By using our services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </section>

          {/* Section 2: How We Collect Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. How We Collect Your Information
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                2.1 Halali operates as a technology platform connecting users with fully halal restaurants and independent delivery contractors.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                We collect personal information when you interact with our Platform or use our services.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                2.2 We collect information when:
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) You create or update your account</li>
                <li>(b) You place an order</li>
                <li>(c) You make a payment</li>
                <li>(d) You contact customer support</li>
                <li>(e) You browse or use our Platform</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                2.3 Information You Provide
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                When you use our Platform, we may collect:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>Full name</li>
                <li>Contact details (email, phone number)</li>
                <li>Delivery address</li>
                <li>Order details</li>
                <li>Payment details (processed via secure third-party providers)</li>
                <li>Account preferences</li>
                <li>Any information you provide when contacting support</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                If you contact us by phone, we may record calls for training and quality purposes.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                If you voluntarily provide health-related information (e.g., food allergies), this information will be shared with the restaurant solely for order fulfilment purposes.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                2.4 Information Automatically Collected
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                We may collect technical data including:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>Device type</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Location data (where enabled)</li>
                <li>Platform usage data</li>
                <li>Performance analytics</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                This helps us improve user experience, prevent fraud, and enhance platform functionality.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                2.5 Photos & Uploaded Content
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                With your permission, we may collect photos or images when:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>You upload a profile picture</li>
                <li>You upload review images</li>
                <li>You communicate with customer service</li>
                <li>Operational needs require image verification</li>
              </ul>
            </div>
          </section>

          {/* Section 3: How & Why We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How & Why We Use Your Information
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We process your personal information only where permitted under Australian privacy law.
            </p>
            <p className="text-gray-700 mb-2">
              We may rely on:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mb-4">
              <li>Contractual necessity</li>
              <li>Consent</li>
              <li>Legitimate business interests</li>
              <li>Legal obligations</li>
            </ul>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                3.1 To Provide Our Services
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                We use your data to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>Provide access to the Platform</li>
                <li>Process and fulfil orders</li>
                <li>Facilitate payment processing</li>
                <li>Connect you with restaurant partners</li>
                <li>Connect you with independent delivery contractors</li>
                <li>Resolve order issues</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                Halali does not employ riders directly. Delivery services are performed by independent contractors who may also work with other platforms.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                3.2 Legitimate Business Interests
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                We may use data to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>Improve service quality</li>
                <li>Personalise your experience</li>
                <li>Provide customer support</li>
                <li>Prevent fraud</li>
                <li>Enforce contractual terms</li>
                <li>Analyse platform performance</li>
                <li>Protect Halali, merchants, contractors and users</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                3.3 Marketing Communications
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                With your consent (or where permitted by law), we may send:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>Promotional offers</li>
                <li>Platform updates</li>
                <li>New service announcements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                You can unsubscribe at any time.
              </p>
            </div>
          </section>

          {/* Section 4: Promotional Communications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Promotional Communications
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              You may opt-out of marketing communications by:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
              <li>Clicking "unsubscribe"</li>
              <li>Updating your account preferences</li>
              <li>Contacting us directly</li>
            </ul>
          </section>

          {/* Section 5: Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Retention of Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              We retain information only as long as necessary to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
              <li>Fulfil contractual obligations</li>
              <li>Comply with legal requirements</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements</li>
              <li>Prevent fraud</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              When no longer required, data is securely deleted.
            </p>
          </section>

          {/* Section 6: Disclosure */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Disclosure of Your Information
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                6.1 Storage
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your data is primarily stored on secure servers located within Australia.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                6.2 Who We Share Data With
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                We may share information with:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>Restaurant partners (for order fulfilment only)</li>
                <li>Independent delivery contractors (for delivery purposes)</li>
                <li>Payment processors (e.g., Stripe, Airwallex or other authorised providers)</li>
                <li>Cloud hosting providers</li>
                <li>Fraud detection services</li>
                <li>Legal or regulatory authorities where required</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                Halali does not sell personal data.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                6.3 Business Transfers
              </p>
              <p className="text-gray-700 leading-relaxed">
                If Halali undergoes merger, acquisition, or restructuring, personal data may be transferred in accordance with applicable laws.
              </p>
            </div>
          </section>

          {/* Section 7: International Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. International Data Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              Some service providers (e.g., cloud hosting or payment processors) may operate outside Australia.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Where data is transferred internationally, we ensure appropriate safeguards are in place in accordance with Australian privacy law.
            </p>
          </section>

          {/* Section 8: Payment Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Payment Processing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              Payments on Halali are processed through secure third-party payment providers.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              Payment details are encrypted using SSL technology.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              Halali does not store full credit or debit card details.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All payment providers operate under their own privacy policies.
            </p>
          </section>

          {/* Section 9: Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              We implement industry-standard safeguards including:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mb-2">
              <li>SSL encryption</li>
              <li>Secure cloud infrastructure</li>
              <li>Access controls</li>
              <li>Fraud monitoring systems</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-2">
              However, no system can guarantee 100% security of internet transmission.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Users are responsible for keeping their account passwords confidential.
            </p>
          </section>

          {/* Section 10: Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              Under Australian privacy law, you may have rights to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mb-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion (subject to legal limits)</li>
              <li>Withdraw consent</li>
              <li>Object to marketing</li>
              <li>Lodge complaints with the Office of the Australian Information Commissioner (OAIC)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-2">
              To exercise your rights, contact us at:{' '}
              <span className="text-secondary font-medium">
                support@halali.co
              </span>
            </p>
          </section>

          {/* Section 11: Contact Us */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              For privacy-related enquiries:
            </p>
            <p className="text-gray-700 font-semibold">
              Halali Life Pty Ltd
            </p>
            <p className="text-secondary font-medium">
              support@halali.co
            </p>
          </section>

          {/* Section 12: Changes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              We may update this Privacy Policy from time to time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The latest version will always be available on our website and app.
            </p>
            <p className="text-gray-700 font-semibold">
              Last Updated: 21 February 2026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
