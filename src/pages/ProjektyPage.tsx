import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import cometaVideo from "@/assets/cometaportfolio.mp4";
import newportfolio11 from "@/assets/newportfolio11.mp4";
import kkvideo from "@/assets/kkvideo.mp4";

const ProjektyPage = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showPopup, setShowPopup] = useState(false);

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
      <Helmet>
        <title>Projekty | CURIA</title>
        <meta name="description" content="Naše vybrané projekty. Od vizuální identity po digitální platformy." />
      </Helmet>
      <Header />
      <main className="overflow-x-hidden bg-white">
        {/* Hero */}
        <section className="container mx-auto px-6 md:px-12 lg:px-16 py-32 md:py-40">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight">
            Vybrané projekty
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
            Precizní realizace digitálních produktů a značek, které definují nové standardy v oboru.
          </p>
        </section>

        {/* Desktop/Tablet Projects */}
        <section className="hidden md:block container mx-auto px-12 lg:px-16 pb-32">
          {/* Mados Project */}
          <div className="mb-32">
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
              <Link to="/projekty/mados" className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity">
                <span className="text-base font-medium">Prozkoumat projekt</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Cometa Project */}
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
              <button 
                onClick={() => setShowPopup(true)}
                className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity"
              >
                <span className="text-base font-medium">Prozkoumat projekt</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* K+K Project */}
          <div>
            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-8">
              <video 
                src={kkvideo} 
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
                  K+K.Kačmáček. Architektura moderní tradice.
                </h3>
                <p className="text-base text-gray-600 mt-2">
                  Strategická transformace a redefinice vizuálního ekosystému pro lídra v oblasti mobility.
                </p>
              </div>
              <button 
                onClick={() => setShowPopup(true)}
                className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity"
              >
                <span className="text-base font-medium">Prozkoumat projekt</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Mobile Projects */}
        <section className="block md:hidden pb-24 px-6">
          {/* Mados Project */}
          <div className="mb-16">
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

            <div>
              <p className="text-sm text-gray-500 mb-2">PLATFORMA</p>
              <h3 className="text-2xl font-semibold text-black mb-4">
                Mados. Architektura obchodního růstu
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Implementace vysokovýkonného digitálního rozhraní pro lídra v segmentu stavebních systémů.
              </p>
              <Link to="/projekty/mados" className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity">
                <span className="text-base font-medium">Prozkoumat projekt</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Cometa Project */}
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

            <div>
              <p className="text-sm text-gray-500 mb-2">IDENTITA</p>
              <h3 className="text-2xl font-semibold text-black mb-4">
                Comet. Architektura průmyslové identity.
              </h3>
              <button 
                onClick={() => setShowPopup(true)}
                className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity"
              >
                <span className="text-base font-medium">Prozkoumat projekt</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* K+K Project */}
          <div>
            <div className="w-full aspect-[16/9] overflow-hidden mb-6">
              <video 
                src={kkvideo} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">IDENTITA</p>
              <h3 className="text-2xl font-semibold text-black mb-3">
                K+K.Kačmáček. Architektura moderní tradice.
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Strategická transformace a redefinice vizuálního ekosystému pro lídra v oblasti mobility.
              </p>
              <button 
                onClick={() => setShowPopup(true)}
                className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity"
              >
                <span className="text-base font-medium">Prozkoumat projekt</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Popup */}
        {showPopup && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowPopup(false)}
          >
            <div 
              className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Případová studie ve výrobě.
              </h3>
              <button
                onClick={() => setShowPopup(false)}
                className="w-full px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
              >
                Zavřít
              </button>
            </div>
          </div>
        )}

        <FooterNew />
      </main>
    </>
  );
};

export default ProjektyPage;
