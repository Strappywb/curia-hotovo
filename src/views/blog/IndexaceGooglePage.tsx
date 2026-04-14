"use client";

import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const IndexaceGooglePage = () => {
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
              <span className="font-body font-semibold text-sm text-black/60">SEO</span>
              <span className="mx-4 text-black/30">•</span>
              <span className="font-body font-semibold text-sm text-black/60">14. 4. 2026</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8">
              Jak dostat web do Googlu: Kompletní průvodce indexací
            </h1>
            <p className="font-body font-semibold text-xl text-black/70 leading-relaxed">
              Máte web, ale Google ho nezná? Indexace je první krok k tomu, aby vás zákazníci našli. Bez ní jste neviditelní. Tady je návod, jak to změnit — krok za krokem.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="w-full">
          <img 
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&h=800&fit=crop"
            alt="Google indexace a vyhledávání - analytický dashboard"
            className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
          />
        </section>

        {/* Content */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-8 md:px-12 lg:px-16">
            <article className="prose prose-lg max-w-none">

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Co je indexace a proč je klíčová
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Indexace je proces, při kterém Google prochází váš web, analyzuje obsah každé stránky a ukládá ho do své databáze — indexu. Teprve když je stránka zaindexovaná, může se zobrazit ve výsledcích vyhledávání.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Bez indexace neexistujete. Můžete mít nejkrásnější web na světě, nejlepší nabídku, dokonalý copywriting — pokud vás Google nemá v indexu, nikdo vás přes vyhledávání nenajde. To je realita, kterou mnoho firem podceňuje.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Jak Google funguje: Crawling, indexace a ranking
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Celý proces má tři fáze. Pochopení každé z nich je zásadní pro úspěch vašeho webu ve vyhledávání.
              </p>

              <h3 className="font-heading text-xl md:text-2xl text-black mt-8 mb-4">
                1. Crawling — procházení
              </h3>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Googlebot (crawler) systematicky prochází internet. Sleduje odkazy z jedné stránky na druhou. Když najde novou URL, přidá ji do fronty na zpracování. Crawluje HTML, CSS, JavaScript, obrázky i videa.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Důležité: Googlebot má omezený <strong className="text-black">crawl budget</strong> — množství zdrojů, které je ochoten věnovat vašemu webu. Velké a nepřehledné weby plné duplicit tento budget plýtvají. Malé, čisté weby ho využívají efektivně.
              </p>

              <h3 className="font-heading text-xl md:text-2xl text-black mt-8 mb-4">
                2. Indexace — uložení
              </h3>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Po crawlování Google analyzuje obsah stránky. Zkoumá text, nadpisy, obrázky, strukturovaná data a meta tagy. Pokud stránka splňuje kvalitativní kritéria, Google ji uloží do indexu. Pokud ne — ignoruje ji.
              </p>

              <h3 className="font-heading text-xl md:text-2xl text-black mt-8 mb-4">
                3. Ranking — řazení
              </h3>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Zaindexovaná stránka se objeví ve výsledcích vyhledávání. Ale kde? To určuje ranking — pozice ve výsledcích na základě stovek faktorů. Relevance, kvalita obsahu, rychlost, mobilní optimalizace, zpětné odkazy a desítky dalších signálů.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Google Search Console: Váš řídicí panel
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Google Search Console (GSC) je bezplatný nástroj od Googlu, bez kterého se při správě indexace neobejdete. Je to přímá komunikační linka mezi vámi a Googlem — ukazuje, jak Google vidí váš web.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Co vám Search Console prozradí:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Pokrytí indexu:</strong> Kolik stránek je zaindexovaných, kolik má chyby a kolik je vyloučených.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Výkon ve vyhledávání:</strong> Kliknutí, zobrazení, průměrná pozice a CTR pro jednotlivé dotazy.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Kontrola URL:</strong> Stav indexace konkrétní stránky — je zaindexovaná? Kdy byla naposledy crawlovaná?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Sitemap:</strong> Odeslání a monitoring XML sitemapy.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Core Web Vitals:</strong> Měření rychlosti a uživatelského zážitku.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                XML Sitemap: Mapa pro Googlebot
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                XML sitemap je soubor, který Googlu říká: &quot;Tady jsou všechny důležité stránky mého webu.&quot; Není to příkaz k indexaci — je to doporučení. Ale velmi silné doporučení.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Pravidla pro efektivní sitemapu:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Pouze kanonické URL:</strong> Žádné duplicity, žádné přesměrované stránky, žádné stránky s noindex.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Aktuální lastmod:</strong> Datum poslední úpravy musí odpovídat realitě. Googlebot si ověřuje, jestli neklamete.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Maximálně 50 000 URL:</strong> Limit na jeden soubor. Větší weby potřebují sitemap index.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Odeslaná v GSC:</strong> Po vytvoření sitemapu odešlete přes Search Console.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Robots.txt: Kdo kam smí
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Soubor robots.txt je první věc, kterou Googlebot na vašem webu čte. Definuje pravidla — které části webu smí procházet a které ne. Je to základní nástroj pro řízení crawl budgetu.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Typické chyby v robots.txt:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Blokování důležitých stránek:</strong> Nechtěný &quot;Disallow&quot; na klíčové sekce webu. Jeden špatný řádek = celá sekce neviditelná.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Blokování CSS/JS:</strong> Google potřebuje renderovat stránku. Pokud zablokujete styly nebo skripty, nevidí web správně.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Chybějící odkaz na sitemapu:</strong> Robots.txt by měl obsahovat cestu k vaší sitemapě.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Kanonické URL a duplicitní obsah
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Duplicitní obsah je tichý zabiják indexace. Pokud má váš web stejný obsah dostupný na více URL (s www a bez, s lomítkem a bez, HTTP a HTTPS), Google neví, kterou verzi zaindexovat. Výsledek? Žádná nebude rankovat dobře.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Řešení je kanonický tag — <strong className="text-black">{'<link rel="canonical">'}</strong>. Říká Googlu: &quot;Tohle je hlavní verze této stránky.&quot; Každá stránka by měla mít kanonický tag ukazující na sebe nebo na preferovanou verzi.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Další opatření proti duplicitám:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">301 přesměrování:</strong> Permanentní přesměrování z duplicitních URL na kanonickou verzi.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Konzistentní interní odkazy:</strong> Vždy linkujte na stejnou verzi URL.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Parametry URL:</strong> Řešte filtrování a řazení bez vytváření nových URL, nebo použijte kanonický tag.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Rychlost indexace: Jak ji urychlit
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Nový web nebo nová stránka se nemusí zaindexovat okamžitě. Google prioritizuje důvěryhodné a často aktualizované weby. Pokud jste nový, budete čekat déle. Ale existují způsoby, jak proces urychlit.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Požádat o indexaci v GSC:</strong> Funkce &quot;Kontrola URL&quot; → &quot;Požádat o indexaci&quot;. Funguje pro jednotlivé stránky.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Interní odkazy:</strong> Prolinkujte novou stránku z existujících, dobře indexovaných stránek.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Zpětné odkazy:</strong> Odkaz z externího důvěryhodného webu je silný signál pro Googlebot.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Sociální sdílení:</strong> Sdílejte nový obsah na sociálních sítích. Google to sleduje.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Aktualizovaná sitemap:</strong> Přidejte novou URL do sitemapy a odešlete ji znovu v GSC.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Nejčastější problémy s indexací
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Pokud vaše stránky nejsou v indexu, důvodů může být několik. Tady je checklist, který projděte:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Meta tag noindex:</strong> Zkontrolujte, zda stránka neobsahuje {'<meta name="robots" content="noindex">'}. Vývojáři ho často zapomenou odstranit po přechodu z testovacího prostředí.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Blokováno v robots.txt:</strong> Ověřte, že robots.txt neblokuje přístup ke stránce.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Chybný kanonický tag:</strong> Kanonický tag ukazuje na jinou stránku? Google indexuje tu druhou.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Nízká kvalita obsahu:</strong> Tenký, duplicitní nebo automaticky generovaný obsah Google přeskočí.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Chyby serveru (5xx):</strong> Pokud server odpovídá chybou, Googlebot to po čase vzdá. Monitorujte dostupnost.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">JavaScript rendering:</strong> SPA (Single Page Application) framework může způsobit, že Googlebot nevidí obsah. Řešení: server-side rendering nebo pre-rendering.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Interní linking: Struktura, kterou Google miluje
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Interní odkazy nejsou jen navigace pro uživatele. Jsou to signály pro Googlebot — říkají mu, které stránky jsou důležité a jak spolu souvisí. Dobrý interní linking zlepšuje crawlování i ranking.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Principy efektivního interního linkingu:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Plochá architektura:</strong> Každá stránka by měla být dostupná maximálně na 3 kliknutí od homepage.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Popisné anchor texty:</strong> &quot;Naše služby webdesignu&quot; je lepší než &quot;klikněte zde&quot;.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Kontextové odkazy:</strong> Odkazy v textu článku mají větší váhu než odkazy v patičce nebo navigaci.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Konzistence:</strong> Neměňte URL strukturu bez přesměrování. Rozbité odkazy = ztracená hodnota.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Strukturovaná data: Bonus pro výsledky vyhledávání
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Strukturovaná data (Schema.org markup) nepomáhají přímo s indexací, ale výrazně zlepšují zobrazení ve výsledcích vyhledávání. Rich snippety — hvězdičky, ceny, FAQ, breadcrumbs — zvyšují CTR o desítky procent.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Nejdůležitější typy strukturovaných dat:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Article:</strong> Pro blogové články. Zobrazuje autora, datum, náhledový obrázek.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">LocalBusiness:</strong> Pro firmy s fyzickou adresou. Zobrazuje kontakt, hodiny, recenze.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">FAQ:</strong> Zobrazuje otázky a odpovědi přímo ve výsledcích.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">BreadcrumbList:</strong> Zobrazuje navigační cestu v snippetu.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Monitoring a údržba indexace
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Indexace není jednorázový úkol. Je to průběžný proces, který vyžaduje monitoring. Google může stránky z indexu i odebrat — kvůli chybám, nízké kvalitě nebo technickým problémům.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Pravidelný audit by měl zahrnovat:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Kontrola pokrytí indexu v GSC:</strong> Sledujte trendy — roste počet zaindexovaných stránek? Klesá?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Audit crawlových chyb:</strong> 404 stránky, serverové chyby, přesměrovací smyčky.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Kontrola rychlosti:</strong> Core Web Vitals v GSC. LCP, FID, CLS — tři metriky, které Google měří.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Analýza logů serveru:</strong> Kdy Googlebot navštívil váš web? Jaké stránky crawloval? Jak často?
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Závěr: Indexace je základ všeho
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Než začnete řešit SEO, klíčová slova, link building nebo obsahovou strategii — ujistěte se, že Google váš web vůbec vidí. Indexace je základ. Bez ní je všechno ostatní zbytečné.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Nastavte Search Console. Vytvořte čistou sitemapu. Zkontrolujte robots.txt. Opravte kanonické tagy. Zrychlete web. A pak pravidelně monitorujte. Indexace není raketová věda — je to řemeslo, které vyžaduje pozornost k detailu a konzistenci.
              </p>

            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-[#1a1a2e] py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Potřebujete pomoct s indexací?
            </h2>
            <p className="font-body font-semibold text-lg text-white/70 mb-8">
              Zkontrolujeme váš web, najdeme problémy a navrhneme řešení. Bezplatná konzultace.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-white text-black font-heading px-8 py-4 hover:bg-gray-100 transition-colors"
            >
              Chci konzultaci zdarma
            </Link>
          </div>
        </section>

        <FooterNew />
      </main>
    </>
  );
};

export default IndexaceGooglePage;
