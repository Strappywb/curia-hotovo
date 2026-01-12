import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BudovaniZnackyPage = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16">
            <Link to="/blog" className="inline-flex items-center gap-2 font-mono text-black/60 hover:text-black mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Zpět na archiv
            </Link>
            <div className="mb-8">
              <span className="font-mono text-sm text-black/60">Branding</span>
              <span className="mx-4 text-black/30">•</span>
              <span className="font-mono text-sm text-black/60">5. 1. 2024</span>
            </div>
            <h1 className="font-satoshi text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8">
              Budování značky od základů
            </h1>
            <p className="font-mono text-xl text-black/70 leading-relaxed">
              Silná značka je víc než logo. Je to příběh, hodnoty a emoce, které vytváříte u svých zákazníků.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="w-full">
          <img 
            src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&h=800&fit=crop"
            alt="Budování značky"
            className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
          />
        </section>

        {/* Content */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-8 md:px-12 lg:px-16">
            <article className="prose prose-lg max-w-none">
              
              <h2 className="font-satoshi text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                Co je značka (a co není)
              </h2>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Značka není logo. Není to barevná paleta. Není to font. Není to vizuální identita. To vše jsou jen projevy značky – artefakty, které ji reprezentují. Značka samotná je něco jiného.
              </p>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Značka je soubor asociací, emocí a očekávání v mysli zákazníka. Je to to, co si lidé myslí a cítí, když slyší vaše jméno. Je to reputace, kterou jste vybudovali – nebo která se vybudovala bez vašeho vědomí.
              </p>

              <h2 className="font-satoshi text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                Proč na značce záleží
              </h2>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                V přehlceném trhu je značka jediný způsob, jak se odlišit. Produkty se dají kopírovat. Služby se dají napodobit. Ceny se dají podrazit. Ale značka je unikátní – nikdo jiný nemůže být vy.
              </p>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Silná značka umožňuje:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Vyšší ceny:</strong> Lidé platí premium za značky, kterým věří.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Nižší CAC:</strong> Známá značka konvertuje snadněji.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Vyšší LTV:</strong> Loajalita ke značce překonává cenové srovnávání.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Lepší talenty:</strong> Lidé chtějí pracovat pro značky, které respektují.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Odolnost:</strong> Silná značka přežije krize a chyby.
                </li>
              </ul>

              <h2 className="font-satoshi text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                Základy: Purpose, Vision, Mission
              </h2>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Každá silná značka stojí na jasném fundamentu. Tři pilíře, které musíte definovat:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Purpose (Proč):</strong> Proč existujete? Co je váš vyšší smysl? Nike: inspirovat sportovce. Patagonia: chránit přírodu.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Vision (Kam):</strong> Kam směřujete? Jaký svět chcete vytvořit? Tesla: svět na udržitelné energii.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Mission (Jak):</strong> Jak to děláte? Jaká je vaše denní práce? SpaceX: dělat lidstvo multiplanetárním.
                </li>
              </ul>

              <h2 className="font-satoshi text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                Hodnoty: Co je pro vás důležité
              </h2>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Hodnoty nejsou prázdná slova na zeď. Jsou to principy, podle kterých se rozhodujete. Jsou to filtry, které určují, co děláte a co neděláte. Koho zaměstnáte a koho ne. S kým spolupracujete a s kým ne.
              </p>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Dobré hodnoty jsou:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Specifické:</strong> "Radikální transparentnost" &gt; "Transparentnost"
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Akční:</strong> Dají se použít jako rozhodovací kritérium.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Rozlišující:</strong> Ne každý by se s nimi ztotožnil.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Autentické:</strong> Odpovídají tomu, jak skutečně fungujete.
                </li>
              </ul>

              <h2 className="font-satoshi text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                Positioning: Vaše místo v mysli
              </h2>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Positioning je strategická volba. Je to vědomé rozhodnutí, čím chcete být známí. Co chcete, aby si lidé vybavili, když slyší vaše jméno.
              </p>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Positioning statement má strukturu: Pro [cílová skupina], která [potřeba], je [značka] [kategorie], která [diferenciátor], protože [důvod věřit].
              </p>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Příklad: "Pro kreativní profesionály, kteří potřebují spolehlivý pracovní nástroj, je MacBook prémiový laptop, který kombinuje výkon s designem, protože Apple investuje do vlastních čipů optimalizovaných pro kreativní software."
              </p>

              <h2 className="font-satoshi text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                Brand Personality: Jaká je vaše značka jako člověk
              </h2>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Značky, které rezonují, mají lidské charakteristiky. Jsou jako člověk – s osobností, hlasem, stylem komunikace. Toto není metafora, je to strategický nástroj.
              </p>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Archetypy značek (podle Junga):
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Hrdina:</strong> Nike, Adidas. Překonávání překážek.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Mudrc:</strong> Google, TED. Hledání pravdy a poznání.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Tvůrce:</strong> Apple, LEGO. Inovace a sebevyjádření.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Rebel:</strong> Harley-Davidson, Diesel. Porušování pravidel.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Pečovatel:</strong> Johnson & Johnson, UNICEF. Ochrana a pomoc.
                </li>
              </ul>

              <h2 className="font-satoshi text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                Tone of Voice: Jak mluvíte
              </h2>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Tone of voice je konzistentní způsob, jakým značka komunikuje. Není to co říkáte, ale jak to říkáte. Formální nebo neformální? Seriózní nebo hravý? Technický nebo přístupný?
              </p>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Definujte tone of voice pomocí dimenzí:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Formální ↔ Neformální</strong>
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Seriózní ↔ Hravý</strong>
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Respektující ↔ Provokativní</strong>
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Věcný ↔ Emočnální</strong>
                </li>
              </ul>

              <h2 className="font-satoshi text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                Vizuální identita: Jak vypadáte
              </h2>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Vizuální identita je viditelný projev značky. Logo, barvy, typografie, fotografie, ilustrace. Každý element musí podporovat positioning a osobnost značky.
              </p>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Komponenty vizuální identity:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Logo:</strong> Symbol značky. Musí fungovat ve všech velikostech a kontextech.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Barvy:</strong> Primární, sekundární, akcentní. Každá s definovaným významem.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Typografie:</strong> Hlavní a doplňkové fonty. Hierarchie velikostí.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Fotografie:</strong> Styl, filtery, kompozice. Autentické vs. stock.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Ikony a ilustrace:</strong> Styl, tloušťka linií, úroveň detailu.
                </li>
              </ul>

              <h2 className="font-satoshi text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                Brand manuál: Dokumentace značky
              </h2>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Vše, co definujete, musí být zdokumentováno. Brand manuál je bible značky – komplexní dokument, který zajišťuje konzistenci napříč všemi touchpointy a časem.
              </p>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Co obsahuje kvalitní brand manuál:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Strategie:</strong> Purpose, vision, mission, hodnoty, positioning.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Osobnost:</strong> Archetyp, tone of voice, příklady komunikace.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Vizuál:</strong> Logo, barvy, typografie, fotografie, pravidla použití.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Aplikace:</strong> Příklady použití na různých materiálech.
                </li>
              </ul>

              <h2 className="font-satoshi text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                Brand experience: Žitá značka
              </h2>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Značka není to, co říkáte. Je to to, co děláte. Každá interakce se zákazníkem je příležitost značku posílit – nebo zničit. Zákaznická zkušenost je branding v akci.
              </p>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Touchpointy, kde se značka projevuje:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Před nákupem:</strong> Web, sociální sítě, reklama, PR.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Během nákupu:</strong> Prodejní proces, komunikace, fakturace.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Po nákupu:</strong> Onboarding, podpora, follow-up.
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Interní:</strong> Kultura, zaměstnanci, procesy.
                </li>
              </ul>

              <h2 className="font-satoshi text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                Měření značky
              </h2>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Značka se zdá neměřitelná, ale není. Existují metriky, které ukazují sílu a zdraví značky:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Brand awareness:</strong> Kolik lidí zná vaši značku?
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Brand recall:</strong> Vzpomenou si na vás, když řeknou kategorii?
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">NPS (Net Promoter Score):</strong> Doporučili by vás?
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Share of voice:</strong> Jak často se o vás mluví vs. konkurence?
                </li>
                <li className="font-mono text-lg text-black/80">
                  <strong className="text-black">Premium pricing:</strong> Můžete si účtovat víc než konkurence?
                </li>
              </ul>

              <h2 className="font-satoshi text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                Závěr: Značka jako dlouhodobá investice
              </h2>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Budování značky není sprint. Je to maraton. Výsledky se nedostavují přes noc – ale když přijdou, jsou trvalé. Silná značka je aktiva, které roste s časem a přináší compounding returns.
              </p>
              <p className="font-mono text-lg text-black/80 leading-relaxed mb-6">
                Investujte do značky dnes. Vaše budoucí já vám poděkuje.
              </p>

            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-[#722F37] py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-white mb-6">
              Připraveni budovat značku?
            </h2>
            <p className="font-mono text-lg text-white/70 mb-8">
              Pomůžeme vám vytvořit značku, která vydrží dekády.
            </p>
            <Link 
              to="/#contact" 
              className="inline-block bg-white text-black font-satoshi font-bold px-8 py-4 hover:bg-gray-100 transition-colors"
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

export default BudovaniZnackyPage;
