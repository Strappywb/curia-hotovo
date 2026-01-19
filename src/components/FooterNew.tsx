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
              <a href="mailto:info@curia.cz" className="text-2xl text-black hover:opacity-70 transition-opacity block mb-4">
                info@curia.cz
              </a>
              <a href="tel:+420776234567" className="text-2xl text-black hover:opacity-70 transition-opacity block">
                +420 776 234 567
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
              <span>DIČ: CZ21062897</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm8.66 6.85c1.46 1.96 2.29 4.4 2.29 7.05 0 .41-.02.81-.07 1.2-2.16-.46-4.38-.65-6.6-.56.08-.2.15-.4.22-.61 1.98.28 3.95.76 5.79 1.44.17-.54.31-1.1.42-1.67-.64-.15-1.29-.27-1.94-.37.36-.57.68-1.17.95-1.79 1.22.48 2.37 1.12 3.44 1.93.07-.47.11-.95.11-1.43 0-2.83-.97-5.43-2.59-7.49zm-7.65 9.65c-.38-.15-.75-.33-1.1-.53-1.35 2.38-3.42 4.24-5.9 5.28-.73-.98-1.19-2.18-1.27-3.48 2.35-.94 4.41-2.62 5.89-4.73.44.52.83 1.08 1.18 1.67-.22.59-.49 1.16-.8 1.79zm1.93-7.56c-.31-.52-.66-1.01-1.05-1.47C15.31.97 17.6.23 20.08.05c-.79 1.14-1.76 2.14-2.89 2.95-1.03-.33-2.12-.5-3.25-.5-.34 0-.67.02-1 .05.41.49.78 1.01 1.11 1.56.36-.06.72-.09 1.08-.09 1.27 0 2.49.29 3.6.82-.98.49-2.04.82-3.16 1.01-.33-.55-.71-1.07-1.13-1.56zM12 2.54c.81 0 1.59.12 2.34.33-.36.45-.76.87-1.19 1.26-.68-.5-1.43-.91-2.24-1.21.34-.25.7-.48 1.09-.38zm-5.35.81c.81.3 1.56.71 2.24 1.21-.43.39-.83.81-1.19 1.26-.75-.21-1.53-.33-2.34-.33.39-.1.75-.33 1.09-.38.8-.3 1.56-.71 2.2-1.14zm-2.41 3.89c.32-.06.65-.09.99-.09 1.13 0 2.19.24 3.16.68-.42.48-.79 1.01-1.11 1.56-1.08-.3-2.23-.45-3.42-.45-.34 0-.67.02-1 .05-.31-.52-.66-1.01-1.05-1.47 1.42-.19 2.81-.21 4.23-.07-.58-.49-1.21-.93-1.89-1.3.36-.45.76-.87 1.19-1.26.68.5 1.43.91 2.24 1.21-.43.39-.83.81-1.19 1.26-.75-.21-1.53-.33-2.34-.33.39-.1.75-.33 1.09-.38.8-.3 1.56-.71 2.2-1.14z"/>
                </svg>
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
          <a href="mailto:info@curia.cz" className="text-xl text-black hover:opacity-70 transition-opacity block mb-3">
            info@curia.cz
          </a>
          <a href="tel:+420776234567" className="text-xl text-black hover:opacity-70 transition-opacity block mb-10">
            +420 776 234 567
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
              <p>IČO: 21062897 | DIČ: CZ21062897</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm8.66 6.85c1.46 1.96 2.29 4.4 2.29 7.05 0 .41-.02.81-.07 1.2-2.16-.46-4.38-.65-6.6-.56.08-.2.15-.4.22-.61 1.98.28 3.95.76 5.79 1.44.17-.54.31-1.1.42-1.67-.64-.15-1.29-.27-1.94-.37.36-.57.68-1.17.95-1.79 1.22.48 2.37 1.12 3.44 1.93.07-.47.11-.95.11-1.43 0-2.83-.97-5.43-2.59-7.49zm-7.65 9.65c-.38-.15-.75-.33-1.1-.53-1.35 2.38-3.42 4.24-5.9 5.28-.73-.98-1.19-2.18-1.27-3.48 2.35-.94 4.41-2.62 5.89-4.73.44.52.83 1.08 1.18 1.67-.22.59-.49 1.16-.8 1.79zm1.93-7.56c-.31-.52-.66-1.01-1.05-1.47C15.31.97 17.6.23 20.08.05c-.79 1.14-1.76 2.14-2.89 2.95-1.03-.33-2.12-.5-3.25-.5-.34 0-.67.02-1 .05.41.49.78 1.01 1.11 1.56.36-.06.72-.09 1.08-.09 1.27 0 2.49.29 3.6.82-.98.49-2.04.82-3.16 1.01-.33-.55-.71-1.07-1.13-1.56zM12 2.54c.81 0 1.59.12 2.34.33-.36.45-.76.87-1.19 1.26-.68-.5-1.43-.91-2.24-1.21.34-.25.7-.48 1.09-.38zm-5.35.81c.81.3 1.56.71 2.24 1.21-.43.39-.83.81-1.19 1.26-.75-.21-1.53-.33-2.34-.33.39-.1.75-.33 1.09-.38.8-.3 1.56-.71 2.2-1.14zm-2.41 3.89c.32-.06.65-.09.99-.09 1.13 0 2.19.24 3.16.68-.42.48-.79 1.01-1.11 1.56-1.08-.3-2.23-.45-3.42-.45-.34 0-.67.02-1 .05-.31-.52-.66-1.01-1.05-1.47 1.42-.19 2.81-.21 4.23-.07-.58-.49-1.21-.93-1.89-1.3.36-.45.76-.87 1.19-1.26.68.5 1.43.91 2.24 1.21-.43.39-.83.81-1.19 1.26-.75-.21-1.53-.33-2.34-.33.39-.1.75-.33 1.09-.38.8-.3 1.56-.71 2.2-1.14z"/>
                </svg>
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
