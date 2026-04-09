"use client";

import { useState } from "react";
import Link from "next/link";
import kk20 from "@/assets/sluzby/kk20.webp";
import portfolio3 from "@/assets/sluzby/mockupkk.webp";
import newportfolio5 from "@/assets/newportfolio5.webp";
import newportfolio6 from "@/assets/newportfolio6.webp";
import sturm2 from "@/assets/sluzby/sturm2.webp";

const projects = [
  {
    id: "comet",
    name: "Comet",
    subtitle: "Architektura průmyslové identity",
    type: "video" as const,
    src: "/videos/cometaportfolio.mp4",
    href: "#",
    popup: true,
  },
  {
    id: "kk-logo",
    name: "K+K Kačmáček",
    subtitle: "Webový ekosystém a digitální prezentace",
    type: "image" as const,
    src: portfolio3.src,
    href: "#",
    popup: true,
  },
  {
    id: "mados",
    name: "Mados",
    subtitle: "Architektura obchodního růstu",
    type: "video" as const,
    src: "/videos/newportfolio11.mp4",
    webm: "/videos/newportfolio11.webm",
    href: "/projekty/mados",
    popup: false,
  },
  {
    id: "aura",
    name: "Aura",
    subtitle: "Vizuální systém pro SaaS platformu",
    type: "image" as const,
    src: newportfolio5.src,
    href: "#",
    popup: true,
  },
  {
    id: "hf",
    name: "HF Stavby",
    subtitle: "Digitální autorita v oblasti revitalizace",
    type: "image" as const,
    src: newportfolio6.src,
    href: "#",
    popup: true,
  },
  {
    id: "vant",
    name: "Vant",
    subtitle: "Stavební materiály za lepší ceny, bez zbytečností",
    type: "video" as const,
    src: "/videos/vant.mp4",
    href: "#",
    popup: true,
  },
  {
    id: "sturm",
    name: "Sturm",
    subtitle: "Web pro finančního poradce, co budí důvěru",
    type: "image" as const,
    src: sturm2.src,
    href: "#",
    popup: true,
  },
  {
    id: "printeria",
    name: "Printeria",
    subtitle: "Digitální tvář tiskařské firmy",
    type: "video" as const,
    src: "/videos/printeria.mp4",
    href: "#",
    popup: true,
  },
  {
    id: "kk-web",
    name: "K+K Kačmáček",
    subtitle: "Kompletní vizuální identita pro autoservis",
    type: "image" as const,
    src: kk20.src,
    href: "#",
    popup: true,
  },
];

// Grid layout: [colSpan, aspect, offsetTop]
const gridLayout = [
  { col: "col-span-7", aspect: "aspect-[4/3]", pt: "" },
  { col: "col-span-5", aspect: "aspect-[3/4]", pt: "pt-24 lg:pt-32" },
  { col: "col-span-5", aspect: "aspect-[3/4]", pt: "" },
  { col: "col-span-7", aspect: "aspect-[4/3]", pt: "pt-24 lg:pt-32" },
  { col: "col-span-7", aspect: "aspect-[4/3]", pt: "" },
  { col: "col-span-5", aspect: "aspect-[3/4]", pt: "pt-24 lg:pt-32" },
  { col: "col-span-5", aspect: "aspect-[3/4]", pt: "" },
  { col: "col-span-7", aspect: "aspect-[4/3]", pt: "pt-24 lg:pt-32" },
  { col: "col-span-12", aspect: "aspect-[21/9]", pt: "" },
];

const PortfolioSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const renderMedia = (project: typeof projects[0], className: string) => {
    if (project.type === "video") {
      return project.webm ? (
        <video autoPlay loop muted playsInline className={className}>
          <source src={project.webm} type="video/webm" />
          <source src={project.src} type="video/mp4" />
        </video>
      ) : (
        <video src={project.src} autoPlay loop muted playsInline className={className} />
      );
    }
    return <img src={project.src} alt={project.name} className={className} />;
  };

  const renderCard = (project: typeof projects[0], layout: typeof gridLayout[0]) => {
    const inner = (
      <>
        <div className={`w-full ${layout.aspect} rounded-2xl overflow-hidden mb-4`}>
          {renderMedia(project, "w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]")}
        </div>
        <h3 className="text-2xl lg:text-[1.7rem] font-semibold text-black leading-tight">
          {project.name}
        </h3>
        <p className="text-base text-gray-500 mt-1 max-h-0 overflow-hidden opacity-0 transition-all duration-400 group-hover:max-h-10 group-hover:opacity-100">
          {project.subtitle}
        </p>
      </>
    );

    if (project.popup) {
      return (
        <div className={`${layout.col} ${layout.pt}`} key={project.id}>
          <button onClick={() => setShowPopup(true)} className="block w-full text-left group">
            {inner}
          </button>
        </div>
      );
    }

    return (
      <div className={`${layout.col} ${layout.pt}`} key={project.id}>
        <Link href={project.href} className="block w-full group">
          {inner}
        </Link>
      </div>
    );
  };

  return (
    <>
      {/* Intro section - Desktop */}
      <section className="hidden md:block bg-white pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-black leading-tight">
                Pro firmy, které to<br />myslí vážně
              </h2>
              <Link href="/projekty" className="inline-flex items-center gap-2 mt-6 text-black hover:opacity-70 transition-opacity">
                <span className="text-base font-medium">Všechny projekty</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="flex items-end">
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Spolupracujeme s firmami a značkami bez ohledu na velikost. Od začínajících projektů po zavedené hráče, kteří chtějí posílit svou digitální přítomnost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro section - Mobile */}
      <section className="block md:hidden bg-white pt-24 pb-14 px-5">
        <h2 className="text-3xl font-heading font-bold text-black leading-tight mb-4">
          Pro firmy, které to myslí vážně
        </h2>
        <p className="text-base text-gray-600 leading-relaxed mb-5">
          Spolupracujeme s firmami a značkami bez ohledu na velikost. Od začínajících projektů po zavedené hráče.
        </p>
        <Link href="/projekty" className="inline-flex items-center gap-2 text-black hover:opacity-70 transition-opacity">
          <span className="text-sm font-medium">Všechny projekty</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>

      {/* Desktop/Tablet */}
      <section className="hidden md:block bg-white pb-32">
        <h2 className="sr-only">Naše projekty</h2>

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          {/* Row 1 */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
            {renderCard(projects[0], gridLayout[0])}
            {renderCard(projects[1], gridLayout[1])}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start mt-16 lg:mt-20">
            {renderCard(projects[2], gridLayout[2])}
            {renderCard(projects[3], gridLayout[3])}
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start mt-16 lg:mt-20">
            {renderCard(projects[4], gridLayout[4])}
            {renderCard(projects[5], gridLayout[5])}
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start mt-16 lg:mt-20">
            {renderCard(projects[6], gridLayout[6])}
            {renderCard(projects[7], gridLayout[7])}
          </div>

          {/* Row 5 - full width */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start mt-16 lg:mt-20">
            {renderCard(projects[8], gridLayout[8])}
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden bg-white pb-24">
        <h2 className="sr-only">Naše projekty</h2>

        <div className="px-5 space-y-10">
          {projects.map((project) => {
            const inner = (
              <>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3">
                  {renderMedia(project, "w-full h-full object-cover")}
                </div>
                <h3 className="text-xl font-semibold text-black">{project.name}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{project.subtitle}</p>
              </>
            );

            if (project.popup) {
              return (
                <button key={project.id} onClick={() => setShowPopup(true)} className="block w-full text-left">
                  {inner}
                </button>
              );
            }

            return (
              <Link key={project.id} href={project.href} className="block w-full">
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Případová studie ve výrobě.
            </h3>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              Zavřít
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioSection;
