import Header from "@/components/Header";
import Footer from "@/components/Footer";
import verdiktMados from "@/assets/verdikt-mados.png";
import madosOld from "@/assets/madosold.png";
import madosNew from "@/assets/madosnew.png";

const MadosPage = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Image */}
        <section className="w-full">
          <img 
            src={verdiktMados} 
            alt="Mados"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* O klientovi */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16">
            <h1 className="font-satoshi text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
              MADOS
            </h1>
            <p className="font-mono text-xl text-black/60 mb-8">
              Hliníková okna & fasády — Nymburk
            </p>
            <div className="space-y-4 font-mono text-lg text-black/80 leading-relaxed">
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
        <section className="w-full bg-[#F5F5F5] py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-black mb-12">
              ZADÁNÍ KLIENTA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8">
                <h3 className="font-satoshi text-xl font-bold text-black mb-4">Problém #1</h3>
                <p className="font-mono text-base text-black/70">
                  12 podstránek fungovalo jako bludiště. Uživatel hledal informace, nenašel je. Bounce rate 68%.
                </p>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-satoshi text-xl font-bold text-black mb-4">Problém #2</h3>
                <p className="font-mono text-base text-black/70">
                  Značka bez vizuální identity. Logo zastaralé, nekonzistentní komunikace.
                </p>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-satoshi text-xl font-bold text-black mb-4">Problém #3</h3>
                <p className="font-mono text-base text-black/70">
                  B2B a B2C komunikace se překrývala. Nejasné cílení obsahu.
                </p>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-satoshi text-xl font-bold text-black mb-4">Cíl</h3>
                <p className="font-mono text-base text-black/70">
                  Dominance ve vyhledávání pro region Nymburk. Zvýšení online konverzí.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Naše role */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-black mb-8">
              NAŠE ROLE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-satoshi text-lg font-bold text-black mb-2">Webdesign & Vývoj</h3>
                <p className="font-mono text-sm text-black/60">Kompletní redesign a implementace</p>
              </div>
              <div>
                <h3 className="font-satoshi text-lg font-bold text-black mb-2">Branding</h3>
                <p className="font-mono text-sm text-black/60">Logo, vizuální identita, manuál</p>
              </div>
              <div>
                <h3 className="font-satoshi text-lg font-bold text-black mb-2">Marketing</h3>
                <p className="font-mono text-sm text-black/60">SEO, content, Meta Ads</p>
              </div>
            </div>
          </div>
        </section>

        {/* Výchozí situace */}
        <section className="w-full bg-[#1a1a1a] py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src={madosOld} 
                  alt="Starý web Mados"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-white mb-8">
                  VÝCHOZÍ SITUACE
                </h2>
                <div className="space-y-4 font-mono text-lg text-white/80 leading-relaxed">
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
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-black mb-12 text-center">
              NOVÝ DESIGN
            </h2>
            <div className="space-y-16">
              {/* Redesign webu */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-satoshi text-2xl font-bold text-black mb-4">
                    Webová platforma
                  </h3>
                  <p className="font-mono text-lg text-black/70 mb-6">
                    Zredukovali jsme 12 stránek na systém Informačních Modulů (smart pop-ups). Uživatel nehledá - informace přichází za ním. Oddělené toky pro B2B a B2C.
                  </p>
                  <ul className="space-y-2 font-mono text-base text-black/60">
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
        <section className="w-full bg-[#F5F5F5] py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-black mb-12">
              ŘEŠENÍ PRO CÍLOVÉ SKUPINY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10">
                <h3 className="font-satoshi text-2xl font-bold text-black mb-6">B2B</h3>
                <div className="space-y-4 font-mono text-base text-black/70">
                  <p>
                    <span className="font-bold text-black">SEO Blog:</span> Technické články pro stavební firmy. Long-tail klíčová slova.
                  </p>
                  <p>
                    <span className="font-bold text-black">Lead formuláře:</span> Poptávkový systém pro velké objemy.
                  </p>
                  <p>
                    <span className="font-bold text-black">Katalog:</span> Kompletní sortiment s cenami pro registrované.
                  </p>
                </div>
              </div>
              <div className="bg-white p-10">
                <h3 className="font-satoshi text-2xl font-bold text-black mb-6">B2C</h3>
                <div className="space-y-4 font-mono text-base text-black/70">
                  <p>
                    <span className="font-bold text-black">Meta Ads:</span> Geograficky cílené kampaně na Nymburk +30 km.
                  </p>
                  <p>
                    <span className="font-bold text-black">Návody:</span> Praktické tipy pro kutily a rekonstrukce.
                  </p>
                  <p>
                    <span className="font-bold text-black">Калькулátor:</span> Online výpočet potřeby materiálu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Výsledky */}
        <section className="w-full bg-black py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-white mb-16 text-center">
              VÝSLEDKY & PŘÍNOS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-satoshi text-5xl md:text-6xl font-bold text-white mb-4">
                  +240%
                </div>
                <p className="font-mono text-white/70">
                  Nárůst organického trafficu za 6 měsíců
                </p>
              </div>
              <div className="text-center">
                <div className="font-satoshi text-5xl md:text-6xl font-bold text-white mb-4">
                  34%
                </div>
                <p className="font-mono text-white/70">
                  Bounce rate (původně 68%)
                </p>
              </div>
              <div className="text-center">
                <div className="font-satoshi text-5xl md:text-6xl font-bold text-white mb-4">
                  #1
                </div>
                <p className="font-mono text-white/70">
                  Pozice pro "stavební materiál Nymburk"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reference */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-black mb-12 text-center">
              REFERENCE
            </h2>
            <div className="bg-[#F5F5F5] p-8 md:p-12 lg:p-16">
              <p className="font-mono text-xl md:text-2xl text-black/80 leading-relaxed mb-8 italic">
                „Nový web nám přinesl nejen modernější vzhled, ale především měřitelné výsledky. Za půl roku jsme se dostali na první pozice ve vyhledávání a návštěvnost vzrostla o patnáctinásobek. Spolupráce s CURIA byla přímočará a efektivní."
              </p>
              <div className="border-t border-black/20 pt-6">
                <p className="font-satoshi text-lg font-bold text-black">
                  Marek Mach
                </p>
                <p className="font-mono text-base text-black/60">
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
