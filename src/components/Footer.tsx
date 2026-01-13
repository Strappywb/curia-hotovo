import { Link, useLocation, useNavigate } from "react-router-dom";

const services = [
  { name: "Webdesign & Vývoj", path: "/webdesign" },
  { name: "Branding", path: "/branding" },
  { name: "Marketing", path: "/marketing" },
  { name: "Grafika", path: "/grafika" },
  { name: "Aplikace", path: "/aplikace" },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="w-full bg-black py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section with logo and navigation */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-8 mb-12 md:mb-16">
          {/* Logo */}
          <div>
            <Link 
              to="/"
              className="font-heading text-3xl md:text-4xl font-black text-white block"
            >
              CURIA
            </Link>
            <p className="text-gray-400 mt-2 text-sm max-w-[200px]">
              Kreativní studio pro webdesign, branding a marketing.
            </p>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Navigation */}
            <div>
              <h4 className="font-heading text-white mb-4">Navigace</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleNavClick("hero")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Domů
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("projects")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Projekty
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("contact")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Kontakt
                  </button>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Archiv poznatků
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading text-white mb-4">Služby</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link
                      to={service.path}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-heading text-white mb-4">Právní</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400 cursor-default">
                    Obchodní podmínky
                  </span>
                </li>
                <li>
                  <a href="https://support.google.com/google-ads/answer/7687725?hl=cs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    GDPR
                  </a>
                </li>
                <li>
                  <a href="https://policies.google.com/privacy?hl=cs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Ochrana údajů
                  </a>
                </li>
              </ul>
            </div>

            {/* Company info */}
            <div>
              <h4 className="font-heading text-white mb-4">Společnost</h4>
              <p className="text-gray-400">
                IČO: 21062897
              </p>
              <a 
                href="https://www.instagram.com/curia.studio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-4"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
                @curia.studio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 CURIA. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
