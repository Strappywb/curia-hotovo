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
          className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300"
          aria-label="Menu"
          style={{
            background: "linear-gradient(135deg, #0f2167 0%, #1e3a8a 40%, #2563eb 100%)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 4px 24px rgba(30,58,138,0.35), 0 0 40px rgba(37,99,235,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
            border: "1px solid rgba(59,130,246,0.3)",
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
        style={{ width: "min(480px, 85vw)" }}
      >
        <div className="h-full bg-white flex flex-col rounded-l-2xl shadow-2xl">
          {/* Close button */}
          <div className="flex justify-end p-6 md:p-8">
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Zavřít menu"
            >
              <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-8 md:px-12">
            <div className="space-y-2">
              {navLinks.map((link, i) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between py-4 border-b border-gray-100 transition-all duration-300"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateX(0)" : "translateX(40px)",
                    transition: `opacity 0.4s ease ${0.15 + i * 0.06}s, transform 0.4s ease ${0.15 + i * 0.06}s`,
                  }}
                >
                  <span className={`text-3xl md:text-4xl font-heading transition-colors ${
                    pathname === link.path ? "text-black font-bold" : "text-gray-400 group-hover:text-black"
                  }`}>
                    {link.name}
                  </span>
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </nav>

          {/* Bottom CTA */}
          <div className="px-8 md:px-12 pb-10">
            <p className="text-lg font-medium text-black mb-4">Máte projekt?</p>
            <button
              onClick={goToContact}
              className="w-full px-8 py-4 bg-black text-white text-base font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Kontaktujte nás
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
