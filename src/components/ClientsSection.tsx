"use client";

import { useState, useEffect } from "react";

import logo1 from "@/assets/sluzby/30/1.webp";
import logo2 from "@/assets/sluzby/30/2.webp";
import logo3 from "@/assets/sluzby/30/3.webp";
import logo4 from "@/assets/sluzby/30/4.webp";
import logo5 from "@/assets/sluzby/30/5.webp";
import logo6 from "@/assets/sluzby/30/6.webp";
import logo7 from "@/assets/sluzby/30/7.webp";
import logo8 from "@/assets/sluzby/30/8.webp";
import logo9 from "@/assets/sluzby/30/9.webp";
import logo10 from "@/assets/sluzby/30/10.webp";
import logo11 from "@/assets/sluzby/30/11.webp";
import logo12 from "@/assets/sluzby/30/12.webp";

// 4 sloty × 3 loga
const logoSlots = [
  [logo1, logo5, logo9],
  [logo2, logo6, logo10],
  [logo3, logo7, logo11],
  [logo4, logo8, logo12],
];

// Staggered delays — každý slot se přetočí v jiný čas
const staggerDelays = [0, 1200, 600, 1800];

function LogoSlot({
  logos,
  delay,
}: {
  logos: typeof logoSlots[0];
  delay: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % logos.length);
      }, 300);

      setTimeout(() => {
        setIsFlipping(false);
      }, 600);
    }, 3000 + delay);

    return () => clearInterval(interval);
  }, [logos.length, delay]);

  const current = logos[activeIndex];

  return (
    <div className="flex items-center justify-center h-40 md:h-48 overflow-hidden" style={{ perspective: "400px" }}>
      <div
        className="transition-transform duration-[600ms] ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipping ? "rotateX(180deg)" : "rotateX(0deg)",
        }}
      >
        <img
          src={current.src}
          alt="Logo klienta CURIA studia"
          className="h-40 md:h-48 w-auto object-contain"
          style={{ backfaceVisibility: "hidden" }}
        />
      </div>
    </div>
  );
}

const ClientsSection = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        {!hideHeader && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mb-20 md:mb-28">
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-black leading-[1.05]">
            Důvěřují nám
            <br />
            <span className="text-blue-600">skvělí klienti.</span>
          </h2>
          <div className="flex items-end">
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-lg">
              Nechceme se chlubit, ale řada startupů i zavedených firem se na
              nás obrací, když potřebují posunout svou značku a produkt na
              další úroveň.
            </p>
          </div>
        </div>
        )}

        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {logoSlots.map((slot, i) => (
            <LogoSlot key={i} logos={slot} delay={staggerDelays[i]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
