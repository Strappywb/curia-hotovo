"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/FooterNew";
import TalkCtaSection from "@/components/TalkCtaSection";
import webdesignCard from "@/assets/sluzby/webdesign.webp";
import brandingCard from "@/assets/sluzby/branding.webp";
import marketingCard from "@/assets/sluzby/marketing2.webp";
import grafikaCard from "@/assets/sluzby/Grafika.webp";
import aplikaceCard from "@/assets/sluzby/aplikace2.webp";

import img1 from "@/assets/sluzby/30/grafika/1.webp";
import img2 from "@/assets/sluzby/30/grafika/2.webp";
import img3 from "@/assets/sluzby/30/grafika/3.webp";
import img4 from "@/assets/sluzby/30/grafika/4.webp";
import img5 from "@/assets/sluzby/30/grafika/5.webp";
import img6 from "@/assets/sluzby/30/grafika/6.webp";
import img7 from "@/assets/sluzby/30/grafika/7.webp";
import img8 from "@/assets/sluzby/30/grafika/8.webp";
import img9 from "@/assets/sluzby/30/grafika/9.webp";
import img10 from "@/assets/sluzby/30/grafika/10.webp";
import img11 from "@/assets/sluzby/30/grafika/11.webp";
import img12 from "@/assets/sluzby/30/grafika/12.webp";
import img13 from "@/assets/sluzby/30/grafika/13.webp";
import img14 from "@/assets/sluzby/30/grafika/14.webp";
import img15 from "@/assets/sluzby/30/grafika/15.webp";

const portfolioItems = [
  { img: img1.src, name: "VANT Studio" },
  { img: img2.src, name: "KK Kačmáček" },
  { img: img3.src, name: "Printeria" },
  { img: img4.src, name: "Sturm Design" },
  { img: img5.src, name: "HF Stavby" },
  { img: img6.src, name: "Mados Gastro" },
  { img: img7.src, name: "CURIA Studio" },
  { img: img8.src, name: "Nordic Brand" },
  { img: img9.src, name: "Craft Identity" },
  { img: img10.src, name: "Signal Typeface" },
  { img: img11.src, name: "Urban Poster" },
  { img: img12.src, name: "Forma Collective" },
  { img: img13.src, name: "Cometa" },
  { img: img14.src, name: "Studio Nox" },
  { img: img15.src, name: "Arc Design" },
];

