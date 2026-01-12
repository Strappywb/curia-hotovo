import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import verdiktPrint from "@/assets/verdikt-print.png";

const PrinteriaPage = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Image */}
        <section className="w-full">
          <img 
            src={verdiktPrint} 
            alt="Printeria"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* O klientovi */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16">
            <h1 className="font-satoshi text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
              PRINTERIA
            </h1>
            <p className="font-mono text-xl text-black/60 mb-8">
              Tiskárna — Praha & Střední Čechy
            </p>
            <a 
              href="https://printeria.cz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block font-mono text-sm text-black border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors mb-8"
            >
              printeria.cz ↗
            </a>
            <div className="space-y-4 font-mono text-lg text-black/80 leading-relaxed">
              <p>
                Tiskové služby pro firmy i jednotlivce. Samolepky, bannery, vizitky, tiskoviny.
              </p>
              <p>
                Klienti: malé a střední firmy, e-shopy, eventy.
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
                <h3 className="font-satoshi text-xl font-bold text-black mb-4">Závislost na doporučeních</h3>
                <p className="font-mono text-base text-black/70">
                  Čekání na telefon. Žádná aktivní akvizice. Doufání místo strategie.
                </p>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-satoshi text-xl font-bold text-black mb-4">Nefunkční web</h3>
                <p className="font-mono text-base text-black/70">
                  Zastaralý design. Žádná konverze. Relikvie z minulé dekády.
                </p>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-satoshi text-xl font-bold text-black mb-4">SEO krvavá lázeň</h3>
                <p className="font-mono text-base text-black/70">
                  Konkurence pálí miliony za backlinky. Vstup do této války = ekonomická sebevražda.
                </p>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-satoshi text-xl font-bold text-black mb-4">Cíl</h3>
                <p className="font-mono text-base text-black/70">
                  Najít jinou cestu. Obejít konkurenci. Aktivně získávat klienty.
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h3 className="font-satoshi text-lg font-bold text-black mb-2">Webdesign</h3>
                <p className="font-mono text-sm text-black/60">Kompletní redesign</p>
              </div>
              <div>
                <h3 className="font-satoshi text-lg font-bold text-black mb-2">Branding</h3>
                <p className="font-mono text-sm text-black/60">Nová vizuální identita</p>
              </div>
              <div>
                <h3 className="font-satoshi text-lg font-bold text-black mb-2">Marketing</h3>
                <p className="font-mono text-sm text-black/60">Meta Ads, kreativa</p>
              </div>
              <div>
                <h3 className="font-satoshi text-lg font-bold text-black mb-2">Technologie</h3>
                <p className="font-mono text-sm text-black/60">AI outreach systém</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategie */}
        <section className="w-full bg-[#1a1a1a] py-20 md:py-32">
          <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-white mb-12">
              STRATEGIE
            </h2>
            <div className="space-y-8 font-mono text-lg text-white/80 leading-relaxed">
              <p>
                Ignorovali jsme SEO. Konkurence bojuje o klíčová slova - my jsme změnili hřiště.
              </p>
              <p>
                Redukce desítek služeb na 4 pilíře. Nová identita - hravá, drzá, expertní.
              </p>
              <p>
                Místo fotek tiskáren virální kreativa. "Chodící samolepky" na Meta Ads prorazily bannerovou slepotu.
              </p>
            </div>
          </div>
        </section>

        {/* Technologie */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-black mb-12">
              AI OUTREACH
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                  Odmítli jsme pasivní SEO. Vyvinuli jsme aktivní lov.
                </p>
                <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                  Proprietární CRM napojený na AI agenty. Systém skenuje trh, analyzuje sociální sítě firem, filtruje ideální klienty.
                </p>
                <p className="font-mono text-lg text-black/80 leading-relaxed">
                  Hyper-personalizovaný outreach. Nečekáme, až nás najdou. My víme, že nás potřebují, dřív než oni.
                </p>
              </div>
              <div className="bg-[#F5F5F5] p-8">
                <ul className="space-y-4 font-mono text-base text-black/70">
                  <li className="flex items-start gap-3">
                    <span className="text-black font-bold">→</span>
                    Automatické skenování trhu
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black font-bold">→</span>
                    Analýza veřejných dat firem
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black font-bold">→</span>
                    Filtrace ideálních klientů
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black font-bold">→</span>
                    Personalizovaný e-mailing
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
                  0 Kč
                </div>
                <p className="font-mono text-white/70">
                  Za SEO backlinky
                </p>
              </div>
              <div className="text-center">
                <div className="font-satoshi text-5xl md:text-6xl font-bold text-white mb-4">
                  Top 5
                </div>
                <p className="font-mono text-white/70">
                  Tiskárna v Praze a Středních Čechách
                </p>
              </div>
              <div className="text-center">
                <div className="font-satoshi text-5xl md:text-6xl font-bold text-white mb-4">
                  Aktivní
                </div>
                <p className="font-mono text-white/70">
                  Akvizice místo čekání
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
                „Z firmy čekající na telefon jsme se stali aktivním hráčem na trhu. AI systém nám přináší klienty, které bychom jinak nikdy neoslovili. Bez milionů za SEO."
              </p>
              <div className="border-t border-black/20 pt-6">
                <p className="font-satoshi text-lg font-bold text-black">
                  Printeria
                </p>
                <p className="font-mono text-base text-black/60">
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

export default PrinteriaPage;
