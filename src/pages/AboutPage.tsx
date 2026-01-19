import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import ContactFormSection from "@/components/ContactFormSection";
import onas2 from "@/assets/onas2.webp";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>O nás | CURIA - Kreativní studio Praha</title>
        <meta name="description" content="CURIA je studio zaměřené na strategický design a technickou exekuci. Webdesign, branding, marketing a aplikace pro ambiciózní firmy." />
        <meta property="og:title" content="O nás | CURIA - Kreativní studio Praha" />
        <meta property="og:description" content="CURIA je studio zaměřené na strategický design a technickou exekuci. Webdesign, branding, marketing a aplikace pro ambiciózní firmy." />
        <link rel="canonical" href="https://curia.cz/o-nas" />
      </Helmet>
      <Header />
      <main className="overflow-x-hidden bg-[#2a2a2a]">
        {/* Hero Section */}
        <section className="container mx-auto px-6 md:px-12 lg:px-16 py-32 md:py-40">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-stone-200 leading-tight max-w-5xl">
            Vytváříme digitální systémy pro značky, které mají ambici vést svůj obor.
          </h1>
        </section>

        {/* Image Section */}
        <section className="pb-32 md:pb-40">
          <div className="w-full overflow-hidden">
            <img 
              src={onas2} 
              alt="CURIA team" 
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-32 md:pb-40">
          {/* Mobile - všechny pod sebou */}
          <div className="grid grid-cols-1 gap-12 md:hidden">
            <div>
              <div className="text-5xl font-bold text-stone-200 mb-4">
                6
              </div>
              <p className="text-xl text-stone-400">
                Specialistů na exekuci
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-stone-200 mb-4">
                157
              </div>
              <p className="text-xl text-stone-400">
                realizovaných projektů
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-stone-200 mb-4">
                1 mld+ Kč
              </div>
              <p className="text-xl text-stone-400">
                Nárůst tržeb klientů
              </p>
            </div>
          </div>

          {/* Desktop/Tablet - všechny 3 na jednom řádku */}
          <div className="hidden md:flex justify-center items-start gap-24 lg:gap-32">
            <div className="text-center">
              <div className="text-7xl lg:text-8xl font-bold text-stone-200 mb-4">
                6
              </div>
              <p className="text-xl lg:text-2xl text-stone-400">
                Specialistů na exekuci
              </p>
            </div>

            <div className="text-center">
              <div className="text-7xl lg:text-8xl font-bold text-stone-200 mb-4">
                157
              </div>
              <p className="text-xl lg:text-2xl text-stone-400">
                realizovaných projektů
              </p>
            </div>

            <div className="text-center">
              <div className="text-7xl lg:text-8xl font-bold text-stone-200 mb-4">
                1 mld+ Kč
              </div>
              <p className="text-xl lg:text-2xl text-stone-400">
                Nárůst tržeb klientů
              </p>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-32 md:pb-40">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl md:text-2xl lg:text-3xl text-stone-300 leading-relaxed">
              Jsme tým specialistů na strategii, design a technickou realizaci. Stavíme značky a digitální platformy, které definují standardy v oboru.
            </p>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-stone-300 leading-relaxed">
              Pracujeme s design systémy a technickou precizností. Výsledkem je konzistentní a škálovatelná identita napříč všemi kontaktními body značky.
            </p>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-32 md:pb-40">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-200 mb-16 md:mb-24">
            Služby
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {/* Branding */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-200 mb-6">Branding</h3>
              <ul className="space-y-3 text-lg text-stone-400">
                <li>Strategie značky</li>
                <li>Vizuální identita</li>
                <li>Slovní identita</li>
                <li>Brand Guidelines</li>
                <li>Positioning & Messaging</li>
              </ul>
            </div>

            {/* Web & Digitál */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-200 mb-6">Web & Digitál</h3>
              <ul className="space-y-3 text-lg text-stone-400">
                <li>UX/UI Design</li>
                <li>Design systémy</li>
                <li>Webové aplikace</li>
                <li>E-commerce</li>
                <li>Interaktivní prezentace</li>
              </ul>
            </div>

            {/* Development */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-200 mb-6">Development</h3>
              <ul className="space-y-3 text-lg text-stone-400">
                <li>Frontend vývoj</li>
                <li>Backend & API</li>
                <li>CMS implementace</li>
                <li>Mobilní aplikace</li>
                <li>Technický consulting</li>
              </ul>
            </div>

            {/* Marketing */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-200 mb-6">Marketing</h3>
              <ul className="space-y-3 text-lg text-stone-400">
                <li>Content strategie</li>
                <li>SEO & technické SEO</li>
                <li>Performance marketing</li>
                <li>Marketing automation</li>
                <li>Analytika & reporting</li>
              </ul>
            </div>

            {/* Grafika */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-200 mb-6">Grafika</h3>
              <ul className="space-y-3 text-lg text-stone-400">
                <li>Art direction</li>
                <li>Ilustrace & grafika</li>
                <li>Motion design</li>
                <li>Fotografie & video</li>
                <li>Tiskové materiály</li>
              </ul>
            </div>

            {/* Strategie */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-200 mb-6">Strategie</h3>
              <ul className="space-y-3 text-lg text-stone-400">
                <li>Digitální audit</li>
                <li>User research</li>
                <li>Konkurenční analýza</li>
                <li>Growth strategie</li>
                <li>Procesní optimalizace</li>
              </ul>
            </div>
          </div>
        </section>

        <ContactFormSection />

        <FooterNew />
      </main>
    </>
  );
};

export default AboutPage;
