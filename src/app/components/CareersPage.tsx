import {
  MapPin,
  Briefcase,
  Mail,
  TrendingUp,
  Globe,
  Users,
  Upload,
  X,
  FileText,
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
import { useDropzone } from "react-dropzone";
import { useTranslation } from "@/app/hooks/useTranslation";
import heroBackground from "@/assets/23e724dd31fbcc7f3d17ba7467647596f1eeface.png";

interface CareersPageProps {
  onNavigate: (page: string) => void;
}

export function CareersPage({ onNavigate }: CareersPageProps) {
  const { t } = useTranslation();
  const [scale, setScale] = useState(1);
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    file: null as File | null,
  });

  const [fileError, setFileError] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const cities = ["Sydney", "Melbourne", "Remote-flexible"];

  // 文件上传处理
  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      // 验证文件大小 (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFileError("File size must be less than 5MB");
        return;
      }

      // 验证文件类型
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!validTypes.includes(file.type)) {
        setFileError("Only PDF and Word files are allowed");
        return;
      }

      setFileError("");
      setFormData({ ...formData, file });

      // 将文件设置到隐藏的 input 中，用于表单提交
      if (fileInputRef.current) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInputRef.current.files = dataTransfer.files;
      }
    }
  };

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept: {
        "application/pdf": [".pdf"],
        "application/msword": [".doc"],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          [".docx"],
      },
      maxSize: 5 * 1024 * 1024,
      multiple: false,
    });

  const removeFile = () => {
    setFormData({ ...formData, file: null });
    setFileError("");
  };

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

  const handleApplyClick = (positionTitle: string) => {
    setSelectedPosition(positionTitle);
    setIsFormOpen(true);

    // 使用 setTimeout 确保表单已经渲染
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 验证必填字段
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.location ||
      !formData.file
    ) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);

    // 使用传统表单提交（通过 iframe）
    const form = e.target as HTMLFormElement;
    form.target = "formsubmit-iframe";
    form.submit();

    // 延迟跳转到成功页面（给表单足够时间提交）
    setTimeout(() => {
      onNavigate("career-success");
    }, 2000);
  };

  const positions = [
    {
      title: t("careers.position1Title"),
      location: t("careers.position1Location"),
      type: t("careers.position1Type"),
      description: t("careers.position1Desc"),
      requirements: [
        t("careers.position1Req1"),
        t("careers.position1Req2"),
        t("careers.position1Req3"),
      ],
    },
    {
      title: t("careers.position2Title"),
      location: t("careers.position2Location"),
      type: t("careers.position2Type"),
      description: t("careers.position2Desc"),
      requirements: [
        t("careers.position2Req1"),
        t("careers.position2Req2"),
        t("careers.position2Req3"),
      ],
    },
    {
      title: t("careers.position3Title"),
      location: t("careers.position3Location"),
      type: t("careers.position3Type"),
      description: t("careers.position3Desc"),
      requirements: [
        t("careers.position3Req1"),
        t("careers.position3Req2"),
        t("careers.position3Req3"),
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Careers at Halali - Join Our Growing Team"
        description="Join a fast-growing halal food tech startup. Explore career opportunities in sales, operations, community management and more."
        keywords="halal startup jobs, food delivery careers, tech startup careers Australia, halal food jobs, startup careers Sydney"
        canonical="/careers"
      />

      {/* 隐藏的 iframe 用于表单提交 */}
      <iframe
        ref={iframeRef}
        name="formsubmit-iframe"
        style={{ display: "none" }}
        title="Form submission handler"
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${heroBackground}')`,
            transform: `scale(${scale})`,
            transition: "transform 0.1s ease-out",
          }}
        />

        {/* Content layer */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("careers.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              {t("careers.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12 md:py-16 bg-p">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("careers.openPositionsTitle")}
            </h2>
            <p className="text-secondary text-xl">
              {positions.length} {t("careers.positionsAvailable")}
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {positions.map((position, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 bg-gray-50">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-700 mb-3">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-secondary" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Briefcase className="w-4 h-4 text-secondary" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="shrink-0 bg-primary hover:bg-primary/30 text-gray-900 font-semibold"
                      onClick={() =>
                        handleApplyClick(position.title)
                      }
                    >
                      {t("careers.applyNow")}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {t("careers.description")}
                      </h4>
                      <p className="text-gray-700">
                        {position.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {t("careers.requirements")}
                      </h4>
                      <ul className="space-y-2">
                        {position.requirements.map(
                          (req, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <span className="text-secondary font-bold flex-shrink-0 leading-[1.75rem]">
                                •
                              </span>
                              <span className="text-gray-700 leading-[1.75rem]">
                                {req}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Halali */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("careers.whyJoinTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-5 h-5 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  {t("careers.reason1Title")}
                </h3>
                <p className="text-gray-600">
                  {t("careers.reason1Desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-5 h-5 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  {t("careers.reason2Title")}
                </h3>
                <p className="text-gray-600">
                  {t("careers.reason2Desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-5 h-5 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  {t("careers.reason3Title")}
                </h3>
                <p className="text-gray-600">
                  {t("careers.reason3Desc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      {isFormOpen && (
        <section className="py-12 md:py-16 relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1764755932155-dabbee87df7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBsaWdodCUyMG1pbmltYWx8ZW58MXx8fHwxNzcwNzIzNjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            }}
          />
          {/* White Overlay for Transparency */}
          <div className="absolute inset-0 bg-white/20" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("careers.applyForPosition")} {selectedPosition}
              </h2>
            </div>

            <div className="space-y-3 md:space-y-6 max-w-4xl mx-auto">
              <div className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-white/40 backdrop-blur-sm p-4 md:p-8 rounded-lg">
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    action="https://formsubmit.co/contact@halali.co"
                    method="POST"
                    encType="multipart/form-data"
                  >
                    {/* FormSubmit.co 配置字段 */}
                    <input
                      type="hidden"
                      name="_subject"
                      value={`New Job Application - ${selectedPosition}`}
                    />
                    <input
                      type="hidden"
                      name="_captcha"
                      value="false"
                    />
                    <input
                      type="hidden"
                      name="_template"
                      value="table"
                    />
                    <input
                      type="hidden"
                      name="Position"
                      value={selectedPosition}
                    />

                    <div className="space-y-2 md:space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <Label htmlFor="firstName">
                            {t("careers.formFirstName")}
                          </Label>
                          <Input
                            id="firstName"
                            name="First Name"
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
                        <div className="flex-1">
                          <Label htmlFor="lastName">
                            {t("careers.formLastName")}
                          </Label>
                          <Input
                            id="lastName"
                            name="Last Name"
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

                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <Label htmlFor="email">{t("careers.formEmail")}</Label>
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
                        <div className="flex-1">
                          <Label htmlFor="phone">{t("careers.formPhone")}</Label>
                          <Input
                            id="phone"
                            name="Phone"
                            type="tel"
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
                      </div>

                      <div>
                        <Label htmlFor="location">
                          {t("careers.formLocation")}
                        </Label>
                        <Select
                          value={formData.location}
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              location: value,
                            })
                          }
                          required
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue
                              placeholder={t("careers.formSelectCity")}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {cities.map((city) => (
                              <SelectItem
                                key={city}
                                value={city}
                              >
                                {city}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {/* 隐藏的 input 用于表单提交 */}
                        <input
                          type="hidden"
                          name="Location"
                          value={formData.location}
                        />
                      </div>

                      <div>
                        <Label htmlFor="attachment">
                          {t("careers.formCoverLetter")}
                        </Label>
                        <div className="mt-1">
                          {/* Dropzone UI */}
                          <div
                            {...getRootProps()}
                            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                              isDragActive
                                ? "border-primary bg-primary/10"
                                : "border-gray-300 hover:border-primary"
                            }`}
                          >
                            <input {...getInputProps()} />
                            <Upload className="w-12 h-12 mx-auto mb-4 text-white" />
                            {formData.file ? (
                              <div className="space-y-2">
                                <div className="flex items-center justify-center space-x-2">
                                  <FileText className="w-5 h-5 text-secondary" />
                                  <span className="font-medium text-gray-700">
                                    {formData.file.name}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      removeFile();
                                      if (
                                        fileInputRef.current
                                      ) {
                                        fileInputRef.current.value =
                                          "";
                                      }
                                    }}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <X className="w-5 h-5" />
                                  </button>
                                </div>
                                <p className="text-sm text-gray-500">
                                  {(
                                    formData.file.size /
                                    1024 /
                                    1024
                                  ).toFixed(2)}{" "}
                                  MB
                                </p>
                              </div>
                            ) : (
                              <div>
                                <p className="text-gray-600 mb-2">
                                  {isDragActive
                                    ? t("careers.formDropFile")
                                    : t("careers.formDragDrop")}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {t("careers.formFileTypeHint")}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* 隐藏的 file input 用于实际的表单提交 */}
                          <input
                            ref={fileInputRef}
                            id="attachment"
                            name="attachment"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            required
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                // 验证文件大小 (5MB)
                                if (
                                  file.size >
                                  5 * 1024 * 1024
                                ) {
                                  setFileError(
                                    t("careers.formFileSizeError"),
                                  );
                                  e.target.value = "";
                                  return;
                                }
                                setFileError("");
                                setFormData({
                                  ...formData,
                                  file,
                                });
                              }
                            }}
                          />

                          {fileError && (
                            <p className="text-sm text-red-500 mt-2">
                              {fileError}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <Button
                          size="lg"
                          className="shrink-0 bg-primary hover:bg-primary/90 text-gray-900 font-semibold"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting
                            ? t("careers.formSubmitting")
                            : t("careers.formSubmitApplication")}
                        </Button>
                      </div>

                      {/* Success/Error Message */}
                      {submitStatus === "error" && (
                        <div className="mt-4 p-4 bg-red-500/20 border-2 border-red-500 rounded-lg">
                          <p className="text-center text-lg font-medium text-gray-900">
                            {t("careers.formSubmitError")}
                          </p>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}