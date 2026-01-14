import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Malé zpoždění pro lepší UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-black border border-white/10 p-6 md:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Text */}
          <div className="flex-1">
            <h3 className="font-heading text-white text-lg md:text-xl mb-2">
              COOKIES.
            </h3>
            <p className="font-body text-sm md:text-base text-white/70 leading-relaxed">
              Používáme cookies pro analýzu návštěvnosti a zlepšení vašeho zážitku. 
              Pokračováním souhlasíte s jejich používáním.{" "}
              <a 
                href="https://policies.google.com/privacy?hl=cs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white underline hover:text-[#CCFF00] transition-colors"
              >
                Více informací
              </a>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={declineCookies}
              variant="outline"
              className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white font-heading text-sm px-6 py-5 h-auto rounded-none"
            >
              ODMÍTNOUT
            </Button>
            <Button
              onClick={acceptCookies}
              className="bg-[#CCFF00] text-black hover:bg-[#b8e600] font-heading text-sm px-6 py-5 h-auto rounded-none"
            >
              PŘIJMOUT
            </Button>
          </div>

          {/* Close button */}
          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 md:static text-white/50 hover:text-white transition-colors"
            aria-label="Zavřít"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
