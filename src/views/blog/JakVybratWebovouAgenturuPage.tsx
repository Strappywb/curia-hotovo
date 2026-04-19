"use client";

import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const JakVybratWebovouAgenturuPage = () => {
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
              <span className="font-body font-semibold text-sm text-black/60">STRATEGIE</span>
              <span className="mx-4 text-black/30">•</span>
              <span className="font-body font-semibold text-sm text-black/60">19. 4. 2026</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8">
              Jak vybrat webovou agenturu: 10 kritérií, která rozhodují
            </h1>
            <p className="font-body font-semibold text-xl text-black/70 leading-relaxed">
              Špatný výběr agentury stojí měsíce času a desetitisíce korun. Tady je praktický návod, jak poznat profesionály od amatérů — a vybrat partnera, který váš projekt dotáhne do konce.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="w-full">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=800&fit=crop"
            alt="Tým webové agentury při práci na projektu"
            className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
          />
        </section>

        {/* Content */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-8 md:px-12 lg:px-16">
            <article className="prose prose-lg max-w-none">

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Proč je výběr agentury tak důležitý
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Web je vaše vizitka, obchodník a zákaznická linka v jednom. A agentura, kterou si vyberete, rozhodne o tom, jestli bude fungovat — nebo jestli za půl roku začnete znovu s někým jiným.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                V Česku působí tisíce webových agentur a freelancerů. Kvalita se dramaticky liší. Některé dodají profesionální web na čas a v rozpočtu. Jiné projekt protáhnou, předraží a výsledek neodpovídá zadání. Tady je návod, jak ty první poznat.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                1. Portfolio a reference: Důkazy místo slibů
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Portfolio je nejdůležitější ukazatel kvality. Nehodnoťte jen vizuální stránku — klikněte si na weby v portfoliu a otestujte je. Jsou rychlé? Fungují na mobilu? Mají dobré SEO?
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Zkontrolujte PageSpeed:</strong> Zadejte URL portfoliových webů do Google PageSpeed Insights. Pokud mají skóre pod 50, agentura neřeší výkon.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Hledejte podobné projekty:</strong> Agentura, která dělala e-shopy, nemusí umět firemní web na míru — a naopak.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Ptejte se na čísla:</strong> Nejlepší agentury ukáží, jak web ovlivnil byznys klienta. Konverze, návštěvnost, pozice v Googlu.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Ověřte reference:</strong> Zavolejte 2–3 bývalým klientům. Zeptejte se na komunikaci, dodržení termínů a spokojenost.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                2. Proces a komunikace
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Profesionální agentura má jasný proces. Ví, co bude následovat po podpisu smlouvy, a umí vám to vysvětlit. Pokud na otázku &quot;jak bude projekt probíhat?&quot; dostanete vágní odpověď — utíkejte.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Briefing a analýza:</strong> Dobrá agentura začíná otázkami, ne návrhy. Musí pochopit váš byznys, cílovou skupinu a cíle.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Wireframy před designem:</strong> Nejdřív struktura, pak vizuál. Pokud agentura přeskočí wireframy, nebude web funkční.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Pravidelné check-iny:</strong> Týdenní nebo dvoutýdenní update o stavu projektu. Žádné tříměsíční ticho.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Jeden kontaktní bod:</strong> Máte svého project managera? Nebo pokaždé mluvíte s někým jiným?
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                3. Technická kvalita a moderní technologie
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Rok 2026. Pokud agentura stále staví weby na zastaralých šablonách WordPress s desítkami pluginů, je to červená vlajka. Moderní web musí být rychlý, bezpečný a SEO-friendly od základu.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Rychlost:</strong> Web musí splňovat Core Web Vitals. LCP do 2,5s, INP do 200ms, CLS pod 0,1.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Responzivní design:</strong> Ne jen &quot;zobrazí se na mobilu&quot;, ale skutečně navržený pro mobilní uživatele.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Čistý kód:</strong> Sémantický HTML, správná heading struktura, přístupnost (WCAG).
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Bezpečnost:</strong> HTTPS, aktualizované závislosti, žádné známé zranitelnosti.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                4. SEO znalosti
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Spousta agentur říká, že &quot;dělá SEO&quot;. Ptejte se konkrétně: Jak řeší heading strukturu? Generuje web sitemap automaticky? Jak je to s kanonickými URL? Používají strukturovaná data?
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Agentura, která SEO řeší až po spuštění webu, ho neřeší vůbec. SEO se musí plánovat od začátku — od struktury URL přes nadpisy po rychlost načítání. Web bez SEO je jako obchod na konci slepé ulice.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                5. Transparentní cenotvorba
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Dobrá agentura vám řekne cenu — nebo rozmezí — dřív, než podepíšete cokoliv. Pokud dostáváte vyhýbavé odpovědi typu &quot;záleží na projektu&quot; bez jakéhokoliv rámce, je to problém.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Fixní cena vs. hodinová sazba:</strong> Fixní cena je předvídatelná. Hodinová sazba může eskalovat. Ideální je fixní cena za definovaný rozsah s jasným procesem pro změny.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Co je v ceně:</strong> Design, vývoj, obsah, SEO, testování, nasazení, zaškolení — vše musí být jasně definované.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Platební podmínky:</strong> Záloha 30–50 % je standard. 100 % předem je red flag. Platba až po dokončení je nerealistická.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                6. Vlastnictví kódu a nezávislost
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Jeden z nejdůležitějších bodů, na který firmy zapomínají. Po zaplacení musíte vlastnit veškerý kód, design i obsah. Pokud agentura používá proprietární CMS nebo vlastní platformu, jste na ní závislí navždy.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Ptejte se na technologii:</strong> Je to WordPress, Next.js, Webflow? Nebo vlastní systém, ke kterému nemáte přístup?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Přístup ke kódu:</strong> Máte Git repozitář? Hosting pod svým účtem? Přístupové údaje ke všemu?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Možnost odchodu:</strong> Můžete kdykoliv přejít k jiné agentuře bez ztráty webu?
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                7. Design zaměřený na konverze
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Pěkný web nestačí. Web musí plnit obchodní cíle — generovat poptávky, prodávat produkty nebo budovat důvěru. Pokud agentura mluví jen o estetice a nemluví o konverzích, UX a uživatelské cestě, hledejte dál.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Konkrétní otázky na agenturu:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Jak pracujete s CTA?</strong> Kam umístíte výzvy k akci? Jak je otestujete?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Jak měříte úspěch webu?</strong> Jaké KPI sledujete? Jaké nástroje používáte?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Děláte A/B testování?</strong> Jak optimalizujete konverzní poměr po spuštění?
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                8. Podpora po spuštění
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Web spuštěním neskončí — začíná. Potřebujete partnera, který bude reagovat na problémy, provádět aktualizace a pomáhat s rozvojem. Zeptejte se, jakou podporu agentura nabízí po spuštění.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">SLA (Service Level Agreement):</strong> Jaká je garantovaná doba reakce? 24 hodin? 48 hodin? Týden?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Údržba a aktualizace:</strong> Kdo aktualizuje CMS, pluginy, bezpečnostní záplaty?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Garanční období:</strong> Jak dlouho po spuštění opravuje agentura bugy zdarma?
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                9. Velikost agentury vs. freelancer
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Obojí má své výhody. Freelancer je levnější a flexibilnější, ale nemá zastupitelnost — když onemocní, projekt stojí. Agentura je dražší, ale nabízí tým specialistů a kontinuitu.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Freelancer:</strong> Vhodný pro menší projekty s jasným zadáním. Nižší cena, přímá komunikace. Riziko: kapacita a zastupitelnost.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Malá agentura (2–10 lidí):</strong> Nejlepší poměr cena/kvalita. Osobní přístup s týmovou zálohou. Ideální pro střední projekty.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Velká agentura (10+ lidí):</strong> Pro velké projekty a korporátní klienty. Vyšší cena, robustní procesy, ale možná méně flexibility.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                10. Červené vlajky: Kdy odejít
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Některé signály by vás měly okamžitě varovat:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Slibují první místo v Googlu:</strong> Nikdo nemůže garantovat organické pozice. Kdo to slibuje, lže.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Nemají vlastní web v pořádku:</strong> Pokud web agentury je pomalý, zastaralý nebo nefunkční — proč by váš byl lepší?
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Nechtějí ukázat portfolio:</strong> Profesionál se za svou práci nestydí. Pokud nemají co ukázat, nemají zkušenosti.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Tlačí na rychlý podpis:</strong> &quot;Tato cena platí jen do pátku&quot; je manipulace, ne obchodní nabídka.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Neřeší vaše cíle:</strong> Pokud agentura mluví jen o designu a nepůtá se na vaše obchodní cíle — hledají zakázku, ne partnerství.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Vše je &quot;jednoduché&quot;:</strong> Profesionál ví, že nic není jednoduché. Pokud na každý dotaz slyšíte &quot;to je easy&quot;, čekají vás problémy.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Checklist pro výběr webové agentury
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Projděte si tento seznam před finálním rozhodnutím:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Portfolio odpovídá vašim potřebám</strong>
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Reference od reálných klientů</strong>
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Jasný proces od briefingu po spuštění</strong>
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Transparentní cena a rozsah</strong>
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Vlastnictví kódu a designu</strong>
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">SEO jako součást projektu, ne doplněk</strong>
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Moderní technologie a rychlý web</strong>
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Podpora a údržba po spuštění</strong>
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Komunikace, která vám vyhovuje</strong>
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Žádné červené vlajky</strong>
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Závěr: Vybírejte partnera, ne dodavatele
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Webová agentura by neměla být někdo, kdo dostane zadání a dodá výstup. Měla by být partner, který rozumí vašemu byznysu, přichází s nápady a pomáhá vám růst. Vztah s agenturou je dlouhodobý — web potřebuje průběžnou péči, optimalizaci a rozvoj.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Investujte čas do výběru. Mluvte s více agenturami. Porovnejte nabídky. Ale nerozhodujte se jen podle ceny — nejlevnější nabídka vás většinou vyjde nejdráž.
              </p>

            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-black py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Hledáte agenturu, která dodává výsledky?
            </h2>
            <p className="font-body font-semibold text-lg text-white/70 mb-8">
              Řekneme vám na rovinu, jestli jsme pro váš projekt ti praví. Nezávazná konzultace zdarma.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-black font-heading px-8 py-4 hover:bg-gray-100 transition-colors"
            >
              Chci nezávaznou konzultaci
            </Link>
          </div>
        </section>

        <FooterNew />
      </main>
    </>
  );
};

export default JakVybratWebovouAgenturuPage;
