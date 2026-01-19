import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import TransformSection from "@/components/TransformSection";
import FAQNewSection from "@/components/FAQNewSection";
import ContactFormSection from "@/components/ContactFormSection";
import FooterNew from "@/components/FooterNew";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CURIA | Webdesign, Branding & Marketing Studio</title>
        <meta name="description" content="Kreativní studio zaměřené na webdesign, budování značek a digitální marketing. Pomáháme firmám růst online." />
        <meta name="keywords" content="webdesign, branding, marketing, tvorba webových stránek, firemní identita, digitální marketing Praha" />
        <meta property="og:title" content="CURIA | Webdesign, Branding & Marketing Studio" />
        <meta property="og:description" content="Kreativní studio zaměřené na webdesign, budování značek a digitální marketing. Pomáháme firmám růst online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://curia.cz/" />
        <meta property="og:image" content="https://curia.cz/og-image.png" />
        <meta property="og:locale" content="cs_CZ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CURIA | Webdesign, Branding & Marketing Studio" />
        <meta name="twitter:description" content="Kreativní studio zaměřené na webdesign, budování značek a digitální marketing." />
        <meta name="twitter:image" content="https://curia.cz/og-image.png" />
        <link rel="canonical" href="https://curia.cz/" />
      </Helmet>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <PortfolioSection />
        <TransformSection />
        <ContactFormSection />
        <FAQNewSection />
        <FooterNew />
      </main>
    </>
  );
};

export default Index;
