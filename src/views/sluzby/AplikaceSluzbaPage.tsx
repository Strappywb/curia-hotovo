"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/FooterNew";
import TalkCtaSection from "@/components/TalkCtaSection";
import ClientsSection from "@/components/ClientsSection";
import appImg1 from "@/assets/sluzby/30/app1.webp";
import appImg2 from "@/assets/sluzby/30/app2.webp";
import appImg3 from "@/assets/sluzby/30/app3.webp";
import webdesignCard from "@/assets/sluzby/webdesign.webp";
import brandingCard from "@/assets/sluzby/branding.webp";
import marketingCard from "@/assets/sluzby/marketing2.webp";
import grafikaCard from "@/assets/sluzby/Grafika.webp";
import aplikaceCard from "@/assets/sluzby/aplikace2.webp";

const faqItems = [
  {
    question: "Směr a značka",
    answer:
      "Aplikace vychází ze značky a produktu. Respektuje kontext, cíle i platformu.",
  },
  {
    question: "Používání",
    answer:
      "Navrhujeme podle reálných scénářů. Testujeme a postupně zpřesňujeme.",
  },
  {
    question: "Platforma",
    answer:
      "Volíme řešení podle potřeby projektu. Důraz na výkon, stabilitu a přirozené chování.",
  },
  {
    question: "Systém",
    answer:
      "UI je navržené jako systém. Udržitelný a připravený na další rozvoj.",
  },
  {
    question: "Realizace",
    answer:
      "Design i vývoj řeší jeden tým. Od návrhu po nasazení.",
  },
];

const AplikaceSluzbaPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
    { name: "Branding & Identita", description: "Vizuální systémy, které lidé okamžitě rozpoznají.", image: brandingCard.src, href: "/sluzby/branding" },
    { name: "Strategický Marketing", description: "Strategie, které vaši značku skutečně posilují.", image: marketingCard.src, href: "/sluzby/marketing" },
    { name: "Grafika & Vizuál", description: "Návrhy s jasným smyslem, které podpoří autoritu.", image: grafikaCard.src, href: "/sluzby/grafika" },
    { name: "Webdesign", description: "Weby, které fungují jako neprůstřelný systém.", image: webdesignCard.src, href: "/sluzby/webdesign" },
    { name: "Aplikace na míru", description: "Precizní kód a intuitivní design v jednom produktu.", image: aplikaceCard.src, href: "/sluzby/aplikace" },
  ];
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Hero — Orizon style */}
        <section className="pt-40 md:pt-52 pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-heading font-bold text-black leading-[1.02] mb-8"
            >
              Aplikace na míru
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl lg:text-2xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Navrhujeme a stavíme aplikace.<br />
              Od prvního směru po finální produkt.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-4"
            >
              <a
                href="/kontakt"
                className="inline-flex items-center gap-3 bg-[#0047CC] hover:bg-[#003399] text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
              >
                KONTAKTUJTE NÁS
              </a>
            </motion.div>
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
              src={appImg1.src}
              alt="Aplikace na míru"
              className="w-full h-auto object-cover aspect-[16/9] md:aspect-[2.2/1]"
            />
          </motion.div>
        </section>

        {/* Client logos */}
        <ClientsSection hideHeader />

        {/* Dark showcase image — full width */}
        <section className="px-4 md:px-8 lg:px-12 pb-8 md:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl md:rounded-3xl overflow-hidden bg-gray-950"
          >
            <img
              src={appImg2.src}
              alt="App showcase"
              className="w-full h-auto object-cover aspect-[16/9] md:aspect-[2.2/1]"
            />
          </motion.div>
        </section>

        {/* App UI/UX heading + quote — Orizon style */}
        <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40">
          <div className="max-w-[1100px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] mb-16 md:mb-24 text-center"
            >
              <span className="text-[#0047CC]">UI a UX</span> pro<br />
              aplikace
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-6 md:gap-8 max-w-3xl mx-auto"
            >
              <div className="w-1 shrink-0 rounded-full bg-[#0047CC]" />
              <p className="text-xl md:text-2xl lg:text-[1.7rem] text-gray-800 leading-relaxed">
                Aplikace navrhujeme kolem reálného používání.
                Struktura, interakce i vizuální jazyk vznikají jako jeden celek.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center mt-14 md:mt-16"
            >
              <a
                href="/kontakt"
                className="inline-flex items-center gap-3 bg-[#0047CC] hover:bg-[#003399] text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
              >
                KONTAKTUJTE NÁS
              </a>
            </motion.div>
          </div>
        </section>

        {/* Showcase — full bleed */}
        <section className="px-4 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={appImg3.src}
              alt="App showcase detail"
              className="w-full h-auto object-cover rounded-2xl md:rounded-3xl"
            />
          </motion.div>
        </section>

        {/* Services heading + image — Orizon style */}
        <section className="px-6 md:px-12 lg:px-16 pt-24 md:pt-32 lg:pt-40">
          <div className="max-w-[1400px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] mb-0"
            >
              <span className="text-[#0047CC]">Kompletní služby</span><br />
              App design & vývoj
            </motion.h2>
          </div>
        </section>

        {/* FAQ */}
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
      </main>

      <Footer />
    </>
  );
};

export default AplikaceSluzbaPage;
