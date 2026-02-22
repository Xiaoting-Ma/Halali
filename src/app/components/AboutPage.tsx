import image_c52ee1f135a1ca70f1917649141466979f3d74a9 from "@/assets/c52ee1f135a1ca70f1917649141466979f3d74a9.png"
import image_814c30240496e02ef52115ff466f678e24777e2d from "@/assets/814c30240496e02ef52115ff466f678e24777e2d.png"
import {
  Globe,
  Heart,
  Users,
  Shield,
  CheckCircle,
  Lock,
} from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { SEO } from "@/app/components/SEO";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import heroBackground from "@/assets/814c30240496e02ef52115ff466f678e24777e2d.png";
import visionImage from "@/assets/0879bdac242fd5046696d244c703e7b06590ea68.png";

export function AboutPage() {
  const { t } = useTranslation();
  const [scale, setScale] = useState(1);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = Math.min(
          Math.max(
            (windowHeight - rect.top) /
              (windowHeight + rect.height),
            0,
          ),
          1,
        );
        const newScale = 1 + scrollProgress * 0.3;
        setScale(newScale);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const values = [
    {
      title: t("about.value1Title"),
      description: t("about.value1Desc"),
    },
    {
      title: t("about.value2Title"),
      description: t("about.value2Desc"),
    },
    {
      title: t("about.value3Title"),
      description: t("about.value3Desc"),
    },
    {
      title: t("about.value4Title"),
      description: t("about.value4Desc"),
    },
    {
      title: t("about.value5Title"),
      description: t("about.value5Desc"),
    },
  ];

  const verificationSteps = [
    t("about.verification1"),
    t("about.verification2"),
    t("about.verification3"),
    t("about.verification4"),
  ];

  const securityMeasures = [
    t("about.security1"),
    t("about.security2"),
    t("about.security3"),
    t("about.security4"),
  ];

  return (
    <div className="w-full">
      <SEO
        title="About Halali - World's First All-Halal Delivery Platform"
        description="Learn about Halali's mission to serve 2 billion Muslims worldwide with 100% certified halal food delivery and transparent verification."
        keywords="halal food platform, Muslim food service, halal certification, halal food mission, halal verification process, about halali"
        canonical="/about"
      />
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-cover bg-center overflow-hidden"
      >
        {/* Background layer with scale effect */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroBackground}')`,
            transform: `scale(${scale})`,
            transition: "transform 0.1s ease-out",
          }}
        />

        {/* Content layer */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('about.heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              {t('about.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.whoWeAreTitle')}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 shadow-sm mx-auto">
                    <Globe className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                    {t('about.foundationTitle')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('about.foundationDesc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 shadow-sm mx-auto">
                    <Users className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">
                    {t('about.teamTitle')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('about.teamDesc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-primary overflow-hidden">
        <div className="mx-auto max-w-7xl pl-4 sm:pl-6 lg:pl-8">
          <div className="grid md:grid-cols-2 gap-0 items-center">
            {/* Left: Text Content with Title */}
            <div className="space-y-6 pr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('about.visionTitle')}
              </h2>
              <div className="space-y-4">
                <p className="text-xl text-gray-800 leading-relaxed">
                  {t('about.vision1')}
                </p>
                <p className="text-xl text-gray-800 leading-relaxed">
                  {t('about.vision2')}
                </p>
              </div>
            </div>

            {/* Right: Image - No spacing on top, bottom, right */}
            <div className="order-first md:order-last">
              <div className="overflow-hidden h-64 md:h-80">
                <img
                  src={image_c52ee1f135a1ca70f1917649141466979f3d74a9}
                  alt="Halal food delivery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.valuesTitle')}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
            {values.map((value, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col"
              >
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="font-semibold text-gray-900 mb-2 min-h-[3rem] flex items-center justify-center">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Halal Verification */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.verificationTitle')}
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-800 leading-relaxed">
                {t('about.verificationIntro')}
                <span className="font-semibold text-gray-900">
                  {t('about.verificationIntroHighlight')}
                </span>
              </p>
            </div>
          </div>

          {/* How We Verify Title */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
              {t('about.verificationHowTitle')}
            </h3>
          </div>

          {/* Verification Steps - Card Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center font-bold text-gray-700 text-2xl shadow-lg flex-shrink-0">
                  1
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  {t('about.step1Title')}
                </h4>
              </div>
              <div className="space-y-6 text-gray-800 leading-relaxed mb-12">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    {t('about.step1Check1')}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    {t('about.step1Check2')}
                  </span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center font-bold text-gray-700 text-2xl shadow-lg flex-shrink-0">
                  2
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  {t('about.step2Title')}
                </h4>
              </div>
              <p className="text-gray-800 leading-relaxed mb-2">
                {t('about.step2Intro')}
              </p>
              <div className="grid grid-cols-1 gap-1">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    {t('about.step2Check1')}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    {t('about.step2Check2')}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    {t('about.step2Check3')}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    {t('about.step2Check4')}
                  </span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center font-bold text-gray-700 text-2xl shadow-lg flex-shrink-0">
                  3
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  {t('about.step3Title')}
                </h4>
              </div>
              <p className="text-gray-800 leading-relaxed mb-4">
                {t('about.step3Intro')}
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    {t('about.step3Check1')}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    {t('about.step3Check2')}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    {t('about.step3Check3')}
                  </span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center font-bold text-gray-700 text-2xl shadow-lg flex-shrink-0">
                  4
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  {t('about.step4Title')}
                </h4>
              </div>
              <div className="space-y-4 text-gray-800 leading-relaxed">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    {t('about.step4Check1')}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    {t('about.step4Check2')}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    {t('about.step4Check3')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 - Full Width */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center font-bold text-gray-700 text-2xl shadow-lg flex-shrink-0">
                5
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                {t('about.step5Title')}
              </h4>
            </div>
            <div>
              <p className="text-gray-800 leading-relaxed mb-4">
                {t('about.step5Intro')}
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    {t('about.step5Check1')}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    {t('about.step5Check2')}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    {t('about.step5Check3')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto bg-secondary p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {t('about.closingTitle')}
              </h3>
              <p className="text-xl text-white/90 font-medium">
                {t('about.closingLine1')}
                <br />
                {t('about.closingLine2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.dataSecurityTitle')}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Shield className="w-8 h-8 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <ul className="space-y-4">
                  {securityMeasures.map((measure, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3"
                    >
                      <Lock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-gray-700 leading-relaxed">
                        {measure}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}