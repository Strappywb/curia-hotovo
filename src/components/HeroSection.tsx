"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import brandingCard from "@/assets/sluzby/branding.webp";
import webdesignCard from "@/assets/sluzby/webdesign.webp";
import marketingCard from "@/assets/sluzby/marketing2.webp";
import grafikaCard from "@/assets/sluzby/30/grafika2.webp";
import aplikaceCard from "@/assets/sluzby/aplikace2.webp";

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
                className="font-heading font-black inline-block text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7rem] tracking-[-0.02em]"
                style={{
                  background: "radial-gradient(ellipse 60% 50% at 20% 30%, #00d2ff 0%, transparent 45%), radial-gradient(ellipse 55% 65% at 78% 20%, #7c3aed 0%, transparent 40%), radial-gradient(ellipse 70% 55% at 50% 75%, #2563eb 0%, transparent 42%), radial-gradient(ellipse 40% 40% at 75% 65%, #a855f7 0%, transparent 35%), radial-gradient(ellipse 30% 25% at 40% 40%, rgba(255,255,255,0.25) 0%, transparent 30%), radial-gradient(ellipse 100% 100% at 50% 50%, #1e3a8a 0%, #0c1535 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "liquidGradient 8s ease infinite",
                }}
              >CURIA</span>
              <br /><span className="block">KONSTITUCE</span>
              <span className="block">DIGITÁLNÍ IDENTITY</span>
            </h1>

            {/* CTA Button */}
            <div className="mt-12 flex items-center gap-5">
              <a
                href="/kontakt"
                className="group relative flex items-center gap-3 px-8 py-4 rounded-full text-white text-[15px] font-semibold transition-all duration-300 hover:scale-[1.03] overflow-hidden"
                style={{
                  backgroundColor: "#1e40af",
                  backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.7) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.6) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.8) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.5) 0%, transparent 50%)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 8px 32px rgba(56,189,248,0.3), 0 4px 20px rgba(124,58,237,0.3), 0 0 60px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                <span className="absolute inset-0 rounded-full opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="relative z-10">PROMLUVME SI</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <span
              className="font-heading font-black inline-block text-[3.2rem] tracking-[-0.02em]"
              style={{
                background: "radial-gradient(ellipse 60% 50% at 20% 30%, #00d2ff 0%, transparent 45%), radial-gradient(ellipse 55% 65% at 78% 20%, #7c3aed 0%, transparent 40%), radial-gradient(ellipse 70% 55% at 50% 75%, #2563eb 0%, transparent 42%), radial-gradient(ellipse 40% 40% at 75% 65%, #a855f7 0%, transparent 35%), radial-gradient(ellipse 30% 25% at 40% 40%, rgba(255,255,255,0.25) 0%, transparent 30%), radial-gradient(ellipse 100% 100% at 50% 50%, #1e3a8a 0%, #0c1535 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "liquidGradient 8s ease infinite",
              }}
            >CURIA</span>
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
            className="relative w-full flex items-center justify-between px-8 py-4.5 rounded-full text-white text-base font-semibold overflow-hidden"
            style={{
              backgroundColor: "#1e40af",
              backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.7) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.6) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.8) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.5) 0%, transparent 50%)",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 8px 32px rgba(56,189,248,0.3), 0 4px 20px rgba(124,58,237,0.3), 0 0 60px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            <span className="absolute inset-0 rounded-full opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <span className="relative z-10">PROMLUVME SI</span>
            <span className="relative z-10 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/10">
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
            preload="auto"
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
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src={"/videos/herovideocuria2.webm"} type="video/webm" />
            <source src={"/videos/herovideocuria2.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Manifest Section - MOBILE */}
      <div className="block md:hidden container mx-auto px-6 pb-24">
        <h2 className="text-[1.75rem] font-heading font-black leading-[1.15] tracking-tight text-black text-center">
          CURIA. VÍME, CO FUNGUJE.
          <br />
          ZBYTEK NEDĚLÁME.
        </h2>
      </div>

      {/* Services Rozcestník - MOBILE (horizontal scroll) */}
      <div className="block md:hidden pb-24">
        <div className="flex gap-3 overflow-x-auto pl-5 pr-5 pb-4" style={{ scrollbarWidth: "none" }}>
          <a href={services[0].href || "/sluzby"} className="flex-shrink-0 w-[75vw] h-[380px] group rounded-2xl overflow-hidden block relative">
            <img src={services[0].image} alt={services[0].name} className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-base font-heading font-bold text-white mb-0.5">{services[0].name}</h3>
              <p className="text-xs text-white/70 leading-relaxed line-clamp-2">{services[0].description}</p>
            </div>
          </a>
          <div className="flex-shrink-0 w-[52vw] h-[380px] flex flex-col gap-2">
            {[1, 2].map((idx) => (
              <a key={idx} href={services[idx].href || "/sluzby"} className="flex-1 group rounded-2xl overflow-hidden block relative">
                <img src={services[idx].image} alt={services[idx].name} className="w-full h-full object-cover absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-sm font-heading font-bold text-white">{services[idx].name}</h3>
                </div>
              </a>
            ))}
          </div>
          {[3, 4].map((idx) => (
            <a key={idx} href={services[idx]?.href || "/sluzby"} className="flex-shrink-0 w-[52vw] h-[380px] group rounded-2xl overflow-hidden block relative">
              <img src={services[idx]?.image} alt={services[idx]?.name} className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-heading font-bold text-white mb-0.5">{services[idx]?.name}</h3>
                <p className="text-xs text-white/70 leading-relaxed line-clamp-2">{services[idx]?.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
