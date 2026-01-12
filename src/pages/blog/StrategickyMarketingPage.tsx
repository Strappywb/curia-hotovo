import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const StrategickyMarketingPage = () => {
  return (
    <>
      <Helmet>
        <title>Síla strategického marketingu | CURIA Blog</title>
        <meta name="description" content="Efektivní marketing začíná pochopením vašeho publika. Jak vybudovat kampaň, která rezonuje a přináší výsledky." />
        <meta property="og:title" content="Síla strategického marketingu | CURIA Blog" />
        <meta property="og:description" content="Efektivní marketing začíná pochopením vašeho publika. Jak vybudovat kampaň, která rezonuje a přináší výsledky." />
        <link rel="canonical" href="https://curia.cz/blog/strategicky-marketing" />
      </Helmet>
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16">
            <Link to="/blog" className="inline-flex items-center gap-2 font-body font-semibold text-black/60 hover:text-black mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Zpět na archiv
            </Link>
            <div className="mb-8">
              <span className="font-body font-semibold text-sm text-black/60">Marketing</span>
              <span className="mx-4 text-black/30">•</span>
              <span className="font-body font-semibold text-sm text-black/60">10. 1. 2024</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8">
              Síla strategického marketingu
            </h1>
            <p className="font-body font-semibold text-xl text-black/70 leading-relaxed">
              Efektivní marketing začíná pochopením vašeho publika. Jak vybudovat kampaň, která rezonuje a přináší výsledky.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="w-full">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=800&fit=crop"
            alt="Strategický marketing"
            className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
          />
        </section>

        {/* Content */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-8 md:px-12 lg:px-16">
            <article className="prose prose-lg max-w-none">
              
              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Marketing není reklama
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Většina firem zaměňuje marketing s reklamou. Pustí kampaň na Facebooku, vytvoří pár bannerů a čekají zázraky. Pak jsou překvapení, že to nefunguje. Marketing není taktika. Je to strategie.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Reklama je jen jeden nástroj v arsenálu. A často ne ten nejdůležitější. Strategický marketing začíná daleko před prvním bannerem – začíná pochopením trhu, zákazníka a vlastní pozice.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Znát svého zákazníka
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                "Všichni" není cílová skupina. Čím přesněji definujete, komu prodáváte, tím efektivnější bude vaše komunikace. Persona není demografický profil – je to pochopení motivací, obav, přání a rozhodovacích procesů.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Otázky, které musíte zodpovědět:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Co je drží vzhůru v noci?</strong> Jaké problémy řeší?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Kde hledají informace?</strong> Google, sociální sítě, doporučení?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Kdo ovlivňuje jejich rozhodování?</strong> Partner, kolegové, influenceři?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Jaké mají námitky?</strong> Cena, čas, důvěra?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Co je přesvědčí?</strong> Reference, data, garance?
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Positioning: Vaše místo na trhu
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Positioning není to, co říkáte o sobě. Je to místo, které zaujímáte v mysli zákazníka. Volvo = bezpečnost. Apple = inovace. Rolex = status. Co je vaše značka?
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Silný positioning odpovídá na tři otázky: Pro koho jste? Čím se lišíte? Proč by vám měli věřit? Bez jasného positioningu jste komodita. A komodity soutěží jen cenou.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Funnel: Cesta zákazníka
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Nikdo nekupuje na první pohled. Zákazník prochází fázemi: povědomí, zájem, zvažování, rozhodnutí, akce, loajalita. Každá fáze vyžaduje jiný obsah, jiný přístup, jiné metriky.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Povědomí (Awareness):</strong> Blog, sociální sítě, PR. Cíl: dostat se na radar.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Zájem (Interest):</strong> E-book, webinář, newsletter. Cíl: vzdělávat a budovat důvěru.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Zvažování (Consideration):</strong> Case studies, demo, konzultace. Cíl: ukázat hodnotu.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Rozhodnutí (Decision):</strong> Nabídka, garance, urgence. Cíl: odstranit bariéry.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Akce (Action):</strong> Jednoduchý proces nákupu. Cíl: minimalizovat tření.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Loajalita (Loyalty):</strong> Onboarding, podpora, upsell. Cíl: maximalizovat LTV.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Content marketing: Hodnota napřed
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Tradiční marketing přerušuje. Content marketing přitahuje. Místo toho, abyste křičeli o svém produktu, vytváříte obsah, který lidé skutečně chtějí konzumovat. Vzděláváte, bavíte, inspirujete.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Principy efektivního content marketingu:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Kvalita &gt; kvantita:</strong> Jeden skvělý článek měsíčně &gt; 10 průměrných.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Konzistence:</strong> Pravidelnost buduje očekávání a návyky.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Distribuce:</strong> Vytvoření obsahu je polovina práce. Druhá je dostat ho k lidem.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Repurposing:</strong> Jeden obsah = mnoho formátů. Blog → video → podcast → infografika.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Paid media: Akcelerace růstu
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Placená reklama není náhrada za organický růst. Je to akcelerátor. Funguje nejlépe, když už máte ověřený produkt, jasnou value proposition a optimalizovanou konverzní cestu.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Klíčové metriky, které musíte sledovat:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">CAC (Customer Acquisition Cost):</strong> Kolik stojí získání zákazníka?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">LTV (Lifetime Value):</strong> Kolik zákazník přinese za celou dobu?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">ROAS (Return on Ad Spend):</strong> Kolik vyděláte na každou korunu v reklamě?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">CPL (Cost per Lead):</strong> Kolik stojí jeden lead?
                </li>
              </ul>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Zlaté pravidlo: LTV musí být minimálně 3× vyšší než CAC. Jinak neškálujete – jen utrácíte.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Email marketing: Vlastněné médium
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Sociální sítě jsou pronajatá půda. Algoritmy se mění, reach klesá, pravidla se přepisují. Email je vlastněné médium. Vaše databáze, vaše pravidla, přímý přístup k zákazníkovi.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Email má nejvyšší ROI ze všech marketingových kanálů. Za každou korunu investovanou do emailu průměrně získáte 36 Kč zpět. Budujte seznam od prvního dne.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Měření a optimalizace
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Co neměříte, neřídíte. Data jsou kompas strategického marketingu. Ale pozor na vanity metrics – líbí se, sdílení, zobrazení. Důležité jsou business metriky: leads, konverze, tržby.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Nastavte si dashboard s klíčovými metrikami. Sledujte trendy, ne jednotlivé dny. Testujte hypotézy. Iterujte na základě dat, ne pocitů.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Integrace kanálů
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Nejefektivnější marketing není single-channel. Je omnichannel. Zákazník vás vidí na Instagramu, přečte si blog, dostane email, klikne na retargeting, zavolá. Všechny kanály musí spolupracovat, sdílet jednotný message a designový jazyk.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Konzistence buduje důvěru. Fragmentovaná komunikace mate. Investujte do jednotného brand manuálu a dodržujte ho napříč všemi touchpointy.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Závěr: Marketing jako systém
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Strategický marketing není série izolovaných taktik. Je to systém, kde každý element podporuje ostatní. Brand buduje důvěru. Content vzdělává. Paid akceleruje. Email nurturuje. Web konvertuje.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Vybudování tohoto systému vyžaduje čas, investici a trpělivost. Ale výsledek je stroj na zákazníky, který pracuje, i když vy spíte.
              </p>

            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-[#CCFF00] py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-black mb-6">
              Potřebujete marketingovou strategii?
            </h2>
            <p className="font-body font-semibold text-lg text-black/70 mb-8">
              Pomůžeme vám vybudovat systém, který přináší zákazníky.
            </p>
            <Link 
              to="/#contact" 
              className="inline-block bg-black text-white font-heading px-8 py-4 hover:bg-gray-900 transition-colors"
            >
              Kontaktovat
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default StrategickyMarketingPage;
