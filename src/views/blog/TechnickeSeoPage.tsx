"use client";

import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const TechnickeSeoPage = () => {
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
              Technické SEO: Základ, bez kterého vás Google ignoruje
            </h1>
            <p className="font-body font-semibold text-xl text-black/70 leading-relaxed">
              Obsah je král? Jen pokud ho Google dokáže přečíst. Technické SEO je neviditelný základ, na kterém stojí celá vaše viditelnost ve vyhledávání. Tady je kompletní průvodce.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="w-full">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=800&fit=crop"
            alt="Technické SEO - datová vizualizace a analytika"
            className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
          />
        </section>

        {/* Content */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-8 md:px-12 lg:px-16">
            <article className="prose prose-lg max-w-none">

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Co je technické SEO a proč ho řešit
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Technické SEO zahrnuje vše, co se děje &quot;pod kapotou&quot; vašeho webu. Není to o klíčových slovech nebo obsahu. Je to o tom, jak snadno Google dokáže váš web procházet, pochopit a zobrazit uživatelům.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Představte si to takto: obsah je motor vašeho auta. Technické SEO je podvozek, brzdy a převodovka. Bez nich se nikam nedostanete, i když máte sebelepší motor. Google penalizuje weby s technickými problémy — ne přímo, ale tím, že upřednostňuje ty, které jsou technicky bezchybné.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Core Web Vitals: Tři metriky, které rozhodují
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Od roku 2021 Google měří uživatelský zážitek pomocí Core Web Vitals. Jsou to tři konkrétní metriky, které přímo ovlivňují ranking. Pokud je nesplňujete, ztrácíte pozice.
              </p>

              <h3 className="font-heading text-xl md:text-2xl text-black mt-8 mb-4">
                LCP — Largest Contentful Paint
              </h3>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Měří, jak rychle se zobrazí největší viditelný element stránky (hero obrázek, hlavní nadpis, video). Cíl: <strong className="text-black">do 2,5 sekundy</strong>. Vše nad 4 sekundy je špatné.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Jak LCP zlepšit:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Optimalizované obrázky:</strong> WebP formát, správné rozměry, lazy loading pro obrázky pod ohybem.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Rychlý server:</strong> TTFB (Time to First Byte) pod 200ms. CDN pro statické soubory.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Preload kritických zdrojů:</strong> Fonty, hero obrázek, CSS — vše, co ovlivňuje first paint.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Minimalizace render-blocking JS:</strong> Async a defer atributy, code splitting, tree shaking.
                </li>
              </ul>

              <h3 className="font-heading text-xl md:text-2xl text-black mt-8 mb-4">
                INP — Interaction to Next Paint
              </h3>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Nahradil FID v roce 2024. Měří odezvu stránky na interakci uživatele — klik, tap, stisk klávesy. Cíl: <strong className="text-black">do 200 milisekund</strong>. Vše nad 500ms je špatné.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Typické problémy: těžký JavaScript, synchronní operace na hlavním vlákně, neoptimalizované event handlery. Řešení: debouncing, virtualizace dlouhých seznamů, web workers pro náročné výpočty.
              </p>

              <h3 className="font-heading text-xl md:text-2xl text-black mt-8 mb-4">
                CLS — Cumulative Layout Shift
              </h3>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Měří vizuální stabilitu stránky. Když se vám při čtení článku &quot;skočí&quot; obsah, protože se načetla reklama nebo obrázek — to je layout shift. Cíl: <strong className="text-black">CLS pod 0,1</strong>.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Jak CLS eliminovat:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Vždy nastavte rozměry:</strong> Každý obrázek a video musí mít definovaný width a height (nebo aspect-ratio).
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Font display swap:</strong> Zamezte neviditelnému textu při načítání fontů. Použijte font-display: swap.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Rezervujte místo pro dynamický obsah:</strong> Reklamy, embedy, lazy-loaded prvky — vše musí mít předem definovaný prostor.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                HTTPS: Bezpečnost jako ranking faktor
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                HTTPS je od roku 2014 potvrzený ranking signál. V roce 2026 je to absolutní minimum. Prohlížeče označují HTTP stránky jako &quot;nezabezpečené&quot;. Uživatelé jim nedůvěřují. Google je penalizuje.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Checklist pro HTTPS:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Platný SSL certifikát:</strong> Let&apos;s Encrypt je zdarma a stačí pro většinu webů.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">301 redirect z HTTP:</strong> Veškerý HTTP traffic musí být přesměrován na HTTPS.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Mixed content:</strong> Žádné HTTP zdroje (obrázky, skripty) na HTTPS stránce.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">HSTS header:</strong> Řekněte prohlížeči, aby vždy používal HTTPS.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Mobile-First Indexing: Google vidí mobilní verzi
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Google používá mobilní verzi vašeho webu jako primární zdroj pro indexaci. Ne desktopovou. Pokud mobilní verze má méně obsahu, horší strukturu nebo chybí na ní elementy — trpí celý web v rankingu.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Co musí mobilní verze splňovat:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Stejný obsah jako desktop:</strong> Žádné skrývání textu, sekcí nebo odkazů na mobilu.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Čitelný text bez zoomu:</strong> Minimální velikost fontu 16px pro body text.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Tap targets:</strong> Tlačítka a odkazy minimálně 48x48px s dostatečným rozestupem.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Viewport meta tag:</strong> {'<meta name="viewport" content="width=device-width, initial-scale=1">'} je povinný.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Správná struktura URL
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                URL je první věc, kterou Google při crawlování vidí. Čistá, srozumitelná URL pomáhá s indexací i s rankingem. A hlavně — pomáhá uživatelům pochopit, kam klikají.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Principy správné URL struktury:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Krátké a popisné:</strong> /sluzby/webdesign je lepší než /s/cat-12/page?id=456
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Pomlčky místo podtržítek:</strong> Google doporučuje pomlčky jako oddělovač slov.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Malá písmena:</strong> URL jsou case-sensitive. /Sluzby a /sluzby jsou dvě různé stránky.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Bez speciálních znaků:</strong> Žádná diakritika, mezery nebo speciální znaky v URL.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Logická hierarchie:</strong> URL by měla odrážet strukturu webu: /blog/technicke-seo je jasné.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Heading struktura: H1–H6 mají pravidla
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Nadpisy nejsou jen vizuální element. Jsou to sémantické signály pro Google. Říkají mu, o čem stránka je, co je hlavní téma a jak je obsah strukturovaný.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Jeden H1 na stránku:</strong> Hlavní téma. Obsahuje primární klíčové slovo. Ne dva, ne tři — jeden.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">H2 pro hlavní sekce:</strong> Podtémata. Každý H2 rozvíjí aspekt H1. Obsahuje sekundární klíčová slova.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">H3–H6 pro podsekce:</strong> Další úrovně detail. Dodržujte hierarchii — nikdy nepřeskakujte z H2 na H4.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Nepoužívejte nadpisy pro styling:</strong> Pokud potřebujete větší text, použijte CSS, ne H tag.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Optimalizace obrázků pro SEO
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Obrázky tvoří často 50–80 % velikosti stránky. Neoptimalizované obrázky zabíjejí rychlost, a tím i ranking. Každý obrázek na webu musí být optimalizovaný.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Moderní formáty:</strong> WebP nebo AVIF místo JPEG/PNG. Úspora 25–50 % při stejné kvalitě.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Správné rozměry:</strong> Neservírujte 4000px obrázek do 400px kontejneru. Srcset pro responzivní velikosti.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Popisné alt texty:</strong> Alt text popisuje obsah obrázku pro screen readery i Google. Zahrňte klíčové slovo přirozeně.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Lazy loading:</strong> Obrázky pod ohybem načítejte až když je uživatel potřebuje. Nativní loading=&quot;lazy&quot;.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Komprese:</strong> Každý obrázek komprimujte. Nástroje: Squoosh, Sharp, ImageOptim.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Přesměrování a stavové kódy
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Špatně nastavená přesměrování jsou jedním z nejčastějších technických problémů. Způsobují ztrátu link juice, zpomalují crawlování a matou uživatele.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">301 = permanentní přesměrování:</strong> Stránka se trvale přesunula. Přenáší ~90 % link equity.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">302 = dočasné přesměrování:</strong> Používejte jen pro skutečně dočasné situace. Nepřenáší link equity.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Řetězce přesměrování:</strong> A → B → C → D? Každý skok zvyšuje latenci. Maximálně 1 přesměrování.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">404 vs 410:</strong> 404 = stránka nenalezena (možná se vrátí). 410 = trvale odstraněna (Google ji odebere z indexu rychleji).
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Custom 404 stránka:</strong> Nabídněte uživateli alternativy — vyhledávání, populární stránky, navigaci zpět.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                JavaScript a SEO: Komplikovaný vztah
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Google umí renderovat JavaScript, ale ne perfektně a ne okamžitě. JS rendering je nákladný — Google musí stránku crawlovat, pak renderovat a pak znovu analyzovat. To stojí crawl budget a čas.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Nejlepší přístupy pro JS-heavy weby:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Server-Side Rendering (SSR):</strong> Stránka se renderuje na serveru. Google dostane hotový HTML. Next.js, Nuxt.js, Remix.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Static Site Generation (SSG):</strong> Stránky se vygenerují při buildu. Nejrychlejší možná varianta pro statický obsah.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Hybrid rendering:</strong> SSR pro důležité stránky, CSR pro interaktivní části. Moderní frameworky to umožňují ze boxu.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Dynamic rendering:</strong> Speciální verze pro boty. Poslední možnost — Google to toleruje, ale nedoporučuje.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Mezinárodní SEO: hreflang a vícejazyčnost
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Pokud váš web cílí na více jazyků nebo zemí, potřebujete hreflang tagy. Říkají Googlu, která verze stránky je pro kterou zemi a jazyk.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Bez hreflang tagů Google neví, že vaše české a slovenské stránky jsou varianty stejného obsahu. Může je považovat za duplicity a penalizovat obě.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Správný formát:</strong> {'<link rel="alternate" hreflang="cs" href="https://example.cz/sluzby">'}.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Reciproční odkazy:</strong> Každá jazyková verze musí odkazovat na všechny ostatní — včetně sebe.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">x-default:</strong> Výchozí verze pro uživatele, jejichž jazyk nemáte.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Audit technického SEO: Checklist
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Pravidelný audit je klíčový. Tady je kompletní checklist pro technické SEO audit:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Crawlabilita:</strong> Je web přístupný pro Googlebot? Robots.txt OK? Sitemap odeslaná?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Indexace:</strong> Jsou klíčové stránky v indexu? Existují nežádoucí stránky v indexu?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Rychlost:</strong> Core Web Vitals v zeleném? PageSpeed Insights score nad 90?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Mobilní optimalizace:</strong> Mobile-Friendly test od Googlu prošel?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">HTTPS:</strong> Funguje? Žádný mixed content? HSTS aktivní?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Kanonické tagy:</strong> Každá stránka má kanonický tag? Ukazuje na správnou URL?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Heading struktura:</strong> Jeden H1? Logická hierarchie H2–H6?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Strukturovaná data:</strong> Schema.org markup bez chyb? Testováno přes Rich Results Test?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Přesměrování:</strong> Žádné řetězce? Žádné smyčky? 301 místo 302 pro trvalé přesuny?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Broken links:</strong> Žádné interní 404? Žádné broken external links?
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Nástroje pro technické SEO
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Bez správných nástrojů je technické SEO střelbou naslepo. Tady je seznam nástrojů, které používáme a doporučujeme:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Google Search Console:</strong> Bezplatné. Základní diagnostika indexace, pokrytí, výkonu a Core Web Vitals.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">PageSpeed Insights:</strong> Měření rychlosti a Core Web Vitals pro konkrétní URL.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Screaming Frog:</strong> Crawler pro audit webu. Najde broken links, duplicity, chybějící alt texty, přesměrování.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Ahrefs / Semrush:</strong> Komplexní SEO platformy. Analýza zpětných odkazů, klíčových slov, konkurence.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Chrome DevTools:</strong> Lighthouse audit, síťová analýza, performance profiling. Zdarma v prohlížeči.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Závěr: Technické SEO je investice, ne náklad
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Technické SEO není sexy. Není to kreativní práce, která by se dala ukázat na Instagramu. Ale je to základ, bez kterého všechno ostatní padá. Nejlepší obsah na světě vám nepomůže, pokud ho Google nemůže přečíst.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Investujte do technického SEO na začátku. Proveďte audit. Opravte kritické chyby. Nastavte monitoring. A pak se soustřeďte na obsah a link building — s jistotou, že máte pevné základy.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Firmy, které technické SEO ignorují, platí daň v podobě ztracených pozic, ztracených zákazníků a ztracených peněz. Firmy, které ho řeší, mají neviditelnou konkurenční výhodu, kterou je těžké zkopírovat.
              </p>

            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-black py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Chcete audit technického SEO?
            </h2>
            <p className="font-body font-semibold text-lg text-white/70 mb-8">
              Provedeme kompletní analýzu vašeho webu a navrhneme konkrétní kroky ke zlepšení. Bezplatná konzultace.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-white text-black font-heading px-8 py-4 hover:bg-gray-100 transition-colors"
            >
              Chci SEO audit
            </Link>
          </div>
        </section>

        <FooterNew />
      </main>
    </>
  );
};

export default TechnickeSeoPage;
