import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const services = [
  { name: "Webdesign & Vývoj", path: "/webdesign" },
  { name: "Branding", path: "/branding" },
  { name: "Marketing", path: "/marketing" },
  { name: "Grafika", path: "/grafika" },
  { name: "Aplikace", path: "/aplikace" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  const handleServiceClick = (path: string) => {
    if (path.startsWith("/#")) {
      if (isHomePage) {
        const sectionId = path.replace("/#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(path);
      }
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className={`fixed top-4 left-4 right-4 md:top-5 md:left-1/2 md:-translate-x-1/2 md:w-auto z-50 transition-all duration-300 rounded-2xl md:rounded-full ${
      scrolled || !isHomePage ? "bg-white shadow-lg py-3 md:py-4 md:px-10" : "bg-white/10 backdrop-blur-md py-3 md:py-4 md:px-10"
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex items-center justify-between md:gap-12">
          {/* Logo */}
          <Link 
            to="/"
            onClick={() => { setMobileMenuOpen(false); }}
            className={`font-heading text-2xl md:text-3xl font-black transition-colors ${
              scrolled || !isHomePage ? "text-black" : "text-white"
            }`}
          >
            CURIA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => handleNavClick("hero")}
              className={`font-heading font-medium hover:opacity-70 transition-all ${
                scrolled || !isHomePage ? "text-black" : "text-white"
              }`}
            >
              Domů
            </button>
            
            <Link
              to="/o-nas"
              className={`font-heading font-medium hover:opacity-70 transition-all ${
                scrolled || !isHomePage ? "text-black" : "text-white"
              }`}
            >
              O nás
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`font-heading font-medium hover:opacity-70 transition-all flex items-center gap-1 ${
                  scrolled || !isHomePage ? "text-black" : "text-white"
                }`}
              >
                Služby
                {servicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 py-2 min-w-[200px] shadow-lg rounded-xl overflow-hidden">
                  {services.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => handleServiceClick(service.path)}
                      className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button
              onClick={() => handleNavClick("projects")}
              className={`font-heading font-medium hover:opacity-70 transition-all ${
                scrolled || !isHomePage ? "text-black" : "text-white"
              }`}
            >
              Projekty
            </button>
            
            <button
              onClick={() => handleNavClick("contact")}
              className={`font-heading font-medium hover:opacity-70 transition-all ${
                scrolled || !isHomePage ? "text-black" : "text-white"
              }`}
            >
              Kontakt
            </button>
            
            <Link
              to="/blog"
              className={`font-heading font-medium hover:opacity-70 transition-all ${
                scrolled || !isHomePage ? "text-black" : "text-white"
              }`}
            >
              Blog
            </Link>
            
            <Link
              to="/faq"
              className={`font-heading font-medium hover:opacity-70 transition-all ${
                scrolled || !isHomePage ? "text-black" : "text-white"
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden z-[60] transition-colors ${
              mobileMenuOpen ? "text-black" : scrolled || !isHomePage ? "text-black" : "text-white"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl z-50 transform transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
            mobileMenuOpen ? "opacity-100 translate-y-0 max-h-[500px]" : "opacity-0 -translate-y-2 max-h-0"
          }`}
        >
          <div className="flex flex-col py-4 px-6 space-y-4">
            <button
              onClick={() => handleNavClick("hero")}
              className="text-black text-lg font-medium text-left hover:opacity-70 transition-opacity"
            >
              Domů
            </button>
            
            <Link
              to="/o-nas"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black text-lg font-medium text-left hover:opacity-70 transition-opacity"
            >
              O nás
            </Link>
            
            {/* Services Accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-black text-lg font-medium flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                Služby
                {servicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  servicesOpen ? "max-h-[300px] mt-3" : "max-h-0"
                }`}
              >
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => handleServiceClick(service.path)}
                      className="block text-gray-600 text-base hover:text-black transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <button
              onClick={() => handleNavClick("projects")}
              className="text-black text-lg font-medium text-left hover:opacity-70 transition-opacity"
            >
              Projekty
            </button>
            
            <button
              onClick={() => handleNavClick("contact")}
              className="text-black text-lg font-medium text-left hover:opacity-70 transition-opacity"
            >
              Kontakt
            </button>
            
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black text-lg font-medium text-left hover:opacity-70 transition-opacity"
            >
              Blog
            </Link>
            
            <Link
              to="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black text-lg font-medium text-left hover:opacity-70 transition-opacity"
            >
              FAQ
            </Link>
          </div>
        </div>

        {/* Overlay - removed as no longer needed */}
      </div>
    </header>
  );
};

export default Header;
