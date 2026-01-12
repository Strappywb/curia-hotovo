import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import brandingImg from "@/assets/branding.png";
import branding2Img from "@/assets/branding2.png";
import identifikacniImg from "@/assets/Identifikačnísignatura.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const architektura = [
  {
    title: "MARKET POSITIONING",
    description: "Definice místa na trhu, které konkurence nemůže napadnout."
  },
  {
    title: "STRATEGIC NARRATIVE",
    description: "Nastavení komunikace, která buduje autoritu, ne prosí o pozornost."
  },
  {
    title: "VISUAL IDENTITY SYSTEM",
    description: "Typografie, barvy a symboly, které fungují jako uniforma lídra."
  },
  {
    title: "BRAND EQUITY FRAMEWORK",
    description: "Metodika, jak značku škálovat a zvyšovat její hodnotu v čase."
  },
  {
    title: "OPERATIONAL MANUAL",
    description: "Pravidla exekuce pro vnitrofiremní i externí použití."
  },
];

const BrandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Helmet>
        <title>Branding & Firemní identita | CURIA Brand Studio</title>
        <meta name="description" content="Tvoříme silné značky, které dominují trhu. Firemní identita, logo, vizuální styl, brand strategie. Budování značky od základů." />
        <meta property="og:title" content="Branding & Firemní identita | CURIA Brand Studio" />
        <meta property="og:description" content="Tvoříme silné značky, které dominují trhu. Firemní identita, logo, vizuální styl, brand strategie." />
        <link rel="canonical" href="https://curia.cz/branding" />
      </Helmet>
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Section - Fullscreen */}
        <section className="relative h-screen w-screen bg-[#722F37] overflow-hidden">
          <div className="h-full flex flex-col md:flex-row items-center px-8 pt-24 pb-32 md:px-12 lg:px-16 lg:pt-0">
            {/* Left - Hero Image */}
            <div className="flex-1 flex items-center justify-center lg:items-center">
              <img 
                src={brandingImg} 
                alt="Branding" 
                className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
              />
            </div>

            {/* Right - Description */}
            <div className="flex-1 flex flex-col justify-center items-start md:items-end mt-8 md:mt-0">
              <div className="max-w-md text-left md:text-right">
                <p className="font-heading text-xl md:text-2xl text-white mb-4">
                  NÁSTROJ PRO DIKTOVÁNÍ CENY
                </p>
                <p className="font-body font-semibold text-sm md:text-base text-white/80 leading-relaxed">
                  Značka je jediný legální způsob, jak eliminovat konkurenci bez boje.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom brand text */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <h1 className="text-white text-[13vw] md:text-[15vw] lg:text-[13vw] whitespace-nowrap px-4 md:px-8 pb-4 font-black tracking-tight lg:tracking-[-0.02em] lg:scale-x-[1.05] origin-left">
              BRANDING
            </h1>
          </div>
        </section>

        {/* REALITA Section - Pastier style */}
        <section className="w-full bg-black py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-[#722F37] mb-8">
              TVOŘÍME MENTÁLNÍ MONOPOLY.
            </h2>
            <p className="font-body font-semibold text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed">
              Značka je jediný legální způsob, jak eliminovat konkurenci bez boje. Pokud vás trh srovnává cenou, nemáte brand, ale komoditu.
            </p>
          </div>
        </section>

        {/* ARCHITEKTURA VÝSTUPU - Center image with boxes */}
        <section className="w-full bg-white py-20 md:py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-black mb-16 text-center">
              ARCHITEKTURA VÝSTUPU
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Left boxes */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="border-l-4 border-[#722F37] pl-6">
                  <h3 className="font-heading text-lg md:text-xl text-[#722F37] mb-2">
                    Tržní pozice
                  </h3>
                  <p className="font-body font-semibold text-sm md:text-base text-black/60 leading-relaxed">
                    Izolace značky od konkurence.
                  </p>
                </div>
                <div className="border-l-4 border-[#722F37] pl-6">
                  <h3 className="font-heading text-lg md:text-xl text-[#722F37] mb-2">
                    Strategický narativ
                  </h3>
                  <p className="font-body font-semibold text-sm md:text-base text-black/60 leading-relaxed">
                    Autorita v každém slově.
                  </p>
                </div>
                <div className="border-l-4 border-[#722F37] pl-6">
                  <h3 className="font-heading text-lg md:text-xl text-[#722F37] mb-2">
                    Vizuální systém
                  </h3>
                  <p className="font-body font-semibold text-sm md:text-base text-black/60 leading-relaxed">
                    Uniforma lídra kategorie.
                  </p>
                </div>
              </div>

              {/* Center image */}
              <div className="flex justify-center order-1 lg:order-2">
                <img 
                  src={branding2Img}
                  alt="Brand Architecture"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain"
                />
              </div>

              {/* Right boxes */}
              <div className="space-y-8 order-3">
                <div className="border-l-4 border-[#722F37] pl-6">
                  <h3 className="font-heading text-lg md:text-xl text-[#722F37] mb-2">
                    Hodnota značky
                  </h3>
                  <p className="font-body font-semibold text-sm md:text-base text-black/60 leading-relaxed">
                    Metodika zvyšování hodnoty aktiva.
                  </p>
                </div>
                <div className="border-l-4 border-[#722F37] pl-6">
                  <h3 className="font-heading text-lg md:text-xl text-[#722F37] mb-2">
                    Operační systém
                  </h3>
                  <p className="font-body font-semibold text-sm md:text-base text-black/60 leading-relaxed">
                    Pravidla exekuce a správy identity.
                  </p>
                </div>
                <div className="border-l-4 border-[#722F37] pl-6">
                  <h3 className="font-heading text-lg md:text-xl text-[#722F37] mb-2">
                    Brandový manuál
                  </h3>
                  <p className="font-body font-semibold text-sm md:text-base text-black/60 leading-relaxed">
                    Kompletní dokumentace pro tým i partnery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUDIT TRŽNÍ SÍLY - Grid Section */}
        <section className="w-full bg-[#F5F5F5] py-3">
          <div className="px-6 mb-10 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-black">
              AUDIT TRŽNÍ SÍLY
            </h2>
            <p className="font-body font-semibold text-base md:text-lg text-black/50 mt-4 max-w-2xl">
              Dříve než začneme kreslit, definujeme parametry, které rozhodují o vítězství.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="relative bg-[#722F37] min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-8 md:p-12 lg:p-16">
              <div>
                <span className="font-body font-semibold text-xs md:text-sm text-white/50 mb-3 uppercase tracking-wider block">
                  01
                </span>
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                  DIFERENCIACE
                </h3>
                <p className="font-body font-semibold text-sm md:text-base text-white/70 leading-relaxed max-w-sm">
                  Dokáže váš zákazník během 3 vteřin říct, v čem jste jiní? Pokud ne, splýváte s šumem trhu.
                </p>
              </div>
              <span className="font-heading text-7xl md:text-8xl lg:text-9xl font-black text-white/10 self-end">
                ?
              </span>
            </div>
            
            <div className="relative bg-[#722F37] min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-8 md:p-12 lg:p-16">
              <div>
                <span className="font-body font-semibold text-xs md:text-sm text-white/50 mb-3 uppercase tracking-wider block">
                  02
                </span>
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                  RELEVANCE
                </h3>
                <p className="font-body font-semibold text-sm md:text-base text-white/70 leading-relaxed max-w-sm">
                  Řeší vaše identita skutečný problém cílové skupiny, nebo je to jen estetické cvičení?
                </p>
              </div>
              <span className="font-heading text-7xl md:text-8xl lg:text-9xl font-black text-white/10 self-end">
                !
              </span>
            </div>
            
            <div className="relative bg-[#722F37] min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-8 md:p-12 lg:p-16">
              <div>
                <span className="font-body font-semibold text-xs md:text-sm text-white/50 mb-3 uppercase tracking-wider block">
                  03
                </span>
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                  ŠKÁLOVATELNOST
                </h3>
                <p className="font-body font-semibold text-sm md:text-base text-white/70 leading-relaxed max-w-sm">
                  Je váš vizuální systém připraven na expanzi do nových segmentů, nebo vás vaše současné logo drží v minulosti?
                </p>
              </div>
              <span className="font-heading text-7xl md:text-8xl lg:text-9xl font-black text-white/10 self-end">
                ↗
              </span>
            </div>
            
            <div className="relative bg-[#722F37] min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-8 md:p-12 lg:p-16">
              <div>
                <span className="font-body font-semibold text-xs md:text-sm text-white/50 mb-3 uppercase tracking-wider block">
                  04
                </span>
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                  MARŽE
                </h3>
                <p className="font-body font-semibold text-sm md:text-base text-white/70 leading-relaxed max-w-sm">
                  Dovoluje vám váš současný branding prodávat dráž než konkurence? Pokud ne, je to jen náklad, ne investice.
                </p>
              </div>
              <span className="font-heading text-7xl md:text-8xl lg:text-9xl font-black text-white/10 self-end">
                %
              </span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full bg-black py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              <div className="text-center py-8">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
                  5+ LET
                </div>
                <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white/60 mt-2 md:mt-3">
                  estetická trvanlivost
                </p>
              </div>
              <div className="text-center py-8">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
                  +30%
                </div>
                <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white/60 mt-2 md:mt-3">
                  vnímaná hodnota produktu
                </p>
              </div>
              <div className="text-center py-8">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
                  100%
                </div>
                <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white/60 mt-2 md:mt-3">
                  identifikace v šumu
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bold Statement Section */}
        <section className="w-full bg-[#722F37] py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
              BUĎ ZNAČKU VLASTNÍTE, NEBO JSTE KOMODITA. TŘETÍ MOŽNOST NEEXISTUJE.
            </h2>
          </div>
        </section>

        {/* Konzulát Section with Form */}
        <section className="w-full bg-[#722F37] py-20 md:py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              NOMEN EST OMEN.
            </h2>
            <p className="font-body font-semibold text-base md:text-lg text-white/70 mb-12 md:mb-16 max-w-2xl">
              Jméno je znamení. Vaše značka předurčuje, jak vás trh vnímá. Buď ji řídíte, nebo se děje sama.
            </p>
            
            <div className="bg-white p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Info - Left */}
                <div className="space-y-8">
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl text-black mb-2">
                      MAGISTRATUS
                    </h3>
                    <p className="text-gray-600 mb-1">vedení společnosti</p>
                    <a 
                      href="tel:+420606237743" 
                      className="text-black font-medium hover:underline block"
                    >
                      +420 606 237 743
                    </a>
                    <a 
                      href="mailto:magistratus@lorem.cz" 
                      className="text-black font-medium hover:underline block mt-1"
                    >
                      magistratus@lorem.cz
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl text-black mb-2">
                      COMMERCIUM
                    </h3>
                    <p className="text-gray-600 mb-1">obchodní oddělení</p>
                    <a 
                      href="tel:+420777561050" 
                      className="text-black font-medium hover:underline block"
                    >
                      +420 777 561 050
                    </a>
                    <a 
                      href="mailto:commercium@lorem.cz" 
                      className="text-black font-medium hover:underline block mt-1"
                    >
                      commercium@lorem.cz
                    </a>
                  </div>
                </div>
                
                {/* Contact Form - Right */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Jméno"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-100 border-0 rounded-none h-12 text-black placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-gray-100 border-0 rounded-none h-12 text-black placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Vaše zpráva"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-gray-100 border-0 rounded-none min-h-[150px] text-black placeholder:text-gray-500 resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="bg-black text-white hover:bg-black/90 font-heading text-lg px-8 py-6 h-auto rounded-none w-full md:w-auto"
                  >
                    AUDIENCE
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default BrandingPage;
