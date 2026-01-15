import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import verdiktSturm from "@/assets/verdikt-sturm.webp";

const SturmPage = () => {
  return (
    <>
      <Helmet>
        <title>Filip Šturm - Case study | CURIA Portfolio</title>
        <meta name="description" content="Case study spolupráce s Filipem Šturmem. Finanční poradenství Praha. Osobní branding a web pro high-net-worth klienty." />
        <meta property="og:title" content="Filip Šturm - Case study | CURIA Portfolio" />
        <meta property="og:description" content="Case study spolupráce s Filipem Šturmem. Finanční poradenství Praha. Osobní branding a web." />
        <link rel="canonical" href="https://curia.cz/projekty/filip-sturm" />
      </Helmet>
      <Header />
      <main className="overflow-x-hidden bg-[#ebebeb]">
        {/* Hero Image */}
        <div className="px-4 md:px-6 pt-4 md:pt-3">
          <div className="bg-white rounded-3xl md:rounded-[2.5rem] ring-4 ring-white overflow-hidden">
            <img 
              src={verdiktSturm} 
              alt="Filip Šturm"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* O klientovi */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-white rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
              FILIP ŠTURM
            </h1>
            <p className="font-body font-semibold text-xl text-black/60 mb-8">
              Finanční poradenství — Praha
            </p>
            <a 
              href="https://www.filipsturm.cz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block font-body font-semibold text-sm text-black border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors mb-8"
            >
              filipsturm.cz ↗
            </a>
            <div className="space-y-4 font-body font-semibold text-lg text-black/80 leading-relaxed">
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
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-[#2a2a2a] rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-12">
              PROBLÉM
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-8 rounded-2xl md:rounded-3xl">
                <h3 className="font-heading text-xl text-white mb-4">Hluk v sektoru</h3>
                <p className="font-body font-semibold text-base text-white/70">
                  Finanční poradenství plné spamu. Tisíce "poradců" křičí o pozornost. Žádná diferenciace.
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl md:rounded-3xl">
                <h3 className="font-heading text-xl text-white mb-4">Chybějící digitální prezentace</h3>
                <p className="font-body font-semibold text-base text-white/70">
                  Expertise na úrovni instituce. Online prezentace na úrovni amatéra.
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl md:rounded-3xl">
                <h3 className="font-heading text-xl text-white mb-4">Nerelevantí poptávky</h3>
                <p className="font-body font-semibold text-base text-white/70">
                  Čas zabíjený retail klienty. Malé objemy, velká administrativa.
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl md:rounded-3xl">
                <h3 className="font-heading text-xl text-white mb-4">Cíl</h3>
                <p className="font-body font-semibold text-base text-white/70">
                  Oddělit signál od šumu. Přitáhnout bonitní klienty, odradit zbytek.
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
                <h3 className="font-heading text-lg text-black mb-2">Webdesign</h3>
                <p className="font-body font-semibold text-sm text-black/60">Informační pevnost</p>
              </div>
              <div>
                <h3 className="font-heading text-lg text-black mb-2">SEO</h3>
                <p className="font-body font-semibold text-sm text-black/60">Dominance klíčových frází</p>
              </div>
              <div>
                <h3 className="font-heading text-lg text-black mb-2">Meta Ads</h3>
                <p className="font-body font-semibold text-sm text-black/60">Vizuální všudypřítomnost</p>
              </div>
            </div>
          </div>
        </section>

        {/* Koncept */}
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-[#1a1a1a] rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-12">
              KONCEPT
            </h2>
            <div className="space-y-8 font-body font-semibold text-lg text-white/80 leading-relaxed">
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
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-white rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl text-black mb-12">
              AMPLIFIKACE
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                  Statická obrana nestačí. Přechod do ofenzivy.
                </p>
                <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                  SEO dominance pro monopolizaci klíčových frází. Meta Ads pro vizuální všudypřítomnost.
                </p>
                <p className="font-body font-semibold text-lg text-black/80 leading-relaxed">
                  Cíl nejsou prokliky. Cíl je být v zorném poli decision-makerů. Digitální obklíčení.
                </p>
              </div>
              <div className="bg-[#F5F5F5] p-8 rounded-2xl md:rounded-3xl">
                <ul className="space-y-4 font-body font-semibold text-base text-black/70">
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
        <section className="px-4 md:px-6 py-4 md:py-3">
          <div className="bg-black rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 px-8 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-16 text-center">
              VÝSLEDKY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl text-white mb-4">
                  0
                </div>
                <p className="font-body font-semibold text-white/70">
                  Nerelevantních poptávek
                </p>
              </div>
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl text-white mb-4">
                  ROI+
                </div>
                <p className="font-body font-semibold text-white/70">
                  Spend jako investice, ne náklad
                </p>
              </div>
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl text-white mb-4">
                  Obráceno
                </div>
                <p className="font-body font-semibold text-white/70">
                  Klienti hledají jeho
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
                „Eliminace balastu. Dramatický nárůst bonitních poptávek. Už nehledám klienty - klienti hledají mě."
              </p>
              <div className="border-t border-black/20 pt-6">
                <p className="font-heading text-lg text-black">
                  Filip Šturm
                </p>
                <p className="font-body font-semibold text-base text-black/60">
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
