import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import newportfolio11 from "@/assets/newportfolio11.mp4";
import mados2 from "@/assets/mados2.mp4";

const MadosPage = () => {
  return (
    <>
      <Helmet>
        <title>Mados - Case study | CURIA Portfolio</title>
        <meta name="description" content="A digital commerce and construction system platform for a building materials leader." />
        <meta property="og:title" content="Mados - Case study | CURIA Portfolio" />
        <meta property="og:description" content="A digital commerce and construction system platform for a building materials leader." />
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
        <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-20">
          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden">
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
        <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-20">
          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden">
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

        <FooterNew />
      </main>
    </>
  );
};

export default MadosPage;
