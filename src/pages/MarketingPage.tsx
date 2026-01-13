import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import marketingImg from "@/assets/marketinghero.webp";
import marketingMobileImg from "@/assets/marketingheromobile.webp";
import marketing10Img from "@/assets/marketin10.webp";
import jenudaImg from "@/assets/jenuda.webp";
import provsechnyImg from "@/assets/provsechny.webp";
import nemakouleImg from "@/assets/nemakoule.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const divize = [
  {
    title: "ATTENTION CAPTURE",
    subtitle: "Lov pozornosti",
    description: "Pokud vás nevidí, neexistujete. Vytváříme obsah, který zastaví scroll. Agresivní, estetický a funkční branding v pohybu. Od TikToku po billboardy na magistrále."
  },
  {
    title: "CAPITAL EFFICIENCY",
    subtitle: "Výkon a ROI",
    description: "Spravujeme mandáty v řádech desítek milionů korun. Každá koruna musí mít svůj cíl. Data, analytika a neustálá optimalizace. Žádné pocity, jen čísla, která rostou."
  },
  {
    title: "MARKET AUTHORITY",
    subtitle: "Status a PR",
    description: "Uděláme z vás lídra kategorie. Nastavujeme komunikaci tak, aby konkurence vypadala jako levná imitace. Stavíme autoritu, která vám dovolí diktovat ceny."
  },
];

const problemyReklamy = [
  {
    title: "Je nudná.",
    description: "NEVIDITELNOST.",
    image: jenudaImg
  },
  {
    title: "Je pro všechny.",
    description: "Takže pro nikoho.",
    image: provsechnyImg
  },
  {
    title: "Nemá koule.",
    description: "STRACH Z KONFRONTACE.",
    image: nemakouleImg
  },
];

