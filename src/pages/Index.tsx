import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ManifestSection from "@/components/ManifestSection";
import BentoSection from "@/components/BentoSection";
import StatsSection from "@/components/StatsSection";
import MottoSection from "@/components/MottoSection";
import MandatesSection from "@/components/MandatesSection";
import ConsulateSection from "@/components/ConsulateSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

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
        <ManifestSection />
        <BentoSection />
        <StatsSection />
        <MottoSection />
        <MandatesSection />
        <ConsulateSection />
        <FAQSection />
        <BlogSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
