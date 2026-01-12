import { Link } from "react-router-dom";
import verdiktMados from "@/assets/verdikt-mados.png";
import verdiktHf from "@/assets/verdikt-hf.png";
import verdiktPrint from "@/assets/verdikt-print.png";
import verdiktSturm from "@/assets/verdikt-sturm.png";

const mandates = [
  { id: 1, image: verdiktMados, alt: "Mados projekt" },
  { id: 2, image: verdiktHf, alt: "HF projekt" },
  { id: 3, image: verdiktPrint, alt: "Print projekt" },
  { id: 4, image: verdiktSturm, alt: "Šturm projekt" },
];

const MandatesSection = () => {
  return (
    <section id="projects" className="w-full bg-background py-3">
      <div className="max-w-7xl mx-auto px-6 mb-10 md:mb-16">
        <h2 className="font-satoshi text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center">
          MANDÁTY
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {mandates.map((mandate) => {
          // Link for Mados and HF Stavby
          const MandateWrapper = (mandate.id === 1 || mandate.id === 2) ? Link : 'div';
          const wrapperProps = mandate.id === 1 
            ? { to: '/projekty/mados' } 
            : mandate.id === 2 
            ? { to: '/projekty/hf-stavby' }
            : {};
          
          return (
            <MandateWrapper
              key={mandate.id}
              {...wrapperProps}
              className="relative overflow-hidden min-h-[400px] md:min-h-[450px] lg:min-h-[500px] group cursor-pointer"
            >
              <img
                src={mandate.image}
                alt={mandate.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </MandateWrapper>
          );
        })}
      </div>
    </section>
  );
};

export default MandatesSection;
