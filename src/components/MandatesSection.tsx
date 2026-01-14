import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import verdiktMados from "@/assets/verdikt-mados.webp";
import verdiktHf from "@/assets/verdikt-hf.webp";
import verdiktPrint from "@/assets/verdikt-print.webp";
import verdiktSturm from "@/assets/verdikt-sturm.webp";

const mandates = [
  { id: 1, image: verdiktMados, alt: "Mados projekt" },
  { id: 2, image: verdiktHf, alt: "HF projekt" },
  { id: 3, image: verdiktPrint, alt: "Print projekt" },
  { id: 4, image: verdiktSturm, alt: "Šturm projekt" },
];

const MandatesSection = () => {
  return (
    <section id="projects" className="w-full bg-background py-4 md:py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
      <div className="px-0 mb-10 md:mb-16">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-black text-center">
          MANDÁTY
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
        {mandates.map((mandate) => {
          // All mandates are now clickable
          const slugs: { [key: number]: string } = {
            1: '/projekty/mados',
            2: '/projekty/hf-stavby',
            3: '/projekty/printeria',
            4: '/projekty/sturm'
          };
          
          return (
            <Link
              key={mandate.id}
              to={slugs[mandate.id]}
              className="relative overflow-hidden min-h-[400px] md:min-h-[450px] lg:min-h-[500px] group cursor-pointer rounded-3xl md:rounded-[2.5rem] ring-4 ring-white"
            >
              <img
                src={mandate.image}
                alt={mandate.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-white p-2 group-hover:scale-110 transition-transform rounded-xl">
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
            </Link>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default MandatesSection;
