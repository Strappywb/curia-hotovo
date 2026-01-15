import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import verdiktHf from "@/assets/verdikt-hf.webp";
import hfstavbyOld from "@/assets/hfstavbyold.webp";
import hfstavbyNew from "@/assets/hfstavbynew.webp";

const HFStavbyPage = () => {
  return (
    <>
      <Helmet>
        <title>HF Stavby - Case study | CURIA Portfolio</title>
        <meta name="description" content="Příběh spolupráce s HF Stavby. Kompletní webová realizace pro stavební firmu. Od strategie po spuštění." />
        <meta property="og:title" content="HF Stavby - Case study | CURIA Portfolio" />
        <meta property="og:description" content="Příběh spolupráce s HF Stavby. Kompletní webová realizace pro stavební firmu." />
        <link rel="canonical" href="https://curia.cz/projekty/hf-stavby" />
      </Helmet>
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Image */}
        <div className="px-4 md:px-6 pt-4 md:pt-3">
          <div className="bg-white rounded-3xl md:rounded-[2.5rem] ring-4 ring-white overflow-hidden">
            <img 
              src={verdiktHf} 
              alt="HF Stavby"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* O klientovi */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-white rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16 max-w-5xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
              HF STAVBY
            </h1>
            <p className="font-body font-semibold text-xl text-black/60 mb-8">
              Stavební firma — Kompletní realizace
            </p>
            <div className="space-y-4 font-body font-semibold text-lg text-black/80 leading-relaxed">
              <p>
                Specializace na kompletní stavební realizace. Od rodinných domů po rekonstrukce.
              </p>
              <p>
                Klienti: bonitní zákazníci, investoři, architekti.
              </p>
            </div>
          </div>
        </section>

        {/* Zadání klienta */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-[#2a2a2a] rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-12">
              ZADÁNÍ KLIENTA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-8">
                <h3 className="font-heading text-xl text-white mb-4">Problém #1</h3>
                <p className="font-body font-semibold text-base text-white/70">
                  Kvalita práce excelentní. Web působil toxicky. Nesoulad mezi řemeslem a prezentací.
                </p>
              </div>
              <div className="bg-white/10 p-8">
                <h3 className="font-heading text-xl text-white mb-4">Problém #2</h3>
                <p className="font-body font-semibold text-base text-white/70">
                  Bonitní klienti zpochybňovali kvalitu firmy kvůli webu. Reputační brzda.
                </p>
              </div>
              <div className="bg-white/10 p-8">
                <h3 className="font-heading text-xl text-white mb-4">Problém #3</h3>
                <p className="font-body font-semibold text-base text-white/70">
                  Žádná důvěra při první interakci. Web nevyvolával pocit spolehlivosti.
                </p>
              </div>
              <div className="bg-white/10 p-8">
                <h3 className="font-heading text-xl text-white mb-4">Cíl</h3>
                <p className="font-body font-semibold text-base text-white/70">
                  100% konverze na důvěru. Web jako digitální vizitka pro uzavírání obchodu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Naše role */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-white rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16 max-w-5xl mx-auto">
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
                <p className="font-body font-semibold text-sm text-black/60">Vínová identita, typografie</p>
              </div>
              <div>
                <h3 className="font-heading text-lg text-black mb-2">Strategie</h3>
                <p className="font-body font-semibold text-sm text-black/60">Trust Anchor koncept</p>
              </div>
            </div>
          </div>
        </section>

        {/* Výchozí situace */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-[#1a1a1a] rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src={hfstavbyOld} 
                  alt="Starý web HF Stavby"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-heading text-3xl md:text-4xl text-white mb-8">
                  VÝCHOZÍ SITUACE
                </h2>
                <div className="space-y-4 font-body font-semibold text-lg text-white/80 leading-relaxed">
                  <p>
                    <span className="text-white font-bold">První dojem:</span> Nedůvěryhodný
                  </p>
                  <p>
                    <span className="text-white font-bold">Vizuální identita:</span> Neexistovala
                  </p>
                  <p>
                    <span className="text-white font-bold">Konverze na důvěru:</span> Nízká
                  </p>
                  <p>
                    <span className="text-white font-bold">Tržní pozice:</span> Malý hráč (vnímání)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nový design */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-white rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-black mb-12 text-center">
              NOVÝ DESIGN
            </h2>
            <div className="space-y-16">
              {/* Redesign webu */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-heading text-2xl text-black mb-4">
                    Digitální vizitka
                  </h3>
                  <p className="font-body font-semibold text-lg text-black/70 mb-6">
                    Minimalismus jako nástroj. Vínová (Bordeaux) identita. Strukturovaná galerie realizací. Žádný balast - jen podstata.
                  </p>
                  <ul className="space-y-2 font-body font-semibold text-base text-black/60">
                    <li>→ Trust Anchor design</li>
                    <li>→ Čistá typografie</li>
                    <li>→ Galerie jako důkaz kvality</li>
                  </ul>
                </div>
                <div>
                  <img 
                    src={hfstavbyNew} 
                    alt="Nový web HF Stavby"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategie */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-[#2a2a2a] rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-12">
              STRATEGIE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-10">
                <h3 className="font-heading text-2xl text-white mb-6">Ignorovat SEO</h3>
                <div className="space-y-4 font-body font-semibold text-base text-white/70">
                  <p>
                    Nepotřebný traffic. Klienti přichází z doporučení. Web slouží jako validace při rozhodování.
                  </p>
                </div>
              </div>
              <div className="bg-white/10 p-10">
                <h3 className="font-heading text-2xl text-white mb-6">100% Důvěra</h3>
                <div className="space-y-4 font-body font-semibold text-base text-white/70">
                  <p>
                    Každý element komunikuje preciznost. Minimalismus jako důkaz spolehlivosti. Žádné prázdné sliby.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Výsledky */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-black rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-16 text-center">
              VÝSLEDKY & PŘÍNOS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl text-white mb-4">
                  2×
                </div>
                <p className="font-body font-semibold text-white/70">
                  Zdvojnásobení kapacity firmy
                </p>
              </div>
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl text-white mb-4">
                  100%
                </div>
                <p className="font-body font-semibold text-white/70">
                  Konverze na důvěru při první interakci
                </p>
              </div>
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl text-white mb-4">
                  0
                </div>
                <p className="font-body font-semibold text-white/70">
                  Reputačních bariér růstu
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reference */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-white rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16 max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-black mb-12 text-center">
              REFERENCE
            </h2>
            <div className="bg-[#F5F5F5] p-8 md:p-12 lg:p-16">
              <p className="font-body font-semibold text-xl md:text-2xl text-black/80 leading-relaxed mb-8 italic">
                „Nový web nám otevřel dveře k projektům, které jsme dříve nemohli získat. Klienti nás konečně berou vážně. Působíme jako velká firma, což se projevilo i na naší kapacitě."
              </p>
              <div className="border-t border-black/20 pt-6">
                <p className="font-heading text-lg text-black">
                  HF Stavby
                </p>
                <p className="font-body font-semibold text-base text-black/60">
                  Jednatel
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

export default HFStavbyPage;
