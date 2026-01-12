const services = [
  { name: "Webdesign & Vývoj", id: "webdesign" },
  { name: "Branding", id: "branding" },
  { name: "Marketing", id: "marketing" },
  { name: "Grafika", id: "grafika" },
  { name: "Aplikace", id: "aplikace" },
];

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-black py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section with logo and navigation */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-8 mb-12 md:mb-16">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}
            className="font-heading text-3xl md:text-4xl font-black text-white"
          >
            CURIA
          </a>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Navigation */}
            <div>
              <h4 className="font-heading text-white mb-4">Navigace</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("hero")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Domů
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Projekty
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Kontakt
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("blog")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Archiv poznatků
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading text-white mb-4">Služby</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.id}>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {service.name}
                    </button>
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
                  <span className="text-gray-400 cursor-default">
                    GDPR
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 cursor-default">
                    Ochrana údajů
                  </span>
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
            © 2024 CURIA. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
