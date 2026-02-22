import { Globe, Building2, Store, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { SEO } from "@/app/components/SEO";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import heroBackground from "@/assets/0a1fec1297b7a3803fd53a40f8a24a15a0430a48.png";

interface BusinessPageProps {
  onNavigate: (page: string) => void;
}

export function BusinessPage({
  onNavigate,
}: BusinessPageProps) {
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

  const partnerships = [
    {
      icon: Globe,
      title: t("business.partnership1Title"),
      description: t("business.partnership1Desc"),
      benefits: [
        t("business.partnership1Benefit1"),
        t("business.partnership1Benefit2"),
        t("business.partnership1Benefit3"),
        t("business.partnership1Benefit4"),
        t("business.partnership1Benefit5"),
        t("business.partnership1Benefit6"),
      ],
      cta: t("business.partnership1CTA"),
    },
    {
      icon: Building2,
      title: t("business.partnership2Title"),
      description: t("business.partnership2Desc"),
      benefits: [
        t("business.partnership2Benefit1"),
        t("business.partnership2Benefit2"),
        t("business.partnership2Benefit3"),
        t("business.partnership2Benefit4"),
      ],
      cta: t("business.partnership2CTA"),
    },
    {
      icon: Store,
      title: t("business.partnership3Title"),
      description: t("business.partnership3Desc"),
      benefits: [
        t("business.partnership3Benefit1"),
        t("business.partnership3Benefit2"),
        t("business.partnership3Benefit3"),
        t("business.partnership3Benefit4"),
      ],
      cta: t("business.partnership3CTA"),
      button: t("business.partnership3Button"),
      action: () => onNavigate("merchants"),
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Business Partnership Opportunities with Halali"
        description="Explore B2B partnership opportunities with Halali. Corporate catering, bulk orders, and strategic collaborations."
        keywords="halal business partnership, halal corporate catering, B2B halal food service, halal chain restaurant, halal city partner"
        canonical="/business"
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
              {t("business.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              {t("business.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {partnerships.map((partnership, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 gap-0"
              >
                <div>
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="bg-gradient-to-br from-primary to-primary/50 p-6 flex flex-col items-center justify-center text-white">
                      <div className="w-20 h-20 bg-white/50 rounded-full flex items-center justify-center">
                        <partnership.icon className="w-10 h-10 text-gray-700" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-700 text-center">
                        {partnership.title}
                      </h3>
                    </div>
                    <div className="md:col-span-2 p-8 bg-gray-50">
                      <p className="text-lg text-gray-700 mb-6">
                        {partnership.description}
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        {t("business.weProvide")}
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {partnership.benefits.map(
                          (benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <span className="text-secondary">
                                •
                              </span>
                              <span className="text-gray-700">
                                {benefit}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                      <p className="text-gray-600 italic mb-6">
                        {partnership.cta}
                      </p>
                      {partnership.button ? (
                        <Button
                          size="lg"
                          onClick={partnership.action}
                          className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
                        >
                          {partnership.button}
                        </Button>
                      ) : (
                        <div className="flex items-center space-x-2 text-secondary">
                          <Mail className="w-5 h-5" />
                          <a
                            href="mailto:contact@halali.co"
                            className="font-semibold hover:underline"
                          >
                            contact@halali.co
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}