const GrafikaSluzbaPage = () => {
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
    { name: "Aplikace na míru", description: "Precizní kód a intuitivní design v jednom produktu.", image: aplikaceCard.src, href: "/sluzby/aplikace" },
    { name: "Grafika & Vizuál", description: "Návrhy s jasným smyslem, které podpoří autoritu.", image: grafikaCard.src, href: "/sluzby/grafika" },
  ];

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-16 xl:px-20 pt-36 md:pt-44 lg:pt-56 pb-20 md:pb-28 lg:pb-36">
          <div className="max-w-[1400px] mx-auto">
            {/* Uppercase label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-xs md:text-sm tracking-[0.2em] uppercase text-gray-400 mb-6 md:mb-8"
            >
              Grafický design & vizuální komunikace
            </motion.p>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-black leading-[1.02] tracking-tight mb-12 md:mb-16"
            >
              Vizuál, který<br />
              <span className="text-[#0047CC]">funguje</span>
            </motion.h1>

            {/* Two-column description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 max-w-[900px]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-body text-base md:text-lg text-gray-500 leading-relaxed"
              >
                Navrhujeme loga, identity, prezentace, social a&nbsp;tiskové materiály. Každý výstup má jasný účel a&nbsp;podporuje značku.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-body text-base md:text-lg text-gray-500 leading-relaxed"
              >
                Hledáme řešení, které funguje napříč formáty a&nbsp;kanály. Vizuální systém, ne jednorázový návrh.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Portfolio masonry — Field of Study style */}
        <section className="px-5 md:px-8 lg:px-10">
          {/* Desktop masonry */}
          <div className="hidden md:block pb-16 md:pb-24">
            {/* Row 1: 1 tall left (48%) + 2×2 right (24%+24%) */}
            <div className="grid grid-cols-[48fr_24fr_24fr] gap-4 lg:gap-5 mb-4 lg:mb-5">
              <div className="row-span-2">
                <div className="rounded-md overflow-hidden h-full">
                  <img src={portfolioItems[0].img} alt={portfolioItems[0].name} className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <div className="rounded-md overflow-hidden aspect-[4/3]">
                  <img src={portfolioItems[1].img} alt={portfolioItems[1].name} className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <div className="rounded-md overflow-hidden aspect-[4/3]">
                  <img src={portfolioItems[2].img} alt={portfolioItems[2].name} className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <div className="rounded-md overflow-hidden aspect-[4/5]">
                  <img src={portfolioItems[3].img} alt={portfolioItems[3].name} className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <div className="rounded-md overflow-hidden aspect-[4/5]">
                  <img src={portfolioItems[4].img} alt={portfolioItems[4].name} className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Row 2: 2 small left (24% each) + 1 tall right (48%) */}
            <div className="grid grid-cols-[24fr_24fr_48fr] gap-4 lg:gap-5 mb-4 lg:mb-5">
              <div>
                <div className="rounded-md overflow-hidden aspect-[3/4]">
                  <img src={portfolioItems[5].img} alt={portfolioItems[5].name} className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <div className="rounded-md overflow-hidden aspect-[3/4]">
                  <img src={portfolioItems[6].img} alt={portfolioItems[6].name} className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <div className="rounded-md overflow-hidden aspect-[4/3]">
                  <img src={portfolioItems[7].img} alt={portfolioItems[7].name} className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Row 3: 1 wide left (48%) + 2 right (24%+24%) */}
            <div className="grid grid-cols-[48fr_24fr_24fr] gap-4 lg:gap-5 mb-4 lg:mb-5">
              <div>
                <div className="rounded-md overflow-hidden aspect-[16/10]">
                  <img src={portfolioItems[8].img} alt={portfolioItems[8].name} className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <div className="rounded-md overflow-hidden aspect-[4/3]">
                  <img src={portfolioItems[9].img} alt={portfolioItems[9].name} className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <div className="rounded-md overflow-hidden aspect-[4/3]">
                  <img src={portfolioItems[10].img} alt={portfolioItems[10].name} className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Row 4: 3 equal columns */}
            <div className="grid grid-cols-3 gap-4 lg:gap-5 mb-4 lg:mb-5">
              <div>
                <div className="rounded-md overflow-hidden aspect-[4/3]">
                  <img src={portfolioItems[11].img} alt={portfolioItems[11].name} className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <div className="rounded-md overflow-hidden aspect-[4/3]">
                  <img src={portfolioItems[12].img} alt={portfolioItems[12].name} className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <div className="rounded-md overflow-hidden aspect-[4/3]">
                  <img src={portfolioItems[13].img} alt={portfolioItems[13].name} className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Closing video — ultrawide */}
            <div className="rounded-xl overflow-hidden aspect-[21/9]">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/cometaportfolio.webm" type="video/webm" />
                <source src="/videos/cometaportfolio.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Mobile — simple stack */}
          <div className="md:hidden pb-6 space-y-6">
            {portfolioItems.map((item) => (
              <div key={item.name}>
                <div className="rounded-md overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full object-contain" />
                </div>
              </div>
            ))}

            {/* Mobile video */}
            <div className="rounded-xl overflow-hidden aspect-[21/9]">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/cometaportfolio.webm" type="video/webm" />
                <source src="/videos/cometaportfolio.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Other services — bento grid */}
        <section className="pb-32 md:pb-40 pt-8 md:pt-16">
          <div className="px-6 md:pl-[8vw] md:pr-8 lg:pl-[8vw] lg:pr-12 mb-10 md:mb-14">
            <div className="flex items-end justify-between">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black">
                Další služby
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

        {/* CTA */}
        <TalkCtaSection />
      </main>

      <Footer />
    </>
  );
};

export default GrafikaSluzbaPage;
