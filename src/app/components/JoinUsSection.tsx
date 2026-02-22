import image_23e724dd31fbcc7f3d17ba7467647596f1eeface from '@/assets/23e724dd31fbcc7f3d17ba7467647596f1eeface.png';
import image_e1c619d152e626640c8b37fba7b747047a73c08f from "@/assets/e1c619d152e626640c8b37fba7b747047a73c08f.png";
import image_43f1bd986500cc25efc288635a37e7a0917e8cd8 from "@/assets/43f1bd986500cc25efc288635a37e7a0917e8cd8.png";
import image_f16cfcc130f5d40d259a4196309c2245ff1e3217 from "@/assets/f16cfcc130f5d40d259a4196309c2245ff1e3217.png";
import image_4a267fadb05abb9fd5503b5eb423a80df3b90097 from "@/assets/4a267fadb05abb9fd5503b5eb423a80df3b90097.png";
import { useState } from "react";
import { MapPin } from "lucide-react";
import halaliLogo from "@/assets/17b1b5a6492da9d806399108417a42d3d13d854e.png";
import { useTranslation } from "@/app/hooks/useTranslation";

interface JoinUsSectionProps {
  onNavigate: (page: string) => void;
}

export function JoinUsSection({
  onNavigate,
}: JoinUsSectionProps) {
  const { t } = useTranslation();
  const [activeJoinTab, setActiveJoinTab] = useState<
    "partners" | "riders" | "careers"
  >("partners");

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        {/* Header Title */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 ">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t('home.joinUsTitle')}
          </h2>
          {/* Location Indicator */}
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-gray-800" />
            <span className="text-gray-700 text-lg font-medium">
              {t('home.currentlyOpen')}
            </span>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12">
          <button
            className={`px-3 md:px-8 py-2 md:py-4 rounded-full font-semibold w-24 md:w-44 text-center cursor-pointer transition-all duration-300 ${
              activeJoinTab === "partners"
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-700 hover:bg-primary"
            }`}
            onClick={() => setActiveJoinTab("partners")}
          >
            {t('home.joinUsTabPartners')}
          </button>
          <button
            className={`px-3 md:px-8 py-2 md:py-4 rounded-full font-semibold w-24 md:w-44 text-center cursor-pointer transition-all duration-300 ${
              activeJoinTab === "riders"
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-700 hover:bg-primary"
            }`}
            onClick={() => setActiveJoinTab("riders")}
          >
            {t('home.joinUsTabRiders')}
          </button>
          <button
            className={`px-3 md:px-8 py-2 md:py-4 rounded-full font-semibold w-24 md:w-44 text-center cursor-pointer transition-all duration-300 ${
              activeJoinTab === "careers"
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-700 hover:bg-primary"
            }`}
            onClick={() => setActiveJoinTab("careers")}
          >
            {t('home.joinUsTabCareers')}
          </button>
        </div>

        {/* Tab Content - Partners */}
        {activeJoinTab === "partners" && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden">
            {/* Left: Yellow Background with Text - 3/5 width */}
            <div className="lg:col-span-3 bg-primary p-6 md:p-10 flex flex-col justify-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
                {t('home.joinUsPartnersSubtitle')}
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('home.joinUsPartnersTitle')}
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-6 leading-relaxed">
                {t('home.joinUsPartnersDesc')}
              </p>
              <div className="flex items-center justify-between">
                <button
                  className="bg-secondary text-gray-900 px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-secondary font-semibold hover:border-gray-900 hover:bg-transparent transition-all duration-300"
                  onClick={() =>
                    onNavigate("merchants#application-form")
                  }
                >
                  {t('home.joinUsPartnersButton')}
                </button>
                <img
                  src={
                    image_4a267fadb05abb9fd5503b5eb423a80df3b90097
                  }
                  alt="Halali"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
            </div>

            {/* Right: Image - 2/5 width */}
            <div className="lg:col-span-2 h-[300px] lg:h-[380px] overflow-hidden">
              <img
                src={
                  image_f16cfcc130f5d40d259a4196309c2245ff1e3217
                }
                alt="Chef cooking in restaurant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Tab Content - Riders */}
        {activeJoinTab === "riders" && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden">
            {/* Left: Yellow Background with Text - 3/5 width */}
            <div className="lg:col-span-3 bg-primary p-6 md:p-10 flex flex-col justify-center">
              <p className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                {t('home.joinUsRidersTitle')}
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-8 leading-relaxed">
                {t('home.joinUsRidersDesc')}
              </p>
              <div className="flex items-center justify-between">
                <button
                  className="bg-secondary text-gray-900 px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-secondary font-semibold hover:border-gray-900 hover:bg-transparent transition-all duration-300"
                  onClick={() =>
                    onNavigate("riders#application-form")
                  }
                >
                  {t('home.joinUsRidersButton')}
                </button>
                <img
                  src={
                    image_43f1bd986500cc25efc288635a37e7a0917e8cd8
                  }
                  alt="Halali"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
            </div>

            {/* Right: Image - 2/5 width */}
            <div className="lg:col-span-2 h-[300px] lg:h-[380px] overflow-hidden">
              <img
                src={
                  image_e1c619d152e626640c8b37fba7b747047a73c08f
                }
                alt="Delivery rider on motorcycle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Tab Content - Careers */}
        {activeJoinTab === "careers" && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden">
            {/* Left: Yellow Background with Text - 3/5 width */}
            <div className="lg:col-span-3 bg-primary p-6 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('home.joinUsCareersTitle')}
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-8 leading-relaxed">
                {t('home.joinUsCareersDesc')}
              </p>
              <div className="flex items-center justify-between">
                <button
                  className="bg-secondary text-gray-900 px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-secondary font-semibold hover:border-gray-900 hover:bg-transparent transition-all duration-300"
                  onClick={() => onNavigate("careers")}
                >
                  {t('home.joinUsCareersButton')}
                </button>
              </div>
            </div>

            {/* Right: Image - 2/5 width */}
            <div className="lg:col-span-2 h-[300px] lg:h-[380px] overflow-hidden">
              <img
                src={
                  image_23e724dd31fbcc7f3d17ba7467647596f1eeface
                }
                alt="Office team meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}