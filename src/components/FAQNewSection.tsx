import { useState } from "react";

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
    <>
      {/* Desktop/Tablet */}
      <section className="hidden md:block bg-[#1a1a1a] text-white py-32">
        <div className="container mx-auto px-12 lg:px-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-16">FAQ</h2>
          
          <div className="space-y-0">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-700">
                <button
                  onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between py-8 hover:opacity-70 transition-opacity text-left"
                >
                  <h3 className="text-2xl lg:text-3xl font-normal pr-8">{faq.question}</h3>
                  <svg 
                    className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openQuestion === faq.id ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    openQuestion === faq.id ? 'max-h-[800px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden bg-[#1a1a1a] text-white py-20 px-6">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        
        <div className="space-y-0">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-700">
              <button
                onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between py-6 hover:opacity-70 transition-opacity text-left"
              >
                <h3 className="text-lg font-normal pr-4">{faq.question}</h3>
                <svg 
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openQuestion === faq.id ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ${
                  openQuestion === faq.id ? 'max-h-[1000px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-base text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQNewSection;
