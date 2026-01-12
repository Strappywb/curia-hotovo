import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full bg-[#1a1a1a] flex items-center justify-center px-8 py-32 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-white mb-12 leading-tight">
              O NÁS
            </h1>
            
            <div className="space-y-8 font-body font-semibold text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed">
              <p>
                CURIA je studio zaměřené na strategický design a technickou exekuci. Webdesign, branding, marketing, grafiku a vývoj aplikací stavíme jako nástroje obchodního úspěchu.
              </p>
              
              <p>
                Naše práce stojí na třech pilířích: strategii odvozené z dat, formě následující funkci a měřitelných výsledcích.
              </p>
              
              <p className="text-white font-bold text-2xl md:text-3xl pt-8">
                FORMA SEQUITUR FUNCTIONEM.
              </p>
              
              <p>
                Design bez strategie jsou vyhozené peníze. Neděláme věci, co „hezky vypadají", ale věci, co mají mandát ovládnout pozornost.
              </p>
              
              <p>
                Jsme filtr na zbytečnosti. Jediným měřítkem je pro nás vliv vaší značky na trhu.
              </p>
              
              <p>
                Každý pixel má funkci. Každý řádek kódu má důvod. Každé rozhodnutí má data.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-16 pt-12 border-t border-white/20 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-xl text-white mb-4">
                  MAGISTRATUS
                </h3>
                <p className="text-white/60 mb-2">vedení společnosti</p>
                <a 
                  href="tel:+420606237743" 
                  className="text-white font-medium hover:underline block"
                >
                  +420 606 237 743
                </a>
                <a 
                  href="mailto:magistratus@lorem.cz" 
                  className="text-white font-medium hover:underline block mt-1"
                >
                  magistratus@lorem.cz
                </a>
              </div>
              
              <div>
                <h3 className="font-heading text-xl text-white mb-4">
                  COMMERCIUM
                </h3>
                <p className="text-white/60 mb-2">obchodní oddělení</p>
                <a 
                  href="tel:+420777561050" 
                  className="text-white font-medium hover:underline block"
                >
                  +420 777 561 050
                </a>
                <a 
                  href="mailto:commercium@lorem.cz" 
                  className="text-white font-medium hover:underline block mt-1"
                >
                  commercium@lorem.cz
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
