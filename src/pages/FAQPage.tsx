import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Plus, Minus } from "lucide-react";
import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";

const faqCategories = [
  {
    title: "OBECNÉ",
    faqs: [
      {
        question: "Co CURIA dělá?",
        answer: "Jsme studio zaměřené na webdesign, branding, marketing a vývoj aplikací. Pomáháme firmám budovat silnou digitální přítomnost a růst online. Od strategie přes design až po technickou realizaci."
      },
      {
        question: "Jak probíhá spolupráce?",
        answer: "Začínáme analýzou a strategií — potřebujeme pochopit váš byznys, cíle a cílovou skupinu. Pak následuje návrh, iterace na základě zpětné vazby a finální realizace. Komunikujeme průběžně přes Slack nebo email, máte přehled o každém kroku."
      },
      {
        question: "Jak rychle dokážete dodat projekt?",
        answer: "Weby dodáváme v řádu dnů až týdnů. Grafické práce dle rozsahu od dnů po týdny. Komplexní branding typicky týdny až měsíce. Vždy záleží na rozsahu a komplexitě projektu. Jsme rychlí, ale ne na úkor kvality."
      },
      {
        question: "Kde sídlíte?",
        answer: "Působíme z České republiky, pracujeme remote. Spolupracujeme s klienty po celé ČR i v zahraničí. Osobní schůzky jsou možné v Praze a okolí."
      },
      {
        question: "S jakými klienty pracujete?",
        answer: "Spolupracujeme s firmami všech velikostí — od startupů po zavedené společnosti. Klíčové je, aby klient měl ambice a chápal hodnotu kvalitního designu a marketingu."
      },
    ]
  },
  {
    title: "WEBDESIGN",
    faqs: [
      {
        question: "Na jakých technologiích stavíte weby?",
        answer: "Pracujeme s vlastním kódem (React, Next.js, TypeScript), Framer a Webflow. Technologii volíme podle potřeb projektu — rychlost dodání, škálovatelnost, možnost úprav klientem, budget."
      },
      {
        question: "Bude web responzivní?",
        answer: "Samozřejmě. Každý web je plně responzivní a optimalizovaný pro všechna zařízení — mobil, tablet, desktop. Mobile-first přístup je standard."
      },
      {
        question: "Je v ceně webu i hosting?",
        answer: "Ano, cena zahrnuje hosting a základní údržbu po dobu prvního roku. Nemusíte řešit technické detaily — o vše se postaráme."
      },
      {
        question: "Dostanu přístup k editaci obsahu?",
        answer: "Ano. U webů na Framer a Webflow máte přímý přístup k editoru. U custom řešení implementujeme CMS (např. Sanity, Strapi) pro snadnou správu obsahu."
      },
      {
        question: "Řešíte i SEO?",
        answer: "Technické SEO je součástí každého webu — správná struktura, meta tagy, schema markup, rychlost načítání, sitemap. Obsahové SEO a linkbuilding řešíme v rámci marketingových služeb."
      },
      {
        question: "Co když potřebuji úpravy po dokončení?",
        answer: "Menší úpravy v rámci dohodnutého rozsahu děláme bez dalších poplatků. Pro větší změny nebo průběžnou správu nabízíme měsíční maintenance balíčky."
      },
    ]
  },
  {
    title: "BRANDING",
    faqs: [
      {
        question: "Co vše obsahuje branding?",
        answer: "Kompletní branding zahrnuje strategii značky, positioning, vizuální identitu (logo, barvy, typografie), brand guidelines a aplikace (vizitky, hlavičkový papír, šablony). Rozsah přizpůsobíme vašim potřebám."
      },
      {
        question: "Kolik návrhů loga dostanu?",
        answer: "Dodáváme 2-3 konceptuální směry, z nichž jeden rozpracujeme do finální podoby. Nejde o kvantitu, ale o kvalitu a strategickou relevanci. Každý návrh má jasné zdůvodnění."
      },
      {
        question: "Jak dlouho trvá branding?",
        answer: "Menší projekty (logo + základní identita) týdny. Komplexní rebranding včetně strategie typicky 1-3 měsíce. Záleží na rozsahu a rychlosti zpětné vazby."
      },
      {
        question: "Získám zdrojové soubory?",
        answer: "Ano. Dostanete veškeré zdrojové soubory — logo ve všech formátech (SVG, PNG, PDF), fonty, barevné kódy, brand guidelines v PDF a editovatelné šablony."
      },
      {
        question: "Pomůžete s implementací nové identity?",
        answer: "Ano. Můžeme zajistit kompletní rollout — od aktualizace webu přes tisk materiálů po nasazení na sociální sítě. Nebo dodáme podklady a guidelines pro váš tým."
      },
    ]
  },
  {
    title: "MARKETING",
    faqs: [
      {
        question: "Které platformy spravujete?",
        answer: "Google Ads, Meta (Facebook, Instagram), LinkedIn, TikTok, programatickou reklamu. Platformy volíme podle toho, kde je vaše cílová skupina."
      },
      {
        question: "Jak měříte výsledky?",
        answer: "Sledujeme KPIs relevantní pro váš byznys — konverze, CPA, ROAS, engagement. Reporty dostáváte měsíčně s analýzou a doporučeními. Žádné vanity metrics."
      },
      {
        question: "Co když kampaň nefunguje?",
        answer: "Optimalizace je kontinuální proces. Testujeme kreativy, cílení, bidding strategie. Pokud něco nefunguje, rychle pivotujeme. Transparentně komunikujeme výsledky i neúspěchy."
      },
      {
        question: "Děláte i obsahový marketing?",
        answer: "Ano. Strategie obsahu, copywriting, správa sociálních sítí, tvorba vizuálů. Můžeme převzít kompletní content marketing nebo podpořit váš interní tým."
      },
      {
        question: "Spolupracujete i s malými rozpočty?",
        answer: "Minimální smysluplný rozpočet na reklamu závisí na oboru a cílech. Radši řekneme upřímně, pokud budget nedává smysl, než abychom brali peníze bez výsledků."
      },
    ]
  },
  {
    title: "GRAFIKA & APLIKACE",
    faqs: [
      {
        question: "Jaké grafické práce děláte?",
        answer: "Loga, vizuální identity, reklamní bannery, sociální sítě, tiskoviny (letáky, brožury, plakáty), packaging, prezentace. Vše od návrhu po tiskovou přípravu."
      },
      {
        question: "V jakých formátech dostanu grafiku?",
        answer: "Dle účelu — web (PNG, JPG, SVG, WebP), tisk (PDF, AI, EPS v CMYK), sociální sítě (optimalizované rozměry pro každou platformu)."
      },
      {
        question: "Vyvíjíte mobilní aplikace?",
        answer: "Ano. iOS, Android, cross-platform (React Native). Od UX/UI designu přes vývoj po publikaci v App Store a Google Play."
      },
      {
        question: "Děláte i webové aplikace?",
        answer: "Ano. SaaS produkty, interní nástroje, dashboardy, e-commerce. Full-stack vývoj s moderními technologiemi."
      },
    ]
  },
];

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<{[key: string]: boolean}>({
    "0-0": true
  });

  const toggleItem = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <>
      <Helmet>
        <title>Časté dotazy (FAQ) | CURIA</title>
        <meta name="description" content="Odpovědi na nejčastější otázky o webdesignu, brandingu, marketingu a spolupráci s CURIA. Jak pracujeme, kolik to trvá, co je v ceně." />
        <meta property="og:title" content="Časté dotazy (FAQ) | CURIA" />
        <meta property="og:description" content="Odpovědi na nejčastější otázky o webdesignu, brandingu, marketingu a spolupráci s CURIA." />
        <link rel="canonical" href="https://curia.cz/faq" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="w-full bg-white pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
              ČASTÉ DOTAZY
            </h1>
            <p className="font-body font-semibold text-xl text-black/60 max-w-2xl">
              Vše, co potřebujete vědět o spolupráci s CURIA. Pokud nenajdete odpověď, napište nám.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="w-full bg-[#F5F5F5] py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16 last:mb-0">
                <h2 className="font-heading text-2xl md:text-3xl text-black mb-8">
                  {category.title}
                </h2>
                
                <div className="bg-white">
                  {category.faqs.map((faq, faqIndex) => {
                    const key = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openItems[key];
                    
                    return (
                      <div 
                        key={faqIndex}
                        className="border-b border-black/10 last:border-b-0"
                      >
                        <button
                          onClick={() => toggleItem(categoryIndex, faqIndex)}
                          className="w-full py-6 px-6 md:px-8 flex items-center justify-between text-left group"
                        >
                          <span className="font-heading text-base md:text-lg text-black pr-8">
                            {faq.question}
                          </span>
                          <div className="flex-shrink-0 w-10 h-10 bg-black flex items-center justify-center">
                            {isOpen ? (
                              <Minus className="w-5 h-5 text-white" />
                            ) : (
                              <Plus className="w-5 h-5 text-white" />
                            )}
                          </div>
                        </button>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? "max-h-96 pb-6" : "max-h-0"
                          }`}
                        >
                          <p className="font-body font-semibold text-base text-black/70 leading-relaxed px-6 md:px-8 pr-16">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-black py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Nenašli jste odpověď?
            </h2>
            <p className="font-body font-semibold text-lg text-white/70 mb-8">
              Napište nám. Rádi zodpovíme jakýkoliv dotaz.
            </p>
            <a 
              href="/#contact" 
              className="inline-block bg-white text-black font-heading px-8 py-4 hover:bg-gray-100 transition-colors"
            >
              Kontaktovat CURIA
            </a>
          </div>
        </section>

        <FooterNew />
      </main>
    </>
  );
};

export default FAQPage;
