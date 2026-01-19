const FooterNew = () => {
  return (
    <>
      {/* Desktop/Tablet */}
      <footer className="hidden md:block bg-gray-100 py-20">
        <div className="container mx-auto px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-16 mb-20">
            {/* Left - Contact */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8">
                Spojme se
              </h2>
              <a href="tel:+420606237743" className="text-2xl text-black hover:opacity-70 transition-opacity block mb-2">
                +420 606 237 743
              </a>
              <a href="tel:+420777561050" className="text-2xl text-black hover:opacity-70 transition-opacity block">
                +420 777 561 050
              </a>
            </div>

            {/* Middle - Links */}
            <div>
              <nav className="flex flex-col gap-4">
                <a href="/work" className="text-lg text-black hover:opacity-70 transition-opacity">
                  Portfolio
                </a>
                <a href="/branding" className="text-lg text-black hover:opacity-70 transition-opacity">
                  Branding
                </a>
                <a href="/webdesign" className="text-lg text-black hover:opacity-70 transition-opacity">
                  Webdesign
                </a>
                <a href="/about" className="text-lg text-black hover:opacity-70 transition-opacity">
                  O nás
                </a>
                <a href="/blog" className="text-lg text-black hover:opacity-70 transition-opacity">
                  Blog
                </a>
                <a href="/contact" className="text-lg text-black hover:opacity-70 transition-opacity">
                  Kontakt
                </a>
              </nav>
            </div>

            {/* Right - Company Info */}
            <div>
              <div className="text-base text-gray-700 space-y-2">
                <p className="font-semibold text-black mb-4">Brno</p>
                <p>Přízova 6</p>
                <p>602 00 Brno-střed</p>
                <p>Česká republika</p>
              </div>
            </div>
          </div>

          {/* Bottom - Legal */}
          <div className="border-t border-gray-300 pt-8 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span>© 2026 CURIA</span>
              <span>IČO: 21062897</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile */}
      <footer className="block md:hidden bg-gray-100 py-12 px-6">
        <div>
          <h2 className="text-4xl font-bold text-black mb-6">
            Spojme se
          </h2>
          <a href="tel:+420606237743" className="text-xl text-black hover:opacity-70 transition-opacity block mb-2">
            +420 606 237 743
          </a>
          <a href="tel:+420777561050" className="text-xl text-black hover:opacity-70 transition-opacity block mb-10">
            +420 777 561 050
          </a>

          <nav className="flex flex-col gap-3 mb-10">
            <a href="/work" className="text-base text-black hover:opacity-70 transition-opacity">
              Portfolio
            </a>
            <a href="/branding" className="text-base text-black hover:opacity-70 transition-opacity">
              Branding
            </a>
            <a href="/webdesign" className="text-base text-black hover:opacity-70 transition-opacity">
              Webdesign
            </a>
            <a href="/about" className="text-base text-black hover:opacity-70 transition-opacity">
              O nás
            </a>
            <a href="/blog" className="text-base text-black hover:opacity-70 transition-opacity">
              Blog
            </a>
            <a href="/contact" className="text-base text-black hover:opacity-70 transition-opacity">
              Kontakt
            </a>
          </nav>

          <div className="text-sm text-gray-700 space-y-1 mb-10">
            <p className="font-semibold text-black mb-2">Brno</p>
            <p>Přízova 6</p>
            <p>602 00 Brno-střed</p>
            <p>Česká republika</p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <div className="text-xs text-gray-600 mb-4 space-y-1">
              <p>© 2026 CURIA</p>
              <p>IČO: 21062897</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterNew;
