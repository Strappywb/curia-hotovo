import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import ContactFormSection from "@/components/ContactFormSection";
import newportfolio11 from "@/assets/newportfolio11.mp4";
import mados2 from "@/assets/mados2.mp4";
import madosphone from "@/assets/verdikt-mados.webp";

const MadosPage = () => {
  return (
    <>
      <Helmet>
        <title>MADOS - Digitální transformace výrobce fasád | CURIA Case Study</title>
        <meta name="description" content="Komplexní digitální platforma pro MADOS - lídra v segmentu hliníkových fasád. Custom Product Engine, B2B rozhraní a 217% nárůst relevantních poptávek." />
        <meta name="keywords" content="case study, webdesign, MADOS, digitální platforma, B2B, CURIA" />
        <meta property="og:title" content="MADOS - Digitální transformace výrobce fasád | CURIA Case Study" />
        <meta property="og:description" content="Komplexní digitální platforma pro MADOS - lídra v segmentu hliníkových fasád. 217% nárůst relevantních poptávek." />
        <link rel="canonical" href="https://curia.cz/projekty/mados" />
      </Helmet>
      <Header />
      <main className="overflow-x-hidden bg-white">
        {/* Hero Section */}
        <section className="container mx-auto px-6 md:px-12 lg:px-16 py-32 md:py-40">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight">
            MADOS
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
            Digitální transformace a akcelerace růstu pro lídra v segmentu hliníkových fasád.
          </p>
        </section>

        {/* Video Section */}
        <section className="pb-20">
          <div className="w-full aspect-[21/9] overflow-hidden">
            <video 
              src={newportfolio11} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-32 md:pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 lg:gap-24">
            {/* Left - Description */}
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                MADOS je prémiový výrobce hliníkových systémů a fasád s 30letou tradicí v precizním strojírenství. Navrhli jsme a vyvinuli komplexní digitální platformu, která transformuje tradiční výrobu v moderní prodejní ekosystém obsluhující globální B2B i B2C segmenty.
              </p>
              
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Nová digitální identita staví na unikátním Custom Product Engine, který zjednodušuje rozsáhlé technické portfolio do intuitivního digitálního showroomu. V rámci strategického partnerství jsme implementovali pokročilé systémy pro kvalifikaci poptávek a dedikované B2B rozhraní pro architekty, což vedlo k 217% nárůstu relevantních obchodních příležitostí.
              </p>
            </div>

            {/* Right - Services */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-black">Strategie a audit</h3>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-black">Vizuální identita</h3>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-black">UI/UX Design & Prototypování</h3>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-black">Custom Product Engine</h3>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-black">Technické SEO & Autorita</h3>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-black">B2B Integration</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Second Video Section */}
        <section className="pb-20">
          <div className="w-full aspect-[21/9] overflow-hidden">
            <video 
              src={mados2} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Second Content Section */}
        <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-32 md:pb-40">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Od chaosu k jasné struktuře
            </h2>
            
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Původní web MADOSu trpěl klasickým neduhem velkých výrobců – extrémní roztříštěností. Informační chaos, desítky zanořených podstránek a nepřehledná navigace způsobovaly, že se i odborníci v nabídce ztráceli. Tento stav vedl k vysoké míře okamžitého opuštění (bounce rate) a obchodní oddělení bylo zahlceno nekvalitními poptávkami, kterým chyběly klíčové parametry.
            </p>
            
            <div className="pt-4">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Inovativní UX bez zbytečného klikání
              </h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Místo tradičního větvení stránek jsme celou architekturu překopali a postavili na systému Custom Product Popups. Toto řešení eliminuje potřebu otevírat 20 různých karet prohlížeče pro porovnání profilů. Uživatel zůstává v kontextu, veškeré technické řezy a specifikace vidí okamžitě v interaktivním okně a může rovnou přejít k poptávce. Tím jsme odstranili největší bariéru mezi produktem a zákazníkem.
              </p>
            </div>
          </div>
        </section>

        {/* Phone Image Section */}
        <section className="pb-32 md:pb-40">
          <div className="w-full overflow-hidden">
            <img 
              src={madosphone} 
              alt="Mados mobile interface" 
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Third Content Section */}
        <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-32 md:pb-40">
          <div className="max-w-4xl space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
                Inteligentní kvalifikace poptávek
              </h2>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Jedním z největších přínosů nové platformy je transformace kontaktního formuláře v inteligentní poptávkový uzel. Systém nyní automaticky rozlišuje mezi koncovým zákazníkem a B2B partnerem, přičemž vyžaduje nahrání výkresové dokumentace hned v prvním kroku. Tím jsme eliminovali nekvalitní dotazy a obchodnímu týmu MADOS ušetřili desítky hodin měsíčně, které dříve trávili doplňováním chybějících parametrů.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
                Budování autority skrze obsah
              </h2>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Web už neslouží jen jako katalog, ale jako vzdělávací hub. Implementovali jsme Content Marketing Hub, který cílí na odborné long-tailové dotazy z oblasti hliníkových systémů. Díky tomu se MADOS stal přirozenou autoritou pro architekty i investory, což dokazuje 312% nárůst čtenosti odborných článků a dominance ve vyhledávání na klíčová oborová hesla.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
                Technologická dominance a výkon
              </h2>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Pro dosažení okamžité odezvy jsme zvolili moderní technologický stack postavený na Vite. I při vykreslování objemných galerií s vysokým rozlišením a detailních technických řezů zůstává web extrémně rychlý a stabilní. Tato technická preciznost přímo reflektuje kvalitu samotné výroby MADOS a zajišťuje bezchybný zážitek na všech zařízeních – od desktopů v kancelářích až po tablety přímo na stavbě.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
                Měřitelný dopad na byznys
              </h2>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Výsledkem naší práce je digitální ekosystém, který přestal být pouhou vizitkou a stal se klíčovým generátorem obchodu. S nárůstem relevantních poptávek o 217 % a výrazným zkrácením obchodního cyklu se MADOS definitivně odpoutal od závislosti na pasivních doporučeních a získal plnou kontrolu nad svým růstem v digitálním prostoru.
              </p>
            </div>
          </div>
        </section>

        <ContactFormSection />

        <FooterNew />
      </main>
    </>
  );
};

export default MadosPage;
