import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WebKteryProdavaPage = () => {
  return (
    <>
      <Helmet>
        <title>Jak vytvořit web, který prodává | CURIA Blog</title>
        <meta name="description" content="Moderní webdesign není jen o estetice. Úspěšný web kombinuje vizuální přitažlivost s funkčností a konverzní strategií." />
        <meta property="og:title" content="Jak vytvořit web, který prodává | CURIA Blog" />
        <meta property="og:description" content="Moderní webdesign není jen o estetice. Úspěšný web kombinuje vizuální přitažlivost s funkčností a konverzní strategií." />
        <link rel="canonical" href="https://curia.cz/blog/web-ktery-prodava" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Jak vytvořit web, který prodává",
            "description": "Moderní webdesign není jen o estetice. Úspěšný web kombinuje vizuální přitažlivost s funkčností a konverzní strategií.",
            "author": {"@type": "Organization", "name": "CURIA"},
            "publisher": {"@type": "Organization", "name": "CURIA", "logo": {"@type": "ImageObject", "url": "https://curia.cz/favicon.svg"}},
            "datePublished": "2024-01-15",
            "mainEntityOfPage": "https://curia.cz/blog/web-ktery-prodava"
          }
        `}</script>
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
              <span className="font-body font-semibold text-sm text-black/60">Webdesign</span>
              <span className="mx-4 text-black/30">•</span>
              <span className="font-body font-semibold text-sm text-black/60">15. 1. 2024</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8">
              Jak vytvořit web, který prodává
            </h1>
            <p className="font-body font-semibold text-xl text-black/70 leading-relaxed">
              Moderní webdesign není jen o estetice. Úspěšný web kombinuje vizuální přitažlivost s funkčností a konverzní strategií. Tady je návod, jak na to.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="w-full">
          <img 
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&h=800&fit=crop"
            alt="Web který prodává"
            className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
          />
        </section>

        {/* Content */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-8 md:px-12 lg:px-16">
            <article className="prose prose-lg max-w-none">
              
              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Proč většina webů nefunguje
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                95% webů na internetu je mrtvých. Fungují jako digitální vizitky, které nikdo nečte. Problém není v designu. Problém je v přístupu. Většina firem staví web jako výlohu – hezkou, statickou, nefunkční.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Web, který prodává, není výloha. Je to prodavač. Pracuje 24/7. Nikdy nemá špatnou náladu. Nikdy nezapomene zmínit klíčové benefity. A hlavně – vždy vede návštěvníka k akci.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                První pravidlo: Jasný cíl
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Každá stránka musí mít jeden jasný cíl. Ne pět. Ne tři. Jeden. Když návštěvník přijde na váš web, musí okamžitě vědět, co má udělat. Zavolat? Vyplnit formulář? Koupit produkt?
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Rozptýlená pozornost = žádná konverze. Každý extra odkaz, každé další tlačítko, každý nepotřebný element snižuje šanci, že návštěvník udělá to, co chcete. Minimalismus není estetická volba. Je to strategická nutnost.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Hierarchie informací
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Lidé nečtou weby. Skenují je. Máte 3 sekundy na to, abyste zaujali. Pak další 3 sekundy na to, abyste udrželi pozornost. A pak dalších 10 sekund na to, abyste přesvědčili k akci.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Struktura stránky musí respektovat tuto realitu:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Nadpis (H1):</strong> Jasná hodnota. Co získám? Proč by mě to mělo zajímat?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Podnadpis:</strong> Rozšíření hodnoty. Jak to funguje? Pro koho to je?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Vizuální důkaz:</strong> Screenshot, video, fotka produktu.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Sociální důkaz:</strong> Reference, loga klientů, čísla.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">CTA:</strong> Jasná výzva k akci.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Rychlost je feature
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Každá sekunda načítání stojí konverze. Amazon zjistil, že 100ms zpoždění snižuje tržby o 1%. Google penalizuje pomalé weby v rankingu. Uživatelé odcházejí po 3 sekundách čekání.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Optimalizace rychlosti není technický detail. Je to byznysová priorita. Komprimované obrázky. Lazy loading. Minimální JavaScript. Rychlý hosting. Každá milisekunda se počítá.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Mobile-first není volba
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                60-70% trafficu přichází z mobilů. Pokud váš web nefunguje perfektně na telefonu, ztrácíte většinu potenciálních zákazníků. Mobile-first design znamená navrhovat nejdřív pro nejmenší obrazovku a pak rozšiřovat.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Tlačítka musí být dostatečně velká pro palec. Text čitelný bez zoomování. Formuláře jednoduché na vyplnění. Navigace intuitivní. Každý element testovaný na reálném zařízení.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Copywriting {'>'} Design
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Krásný design s průměrným textem prohrává s průměrným designem a skvělým textem. Slova prodávají. Design jen vytváří kontext pro ta slova. Investice do copywritera se vrátí mnohonásobně.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Principy efektivního copywritingu:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Benefity &gt; Features:</strong> Neprodáváte produkt, prodáváte transformaci.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Konkrétnost:</strong> "Ušetříte 5 hodin týdně" &gt; "Ušetříte čas"
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Urgence:</strong> Proč by měl jednat teď?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Sociální důkaz:</strong> Ostatní to už udělali.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Testování a iterace
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Web není projekt s koncem. Je to proces. Launch je začátek, ne konec. A/B testování, heatmapy, analýza chování uživatelů – to jsou nástroje, které odhalí, co funguje a co ne.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Malé změny mají velké dopady. Barva tlačítka. Pozice formuláře. Délka nadpisu. Testujte hypotézy, měřte výsledky, iterujte. Web, který prodává, se neustále zlepšuje.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                SEO jako základ
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Nejkrásnější web je k ničemu, když ho nikdo nenajde. SEO není magie – je to technická disciplína s jasnými pravidly. Správná struktura nadpisů. Meta tagy. Rychlost načítání. Mobilní optimalizace. Kvalitní obsah.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Google hodnotí stovky faktorů, ale základy jsou jednoduché: tvořte obsah pro lidi, ne pro roboty. Odpovídejte na otázky, které vaši zákazníci skutečně pokládají. Buďte relevantní, buďte užiteční, buďte nejlepší odpovědí na jejich dotaz.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Psychologie konverze
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Lidé nekupují racionálně. Kupují emocionálně a pak racionalizují. Váš web musí oslovit obě části mozku. Emoce přitáhnou pozornost. Logika uzavře obchod.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Principy, které fungují:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Reciprocita:</strong> Dejte hodnotu zadarmo (e-book, konzultace, nástroj).
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Nedostatek:</strong> Omezená nabídka, časově limitovaná akce.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Autorita:</strong> Certifikáty, publikace, vystoupení.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Konzistence:</strong> Malé závazky vedou k velkým.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Oblíbenost:</strong> Lidé kupují od lidí, které mají rádi.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Závěr: Web jako investice
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Kvalitní web není náklad. Je to investice s měřitelnou návratností. Každá koruna vložená do správného webu se vrací v podobě leadů, prodejů, růstu značky.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Nešetřete na základech. Nešetřete na strategii. Nešetřete na exekuci. Web, který prodává, je konkurenční výhoda, kterou vaši soupeři nemohou snadno zkopírovat.
              </p>

            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-black py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Chcete web, který prodává?
            </h2>
            <p className="font-body font-semibold text-lg text-white/70 mb-8">
              Napište nám. Probereme, jak můžeme pomoct.
            </p>
            <Link 
              to="/#contact" 
              className="inline-block bg-white text-black font-heading px-8 py-4 hover:bg-gray-100 transition-colors"
            >
              Kontaktovat
            </Link>
          </div>
        </section>

        <FooterNew />
      </main>
    </>
  );
};

export default WebKteryProdavaPage;
