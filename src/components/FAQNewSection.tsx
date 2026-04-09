"use client";

import { useState, useRef, useEffect } from "react";

const FAQNewSection = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const faqs = [
    {
      id: "1",
      question: "Jaké jsou vaše hlavní služby jako designové a brandingové studio?",
      answer: "Naše studio se specializuje na tři hlavní oblasti: brandingové identity, webové platformy a strategický marketing. V oblasti brandingu vytváříme komplexní vizuální systémy od základní strategie značky přes logotypy až po kompletní design manuály. Navrhujeme vše od businessových karet po velkoformátové instalace. V oblasti webdesignu a vývoje stavíme moderní, výkonné weby a aplikace postavené na nejnovějších technologiích, které jsou nejen vizuálně působivé, ale především funkční a konverzně optimalizované. Náš strategický přístup znamená, že každý projekt začínáme hlubokou analýzou trhu, konkurence a cílové skupiny, abychom zajistili, že výsledné řešení má skutečný dopad na váš business."
    },
    {
      id: "2",
      question: "Co nás odlišuje od ostatních designových a brandingových agentur?",
      answer: "Nejsme typická kreativní agentura, která se zaměřuje jen na estetiku. Náš přístup je založený na strategickém myšlení a datově podložených rozhodnutích. Každý projekt začínáme důkladným výzkumem a analýzou, abychom pochopili nejen vaši značku, ale i trh, na kterém působíte. Kombinujeme kreativní excelenci s technickou expertízou – náš tým tvoří nejen designéři, ale i vývojáři, stratégové a marketingoví specialisté. To nám umožňuje dodávat komplexní řešení, která fungují v reálném světě. Pracujeme s menším počtem klientů, což znamená, že každému projektu věnujeme maximální pozornost a péči. Naším cílem není jen vytvořit hezký design, ale postavit systémy, které vašemu byznysu skutečně pomohou růst a vybudovat silnou pozici na trhu."
    },
    {
      id: "3",
      question: "Pracujete s klienty z různých časových pásem?",
      answer: "Ano, spolupracujeme s klienty po celém světě a máme zkušenosti s koordinací projektů napříč různými časovými pásmy. Náš tým je flexibilní a dokáže se přizpůsobit vašim potřebám – ať už to znamená ranní meetingy nebo večerní konzultace. Využíváme moderní projektové nástroje a komunikační platformy, které zajišťují plynulou spolupráci bez ohledu na geografickou vzdálenost. Máme zavedené procesy pro asynchronní komunikaci, takže projekt pokračuje kontinuálně i když zrovna nespíme ve stejnou dobu. Pro mezinárodní projekty poskytujeme kompletní podporu v angličtině a dalších jazycích, a jsme zvyklí pracovat s různými kulturními kontexty a obchodními praktikami. Naším cílem je, aby vzdálenost nebyla nikdy překážkou kvalitní spolupráce."
    },
    {
      id: "4",
      question: "Kolik stojí realizace designového nebo brandingového projektu?",
      answer: "Cena projektu se vždy odvíjí od jeho rozsahu, komplexity a vašich konkrétních požadavků. Základní brandingový projekt začíná na několika desítkách tisíc korun a může se vyšplhat až k několika stům tisícům pro komplexní rebrandingy velkých společností. Webové projekty obvykle startují kolem 100 000 Kč pro menší weby a mohou dosáhnout i několika milionů pro rozsáhlé e-commerce platformy nebo komplexní webové aplikace. Místo fixních ceníků preferujeme individuální nabídky šité na míru každému projektu. Při prvním setkání si detailně projdeme vaše cíle, požadavky a očekávání, na základě čehož připravíme transparentní cenovou nabídku s jasně definovanými deliverables. Nabízíme také flexibilní platební podmínky a možnost rozložení plateb do milestones podle pokroku projektu. Investice do kvalitního designu a brandingu se vždy vrátí – dobře postavená značka a funkční digitální platforma jsou klíčové pro dlouhodobý růst byznysu."
    },
    {
      id: "5",
      question: "Spolupracujete se startupy a menšími firmami?",
      answer: "Určitě ano, rádi pracujeme se startupy a menšími firmami, které mají ambice růst a vybudovat silnou značku. Chápeme specifické výzvy, kterým mladé firmy čelí – omezený budget, potřeba rychlého time-to-market a nejistota ohledně budoucího směřování. Proto nabízíme flexibilní přístupy, které se dokáží přizpůsobit vašim potřebám a rozpočtu. Můžeme začít s MVP (Minimum Viable Product) verzí vaší značky nebo webu a postupně ji rozšiřovat podle vašeho růstu a získaných zdrojů. Pro startupy připravujeme speciální balíčky, které zahrnují esenciální elementy potřebné pro úspěšný start – od základní vizuální identity přes webovou prezentaci až po marketingové materiály. Navíc, práce se startupy nás baví – je to příležitost být součástí něčeho nového od samého začátku a pomoci vytvořit značku, která má potenciál změnit trh. Máme zkušenosti s různými formami spolupráce včetně revenue share modelů nebo equity stakes pro vybrané projekty s velkým potenciálem."
    },
    {
      id: "6",
      question: "Dokážete nám pomoci s redesignem naší B2B/enterprise platformy?",
      answer: "Redesign B2B a enterprise softwarových řešení je jedna z našich specializací. Máme hluboké znalosti v oblasti UX designu pro komplexní systémy, kde je potřeba balancovat mezi pokročilými funkcemi a intuitivním ovládáním. Náš proces začíná důkladnou analýzou stávající platformy, uživatelských workflow a pain points. Provedeme uživatelský výzkum a testování, abychom identifikovali oblasti pro zlepšení. Následně navrhujeme novou informační architekturu, wireframes a kompletní UI design, který je moderní, ale zároveň intuitivní pro vaše uživatele. Rozumíme specifickým požadavkům enterprise prostředí – potřebě škálovatelnosti, konzistence napříč různými moduly, přístupnosti a compliance s firemními standardy. Pracujeme v úzké spolupráci s vašimi vývojáři a produktovým týmem, abychom zajistili hladkou implementaci. Dodáváme kompletní design systémy a dokumentaci, která usnadní budoucí rozšíření platformy. Máme zkušenosti s různými technologickými stacky a frameworky, takže dokážeme navrhovat řešení, která jsou nejen krásná, ale i technicky realizovatelná."
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 mb-16 md:mb-20">
          <div className="md:col-span-5">
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-400 mb-4">Časté dotazy</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Máte otázky?
            </h2>
          </div>
          <div className="md:col-span-7 flex items-end">
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-lg">
              Rádi vám pomůžeme. Pokud nenajdete odpověď, neváhejte nás{" "}
              <a href="/kontakt" className="text-blue-800 font-semibold hover:underline">kontaktovat</a>.
            </p>
          </div>
        </div>

        {/* FAQ items */}
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={faq.id} className="group">
              <button
                onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                className="w-full flex items-start justify-between py-7 md:py-8 text-left transition-colors"
              >
                <div className="flex items-start gap-6 md:gap-8 pr-8">
                  <span className="text-sm font-medium text-gray-300 mt-1.5 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-black group-hover:text-gray-600 transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openQuestion === faq.id ? "bg-blue-900 border-blue-900 rotate-45" : "bg-white border-blue-200"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 transition-colors duration-300 ${openQuestion === faq.id ? "text-white" : "text-blue-800"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              <div
                className="grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  gridTemplateRows: openQuestion === faq.id ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <div
                    className="transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      opacity: openQuestion === faq.id ? 1 : 0,
                      transitionDelay: openQuestion === faq.id ? "150ms" : "0ms",
                    }}
                  >
                    <div className="pl-12 md:pl-16 pr-16 md:pr-24 pb-8">
                      <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQNewSection;
