"use client";

import Link from "next/link";
import { useRef, useCallback } from "react";
import procmy1 from "@/assets/sluzby/procmy1.webp";
import procmy2 from "@/assets/sluzby/procmy2.webp";

function useTilt(strength = 6) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rX = (0.5 - y) * strength;
        const rY = (x - 0.5) * strength;
        el.style.transform = `perspective(1200px) rotateX(${rX}deg) rotateY(${rY}deg)`;
      });
    },
    [strength]
  );

  const onLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const el = ref.current;
    if (el) el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  }, []);

  return { ref, onMove, onLeave };
}

const TransformSection = () => {
  const tilt1 = useTilt(5);
  const tilt2 = useTilt(5);

  return (
    <section className="relative">
      <div className="h-[200vh]">
        {/* ── Card 1 ── */}
        <div
          className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-8 lg:px-12"
          style={{ zIndex: 1 }}
        >
          <div
            ref={tilt1.ref}
            onMouseMove={tilt1.onMove}
            onMouseLeave={tilt1.onLeave}
            className="w-full max-w-[1400px] transition-transform duration-200 ease-out will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
          >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[70vh] flex flex-col">
            {/* Background image */}
            <img
              src={procmy1.src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex flex-col flex-1">
              {/* Top: heading + description */}
              <div className="px-8 md:px-16 lg:px-20 pt-16 md:pt-20 lg:pt-24 flex-1">
                <p className="text-sm font-bold tracking-[0.25em] uppercase text-white/80 mb-8">
                  Jsme design lídři
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-heading font-bold text-white leading-[1.05] max-w-2xl">
                  Tvoříme světové
                  <br />
                  produkty a značky.
                </h2>
                <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-xl mt-8">
                  Pomáháme startupům i zavedeným firmám přeměnit jejich nápady a
                  cíle v propracované produkty a značky, které generují miliony v
                  tržbách.
                </p>
              </div>

              {/* Feature */}
              <div className="px-8 md:px-16 lg:px-20 pb-16 md:pb-20 lg:pb-24">
                <div className="pt-10 md:pt-12">
                  <div className="max-w-lg">
                    <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-3">
                      Posouváme hranice a inspirujeme designéry všude
                    </h3>
                    <p className="text-sm md:text-base text-white/80 font-medium leading-relaxed">
                      Naše designy inspirují tisíce lidí na sociálních sítích i
                      v produktových týmech. Udáváme nové trendy a posouváme
                      hranice toho, co je možné.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* ── Card 2 ── */}
        <div
          className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-8 lg:px-12"
          style={{ zIndex: 2 }}
        >
          <div
            ref={tilt2.ref}
            onMouseMove={tilt2.onMove}
            onMouseLeave={tilt2.onLeave}
            className="w-full max-w-[1400px] transition-transform duration-200 ease-out will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
          >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[70vh] flex flex-col">
            {/* Background image */}
            <img
              src={procmy2.src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex flex-col flex-1">
              {/* Top: heading */}
              <div className="px-8 md:px-16 lg:px-20 pt-16 md:pt-20 lg:pt-24">
                <p className="text-sm font-bold tracking-[0.25em] uppercase text-white/80 mb-8">
                  Jak pracujeme
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-heading font-bold text-white leading-[1.05] max-w-3xl">
                  Děláme věci,
                  <br />
                  které obstojí.
                </h2>
              </div>

              {/* 4 feature columns */}
              <div className="px-8 md:px-16 lg:px-20 mt-auto pb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pt-10 md:pt-14">
                  <div>
                    <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-4 leading-tight">
                      Neřešíme formu pro formu.
                    </h3>
                    <p className="text-sm md:text-[15px] text-white/80 font-medium leading-relaxed">
                      Důležitý je výsledek. Dodáváme průběžně, bez zbytečného
                      balastu okolo. Co dává smysl, to jde ven.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-4 leading-tight">
                      Rozumíme tomu, co děláme.
                    </h3>
                    <p className="text-sm md:text-[15px] text-white/80 font-medium leading-relaxed">
                      Složitější zadání pro nás není překážka. Naopak.
                      Rozkládáme ho na části, hledáme podstatu a stavíme řešení,
                      které funguje dlouhodobě.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-4 leading-tight">
                      Přemýšlíme v kontextu byznysu.
                    </h3>
                    <p className="text-sm md:text-[15px] text-white/80 font-medium leading-relaxed">
                      Nejen jak to vypadá, ale proč to existuje a co to má
                      přinést. Každé rozhodnutí má důvod.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-4 leading-tight">
                      Fungujeme jako součást týmu.
                    </h3>
                    <p className="text-sm md:text-[15px] text-white/80 font-medium leading-relaxed">
                      Ne jako externí dodavatel na okraji. Jsme zapojení,
                      dostupní a neseme odpovědnost za výsledek.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom stats bar */}
              <div className="px-8 md:px-16 lg:px-20 pb-12 md:pb-16 lg:pb-20 mt-12 md:mt-16">
                <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-2xl md:text-3xl font-heading font-bold text-white">
                      1 173+
                    </span>
                    <span className="text-sm text-white/60">
                      projektů
                    </span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformSection;