const MarketingPage = () => {
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
        <title>Digitální marketing & Reklama | CURIA Marketing Agency</title>
        <meta name="description" content="Marketingová strategie, PPC kampaně, sociální sítě, obsahový marketing. Získáváme pozornost a konvertujeme ji na zákazníky." />
        <meta property="og:title" content="Digitální marketing & Reklama | CURIA Marketing Agency" />
        <meta property="og:description" content="Marketingová strategie, PPC kampaně, sociální sítě, obsahový marketing. Získáváme pozornost a konvertujeme ji na zákazníky." />
        <link rel="canonical" href="https://curia.cz/marketing" />
      </Helmet>
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Section - Fullscreen */}
        <section className="relative h-screen w-screen bg-[#CCFF00] overflow-hidden">
          <div className="h-full flex flex-col md:flex-row items-center px-6 pt-24 pb-32 md:px-12 lg:px-16 lg:pt-0">
            {/* Left - Hero Image */}
            <div className="flex-1 flex items-center justify-center">
              {/* Mobile image */}
              <img 
                src={marketingMobileImg} 
                alt="Marketing" 
                className="md:hidden w-full h-[50vh] object-contain"
              />
              {/* Desktop image */}
              <img 
                src={marketingImg} 
                alt="Marketing" 
                className="hidden md:block w-full md:max-w-2xl lg:max-w-3xl h-auto object-contain"
              />
            </div>

            {/* Right - Description */}
            <div className="flex-1 flex flex-col justify-center items-start md:items-end mt-8 md:mt-0">
              <div className="max-w-md text-left md:text-right">
                <p className="font-heading text-xl md:text-2xl text-black mb-4">
                  AKVIZICE & RETENCE
                </p>
                <p className="font-body font-semibold text-sm md:text-base text-black/70 leading-relaxed">
                  Marketing je aplikovaná matematika a psychologie. Vstup × konverze × hodnota = výstup. 
                  Data rozhodují, intuice doplňuje.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom brand text */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <h1 className="text-black text-[14vw] md:text-[14vw] lg:text-[12vw] whitespace-nowrap px-4 md:px-8 pb-4 font-black tracking-tight lg:tracking-[-0.02em] lg:scale-x-[1.05] origin-left">
              MARKETING
            </h1>
          </div>
        </section>

        {/* Showcase Section - Apple Style */}
        <section className="w-full bg-[#1a1a1a] py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="px-8 md:px-12 lg:px-16 mb-16 md:mb-24">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl text-white leading-tight max-w-4xl">
              Pozornost je měna.<br />My ji umíme těžit.
            </h2>
            <p className="font-body font-semibold text-lg md:text-xl lg:text-2xl text-white/60 mt-10 md:mt-12 max-w-3xl leading-relaxed">
              Každý den soutěžíte o pozornost s tisíci dalších značek. Víme, jak vyhrát. Kreativa, která zastavuje scroll. Strategie, která konvertuje.
            </p>
          </div>
          
          <div className="w-full flex justify-center">
            <img 
              src={marketing10Img}
              alt="CURIA Marketing Projects"
              className="w-full md:w-[95vw] lg:w-[100vw] max-w-none h-auto object-contain"
            />
          </div>
        </section>

        {/* Manifest Section - Psychologie vs. Algoritmy */}
        <section className="w-full bg-white py-20 md:py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-black mb-6">
              PSYCHOLOGIE VS. ALGORITMY
            </h2>
            <p className="font-body font-semibold text-base md:text-lg lg:text-xl text-black/70 leading-relaxed max-w-4xl">
              Většina agentur pálí peníze na kampaně, které nikdo nevidí, nebo nikoho nezajímají. My nekupujeme lajky. Kupujeme pozornost. Ovládáme psychologii davu – víme, co přiměje 15letého kluka napsat „Slay" a co přiměje 50letého majitele stavební firmy zvednout telefon a podepsat kontrakt.
            </p>
          </div>
        </section>

        {/* Divize vlivu - 3 pillars */}
        <section className="w-full bg-[#F5F5F5] py-3">
          <div className="px-6 mb-10 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-black">
              DIVIZE VLIVU
            </h2>
            <p className="font-body font-semibold text-base md:text-lg text-black/50 mt-4 max-w-2xl">
              Tři pilíře, které určují, jestli vaše značka roste nebo stagnuje.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {divize.map((item, index) => (
              <div 
                key={index}
                className="relative bg-[#CCFF00] min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex flex-col justify-between p-6 pt-10 pb-8 md:p-10 md:pt-12 md:pb-10 lg:p-12 lg:pt-14 lg:pb-12"
              >
                <div>
                  <span className="font-body font-semibold text-xs md:text-sm text-black/50 mb-3 uppercase tracking-wider block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-black mb-4">
                    {item.title}
                  </h3>
                  <p className="font-body font-semibold text-sm md:text-base text-black/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="font-heading text-6xl md:text-7xl lg:text-8xl font-black text-black/10 self-end">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Reality Check - Proč vaše reklama nefunguje */}
        <section className="w-full bg-[#CCFF00] py-20 md:py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-black mb-12 md:mb-16">
              PROČ VAŠE REKLAMA NEFUNGUJE?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
              {problemyReklamy.map((problem, index) => (
                <div key={index} className="bg-black p-6 md:p-8">
                  <div className="mb-6">
                    <h3 className="font-heading text-2xl md:text-3xl text-white mb-2">
                      {problem.title}
                    </h3>
                    <p className="font-body font-semibold text-base md:text-lg text-white/60">
                      {problem.description}
                    </p>
                  </div>
                  <img 
                    src={problem.image} 
                    alt={problem.title}
                    className="w-full h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="border-t border-black/20 pt-12">
              <p className="font-heading text-xl md:text-2xl lg:text-3xl text-black">
                CURIA tohle nedělá. My jdeme do rizika, které se vyplácí.
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof - Stats */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              <div className="text-center py-8">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-black">
                  30M+
                </div>
                <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-black/60 mt-2 md:mt-3">
                  roční ad-spend pod naší správou
                </p>
              </div>
              <div className="text-center py-8">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-black">
                  5,2×
                </div>
                <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-black/60 mt-2 md:mt-3">
                  průměrný ROAS klientů
                </p>
              </div>
              <div className="text-center py-8">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-black">
                  +40%
                </div>
                <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-black/60 mt-2 md:mt-3">
                  průměrné zvýšení konverzního poměru
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bold Statement Section */}
        <section className="w-full bg-black py-24 md:py-32 lg:py-40">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
              VĚŘÍME V SYSTÉMOVÉ ŘÍZENÍ RŮSTU. NAŠE METODIKA SPOJUJE DATA S PSYCHOLOGIÍ TRHU TAK, ABY KAŽDÁ INTERAKCE SE ZNAČKOU POSILOVALA JEJÍ POZICI A AUTORITU.
            </h2>
          </div>
        </section>

        {/* Konzulát Section with Form */}
        <section className="w-full bg-[#CCFF00] py-20 md:py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-black mb-6">
              IN DATA VERITAS.
            </h2>
            <p className="font-body font-semibold text-base md:text-lg text-black/70 mb-12 md:mb-16 max-w-2xl">
              V datech je pravda. Co neměříte, neřídíte. Co neřídíte, se děje náhodou.
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
                      href="mailto:michal@curia.cz" 
                      className="text-black font-medium hover:underline block mt-1"
                    >
                      michal@curia.cz
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
                      href="mailto:adam@curia.cz" 
                      className="text-black font-medium hover:underline block mt-1"
                    >
                      adam@curia.cz
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

export default MarketingPage;
