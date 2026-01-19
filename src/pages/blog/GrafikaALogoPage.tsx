import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const GrafikaALogoPage = () => {
  return (
    <>
      <Helmet>
        <title>Grafický design a logo: Když forma následuje funkci | CURIA Blog</title>
        <meta name="description" content="Grafický design není dekorace. Je to nástroj komunikace, který musí splnit konkrétní obchodní cíl. Jak na logo, které skutečně funguje." />
        <meta name="keywords" content="grafický design, logo design, vizuální identita, branding, typografie" />
        <meta property="og:title" content="Grafický design a logo: Když forma následuje funkci | CURIA Blog" />
        <meta property="og:description" content="Grafický design není dekorace. Je to nástroj komunikace, který musí splnit konkrétní obchodní cíl." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://curia.cz/blog/grafika-a-logo" />
        <meta property="og:image" content="https://curia.cz/og-image.png" />
        <link rel="canonical" href="https://curia.cz/blog/grafika-a-logo" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Grafický design a logo: Když forma následuje funkci",
            "description": "Grafický design není dekorace. Je to nástroj komunikace, který musí splnit konkrétní obchodní cíl.",
            "author": {"@type": "Organization", "name": "CURIA"},
            "publisher": {"@type": "Organization", "name": "CURIA", "logo": {"@type": "ImageObject", "url": "https://curia.cz/favicon.svg"}},
            "datePublished": "2026-01-15",
            "mainEntityOfPage": "https://curia.cz/blog/grafika-a-logo"
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
              <span className="font-body font-semibold text-sm text-black/60">Grafický design</span>
              <span className="mx-4 text-black/30">•</span>
              <span className="font-body font-semibold text-sm text-black/60">15. 1. 2026</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8">
              Grafický design a logo: Když forma následuje funkci
            </h1>
            <p className="font-body font-semibold text-xl text-black/70 leading-relaxed">
              Grafický design není dekorace. Je to nástroj komunikace, který musí splnit konkrétní obchodní cíl. Jak na logo, které skutečně funguje.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="w-full">
          <img 
            src="https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=1600&h=800&fit=crop"
            alt="Grafický design"
            className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
          />
        </section>

        {/* Content */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-8 md:px-12 lg:px-16">
            <article className="prose prose-lg max-w-none">
              
              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Design není umění
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Umění existuje pro sebe. Design existuje pro řešení problému. Logo není abstraktní malba – je to komunikační nástroj, který má za sekundu předat informaci o tom, kdo jste a co děláte.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Když se díváte na logo Apple, Nike, Mercedes, vidíte jednoduché tvary. Ale každý z nich okamžitě vyvolává specifické asociace. To není náhoda. To je výsledek strategického designu.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Logo musí fungovat v 0,1 sekundy
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Lidský mozek zpracovává vizuální informace extrémně rychle. Máte zlomek sekundy na to, abyste vytvořili první dojem. Proto nejlepší loga dodržují tyto principy:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Jednoduchost:</strong> Čím méně prvků, tím lepší zapamatovatelnost. Nike Swoosh je křivka. Apple je jablko. To je vše.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Rozpoznatelnost:</strong> Logo musí fungovat v černobílé verzi, na malém displeji, na billboardu. Pokud ztrácí čitelnost, není dobré.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Relevance:</strong> Logo luxusního hotelu nemůže vypadat jako logo fastfoodu. Forma musí odpovídat positioning značky.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Nadčasovost:</strong> Trendy rychle zastarávají. Dobré logo vydrží minimálně 10 let bez velkých změn.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Typografie: Skrytá zbraň identity
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Výběr fontu není estetická volba. Je to strategické rozhodnutí. Serif fonty (patkové) signalizují tradici, serióznost, stabilitu. Sans-serif (bezpatkové) jsou moderní, čisté, přímočaré.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Když se podíváte na logos bank – většina používá serif fonty. Když se podíváte na tech startupy – převládají sans-serif. To není náhoda. To je vizuální komunikace positioning.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                <strong>Pravidlo:</strong> Font musí být čitelný minimálně ve třech variantách – na tištěném materiálu, na webu, na mobilním displeji. Pokud některá z těchto aplikací selhává, font není správný.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Barvy: Psychologie za designem
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Barvy nejsou jen estetický prvek. Jsou to komunikační nástroje, které vyvolávají specifické emoce a asociace:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Modrá:</strong> Důvěra, stabilita, profesionalita. Proto ji používají banky, tech společnosti, zdravotnictví.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Červená:</strong> Energie, akce, urgence. McDonald's, Coca-Cola, Netflix – značky, které chtějí vyvolat reakci.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Zelená:</strong> Růst, zdraví, udržitelnost. Whole Foods, Spotify, Android.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Černá:</strong> Luxus, exkluzivita, sofistikovanost. Chanel, Prada, Apple (v určitých kontextech).
                </li>
              </ul>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Výběr barvy není o tom, co se vám líbí. Je o tom, jakou emoci chcete vyvolat a jak se chcete odlišit od konkurence. Pokud všichni ve vašem odvětví používají modrou, máte dvě možnosti – být další modrá značka v davu, nebo vědomě zvolit jinou barvu a vyčnívat.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Škálovatelnost: Od vizitky po billboard
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Logo, které funguje pouze na webu, není dobré logo. Vizuální identita musí být škálovatelná napříč všemi médii:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Minimum size:</strong> Logo musí být čitelné i v rozměru 1×1 cm (favicon, social media profil).
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Maximum size:</strong> Logo musí fungovat na billboardu 8×3 metry bez ztráty ostrosti (vektorový formát).
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Různé poměry:</strong> Horizontální, vertikální, čtvercová varianta. Bez této flexibility jste limitováni v aplikacích.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Různá pozadí:</strong> Logo musí fungovat na bílém, černém, barevném pozadí. Pokud potřebuje vždy specifické pozadí, máte problém.
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Brand Guidelines: Systém, ne chaos
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Logo samo o sobě nestačí. Potřebujete kompletní vizuální systém – brand guidelines, který definuje:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Použití loga:</strong> Jaké varianty existují, kdy se používají, minimální velikosti, ochranné zóny.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Barevná paleta:</strong> Primární a sekundární barvy, CMYK, RGB, HEX hodnoty, pravidla použití.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Typografie:</strong> Hlavní a podpůrné fonty, hierarchie, velikosti, pravidla použití.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Imagery:</strong> Jaký styl fotografií a ilustrací odpovídá značce. Tone of voice vizuálu.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Aplikace:</strong> Konkrétní příklady použití na vizitky, papírnictví, web, sociální sítě, reklamy.
                </li>
              </ul>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Bez těchto pravidel každý interní tým, agentura nebo freelancer vytvoří jinou verzi vašeho brandu. Výsledek? Vizuální chaos, který oslabuje rozpoznatelnost značky.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Kdy redesign má smysl (a kdy ne)
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Redesign loga je riskantní. Měníte vizuální kotvu, kterou lidé spojují s vaší značkou. Dává smysl pouze když:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Expansion:</strong> Rozšiřujete se do nového segmentu a současné logo není relevantní.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Merger:</strong> Spojujete dvě firmy a potřebujete novou společnou identitu.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Legacy debt:</strong> Současné logo je technicky špatné (nízká kvalita, nemožnost škálování).
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Negative associations:</strong> Logo je spojené s krizí nebo problémem, který musíte přepsat.
                </li>
              </ul>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Redesign jen proto, že "chceme modernější logo" je často chyba. Pokud současné logo plní svou funkci a má silné brand equity, evoluce je lepší než revoluce.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Grafika pro digitál: Co se změnilo
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                V digitálním prostředí platí jiná pravidla než v tištěných médiích:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Mobilní first:</strong> Více než 60 % trafficu je z mobilů. Pokud vaše grafika nefunguje na 5" displeji, máte problém.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Rychlost načítání:</strong> Každý KB navíc prodlužuje load time. Optimalizace grafiky není volitelná.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Dark mode:</strong> Vaše logo musí fungovat i v tmavém režimu. Černé logo na černém pozadí selže.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Animace:</strong> Statické logo je minulost. Mikro-animace zvyšují engagement a zapamatovatelnost.
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Adaptivita:</strong> Logo musí fungovat v různých crop ratios pro sociální sítě (1:1, 16:9, 9:16).
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Měření efektivity designu
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Design, který nelze změřit, je jen dekorace. Dobrý grafický design má měřitelný dopad:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Brand recall:</strong> Kolik lidí si vaše logo vybaví bez nápovědy? (měřeno průzkumy)
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Recognition speed:</strong> Jak rychle lidé identifikují vaši značku mezi konkurencí? (eye-tracking studie)
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Conversion impact:</strong> Jak nový design ovlivnil conversion rate na webu? (A/B testing)
                </li>
                <li className="font-body font-semibold text-lg text-black/80">
                  <strong className="text-black">Social engagement:</strong> Jak vizuální styl ovlivňuje engagement na sociálních sítích?
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl text-black mt-12 mb-6">
                Závěr: Design jako investice, ne náklad
              </h2>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Kvalitní grafický design není expense, je to investment. Logo, které funguje 10 let, generuje hodnotu každý den. Vizuální systém, který snižuje náklady na produkci marketingových materiálů, šetří peníze každý měsíc.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                Rozdíl mezi průměrným a excelentním designem není v ceně za hodinu designéra. Je v tom, že excelentní design řeší skutečný business problém a vytváří měřitelnou hodnotu.
              </p>
              <p className="font-body font-semibold text-lg text-black/80 leading-relaxed mb-6">
                <strong>Forma následuje funkci. Vždy.</strong>
              </p>

              {/* CTA */}
              <div className="mt-16 p-8 md:p-12 bg-gray-50 rounded-2xl">
                <h3 className="font-heading text-2xl md:text-3xl text-black mb-4">
                  Potřebujete logo, které skutečně funguje?
                </h3>
                <p className="font-body font-semibold text-lg text-black/70 mb-6">
                  Navrhujeme vizuální identity, které řeší konkrétní business cíle. Od strategie po finální implementaci.
                </p>
                <Link
                  to="/grafika"
                  className="inline-block bg-black text-white font-heading text-lg px-8 py-4 hover:bg-black/90 transition-colors rounded-lg"
                >
                  Promluvme si o vašem projektu
                </Link>
              </div>

            </article>
          </div>
        </section>

        <FooterNew />
      </main>
    </>
  );
};

export default GrafikaALogoPage;
