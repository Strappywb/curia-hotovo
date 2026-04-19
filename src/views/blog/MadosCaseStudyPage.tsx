"use client";

import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const MadosCaseStudyPage = () => {
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
              <span className="font-body font-semibold text-sm text-black/60">CASE STUDY</span>
              <span className="mx-4 text-black/30">•</span>
              <span className="font-body font-semibold text-sm text-black/60">19. 4. 2026</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8">
              MADOS: Jak jsme z produktového chaosu udělali prodejní stroj
            </h1>
            <p className="font-body font-semibold text-xl text-black/70 leading-relaxed">
              Třicet let výroby hliníkových fasád. Stovky produktů. Web, ve kterém se ztrácel i vlastní obchodní tým. Tohle je příběh o tom, jak jsme jeden informační labyrint proměnili v systém, který generuje kvalifikované poptávky sám.
            </p>
          </div>
        </section>

        {/* Video */}
        <section className="w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
          >
            <source src="/videos/newportfolio11.webm" type="video/webm" />
            <source src="/videos/newportfolio11.mp4" type="video/mp4" />
          </video>
        </section>

        {/* Content */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-8 md:px-12 lg:px-16">
            <article className="prose prose-lg max-w-none">

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Východisko
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                MADOS je prémiový výrobce hliníkových systémů a fasád. Třicetiletá tradice, precizní strojírenství, zakázky po celé Evropě. Problém nebyl v produktu — problém byl v tom, jak ho ukazovali světu.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Původní web trpěl tím, čím trpí většina průmyslových firem: všechno tam bylo, ale nikdo nic nenašel. Desítky zanořených podstránek, nepřehledná navigace, technické specifikace roztroušené napříč celým webem. Bounce rate šel nahoru. Obchodní oddělení trávilo hodiny tím, že od zákazníků doplňovalo základní parametry, které měl web dostat už v prvním kroku.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Co jsme řešili
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Nebylo to o redesignu. Redesign je nový nátěr na starou zeď. Tady šlo o přestavbu od základu — změnit způsob, jakým se člověk pohybuje od „zajímá mě hliníkový profil" k „tady je moje poptávka s výkresem".
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Definovali jsme tři problémy, které musí nový web vyřešit:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Roztříštěnost.</strong> Zákazník musel otevřít 20 tabů, aby porovnal profily. Každý klik byl šance, že odejde.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Nekvalitní poptávky.</strong> Formulář byl generický kontaktní formulář. Žádná kvalifikace, žádné parametry, žádný kontext.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Nulová autorita online.</strong> MADOS byl v oboru známý, ale Google o tom nevěděl. Žádný organický traffic na oborová klíčová slova.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Custom Product Engine
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Klíčové rozhodnutí celého projektu: místo tradičního větvení stránek (kategorie → podkategorie → produkt → detail) jsme navrhli systém interaktivních product popupů.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Uživatel zůstává v kontextu. Klikne na profil — otevře se overlay s technickými řezy, specifikacemi, galérií použití. Může porovnávat, aniž by opustil stránku. Může rovnou přejít k poptávce s předvyplněným produktem. Zero friction.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Tohle řešení neexistovalo jako hotový plugin. Navrhli jsme ho od nuly, protože žádná šablona neřeší problém průmyslového výrobce se stovkami technických produktů.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Inteligentní kvalifikace
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Kontaktní formulář jsme nahradili poptávkovým uzlem. Systém rozlišuje mezi koncovým zákazníkem a B2B partnerem. Vyžaduje nahrání výkresové dokumentace hned v prvním kroku. Tím odpadly vágní dotazy typu „kolik stojí fasáda" bez jakéhokoliv kontextu.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Obchodnímu týmu jsme ušetřili desítky hodin měsíčně. Místo doplňování informací začali rovnou kalkulovat. Konverzní cesta se zkrátila, kvalita leadů se zvedla.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Obsah jako autorita
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Web přestal být katalog a stal se vzdělávací platformou. Implementovali jsme content hub zaměřený na odborné long-tail dotazy z oblasti hliníkových systémů — to, co architekti a investoři skutečně hledají v Googlu.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Výsledek: 312% nárůst čtenosti odborných článků. MADOS se stal přirozenou autoritou pro architekty. Organický traffic narostl na klíčová oborová hesla, kde předtím neexistoval.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Technický stack
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Rychlost byla nepřijatelná na kompromis. Průmyslový web s objemnými galeriemi a technickými detaily musí zůstat svižný, i když uživatel prochází desítky produktů. Zvolili jsme moderní stack postavený na Vite — okamžitá odezva i při vykreslování high-res galerií a interaktivních technických řezů.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Web funguje bezchybně na desktopu v kanceláři, na tabletu přímo na stavbě i na mobilu v terénu. Protože to je realita tohohle oboru — rozhodnutí se nedělají jen za stolem.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Výsledky
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Čísla mluví srozumitelněji než popisy:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">+217 % relevantních poptávek.</strong> Ne víc formulářů — víc kvalitních formulářů s kompletními parametry.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">+312 % čtenost odborného obsahu.</strong> Z nuly na dominantní pozice v oborových klíčových slovech.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Zkrácení obchodního cyklu.</strong> Obchodníci přestali doplňovat informace a začali rovnou kalkulovat.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Nezávislost na doporučeních.</strong> MADOS získal vlastní digitální prodejní kanál. Přestal čekat, až mu někdo zavolá.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Co jsme se naučili
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Průmyslové weby jsou jiný svět. Uživatel není někdo, kdo scrolluje Instagram — je to architekt s konkrétní potřebou a omezeným časem. Design pro tenhle segment znamená eliminovat kroky, ne přidávat efekty.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Největší dopad neměl vizuální redesign. Měla ho změna architektury informací. Když člověk najde, co hledá, za dva kliky místo dvaceti — konvertuje. Tak jednoduché to je. A tak těžké to je udělat správně.
              </p>

            </article>
          </div>
        </section>

        {/* Project link */}
        <section className="w-full bg-neutral-50 py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <p className="font-body font-semibold text-lg text-black/60 mb-4">
              Kompletní projekt
            </p>
            <Link
              href="/projekty/mados"
              className="inline-block font-heading text-xl text-black underline hover:no-underline"
            >
              Zobrazit MADOS v portfoliu →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-black py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Máte podobný problém?
            </h2>
            <p className="font-body font-semibold text-lg text-white/70 mb-8">
              Ať už jste výrobce, developer nebo tech firma — pokud váš web nepracuje za vás, pojďme to změnit.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-black font-heading px-8 py-4 hover:bg-gray-100 transition-colors"
            >
              Promluvme si o vašem projektu
            </Link>
          </div>
        </section>

        <FooterNew />
      </main>
    </>
  );
};

export default MadosCaseStudyPage;
