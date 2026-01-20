import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import newsymbol from "@/assets/newsymbol.png";

const services = [
  { name: "Všechny služby", path: "/sluzby" },
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
    <header className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50">
      <div className={`max-w-6xl mx-auto px-6 md:px-8 lg:px-12 rounded-full transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm border border-gray-200' : 'bg-white/60 backdrop-blur-md border border-gray-100'
      }`}>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/"
            onClick={() => { setMobileMenuOpen(false); }}
            className="flex items-center"
            style={{ gap: '-4px' }}
          >
            <img src={newsymbol} alt="CURIA logo" className="w-20 h-20 object-contain" />
            <span className="text-3xl font-heading tracking-tight text-black uppercase" style={{ fontWeight: 900, marginLeft: '-22px' }}>curia</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-[15px] font-normal text-black hover:opacity-60 transition-opacity"
            >
              Domů
            </Link>
            
            <Link
              to="/projekty"
              className="text-[15px] font-normal text-black hover:opacity-60 transition-opacity"
            >
              Projekty
            </Link>
            
            <Link
              to="/sluzby"
              className="text-[15px] font-normal text-black hover:opacity-60 transition-opacity"
            >
              Služby
            </Link>
            
            <Link
              to="/o-nas"
              className="text-[15px] font-normal text-black hover:opacity-60 transition-opacity"
            >
              O nás
            </Link>
            
            <Link
              to="/kariera"
              className="text-[15px] font-normal text-black hover:opacity-60 transition-opacity"
            >
              Kariéra
            </Link>
            
            <Link
              to="/blog"
              className="text-[15px] font-normal text-black hover:opacity-60 transition-opacity"
            >
              Blog
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button
              onClick={() => {
                const form = document.querySelector('form');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavClick("contact");
                }
              }}
              className="px-6 py-2.5 bg-black text-white text-[15px] font-normal rounded-full hover:bg-gray-800 transition-colors"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-[60] text-black"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 shadow-lg z-50 transform transition-all duration-500 ease-out md:hidden overflow-hidden ${
            mobileMenuOpen ? "opacity-100 scale-y-100 origin-top" : "opacity-0 scale-y-0 origin-top"
          }`}
          style={{
            borderRadius: '1rem',
          }}
        >
          <div className="flex flex-col py-6 px-6 space-y-5">
            <Link
              to="/projekty"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black text-base font-normal text-left hover:opacity-60 transition-opacity"
            >
              Projekty
            </Link>
            
            <Link
              to="/sluzby"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black text-base font-normal text-left hover:opacity-60 transition-opacity"
            >
              Služby
            </Link>
            
            <Link
              to="/o-nas"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black text-base font-normal text-left hover:opacity-60 transition-opacity"
            >
              O nás
            </Link>
            
            <Link
              to="/kariera"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black text-base font-normal text-left hover:opacity-60 transition-opacity"
            >
              Kariéra
            </Link>
            
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black text-base font-normal text-left hover:opacity-60 transition-opacity"
            >
              Blog
            </Link>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const form = document.querySelector('form');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavClick("contact");
                }
              }}
              className="w-full px-6 py-2.5 bg-black text-white text-base font-normal rounded-full hover:bg-gray-800 transition-colors"
            >
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
