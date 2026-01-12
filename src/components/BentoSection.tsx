import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import webdesignImg from "@/assets/webdesigncuria.png";
import brandingImg from "@/assets/branding.png";
import marketingImg from "@/assets/marketing.png";
import grafikaImg from "@/assets/grafika.png";
import aplikaceImg from "@/assets/aplikace.png";

const BentoSection = () => {
  return (
    <section id="services" className="w-full bg-background py-3">
      {/* WEBY & UI/UX - Full width like AirPods Pro card */}
      <div className="relative w-full bg-[#0057FF] min-h-[450px] md:min-h-[500px] lg:min-h-[600px] flex flex-col justify-between items-center p-6 pt-10 pb-8 md:p-12 md:pt-16 md:pb-10 lg:p-16 lg:pt-20 lg:pb-12 group">
        <Link to="/webdesign" className="absolute top-6 right-6 md:top-8 md:right-8 hover:scale-110 transition-transform">
          <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </Link>
        <div className="text-center">
          <h3 className="font-satoshi text-2xl md:text-5xl lg:text-6xl font-bold text-white">
            WEBDESIGN & VÝVOJ
          </h3>
          <p className="font-satoshi text-sm md:text-base lg:text-lg text-white mt-2 md:mt-3 max-w-md mx-auto">
            Vývoj technické infrastruktury. Architektura webu jako stabilního prodejního a informačního nástroje.
          </p>
        </div>
        <img 
          src={webdesignImg} 
          alt="Web design" 
          className="max-w-[90%] md:max-w-[60%] lg:max-w-[50%] h-auto object-contain"
        />
      </div>

      {/* 2x2 Grid - Apple style with minimal gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <Link to="/branding" className="relative bg-[#0057FF] min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex flex-col justify-between items-center p-6 pt-10 pb-8 md:p-12 md:pt-14 md:pb-10 lg:p-16 lg:pt-16 lg:pb-12 group">
          <ArrowUpRight className="absolute top-6 right-6 md:top-8 md:right-8 w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
          <div className="text-center">
            <h3 className="font-satoshi text-2xl md:text-4xl lg:text-5xl font-bold text-white">
              BRANDING
            </h3>
            <p className="font-satoshi text-sm md:text-base lg:text-lg text-white mt-2 md:mt-3 max-w-sm mx-auto">
              Definice tržního kódu a identity. Základní kámen dlouhodobé strategie a vnímání firmy.
            </p>
          </div>
          <img 
            src={brandingImg} 
            alt="Branding" 
            className="max-w-[55%] md:max-w-[50%] lg:max-w-[45%] h-auto object-contain"
          />
        </Link>

        <Link to="/marketing" className="relative bg-[#0057FF] min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex flex-col justify-between items-center p-6 pt-10 pb-8 md:p-12 md:pt-14 md:pb-10 lg:p-16 lg:pt-16 lg:pb-12 group">
          <ArrowUpRight className="absolute top-6 right-6 md:top-8 md:right-8 w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
          <div className="text-center">
            <h3 className="font-satoshi text-2xl md:text-4xl lg:text-5xl font-bold text-white">
              MARKETING
            </h3>
            <p className="font-satoshi text-sm md:text-base lg:text-lg text-white mt-2 md:mt-3 max-w-sm mx-auto">
              Řízená distribuce pozornosti a práce s poptávkou. Dosahování cílů skrze data a psychologii trhu.
            </p>
          </div>
          <img 
            src={marketingImg} 
            alt="Marketing" 
            className="max-w-[70%] md:max-w-[60%] h-auto object-contain"
          />
        </Link>

        <Link to="/grafika" className="relative bg-[#0057FF] min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex flex-col justify-between items-center p-6 pt-10 pb-8 md:p-12 md:pt-14 md:pb-10 lg:p-16 lg:pt-16 lg:pb-12 group">
          <ArrowUpRight className="absolute top-6 right-6 md:top-8 md:right-8 w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
          <div className="text-center">
            <h3 className="font-satoshi text-2xl md:text-4xl lg:text-5xl font-bold text-white">
              GRAFIKA
            </h3>
            <p className="font-satoshi text-sm md:text-base lg:text-lg text-white mt-2 md:mt-3 max-w-sm mx-auto">
              Vizuální zhmotnění strategie. Od návrhu logotypů po exekuci komplexních vizuálních kampaní.
            </p>
          </div>
          <img 
            src={grafikaImg} 
            alt="Grafika" 
            className="max-w-[70%] md:max-w-[60%] h-auto object-contain"
          />
        </Link>

        <Link to="/aplikace" className="relative bg-[#0057FF] min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex flex-col justify-between items-center p-6 pt-10 pb-8 md:p-12 md:pt-14 md:pb-10 lg:p-16 lg:pt-16 lg:pb-12 group">
          <ArrowUpRight className="absolute top-6 right-6 md:top-8 md:right-8 w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
          <div className="text-center">
            <h3 className="font-satoshi text-2xl md:text-4xl lg:text-5xl font-bold text-white">
              APLIKACE
            </h3>
            <p className="font-satoshi text-sm md:text-base lg:text-lg text-white mt-2 md:mt-3 max-w-sm mx-auto">
              Funkční řešení pro specifické potřeby uživatelů. Vývoj od uživatelského rozhraní po nasazení do ostrého provozu.
            </p>
          </div>
          <img 
            src={aplikaceImg} 
            alt="Aplikace" 
            className="max-w-[70%] md:max-w-[60%] h-auto object-contain"
          />
        </Link>
      </div>
    </section>
  );
};

export default BentoSection;
