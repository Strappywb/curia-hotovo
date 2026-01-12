import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Jak vytvořit web, který prodává",
    excerpt: "Moderní webdesign není jen o estetice. Úspěšný web kombinuje vizuální přitažlivost s funkčností a konverzní strategií.",
    date: "15. 1. 2024",
    category: "Webdesign",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    slug: "/blog/web-ktery-prodava"
  },
  {
    id: 2,
    title: "Síla strategického marketingu",
    excerpt: "Efektivní marketing začíná pochopením vašeho publika. Jak vybudovat kampaň, která rezonuje a přináší výsledky.",
    date: "10. 1. 2024",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    slug: "/blog/strategicky-marketing"
  },
  {
    id: 3,
    title: "Budování značky od základů",
    excerpt: "Silná značka je víc než logo. Je to příběh, hodnoty a emoce, které vytváříte u svých zákazníků.",
    date: "5. 1. 2024",
    category: "Branding",
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
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
              ARCHIV POZNATKŮ
            </h1>
            <p className="font-body font-semibold text-xl text-black/60 max-w-2xl">
              Strategie, taktiky a principy, které používáme při práci s klienty. Bez buzzwordů, bez bullshitu.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="w-full bg-[#F5F5F5] py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={post.slug}
                  className="bg-white group cursor-pointer hover:bg-gray-50 transition-colors overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-body font-semibold text-sm text-black/60">{post.category}</span>
                      <ArrowUpRight className="w-5 h-5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h2 className="font-heading text-xl md:text-2xl text-black mb-3">
                      {post.title}
                    </h2>
                    <p className="font-body font-semibold text-base text-black/70 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="font-body font-semibold text-sm text-black/40">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-black py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Chcete tyto principy aplikovat na váš byznys?
            </h2>
            <p className="font-body font-semibold text-lg text-white/70 mb-8">
              Napište nám. Probereme, jak můžeme pomoct.
            </p>
            <Link 
              to="/#contact" 
              className="inline-block bg-white text-black font-heading px-8 py-4 hover:bg-gray-100 transition-colors"
            >
              Kontaktovat
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default BlogPage;
