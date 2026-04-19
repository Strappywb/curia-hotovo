"use client";

import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const CenaWebuPage = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16">
            <Link href="/blog" className="inline-flex items-center gap-2 font-body font-semibold text-black/60 hover:text-black mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Zpět na archiv
            </Link>
            <div className="mb-8">
              <span className="font-body font-semibold text-sm text-black/60">WEBDESIGN</span>
              <span className="mx-4 text-black/30">•</span>
              <span className="font-body font-semibold text-sm text-black/60">19. 4. 2026</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8">
              Kolik stojí web v roce 2026: Reálné ceny a co za ně dostanete
            </h1>
            <p className="font-body font-semibold text-xl text-black/70 leading-relaxed">
              Cena webu se pohybuje od 15 000 Kč po statisíce. Rozdíl není jen v designu — je v tom, co vám web skutečně vydělá. Tady je kompletní přehled cen, faktorů a typů webů.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="w-full">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=800&fit=crop"
            alt="Kalkulace ceny webu - laptop s kalkulačkou a poznámkami"
            className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
          />
        </section>

        {/* Content */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-8 md:px-12 lg:px-16">
            <article className="prose prose-lg max-w-none">

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Proč se ceny webů tak liší
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Zeptáte se tří agentur na cenu webu a dostanete tři úplně jiná čísla. Jedna řekne 20 000 Kč, druhá 80 000 Kč, třetí 250 000 Kč. Všechny mají pravdu — protože každá nabízí něco jiného.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Cena webu závisí na čtyřech klíčových faktorech: <strong className="text-black">rozsah</strong> (kolik stránek a funkcí), <strong className="text-black">design</strong> (šablona vs. na míru), <strong className="text-black">technologie</strong> (WordPress vs. custom řešení) a <strong className="text-black">strategie</strong> (jestli web řeší jen vizitku, nebo konverze a SEO).
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Cena webu podle typu: Přehled pro rok 2026
              </h2>

              <h3 className="font-heading text-xl md:text-2xl text-black mt-8 mb-4">
                Jednoduchý prezentační web (vizitka)
              </h3>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                <strong className="text-black">Cenové rozmezí: 15 000 – 40 000 Kč</strong>
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Základní web s 3–5 stránkami. Úvodní stránka, o nás, služby, kontakt. Většinou na šabloně WordPress nebo Webflow. Vhodný pro živnostníky a malé firmy, které potřebují online přítomnost, ale nepotřebují generovat leads přes web.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Co dostanete:</strong> Responzivní design, základní SEO, kontaktní formulář, napojení na Google Analytics.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Co nedostanete:</strong> Unikátní design, konverzní strategii, pokročilé SEO, custom funkce.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Doba realizace:</strong> 1–3 týdny.
                </li>
              </ul>

              <h3 className="font-heading text-xl md:text-2xl text-black mt-8 mb-4">
                Firemní web s designem na míru
              </h3>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                <strong className="text-black">Cenové rozmezí: 50 000 – 150 000 Kč</strong>
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Web s 5–15 stránkami, unikátním designem a promyšlenou strukturou. Zahrnuje analýzu cílové skupiny, wireframy, originální grafiku a základní konverzní prvky. Vhodný pro střední firmy, které chtějí profesionální online prezentaci.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Co dostanete:</strong> Originální design, UX analýza, responzivita, SEO optimalizace, CMS pro správu obsahu.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Co nedostanete:</strong> Pokročilé integrace, e-commerce, custom aplikační logiku.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Doba realizace:</strong> 4–8 týdnů.
                </li>
              </ul>

              <h3 className="font-heading text-xl md:text-2xl text-black mt-8 mb-4">
                Konverzní web se strategií
              </h3>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                <strong className="text-black">Cenové rozmezí: 100 000 – 300 000 Kč</strong>
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Tady začíná web, který skutečně vydělává. Zahrnuje kompletní strategii — analýzu konkurence, definici person, konverzní cestu, A/B testování, pokročilé SEO a měření výkonu. Design je podřízený obchodním cílům, ne estetice.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Co dostanete:</strong> Marketingová strategie, konverzní design, technické SEO, analytika, lead generation, rychlý web na moderním stacku.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Co nedostanete:</strong> Levnou vizitku. Tento typ webu je investice s měřitelnou návratností.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Doba realizace:</strong> 6–12 týdnů.
                </li>
              </ul>

              <h3 className="font-heading text-xl md:text-2xl text-black mt-8 mb-4">
                E-shop
              </h3>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                <strong className="text-black">Cenové rozmezí: 80 000 – 500 000+ Kč</strong>
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                E-shop na Shopify nebo WooCommerce s desítkami produktů začíná kolem 80 000 Kč. Custom e-commerce řešení s napojením na ERP, skladové systémy a vlastní logiku může přesáhnout půl milionu. Záleží na počtu produktů, platebních bránách, logistice a integraci.
              </p>

              <h3 className="font-heading text-xl md:text-2xl text-black mt-8 mb-4">
                Webová aplikace na míru
              </h3>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                <strong className="text-black">Cenové rozmezí: 200 000 – 2 000 000+ Kč</strong>
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                SaaS produkty, interní systémy, portály s uživatelskými účty, dashboardy s real-time daty. Tady už nejde o web — jde o software. Cena závisí na komplexitě, počtu uživatelských rolí, integrací a bezpečnostních požadavků.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Co ovlivňuje cenu webu nejvíc
              </h2>

              <h3 className="font-heading text-xl md:text-2xl text-black mt-8 mb-4">
                Design: Šablona vs. originál
              </h3>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Šablonový web stojí zlomek ceny, ale vypadá jako tisíce dalších webů. Originální design je dražší, protože zahrnuje výzkum, wireframing, iterace a testování. Investice do designu na míru se vrací ve vyšší důvěryhodnosti a konverzním poměru.
              </p>

              <h3 className="font-heading text-xl md:text-2xl text-black mt-8 mb-4">
                Technologie a CMS
              </h3>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                WordPress je nejlevnější a nejrozšířenější. Webflow nabízí vizuální editor bez kódu. Next.js a custom řešení jsou nejdražší, ale nejrychlejší a nejflexibilnější. Volba technologie závisí na vašich potřebách — ne na tom, co je trendy.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">WordPress:</strong> Nejnižší vstupní náklady, obrovský ekosystém pluginů. Vyšší náklady na údržbu a bezpečnost.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Webflow:</strong> Vizuální builder, hostuje za vás. Omezení u komplexních funkcí.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Next.js / React:</strong> Maximální výkon a flexibilita. Vyšší počáteční investice, nižší provozní náklady.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Shopify:</strong> Pro e-shopy. Rychlý start, předvídatelné měsíční náklady.
                </li>
              </ul>

              <h3 className="font-heading text-xl md:text-2xl text-black mt-8 mb-4">
                Obsah a copywriting
              </h3>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Překvapivě mnoho firem zapomíná na rozpočet pro obsah. Profesionální copywriting stojí 2 000 – 5 000 Kč za stránku. Kvalitní texty ale dramaticky zvyšují konverze. Web s dobrým designem a špatnými texty neprodává.
              </p>

              <h3 className="font-heading text-xl md:text-2xl text-black mt-8 mb-4">
                SEO optimalizace
              </h3>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Základní SEO (meta tagy, nadpisy, rychlost) by mělo být součástí každého webu. Pokročilé SEO — keyword research, content strategie, link building, technický audit — je samostatná investice od 10 000 Kč měsíčně. Bez SEO máte web, který nikdo nenajde.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Skryté náklady, na které se zapomíná
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Cena webu nekončí spuštěním. Existují průběžné náklady, které je potřeba zahrnout do rozpočtu:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Hosting:</strong> 100 – 5 000 Kč/měsíc podle typu. Sdílený hosting je levný, ale pomalý. Cloud hosting (Vercel, AWS) je rychlý, ale dražší.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Doména:</strong> 200 – 500 Kč/rok pro .cz doménu. Premium domény mohou stát tisíce.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">SSL certifikát:</strong> Zdarma přes Let&apos;s Encrypt, nebo 1 000 – 5 000 Kč/rok pro EV certifikát.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Údržba a aktualizace:</strong> 1 000 – 10 000 Kč/měsíc. WordPress pluginy je potřeba aktualizovat. Bezpečnostní záplaty. Nové funkce.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Analytika a reporting:</strong> Google Analytics je zdarma. Pokročilé nástroje (Hotjar, Ahrefs, Semrush) stojí 500 – 5 000 Kč/měsíc.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Levný web vs. drahý web: Co se vyplatí
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Levný web není vždy špatný a drahý web není vždy dobrý. Klíčové je, aby cena odpovídala hodnotě, kterou web přináší. Pokud váš web generuje 10 poptávek měsíčně a průměrná zakázka vynese 50 000 Kč, investice 200 000 Kč do webu se vrátí za méně než měsíc.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Naopak — pokud jste freelancer a potřebujete jen vizitku s kontaktem, investice 300 000 Kč do webu nedává smysl. Web za 30 000 Kč splní stejný účel.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Ptejte se: <strong className="text-black">Kolik mi web vydělá?</strong> Ne kolik stojí. Cena je jednorázová, ale špatný web vás stojí každý den — v ušlých poptávkách, ztracených zákaznících a poškozené reputaci.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Jak ušetřit bez kompromisů na kvalitě
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Připravte si podklady předem:</strong> Texty, fotky, logo, brand manuál. Čím víc materiálu dodáte, tím méně hodin agentura stráví přípravou.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Jasně definujte rozsah:</strong> &quot;Chci web&quot; je nejdražší zadání. &quot;Chci 7 stránek s kontaktním formulářem a blogem&quot; ušetří desítky hodin konzultací.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Zvolte správnou technologii:</strong> Nepotřebujete Next.js pro web s 5 stránkami. Nepotřebujete WordPress pro statický web bez blogu.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Investujte postupně:</strong> Začněte s MVP — minimálním životaschopným webem. Přidávejte funkce podle dat, ne podle pocitu.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Nekupujte zbytečné funkce:</strong> Chatbot, animace, 3D efekty — vypadají cool, ale většinou nezvyšují konverze.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Na co se ptát při výběru dodavatele
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Než podepíšete smlouvu, položte tyto otázky:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Co přesně je v ceně?</strong> Design, vývoj, obsah, SEO, hosting, údržba — co je zahrnuto a co ne?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Kolik revizí je v ceně?</strong> Neomezené revize zní hezky, ale obvykle vedou k nekončícímu projektu.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Kdo vlastní kód a design?</strong> Po zaplacení by vše mělo být vaše. Pozor na proprietární CMS, kde jste závislí na dodavateli.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Jaký je harmonogram?</strong> Realistický odhad. Pokud agentura slibuje custom web za 2 týdny, buďte opatrní.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Jaké jsou provozní náklady po spuštění?</strong> Hosting, údržba, aktualizace, podpora — kolik budete platit měsíčně?
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Závěr: Cena webu je investice do růstu
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Správná otázka není &quot;kolik stojí web?&quot; ale &quot;kolik mě stojí špatný web?&quot;. Každý den, kdy váš web neprodává, nekonvertuje a nebuduje důvěru, vás stojí peníze. Ne přímo — ale v ušlých příležitostech.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Investujte do webu, který odpovídá vašim obchodním cílům. Ne víc, ne míň. A vyberte si partnera, který rozumí nejen designu a kódu, ale i vašemu byznysu.
              </p>

            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-black py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Chcete vědět, kolik by stál váš web?
            </h2>
            <p className="font-body font-semibold text-lg text-white/70 mb-8">
              Pošlete nám zadání a do 48 hodin vám připravíme nezávaznou cenovou nabídku na míru.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-black font-heading px-8 py-4 hover:bg-gray-100 transition-colors"
            >
              Chci cenovou nabídku
            </Link>
          </div>
        </section>

        <FooterNew />
      </main>
    </>
  );
};

export default CenaWebuPage;
