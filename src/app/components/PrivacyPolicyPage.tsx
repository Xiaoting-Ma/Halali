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
                1.1 This is the privacy policy for the Halali app and website (together, our "Platform") operated by Halali Life Pty Ltd (ABN 23 689 962 427) ("we" or "us" or "Halali"), registered under the laws of Australia.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                1.2 If you have any queries or requests concerning this privacy policy or how we handle your data more generally, please contact our general customer services team at:{' '}
                <span className="text-secondary font-medium">
                  support@Halali.co
                </span>
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                This policy, together with the Terms and Conditions, sets out
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>How we collect your information</li>
                <li>How & why we use your information</li>
                <li>Our promotional updates and communications</li>
                <li>Retention of your information</li>
                <li>Disclosure of your information</li>
                <li>International data transfers</li>
                <li>Payment processing</li>
                <li>Security</li>
                <li>Your rights</li>
                <li>Changes to our privacy policy</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                1.3 Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                1.4 By using our services you acknowledge you have read and understood this policy.
              </p>
            </div>
          </section>

          {/* Section 2: How we collect your information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. How we collect your information
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                2.1 As part of our commitment to the privacy of our customers and visitors to our Platform more generally, we want to be clear about the sorts of information we will collect about you.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                2.2 We collect your personal information when you interact with us or use our services, such as when you use our Platform to place an order. We also look at how visitors use our Platform, to help us improve our services and optimise customer experience.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                We collect information:
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) when you create an account with us or you change your account settings;</li>
                <li>(b) when you place an order with us and during the order process (including for payment and order delivery);</li>
                <li>(c) when you contact us directly via email, phone, post, message or via our chat function; and</li>
                <li>(d) when you browse and use our Platform (before and after you create an account with us).</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                2.3 Information that we collect from you
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) When you visit the Platform or make an order through the Platform, you are asked to provide information about yourself including your name, contact details, delivery address, order details and payment information such as credit or debit card information, any further information you provide when placing an order.</li>
                <li>(b) We also collect information about you from any messages you post to the Platform or when you contact us or provide us with feedback, including via e-mail, letter, phone or chat function. If you contact us by phone, we may record the call for training and service improvement purposes and make notes in relation to your call.</li>
                <li>(c) We process health information about you, on the basis of your consent, only where you volunteer this information when placing an order, for example if you specify any food allergies. This will be visible to the restaurant when fulfilling your order but will not be used for any further purposes.</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                2.4 Information we automatically collect
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) We collect technical information from your mobile device or computer, such as its operating system, the device and connection type and the IP address from which you are accessing our Platform.</li>
                <li>(b) We also collect technical information about your use of our Platform through a mobile device, for example, carrier, location data and performance data such as mobile payment methods, interaction with other retail technology such as use of NFC Tags, QR Codes and/or use of mobile vouchers.</li>
                <li>(c) Unless you have elected to remain anonymous through your device and/or platform settings, this information may be collected and used by us automatically if you use the service through your mobile device(s) via any Halali mobile application, through your mobile's browser or otherwise.</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                2.5 With your permission, we will collect your pictures, photos, etc. These pictures, photos, etc. will be used in the following ways:
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) When you register your account you will need to upload pictures, photos to set your avatar, homepage information, etc.</li>
                <li>(b) After an order is completed, you may upload pictures of products for evaluation.</li>
                <li>(c) You will need to use them in communication with others such as customer service.</li>
                <li>(d) Other situations where not using pictures, photos will affect our ability to provide you with services.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: How & why we use your information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How & why we use your information
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                3.1 We will only process the data we collect about you if there is a reason for doing so, and if that reason is permitted under data protection law. We will have a lawful basis for processing your information:
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) if we need to process your information in order to provide you with the service you have requested or to enter into a contract;</li>
                <li>(b) we have your consent;</li>
                <li>(c) we have a justifiable reason, which is in our legitimate interests, for processing your data; or</li>
                <li>(d) we are under a legal obligation to do so.</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                3.2 Where we need to in order to provide you with the service you have requested or to enter into a contract, we use your information:
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) to enable us to provide you with access to the relevant parts of the Platform;</li>
                <li>(b) to supply the services you have requested;</li>
                <li>(c) to enable us to collect payment from you; and</li>
                <li>(d) to contact you where necessary concerning our services, such as to resolve issues you may have with your order.</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                3.3 We may process your date with your consent (or, in certain circumstances, in our legitimate interests) to:
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) send you direct marketing to promote our service to you and keep you updated with information about our services,</li>
                <li>(b) including delivering relevant content on topics we think may be of interest to you, and letting you know about new functionalities or services.</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                3.4 We also process your data where we have a justifiable reason, which is in our legitimate interests, for doing so — for example personalisation of our service, including processing data to make it easier and faster for you to place orders. We have listed these reasons below:
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) to improve the effectiveness and quality of service that our customers can expect from us in the future;</li>
                <li>(b) to tailor content that we or our third-party restaurant or advertising partners display to you, for example so that we can show you restaurants which are in your area based on where you tell us you are;</li>
                <li>(c) to enable our customer support team to help you with any enquiries or complaints in the most efficient way possible;</li>
                <li>(d) to contact you for your views and feedback on our services and to notify you if there are any important changes or developments to the Platform or our services, including letting you know that our services are operating in a new area, where you have asked us to do so;</li>
                <li>(e) to analyse your activity on the Platform so that we can administer, support, improve and develop our business and for statistical and analytical purposes and to help us to prevent fraud;</li>
                <li>(f) to enforce our contractual terms with you and any other agreement, and for the exercise or defence of legal claims and to protect the rights of Halali, restaurant partners, riders, or others (including to prevent fraud); and</li>
                <li>(g) if you submit comments and feedback regarding the Platform and the services, we may use such comments and feedback on the Platform and in any marketing or advertising materials. We will only identify you for this purpose by your first name and the city in which you live.</li>
                <li>(h) Where we rely on legitimate interest as a basis for processing your personal information, we carry out a 'balancing test' to ensure that our processing is necessary and that your fundamental rights of privacy are not outweighed by our legitimate interests. You can find out more information about these balancing tests by contacting us using the details above.</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                3.5 Where we are under a legal obligation to do so we may use your information to:
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) Create and store a record of your order(s);</li>
                <li>(b) comply with any legal obligation or regulatory requirement to which we are subject.</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                3.6 Payment Information
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) We do not process any of your financial data directly. When paying for an order placed via our Platform, you are re-directed to our collaborating third-party payment providers’ (such as Stripe or such other FCA-regulated third-party payment gateways as Halali may work from time to time) secured platform. Your personal data will be processed by these third-party payment providers strictly in accordance with the relevant payment card industry standards. Personal data which you supply to any third-party payment providers are not within our control.</li>
                <li>(b) Apple Pay related privacy policy</li>
              </ul>
              <ul className="list-decimal list-inside ml-8 mt-1 text-gray-700">
                <li>When you use our app to make Apple Pay payment, we will not collect and store any information from you in any form or sell it to advertisements or other operating organisations.</li>
                <li>When you use Apple Pay to make payment, you may be asked to select the card information, etc., but the app will not store in any form, and will not share any of your personal information.</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Our promotional updates and communications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Our promotional updates and communications
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                4.1 Where permitted in our legitimate interest or with your prior consent where required by law, we will use your personal information for marketing analysis and to provide you with promotional update communications about our products or services.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                4.2 You can object to further marketing at any time by selecting the "unsubscribe" link at the end of all our marketing and promotional update communications to you.
              </p>
            </div>
          </section>

          {/* Section 5: Retention of your information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Retention of your information
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                5.1 We will not retain your information for any longer than we think is necessary.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                5.2 Information that we collect will be retained for as long as needed to fulfil the purposes outlined in the 'How & why we use your information' section above, in line with our legitimate interest or for a period specifically required by applicable regulations or laws, such as retaining the information for regulatory reporting purposes.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                5.3 When determining the relevant retention periods, we will consider factors including:
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) our contractual obligations and rights in relation to the information involved;</li>
                <li>(b) legal obligation(s) under applicable law to retain data for a certain period of time;</li>
                <li>(c) statute of limitations under applicable law(s);</li>
                <li>(d) our legitimate interests where we have carried out balancing tests (see section on 'How we use your personal information' above);</li>
                <li>(e) (actual or potential) disputes;</li>
                <li>(f) the establishment, exercise or defence of any (actual or potential) legal claim; and</li>
                <li>(g) guidelines issued by relevant data protection authorities.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                Otherwise, we securely erase your information where we no longer require your information for the purposes collected.
              </p>
            </div>
          </section>

          {/* Section 6: Disclosure of your information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Disclosure of your information
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                6.1 The information we collect about you will be transferred to and stored on our servers located within Australia. We are very careful and transparent about who else your information is shared with.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                6.2 Sharing your information internally
              </p>
              <p className="text-gray-700 leading-relaxed">
                We share your information with other Halali group companies only where necessary for the purposes set out in section 4.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                6.3 Sharing your information with third parties
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                We share your information with third party service providers. The types of third party service providers whom we share your information with includes:
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) Payment providers (including online payment providers and fraud detection providers): for the purposes of providing services to us, for example when they process information such as credit card payments for us, provide support services to you or carry out fraud checks for us;</li>
                <li>(b) IT service providers (including cloud providers): for the purposes of data storage and analysis;</li>
                <li>(c) Restaurant partners: that you have placed your order with so that they can fulfil your order, be made aware of any food allergies you have volunteered to tell them about, resolve issues, or improve their services;</li>
                <li>(d) Riders: so they can deliver your order to you;</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                Halali will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy when it is transferred to third parties.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                6.4 If our business enters into a joint venture with, purchases or is sold to or merged with another business entity, your information may be disclosed or transferred to the target company, our new business partners or owners or their advisors.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                6.5 We may also share your information:
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) if we are under a duty to disclose or share your information in order to comply with (and/or where we believe we are under a duty to comply with) any legal obligation or regulatory requirement. This includes exchanging information with other companies and other organisations for the purposes of fraud protection and prevention;</li>
                <li>(b) in order to enforce our contractual terms with you and any other agreement;</li>
                <li>(c) to protect the rights of Halali, restaurant partners, riders, or others, including to prevent fraud.</li>
              </ul>
            </div>
          </section>

          {/* Section 7: Where we store your data & international data transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Where we store your data & international data transfers
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                7.1 The data that we collect from you may be transferred to, and stored at, a destination outside Australia that may not be subject to equivalent Data Protection Law.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                7.2 Where your information is transferred outside Australia, we will take all steps reasonably necessary to ensure that your data is subject to appropriate safeguards, such as relying on a recognised legal adequacy mechanism, and that it is treated securely and in accordance with this privacy policy.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                7.3 We may transfer your personal information outside Australia:
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) in order to store it.</li>
                <li>(b) in order to enable us to provide goods or services and fulfil our contract with you or the company you work for. This includes order fulfilment, processing of payment details, and the provision of support services.</li>
                <li>(c) where we are legally required to do so.</li>
                <li>(d) as part of normal application operation and processing.</li>
                <li>(e) in order to facilitate the operation of our group of businesses, where it is in our legitimate interests and we have concluded these are not overridden by your rights.</li>
              </ul>
            </div>
          </section>

          {/* Section 8: Payment processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Payment processing
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                8.1 Payment details you provide will be encrypted using secure sockets layer (SSL) technology before they are submitted to us over the internet. Payments made on the Platform are made through our payment gateway provider(s), Stripe Connect or such other FCA-regulated third-party payment gateways as Halali may work with from time to time through our Platform ("Payment Gateway(s)"). You will be providing credit or debit card information directly to a Payment Gateway(s) which operates a secure server to process payment details, encrypting your credit/debit card information and authorising payment. Information which you supply to any Payment Gateway(s) is not within our control and is subject to each Payment Gateway(s)'s own privacy policy and terms and conditions.
              </p>
            </div>
          </section>

          {/* Section 9: Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Security
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                9.1 We adopt robust technologies and policies to ensure the personal information we hold about you is suitably protected. Any payment transactions will be encrypted using SSL technology.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                9.2 We take steps to protect your information from unauthorised access and against unlawful processing, accidental loss, destruction and damage.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                9.3 Where you have chosen a password that allows you to access certain parts of the Sites, you are responsible for keeping this password confidential. We advise you not to share your password with anyone.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                9.4 Unfortunately, the transmission of information via the internet is not completely secure. Although we will take steps to protect your information, we cannot guarantee the security of your data transmitted to the Sites; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.
              </p>
            </div>
          </section>

          {/* Section 10: Your rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Your rights
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                10.1 Under data protection law, you may in certain circumstances have a number of rights concerning the data we hold about you. If you wish to exercise any of these rights, please contact our Data Protection Officer using the contact details set out above. For additional information on your rights please contact your data protection authority and see below:
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) The right to be informed. You have the right to be provided with clear, transparent and easily understandable information about how we use your information and your rights. This is why we're providing you with the information in this policy.</li>
                <li>(b) The right of access. You have the right to obtain access to your information (if we're processing it). This will enable you, for example, to check that we're using your information in accordance with data protection law. If you wish to access the information we hold about you in this way, please get in touch (see Contact Details).</li>
                <li>(c) The right to rectification. You are entitled to have your information corrected if it is inaccurate or incomplete. You can request that we rectify any errors in information that we hold by contacting us (see Contact Details).</li>
                <li>(d) The right to erasure. This is also known as 'the right to be forgotten' and, in simple terms, enables you to request the deletion or removal of certain of the information that we hold about you by contacting us (see Contact Details).</li>
                <li>(e) The right to restrict processing. You have rights to 'block' or 'suppress' further use of your information. When processing is restricted, we can still store your information, but will not use it further.</li>
                <li>(f) The right to data portability. You have the right to obtain your personal information in an accessible and transferrable format so that you can re-use it for your own purposes across different service providers. This is not a general right however and there are exceptions. To learn more please get in touch (see Contact Details).</li>
                <li>(g) The right to lodge a complaint. You have the right to lodge a complaint about the way we handle or process your information with the national data protection authority.</li>
                <li>(h) The right to withdraw consent. If you have given your consent to anything we do with your information (i.e. we rely on consent as a legal basis for processing your information), you have the right to withdraw that consent at any time. You can do this by contacting us (see Contact Details). Withdrawing consent will not however make unlawful our use of your information while consent had been apparent.</li>
                <li>(i) The right to object to processing. You have the right to object to certain types of processing, including processing for direct marketing and profiling. You can object by changing your marketing preferences as set out above.</li>
              </ul>
            </div>
          </section>

          {/* Section 11: Contact Us */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Contact Us
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                We welcome your feedback and questions. If you would like to contact us, please send us an email at{' '}
                <span className="text-secondary font-medium">
                  support@Halali.co
                </span>
                .
              </p>
            </div>
          </section>

          {/* Section 12: Changes to our privacy policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Changes to our privacy policy
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                Any changes to our privacy policy will be posted to the Sites and APPs. This privacy policy was last updated: March 8, 2026.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
