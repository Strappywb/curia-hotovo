import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import grafikaImg from "@/assets/grafika.webp";
import logaaImg from "@/assets/logaa.webp";
import marketin10Img from "@/assets/marketin10.webp";
import bannerImg from "@/assets/banner.webp";
import tiskexterierImg from "@/assets/tiskexterier.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const kategorie = [
  {
    title: "LOGOTYPY & SYMBOLY",
    description: "Grafické značky a wordmarky pro okamžitou rozpoznatelnost. Systémy vizuální identity, které se zapíšou do paměti.",
    image: logaaImg
  },
  {
    title: "REKLAMNÍ BANNERY",
    description: "Kampaňové vizuály pro online i offline. Od display reklam po billboardy. Jeden pohled, jasné sdělení.",
    image: bannerImg
  },
  {
    title: "TISK & EXTERIÉR",
    description: "Letáky, plakáty, polepy, OOH formáty. Vše v tiskové kvalitě, připravené k realizaci bez dalších úprav.",
    image: tiskexterierImg
  },
  {
    title: "SOCIÁLNÍ SÍTĚ",
    description: "Grafika pro Instagram, Facebook, LinkedIn. Formáty optimalizované pro engagement a konzistentní vizuální styl.",
    image: marketin10Img
  },
];

const servisniKarty = [
  {
    number: "01",
    title: "KONZISTENCE",
    subtitle: "JEDNOTNÝ VIZUÁL",
    description: "Vaše grafika musí vypadat stejně kvalitně na webu, na Instagramu i na billboardu. Dodáváme systém, ne jednorázové výstupy."
  },
  {
    number: "02",
    title: "RYCHLOST",
    subtitle: "DODACÍ LHŮTY",
    description: "Bannery do 48 hodin. Kompletní kampaňové sety do týdne. Bez kompromisů na kvalitě, bez zbytečného čekání."
  },
  {
    number: "03",
    title: "POUŽITELNOST",
    subtitle: "READY TO USE",
    description: "Všechny soubory v potřebných formátech a rozměrech. Připraveno k okamžitému nasazení bez dalších úprav."
  },
];

const GrafikaPage = () => {
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
        <title>Grafický design & Vizuální identity | CURIA Design Studio</title>
        <meta name="description" content="Profesionální grafický design. Loga, bannery, tiskoviny, sociální sítě. Od návrhu po tiskovou přípravu." />
        <meta property="og:title" content="Grafický design & Vizuální identity | CURIA Design Studio" />
        <meta property="og:description" content="Profesionální grafický design. Loga, bannery, tiskoviny, sociální sítě. Od návrhu po tiskovou přípravu." />
        <link rel="canonical" href="https://curia.cz/grafika" />
      </Helmet>
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Section - Fullscreen */}
        <section className="relative h-screen w-screen bg-[#1a1a1a] overflow-hidden">
          <div className="h-full flex flex-col md:flex-row items-center px-8 pt-24 pb-32 md:px-12 lg:px-16 lg:pt-0">
            {/* Left - Hero Image */}
            <div className="flex-1 flex items-center justify-center lg:items-center">
              <img 
                src={grafikaImg} 
                alt="Grafika" 
                className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
              />
            </div>

            {/* Right - Description */}
            <div className="flex-1 flex flex-col justify-center items-start md:items-end mt-8 md:mt-0">
              <div className="max-w-md text-left md:text-right">
                <p className="font-heading text-xl md:text-2xl text-white mb-4">
                  VIZUÁLNÍ EXEKUCE
                </p>
                <p className="font-body font-semibold text-sm md:text-base text-white/70 leading-relaxed">
                  Grafika je nástroj, ne dekorace. Každý pixel má funkci. Každý layout má účel.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom brand text */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <h1 className="text-white text-[15vw] md:text-[15vw] lg:text-[13vw] whitespace-nowrap px-4 md:px-8 pb-4 font-black tracking-tight lg:tracking-[-0.02em] lg:scale-x-[1.05] origin-left">
              GRAFIKA
            </h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="w-full bg-white py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-black mb-8">
              CO DĚLÁME
            </h2>
            <p className="font-body font-semibold text-lg md:text-xl lg:text-2xl text-black/60 leading-relaxed">
              Od loga po billboard. Vše, co vaše značka potřebuje vidět.
            </p>
          </div>
        </section>

        {/* Kategorie - Stacked Layout */}
        <section className="w-full bg-[#f5f5f5]">
          <div className="flex flex-col gap-4">
          {kategorie.map((item, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-2"
            >
              {/* Text Box - vlevo na desktopu, dole na mobilu */}
              <div className={`bg-[#1a1a1a] min-h-[350px] md:min-h-[450px] lg:min-h-[550px] flex flex-col justify-center p-8 md:p-12 lg:p-16 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="font-body font-semibold text-sm md:text-base text-white/60 leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
              
              {/* Image Box - vpravo na desktopu, nahoře na mobilu */}
              <div className={`bg-gray-200 min-h-[300px] md:min-h-[450px] lg:min-h-[550px] flex items-center justify-center order-first md:order-none ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-body font-semibold text-gray-400 text-sm">Obrázek {index + 1}</span>
                )}
              </div>
            </div>
          ))}
          </div>
        </section>

        {/* Servisní karty - Apple Style */}
        <section className="w-full bg-white py-20 md:py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-black mb-16 text-center">
              SERVISNÍ STANDARD
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {servisniKarty.map((karta, index) => (
                <div key={index} className="text-center">
                  <span className="font-body font-semibold text-sm text-black/40 mb-4 block">
                    {karta.number}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl text-black mb-2">
                    {karta.title}
                  </h3>
                  <p className="font-heading text-lg text-black/80 mb-4">
                    {karta.subtitle}.
                  </p>
                  <p className="font-body font-semibold text-sm md:text-base text-black/60 leading-relaxed">
                    {karta.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parametry služby - Stats */}
        <section className="w-full bg-black py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-heading text-2xl md:text-3xl text-white/40 mb-12 text-center">
              PARAMETRY SLUŽBY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              <div className="text-center py-8">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
                  5+ LET
                </div>
                <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white/60 mt-2 md:mt-3">
                  životnost vizuálního standardu
                </p>
              </div>
              <div className="text-center py-8">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
                  0.01 MM
                </div>
                <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white/60 mt-2 md:mt-3">
                  přesnost tiskových dat
                </p>
              </div>
              <div className="text-center py-8">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
                  100%
                </div>
                <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white/60 mt-2 md:mt-3">
                  reprodukovatelnost systému
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bold Statement Section */}
        <section className="w-full bg-[#1a1a1a] py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
              GRAFIKA BEZ STRATEGIE JE UMĚNÍ. GRAFIKA SE STRATEGIÍ JE NÁSTROJ DOMINANCE.
            </h2>
          </div>
        </section>

        {/* Konzulát Section with Form */}
        <section className="w-full bg-[#1a1a1a] py-20 md:py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              FORMA SEQUITUR FUNCTIONEM.
            </h2>
            <p className="font-body font-semibold text-base md:text-lg text-white/70 mb-12 md:mb-16 max-w-2xl">
              Forma následuje funkci. Každý vizuální element má svůj účel. Nic navíc, nic méně.
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

export default GrafikaPage;
