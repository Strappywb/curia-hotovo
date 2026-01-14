import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import webdesignImg from "@/assets/webdesign.webp";
import brandingImg from "@/assets/CURIAbranding.webp";
import marketingImg from "@/assets/marketinghero.webp";
import grafikaImg from "@/assets/grafika.webp";
import aplikaceImg from "@/assets/aplikace.webp";

const BentoSection = () => {
  return (
    <section id="services" className="w-full bg-background py-4 md:py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
      {/* WEBY & UI/UX - Full width like AirPods Pro card */}
      <div className="relative w-full bg-[#0047CC] min-h-[450px] md:min-h-[500px] lg:min-h-[600px] flex flex-col justify-between items-center p-6 pt-10 pb-8 md:p-12 md:pt-16 md:pb-10 lg:p-16 lg:pt-20 lg:pb-12 group rounded-3xl md:rounded-[2.5rem] overflow-hidden ring-4 ring-white">
        <Link to="/webdesign" className="absolute top-6 right-6 md:top-8 md:right-8 hover:scale-110 transition-transform">
          <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </Link>
        <div className="text-center">
          <h3 className="font-heading text-2xl md:text-5xl lg:text-6xl text-white">
            WEBDESIGN & VÝVOJ
          </h3>
          <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white mt-2 md:mt-3 max-w-md mx-auto">
            Vývoj technické infrastruktury. Architektura webu jako stabilního prodejního a informačního nástroje.
          </p>
        </div>
        <img 
          src={webdesignImg} 
          alt="Web design" 
          className="max-w-[90%] md:max-w-[60%] lg:max-w-[50%] h-auto object-contain"
        />
      </div>

      {/* 2x2 Grid - Rounded style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 mt-4 md:mt-4">
        <Link to="/branding" className="relative bg-[#0047CC] min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex flex-col justify-between items-center p-6 pt-10 pb-8 md:p-12 md:pt-14 md:pb-10 lg:p-16 lg:pt-16 lg:pb-12 group rounded-3xl md:rounded-[2.5rem] overflow-hidden ring-4 ring-white">
          <ArrowUpRight className="absolute top-6 right-6 md:top-8 md:right-8 w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
          <div className="text-center">
            <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl text-white">
              BRANDING
            </h3>
            <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white mt-2 md:mt-3 max-w-sm mx-auto">
              Definice tržního kódu a identity. Základní kámen dlouhodobé strategie a vnímání firmy.
            </p>
          </div>
          <img 
            src={brandingImg} 
            alt="Branding" 
            className="max-w-[70%] md:max-w-[60%] h-auto object-contain mt-6 md:mt-8 rounded-xl md:rounded-2xl"
          />
        </Link>

        <Link to="/marketing" className="relative bg-[#0047CC] min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex flex-col justify-between items-center p-6 pt-10 pb-8 md:p-12 md:pt-14 md:pb-10 lg:p-16 lg:pt-16 lg:pb-12 group rounded-3xl md:rounded-[2.5rem] overflow-hidden ring-4 ring-white">
          <ArrowUpRight className="absolute top-6 right-6 md:top-8 md:right-8 w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
          <div className="text-center">
            <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl text-white">
              MARKETING
            </h3>
            <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white mt-2 md:mt-3 max-w-sm mx-auto">
              Řízená distribuce pozornosti a práce s poptávkou. Dosahování cílů skrze data a psychologii trhu.
            </p>
          </div>
          <img 
            src={marketingImg} 
            alt="Marketing" 
            className="max-w-full md:max-w-[90%] h-auto object-contain rounded-lg md:rounded-xl -mt-4 md:-mt-6"
          />
        </Link>

        <Link to="/grafika" className="relative bg-[#0047CC] min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex flex-col justify-between items-center p-6 pt-10 pb-8 md:p-12 md:pt-14 md:pb-10 lg:p-16 lg:pt-16 lg:pb-12 group rounded-3xl md:rounded-[2.5rem] overflow-hidden ring-4 ring-white">
          <ArrowUpRight className="absolute top-6 right-6 md:top-8 md:right-8 w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
          <div className="text-center">
            <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl text-white">
              GRAFIKA
            </h3>
            <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white mt-2 md:mt-3 max-w-sm mx-auto">
              Vizuální zhmotnění strategie. Od návrhu logotypů po exekuci komplexních vizuálních kampaní.
            </p>
          </div>
          <img 
            src={grafikaImg} 
            alt="Grafika" 
            className="max-w-[70%] md:max-w-[60%] h-auto object-contain"
          />
        </Link>

        <Link to="/aplikace" className="relative bg-[#0047CC] min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex flex-col justify-between items-center p-6 pt-10 pb-8 md:p-12 md:pt-14 md:pb-10 lg:p-16 lg:pt-16 lg:pb-12 group rounded-3xl md:rounded-[2.5rem] overflow-hidden ring-4 ring-white">
          <ArrowUpRight className="absolute top-6 right-6 md:top-8 md:right-8 w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
          <div className="text-center">
            <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl text-white">
              APLIKACE
            </h3>
            <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white mt-2 md:mt-3 max-w-sm mx-auto">
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
      </div>
    </section>
  );
};

export default BentoSection;
