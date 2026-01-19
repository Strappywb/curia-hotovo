import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import CookieConsent from "./components/CookieConsent";
import Index from "./pages/Index";
import SluzbyPage from "./pages/SluzbyPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ProjektyPage from "./pages/ProjektyPage";
import KarieraPage from "./pages/KarieraPage";
import MadosPage from "./pages/projects/MadosPage";
import HFStavbyPage from "./pages/projects/HFStavbyPage";
import PrinteriaPage from "./pages/projects/PrinteriaPage";
import SturmPage from "./pages/projects/SturmPage";
import WebKteryProdavaPage from "./pages/blog/WebKteryProdavaPage";
import StrategickyMarketingPage from "./pages/blog/StrategickyMarketingPage";
import BudovaniZnackyPage from "./pages/blog/BudovaniZnackyPage";
import GrafikaALogoPage from "./pages/blog/GrafikaALogoPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/sluzby" element={<PageTransition><SluzbyPage /></PageTransition>} />
        <Route path="/o-nas" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
        <Route path="/projekty" element={<PageTransition><ProjektyPage /></PageTransition>} />
        <Route path="/kariera" element={<PageTransition><KarieraPage /></PageTransition>} />
        
        {/* Projekty */}
        <Route path="/projekty/mados" element={<PageTransition><MadosPage /></PageTransition>} />
        <Route path="/projekty/hf-stavby" element={<PageTransition><HFStavbyPage /></PageTransition>} />
        <Route path="/projekty/printeria" element={<PageTransition><PrinteriaPage /></PageTransition>} />
        <Route path="/projekty/sturm" element={<PageTransition><SturmPage /></PageTransition>} />
        
        {/* Blog články */}
        <Route path="/blog/web-ktery-prodava" element={<PageTransition><WebKteryProdavaPage /></PageTransition>} />
        <Route path="/blog/strategicky-marketing" element={<PageTransition><StrategickyMarketingPage /></PageTransition>} />
        <Route path="/blog/budovani-znacky" element={<PageTransition><BudovaniZnackyPage /></PageTransition>} />
        <Route path="/blog/grafika-a-logo" element={<PageTransition><GrafikaALogoPage /></PageTransition>} />
        
        {/* 301 Redirects - staré URL služeb */}
        <Route path="/webdesign" element={<Navigate to="/sluzby" replace />} />
        <Route path="/branding" element={<Navigate to="/sluzby" replace />} />
        <Route path="/marketing" element={<Navigate to="/sluzby" replace />} />
        <Route path="/grafika" element={<Navigate to="/sluzby" replace />} />
        <Route path="/aplikace" element={<Navigate to="/sluzby" replace />} />
        <Route path="/faq" element={<Navigate to="/" replace />} />
        
        {/* 404 */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
