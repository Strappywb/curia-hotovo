import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ManifestSection from "@/components/ManifestSection";
import BentoSection from "@/components/BentoSection";
import StatsSection from "@/components/StatsSection";
import MottoSection from "@/components/MottoSection";
import MandatesSection from "@/components/MandatesSection";
import ConsulateSection from "@/components/ConsulateSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CURIA | Webdesign, Branding & Marketing Studio</title>
        <meta name="description" content="Kreativní studio zaměřené na webdesign, budování značek a digitální marketing. Pomáháme firmám růst online." />
        <meta property="og:title" content="CURIA | Webdesign, Branding & Marketing Studio" />
        <meta property="og:description" content="Kreativní studio zaměřené na webdesign, budování značek a digitální marketing. Pomáháme firmám růst online." />
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
        <BlogSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
