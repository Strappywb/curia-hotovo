"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import TransformSection from "@/components/TransformSection";
import ClientsSection from "@/components/ClientsSection";
import FAQNewSection from "@/components/FAQNewSection";
import FooterNew from "@/components/FooterNew";

const Index = () => {
  return (
    <>
<Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <PortfolioSection />
        <TransformSection />
        <ClientsSection />
        <FAQNewSection />
        <FooterNew />
      </main>
    </>
  );
};

export default Index;
