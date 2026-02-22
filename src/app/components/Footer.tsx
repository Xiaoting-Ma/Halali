import image_90640b1eca3f984320c37dcc85d73e51335ab2c3 from "@/assets/90640b1eca3f984320c37dcc85d73e51335ab2c3.png";
import { useTranslation } from "@/app/hooks/useTranslation";
import halaliLogo from "@/assets/17b1b5a6492da9d806399108417a42d3d13d854e.png";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary border-t border-gray-200">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={
                  image_90640b1eca3f984320c37dcc85d73e51335ab2c3
                }
                alt="Halali Logo"
                className="w-10 h-10 md:w-16 md:h-16 rounded-lg object-contain drop-shadow-xl"
              />
            </div>
            <p className="text-gray-900 text-base md:text-lg font-bold mb-4">
              {t("footer.tagline")
                .split("Halal-Only")
                .map((part, index, array) =>
                  index < array.length - 1 ? (
                    <span key={index}>
                      {part}
                      <span className="text-secondary">
                        Halal-Only
                      </span>
                    </span>
                  ) : (
                    part
                  ),
                )}
            </p>
            <p className="text-gray-900 text-base md:text-lg leading-tight">
              {t("footer.slogan")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {t("footer.quickLinks")}
            </h3>
            <div className="grid grid-cols-2 gap-x-8">
              <ul className="space-y-1 text-base text-gray-700">
                <li>
                  <a
                    href="#home"
                    className="hover:text-secondary transition-colors"
                  >
                    {t("header.home")}
                  </a>
                </li>
                <li>
                  <a
                    href="#merchants"
                    className="hover:text-secondary transition-colors"
                  >
                    {t("header.merchants")}
                  </a>
                </li>
                <li>
                  <a
                    href="#riders"
                    className="hover:text-secondary transition-colors"
                  >
                    {t("header.riders")}
                  </a>
                </li>
                <li>
                  <a
                    href="#business"
                    className="hover:text-secondary transition-colors"
                  >
                    {t("header.business")}
                  </a>
                </li>
              </ul>
              <ul className="space-y-1 text-base text-gray-700">
                <li>
                  <a
                    href="#about"
                    className="hover:text-secondary transition-colors"
                  >
                    {t("header.about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="hover:text-secondary transition-colors"
                  >
                    {t("header.careers")}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-secondary transition-colors"
                  >
                    {t("header.contact")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-1 text-base text-gray-800">
              <li>
                {t("footer.business")}{" "}
                <span className="text-secondary hover:underline">
                  {t("footer.businessEmail")}
                </span>
              </li>
              <li>
                {t("footer.support")}{" "}
                <span className="text-secondary hover:underline">
                  {t("footer.supportEmail")}
                </span>
              </li>
              <li className="italic">{t("footer.location")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-2 md:mt-6 pt-2 md:pt-6 border-t border-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2">
            <p className="text-sm text-gray-700">
              {t("footer.copyright")}
            </p>
            <div className="flex space-x-6 text-sm text-gray-700">
              <a
                href="#"
                className="hover:text-primary transition-colors"
              >
                {t("footer.privacy")}
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
              >
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}