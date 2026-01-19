import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Jak vytvořit web, který prodává",
    excerpt: "Moderní webdesign není jen o estetice. Úspěšný web kombinuje vizuální přitažlivost s funkčností a konverzní strategií.",
    date: "15. 1. 2024",
    category: "PLATFORMA",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    slug: "/blog/web-ktery-prodava"
  },
  {
    id: 2,
    title: "Síla strategického marketingu",
    excerpt: "Efektivní marketing začíná pochopením vašeho publika. Jak vybudovat kampaň, která rezonuje a přináší výsledky.",
    date: "10. 1. 2024",
    category: "STRATEGIE",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    slug: "/blog/strategicky-marketing"
  },
  {
    id: 3,
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
      <Helmet>
        <title>Blog | CURIA - Strategie, design a marketing</title>
        <meta name="description" content="Poznatky z praxe. Strategie, taktiky a principy webdesignu, brandingu a marketingu. Bez buzzwordů." />
        <meta property="og:title" content="Blog | CURIA - Strategie, design a marketing" />
        <meta property="og:description" content="Poznatky z praxe. Strategie, taktiky a principy webdesignu, brandingu a marketingu. Bez buzzwordů." />
        <link rel="canonical" href="https://curia.cz/blog" />
      </Helmet>
      <Header />
      <main className="overflow-x-hidden bg-white">
        {/* Hero */}
        <section className="container mx-auto px-6 md:px-12 lg:px-16 py-32 md:py-40">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight">
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
                to={post.slug}
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
                  <h2 className="text-2xl md:text-3xl font-semibold text-black mb-3 group-hover:opacity-70 transition-opacity">
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
