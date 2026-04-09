"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import brandingCard from "@/assets/sluzby/branding.png";
import webdesignCard from "@/assets/sluzby/webdesign.png";
import marketingCard from "@/assets/sluzby/marketing2.png";
import grafikaCard from "@/assets/sluzby/Grafika.png";
import aplikaceCard from "@/assets/sluzby/aplikace2.png";

const ServiceCard = ({ service }: { service: { id: string; name: string; description: string; image: string; href?: string } }) => {
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

      // 3D tilt
      const rotateX = (0.5 - y) * 12;
      const rotateY = (x - 0.5) * 12;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      // Image parallax
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

    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
    img.style.transform = 'scale(1) translate(0px, 0px)';
  }, []);

  return (
    <a
      ref={cardRef}
      href={service.href || "/sluzby"}
      className="relative rounded-2xl overflow-hidden aspect-[4/3] block transition-transform duration-300 ease-out will-change-transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
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

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

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
    },
    {
      id: "grafika",
      name: "Grafika & Vizuál",
      description: "Každý návrh musí mít smysl a podpořit vaši autoritu.",
      image: grafikaCard.src,
    },
    {
      id: "aplikace",
      name: "Aplikace na míru",
      description: "Spojujeme precizní kód a intuitivní design do produktů s reálnou hodnotou.",
      image: aplikaceCard.src,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Calculate progress from 0 to 1 based on scroll - faster progression
      const progress = Math.min(scrollPosition / (windowHeight * 0.5), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate video scale: starts at 0.93 (93%) and grows to 0.995 (99.5%)
  const videoScale = 0.93 + (scrollProgress * 0.065);

  return (
    <section id="hero" className="relative w-full bg-white">
      {/* Main Hero Content - DESKTOP/TABLET */}
      <div className="hidden md:block max-w-[1400px] mx-auto px-12 lg:px-16 pt-40 lg:pt-48 pb-28 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left - Big Heading + CTA */}
          <div className="lg:col-span-7">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.8rem] font-heading font-bold leading-[1.05] tracking-tight text-black">
              <span
                className="font-heading font-bold bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 bg-clip-text text-transparent"
              >CURIA</span>
              <br /><span className="block">KONSTITUCE</span>
              <span className="block">DIGITÁLNÍ IDENTITY</span>
            </h1>

            {/* CTA Button */}
            <div className="mt-12 flex items-center gap-5">
              <a
                href="/kontakt"
                className="group flex items-center gap-3 px-8 py-4 rounded-full text-white text-[15px] font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #0c1e4a 0%, #1e3a8a 40%, #2563eb 100%)",
                  boxShadow: "0 8px 32px rgba(30,58,138,0.4), 0 0 48px rgba(37,99,235,0.15), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
              >
                PROMLUVME SI
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Description */}
          <div className="lg:col-span-5 flex items-center">
            <p className="text-lg lg:text-[1.3rem] text-gray-600 leading-relaxed">
              CURIA je digitální studio, které pomáhá firmám budovat silnou online přítomnost. Od strategie přes design až po funkční produkt.
            </p>
          </div>
        </div>
      </div>

      {/* Main Hero Content - MOBILE */}
      <div className="block md:hidden px-6 pt-24 pb-10">
        {/* Centered heading */}
        <div className="text-center">
          <h1 className="text-[2.5rem] font-heading font-bold leading-[1.08] tracking-tight text-black">
            <span className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 bg-clip-text text-transparent">CURIA</span>
            <br /><span className="block">KONSTITUCE</span>
            <span className="block">DIGITÁLNÍ IDENTITY</span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-center text-base text-gray-600 leading-relaxed mt-6 mx-auto max-w-xs">
          Pomáháme firmám budovat silnou online přítomnost. Od strategie přes design až po funkční produkt.
        </p>

        {/* CTA Button - full width */}
        <div className="mt-8 px-2">
          <a
            href="/kontakt"
            className="w-full flex items-center justify-between px-8 py-4.5 rounded-full text-white text-base font-semibold"
            style={{
              background: "linear-gradient(135deg, #0c1e4a 0%, #1e3a8a 40%, #2563eb 100%)",
              boxShadow: "0 8px 32px rgba(30,58,138,0.4), 0 0 48px rgba(37,99,235,0.15), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          >
            <span>PROMLUVME SI</span>
            <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Video Section - DESKTOP with Scroll Animation */}
      <div className="hidden md:block container mx-auto px-4 lg:px-6 pb-32">
        <div 
          className="w-full aspect-video bg-gray-100 rounded-xl overflow-hidden transition-transform duration-300 ease-out"
          style={{
            transform: `scale(${videoScale})`,
            transformOrigin: 'center center'
          }}
        >
          <video 
            src={"/videos/herovideocuria2.mp4"} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Manifest Section - DESKTOP/TABLET */}
      <div className="hidden md:block container mx-auto px-12 lg:px-16 pb-32">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold leading-relaxed text-black text-center">
          CURIA. VÍME, CO FUNGUJE. ZBYTEK NEDĚLÁME.
        </h2>
      </div>

      {/* Services Grid - DESKTOP/TABLET */}
      <div className="hidden md:block max-w-[1400px] mx-auto px-8 lg:px-12 pb-32">
        <div className="grid grid-cols-2 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Video Section - MOBILE */}
      <div className="block md:hidden px-4 pb-16">
        <div className="w-full aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={"/videos/herovideocuria2.webm"} type="video/webm" />
            <source src={"/videos/herovideocuria2.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Manifest Section - MOBILE */}
      <div className="block md:hidden container mx-auto px-6 pb-24">
        <h2 className="text-2xl font-heading font-bold leading-tight text-black text-center">
          CURIA. VÍME, CO FUNGUJE.
          <br />
          ZBYTEK NEDĚLÁME.
        </h2>
      </div>

      {/* Services Grid - MOBILE */}
      <div className="block md:hidden px-5 pb-24">
        <div className="grid grid-cols-1 gap-4">
          {services.map((service) => (
            <a
              key={service.id}
              href={service.href || "/sluzby"}
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
    </section>
  );
};

export default HeroSection;
