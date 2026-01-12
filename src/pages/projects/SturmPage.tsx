import Header from "@/components/Header";
import Footer from "@/components/Footer";
import verdiktSturm from "@/assets/verdikt-sturm.png";

const SturmPage = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Image */}
        <section className="w-full">
          <img 
            src={verdiktSturm} 
            alt="Filip Šturm"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* O klientovi */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16">
            <h1 className="font-satoshi text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
              FILIP ŠTURM
            </h1>
            <p className="font-mono text-xl text-black/60 mb-8">
              Finanční poradenství — Praha
            </p>
            <div className="space-y-4 font-mono text-lg text-black/80 leading-relaxed">
              <p>
                Finanční poradce pro high-net-worth klienty. Expertise na úrovni instituce.
              </p>
              <p>
                Klienti: podnikatelé, investoři, decision-makeři.
              </p>
            </div>
          </div>
        </section>

        {/* Zadání klienta */}
        <section className="w-full bg-[#F5F5F5] py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-black mb-12">
              PROBLÉM
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8">
                <h3 className="font-satoshi text-xl font-bold text-black mb-4">Hluk v sektoru</h3>
                <p className="font-mono text-base text-black/70">
                  Finanční poradenství plné spamu. Tisíce "poradců" křičí o pozornost. Žádná diferenciace.
                </p>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-satoshi text-xl font-bold text-black mb-4">Chybějící digitální prezentace</h3>
                <p className="font-mono text-base text-black/70">
                  Expertise na úrovni instituce. Online prezentace na úrovni amatéra.
                </p>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-satoshi text-xl font-bold text-black mb-4">Nerelevantní poptávky</h3>
                <p className="font-mono text-base text-black/70">
                  Čas zabíjený retail klienty. Malé objemy, velká administrativa.
                </p>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-satoshi text-xl font-bold text-black mb-4">Cíl</h3>
                <p className="font-mono text-base text-black/70">
                  Oddělit signál od šumu. Přitáhnout bonitní klienty, odradit zbytek.
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
                <h3 className="font-satoshi text-lg font-bold text-black mb-2">Webdesign</h3>
                <p className="font-mono text-sm text-black/60">Informační pevnost</p>
              </div>
              <div>
                <h3 className="font-satoshi text-lg font-bold text-black mb-2">SEO</h3>
                <p className="font-mono text-sm text-black/60">Dominance klíčových frází</p>
              </div>
              <div>
                <h3 className="font-satoshi text-lg font-bold text-black mb-2">Meta Ads</h3>
                <p className="font-mono text-sm text-black/60">Vizuální všudypřítomnost</p>
              </div>
            </div>
          </div>
        </section>

        {/* Koncept */}
        <section className="w-full bg-[#1a1a1a] py-20 md:py-32">
          <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-white mb-12">
              KONCEPT
            </h2>
            <div className="space-y-8 font-mono text-lg text-white/80 leading-relaxed">
              <p>
                Informační pevnost. Design jako filtr. Vysoká hustota informací kvalifikuje návštěvníka.
              </p>
              <p>
                Smaragdová psychologie barev. Signalizace relevance těm, kdo rozumí jazyku velkých peněz.
              </p>
              <p>
                Web záměrně odrazuje retail. Přitahuje decision-makery.
              </p>
            </div>
          </div>
        </section>

        {/* Strategie */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-black mb-12">
              AMPLIFIKACE
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                  Statická obrana nestačí. Přechod do ofenzivy.
                </p>
                <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                  SEO dominance pro monopolizaci klíčových frází. Meta Ads pro vizuální všudypřítomnost.
                </p>
                <p className="font-mono text-lg text-black/80 leading-relaxed">
                  Cíl nejsou prokliky. Cíl je být v zorném poli decision-makerů. Digitální obklíčení.
                </p>
              </div>
              <div className="bg-[#F5F5F5] p-8">
                <ul className="space-y-4 font-mono text-base text-black/70">
                  <li className="flex items-start gap-3">
                    <span className="text-black font-bold">→</span>
                    SEO monopolizace klíčových frází
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black font-bold">→</span>
                    Meta Ads - brand awareness
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black font-bold">→</span>
                    Retargeting na decision-makery
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black font-bold">→</span>
                    Content positioning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Výsledky */}
        <section className="w-full bg-black py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-white mb-16 text-center">
              VÝSLEDKY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-satoshi text-5xl md:text-6xl font-bold text-white mb-4">
                  0
                </div>
                <p className="font-mono text-white/70">
                  Nerelevantních poptávek
                </p>
              </div>
              <div className="text-center">
                <div className="font-satoshi text-5xl md:text-6xl font-bold text-white mb-4">
                  ROI+
                </div>
                <p className="font-mono text-white/70">
                  Spend jako investice, ne náklad
                </p>
              </div>
              <div className="text-center">
                <div className="font-satoshi text-5xl md:text-6xl font-bold text-white mb-4">
                  Obráceno
                </div>
                <p className="font-mono text-white/70">
                  Klienti hledají jeho
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
                „Eliminace balastu. Dramatický nárůst bonitních poptávek. Už nehledám klienty - klienti hledají mě."
              </p>
              <div className="border-t border-black/20 pt-6">
                <p className="font-satoshi text-lg font-bold text-black">
                  Filip Šturm
                </p>
                <p className="font-mono text-base text-black/60">
                  Finanční poradce
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

export default SturmPage;
