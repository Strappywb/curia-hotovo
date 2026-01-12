import { ChevronDown } from "lucide-react";
import curiaHero from "@/assets/curiahero.webp";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-screen bg-[#0057FF] overflow-hidden">
      {/* Main content */}
      <div className="h-full flex flex-col md:flex-row items-center px-8 pt-16 pb-32 md:px-12 lg:px-16 lg:pt-0">
        {/* Left - Hero Image */}
        <div className="flex-1 flex items-center justify-center lg:items-start lg:-mt-16">
          <img 
            src={curiaHero} 
            alt="Curia Hero" 
            className="w-full max-w-lg md:max-w-lg lg:max-w-xl h-auto object-contain"
          />
        </div>

        {/* Right - Description */}
        <div className="flex-1 flex flex-col justify-center items-start md:items-end mt-12 md:mt-0">
          <div className="max-w-md text-left md:text-right">
            <p className="font-heading text-xl md:text-2xl text-white mb-4">
              DIGITÁLNÍ ARCHITEKTURA
            </p>
            <p className="font-body font-semibold text-sm md:text-base text-white leading-relaxed">
              Sjednocujeme branding, design a technologii do funkčního řádu. Od stavby webů a mobilních aplikací po strategické řízení marketingu a propagace.
            </p>
          </div>

          {/* Scroll indicator with rotating element */}
          <div className="mt-12 flex flex-col items-center md:items-end">
            <div className="w-10 h-10 bg-white animate-rotate" style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
            }} />
            <ChevronDown className="w-8 h-8 text-white mt-4 animate-bounce-slow" />
          </div>
        </div>
      </div>

      {/* Bottom brand text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <h1 className="text-white text-[15vw] md:text-[18vw] lg:text-[16vw] whitespace-nowrap px-4 md:px-8 pb-4 font-black tracking-tight lg:tracking-[-0.02em] lg:scale-x-[1.05] origin-left">
          CURIA
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
