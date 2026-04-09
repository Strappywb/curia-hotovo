"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/FooterNew";
import TalkCtaSection from "@/components/TalkCtaSection";
import ClientsSection from "@/components/ClientsSection";
import webdesignCard from "@/assets/sluzby/webdesign.webp";
import brandingCard from "@/assets/sluzby/branding.webp";
import marketingCard from "@/assets/sluzby/marketing2.webp";
import grafikaCard from "@/assets/sluzby/Grafika.webp";
import aplikaceCard from "@/assets/sluzby/aplikace2.webp";

import heroImg from "@/assets/sluzby/30/50.webp";
import hero2Img from "@/assets/sluzby/30/51.webp";
import hero3Img from "@/assets/sluzby/30/52.webp";
import featureImg1 from "@/assets/sluzby/30/56.webp";
import featureImg2 from "@/assets/sluzby/30/57.webp";
import featureImg3 from "@/assets/sluzby/30/58.webp";
import testimonialImg1 from "@/assets/sluzby/30/50.webp";
import testimonialImg2 from "@/assets/sluzby/30/54.webp";
import testimonialImg3 from "@/assets/sluzby/30/55.webp";

const testimonials = [
  {
    img: testimonialImg1.src,
    quote: "\u201ESpolupráce s CURIA nám během 6 měsíců zdvojnásobila kvalifikované leady. Konečně vidíme návratnost každé investice.\u201C",
    name: "VANT",
    company: "",
    bg: "#6C3AED",
  },
  {
    img: testimonialImg2.src,
    quote: "\u201EKonečně tým, který neřeší lajky ale byznys. Každá kampaň má jasný cíl a měřitelné výsledky.\u201C",
    name: "KK Kačmáček",
    company: "",
    bg: "#2563EB",
  },
  {
    img: testimonialImg3.src,
    quote: "\u201ENeděláme marketing. Stavíme systémy růstu. Každá koruna má svůj cíl, každý kanál své místo.\u201C",
    name: "CURIA",
    company: "",
    bg: "#0EA5E9",
  },
];

