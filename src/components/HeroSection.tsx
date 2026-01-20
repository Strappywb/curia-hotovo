import { useEffect, useState } from "react";
import curiaHeroNew from "@/assets/curiaheronew2.webp";
import heroVideo from "@/assets/herovideocuria2.mp4";
import heroVideoWebm from "@/assets/herovideocuria2.webm";
import webdesignImg from "@/assets/webdesign.webp";
import brandingImg from "@/assets/CURIAbranding.webp";
import marketingImg from "@/assets/marketinghero.webp";
import grafikaImg from "@/assets/grafika.webp";
import aplikaceImg from "@/assets/aplikace.webp";

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: "branding",
      name: "Branding",
      description: "Značka není jen logo, je to váš mandát ovládnout trh. Tvoříme vizuální systémy, které lidé okamžitě rozpoznají a respektují. Budujeme identitu, která má váhu a jasný cíl. Jediným měřítkem je pro nás váš vliv.",
      image: brandingImg
    },
    {
      id: "webdesign",
      name: "Webdesign",
      description: "Zde vaše značka v digitálu ožívá. Navrhujeme weby, které nejsou jen \"hezké\", ale které fungují jako neprůstřelný systém. Čistý uživatelský zážitek bez zbytečností. Víme, co funguje, a zbytek do webu nepustíme.",
      image: webdesignImg
    },
    {
      id: "marketing",
      name: "Marketing",
      description: "Přetváříme pozornost v tržní dominanci. Filtrujeme hluk a soustředíme se jen na strategie, které vaši značku skutečně posilují. Neřešíme prázdná čísla, řešíme komunikaci, která z vás dělá lídra v oboru.",
      image: marketingImg
    },
    {
      id: "grafika",
      name: "Grafika",
      description: "Vizuální komunikace s jasnou strategií. Každý návrh, který od nás odejde, musí mít smysl a podpořit vaši autoritu. Neděláme věci jen pro krásu, ale pro jejich reálný dopad na vaše podnikání.",
      image: grafikaImg
    },
    {
      id: "aplikace",
      name: "Aplikace",
      description: "Stavíme funkční digitální nástroje, ne hračky. Spojujeme precizní kód a intuitivní design do produktů, které mají skutečnou hodnotu. Odstraňujeme bariéry mezi vámi a uživatelem. Zbytek neděláme.",
      image: aplikaceImg
    }
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
      <div className="hidden md:block container mx-auto px-12 lg:px-16 pt-32 lg:pt-40 pb-44 lg:pb-52">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
          {/* Left - Heading */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.05] tracking-tight text-black">
              <span className="block whitespace-nowrap">CURIA</span>
              <span className="block whitespace-nowrap">KONSTITUCE</span>
              <span className="block whitespace-nowrap">DIGITÁLNÍ IDENTITY</span>
            </h1>
          </div>

          {/* Right - Image - Even Bigger */}
          <div className="flex items-center justify-center lg:justify-end -mr-8 lg:-mr-12">
            <div className="relative w-full scale-125 lg:scale-[1.4]">
              <img 
                src={curiaHeroNew} 
                alt="Curia Design" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content - MOBILE */}
      <div className="block md:hidden container mx-auto px-6 pt-32 pb-28">
        <div className="grid grid-cols-1 gap-28 items-start">
          <div className="space-y-2">
            <h1 className="text-5xl font-heading font-bold leading-[1.05] tracking-tight text-black">
              <span className="block">CURIA</span>
              <span className="block">KONSTITUCE</span>
              <span className="block">DIGITÁLNÍ IDENTITY</span>
            </h1>
          </div>

          <div className="flex items-center justify-center -mx-6">
            <div className="relative w-full scale-125">
              <img 
                src={curiaHeroNew} 
                alt="Curia Design" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
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
            src={heroVideo} 
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

      {/* Services Section - DESKTOP/TABLET */}
      <div className="hidden md:block container mx-auto px-12 lg:px-16 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left - Description */}
          <div>
            <p className="text-2xl lg:text-3xl font-normal leading-relaxed text-black">
              Tvoříme komplexní digitální identity pro značky, které chtějí růst. Kombinujeme branding, design a technologie.
            </p>
          </div>

          {/* Right - Services List */}
          <div className="space-y-6">
            {services.map((service) => (
              <div key={service.id} className="border-b border-gray-200">
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="w-full flex items-center justify-between pb-6 hover:opacity-70 transition-opacity"
                >
                  <h3 className="text-2xl lg:text-3xl font-semibold text-black text-left">{service.name}</h3>
                  <svg 
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${expandedService === service.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedService === service.id ? 'max-h-[600px] opacity-100 mb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full max-w-sm h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section - MOBILE */}
      <div className="block md:hidden w-full pb-24">
        <div className="w-full aspect-square bg-gray-100 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideoWebm} type="video/webm" />
            <source src={heroVideo} type="video/mp4" />
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

      {/* Services Section - MOBILE */}
      <div className="block md:hidden container mx-auto px-6 pb-24">
        <div className="space-y-16">
          {/* Description */}
          <div>
            <p className="text-lg font-normal leading-relaxed text-black">
              Tvoříme komplexní digitální identity pro značky, které chtějí růst. Kombinujeme branding, design a technologie.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-6">
            {services.map((service) => (
              <div key={service.id} className="border-b border-gray-200">
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="w-full flex items-center justify-between pb-6 hover:opacity-70 transition-opacity"
                >
                  <h3 className="text-xl font-semibold text-black text-left">{service.name}</h3>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${expandedService === service.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedService === service.id ? 'max-h-[600px] opacity-100 mb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full max-w-[16rem] h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
