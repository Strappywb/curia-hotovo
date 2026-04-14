"use client";

import { motion } from "framer-motion";
import { Compass, Blocks, Pencil, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/FooterNew";
import TalkCtaSection from "@/components/TalkCtaSection";
import ClientsSection from "@/components/ClientsSection";
import webdesignCard from "@/assets/sluzby/webdesign.webp";
import webdesign2Img from "@/assets/sluzby/webdesign2.webp";
import webdesign4Img from "@/assets/sluzby/30/webdesign4.webp";
import brandingCard from "@/assets/sluzby/branding.webp";
import marketingCard from "@/assets/sluzby/marketing2.webp";
import grafikaCard from "@/assets/sluzby/30/grafika2.webp";
import aplikaceCard from "@/assets/sluzby/aplikace2.webp";
import { useState, useRef, useCallback } from "react";

const faqItems = [
  {
    question: "Jak navrhujeme weby kolem uživatelů",
    answer:
      "Nevycházíme z domněnek, ale z reálného chování. Na základě dat navrhujeme strukturu a UX, které je přirozené, rychlé a bez zbytečných překážek. Každý krok ověřujeme a ladíme.",
  },
  {
    question: "Jak zvyšujeme konverze",
    answer:
      "Design má jasný cíl — výkon. Propojujeme UX s konverzní strategií a rozhodnutí opíráme o data, testování a reálné výsledky.",
  },
  {
    question: "Jak držíme web v souladu se značkou",
    answer:
      "Značka není jen vizuál, je to systém. Každý detail — od typografie po interakce — navrhujeme tak, aby byl konzistentní a dlouhodobě posiloval brand.",
  },
  {
    question: "Řešíme i vývoj, tracking a A/B testování?",
    answer:
      "Ano — od návrhu až po nasazení. Frontend, backend, analytika, tracking i testování. Vše navržené tak, aby šlo měřit, vyhodnocovat a dál zlepšovat.",
  },
  {
    question: "Jak dlouho trvá návrh a vývoj webu?",
    answer:
      "Záleží na rozsahu. Menší projekty dodáváme v řádu týdnů, komplexnější ve měsících. Pracujeme ve sprintech, s průběžným výstupem a feedbackem.",
  },
  {
    question: "Co se děje po spuštění webu?",
    answer:
      "Spuštěním to začíná. Sledujeme data, analyzujeme chování a navrhujeme další kroky. Web průběžně optimalizujeme, aby rostl spolu s vaším byznysem.",
  },
];

const WebdesignSluzbaPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const mobileServicesRef = useRef<HTMLDivElement>(null);

  const scrollServices = useCallback((dir: "left" | "right") => {
    // Pick whichever container is currently visible
    const container = [servicesRef.current, mobileServicesRef.current].find(
      (el) => el && el.offsetWidth > 0
    );
    if (!container) return;
    const scrollAmount = container.offsetWidth * 0.5;
    const target = dir === "right"
      ? Math.min(container.scrollLeft + scrollAmount, container.scrollWidth - container.offsetWidth)
      : Math.max(container.scrollLeft - scrollAmount, 0);
    const start = container.scrollLeft;
    const diff = target - start;
    const duration = 600;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      container.scrollLeft = start + diff * easeInOutCubic(progress);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  const otherServices = [
    {
      name: "Branding & Identita",
      description: "Vizuální systémy, které lidé okamžitě rozpoznají.",
      image: brandingCard.src,
      href: "/sluzby/branding",
    },
    {
      name: "Strategický Marketing",
      description: "Strategie, které vaši značku skutečně posilují.",
      image: marketingCard.src,
      href: "/sluzby/marketing",
    },
    {
      name: "Grafika & Vizuál",
      description: "Návrhy s jasným smyslem, které podpoří autoritu.",
      image: grafikaCard.src,
      href: "/sluzby/grafika",
    },
    {
      name: "Aplikace na míru",
      description: "Precizní kód a intuitivní design v jednom produktu.",
      image: aplikaceCard.src,
      href: "/sluzby/aplikace",
    },
    {
      name: "Webdesign",
      description: "Weby, které fungují jako neprůstřelný systém.",
      image: webdesignCard.src,
      href: "/sluzby/webdesign",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Hero — Humaan style */}
        <section className="pt-40 md:pt-52 pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-heading font-bold text-black leading-[1.02] max-w-5xl"
            >
              Weby pro značky, které jdou dopředu
            </motion.h1>
          </div>
        </section>

        {/* Full-width image */}
        <section className="px-4 md:px-8 lg:px-12 pb-8 md:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl md:rounded-3xl overflow-hidden"
          >
            <img
              src={webdesignCard.src}
              alt="Webdesign"
              className="w-full h-auto object-cover aspect-[16/9] md:aspect-[2.2/1]"
            />
          </motion.div>
        </section>

        {/* Client logos */}
        <ClientsSection hideHeader />

        {/* Heading + subtitle — Humaan style */}
        <section className="px-6 md:px-12 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-[1100px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-black leading-[1.05] max-w-4xl"
            >
              Digitální produkty
            </motion.h2>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[1100px] mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl"
            >
              Roky navrhujeme, tvoříme a uvádíme do provozu weby a digitální projekty. S důrazem na detail a provedení.
            </motion.p>
          </div>
        </section>

        {/* 4 columns — Humaan style features */}
        <section className="px-6 md:px-12 lg:px-16 pb-32 md:pb-40">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
              {[
                {
                  icon: <Compass size={28} strokeWidth={1.3} />,
                  title: "Od začátku do konce",
                  desc: "Kompletní produkt vzniká v rámci jednoho týmu, od prvního směru po finální realizaci. Každá část na sebe navazuje a výsledné řešení je navržené jako jeden celek.",
                },
                {
                  icon: <Blocks size={28} strokeWidth={1.3} />,
                  title: "Design a vývoj",
                  desc: "V týmu propojujeme design i vývoj, od návrhu rozhraní po technickou implementaci. Vše vzniká pod jednou střechou, bez oddělení mezi návrhem a realizací.",
                },
                {
                  icon: <Pencil size={28} strokeWidth={1.3} />,
                  title: "Technologie",
                  desc: "Technologie volíme podle kontextu projektu a jeho nároků. Každé řešení odpovídá tomu, co má web plnit, bez fixního stacku.",
                },
                {
                  icon: <TrendingUp size={28} strokeWidth={1.3} />,
                  title: "Napojení",
                  desc: "Web stavíme jako součást širšího digitálního prostředí. Propojujeme ho s dalšími systémy, daty a procesy napříč projektem.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="text-gray-900 mb-6">{item.icon}</div>
                  <h3 className="text-[17px] font-bold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Full-width showcase image */}
        <section className="px-4 md:px-8 lg:px-12 pb-32 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl md:rounded-3xl overflow-hidden"
          >
            <img
              src={webdesign2Img.src}
              alt="Webdesign showcase"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </section>

        {/* Statement + description — Orizon style */}
        <section className="px-6 md:px-12 lg:px-16 pb-32 md:pb-40">
          <div className="max-w-[1100px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.05] mb-16 text-center"
            >
              Značka, UX,
              <br />
              <span
                className="inline-block font-heading font-black"
                style={{
                  background: "radial-gradient(ellipse 60% 50% at 20% 30%, #00d2ff 0%, transparent 45%), radial-gradient(ellipse 55% 65% at 78% 20%, #7c3aed 0%, transparent 40%), radial-gradient(ellipse 70% 55% at 50% 75%, #2563eb 0%, transparent 42%), radial-gradient(ellipse 40% 40% at 75% 65%, #a855f7 0%, transparent 35%), radial-gradient(ellipse 30% 25% at 40% 40%, rgba(255,255,255,0.25) 0%, transparent 30%), radial-gradient(ellipse 100% 100% at 50% 50%, #1e3a8a 0%, #0c1535 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "liquidGradient 8s ease infinite",
                }}
              >
                zkušenost
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="ml-auto max-w-xl md:max-w-2xl"
            >
              <div className="border-l-[3px] border-blue-600 pl-8 md:pl-10">
                <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
                  Weby stavíme kolem reálného používání. Propojujeme konverzní logiku s vizuálem, který značku posouvá přirozeně dál.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 text-center"
            >
              <a
                href="/kontakt"
                className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-[15px] transition-all duration-300 hover:scale-[1.03] overflow-hidden"
                style={{
                  backgroundColor: "#1e40af",
                  backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.7) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.6) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.8) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.5) 0%, transparent 50%)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 8px 32px rgba(56,189,248,0.3), 0 4px 20px rgba(124,58,237,0.3), 0 0 60px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                PROMLUVME SI
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Full-width showcase video */}
        <section className="px-4 md:px-8 lg:px-12 pb-32 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl md:rounded-3xl overflow-hidden"
          >
            <video
              src="/videos/webdesign3.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </section>

        {/* Big headline — Orizon style */}
        <section className="px-6 md:px-12 lg:px-16 pb-32 md:pb-40">
          <div className="max-w-[1400px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-heading font-bold leading-[1.08]"
            >
              <span
                className="inline-block font-heading font-black"
                style={{
                  background: "radial-gradient(ellipse 60% 50% at 20% 30%, #00d2ff 0%, transparent 45%), radial-gradient(ellipse 55% 65% at 78% 20%, #7c3aed 0%, transparent 40%), radial-gradient(ellipse 70% 55% at 50% 75%, #2563eb 0%, transparent 42%), radial-gradient(ellipse 40% 40% at 75% 65%, #a855f7 0%, transparent 35%), radial-gradient(ellipse 30% 25% at 40% 40%, rgba(255,255,255,0.25) 0%, transparent 30%), radial-gradient(ellipse 100% 100% at 50% 50%, #1e3a8a 0%, #0c1535 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "liquidGradient 8s ease infinite",
                }}
              >
                Weby a digitální produkty
              </span>
              {" . "}
              <br />
              Od návrhu po vývoj a další iteraci
            </motion.h2>
          </div>
        </section>

        {/* Full-width showcase image 4 */}
        <section className="px-4 md:px-8 lg:px-12 pb-32 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl md:rounded-3xl overflow-hidden"
          >
            <img
              src={webdesign4Img.src}
              alt="Webdesign showcase"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </section>

        {/* FAQ — matching homepage style */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            {/* Header row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 mb-16 md:mb-20">
              <div className="md:col-span-5">
                <p className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-400 mb-4">Časté dotazy</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black leading-tight">
                  Máte otázky?
                </h2>
              </div>
              <div className="md:col-span-7 flex items-end">
                <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-lg">
                  Rádi vám pomůžeme. Pokud nenajdete odpověď, neváhejte nás{" "}
                  <a href="/kontakt" className="text-blue-800 font-semibold hover:underline">kontaktovat</a>.
                </p>
              </div>
            </div>

            {/* FAQ items */}
            <div className="divide-y divide-gray-200">
              {faqItems.map((item, i) => (
                <div key={i} className="group">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between py-7 md:py-8 text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-6 md:gap-8 pr-8">
                      <span className="text-sm font-medium text-gray-300 mt-1.5 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-black group-hover:text-gray-600 transition-colors">
                        {item.question}
                      </h3>
                    </div>
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        openFaq === i ? "bg-blue-900 border-blue-900 rotate-45" : "bg-white border-blue-200"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-colors duration-300 ${openFaq === i ? "text-white" : "text-blue-800"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className="grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      gridTemplateRows: openFaq === i ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          opacity: openFaq === i ? 1 : 0,
                          transitionDelay: openFaq === i ? "150ms" : "0ms",
                        }}
                      >
                        <div className="pl-12 md:pl-16 pr-16 md:pr-24 pb-8">
                          <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other services — bento grid */}
        <section className="pb-32 md:pb-40">
          {/* Heading — shifted right on desktop */}
          <div className="px-6 md:pl-[8vw] md:pr-8 lg:pl-[8vw] lg:pr-12 mb-10 md:mb-14">
            <div className="flex items-end justify-between">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black"
              >
                Další služby
              </motion.h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollServices("left")}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all duration-200 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollServices("right")}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all duration-200 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop: horizontal scroll — shifted right, not centered */}
          <div className="hidden md:block">
            <div
              ref={servicesRef}
              className="flex gap-5 overflow-x-auto pl-[8vw] lg:pl-[8vw] pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Bento group: 1 tall + 2 stacked */}
              <div className="flex-shrink-0 w-[84vw]">
                <div className="grid grid-cols-2 gap-4 grid-rows-2 h-[500px] lg:h-[540px]">
                  {/* Left — tall */}
                  <a
                    href={otherServices[0].href}
                    className="group rounded-2xl overflow-hidden block row-span-2 relative"
                  >
                    <img
                      src={otherServices[0].image}
                      alt={otherServices[0].name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-heading font-bold text-white mb-1">
                        {otherServices[0].name}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
                        {otherServices[0].description}
                      </p>
                    </div>
                  </a>

                  {/* Right top */}
                  <a
                    href={otherServices[1].href}
                    className="group rounded-2xl overflow-hidden block relative"
                  >
                    <img
                      src={otherServices[1].image}
                      alt={otherServices[1].name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-base font-heading font-bold text-white">
                        {otherServices[1].name}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed line-clamp-2 mt-0.5">
                        {otherServices[1].description}
                      </p>
                    </div>
                  </a>

                  {/* Right bottom */}
                  <a
                    href={otherServices[2].href}
                    className="group rounded-2xl overflow-hidden block relative"
                  >
                    <img
                      src={otherServices[2].image}
                      alt={otherServices[2].name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-base font-heading font-bold text-white">
                        {otherServices[2].name}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed line-clamp-2 mt-0.5">
                        {otherServices[2].description}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Card 4 */}
              <a
                href={otherServices[3].href}
                className="flex-shrink-0 w-[24vw] group rounded-2xl overflow-hidden block relative h-[500px] lg:h-[540px]"
              >
                <img
                  src={otherServices[3].image}
                  alt={otherServices[3].name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-heading font-bold text-white mb-1">
                    {otherServices[3].name}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
                    {otherServices[3].description}
                  </p>
                </div>
              </a>

              {/* Card 5 */}
              <a
                href={otherServices[4].href}
                className="flex-shrink-0 w-[24vw] group rounded-2xl overflow-hidden block relative h-[500px] lg:h-[540px]"
              >
                <img
                  src={otherServices[4].image}
                  alt={otherServices[4].name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-heading font-bold text-white mb-1">
                    {otherServices[4].name}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
                    {otherServices[4].description}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Mobile: horizontal scroll — bento (1 tall + 2 stacked) + 2 cards */}
          <div className="md:hidden">
            <div
              ref={mobileServicesRef}
              className="flex gap-3 overflow-x-auto pl-5 pr-5 pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Card 0 — tall */}
              <a
                href={otherServices[0].href}
                className="flex-shrink-0 w-[68vw] h-[320px] group rounded-2xl overflow-hidden block relative"
              >
                <img
                  src={otherServices[0].image}
                  alt={otherServices[0].name}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base font-heading font-bold text-white mb-0.5">
                    {otherServices[0].name}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed line-clamp-2">
                    {otherServices[0].description}
                  </p>
                </div>
              </a>

              {/* Cards 1+2 — stacked, narrower landscape cards */}
              <div className="flex-shrink-0 w-[44vw] h-[320px] flex flex-col gap-2">
                <a
                  href={otherServices[1].href}
                  className="flex-1 group rounded-2xl overflow-hidden block relative"
                >
                  <img
                    src={otherServices[1].image}
                    alt={otherServices[1].name}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-sm font-heading font-bold text-white">
                      {otherServices[1].name}
                    </h3>
                  </div>
                </a>
                <a
                  href={otherServices[2].href}
                  className="flex-1 group rounded-2xl overflow-hidden block relative"
                >
                  <img
                    src={otherServices[2].image}
                    alt={otherServices[2].name}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-sm font-heading font-bold text-white">
                      {otherServices[2].name}
                    </h3>
                  </div>
                </a>
              </div>

              {/* Card 3 */}
              <a
                href={otherServices[3].href}
                className="flex-shrink-0 w-[44vw] h-[320px] group rounded-2xl overflow-hidden block relative"
              >
                <img
                  src={otherServices[3].image}
                  alt={otherServices[3].name}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-sm font-heading font-bold text-white mb-0.5">
                    {otherServices[3].name}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed line-clamp-2">
                    {otherServices[3].description}
                  </p>
                </div>
              </a>

              {/* Card 4 */}
              <a
                href={otherServices[4].href}
                className="flex-shrink-0 w-[44vw] h-[320px] group rounded-2xl overflow-hidden block relative"
              >
                <img
                  src={otherServices[4].image}
                  alt={otherServices[4].name}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-sm font-heading font-bold text-white mb-0.5">
                    {otherServices[4].name}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed line-clamp-2">
                    {otherServices[4].description}
                  </p>
                </div>
              </a>
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

export default WebdesignSluzbaPage;
