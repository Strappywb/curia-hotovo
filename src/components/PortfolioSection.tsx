import { useEffect, useRef } from "react";
import cometaVideo from "@/assets/cometaportfolio.mp4";
import portfolio1 from "@/assets/portfolionew1.webp";
import portfolio3 from "@/assets/portfolionew3.webp";
import newportfolio11 from "@/assets/newportfolio11.mp4";
import newportfolio5 from "@/assets/newportfolio5.webp";
import newportfolio6 from "@/assets/newportfolio6.webp";

const PortfolioSection = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply parallax on desktop/tablet (768px and up)
      if (window.innerWidth < 768) return;

      imageRefs.current.forEach((img) => {
        if (!img) return;
        const rect = img.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the element is visible
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrolled = windowHeight - rect.top;
          const rate = scrolled * 0.1; // Parallax speed
          img.style.transform = `translateY(${-rate}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop/Tablet */}
      <section className="hidden md:block bg-white container mx-auto px-12 lg:px-16 pb-32">
        {/* Video Project */}
        <div className="mb-32">
          <div className="w-full aspect-[21/9] bg-white rounded-2xl overflow-hidden mb-8">
            <video 
              src={cometaVideo} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-2">IDENTITA</p>
              <h3 className="text-3xl lg:text-4xl font-semibold text-black">
                Comet. Architektura průmyslové identity.
              </h3>
            </div>
            <button className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity">
              <span className="text-base font-medium">Prozkoumat projekt</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Image Projects - Floating Layout */}
        <div className="flex gap-16 lg:gap-20">
          {/* Project 1 - Slack (Left, Higher) */}
          <div className="flex-1 space-y-8">
            <div ref={(el) => (imageRefs.current[0] = el)} className="w-full aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden transition-transform duration-100 ease-out">
              <img 
                src={portfolio1} 
                alt="Slack project" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">SYMBOL</p>
              <h3 className="text-3xl lg:text-4xl font-semibold text-black">
                Vizuální identita pro globální technologický subjekt
              </h3>
            </div>
          </div>

          {/* Project 2 - STC Bank (Right, Lower) */}
          <div className="flex-1 mt-64 space-y-8">
            <div ref={(el) => (imageRefs.current[1] = el)} className="w-full max-w-lg rounded-2xl overflow-hidden transition-transform duration-100 ease-out">
              <img 
                src={portfolio3} 
                alt="STC Bank project" 
                className="w-full h-auto object-contain"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">IDENTITA</p>
              <h3 className="text-3xl lg:text-4xl font-semibold text-black">
                K+K.Kačmáček. Architektura moderní tradice.
              </h3>
              <p className="text-base text-gray-600 mt-2">
                Strategická transformace a redefinice vizuálního ekosystému pro lídra v oblasti mobility.
              </p>
            </div>
          </div>
        </div>

        {/* Second Video Project */}
        <div className="mt-32">
          <div className="w-full aspect-[21/9] bg-white rounded-2xl overflow-hidden mb-8">
            <video 
              src={newportfolio11} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-2">PLATFORMA</p>
              <h3 className="text-3xl lg:text-4xl font-semibold text-black">
                Mados. Architektura obchodního růstu
              </h3>
              <p className="text-base text-gray-600 mt-2">
                Implementace vysokovýkonného digitálního rozhraní pro lídra v segmentu stavebních systémů.
              </p>
            </div>
            <button className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity">
              <span className="text-base font-medium">Prozkoumat projekt</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Third Set - Image Projects */}
        <div className="mt-32 flex gap-16 lg:gap-20">
          {/* Project 3 - Left, Higher */}
          <div className="flex-1 space-y-8">
            <div ref={(el) => (imageRefs.current[2] = el)} className="w-full aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden transition-transform duration-100 ease-out">
              <img 
                src={newportfolio5} 
                alt="Project" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">SYMBOL</p>
              <h3 className="text-3xl lg:text-4xl font-semibold text-black">
                Aura. Vizuální systém pro SaaS platformu.
              </h3>
              <p className="text-base text-gray-600 mt-2">
                Komplexní rebranding a definice nového vizuálního jazyka pro inovativní subjekt v oblasti digitálních služeb.
              </p>
            </div>
          </div>

          {/* Project 4 - Right, Lower */}
          <div className="flex-1 mt-64 space-y-8">
            <div ref={(el) => (imageRefs.current[3] = el)} className="w-full max-w-lg rounded-2xl overflow-hidden transition-transform duration-100 ease-out">
              <img 
                src={newportfolio6} 
                alt="Project" 
                className="w-full h-auto object-contain"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">PLATFORMA</p>
              <h3 className="text-3xl lg:text-4xl font-semibold text-black">
                HF. Digitální autorita v oblasti revitalizace.
              </h3>
              <p className="text-base text-gray-600 mt-2">
                Strategická realizace webového portálu pro lídra v segmentu modernizace bytového fondu a stavebních technologií.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden bg-white pb-24">
        {/* Video Project */}
        <div className="mb-16">
          <div className="w-full aspect-[16/9] bg-white overflow-hidden mb-6">
            <video 
              src={cometaVideo} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-6">
            <p className="text-sm text-gray-500 mb-2">IDENTITA</p>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Comet. Architektura průmyslové identity.
            </h3>
            <button className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity">
              <span className="text-base font-medium">Prozkoumat projekt</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Image Project 1 */}
        <div className="mb-16">
          <div className="w-full aspect-square bg-gray-100 overflow-hidden mb-6">
            <img 
              src={portfolio1} 
              alt="Slack project" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-6">
            <p className="text-sm text-gray-500 mb-2">SYMBOL</p>
            <h3 className="text-2xl font-semibold text-black mb-3">
              Vizuální identita pro globální technologický subjekt
            </h3>
          </div>
        </div>

        {/* Image Project 2 */}
        <div className="mb-16">
          <div className="w-full aspect-square bg-gray-100 overflow-hidden mb-6">
            <img 
              src={portfolio3} 
              alt="STC Bank project" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-6">
            <p className="text-sm text-gray-500 mb-2">IDENTITA</p>
            <h3 className="text-2xl font-semibold text-black mb-3">
              K+K.Kačmáček. Architektura moderní tradice.
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Strategická transformace a redefinice vizuálního ekosystému pro lídra v oblasti mobility.
            </p>
          </div>
        </div>

        {/* Second Video Project - Mobile */}
        <div className="mt-16">
          <div className="w-full aspect-[16/9] bg-white overflow-hidden mb-6">
            <video 
              src={newportfolio11} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-6">
            <p className="text-sm text-gray-500 mb-2">PLATFORMA</p>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Mados. Architektura obchodního růstu
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Implementace vysokovýkonného digitálního rozhraní pro lídra v segmentu stavebních systémů.
            </p>
            <button className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity">
              <span className="text-base font-medium">Prozkoumat projekt</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Third Image Project - Mobile */}
        <div className="mt-16">
          <div className="w-full aspect-square bg-gray-100 overflow-hidden mb-6">
            <img 
              src={newportfolio5} 
              alt="Project" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-6">
            <p className="text-sm text-gray-500 mb-2">SYMBOL</p>
            <h3 className="text-2xl font-semibold text-black mb-3">
              Aura. Vizuální systém pro SaaS platformu.
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Komplexní rebranding a definice nového vizuálního jazyka pro inovativní subjekt v oblasti digitálních služeb.
            </p>
          </div>
        </div>

        {/* Fourth Image Project - Mobile */}
        <div className="mt-16">
          <div className="w-full aspect-square bg-gray-100 overflow-hidden mb-6">
            <img 
              src={newportfolio6} 
              alt="Project" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-6">
            <p className="text-sm text-gray-500 mb-2">PLATFORMA</p>
            <h3 className="text-2xl font-semibold text-black mb-3">
              HF. Digitální autorita v oblasti revitalizace.
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Strategická realizace webového portálu pro lídra v segmentu modernizace bytového fondu a stavebních technologií.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
