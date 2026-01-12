import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";
import aplikaceImg from "@/assets/aplikace.webp";
import aplikace2Img from "@/assets/aplikace2.webp";
import aplikace3Img from "@/assets/aplikace3.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const AplikacePage = () => {
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
        <title>Vývoj mobilních & webových aplikací | CURIA Dev Studio</title>
        <meta name="description" content="Vývoj mobilních a webových aplikací na míru. iOS, Android, React Native, PWA. Od wireframu po App Store." />
        <meta property="og:title" content="Vývoj mobilních & webových aplikací | CURIA Dev Studio" />
        <meta property="og:description" content="Vývoj mobilních a webových aplikací na míru. iOS, Android, React Native, PWA. Od wireframu po App Store." />
        <link rel="canonical" href="https://curia.cz/aplikace" />
      </Helmet>
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Section - Fullscreen */}
        <section className="relative h-screen w-screen bg-[#0057FF] overflow-hidden">
          <div className="h-full flex flex-col md:flex-row items-center px-8 pt-24 pb-32 md:px-12 lg:px-16 lg:pt-0">
            {/* Left - Hero Image */}
            <div className="flex-1 flex items-center justify-center lg:items-center">
              <img 
                src={aplikaceImg} 
                alt="Aplikace" 
                className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
              />
            </div>

            {/* Right - Description */}
            <div className="flex-1 flex flex-col justify-center items-start md:items-end mt-8 md:mt-0">
              <div className="max-w-md text-left md:text-right">
                <p className="font-heading text-xl md:text-2xl text-white mb-4">
                  DIGITÁLNÍ PRODUKTY
                </p>
                <p className="font-body font-semibold text-sm md:text-base text-white leading-relaxed">
                  Mobilní a webové aplikace, které řeší reálné problémy. Od prvního wireframu po deployment. Váš produkt v kapsách a prohlížečích zákazníků.
                </p>
              </div>

              {/* Scroll indicator */}
              <div className="mt-12 flex flex-col items-center md:items-end">
                <ChevronDown className="w-8 h-8 text-white animate-bounce-slow" />
              </div>
            </div>
          </div>

          {/* Bottom brand text */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <h1 className="text-white text-[12vw] md:text-[12vw] lg:text-[11vw] whitespace-nowrap px-4 md:px-8 pb-4 font-black tracking-tight lg:tracking-[-0.02em] lg:scale-x-[1.05] origin-left">
              APLIKACE
            </h1>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="w-full bg-[#1a1a1a] py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="px-8 md:px-12 lg:px-16 mb-16 md:mb-24">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl text-white leading-tight max-w-4xl">
              Software, který zůstává<br />nainstalovaný.
            </h2>
            <p className="font-body font-semibold text-lg md:text-xl lg:text-2xl text-white/60 mt-10 md:mt-12 max-w-3xl leading-relaxed">
              Většina aplikací končí smazaná do týdne. Vaše ne. Produkty, které vaši zákazníci používají denně — protože jim skutečně pomáhají.
            </p>
          </div>
          
          <div className="w-full flex justify-center">
            <img 
              src={aplikace2Img}
              alt="CURIA Aplikace"
              className="w-full md:w-[95vw] lg:w-[100vw] max-w-none h-auto object-contain"
            />
          </div>
        </section>

        {/* Manifest Section */}
        <section className="min-h-screen w-full bg-white px-8 md:px-12 lg:px-16 py-24 lg:py-32 flex items-center justify-center">
          <div className="max-w-4xl text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-black mb-8">
              Aplikace není web v obalu.
            </h2>
            <div className="space-y-6 font-body font-semibold text-lg md:text-xl lg:text-2xl text-black leading-relaxed">
              <p>
                Mobilní a webové aplikace mají vlastní pravidla. Jiné uživatelské vzorce, jiné očekávání, jiné technologie. Co funguje na webu, v appce selhává.
              </p>
              <p>
                Produkty pro reálné použití. Testované na reálných uživatelích. Postavené na reálných datech.
              </p>
              <p>
                Výsledek? Aplikace, které vaši zákazníci nechtějí smazat.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid with Image */}
        <section className="w-full bg-[#0057FF] py-16 md:py-24 lg:py-32">
          <div className="px-6 md:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left - Feature Cards */}
              <div className="flex-1 order-1 lg:order-1">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-6 md:p-8">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">iOS & Android</h3>
                    <p className="font-body font-semibold text-sm text-black/70">Nativní i cross-platform vývoj</p>
                  </div>
                  <div className="bg-white p-6 md:p-8">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">Web Apps</h3>
                    <p className="font-body font-semibold text-sm text-black/70">PWA a SaaS platformy</p>
                  </div>
                  <div className="bg-white p-6 md:p-8">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">UI/UX Design</h3>
                    <p className="font-body font-semibold text-sm text-black/70">Wireframy, prototypy, user flow</p>
                  </div>
                  <div className="bg-white p-6 md:p-8">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">Backend</h3>
                    <p className="font-body font-semibold text-sm text-black/70">API, databáze, cloud infrastruktura</p>
                  </div>
                  <div className="bg-white p-6 md:p-8">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">Integrace</h3>
                    <p className="font-body font-semibold text-sm text-black/70">Napojení na vaše systémy</p>
                  </div>
                  <div className="bg-white p-6 md:p-8">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">Testování</h3>
                    <p className="font-body font-semibold text-sm text-black/70">QA, user testing, beta programy</p>
                  </div>
                  <div className="bg-white p-6 md:p-8">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">Deployment</h3>
                    <p className="font-body font-semibold text-sm text-black/70">App Store, Google Play, hosting</p>
                  </div>
                  <div className="bg-white p-6 md:p-8">
                    <h3 className="font-heading text-lg md:text-xl text-black mb-2">Podpora</h3>
                    <p className="font-body font-semibold text-sm text-black/70">Údržba, aktualizace, monitoring</p>
                  </div>
                </div>
              </div>
              
              {/* Right - Image */}
              <div className="flex-1 order-2 lg:order-2 flex items-center justify-center">
                <img 
                  src={aplikace3Img}
                  alt="CURIA Aplikace Vývoj"
                  className="w-full max-w-md lg:max-w-none h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full bg-black py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              <div className="text-center py-8">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
                  3+
                </div>
                <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white/70 mt-2 md:mt-3">
                  Roky vývoje aplikací
                </p>
              </div>
              <div className="text-center py-8">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
                  iOS & Android
                </div>
                <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white/70 mt-2 md:mt-3">
                  Nativní i cross-platform
                </p>
              </div>
              <div className="text-center py-8">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
                  100%
                </div>
                <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white/70 mt-2 md:mt-3">
                  Funkčnost při spuštění
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - 2x2 Grid */}
        <section className="w-full bg-[#F5F5F5] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0057FF] p-8 md:p-12 min-h-[400px] md:min-h-[450px] flex flex-col justify-end relative overflow-hidden">
                <span className="font-heading text-[120px] md:text-[180px] font-black text-white/10 absolute top-4 right-4 leading-none select-none">01</span>
                <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-white mb-3 relative z-10">
                  MOBILNÍ APLIKACE
                </h3>
                <p className="font-body font-semibold text-sm md:text-base text-white/70 relative z-10">
                  Nativní i cross-platform aplikace pro iOS a Android. Výkon, stabilita a intuitivní ovládání, které udrží vaši značku v kapse zákazníka 24/7.
                </p>
              </div>

              <div className="bg-[#0057FF] p-8 md:p-12 min-h-[400px] md:min-h-[450px] flex flex-col justify-end relative overflow-hidden">
                <span className="font-heading text-[120px] md:text-[180px] font-black text-white/10 absolute top-4 right-4 leading-none select-none">02</span>
                <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-white mb-3 relative z-10">
                  WEBOVÉ APLIKACE & SAAS
                </h3>
                <p className="font-body font-semibold text-sm md:text-base text-white/70 relative z-10">
                  Komplexní systémy přístupné odkudkoliv. Od interních firemních nástrojů po globální SaaS platformy. Robustní řešení, která rostou spolu s vaším byznysem.
                </p>
              </div>

              <div className="bg-[#0057FF] p-8 md:p-12 min-h-[400px] md:min-h-[450px] flex flex-col justify-end relative overflow-hidden">
                <span className="font-heading text-[120px] md:text-[180px] font-black text-white/10 absolute top-4 right-4 leading-none select-none">03</span>
                <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-white mb-3 relative z-10">
                  UI/UX & PROTOTYPOVÁNÍ
                </h3>
                <p className="font-body font-semibold text-sm md:text-base text-white/70 relative z-10">
                  Design aplikací začíná u logiky, ne u barev. Rozhraní, která vedou uživatele přesně tam, kam potřebujete. Každé kliknutí dává smysl.
                </p>
              </div>

              <div className="bg-[#0057FF] p-8 md:p-12 min-h-[400px] md:min-h-[450px] flex flex-col justify-end relative overflow-hidden">
                <span className="font-heading text-[120px] md:text-[180px] font-black text-white/10 absolute top-4 right-4 leading-none select-none">04</span>
                <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-white mb-3 relative z-10">
                  BACKEND & INTEGRACE
                </h3>
                <p className="font-body font-semibold text-sm md:text-base text-white/70 relative z-10">
                  To, co není vidět, ale bez čeho nic nefunguje. Propojení aplikace s vašimi systémy, API, bezpečnost a škálovatelnost. Motor, který utáhne i největší nápor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Konzulát Section with Form */}
        <section className="w-full bg-[#0057FF] py-20 md:py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              CODEX APPLICATIONIS.
            </h2>
            <p className="font-body font-semibold text-base md:text-lg text-white/70 mb-12 md:mb-16 max-w-2xl">
              Každá aplikace je systém. Každý systém potřebuje architekturu. A každá architektura začíná konzultací.
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

export default AplikacePage;
