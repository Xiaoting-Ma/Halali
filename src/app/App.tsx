import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { HomePage } from "@/app/components/HomePage";
import { MerchantsPage } from "@/app/components/MerchantsPage";
import { MerchantSuccessPage } from "@/app/components/MerchantSuccessPage";
import { RidersPage } from "@/app/components/RidersPage";
import { RiderSuccessPage } from "@/app/components/RiderSuccessPage";
import { BusinessPage } from "@/app/components/BusinessPage";
import { AboutPage } from "@/app/components/AboutPage";
import { CareersPage } from "@/app/components/CareersPage";
import { CareerSuccessPage } from "@/app/components/CareerSuccessPage";
import { ContactPage } from "@/app/components/ContactPage";
import { LanguageProvider } from "@/app/contexts/LanguageContext";
import { SearchModal } from "@/app/components/SearchModal";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      try {
        const hash =
          window.location.hash.replace("#", "") || "home";
        setCurrentPage(hash);
      } catch (err) {
        console.error("Hash change error:", err);
        setError(err as Error);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () =>
      window.removeEventListener(
        "hashchange",
        handleHashChange,
      );
  }, []);

  // Handle Cmd/Ctrl+F keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "f") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigate = (page: string, sectionId?: string) => {
    // 处理 "page#section" 格式
    let targetPage = page;
    let targetSection = sectionId;

    if (page.includes("#")) {
      const parts = page.split("#");
      targetPage = parts[0];
      targetSection = parts[1];
    }

    window.location.hash = targetPage;

    // 使用 setTimeout 确保页面已经渲染
    setTimeout(() => {
      if (targetSection) {
        // 如果有 sectionId，滚动到对应的 section
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          // 如果找不到元素，滚动到顶部
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        // 没有 sectionId，滚动到顶部
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100); // 给页面渲染留一点时间
  };

  const renderPage = () => {
    try {
      switch (currentPage) {
        case "home":
          return <HomePage onNavigate={navigate} />;
        case "merchants":
          return <MerchantsPage onNavigate={navigate} />;
        case "merchant-success":
          return <MerchantSuccessPage onNavigate={navigate} />;
        case "riders":
          return <RidersPage onNavigate={navigate} />;
        case "rider-success":
          return <RiderSuccessPage onNavigate={navigate} />;
        case "business":
          return <BusinessPage onNavigate={navigate} />;
        case "about":
          return <AboutPage />;
        case "careers":
          return <CareersPage onNavigate={navigate} />;
        case "career-success":
          return <CareerSuccessPage onNavigate={navigate} />;
        case "contact":
          return <ContactPage onNavigate={navigate} />;
        default:
          return <HomePage onNavigate={navigate} />;
      }
    } catch (err) {
      console.error("Render error:", err);
      setError(err as Error);
      return (
        <div className="flex items-center justify-center min-h-screen p-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl">
            <h2 className="text-xl font-bold text-red-800 mb-4">Error Loading Page</h2>
            <p className="text-red-700">{(err as Error).message}</p>
            <button 
              onClick={() => { setError(null); setCurrentPage("home"); window.location.hash = "home"; }}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Return to Home
            </button>
          </div>
        </div>
      );
    }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl">
          <h2 className="text-xl font-bold text-red-800 mb-4">Application Error</h2>
          <p className="text-red-700 mb-4">{error.message}</p>
          <button 
            onClick={() => { setError(null); window.location.reload(); }}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Reload Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <HelmetProvider>
        <div className="min-h-screen flex flex-col bg-white">
          <Header
            currentPage={currentPage}
            onNavigate={navigate}
            onOpenSearch={() => setIsSearchOpen(true)}
          />
          <main className="flex-1">{renderPage()}</main>
          <Footer />
          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onNavigate={navigate}
          />
        </div>
      </HelmetProvider>
    </LanguageProvider>
  );
}