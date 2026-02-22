import { Menu, X, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher";
import { useTranslation } from "@/app/hooks/useTranslation";
import halaliLogo from "@/assets/17b1b5a6492da9d806399108417a42d3d13d854e.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenSearch: () => void;
}

export function Header({
  currentPage,
  onNavigate,
  onOpenSearch,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at the top of the page
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide header when scrolling down (and not at the very top)
      else if (
        currentScrollY > lastScrollY &&
        currentScrollY > 80
      ) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navigation = [
    { name: t("header.home"), href: "home" },
    { name: t("header.merchants"), href: "merchants" },
    { name: t("header.riders"), href: "riders" },
    { name: t("header.business"), href: "business" },
    { name: t("header.about"), href: "about" },
    { name: t("header.careers"), href: "careers" },
    { name: t("header.contact"), href: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white border-b border-gray-200 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center space-x-2"
            >
              <img
                src={halaliLogo}
                alt="Halali Logo"
                className="w-10 h-10 rounded-lg object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-4 xl:space-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.href)}
                className={`text-sm md:px-2 lg:px-3 py-2 rounded-md transition-colors ${
                  currentPage === item.href
                    ? "text-primary font-medium"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center md:space-x-2 lg:space-x-4">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 hover:scale-110 hover:shadow-md transition-all duration-200 group"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors duration-200" />
            </button>

            {/* Mobile Search Icon */}
            <button
              onClick={onOpenSearch}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 active:scale-95 transition-all duration-200 group"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors duration-200" />
            </button>

            <LanguageSwitcher />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onNavigate(item.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-md transition-colors ${
                    currentPage === item.href
                      ? "text-primary font-medium bg-green-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              {/* <LanguageSwitcher variant="mobile" /> */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}