import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

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

const BlogSection = () => {
  return (
    <section id="blog" className="w-full bg-background py-20 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-satoshi text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 md:mb-16">
          ARCHIV POZNATKŮ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <span className="text-sm text-gray-500">{post.category}</span>
                  <ArrowUpRight className="w-5 h-5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-satoshi text-xl md:text-2xl font-bold text-black mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
