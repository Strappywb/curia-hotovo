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
          <Link 
            to="/"
            className="font-heading text-3xl md:text-4xl font-black text-white"
          >
            CURIA
          </Link>

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
