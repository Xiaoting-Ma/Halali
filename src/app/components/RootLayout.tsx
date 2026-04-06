import { Outlet, useParams, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { SearchModal } from "@/app/components/SearchModal";
import { useLanguage, languages } from "@/app/contexts/LanguageContext";

export function RootLayout() {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const { setLanguage } = useLanguage();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync language from URL
  useEffect(() => {
    if (lang) {
      const validLang = languages.find((l) => l.code === lang);
      if (validLang) {
        setLanguage(lang);
      } else {
        // Invalid language, redirect to English
        const path = location.pathname.replace(`/${lang}`, "/en");
        navigate(path, { replace: true });
      }
    }
  }, [lang, setLanguage, location.pathname, navigate]);

  // Determine current page from pathname
  const currentPage = location.pathname.split("/").pop() || "home";
  const isPrivacyPolicy = currentPage === "privacy-policy";

  // Handle Cmd/Ctrl+F keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "f") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavigate = (page: string) => {
    navigate(`/${lang}/${page}`);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!isPrivacyPolicy && (
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
      )}
      <main className="flex-1">
        <Outlet />
      </main>
      {!isPrivacyPolicy && <Footer />}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
