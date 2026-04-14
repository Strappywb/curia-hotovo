"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { name: "Domů", path: "/" },
  { name: "Služby", path: "/sluzby" },
  { name: "Projekty", path: "/projekty" },
  { name: "Blog", path: "/blog" },
  { name: "O nás", path: "/o-nas" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const goToContact = () => {
    setMenuOpen(false);
    router.push("/kontakt");
  };

  return (
    <>
      {/* Full-width top bar — logo + name, no border, transparent */}
      <header className="absolute top-0 left-0 right-0 z-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center"
            >
              <span className="text-2xl font-heading tracking-tight text-black uppercase" style={{ fontWeight: 900 }}>
                curia
              </span>
            </Link>

            {/* Awards */}
            <div className="hidden lg:flex items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-black/50">
              <span>2× Awwwards</span>
              <span className="w-1 h-1 rounded-full bg-black/30" />
              <span>Clio Award</span>
            </div>

            {/* Spacer for the fixed floating buttons */}
            <div className="w-[180px] h-12" />
          </div>
        </div>
      </header>

      {/* Floating buttons — Kontakt + Hamburger, always fixed */}
      <div className="fixed top-5 md:top-6 right-6 md:right-10 lg:right-12 z-[55] flex items-center gap-3">
        <button
          onClick={goToContact}
          className="hidden md:block px-7 py-3 text-[14px] font-semibold rounded-full transition-all duration-300 text-black"
          style={{
            background: "rgba(255,255,255,0.65)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.7)",
            border: "1px solid rgba(255,255,255,0.5)",
          }}
        >
          Kontakt
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 overflow-hidden"
          aria-label="Menu"
          style={{
            backgroundColor: "#1e40af",
            backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.7) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.6) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.8) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.5) 0%, transparent 50%)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 4px 24px rgba(56,189,248,0.3), 0 4px 16px rgba(124,58,237,0.25), 0 0 40px rgba(59,130,246,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`block w-5 h-[2px] bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-in Panel from right */}
      <div
        className={`fixed top-0 right-0 h-full z-[60] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "min(480px, 88vw)" }}
      >
        <div className="h-full bg-white flex flex-col rounded-l-3xl shadow-2xl overflow-y-auto">
          {/* Close button */}
          <div className="flex justify-end p-6 md:p-8">
            <button
              onClick={() => setMenuOpen(false)}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Zavřít menu"
            >
              <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-8 md:px-12 pt-2">
            <div className="space-y-0">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between py-5 transition-all duration-300"
                    style={{
                      opacity: menuOpen ? 1 : 0,
                      transform: menuOpen ? "translateX(0)" : "translateX(40px)",
                      transition: `opacity 0.4s ease ${0.15 + i * 0.06}s, transform 0.4s ease ${0.15 + i * 0.06}s`,
                    }}
                  >
                    <span className="flex items-baseline gap-1">
                      <span className={`text-[2rem] md:text-[2.5rem] font-heading leading-none transition-colors ${
                        isActive ? "text-black font-bold" : "text-gray-400 group-hover:text-black font-medium"
                      }`}>
                        {link.name}
                      </span>
                      <sup className={`text-[0.65rem] font-heading font-medium tabular-nums ml-0.5 -translate-y-3 ${
                        isActive ? "text-black" : "text-gray-300"
                      }`}>
                        {String(i + 1).padStart(2, "0")}
                      </sup>
                    </span>
                    {isActive ? (
                      <span
                        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "#1e40af",
                          backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.7) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.6) 0%, transparent 50%)",
                        }}
                      >
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    ) : (
                      <svg className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Bottom CTA */}
          <div className="px-8 md:px-12 pb-6 pt-8">
            <p className="text-base font-heading font-medium text-black mb-4">Máte projekt?</p>
            <button
              onClick={goToContact}
              className="relative w-full px-8 py-4 text-white text-sm font-heading font-bold rounded-full transition-all duration-300 hover:scale-[1.02] overflow-hidden tracking-wide"
              style={{
                backgroundColor: "#1e40af",
                backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.7) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.6) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.8) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.5) 0%, transparent 50%)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 8px 32px rgba(56,189,248,0.3), 0 4px 20px rgba(124,58,237,0.3), 0 0 60px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              KONTAKTUJTE NÁS
            </button>
          </div>

          {/* Bottom secondary links */}
          <div className="px-8 md:px-12 pb-8 pt-4">
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {[
                { name: "Kariéra", path: "/kariera" },
                { name: "Projekty", path: "/projekty" },
                { name: "O nás", path: "/o-nas" },
                { name: "Blog", path: "/blog" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center gap-1.5 text-sm font-heading font-medium text-gray-500 hover:text-black transition-colors"
                >
                  {link.name}
                  <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
