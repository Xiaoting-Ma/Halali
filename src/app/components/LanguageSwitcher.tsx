import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import {
  useLanguage,
  languages,
} from "@/app/contexts/LanguageContext";

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile";
}

export function LanguageSwitcher({
  variant = "desktop",
}: LanguageSwitcherProps) {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener(
        "mousedown",
        handleClickOutside,
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, [isOpen]);

  const handleLanguageSelect = (code: string) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (variant === "mobile") {
    return (
      <div className="px-4 py-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-gray-700 w-full"
        >
          <Globe className="w-4 h-4" />
          <span>{currentLanguage.nativeName}</span>
        </button>
        {isOpen && (
          <div className="mt-2 ml-6 space-y-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`block w-full text-left px-4 py-2 text-sm rounded-md transition-colors ${
                  currentLanguage.code === lang.code
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{lang.nativeName}</span>
                  {currentLanguage.code === lang.code && (
                    <Check className="w-4 h-4 text-primary" />
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        className="hidden md:flex items-center space-x-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="w-4 h-4" />
        <span>{currentLanguage.code.toUpperCase()}</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
            Select Language
          </div>
          <div className="max-h-96 overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
                  currentLanguage.code === lang.code
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-medium">
                    {lang.nativeName}
                  </span>
                  <span className="text-xs text-gray-500">
                    {lang.name}
                  </span>
                </div>
                {currentLanguage.code === lang.code && (
                  <Check className="w-4 h-4 text-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}