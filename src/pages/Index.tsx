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
