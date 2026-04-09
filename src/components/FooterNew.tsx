import Link from "next/link";

const FooterNew = () => {
  return (
    <>
      {/* Desktop/Tablet */}
      <footer className="hidden md:block bg-white pt-24 pb-10">
        <div className="max-w-[1400px] mx-auto px-12 lg:px-16">
          {/* Top section: brand left, nav columns right */}
          <div className="grid grid-cols-12 gap-12 mb-20">
            {/* Left - Brand */}
            <div className="col-span-4">
              <h3 className="text-2xl font-heading font-bold text-black uppercase tracking-tight mb-6">
                curia
              </h3>
              <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-xs">
                Budujeme digitální produkty a značky, které firmám pomáhají růst. Od strategie přes design až po funkční řešení.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background: "linear-gradient(135deg, #0c1e4a 0%, #1e3a8a 40%, #2563eb 100%)",
                    boxShadow: "0 4px 20px rgba(30,58,138,0.3)",
                  }}
                >
                  KONTAKTUJTE NÁS
                </Link>
              </div>
            </div>

            {/* Nav column: Společnost */}
            <div className="col-span-2">
              <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-6">Společnost</h4>
              <nav className="flex flex-col gap-3.5">
                <Link href="/" className="text-[15px] text-gray-500 hover:text-black transition-colors">Domů</Link>
                <Link href="/sluzby" className="text-[15px] text-gray-500 hover:text-black transition-colors">Služby</Link>
                <Link href="/projekty" className="text-[15px] text-gray-500 hover:text-black transition-colors">Projekty</Link>
                <Link href="/o-nas" className="text-[15px] text-gray-500 hover:text-black transition-colors">O nás</Link>
                <Link href="/blog" className="text-[15px] text-gray-500 hover:text-black transition-colors">Blog</Link>
                <Link href="/kariera" className="text-[15px] text-gray-500 hover:text-black transition-colors">Kariéra</Link>
                <Link href="/kontakt" className="text-[15px] text-gray-500 hover:text-black transition-colors">Kontakt</Link>
              </nav>
            </div>

            {/* Nav column: Služby */}
            <div className="col-span-3">
              <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-6">Služby</h4>
              <nav className="flex flex-col gap-3.5">
                <Link href="/sluzby" className="text-[15px] text-gray-500 hover:text-black transition-colors">Webdesign & Vývoj</Link>
                <Link href="/sluzby" className="text-[15px] text-gray-500 hover:text-black transition-colors">Branding & Identita</Link>
                <Link href="/sluzby" className="text-[15px] text-gray-500 hover:text-black transition-colors">Strategický Marketing</Link>
                <Link href="/sluzby" className="text-[15px] text-gray-500 hover:text-black transition-colors">Grafika & Vizuál</Link>
                <Link href="/sluzby" className="text-[15px] text-gray-500 hover:text-black transition-colors">Aplikace na míru</Link>
                <Link href="/sluzby" className="text-[15px] text-gray-500 hover:text-black transition-colors">E-shop řešení</Link>
                <Link href="/sluzby" className="text-[15px] text-gray-500 hover:text-black transition-colors">SEO & Optimalizace</Link>
              </nav>
            </div>

            {/* Nav column: Specializace */}
            <div className="col-span-3">
              <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-6">Specializace</h4>
              <nav className="flex flex-col gap-3.5">
                <Link href="/sluzby" className="text-[15px] text-gray-500 hover:text-black transition-colors">Landing Page Design</Link>
                <Link href="/sluzby" className="text-[15px] text-gray-500 hover:text-black transition-colors">UX/UI Design</Link>
                <Link href="/sluzby" className="text-[15px] text-gray-500 hover:text-black transition-colors">Firemní web na míru</Link>
                <Link href="/sluzby" className="text-[15px] text-gray-500 hover:text-black transition-colors">Logo & Vizuální systém</Link>
                <Link href="/sluzby" className="text-[15px] text-gray-500 hover:text-black transition-colors">Obsahová strategie</Link>
                <Link href="/sluzby" className="text-[15px] text-gray-500 hover:text-black transition-colors">Motion & Video</Link>
                <Link href="/sluzby" className="text-[15px] text-gray-500 hover:text-black transition-colors">Správa sociálních sítí</Link>
              </nav>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-200 pt-8 flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>© 2026 CURIA. Všechna práva vyhrazena.</span>
              <span>IČO: 21062897</span>
            </div>
            <a
              href="https://instagram.com/curia.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile */}
      <footer className="block md:hidden bg-white pt-16 pb-8 px-6">
        {/* Brand */}
        <h3 className="text-xl font-heading font-bold text-black uppercase tracking-tight mb-4">
          curia
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
          Budujeme digitální produkty a značky, které firmám pomáhají růst.
        </p>
        <Link
          href="/kontakt"
          className="inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm font-semibold mb-12"
          style={{
            background: "linear-gradient(135deg, #0c1e4a 0%, #1e3a8a 40%, #2563eb 100%)",
          }}
        >
          KONTAKTUJTE NÁS
        </Link>

        {/* Nav grid */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <div>
            <h4 className="text-xs font-semibold text-black uppercase tracking-wider mb-4">Společnost</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-gray-500 hover:text-black transition-colors">Domů</Link>
              <Link href="/sluzby" className="text-sm text-gray-500 hover:text-black transition-colors">Služby</Link>
              <Link href="/projekty" className="text-sm text-gray-500 hover:text-black transition-colors">Projekty</Link>
              <Link href="/o-nas" className="text-sm text-gray-500 hover:text-black transition-colors">O nás</Link>
              <Link href="/blog" className="text-sm text-gray-500 hover:text-black transition-colors">Blog</Link>
              <Link href="/kariera" className="text-sm text-gray-500 hover:text-black transition-colors">Kariéra</Link>
              <Link href="/kontakt" className="text-sm text-gray-500 hover:text-black transition-colors">Kontakt</Link>
            </nav>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-black uppercase tracking-wider mb-4">Služby</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/sluzby" className="text-sm text-gray-500 hover:text-black transition-colors">Webdesign</Link>
              <Link href="/sluzby" className="text-sm text-gray-500 hover:text-black transition-colors">Branding</Link>
              <Link href="/sluzby" className="text-sm text-gray-500 hover:text-black transition-colors">Marketing</Link>
              <Link href="/sluzby" className="text-sm text-gray-500 hover:text-black transition-colors">Grafika</Link>
              <Link href="/sluzby" className="text-sm text-gray-500 hover:text-black transition-colors">Aplikace</Link>
              <Link href="/sluzby" className="text-sm text-gray-500 hover:text-black transition-colors">E-shop</Link>
              <Link href="/sluzby" className="text-sm text-gray-500 hover:text-black transition-colors">SEO</Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
          <div className="text-xs text-gray-400 space-y-1">
            <p>© 2026 CURIA</p>
            <p>IČO: 21062897</p>
          </div>
          <a
            href="https://instagram.com/curia.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
};

export default FooterNew;
