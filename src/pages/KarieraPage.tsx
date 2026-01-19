import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";

const KarieraPage = () => {

  return (
    <>
      <Helmet>
        <title>Kariéra | CURIA - Přidej se k nám</title>
        <meta name="description" content="Hledáme designéry, developery a stratégy, kteří chtějí pracovat na prémiových projektech. Pošli nám své portfolio." />
        <meta property="og:title" content="Kariéra | CURIA - Přidej se k nám" />
        <meta property="og:description" content="Hledáme designéry, developery a stratégy, kteří chtějí pracovat na prémiových projektech." />
        <link rel="canonical" href="https://curia.cz/kariera" />
      </Helmet>
      <Header />
      <main className="overflow-x-hidden bg-white">
        {/* Hero Section */}
        <section className="container mx-auto px-6 md:px-12 lg:px-16 py-32 md:py-40">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight max-w-5xl">
            Pracuj na projektech, které mají impact
          </h1>
          <div className="max-w-3xl space-y-6 text-xl md:text-2xl text-gray-600 leading-relaxed">
            <p>
              Máš za sebou práci, na kterou jsi hrdý? Pošli nám portfolio a ozvi se. Pracujeme na projektech, kde každý detail má důvod.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-32 md:pb-40">
          <div className="max-w-2xl mx-auto">
            <form action="https://formspree.io/f/mreekvko" method="POST" encType="multipart/form-data" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-black mb-2">
                  Jméno a příjmení
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Jan Novák"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="jan@email.cz"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-base font-medium text-black mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="+420 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium text-black mb-2">
                  Pár vět o sobě
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                  placeholder="Co děláš, co tě baví, proč CURIA..."
                />
              </div>

              <div>
                <label htmlFor="cv" className="block text-base font-medium text-black mb-2">
                  CV / Portfolio (PDF)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-black file:text-white hover:file:bg-gray-800 file:cursor-pointer"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-black text-white text-base font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Odeslat
              </button>
            </form>
          </div>
        </section>

        <FooterNew />
      </main>
    </>
  );
};

export default KarieraPage;
