"use client";

import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import Link from "next/link";

const blogPosts = [
  {
    id: 10,
    title: "MADOS: Jak jsme z produktového chaosu udělali prodejní stroj",
    excerpt: "Case study — digitální transformace výrobce hliníkových fasád. Custom Product Engine, inteligentní kvalifikace poptávek, +217 % relevantních leadů.",
    date: "19. 4. 2026",
    category: "CASE STUDY",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    slug: "/blog/mados-case-study"
  },
  {
    id: 8,
    title: "Kolik stojí web v roce 2026: Reálné ceny a co za ně dostanete",
    excerpt: "Cena webu od 15 000 Kč po statisíce. Kompletní přehled cen webových stránek podle typu — vizitka, firemní web, e-shop, aplikace. Co ovlivňuje cenu.",
    date: "19. 4. 2026",
    category: "WEBDESIGN",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    slug: "/blog/cena-webu"
  },
  {
    id: 9,
    title: "Jak vybrat webovou agenturu: 10 kritérií, která rozhodují",
    excerpt: "Praktický návod, jak poznat profesionály od amatérů. Portfolio, reference, cena, technologie, SEO a další kritéria pro výběr agentury.",
    date: "19. 4. 2026",
    category: "STRATEGIE",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
    slug: "/blog/jak-vybrat-webovou-agenturu"
  },
  {
    id: 6,
    title: "Jak dostat web do Googlu: Kompletní průvodce indexací",
    excerpt: "Máte web, ale Google ho nezná? Indexace je první krok k viditelnosti. Search Console, sitemap, robots.txt — vše, co potřebujete vědět.",
    date: "14. 4. 2026",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    slug: "/blog/indexace-google"
  },
  {
    id: 7,
    title: "Technické SEO: Základ, bez kterého vás Google ignoruje",
    excerpt: "Core Web Vitals, HTTPS, mobile-first indexing, URL struktura a heading hierarchie. Kompletní průvodce technickým SEO pro rok 2026.",
    date: "14. 4. 2026",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    slug: "/blog/technicke-seo"
  },
  {
    id: 1,
    title: "Aplikace na míru: Kdy se vyplatí a jak na to",
    excerpt: "Hotová řešení mají limity. Custom aplikace dávají kontrolu. Návod, kdy se vyplatí investovat do vlastního řešení a jak zajistit úspěch projektu.",
    date: "20. 1. 2026",
    category: "DEVELOPMENT",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    slug: "/blog/aplikace-na-miru"
  },
  {
    id: 2,
    title: "Grafika a logo: Když forma následuje funkci",
    excerpt: "Grafický design není dekorace. Je to nástroj komunikace, který musí splnit konkrétní obchodní cíl. Jak na logo, které skutečně funguje.",
    date: "15. 1. 2026",
    category: "GRAFIKA",
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&h=400&fit=crop",
    slug: "/blog/grafika-a-logo"
  },
  {
    id: 3,
    title: "Jak vytvořit web, který prodává",
    excerpt: "Moderní webdesign není jen o estetice. Úspěšný web kombinuje vizuální přitažlivost s funkčností a konverzní strategií.",
    date: "15. 1. 2024",
    category: "PLATFORMA",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    slug: "/blog/web-ktery-prodava"
  },
  {
    id: 4,
    title: "Síla strategického marketingu",
    excerpt: "Efektivní marketing začíná pochopením vašeho publika. Jak vybudovat kampaň, která rezonuje a přináší výsledky.",
    date: "10. 1. 2024",
    category: "STRATEGIE",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    slug: "/blog/strategicky-marketing"
  },
  {
    id: 5,
    title: "Budování značky od základů",
    excerpt: "Silná značka je víc než logo. Je to příběh, hodnoty a emoce, které vytváříte u svých zákazníků.",
    date: "5. 1. 2024",
    category: "IDENTITA",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    slug: "/blog/budovani-znacky"
  }
];

const BlogPage = () => {
  return (
    <>
<Header />
      <main className="overflow-x-hidden bg-white">
        {/* Hero */}
        <section className="container mx-auto px-6 md:px-12 lg:px-16 py-32 md:py-40">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-black mb-8 leading-tight">
            Archiv poznatků
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
            Strategie, taktiky a principy, které používáme při práci s klienty. Bez buzzwordů, bez bullshitu.
          </p>
        </section>

        {/* Blog Grid */}
        <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-32 md:pb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-20">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={post.slug}
                className="group"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-3">{post.category}</p>
                  <h2 className="text-2xl md:text-3xl font-heading font-semibold text-black mb-3 group-hover:opacity-70 transition-opacity">
                    {post.title}
                  </h2>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <FooterNew />
      </main>
    </>
  );
};

export default BlogPage;
