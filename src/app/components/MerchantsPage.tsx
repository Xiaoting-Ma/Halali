import {
  CheckCircle,
  Upload,
  Printer,
  TrendingUp,
  Award,
  Headphones,
  Users,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { SEO } from "@/app/components/SEO";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import image_3ee04373096054aee370a62d9b003fd9cf6011b0 from "@/assets/3ee04373096054aee370a62d9b003fd9cf6011b0.png";
import image_daa93373228cc7dd781f4d1897850505123c1b58 from "@/assets/daa93373228cc7dd781f4d1897850505123c1b58.png";
import image_e7c31c3201965bdbb1a8397fe9f77ec2325746bd from "@/assets/e7c31c3201965bdbb1a8397fe9f77ec2325746bd.png";
import image_95e7c123097257514483210cfbc5d2543b92a73e from "@/assets/95e7c123097257514483210cfbc5d2543b92a73e.png";
import heroBackground from "@/assets/0ee2538b73a7a9a511200a366935fa8bb1db9bfc.png";
import partnerAppImage from "@/assets/089a48ae75293465fae59d3721e6dea2eb231c0d.png";

// Onboarding icons
const onboardingIcon1 =
  image_daa93373228cc7dd781f4d1897850505123c1b58;
const onboardingIcon2 =
  image_e7c31c3201965bdbb1a8397fe9f77ec2325746bd;
const onboardingIcon3 =
  image_95e7c123097257514483210cfbc5d2543b92a73e;

interface MerchantsPageProps {
  onNavigate: (page: string) => void;
}

export function MerchantsPage({
  onNavigate,
}: MerchantsPageProps) {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    restaurantName: "",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    halalStatus: "",
    halalInfo: "",
    description: "",
  });

  const [storeType, setStoreType] = useState<
    "single" | "chain"
  >("single");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/contact@halali.co",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            storeType: storeType,
            _subject: "New Merchant Application - Halali",
            _captcha: "false",
            _template: "table",
          }),
        },
      );
      if (response.ok) {
        setSubmitStatus("success");
        onNavigate("merchant-success");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onboardingSteps = [
    {
      icon: onboardingIcon1,
      title: t("merchants.onboardingStep1Title"),
      description: t("merchants.onboardingStep1Desc"),
    },
    {
      icon: onboardingIcon2,
      title: t("merchants.onboardingStep2Title"),
      description: t("merchants.onboardingStep2Desc"),
    },
    {
      icon: onboardingIcon3,
      title: t("merchants.onboardingStep3Title"),
      description: t("merchants.onboardingStep3Desc"),
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: t("merchants.benefit1Title"),
      description: t("merchants.benefit1Desc"),
    },
    {
      icon: Award,
      title: t("merchants.benefit2Title"),
      description: t("merchants.benefit2Desc"),
    },
    {
      icon: Smartphone,
      title: t("merchants.benefit3Title"),
      description: t("merchants.benefit3Desc"),
    },
    {
      icon: Headphones,
      title: t("merchants.benefit4Title"),
      description: t("merchants.benefit4Desc"),
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Partner with Halali - Grow Your Halal Restaurant Business"
        description="Join the world's first all-halal delivery platform. Reach Muslim customers, grow your business, and showcase your halal certification."
        keywords="halal restaurant partnership, halal food business, halal merchant platform, halal restaurant growth, halal food delivery partner, restaurant halal certification"
        canonical="/merchants"
      />
      {/* Hero Banner */}
      <section
        ref={heroRef}
        className="relative bg-cover bg-center overflow-hidden"
      >
        {/* Background layer with scale effect */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: heroBackground
              ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${heroBackground}')`
              : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
            backgroundColor: "#1a1a1a",
            transform: `scale(${scale})`,
            transition: "transform 0.1s ease-out",
          }}
        />

        {/* Content layer */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("merchants.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              {t("merchants.heroSubtitle")}
            </p>
            <Button
              size="lg"
              className="bg-primary border-2 border-primary text-gray-800 hover:bg-transparent hover:border-white hover:text-white text-lg px-8"
              onClick={() => {
                document
                  .getElementById("application-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("merchants.joinNow")}
            </Button>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section
        className="py-12 md:py-16 bg-white"
        id="application-form"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("merchants.formTitle")}
            </h2>
            <p className="text-secondary">
              {t("merchants.formSubtitle")}
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card
              className="border-0 shadow-lg bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1762994576926-b8268190a2c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxhbCUyMHJlc3RhdXJhbnQlMjBraXRjaGVuJTIwZm9vZCUyMHByZXBhcmF0aW9ufGVufDF8fHx8MTc3MDcxODU3MHww&ixlib=rb-4.1.0&q=80&w=1080')`,
              }}
            >
              <CardContent className="p-4 md:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-4"
                >
                  {/* Store Type Toggle */}
                  <div className="mb-4 md:mb-8">
                    <div className="flex items-center justify-center gap-6 max-w-md mx-auto">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="storeType"
                          value="single"
                          checked={storeType === "single"}
                          onChange={(e) =>
                            setStoreType(
                              e.target.value as
                                | "single"
                                | "chain",
                            )
                          }
                          className="w-5 h-5 appearance-none rounded-full border-2 border-white bg-white checked:border-[5px] checked:border-secondary focus:outline-none cursor-pointer transition-all"
                        />
                        <span className="text-base font-medium text-white">
                          {t("merchants.singleStore")}
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="storeType"
                          value="chain"
                          checked={storeType === "chain"}
                          onChange={(e) =>
                            setStoreType(
                              e.target.value as
                                | "single"
                                | "chain",
                            )
                          }
                          className="w-5 h-5 appearance-none rounded-full border-2 border-white bg-white checked:border-[5px] checked:border-secondary focus:outline-none cursor-pointer transition-all"
                        />
                        <span className="text-base font-medium text-white">
                          {t("merchants.chainStore")}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="restaurantName"
                      className="text-white"
                    >
                      {t("merchants.restaurantName")} *
                    </Label>
                    <Input
                      id="restaurantName"
                      name="Restaurant Name"
                      required
                      value={formData.restaurantName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          restaurantName: e.target.value,
                        })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="contactName"
                      className="text-white"
                    >
                      {t("merchants.contactName")} *
                    </Label>
                    <Input
                      id="contactName"
                      name="Contact Name"
                      required
                      value={formData.contactName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactName: e.target.value,
                        })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-white"
                    >
                      {t("merchants.email")} *
                    </Label>
                    <Input
                      id="email"
                      name="Email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-white"
                    >
                      {t("merchants.phone")} *
                    </Label>
                    <Input
                      id="phone"
                      name="Phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="address"
                      className="text-white"
                    >
                      {t("merchants.address")} *
                    </Label>
                    <Input
                      id="address"
                      name="Address"
                      required
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: e.target.value,
                        })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="halalStatus"
                      className="text-white"
                    >
                      {t("merchants.halalStatus")} *
                    </Label>
                    <Select
                      required
                      name="Halal Status"
                      value={formData.halalStatus}
                      onValueChange={(value) =>
                        setFormData({
                          ...formData,
                          halalStatus: value,
                        })
                      }
                    >
                      <SelectTrigger className="w-full mt-2">
                        <SelectValue
                          placeholder={t(
                            "merchants.halalStatusPlaceholder",
                          )}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes - We have halal certification">
                          {t("merchants.halalStatusYes")}
                        </SelectItem>
                        <SelectItem value="No - We don't have certification yet">
                          {t("merchants.halalStatusNo")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label
                      htmlFor="halalInfo"
                      className="text-white"
                    >
                      {t("merchants.halalInfo")}
                    </Label>
                    <Textarea
                      id="halalInfo"
                      name="Halal Information"
                      rows={2}
                      value={formData.halalInfo}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          halalInfo: e.target.value,
                        })
                      }
                      className="mt-1"
                      placeholder={t(
                        "merchants.halalInfoPlaceholder",
                      )}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="description"
                      className="text-white"
                    >
                      {t("merchants.description")}
                    </Label>
                    <Textarea
                      id="description"
                      name="Restaurant Description"
                      rows={2}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      className="mt-1"
                      placeholder={t(
                        "merchants.descriptionPlaceholder",
                      )}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? t("merchants.submittingApplication")
                      : t("merchants.submitApplication")}
                  </Button>

                  {/* Success/Error Message */}
                  {submitStatus === "success" && (
                    <div className="mt-4 p-4 bg-secondary/20 border-2 border-secondary rounded-lg">
                      <p className="text-center text-lg font-medium text-white">
                        ✓ Application submitted successfully!
                        We'll contact you soon.
                      </p>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="mt-4 p-4 bg-red-500/20 border-2 border-red-500 rounded-lg">
                      <p className="text-center text-lg font-medium text-white">
                        ✕ Something went wrong. Please try again
                        or contact us directly.
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("merchants.onboardingTitle")}
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
            {onboardingSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-center w-full md:w-auto"
              >
                <div className="transition-all duration-300 hover:-translate-y-1 flex-1 md:flex-none md:w-72">
                  <div className="p-2 md:p-4 h-[160px] text-center border border-gray-200 rounded-lg shadow-md bg-white flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* Arrow between steps - hidden on mobile, shown on desktop */}
                {index < onboardingSteps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center mx-4">
                    <ArrowRight
                      className="w-8 h-8 text-secondary"
                      strokeWidth={3}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 md:py-16 bg-[#FBFAFE]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-8 items-center">
            {/* Left: Image - 3/6 width on large screens */}
            <div className="lg:col-span-3">
              <div>
                {/* Title Section */}
                <div className="mb-0">
                  <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-700 mb-3">
                    Free to join Halali
                  </h2>
                  <p className="text-center text-lg text-gray-500">
                    <span className="font-bold">
                      All-in-one
                    </span>{" "}
                    POS software & hardware <br /> that helps{" "}
                    <span className="font-bold">
                      your business grow
                    </span>
                  </p>
                </div>

                {/* Image */}
                <img
                  src={
                    image_3ee04373096054aee370a62d9b003fd9cf6011b0
                  }
                  alt="Halali Partner App"
                  className="w-full h-auto max-h-[600px] object-contain"
                />
              </div>
            </div>

            {/* Right: Title + Card - 3/6 width on large screens */}
            <div className="lg:col-span-3">
              {/* Title */}
              <div className="mb-8">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t("merchants.eligibilityTitle")}
                </h2>
              </div>

              {/* Card */}
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <ul className="space-y-6">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-700 mb-1">
                          {t("merchants.requirement1Title")}
                        </h4>
                        <p className="text-gray-600">
                          {t("merchants.requirement1Desc")}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-700 mb-1">
                          {t("merchants.requirement2Title")}
                        </h4>
                        <p className="text-gray-600">
                          {t("merchants.requirement2Desc")}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-700 mb-1">
                          {t("merchants.requirement3Title")}
                        </h4>
                        <p className="text-gray-600">
                          {t("merchants.requirement3Desc")}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-700 mb-1">
                          {t("merchants.requirement4Title")}
                        </h4>
                        <p className="text-gray-600">
                          {t("merchants.requirement4Desc")}
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}