const MarketingSluzbaPage = () => {
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
    { name: "Grafika & Vizuál", description: "Návrhy s jasným smyslem, které podpoří autoritu.", image: grafikaCard.src, href: "/sluzby/grafika" },
    { name: "Aplikace na míru", description: "Precizní kód a intuitivní design v jednom produktu.", image: aplikaceCard.src, href: "/sluzby/aplikace" },
    { name: "Strategický Marketing", description: "Strategie, které vaši značku skutečně posilují.", image: marketingCard.src, href: "/sluzby/marketing" },
  ];

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen flex flex-col">
        {/* Hero + Grid — full viewport */}
        <div className="flex-1 flex flex-col px-5 md:px-8 lg:px-10 pt-28 md:pt-32 pb-5 md:pb-8">
          {/* Hero row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8 mb-1">
            <h1 className="text-[13vw] md:text-[8.5vw] lg:text-[7.5vw] font-heading font-black text-black leading-[0.9] tracking-tight">
              STRATEGIC MARKETING
            </h1>
            <div className="max-w-xs shrink-0 text-right md:pt-1">
              <p className="text-xs font-heading tracking-wider text-black mb-1">
                DEFINUJEME <span className="text-[#0047CC] font-bold">MARKETING</span> JAKO:
              </p>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                Ne reklamu. Růstový systém. Budujeme strategie, které generují výsledky, ne jen dosah.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 mb-5 md:mb-6" />

          {/* Bento Grid — fills remaining space */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-[65fr_35fr] gap-4 md:gap-5 min-h-0" style={{ minHeight: "calc(80vh - 160px)" }}>
            {/* Large left */}
            <div className="rounded-xl overflow-hidden relative min-h-[300px]">
              <img
                src={heroImg.src}
                alt="Marketing strategie"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Right column — 2 stacked */}
            <div className="grid grid-rows-2 gap-4 md:gap-5 min-h-[300px] md:min-h-0">
              <div className="rounded-xl overflow-hidden relative">
                <img
                  src={hero3Img.src}
                  alt="CURIA Marketing"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden relative">
                <img
                  src={hero2Img.src}
                  alt="Kampaně"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Split Section — video left, text right */}
        <section className="relative min-h-[80vh] md:min-h-screen flex flex-col md:flex-row">
          {/* Left — video */}
          <div className="flex w-full md:w-[40%] items-center justify-center relative px-8 py-16 md:px-12 lg:px-20 md:py-0">
            <div className="relative w-[280px] sm:w-[320px] lg:w-[380px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <video
                src="/videos/webdesign3.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-px bg-gray-200 self-stretch" />

          {/* Right — text content */}
          <div className="flex-1 flex items-center px-8 md:px-16 lg:px-24 py-12 md:py-0">
            <div className="max-w-lg">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-black leading-[1.15] mb-8">
                Agentura pro značky, které chtějí růst systémově
              </h2>
              <p className="font-body text-base md:text-lg text-gray-500 leading-relaxed mb-10">
                Neřešíme jednotlivé kampaně. Stavíme marketingové systémy, které fungují dlouhodobě. Propojujeme data, obsah a kanály do jednoho celku — aby každá investice měla jasnou návratnost.
              </p>
              <a
                href="/kontakt"
                className="inline-flex items-center px-8 py-4 rounded-full text-white font-heading font-bold text-sm md:text-base transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, #0c1e4a 0%, #1e3a8a 40%, #2563eb 100%)",
                  boxShadow: "0 8px 32px rgba(30,58,138,0.35)",
                }}
              >
                POJĎME RŮST SPOLEČNĚ
              </a>
            </div>
          </div>
        </section>

        {/* What's possible — Cuberto style */}
        <section className="px-5 md:px-8 lg:px-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-[1000px] mx-auto">
            {/* Big headline — left aligned */}
            <h2 className="font-heading text-[11vw] md:text-[6.5vw] lg:text-[5.5vw] font-bold text-black leading-[1.05] tracking-tight mb-0">
              Co je možné<br />a jak to děláme
            </h2>

            {/* Divider */}
            <div className="h-px bg-gray-200 my-12 md:my-16" />

            {/* Two column: label left, text right */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-20">
              <div className="shrink-0 md:w-[180px]">
                <p className="font-heading text-[11px] tracking-[0.15em] text-black uppercase leading-relaxed">
                  CO JE MOŽNÉ<br />A JAK
                </p>
              </div>
              <div className="flex-1">
                <p className="font-body text-lg md:text-xl lg:text-[1.35rem] text-black leading-[1.7] mb-8">
                  Marketing není o tom být všude. Je o tom být na správném místě, ve správný čas, s jasným sdělením. Propojujeme strategii s exekucí — od prvního kontaktu po konverzi.
                </p>
                <p className="font-body text-lg md:text-xl lg:text-[1.35rem] text-black leading-[1.7]">
                  Nastavujeme kampaně, měříme výkon, optimalizujeme rozpočty a budujeme obsahové strategie, které posilují vaši pozici na trhu. Žádné vanity metriky — jen to, co skutečně roste.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials — CSS sticky stack */}
        <section className="bg-white py-16 md:py-24">
          <div className="px-5 md:px-8 lg:px-12">
            {testimonials.map((item, i) => (
              <div
                key={item.name}
                className="sticky mb-8 last:mb-0"
                style={{ top: `${80 + i * 20}px` }}
              >
                <div
                  className="w-full max-w-[1100px] mx-auto rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
                  style={{ background: item.bg, minHeight: "min(65vh, 500px)" }}
                >
                  {/* Image left */}
                  <div className="w-full md:w-[45%] relative min-h-[220px] md:min-h-0">
                    <img
                      src={item.img}
                      alt={item.company}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  {/* Quote right */}
                  <div className="flex-1 flex flex-col justify-between p-8 md:p-12 lg:p-16">
                    <p className="font-heading text-2xl md:text-3xl lg:text-[2.5rem] xl:text-[2.8rem] font-bold text-white leading-[1.2] mb-8">
                      {item.quote}
                    </p>
                    <div>
                      <p className="font-heading text-base md:text-lg font-bold text-white">
                        {item.name}
                      </p>
                      <p className="font-heading text-sm text-white/70">
                        {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features — Born&Bred style */}
        <section className="pl-12 md:pl-24 lg:pl-40 xl:pl-52 pr-5 md:pr-8 lg:pr-10 py-24 md:py-32 lg:py-40">
          <div className="flex flex-col lg:flex-row">
            {/* Left — main content */}
            <div className="flex-1 lg:pr-16">
              {/* Section headline */}
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.08] tracking-tight mb-20 md:mb-28">
                Stop Spending.<br />Start Scaling.
              </h2>

              {/* Repeating feature rows with dividers */}
              <div className="divide-y divide-gray-200">
                {[
                  {
                    img: featureImg1.src,
                    title: "Strategie a data",
                    text: "Rozhodnutí stojí na datech. Ne na pocitech.",
                  },
                  {
                    img: featureImg2.src,
                    title: "Výkon a návratnost",
                    text: "Každá koruna má svůj cíl. Měříme a optimalizujeme.",
                  },
                  {
                    img: featureImg3.src,
                    title: "Systém",
                    text: "Marketing jako celek. Kanály, obsah, rozpočet v jednom.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col sm:flex-row gap-8 md:gap-12 items-center py-16 md:py-20 first:pt-0">
                    <div className="shrink-0 w-full sm:w-[28%] aspect-[4/3] rounded-xl overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-body text-base md:text-[17px] text-gray-500 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px bg-gray-200 mx-0" />

            {/* Right — sidebar card */}
            <div className="hidden lg:flex lg:w-[26%] pl-10 items-end">
              <div className="bg-black rounded-2xl px-8 py-14 lg:px-10 lg:py-16 w-full">
                <p className="font-heading text-[1.65rem] lg:text-[1.85rem] font-black text-white leading-[1.2] mb-6 uppercase">
                  {"\u201EFIRMY S JASNOU MARKETINGOVOU STRATEGI\u00cd ROSTOU 2,5\u00d7 RYCHLEJI NE\u017d TY BEZ N\u00cd.\u201C"}
                </p>
                <p className="font-heading text-sm tracking-wider text-white/50">
                  MCKINSEY
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services grid — Born&Bred style */}
        <section className="px-5 md:px-8 lg:px-12 xl:px-16 py-24 md:py-32 lg:py-40">
          <div className="max-w-[1200px] mx-auto">
            {/* Section headline */}
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-[1.1] tracking-tight mb-4">
              Strategy & Performance<br />
              For brands{" "}
              <span className="text-[#0047CC]">that scale</span>
            </h2>

            {/* Spacer */}
            <div className="mb-16 md:mb-20 lg:mb-24" />

            {/* 3×2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-14 md:gap-y-16 lg:gap-y-20">
              {[
                {
                  num: "01",
                  title: "Marketingová strategie",
                  text: "Jasný plán.\nMěřitelné cíle.",
                },
                {
                  num: "02",
                  title: "Performance kampaně",
                  text: "Google, Meta, LinkedIn.\nOptimalizace v reálném čase.",
                },
                {
                  num: "03",
                  title: "Obsahová strategie",
                  text: "Blog, social, video.\nObsah, který buduje autoritu.",
                },
                {
                  num: "04",
                  title: "SEO & analytika",
                  text: "Organický růst.\nData-driven rozhodování.",
                },
                {
                  num: "05",
                  title: "E-mail marketing",
                  text: "Automatizace.\nPersonalizované sekvence.",
                },
                {
                  num: "06",
                  title: "Reporting & optimalizace",
                  text: "Pravidelné reporty.\nNeustálé zlepšování.",
                },
              ].map((item) => (
                <div key={item.num}>
                  <h3 className="font-heading text-lg md:text-xl font-bold text-black mb-3 leading-tight">
                    <span className="text-black">{item.num}</span> {item.title}
                  </h3>
                  <p className="font-body text-[15px] md:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients logo marquee */}
        <ClientsSection hideHeader />

        {/* Portfolio showcase — bento grid */}
        <section className="px-5 md:px-8 lg:px-12 pb-24 md:pb-32 lg:pb-40">
          {/* Row 1: large left, 2 smaller right */}
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.5fr_0.4fr] gap-3 md:gap-4 mb-3 md:mb-4 md:h-[340px] lg:h-[400px]">
            <div className="rounded-2xl overflow-hidden aspect-[16/10] md:aspect-auto md:h-full">
              <img
                src={testimonialImg1.src}
                alt="Marketing projekt 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[16/10] md:aspect-auto md:h-full">
              <img
                src={testimonialImg2.src}
                alt="Marketing projekt 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[16/10] md:aspect-auto md:h-full">
              <img
                src={testimonialImg3.src}
                alt="Marketing projekt 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Other services — bento grid */}
        <section className="pb-32 md:pb-40">
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

export default MarketingSluzbaPage;
