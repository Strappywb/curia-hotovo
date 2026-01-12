import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WebdesignPage from "./pages/WebdesignPage";
import BrandingPage from "./pages/BrandingPage";
import MarketingPage from "./pages/MarketingPage";
import GrafikaPage from "./pages/GrafikaPage";
import AplikacePage from "./pages/AplikacePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import MadosPage from "./pages/projects/MadosPage";
import HFStavbyPage from "./pages/projects/HFStavbyPage";
import PrinteriaPage from "./pages/projects/PrinteriaPage";
import SturmPage from "./pages/projects/SturmPage";
import WebKteryProdavaPage from "./pages/blog/WebKteryProdavaPage";
import StrategickyMarketingPage from "./pages/blog/StrategickyMarketingPage";
import BudovaniZnackyPage from "./pages/blog/BudovaniZnackyPage";
import FAQPage from "./pages/FAQPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/webdesign" element={<WebdesignPage />} />
          <Route path="/branding" element={<BrandingPage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/grafika" element={<GrafikaPage />} />
          <Route path="/aplikace" element={<AplikacePage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projekty/mados" element={<MadosPage />} />
          <Route path="/projekty/hf-stavby" element={<HFStavbyPage />} />
          <Route path="/projekty/printeria" element={<PrinteriaPage />} />
          <Route path="/projekty/sturm" element={<SturmPage />} />
          <Route path="/blog/web-ktery-prodava" element={<WebKteryProdavaPage />} />
          <Route path="/blog/strategicky-marketing" element={<StrategickyMarketingPage />} />
          <Route path="/blog/budovani-znacky" element={<BudovaniZnackyPage />} />
          <Route path="/faq" element={<FAQPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
