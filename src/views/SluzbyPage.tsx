"use client";

import { useRef, useCallback, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/FooterNew";
import brandingCard from "@/assets/sluzby/branding.webp";
import webdesignCard from "@/assets/sluzby/webdesign.webp";
import marketingCard from "@/assets/sluzby/marketing2.webp";
import grafikaCard from "@/assets/sluzby/30/grafika2.webp";
import aplikaceCard from "@/assets/sluzby/aplikace2.webp";

const services = [
  {
    id: "branding",
    name: "Branding & Identita",
    description: "Tvoříme vizuální systémy, které lidé okamžitě rozpoznají a respektují.",
    image: brandingCard.src,
    href: "/sluzby/branding",
  },
  {
    id: "webdesign",
    name: "Webdesign",
    description: "Navrhujeme weby, které fungují jako neprůstřelný systém.",
    image: webdesignCard.src,
    href: "/sluzby/webdesign",
  },
  {
    id: "marketing",
    name: "Strategický Marketing",
    description: "Soustředíme se jen na strategie, které vaši značku skutečně posilují.",
    image: marketingCard.src,
    href: "/sluzby/marketing",
  },
  {
    id: "grafika",
    name: "Grafika & Vizuál",
    description: "Každý návrh musí mít smysl a podpořit vaši autoritu.",
    image: grafikaCard.src,
    href: "/sluzby/grafika",
  },
  {
    id: "aplikace",
    name: "Aplikace na míru",
    description: "Spojujeme precizní kód a intuitivní design do produktů s reálnou hodnotou.",
    image: aplikaceCard.src,
    href: "/sluzby/aplikace",
  },
];

const detailedServices = [
  {
    title: "Webdesign\n& Weby",
    tags: [
      "Landing Page",
      "E-commerce",
      "Firemní web",
      "CMS systémy",
      "Shopify",
      "WordPress",
      "Webflow",
      "UX/UI Design",
      "Responzivní design",
      "Interaktivní zážitky",
      "Frontend Development",
      "Backend Development",
    ],
  },
  {
    title: "Branding\n& Identita",
    tags: [
      "Logo",
      "Vizuální identita",
      "Brand strategie",
      "Brandbook",
      "Tone of voice",
      "Design manuál",
      "Brand style guides",
      "Naming",
      "Positioning",
      "Rebranding",
    ],
  },
  {
    title: "Aplikace\n& Systémy",
    tags: [
      "SaaS",
      "CRM systémy",
      "ERP řešení",
      "Mobilní aplikace",
      "Webové aplikace",
      "iOS",
      "Android",
      "Product Design",
      "Wireframy & Prototypy",
      "Uživatelský výzkum",
      "Custom Software",
    ],
  },
  {
    title: "Strategický\nMarketing",
    tags: [
      "SEO",
      "PPC kampaně",
      "Google Ads",
      "Meta Ads",
      "Sociální sítě",
      "Obsahová strategie",
      "Email marketing",
      "Analytika & Data",
      "Konverzní optimalizace",
      "Growth strategie",
    ],
  },
  {
    title: "Grafika\n& Produkce",
    tags: [
      "Videoprodukce",
      "Motion design",
      "3D modelování",
      "3D animace",
      "Fotografie",
      "Ilustrace",
      "Social media grafika",
      "Tiskoviny",
      "Prezentace",
      "Pitch Deck",
      "Art Direction",
    ],
  },
];

const steps = [
  {
    num: 1,
    title: "Konzultace\n& Strategie",
    desc: "Porozumíme vašemu byznysu, cílům a trhu. Zmapujeme konkurenci, identifikujeme příležitosti a nastavíme jasný plán.",
  },
  {
    num: 2,
    title: "Wireframy\n& Struktura",
    desc: "Navrhneme informační architekturu, uživatelské toky a drátěné modely — základ, na kterém stojí celý produkt.",
  },
  {
    num: 3,
    title: "Design\n& Vizuál",
    desc: "Převedeme wireframy do finálního designu. Vizuální identita, UI systém a každý detail na svém místě.",
  },
  {
    num: 4,
    title: "Vývoj\n& Realizace",
    desc: "Kód, nasazení, testování. Postavíme produkt na míru s důrazem na výkon, bezpečnost a škálovatelnost.",
  },
  {
    num: 5,
    title: "Launch\n& Podpora",
    desc: "Spustíme, změříme a optimalizujeme. Dlouhodobá spolupráce, ne jednorázový projekt.",
  },
];

const ServiceCard = ({ service }: { service: (typeof services)[number] }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      const img = imgRef.current;
      if (!card || !img) return;

      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (0.5 - y) * 12;
      const rotateY = (x - 0.5) * 12;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      const moveX = (0.5 - x) * 20;
      const moveY = (0.5 - y) * 20;
      img.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const card = cardRef.current;
    const img = imgRef.current;
    if (!card || !img) return;

    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
    img.style.transform = "scale(1) translate(0px, 0px)";
  }, []);

  return (
    <a
      ref={cardRef}
      href={service.href}
      className="relative rounded-2xl overflow-hidden aspect-[4/3] block transition-transform duration-300 ease-out will-change-transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      <img
        ref={imgRef}
        src={service.image}
        alt={service.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
          {service.name}
        </h3>
        <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-md">
          {service.description}
        </p>
      </div>
    </a>
  );
};

const StepsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.children;
    if (!cards[index]) return;
    const card = cards[index] as HTMLElement;
    container.scrollTo({
      left: card.offsetLeft - 0,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = Array.from(container.children) as HTMLElement[];
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - container.scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  }, []);

  return (
    <section className="pb-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header row */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <span className="w-1 h-5 bg-blue-600 rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-900">
              Jak pracujeme
            </span>
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center transition-all duration-200 hover:bg-gray-900 hover:text-white disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-gray-900 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollToIndex(Math.min(steps.length - 1, activeIndex + 1))}
              disabled={activeIndex === steps.length - 1}
              className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center transition-all duration-200 hover:bg-gray-900 hover:text-white disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-gray-900 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              onClick={() => scrollToIndex(i)}
              className={`flex-shrink-0 w-[280px] md:w-[320px] lg:w-[340px] rounded-2xl p-8 md:p-10 snap-start cursor-pointer transition-all duration-500 ${
                activeIndex === i
                  ? "bg-[#0f1129] text-white"
                  : "bg-gray-50 text-gray-900"
              }`}
            >
              <div className="flex items-start justify-between mb-8">
                <h3 className="text-2xl md:text-3xl font-heading font-bold leading-[1.1] whitespace-pre-line">
                  {step.title}
                </h3>
                <span
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ml-4 ${
                    activeIndex === i
                      ? "border-2 border-white/40 text-white"
                      : "border-2 border-gray-300 text-gray-500"
                  }`}
                >
                  {step.num}
                </span>
              </div>
              <p
                className={`text-[15px] leading-relaxed ${
                  activeIndex === i ? "text-white/70" : "text-gray-500"
                }`}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SluzbyPage = () => {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Hero */}
        <section className="pt-40 md:pt-52 pb-20 md:pb-28 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-black leading-[1.02]">
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
                    V čem
                  </span>
                  <br />
                  vynikáme.
                </h1>
              </div>
              <div className="flex items-end">
                <div>
                  <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg">
                    Branding, weby, aplikace, strategie, produkce — vše pod
                    jednou střechou. Přinášíme ambiciózní nápady k životu.
                  </p>
                  <a
                    href="/kontakt"
                    className="relative inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full text-white font-semibold text-[15px] transition-all duration-300 hover:scale-[1.03] overflow-hidden"
                    style={{
                      backgroundColor: "#1e40af",
                      backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.7) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.6) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.8) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.5) 0%, transparent 50%)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      boxShadow: "0 8px 32px rgba(56,189,248,0.3), 0 4px 20px rgba(124,58,237,0.3), 0 0 60px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
                    }}
                  >
                    PROMLUVME SI
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service cards - DESKTOP */}
        <div className="hidden md:block max-w-[1400px] mx-auto px-8 lg:px-12 pb-32">
          <div className="grid grid-cols-2 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Service cards - MOBILE */}
        <div className="block md:hidden px-5 pb-24">
          <div className="grid grid-cols-1 gap-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={service.href}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] block"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {service.name}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Steps carousel */}
        <StepsCarousel />

        {/* Detailed service sections — ONE tall dark card */}
        <div className="px-4 md:px-8 lg:px-12 pb-32">
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(160deg, #0a1628 0%, #0f1d3a 25%, #132a5e 50%, #0f1d3a 75%, #0a1628 100%)",
            }}
          >
            {detailedServices.map((section, sectionIdx) => (
              <div
                key={section.title}
                className={`px-8 py-16 md:px-16 md:py-24 lg:px-24 lg:py-28 ${
                  sectionIdx < detailedServices.length - 1
                    ? "border-b border-white/[0.06]"
                    : ""
                }`}
              >
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 md:gap-20 items-start">
                  {/* Left — heading */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] whitespace-pre-line">
                      {section.title}
                    </h2>
                  </motion.div>

                  {/* Right — pills with staggered animation */}
                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.04 } },
                    }}
                  >
                    {section.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        variants={{
                          hidden: { opacity: 0, y: 14, scale: 0.95 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                          },
                        }}
                        className="px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-white/15 text-white/75 text-sm md:text-[15px] font-medium hover:bg-white/10 hover:text-white hover:border-white/30 transition-colors duration-200 cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SluzbyPage;
