import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import verdiktMados from "@/assets/verdikt-mados.webp";
import madosOld from "@/assets/madosold.webp";
import madosNew from "@/assets/madosnew.webp";

const MadosPage = () => {
  return (
    <>
      <Helmet>
        <title>Mados - Case study | CURIA Portfolio</title>
        <meta name="description" content="Case study spolupráce s Mados. Hliníková okna a fasády Nymburk. Web, branding a SEO strategie." />
        <meta property="og:title" content="Mados - Case study | CURIA Portfolio" />
        <meta property="og:description" content="Case study spolupráce s Mados. Hliníková okna a fasády Nymburk. Web, branding a SEO strategie." />
        <link rel="canonical" href="https://curia.cz/projekty/mados" />
      </Helmet>
      <Header />
      <main className="overflow-x-hidden bg-[#ebebeb]">
        {/* Hero Image */}
        <section className="px-4 md:px-6 pt-24 md:pt-28 pb-4 md:pb-3">
          <div className="rounded-3xl md:rounded-[2.5rem] ring-4 ring-white overflow-hidden">
            <img 
              src={verdiktMados} 
              alt="Mados"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* O klientovi */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-white rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
              MADOS
            </h1>
            <p className="font-body font-semibold text-xl text-black/60 mb-8">
              Hliníková okna & fasády — Nymburk
            </p>
            <a 
              href="https://mados.cz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block font-body font-semibold text-sm text-black border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors mb-8"
            >
              mados.cz ↗
            </a>
            <div className="space-y-4 font-body font-semibold text-lg text-black/80 leading-relaxed">
              <p>
                Založeno 1995. Výrobce hliníkových oken, dveří, fasád a posuvných systémů. Od rodinných domů po developerské projekty.
              </p>
              <p>
                Klienti: architekti, developeři, koncový zákazník.
              </p>
            </div>
          </div>
        </section>

        {/* Zadání klienta */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-[#2a2a2a] rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-12">
              ZADÁNÍ KLIENTA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-8 rounded-2xl md:rounded-3xl">
                <h3 className="font-heading text-xl text-white mb-4">Problém #1</h3>
                <p className="font-body font-semibold text-base text-white/70">
                  12 podstránek fungovalo jako bludiště. Uživatel hledal informace, nenašel je. Bounce rate 68%.
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl md:rounded-3xl">
                <h3 className="font-heading text-xl text-white mb-4">Problém #2</h3>
                <p className="font-body font-semibold text-base text-white/70">
                  Značka bez vizuální identity. Logo zastaralé, nekonzistentní komunikace.
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl md:rounded-3xl">
                <h3 className="font-heading text-xl text-white mb-4">Problém #3</h3>
                <p className="font-body font-semibold text-base text-white/70">
                  B2B a B2C komunikace se překrývala. Nejasné cílení obsahu.
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl md:rounded-3xl">
                <h3 className="font-heading text-xl text-white mb-4">Cíl</h3>
                <p className="font-body font-semibold text-base text-white/70">
                  Dominance ve vyhledávání pro region Nymburk. Zvýšení online konverzí.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Naše role */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-white rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl text-black mb-8">
              NAŠE ROLE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-heading text-lg text-black mb-2">Webdesign & Vývoj</h3>
                <p className="font-body font-semibold text-sm text-black/60">Kompletní redesign a implementace</p>
              </div>
              <div>
                <h3 className="font-heading text-lg text-black mb-2">Branding</h3>
                <p className="font-body font-semibold text-sm text-black/60">Logo, vizuální identita, manuál</p>
              </div>
              <div>
                <h3 className="font-heading text-lg text-black mb-2">Marketing</h3>
                <p className="font-body font-semibold text-sm text-black/60">SEO, content, Meta Ads</p>
              </div>
            </div>
          </div>
        </section>

        {/* Výchozí situace */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-[#1a1a1a] rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src={madosOld} 
                  alt="Starý web Mados"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-heading text-3xl md:text-4xl text-white mb-8">
                  VÝCHOZÍ SITUACE
                </h2>
                <div className="space-y-4 font-body font-semibold text-lg text-white/80 leading-relaxed">
                  <p>
                    <span className="text-white font-bold">Bounce rate:</span> 68%
                  </p>
                  <p>
                    <span className="text-white font-bold">Průměrná doba na stránce:</span> 42 sekund
                  </p>
                  <p>
                    <span className="text-white font-bold">Organický traffic:</span> 20 lidí/měsíc
                  </p>
                  <p>
                    <span className="text-white font-bold">Pozice ve vyhledávání:</span> #7-12 pro klíčová slova
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nový design */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-white rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl text-black mb-12 text-center">
              NOVÝ DESIGN
            </h2>
            <div className="space-y-16">
              {/* Redesign webu */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-heading text-2xl text-black mb-4">
                    Webová platforma
                  </h3>
                  <p className="font-body font-semibold text-lg text-black/70 mb-6">
                    Zredukovali jsme 12 stránek na systém Informačních Modulů (smart pop-ups). Uživatel nehledá - informace přichází za ním. Oddělené toky pro B2B a B2C.
                  </p>
                  <ul className="space-y-2 font-body font-semibold text-base text-black/60">
                    <li>→ Intuitivní navigace</li>
                    <li>→ Rychlost načítání {'<'}1.2s</li>
                    <li>→ Mobile-first přístup</li>
                  </ul>
                </div>
                <div>
                  <img 
                    src={madosNew} 
                    alt="Nový web Mados"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Řešení pro cílové skupiny */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-[#2a2a2a] rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-12">
              ŘEŠENÍ PRO CÍLOVÉ SKUPINY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-10 rounded-2xl md:rounded-3xl">
                <h3 className="font-heading text-2xl text-white mb-6">B2B</h3>
                <div className="space-y-4 font-body font-semibold text-base text-white/70">
                  <p>
                    <span className="font-bold text-white">SEO Blog:</span> Technické články pro stavební firmy. Long-tail klíčová slova.
                  </p>
                  <p>
                    <span className="font-bold text-white">Lead formuláře:</span> Poptávkový systém pro velké objemy.
                  </p>
                  <p>
                    <span className="font-bold text-white">Katalog:</span> Kompletní sortiment s cenami pro registrované.
                  </p>
                </div>
              </div>
              <div className="bg-white/10 p-10 rounded-2xl md:rounded-3xl">
                <h3 className="font-heading text-2xl text-white mb-6">B2C</h3>
                <div className="space-y-4 font-body font-semibold text-base text-white/70">
                  <p>
                    <span className="font-bold text-white">Meta Ads:</span> Geograficky cílené kampaně na Nymburk +30 km.
                  </p>
                  <p>
                    <span className="font-bold text-white">Návody:</span> Praktické tipy pro kutily a rekonstrukce.
                  </p>
                  <p>
                    <span className="font-bold text-white">Калькулátor:</span> Online výpočet potřeby materiálu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Výsledky */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-black rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-16 text-center">
              VÝSLEDKY & PŘÍNOS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl text-white mb-4">
                  +240%
                </div>
                <p className="font-body font-semibold text-white/70">
                  Nárůst organického trafficu za 6 měsíců
                </p>
              </div>
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl text-white mb-4">
                  34%
                </div>
                <p className="font-body font-semibold text-white/70">
                  Bounce rate (původně 68%)
                </p>
              </div>
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl text-white mb-4">
                  #1
                </div>
                <p className="font-body font-semibold text-white/70">
                  Pozice pro "stavební materiál Nymburk"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reference */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-white rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl text-black mb-12 text-center">
              REFERENCE
            </h2>
            <div className="bg-[#F5F5F5] p-8 md:p-12 lg:p-16">
              <p className="font-body font-semibold text-xl md:text-2xl text-black/80 leading-relaxed mb-8 italic">
                „Nový web nám přinesl nejen modernější vzhled, ale především měřitelné výsledky. Za půl roku jsme se dostali na první pozice ve vyhledávání a návštěvnost vzrostla o patnáctinásobek. Spolupráce s CURIA byla přímočará a efektivní."
              </p>
              <div className="border-t border-black/20 pt-6">
                <p className="font-heading text-lg text-black">
                  Marek Mach
                </p>
                <p className="font-body font-semibold text-base text-black/60">
                  Majitel, MADOS s.r.o.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default MadosPage;
