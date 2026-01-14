import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import webdesignImg from "@/assets/webdesign.webp";
import curiawebImg from "@/assets/curiaweb3.webp";
import webhero3Img from "@/assets/webhero3.webp";
import analytikaImg from "@/assets/analytika.webp";
import architekturaImg from "@/assets/architektura.webp";
import formaImg from "@/assets/formapng.webp";
import apparatusImg from "@/assets/apparatus.webp";
import reactImg from "@/assets/react.webp";
import framerImg from "@/assets/framer.webp";
import ecommerceImg from "@/assets/e-commerce.webp";
import apiImg from "@/assets/api.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const instrumenta = [
  {
    title: "ANALYTICA",
    description: "Rozbor obchodního modelu, tržní pozice a technických požadavků. Definice účelu webu.",
    image: analytikaImg
  },
  {
    title: "ARCHITECTURA",
    description: "Návrh informační struktury, uživatelských cest a datového toku. Wireframing.",
    image: architekturaImg
  },
  {
    title: "FORMA",
    description: "Vizuální systém odvozený od strategie značky. UI komponenty a interakční vzory.",
    image: formaImg
  },
  {
    title: "APPARATUS",
    description: "Front-end a back-end implementace. Integrace systémů, API, databáze.",
    image: apparatusImg
  },
];

const methodus = [
  {
    number: "I",
    title: "RECOGNITIO",
    subtitle: "Poznání",
    description: "Studium vašeho trhu, konkurence a zákazníků. Identifikace reálných problémů, které má web řešit. Bez pochopení kontextu nelze navrhnout funkční řešení."
  },
  {
    number: "II",
    title: "DISPOSITIO",
    subtitle: "Uspořádání",
    description: "Strukturování obsahu a funkcí do logického celku. Každá stránka má jasný účel. Každý prvek má důvod existence. Co nepomáhá, škodí."
  },
  {
    number: "III",
    title: "CONSTRUCTIO",
    subtitle: "Výstavba",
    description: "Technická realizace návrhu. Čistý kód, rychlé načítání, responzivita. Testování na reálných datech a uživatelích před spuštěním."
  },
  {
    number: "IV",
    title: "CUSTODIA",
    subtitle: "Správa",
    description: "Web po spuštění vyžaduje údržbu. Monitoring výkonu, bezpečnostní aktualizace, iterativní vylepšování na základě dat."
  },
];

const technologia = [
  { name: "React & Next.js", description: "Moderní JavaScript frameworky pro rychlé a interaktivní rozhraní.", image: reactImg },
  { name: "Framer & Webflow", description: "No-code platformy pro rychlé prototypy a weby s vizuálním editorem.", image: framerImg },
  { name: "E-commerce řešení", description: "Shopify, WooCommerce, custom řešení. Podle rozsahu a potřeb.", image: ecommerceImg },
  { name: "Integrace & API", description: "Napojení na CRM, ERP, platební brány, externí služby.", image: apiImg },
];

const extensio = [
  {
    title: "RESPONZIVITA",
    description: "Každý web funguje na všech zařízeních. Mobile-first přístup. Testování na reálných zařízeních, ne jen v emulátoru."
  },
  {
    title: "RYCHLOST",
    description: "Optimalizace načítání, komprese, lazy loading, CDN. Každá sekunda navíc = ztráta konverzí."
  },
  {
    title: "SEO ZÁKLAD",
    description: "Technické SEO v základu — správná struktura, meta tagy, schema markup, sitemap, rychlost."
  },
  {
    title: "ANALYTIKA",
    description: "Implementace Google Analytics, heatmapy, conversion tracking. Měříme, co děláme."
  },
];

const WebdesignPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mqeeaawz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Tvorba webových stránek | CURIA Webdesign Studio</title>
        <meta name="description" content="Profesionální tvorba webů na míru. Weby, které prodávají a konvertují. React, Next.js, Webflow, e-commerce řešení. Webdesign Praha." />
        <meta property="og:title" content="Tvorba webových stránek | CURIA Webdesign Studio" />
        <meta property="og:description" content="Profesionální tvorba webů na míru. Weby, které prodávají a konvertují. React, Next.js, Webflow, e-commerce řešení." />
        <link rel="canonical" href="https://curia.cz/webdesign" />
      </Helmet>
      <Header />
      <main className="overflow-x-hidden bg-[#ebebeb]">
        {/* Hero Section - Fullscreen */}
        <section className="relative w-full bg-[#ebebeb] px-4 md:px-6 pt-4 md:pt-6 pb-4 md:pb-3">
          <div className="relative h-screen bg-[#0047CC] overflow-hidden rounded-3xl md:rounded-[2.5rem] ring-4 ring-white">
          <div className="h-full flex flex-col md:flex-row items-center px-8 pt-24 pb-32 md:px-12 lg:px-16 lg:pt-0">
            {/* Left - Hero Image */}
            <div className="flex-1 flex items-center justify-center lg:items-center">
              <img 
                src={webdesignImg} 
                alt="Webdesign" 
                className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
              />
            </div>

            {/* Right - Description */}
            <div className="flex-1 flex flex-col justify-center items-start md:items-end mt-8 md:mt-0">
              <div className="max-w-md text-left md:text-right">
                <p className="font-heading text-xl md:text-2xl text-white mb-4">
                  TECHNICKÁ INFRASTRUKTURA
                </p>
                <p className="font-body font-semibold text-sm md:text-base text-white leading-relaxed">
                  Web jako software, ne jako brožura. Každý prvek plní funkci v rámci obchodního cíle. Architektura postavená na datech, ne na estetických preferencích.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom brand text */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <h1 className="text-white text-[10vw] md:text-[12vw] lg:text-[11vw] whitespace-nowrap px-4 md:px-8 pb-4 font-black tracking-tight lg:tracking-[-0.02em] lg:scale-x-[1.05] origin-left">
              WEBDESIGN
            </h1>
          </div>
          </div>
        </section>

        {/* Showcase Section - Apple Style */}
        <section className="w-full bg-[#ebebeb] px-4 md:px-6 py-4 md:py-3">
          <div className="bg-[#1a1a1a] rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="px-8 md:px-12 lg:px-16 mb-16 md:mb-24">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl text-white leading-tight max-w-4xl">
              Web, který prodává.<br />Ne jen vypadá.
            </h2>
            <p className="font-body font-semibold text-lg md:text-xl lg:text-2xl text-white/60 mt-10 md:mt-12 max-w-3xl leading-relaxed">
              Jestli začínáte nebo podnikáte roky — s CURIA se vaše firma zařadí mezi weby, které skutečně fungují. Design odvozený od strategie. Každý pixel má důvod.
            </p>
            
            {/* Awwwards Badge */}
            <div className="mt-12 md:mt-16 flex items-center gap-4">
              <span className="font-heading text-white text-xl tracking-wider">AWWWARDS</span>
              <span className="font-body font-semibold text-white/40 text-base">Site of the Day Winner</span>
            </div>
          </div>
          
          <div className="w-full flex justify-center">
            <img 
              src={curiawebImg}
              alt="CURIA Web Projects"
              className="w-full md:w-[95vw] lg:w-[100vw] max-w-none h-auto object-contain"
            />
          </div>
          </div>
        </section>

        {/* Manifest Section */}
        <section className="w-full bg-[#ebebeb] px-4 md:px-6 py-4 md:py-3">
          <div className="bg-white rounded-3xl md:rounded-[2.5rem] ring-4 ring-white px-8 md:px-12 lg:px-16 py-16 md:py-24 lg:py-32 flex items-center justify-center">
          <div className="max-w-4xl text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-black mb-8">
              Rozhraní je nástroj. Ne dekorace.
            </h2>
            <div className="space-y-6 font-body font-semibold text-lg md:text-xl lg:text-2xl text-black leading-relaxed">
              <p>
                Většina webů vzniká obráceně — nejdřív se řeší jak to bude vypadat, pak se řeší co to má dělat. Výsledkem jsou weby, které dobře vypadají a špatně fungují.
              </p>
              <p>
                Funkce určuje formu. Obchodní cíl určuje strukturu. Data určují rozhodnutí.
              </p>
              <p>
                Web buď pracuje pro váš byznys, nebo proti němu. Třetí možnost neexistuje.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* Features Grid with Image */}
        <section className="w-full bg-[#ebebeb] px-4 md:px-6 py-4 md:py-3">
          <div className="bg-[#0047CC] rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-16 md:py-24 lg:py-32">
          <div className="px-6 md:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left - Feature Cards */}
              <div className="flex-1 order-1 lg:order-1">
                <div className="grid grid-cols-2 gap-3">
                  {/* Analytica */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">Analýza</h3>
                    <p className="font-body font-semibold text-sm text-black/70">Rozbor trhu, konkurence a cílové skupiny</p>
                  </div>
                  {/* Architektura */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">Architektura</h3>
                    <p className="font-body font-semibold text-sm text-black/70">Informační struktura a uživatelské cesty</p>
                  </div>
                  {/* Design */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">Design</h3>
                    <p className="font-body font-semibold text-sm text-black/70">UI/UX odvozený od strategie značky</p>
                  </div>
                  {/* Vývoj */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">Vývoj</h3>
                    <p className="font-body font-semibold text-sm text-black/70">React, Next.js, Framer, Webflow</p>
                  </div>
                  {/* E-commerce */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">E-commerce</h3>
                    <p className="font-body font-semibold text-sm text-black/70">Shopify, custom řešení</p>
                  </div>
                  {/* Integrace */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">Integrace</h3>
                    <p className="font-body font-semibold text-sm text-black/70">CRM, ERP, platební brány, API</p>
                  </div>
                  {/* SEO */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">SEO</h3>
                    <p className="font-body font-semibold text-sm text-black/70">Technické SEO, rychlost, struktura</p>
                  </div>
                  {/* Analytika */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">Analytika</h3>
                    <p className="font-body font-semibold text-sm text-black/70">Tracking, heatmapy, konverze</p>
                  </div>
                </div>
              </div>
              
              {/* Right - Image */}
              <div className="flex-1 order-2 lg:order-2 flex items-center justify-center">
                <img 
                  src={webhero3Img}
                  alt="CURIA Web Development"
                  className="w-full max-w-md lg:max-w-none h-auto object-contain"
                />
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full bg-[#ebebeb] px-4 md:px-6 py-4 md:py-3">
          <div className="bg-black rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              <div className="text-center py-8">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
                  150+
                </div>
                <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white/70 mt-2 md:mt-3">
                  Realizovaných webů
                </p>
              </div>
              <div className="text-center py-8">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
                  3.2×
                </div>
                <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white/70 mt-2 md:mt-3">
                  Průměrný nárůst konverze
                </p>
              </div>
              <div className="text-center py-8">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
                  68%
                </div>
                <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white/70 mt-2 md:mt-3">
                  Klientů z doporučení
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Process Section - 2x2 Grid */}
        <section className="w-full bg-[#ebebeb] px-4 md:px-6 py-4 md:py-3">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0047CC] p-8 md:p-12 min-h-[400px] md:min-h-[450px] flex flex-col justify-end relative overflow-hidden rounded-3xl md:rounded-[2.5rem] ring-4 ring-white">
                <span className="font-heading text-[120px] md:text-[180px] font-black text-white/10 absolute top-4 right-4 leading-none select-none">01</span>
                <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-white mb-3 relative z-10">
                  Validace zadání
                </h3>
                <p className="font-body font-semibold text-sm md:text-base text-white/70 relative z-10">
                  Analýza byznys logiky, tržního kontextu a KPI. Nedefinujeme, jak má web vypadat, ale co má doručit. Pokud zadání nedává ekonomický smysl, vracíme ho k přepracování.
                </p>
              </div>

              <div className="bg-[#0047CC] p-8 md:p-12 min-h-[400px] md:min-h-[450px] flex flex-col justify-end relative overflow-hidden rounded-3xl md:rounded-[2.5rem] ring-4 ring-white">
                <span className="font-heading text-[120px] md:text-[180px] font-black text-white/10 absolute top-4 right-4 leading-none select-none">02</span>
                <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-white mb-3 relative z-10">
                  Architektura systému
                </h3>
                <p className="font-body font-semibold text-sm md:text-base text-white/70 relative z-10">
                  Stavba informační struktury a wireframů. Vizuální vrstva je u nás pouze logickým vyústěním strategie, nikoliv estetickým experimentem.
                </p>
              </div>

              <div className="bg-[#0047CC] p-8 md:p-12 min-h-[400px] md:min-h-[450px] flex flex-col justify-end relative overflow-hidden rounded-3xl md:rounded-[2.5rem] ring-4 ring-white">
                <span className="font-heading text-[120px] md:text-[180px] font-black text-white/10 absolute top-4 right-4 leading-none select-none">03</span>
                <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-white mb-3 relative z-10">
                  Technická exekuce
                </h3>
                <p className="font-body font-semibold text-sm md:text-base text-white/70 relative z-10">
                  Nasazení čistého, škálovatelného kódu. Prioritou je stabilita, rychlost načítání a čistý SEO základ. Žádný balast, jen výkon.
                </p>
              </div>

              <div className="bg-[#0047CC] p-8 md:p-12 min-h-[400px] md:min-h-[450px] flex flex-col justify-end relative overflow-hidden rounded-3xl md:rounded-[2.5rem] ring-4 ring-white">
                <span className="font-heading text-[120px] md:text-[180px] font-black text-white/10 absolute top-4 right-4 leading-none select-none">04</span>
                <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-white mb-3 relative z-10">
                  Kontrola a iterace
                </h3>
                <p className="font-body font-semibold text-sm md:text-base text-white/70 relative z-10">
                  Spuštěním proces nekončí. Nasazujeme analytické protokoly a na základě reálných dat ladíme výkon rozhraní. Web je živý nástroj, ne statický soubor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Konzulát Section with Form */}
        <section className="w-full bg-[#ebebeb] px-4 md:px-6 py-4 md:py-3">
          <div className="bg-[#0047CC] rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-20 md:py-32 lg:py-40 px-6 md:px-12">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              FORMA SEQUITUR FUNCTIONEM.
            </h2>
            <p className="font-body font-semibold text-base md:text-lg text-white/70 mb-12 md:mb-16 max-w-2xl">
              Forma následuje funkci. Každý pixel, každá interakce, každý řádek kódu existuje proto, aby plnil konkrétní účel.
            </p>
            
            <div className="bg-white p-8 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl">
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
                    disabled={isSubmitting}
                    className="bg-black text-white hover:bg-black/90 font-heading text-lg px-8 py-6 h-auto rounded-none w-full md:w-auto disabled:opacity-50"
                  >
                    {isSubmitting ? "ODESÍLÁM..." : "AUDIENCE"}
                  </Button>
                  {isSubmitted && (
                    <p className="text-green-600 font-body font-semibold mt-4">Děkujeme! Vaše zpráva byla odeslána.</p>
                  )}
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

export default WebdesignPage;
