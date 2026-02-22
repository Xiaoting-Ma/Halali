import {
  Clock,
  FileCheck,
  Wallet,
  Download,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { SEO } from "@/app/components/SEO";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import deliveryImage1 from "@/assets/aea073eea58123734f7f00dd02ff76a63f91faa6.png";
import deliveryImage2 from "@/assets/ed12b43265542c71c168e645e9d74718cf1071cd.png";
import deliveryImage3 from "@/assets/925fc2fd5eec7efd8153213d4646bddba7e0b4f9.png";
import heroBackground from "@/assets/19f259a93cb63abbf4c1607f6e7cc2c109f5c9d8.png";
import iconBackpack from "@/assets/c1ae1b1ce7fe3487a4b5bd15874a2a2a5be7ed68.png";
import iconShoppingBag from "@/assets/ca3cec3398d58ec9817687fa281e963df18a3967.png";
import iconGlobe from "@/assets/0e22f7227bfc767a487c0e54a88c5f93b6598fb4.png";

interface RidersPageProps {
  onNavigate: (page: string) => void;
}

export function RidersPage({ onNavigate }: RidersPageProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    age: "",
    workType: "",
    city: "",
    vehicle: "",
    experience: "",
    hours: "",
  });

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
        const newScale = 1 + scrollProgress * 0.15;
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
    setSubmitStatus("idle");

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
            _subject: "New Rider Application - Halali",
            _captcha: "false",
            _template: "table",
            "First Name": formData.firstName,
            "Last Name": formData.lastName,
            Phone: formData.phone,
            Email: formData.email,
            Age: formData.age,
            "Work Type": formData.workType,
            City: formData.city,
            Vehicle: formData.vehicle,
            Experience: formData.experience || "N/A",
            "Expected Hours": formData.hours || "N/A",
          }),
        },
      );

      if (response.ok) {
        setSubmitStatus("success");
        onNavigate("rider-success");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      image: iconBackpack,
      title: t("riders.benefit1Title"),
      description: t("riders.benefit1Desc"),
    },
    {
      image: iconShoppingBag,
      title: t("riders.benefit2Title"),
      description: t("riders.benefit2Desc"),
    },
    {
      image: iconGlobe,
      title: t("riders.benefit3Title"),
      description: t("riders.benefit3Desc"),
    },
  ];

  const cities = [
    "Adelaide",
    "Brisbane",
    "Canberra",
    "Gold Coast",
    "Melbourne",
    "Perth",
    "Sydney",
    "Other",
  ];
  const vehicles = ["Car", "Motorbike", "Bicycle", "E-bike"];
  const workTypes = ["Fixed", "Part-time"];

  return (
    <div className="w-full">
      <SEO
        title="Become a Halali Delivery Rider - Flexible Earning Opportunities"
        description="Join our halal delivery team. Flexible hours, competitive pay, serve your community. Apply now for delivery rider positions."
        keywords="halal delivery jobs, delivery rider jobs, food delivery driver, flexible delivery work, halal rider jobs, delivery partner jobs"
        canonical="/riders"
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroBackground}')`,
            transform: `scale(${scale})`,
            transition: "transform 0.1s ease-out",
          }}
        />

        {/* Content layer */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("riders.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              {t("riders.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Two Working Models */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("riders.workingModelsTitle")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="border-2 border-gray-100 transition-all duration-300 hover:-translate-y-1">
              <div className="p-4 md:p-8 text-center bg-gray-50">
                {/* <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Download className="w-8 h-8 text-gray-700" />
                </div>  */}
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  {t("riders.flexibleScheduleTitle")}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t("riders.flexibleScheduleDesc")}
                </p>
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-1/2 bg-primary hover:bg-transparent text-gray-900 font-semibold"
                    onClick={() => {
                      document
                        .getElementById("application-form")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                  >
                    {t("riders.applyNow")}
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-100 bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-8 text-center">
                {/* <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileCheck className="w-8 h-8 text-gray-700" />
                </div> */}
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  {t("riders.fixedHoursTitle")}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t("riders.fixedHoursDesc")}
                </p>
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-1/2 bg-secondary hover:bg-transparent text-gray-900 font-semibold"
                    onClick={() => {
                      document
                        .getElementById("application-form")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                  >
                    {t("riders.applyNowCaps")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ride with Halali */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("riders.whyRideTitle")}
            </h2>
          </div>

          {/* Vertical stack with alternating image-card layout */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => {
              const images = [
                deliveryImage1,
                deliveryImage2,
                deliveryImage3,
              ];
              const isImageLeft = index % 2 === 0; // 0, 2 -> left; 1 -> right

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-hidden ${
                    !isImageLeft ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`${!isImageLeft ? "lg:order-2" : "lg:order-1"} flex justify-center overflow-hidden`}
                  >
                    <img
                      src={images[index]}
                      alt={benefit.title}
                      className={`w-full aspect-[7/4] object-cover object-center`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`${!isImageLeft ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div
                      className={`border-0 shadow-none transition-all duration-300 hover:-translate-y-1 bg-gray-50 h-full`}
                    >
                      <div className="p-4 md:p-8 bg-primary text-center flex flex-col justify-center h-full">

                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          {benefit.title}
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section
        id="application-form"
        className="py-12 md:py-16 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("riders.formTitle")}
            </h2>
            <p className="text-lg text-secondary">
              {t("riders.formSubtitle")}
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card
              className="border-0 shadow-lg bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1758384077159-29cad24750d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjByaWRlciUyMG1vdG9yY3ljbGUlMjBjb3VyaWVyfGVufDF8fHx8MTc3MDcxOTUzNXww&ixlib=rb-4.1.0&q=80&w=1080')`,
              }}
            >
              <CardContent className="p-4 md:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 md:space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="text-white"
                      >
                        {t("riders.firstName")} *
                      </Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="lastName"
                        className="text-white"
                      >
                        {t("riders.lastName")} *
                      </Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            lastName: e.target.value,
                          })
                        }
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-white"
                    >
                      {t("riders.phone")} *
                    </Label>
                    <Input
                      id="phone"
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
                      htmlFor="email"
                      className="text-white"
                    >
                      {t("riders.email")} *
                    </Label>
                    <Input
                      id="email"
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
                    <Label htmlFor="age" className="text-white">
                      {t("riders.age")} *
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      required
                      value={formData.age}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          age: e.target.value,
                        })
                      }
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="workType"
                      className="text-white"
                    >
                      {t("riders.workType")} *
                    </Label>
                    <Select
                      value={formData.workType}
                      onValueChange={(value) =>
                        setFormData({
                          ...formData,
                          workType: value,
                        })
                      }
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue
                          placeholder={t(
                            "riders.workTypePlaceholder",
                          )}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {workTypes.map((workType) => (
                          <SelectItem
                            key={workType}
                            value={workType}
                          >
                            {workType}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor="city"
                      className="text-white"
                    >
                      {t("riders.city")} *
                    </Label>
                    <Select
                      value={formData.city}
                      onValueChange={(value) =>
                        setFormData({
                          ...formData,
                          city: value,
                        })
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue
                          placeholder={t(
                            "riders.cityPlaceholder",
                          )}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor="vehicle"
                      className="text-white"
                    >
                      {t("riders.vehicle")} *
                    </Label>
                    <Select
                      value={formData.vehicle}
                      onValueChange={(value) =>
                        setFormData({
                          ...formData,
                          vehicle: value,
                        })
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue
                          placeholder={t(
                            "riders.vehiclePlaceholder",
                          )}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {vehicles.map((vehicle) => (
                          <SelectItem
                            key={vehicle}
                            value={vehicle}
                          >
                            {vehicle}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor="experience"
                      className="text-white"
                    >
                      {t("riders.experience")}
                    </Label>
                    <Input
                      id="experience"
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          experience: e.target.value,
                        })
                      }
                      className="mt-1"
                      placeholder={t(
                        "riders.experiencePlaceholder",
                      )}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="hours"
                      className="text-white"
                    >
                      {t("riders.hours")}
                    </Label>
                    <Input
                      id="hours"
                      value={formData.hours}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hours: e.target.value,
                        })
                      }
                      className="mt-1"
                      placeholder={t("riders.hoursPlaceholder")}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? t("riders.submitting")
                      : t("riders.submitApplication")}
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
    </div>
  );
}