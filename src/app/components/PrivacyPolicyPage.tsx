import { LanguageSwitcher } from "@/app/components/LanguageSwitcher";
import { useTranslation } from "@/app/hooks/useTranslation";

export function PrivacyPolicyPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Language Switcher */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-end">
        <LanguageSwitcher />
      </div>

      
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-xl md:text-2xl text-center font-bold text-gray-900">
            {t("privacy.title")}
          </h1>
          <p className="text-lg text-center font-semibold text-gray-900 mt-8">
            {t("privacy.company")}
          </p>
          <hr className="mt-8 border-gray-300" />
        </div>
      

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="prose prose-gray max-w-none">

          {/* Section 1: Contact Details */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("privacy.section1.title")}
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                1.1 {t("privacy.section1.content1")}
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                {t("privacy.section1.content1b")}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                1.2 {t("privacy.section1.content2")}
                <span className="text-secondary font-medium">
                  {' '}support@halali.co
                </span>
              </p>
              <div className="mt-4 text-gray-700">
                <p className="font-semibold mb-2">
                  {t("privacy.section1.policyExplains")}
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>{t("privacy.section1.bullet1")}</li>
                  <li>{t("privacy.section1.bullet2")}</li>
                  <li>{t("privacy.section1.bullet3")}</li>
                  <li>{t("privacy.section1.bullet4")}</li>
                  <li>{t("privacy.section1.bullet5")}</li>
                  <li>{t("privacy.section1.bullet6")}</li>
                  <li>{t("privacy.section1.bullet7")}</li>
                  <li>{t("privacy.section1.bullet8")}</li>
                  <li>{t("privacy.section1.bullet9")}</li>
                  <li>{t("privacy.section1.bullet10")}</li>
                </ul>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                1.3 {t("privacy.section1.content3")}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                1.4 {t("privacy.section1.content4")}
              </p>
            </div>
          </section>

          {/* Section 2: How We Collect Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("privacy.section2.title")}
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                2.1 {t("privacy.section2.content1")}
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                {t("privacy.section2.content1b")}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                2.2 {t("privacy.section2.content2")}
              </p>
              <ul className="list-none space-y-1 ml-4 text-gray-700">
                <li>(a) {t("privacy.section2.bullet2a")}</li>
                <li>(b) {t("privacy.section2.bullet2b")}</li>
                <li>(c) {t("privacy.section2.bullet2c")}</li>
                <li>(d) {t("privacy.section2.bullet2d")}</li>
                <li>(e) {t("privacy.section2.bullet2e")}</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                2.3 {t("privacy.section2.subtitle3")}
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                {t("privacy.section2.content3")}
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>{t("privacy.section2.bullet3a")}</li>
                <li>{t("privacy.section2.bullet3b")}</li>
                <li>{t("privacy.section2.bullet3c")}</li>
                <li>{t("privacy.section2.bullet3d")}</li>
                <li>{t("privacy.section2.bullet3e")}</li>
                <li>{t("privacy.section2.bullet3f")}</li>
                <li>{t("privacy.section2.bullet3g")}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                {t("privacy.section2.content3b")}
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                {t("privacy.section2.content3c")}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                2.4 {t("privacy.section2.subtitle4")}
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                {t("privacy.section2.content4")}
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>{t("privacy.section2.bullet4a")}</li>
                <li>{t("privacy.section2.bullet4b")}</li>
                <li>{t("privacy.section2.bullet4c")}</li>
                <li>{t("privacy.section2.bullet4d")}</li>
                <li>{t("privacy.section2.bullet4e")}</li>
                <li>{t("privacy.section2.bullet4f")}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                {t("privacy.section2.content4b")}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                2.5 {t("privacy.section2.subtitle5")}
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                {t("privacy.section2.content5")}
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>{t("privacy.section2.bullet5a")}</li>
                <li>{t("privacy.section2.bullet5b")}</li>
                <li>{t("privacy.section2.bullet5c")}</li>
                <li>{t("privacy.section2.bullet5d")}</li>
              </ul>
            </div>
          </section>

          {/* Section 3: How & Why We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("privacy.section3.title")}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              {t("privacy.section3.intro")}
            </p>
            <p className="text-gray-700 mb-2">
              {t("privacy.section3.introB")}
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mb-4">
              <li>{t("privacy.section3.bullet0a")}</li>
              <li>{t("privacy.section3.bullet0b")}</li>
              <li>{t("privacy.section3.bullet0c")}</li>
              <li>{t("privacy.section3.bullet0d")}</li>
            </ul>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                3.1 {t("privacy.section3.subtitle1")}
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                {t("privacy.section3.content1")}
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>{t("privacy.section3.bullet1a")}</li>
                <li>{t("privacy.section3.bullet1b")}</li>
                <li>{t("privacy.section3.bullet1c")}</li>
                <li>{t("privacy.section3.bullet1d")}</li>
                <li>{t("privacy.section3.bullet1e")}</li>
                <li>{t("privacy.section3.bullet1f")}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                {t("privacy.section3.content1b")}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                3.2 {t("privacy.section3.subtitle2")}
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                {t("privacy.section3.content2")}
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>{t("privacy.section3.bullet2a")}</li>
                <li>{t("privacy.section3.bullet2b")}</li>
                <li>{t("privacy.section3.bullet2c")}</li>
                <li>{t("privacy.section3.bullet2d")}</li>
                <li>{t("privacy.section3.bullet2e")}</li>
                <li>{t("privacy.section3.bullet2f")}</li>
                <li>{t("privacy.section3.bullet2g")}</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                3.3 {t("privacy.section3.subtitle3")}
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                {t("privacy.section3.content3")}
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>{t("privacy.section3.bullet3a")}</li>
                <li>{t("privacy.section3.bullet3b")}</li>
                <li>{t("privacy.section3.bullet3c")}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                {t("privacy.section3.content3b")}
              </p>
            </div>
          </section>

          {/* Section 4: Promotional Communications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("privacy.section4.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              {t("privacy.section4.content")}
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
              <li>{t("privacy.section4.bullet1")}</li>
              <li>{t("privacy.section4.bullet2")}</li>
              <li>{t("privacy.section4.bullet3")}</li>
            </ul>
          </section>

          {/* Section 5: Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("privacy.section5.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              {t("privacy.section5.content")}
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
              <li>{t("privacy.section5.bullet1")}</li>
              <li>{t("privacy.section5.bullet2")}</li>
              <li>{t("privacy.section5.bullet3")}</li>
              <li>{t("privacy.section5.bullet4")}</li>
              <li>{t("privacy.section5.bullet5")}</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              {t("privacy.section5.contentB")}
            </p>
          </section>

          {/* Section 6: Disclosure */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("privacy.section6.title")}
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                6.1 {t("privacy.section6.subtitle1")}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t("privacy.section6.content1")}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                6.2 {t("privacy.section6.subtitle2")}
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                {t("privacy.section6.content2")}
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>{t("privacy.section6.bullet2a")}</li>
                <li>{t("privacy.section6.bullet2b")}</li>
                <li>{t("privacy.section6.bullet2c")}</li>
                <li>{t("privacy.section6.bullet2d")}</li>
                <li>{t("privacy.section6.bullet2e")}</li>
                <li>{t("privacy.section6.bullet2f")}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                {t("privacy.section6.content2b")}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                6.3 {t("privacy.section6.subtitle3")}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t("privacy.section6.content3")}
              </p>
            </div>
          </section>

          {/* Section 7: International Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("privacy.section7.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              {t("privacy.section7.content1")}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t("privacy.section7.content2")}
            </p>
          </section>

          {/* Section 8: Payment Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("privacy.section8.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              {t("privacy.section8.content1")}
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              {t("privacy.section8.content2")}
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              {t("privacy.section8.content3")}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t("privacy.section8.content4")}
            </p>
          </section>

          {/* Section 9: Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("privacy.section9.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              {t("privacy.section9.content1")}
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mb-2">
              <li>{t("privacy.section9.bullet1")}</li>
              <li>{t("privacy.section9.bullet2")}</li>
              <li>{t("privacy.section9.bullet3")}</li>
              <li>{t("privacy.section9.bullet4")}</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-2">
              {t("privacy.section9.content2")}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t("privacy.section9.content3")}
            </p>
          </section>

          {/* Section 10: Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("privacy.section10.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              {t("privacy.section10.content1")}
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mb-2">
              <li>{t("privacy.section10.bullet1")}</li>
              <li>{t("privacy.section10.bullet2")}</li>
              <li>{t("privacy.section10.bullet3")}</li>
              <li>{t("privacy.section10.bullet4")}</li>
              <li>{t("privacy.section10.bullet5")}</li>
              <li>{t("privacy.section10.bullet6")}</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-2">
              {t("privacy.section10.content2")}
              <span className="text-secondary font-medium">
                {' '}support@halali.co
              </span>
            </p>
          </section>

          {/* Section 11: Contact Us */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("privacy.section11.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              {t("privacy.section11.content")}
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
              {t("privacy.section12.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              {t("privacy.section12.content1")}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t("privacy.section12.content2")}
            </p>
            <p className="text-gray-700 font-semibold">
              {t("privacy.lastUpdated")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
