"use client";

import { useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import TalkCtaSection from "@/components/TalkCtaSection";
import pozadiImg from "@/assets/sluzby/30/grafika/pozadi.webp";
import webdesignCard from "@/assets/sluzby/webdesign.webp";
import brandingCard from "@/assets/sluzby/branding.webp";
import marketingCard from "@/assets/sluzby/marketing2.webp";
import grafikaCard from "@/assets/sluzby/Grafika.webp";
import aplikaceCard from "@/assets/sluzby/aplikace2.webp";

const AboutPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const mobileServicesRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // Gentle upward drift — text moves ~15% of viewport up over the scroll
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);

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
      <main className="overflow-x-hidden bg-white">
        {/* Parallax hero */}
        <div ref={heroRef} className="relative h-[110vh]">
          <div className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-6 pt-24 pb-6">
            {/* Rounded box container */}
            <div className="relative w-full h-full min-h-[70vh] md:min-h-[80vh] rounded-2xl md:rounded-3xl overflow-hidden bg-[#e8f4f8]">

              {/* Layer 1: Text — centered, drifts up gently */}
              <motion.div
                style={{ y: textY }}
                className="absolute inset-0 flex items-center justify-center z-10 px-8 md:px-16"
              >
                <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-heading font-bold text-[#8a8a8a] uppercase leading-[1.05] tracking-tight text-center max-w-5xl">
                  Nejsme tady pro ceny. Ale stejně je bereme. Vyhráváte&nbsp;vy.
                </h1>
              </motion.div>

              {/* Layer 2: Clouds — lower half, in front of text */}
              <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
                <img
                  src={pozadiImg.src}
                  alt="Dekorativní pozadí s oblaky"
                  className="w-full scale-[1.5] -translate-y-[5%] md:scale-110 md:translate-y-[15%]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* About text section */}
        <section className="pt-8 md:pt-12 pb-24 md:pb-32 lg:pb-40 px-6 md:px-12 lg:px-16 bg-[#e8f4f8]">
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-24 py-16 md:py-24">

            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-[#0a0a2e] leading-[1.3]">
              <span className="text-[#0047CC]">Curia je digitální studio</span> zaměřené na weby a digitální produkty. Strategie, design i realizace u nás vznikají jako jeden celek.
            </p>

            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-[#0a0a2e] leading-[1.3]">
              <span className="text-[#0047CC]">Naše práce</span> se pravidelně objevuje mezi oceněnými projekty. Ne náhodou.
            </p>

            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-[#0a0a2e] leading-[1.3]">
              <span className="text-[#0047CC]">Důraz na detail,</span> systém a provedení je pro nás standard. Stejně jako pro klienty, se kterými pracujeme.
            </p>

            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-[#0a0a2e] leading-[1.3]">
              <span className="text-[#0047CC]">Nevěnujeme se věcem napůl.</span> Každý projekt má jasný směr a odpovídající úroveň zpracování.
            </p>

            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-[#0a0a2e] leading-[1.3]">
              <span className="text-[#0047CC]">Pracujeme s lidmi,</span> kteří to berou stejně. Proto to funguje.
            </p>

          </div>
        </section>

        {/* Stats grid — dark */}
        <section className="bg-white text-white">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[2px]">
            {/* Headline cell */}
            <div className="col-span-2 md:col-span-1 md:row-span-2 bg-black p-10 md:p-14 flex items-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase leading-[1.05]">
                Data mluví za nás
              </h2>
            </div>

            {/* Stat 1 */}
            <div className="bg-black p-10 md:p-14">
              <div className="text-5xl md:text-7xl font-heading font-bold mb-3">763+</div>
              <p className="text-sm md:text-base uppercase tracking-widest text-white font-semibold">Projektů<br />globálně</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-black p-10 md:p-14">
              <div className="text-5xl md:text-7xl font-heading font-bold mb-3">10+</div>
              <p className="text-sm md:text-base uppercase tracking-widest text-white font-semibold">Lidí<br />v týmu</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-black p-10 md:p-14">
              <div className="text-5xl md:text-7xl font-heading font-bold mb-3">2</div>
              <p className="text-sm md:text-base uppercase tracking-widest text-white font-semibold">Roky<br />spolu</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-black p-10 md:p-14">
              <div className="text-5xl md:text-7xl font-heading font-bold italic mb-3">10 mld+</div>
              <p className="text-sm md:text-base uppercase tracking-widest text-white font-semibold">Kč nárůst tržeb<br />klientů</p>
            </div>

            {/* Stat 5 */}
            <div className="bg-black p-10 md:p-14">
              <div className="text-5xl md:text-7xl font-heading font-bold mb-3">3</div>
              <p className="text-sm md:text-base uppercase tracking-widest text-white font-semibold">Ocenění</p>
            </div>

            {/* Stat 6 */}
            <div className="bg-black p-10 md:p-14">
              <div className="text-5xl md:text-7xl font-heading font-bold mb-3">1</div>
              <p className="text-sm md:text-base uppercase tracking-widest text-white font-semibold">Rvačka mezi grafikem<br />a programátorem</p>
            </div>

            {/* Tagline cell */}
            <div className="bg-black p-10 md:p-14 flex items-center">
              <p className="text-base md:text-xl lg:text-2xl text-white/40">Vždy je kam jít dál</p>
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
