"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import TalkCtaSection from "@/components/TalkCtaSection";
import pozadiImg from "@/assets/sluzby/30/onaspozadi.png";
import webdesignCard from "@/assets/sluzby/webdesign.webp";
import brandingCard from "@/assets/sluzby/branding.webp";
import marketingCard from "@/assets/sluzby/marketing2.webp";
import grafikaCard from "@/assets/sluzby/30/grafika2.webp";
import aplikaceCard from "@/assets/sluzby/aplikace2.webp";

const AboutPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const mobileServicesRef = useRef<HTMLDivElement>(null);

  const scrollServices = useCallback((dir: "left" | "right") => {
    const container = [servicesRef.current, mobileServicesRef.current].find(
      (el) => el && el.offsetWidth > 0
    );
    if (!container) return;
    const scrollAmount = container.offsetWidth * 0.5;
    const target = dir === "right"
      ? Math.min(container.scrollLeft + scrollAmount, container.scrollWidth - container.offsetWidth)
      : Math.max(container.scrollLeft - scrollAmount, 0);
    container.scrollTo({ left: target, behavior: "smooth" });
  }, []);

  const otherServices = [
    { name: "Webdesign", description: "Weby, které fungují jako neprůstřelný systém.", image: webdesignCard.src, href: "/sluzby/webdesign" },
    { name: "Branding & Identita", description: "Vizuální systémy, které lidé okamžitě rozpoznají.", image: brandingCard.src, href: "/sluzby/branding" },
    { name: "Strategický Marketing", description: "Strategie, které vaši značku skutečně posilují.", image: marketingCard.src, href: "/sluzby/marketing" },
    { name: "Grafika & Vizuál", description: "Návrhy s jasným smyslem, které podpoří autoritu.", image: grafikaCard.src, href: "/sluzby/grafika" },
    { name: "Aplikace na míru", description: "Precizní kód a intuitivní design v jednom produktu.", image: aplikaceCard.src, href: "/sluzby/aplikace" },
  ];

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Parallax hero */}
        <div ref={heroRef} className="relative">
          <div className="h-[70vh] md:h-screen flex items-start justify-center px-3 md:px-4 pt-16 md:pt-20 pb-2 md:pb-3">
            {/* Rounded box container — tall box, starts below nav */}
            <div
              className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 25%, #1e40af 50%, #3b82f6 75%, #0ea5e9 100%)",
                height: "calc(100% - 0.5rem)",
              }}
            >

              {/* Layer 1: Text — slightly above center, behind image */}
              <div className="absolute inset-0 flex items-center justify-center z-10 px-8 md:px-16 -translate-y-[15%]">
                <h1
                  className="text-[3.2rem] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-heading font-bold uppercase leading-[1.05] tracking-tight text-center max-w-5xl"
                  style={{
                    background: "radial-gradient(ellipse 50% 45% at 25% 30%, rgba(255,255,255,1) 0%, transparent 50%), radial-gradient(ellipse 55% 50% at 75% 25%, rgba(220,230,255,0.95) 0%, transparent 45%), radial-gradient(ellipse 60% 55% at 50% 70%, rgba(255,255,255,0.95) 0%, transparent 48%), radial-gradient(ellipse 45% 40% at 70% 60%, rgba(200,220,255,0.85) 0%, transparent 40%), radial-gradient(ellipse 35% 30% at 35% 45%, rgba(255,255,255,0.5) 0%, transparent 35%), radial-gradient(ellipse 100% 100% at 50% 50%, rgba(255,255,255,0.9) 0%, rgba(200,215,255,0.8) 100%)",
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "liquidGradient 8s ease infinite",
                  }}
                >
                  Nejsme tady pro ceny. Ale stejně je bereme. Vyhráváte&nbsp;vy.
                </h1>
              </div>

              {/* Layer 2: Image — lower half, in front of text */}
              <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
                <img
                  src={pozadiImg.src}
                  alt="Dekorativní pozadí"
                  className="w-full scale-[1.15] -translate-y-[3%] md:scale-105 md:translate-y-[5%]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* About text section — sticky cards */}
        <section className="mt-36 md:mt-48 px-5 md:px-8 lg:px-12 pb-8">
          {[
            { accent: "Curia je digitální studio", text: "zaměřené na weby a digitální produkty. Strategie, design i realizace u nás vznikají jako jeden celek." },
            { accent: "Naše práce", text: "se pravidelně objevuje mezi oceněnými projekty. Ne náhodou." },
            { accent: "Důraz na detail,", text: "systém a provedení je pro nás standard. Stejně jako pro klienty, se kterými pracujeme." },
            { accent: "Nevěnujeme se věcem napůl.", text: "Každý projekt má jasný směr a odpovídající úroveň zpracování." },
            { accent: "Pracujeme s lidmi,", text: "kteří to berou stejně. Proto to funguje." },
          ].map((card, i) => (
            <div
              key={i}
              className="sticky mb-8 last:mb-0"
              style={{ top: `${80 + i * 20}px` }}
            >
              <div
                className="w-full max-w-[1100px] mx-auto rounded-3xl overflow-hidden shadow-2xl flex items-center"
                style={{
                  backgroundColor: "#1e40af",
                  backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.7) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.6) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.8) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.5) 0%, transparent 50%)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 8px 32px rgba(56,189,248,0.3), 0 4px 20px rgba(124,58,237,0.3), 0 0 60px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
                  minHeight: "min(55vh, 420px)",
                }}
              >
                <div className="p-10 md:p-14 lg:p-20">
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-[1.3]">
                    <span className="text-[#bae6fd]">{card.accent}</span>{" "}
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Stats bento grid */}
        <section className="py-20 md:py-28 px-5 md:px-8 lg:px-12">
          <div className="max-w-[1100px] mx-auto grid grid-cols-4 md:grid-cols-6 auto-rows-[140px] md:auto-rows-[160px] lg:auto-rows-[180px] gap-4 md:gap-5">

            {/* Headline — wide left */}
            <div
              className="col-span-4 md:col-span-3 row-span-2 rounded-3xl p-8 md:p-10 lg:p-12 flex items-end"
              style={{
                backgroundColor: "#0f1a3a",
                backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.5) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.45) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.55) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.35) 0%, transparent 50%)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase leading-[1.05] text-white">
                Data mluví<br />za nás
              </h2>
            </div>

            {/* 763+ Projektů — tall right */}
            <div
              className="col-span-2 md:col-span-3 row-span-2 rounded-3xl p-8 md:p-10 flex flex-col justify-between"
              style={{
                backgroundColor: "#0f1a3a",
                backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.5) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.45) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.55) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.35) 0%, transparent 50%)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white">763+</div>
              <p className="text-sm md:text-base uppercase tracking-widest text-white/80 font-semibold">Projektů globálně</p>
            </div>

            {/* 10+ Lidí */}
            <div
              className="col-span-2 row-span-1 rounded-3xl p-8 md:p-10 flex flex-col justify-between"
              style={{
                backgroundColor: "#0f1a3a",
                backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.5) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.45) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.55) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.35) 0%, transparent 50%)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="text-4xl md:text-6xl font-heading font-bold text-white">10+</div>
              <p className="text-xs md:text-sm uppercase tracking-widest text-white/80 font-semibold">Lidí v týmu</p>
            </div>

            {/* 2 Roky */}
            <div
              className="col-span-2 row-span-1 rounded-3xl p-8 md:p-10 flex flex-col justify-between"
              style={{
                backgroundColor: "#0f1a3a",
                backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.5) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.45) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.55) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.35) 0%, transparent 50%)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="text-4xl md:text-6xl font-heading font-bold text-white">2</div>
              <p className="text-xs md:text-sm uppercase tracking-widest text-white/80 font-semibold">Roky spolu</p>
            </div>

            {/* 10 mld+ — wide */}
            <div
              className="col-span-4 md:col-span-4 row-span-1 rounded-3xl p-8 md:p-10 flex items-center justify-between"
              style={{
                backgroundColor: "#0f1a3a",
                backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.5) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.45) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.55) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.35) 0%, transparent 50%)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold italic text-white">10 mld+</div>
              <p className="text-xs md:text-sm uppercase tracking-widest text-white/80 font-semibold text-right">Kč nárůst tržeb<br />klientů</p>
            </div>

            {/* 3 Ocenění */}
            <div
              className="col-span-2 row-span-1 rounded-3xl p-8 md:p-10 flex flex-col justify-between"
              style={{
                backgroundColor: "#0f1a3a",
                backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.5) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.45) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.55) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.35) 0%, transparent 50%)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="text-4xl md:text-6xl font-heading font-bold text-white">3</div>
              <p className="text-xs md:text-sm uppercase tracking-widest text-white/80 font-semibold">Ocenění</p>
            </div>

            {/* 1 Rvačka — wide */}
            <div
              className="col-span-4 md:col-span-4 row-span-1 rounded-3xl p-8 md:p-10 flex items-center justify-between"
              style={{
                backgroundColor: "#0f1a3a",
                backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.5) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.45) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.55) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.35) 0%, transparent 50%)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="text-4xl md:text-6xl font-heading font-bold text-white">1</div>
              <p className="text-xs md:text-sm uppercase tracking-widest text-white/80 font-semibold text-right">Rvačka mezi grafikem<br />a programátorem</p>
            </div>

            {/* Tagline — small */}
            <div
              className="col-span-2 row-span-1 rounded-3xl p-8 md:p-10 flex items-center"
              style={{
                backgroundColor: "#0f1a3a",
                backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.5) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.45) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.55) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.35) 0%, transparent 50%)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p className="text-base md:text-xl lg:text-2xl font-heading italic text-white/50">Vždy je kam jít dál</p>
            </div>

          </div>
        </section>

        {/* Services carousel */}
        <section className="pb-32 md:pb-40">
          <div className="px-6 md:pl-[8vw] md:pr-8 lg:pl-[8vw] lg:pr-12 mb-10 md:mb-14">
            <div className="flex items-end justify-between">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black">
                Naše služby
              </motion.h2>
              <div className="flex items-center gap-3">
                <button onClick={() => scrollServices("left")} className="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all duration-200 cursor-pointer">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={() => scrollServices("right")} className="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all duration-200 cursor-pointer">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <div ref={servicesRef} className="flex gap-5 overflow-x-auto pl-[8vw] lg:pl-[8vw] pb-4" style={{ scrollbarWidth: "none" }}>
              <div className="flex-shrink-0 w-[84vw]">
                <div className="grid grid-cols-2 gap-4 grid-rows-2 h-[500px] lg:h-[540px]">
                  <a href={otherServices[0].href} className="group rounded-2xl overflow-hidden block row-span-2 relative">
                    <img src={otherServices[0].image} alt={otherServices[0].name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-heading font-bold text-white mb-1">{otherServices[0].name}</h3>
                      <p className="text-sm text-white/70 leading-relaxed line-clamp-2">{otherServices[0].description}</p>
                    </div>
                  </a>
                  <a href={otherServices[1].href} className="group rounded-2xl overflow-hidden block relative">
                    <img src={otherServices[1].image} alt={otherServices[1].name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-base font-heading font-bold text-white">{otherServices[1].name}</h3>
                      <p className="text-xs text-white/70 leading-relaxed line-clamp-2 mt-0.5">{otherServices[1].description}</p>
                    </div>
                  </a>
                  <a href={otherServices[2].href} className="group rounded-2xl overflow-hidden block relative">
                    <img src={otherServices[2].image} alt={otherServices[2].name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-base font-heading font-bold text-white">{otherServices[2].name}</h3>
                      <p className="text-xs text-white/70 leading-relaxed line-clamp-2 mt-0.5">{otherServices[2].description}</p>
                    </div>
                  </a>
                </div>
              </div>
              {[3, 4].map((idx) => (
                <a key={idx} href={otherServices[idx].href} className="flex-shrink-0 w-[24vw] group rounded-2xl overflow-hidden block relative h-[500px] lg:h-[540px]">
                  <img src={otherServices[idx].image} alt={otherServices[idx].name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-heading font-bold text-white mb-1">{otherServices[idx].name}</h3>
                    <p className="text-sm text-white/70 leading-relaxed line-clamp-2">{otherServices[idx].description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <div ref={mobileServicesRef} className="flex gap-3 overflow-x-auto pl-5 pr-5 pb-4" style={{ scrollbarWidth: "none" }}>
              <a href={otherServices[0].href} className="flex-shrink-0 w-[68vw] h-[320px] group rounded-2xl overflow-hidden block relative">
                <img src={otherServices[0].image} alt={otherServices[0].name} className="w-full h-full object-cover absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base font-heading font-bold text-white mb-0.5">{otherServices[0].name}</h3>
                  <p className="text-xs text-white/70 leading-relaxed line-clamp-2">{otherServices[0].description}</p>
                </div>
              </a>
              <div className="flex-shrink-0 w-[44vw] h-[320px] flex flex-col gap-2">
                {[1, 2].map((idx) => (
                  <a key={idx} href={otherServices[idx].href} className="flex-1 group rounded-2xl overflow-hidden block relative">
                    <img src={otherServices[idx].image} alt={otherServices[idx].name} className="w-full h-full object-cover absolute inset-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-sm font-heading font-bold text-white">{otherServices[idx].name}</h3>
                    </div>
                  </a>
                ))}
              </div>
              {[3, 4].map((idx) => (
                <a key={idx} href={otherServices[idx].href} className="flex-shrink-0 w-[44vw] h-[320px] group rounded-2xl overflow-hidden block relative">
                  <img src={otherServices[idx].image} alt={otherServices[idx].name} className="w-full h-full object-cover absolute inset-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-sm font-heading font-bold text-white mb-0.5">{otherServices[idx].name}</h3>
                    <p className="text-xs text-white/70 leading-relaxed line-clamp-2">{otherServices[idx].description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <TalkCtaSection />

        <FooterNew />
      </main>
    </>
  );
};

export default AboutPage;
