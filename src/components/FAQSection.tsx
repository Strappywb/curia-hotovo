import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Co CURIA dělá?",
    answer: "Jsme studio zaměřené na webdesign, branding, marketing a vývoj aplikací. Pomáháme firmám budovat silnou digitální přítomnost a růst online. Od strategie přes design až po technickou realizaci."
  },
  {
    question: "Jak rychle dokážete dodat projekt?",
    answer: "Weby dodáváme v řádu dnů až týdnů. Grafické práce dle rozsahu od dnů po týdny. Komplexní branding typicky týdny až měsíce. Vždy záleží na rozsahu a komplexitě projektu."
  },
  {
    question: "Na jakých technologiích stavíte weby?",
    answer: "Pracujeme s vlastním kódem (React, Next.js), Framer a Webflow. Technologii volíme podle potřeb projektu — rychlost, škálovatelnost, možnost úprav klientem."
  },
  {
    question: "Je v ceně webu i hosting?",
    answer: "Ano, cena zahrnuje i hosting a základní údržbu. Nemusíte řešit technické detaily — o vše se postaráme."
  },
  {
    question: "Jak probíhá spolupráce?",
    answer: "Začínáme analýzou a strategií. Pak návrh, iterace na základě zpětné vazby a finální realizace. Komunikujeme průběžně, máte přehled o každém kroku."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-black mb-4">
            ČASTÉ DOTAZY
          </h2>
          <p className="font-body font-semibold text-base md:text-lg text-black/60">
            Odpovědi na otázky, které dostáváme nejčastěji.
          </p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-black/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-heading text-lg md:text-xl text-black pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-10 h-10 bg-black flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="font-body font-semibold text-base text-black/70 leading-relaxed pr-16">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link 
          to="/faq"
          className="inline-flex items-center gap-3 mt-10 group"
        >
          <span className="font-heading text-lg text-black group-hover:underline">
            Více otázek a odpovědí
          </span>
          <div className="w-10 h-10 bg-black flex items-center justify-center group-hover:bg-black/80 transition-colors">
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FAQSection;
