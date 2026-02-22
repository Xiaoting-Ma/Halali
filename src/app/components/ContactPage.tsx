import {
  Mail,
  Briefcase,
  HelpCircle,
  MapPin,
  Phone,
  Globe,
  Store,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { SEO } from "@/app/components/SEO";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import heroBackground from "@/assets/cd2c41931df388104969a6c1fbbfa92c07870ffe.png";

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
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

  const contacts = [
    {
      icon: Mail,
      title: t('contact.careerOpportunitiesTitle'),
      description: t('contact.careerOpportunitiesDesc'),
      email: "contact@halali.co",
      responseTime: t('contact.hours24'),
    },
    {
      icon: Briefcase,
      title: t('contact.businessPartnershipsTitle'),
      description: t('contact.businessPartnershipsDesc'),
      email: "contact@halali.co",
      responseTime: t('contact.hours24'),
    },
    {
      icon: Store,
      title: t('contact.merchantOnboardingTitle'),
      description: t('contact.merchantOnboardingDesc'),
      email: "contact@halali.co",
      responseTime: t('contact.hours24'),
    },
    {
      icon: ShieldCheck,
      title: t('contact.userSupportTitle'),
      description: t('contact.userSupportDesc'),
      email: "support@halali.co",
      responseTime: t('contact.hours24'),
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Contact Halali - Get in Touch with Our Team"
        description="Contact Halali for customer support, partnership inquiries, or general questions. We're here to help."
        keywords="halal delivery support, contact halal platform, halal food customer service, halali contact, halali support"
        canonical="/contact"
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
              {t('contact.heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              {t('contact.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Categories */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('contact.howCanWeHelpTitle')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('contact.howCanWeHelpSubtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-sm">
                        <contact.icon className="w-6 h-6 text-gray-900" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-gray-700 mb-2">
                        {contact.title}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                        {contact.description}
                      </p>
                      <div className="space-y-1">
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-secondary hover:underline text-sm break-all block font-medium"
                        >
                          {contact.email}
                        </a>
                        <p className="text-xs text-gray-500">
                          {t('contact.responseTime')} {contact.responseTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('contact.quickLinksTitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div
              className="hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => onNavigate("merchants")}
            >
              <div className="bg-primary rounded-lg p-6 text-center">
                <h3 className="font-semibold text-gray-700 mb-2">
                  {t('contact.joinAsMerchant')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t('contact.joinAsMerchantDesc')}
                </p>
              </div>
            </div>

            <div
              className="hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => onNavigate("riders")}
            >
              <div className="bg-primary rounded-lg p-6 text-center">
                <h3 className="font-semibold text-gray-700 mb-2">
                  {t('contact.becomeRider')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t('contact.becomeRiderDesc')}
                </p>
              </div>
            </div>

            <div
              className="hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => onNavigate("home#downloads")}
            >
              <div className="bg-primary rounded-lg p-6 text-center">
                <h3 className="font-semibold text-gray-700 mb-2">
                  {t('contact.downloadApp')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t('contact.downloadAppDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}