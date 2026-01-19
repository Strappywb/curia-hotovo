import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/FooterNew";
import ContactFormSection from "@/components/ContactFormSection";
import identitaImg from "@/assets/identita.webp";
import systemImg from "@/assets/system.webp";
import platformyImg from "@/assets/platformy.webp";
import produkceImg from "@/assets/produkce.webp";
import sochaveniImg from "@/assets/sochaveni.webp";
import etccImg from "@/assets/etcc.webp";

const SluzbyPage = () => {
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
      <Helmet>
        <title>Webdesign, Branding, Marketing & Aplikace | CURIA Praha</title>
        <meta name="description" content="Komplexní designové a digitální služby v Praze. Webdesign, branding, marketing, grafika a vývoj aplikací. Budujeme značky a weby, které definují standardy." />
        <meta name="keywords" content="webdesign Praha, branding Praha, marketing Praha, grafika, aplikace, CURIA" />
        <meta property="og:title" content="Webdesign, Branding, Marketing & Aplikace | CURIA Praha" />
        <meta property="og:description" content="Komplexní designové a digitální služby v Praze. Webdesign, branding, marketing, grafika a vývoj aplikací." />
        <link rel="canonical" href="https://curia.cz/sluzby" />
      </Helmet>
      <Header />
      
      <main className="bg-white">
        {/* Hero Section */}
        <section className="py-32 px-6 md:px-12 lg:px-16">
          <div className="container mx-auto max-w-7xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight">
              Komplexní partner digitálních inovací
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Propojujeme designovou preciznost s technologickou excelencí. Budujeme prémiové značky a digitální zážitky, které definují nové standardy.
            </p>
          </div>
        </section>

        {/* 1. Identita (Branding) */}
        <section className="py-20 bg-white">
          <div className="md:container md:mx-auto md:max-w-[1600px] md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-0 md:gap-32 items-start">
              {/* Left - Text */}
              <div className="px-6 md:px-0 mb-20 md:mb-0">
                <div className="text-sm font-medium text-gray-500 mb-4">01</div>
                <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
                  Identita
                </h2>

                <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
                  Věříme, že identita je základním zákonem každého úspěšného celku. V rámci CURIA definujeme vizuální a strategické standardy, které zajišťují integritu značky napříč všemi fyzickými i digitálními kanály. Tvoříme systémy, které nepodléhají trendům, ale definují je.
                </p>
                
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">Strategie značky</div>
                  <div className="text-lg font-medium text-black">Architektura identity</div>
                  <div className="text-lg font-medium text-black">Vizuální systémy</div>
                  <div className="text-lg font-medium text-black">Design manuály (Konstituce)</div>
                  <div className="text-lg font-medium text-black">Verbální identita a messaging</div>
                  <div className="text-lg font-medium text-black">Brand Experience</div>
                </div>
              </div>

              {/* Right - Image */}
              <div ref={(el) => (imageRefs.current[0] = el)} className="aspect-[5/6] md:rounded-2xl overflow-hidden md:shadow-2xl transition-transform duration-100 ease-out">
                <img src={sochaveniImg} alt="Identita" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Systémy (Digital Products & SaaS) */}
        <section className="py-20">
          <div className="md:container md:mx-auto md:max-w-[1600px] md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-0 md:gap-32 items-start">
              {/* Text - First on mobile */}
              <div className="px-6 md:px-0 mb-12 md:mb-0 lg:order-2">
                <div className="text-sm font-medium text-gray-500 mb-4">02</div>
                <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
                  Systémy
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
                  Navrhujeme a vyvíjíme komplexní digitální ekosystémy, které optimalizují vnitřní procesy firem a posouvají interakci s uživatelem na nejvyšší úroveň. Od custom CRM řešení po škálovatelné SaaS platformy – tvoříme nástroje, které jsou stejně výkonné jako estetické.
                </p>
                
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">SaaS & Enterprise software</div>
                  <div className="text-lg font-medium text-black">Custom CRM & ERP systémy</div>
                  <div className="text-lg font-medium text-black">Mobilní a webové aplikace</div>
                  <div className="text-lg font-medium text-black">UX/UI design rozhraní</div>
                  <div className="text-lg font-medium text-black">Design systémy pro produktovou iteraci</div>
                  <div className="text-lg font-medium text-black">Uživatelský výzkum a testování</div>
                </div>
              </div>

              {/* Image - Second on mobile, first on desktop */}
              <div ref={(el) => (imageRefs.current[1] = el)} className="aspect-[5/6] md:rounded-2xl overflow-hidden md:shadow-2xl transition-transform duration-100 ease-out lg:order-1">
                <img src={systemImg} alt="Systémy" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Platformy (Websites) */}
        <section className="py-20 bg-white">
          <div className="md:container md:mx-auto md:max-w-[1600px] md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-0 md:gap-32 items-start">
              {/* Left - Text */}
              <div className="px-6 md:px-0 mb-12 md:mb-0">
                <div className="text-sm font-medium text-gray-500 mb-4">03</div>
                <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
                  Platformy
                </h2>

                <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
                  Webová platforma je nejkritičtějším bodem styku mezi značkou a jejím trhem. Naše realizace kombinují nekompromisní vizuální standard s maximálním výkonem. Budujeme digitální destinace, které plní obchodní cíle a zároveň definují uživatelský zážitek v daném segmentu.
                </p>
                
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">Content Strategy</div>
                  <div className="text-lg font-medium text-black">Webový design (High-end)</div>
                  <div className="text-lg font-medium text-black">Interaktivní zážitky</div>
                  <div className="text-lg font-medium text-black">E-commerce řešení</div>
                  <div className="text-lg font-medium text-black">Frontend & Backend development</div>
                  <div className="text-lg font-medium text-black">Implementace CMS systémů</div>
                </div>
              </div>

              {/* Right - Image */}
              <div ref={(el) => (imageRefs.current[2] = el)} className="aspect-[5/6] md:rounded-2xl overflow-hidden md:shadow-2xl transition-transform duration-100 ease-out">
                <img src={platformyImg} alt="Platformy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Produkce (Content & Video) */}
        <section className="py-20">
          <div className="md:container md:mx-auto md:max-w-[1600px] md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-0 md:gap-32 items-start">
              {/* Text - First on mobile */}
              <div className="px-6 md:px-0 mb-12 md:mb-0 lg:order-2">
                <div className="text-sm font-medium text-gray-500 mb-4">04</div>
                <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
                  Produkce
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
                  Autentický a technicky dokonalý obsah je v digitální éře nezbytností. CURIA dodává vizuální aktiva v nejvyšší možné kvalitě, od precizní videoprodukce po komplexní 3D simulace a grafický design. Každý detail je podřízen celkové integritě značky.
                </p>
                
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">Art Direction</div>
                  <div className="text-lg font-medium text-black">Videoprodukce a postprodukce</div>
                  <div className="text-lg font-medium text-black">3D modelování a animace</div>
                  <div className="text-lg font-medium text-black">Motion design</div>
                  <div className="text-lg font-medium text-black">Fotografie a vizuální narativ</div>
                  <div className="text-lg font-medium text-black">Ilustrace a ikonografie</div>
                </div>
              </div>

              {/* Image - Second on mobile, first on desktop */}
              <div ref={(el) => (imageRefs.current[3] = el)} className="aspect-[5/6] md:rounded-2xl overflow-hidden md:shadow-2xl transition-transform duration-100 ease-out lg:order-1">
                <img src={produkceImg} alt="Produkce" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Strategie (Marketing & Growth) */}
        <section className="py-20 bg-white">
          <div className="md:container md:mx-auto md:max-w-[1600px] md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-0 md:gap-32 items-start">
              {/* Left - Text */}
              <div className="px-6 md:px-0 mb-16 md:mb-0">
                <div className="text-sm font-medium text-gray-500 mb-4">05</div>
                <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
                  Strategie
                </h2>

                <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
                  Digitální tvorba bez výsledků je pouze dekorací. Využíváme data a výkonnostní marketing k tomu, abychom z vašich platforem vytvořili motory růstu. Analyzujeme, optimalizujeme a škálujeme váš zásah tak, aby každá investice do designu přinesla měřitelný obchodní dopad.
                </p>
                
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">Výkonnostní marketing</div>
                  <div className="text-lg font-medium text-black">SEO & Visibility management</div>
                  <div className="text-lg font-medium text-black">Analýza dat a konverzních poměrů</div>
                  <div className="text-lg font-medium text-black">Strategie růstu (Growth Hacking)</div>
                  <div className="text-lg font-medium text-black">Správa digitální přítomnosti</div>
                </div>
              </div>

              {/* Right - Image */}
              <div ref={(el) => (imageRefs.current[4] = el)} className="aspect-[5/6] md:rounded-2xl overflow-hidden md:shadow-2xl transition-transform duration-100 ease-out">
                <img src={etccImg} alt="Strategie" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>

      <Footer />
    </>
  );
};

export default SluzbyPage;
