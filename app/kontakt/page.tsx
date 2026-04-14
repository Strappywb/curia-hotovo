import type { Metadata } from 'next'
import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";

export const metadata: Metadata = {
  title: 'Kontakt | CURIA – Webdesign, Branding & Marketing Studio',
  description: 'Kontaktujte nás a popište svůj projekt. Ozveme se vám do 24 hodin. Napište na michal@curia.cz nebo vyplňte formulář.',
  keywords: 'kontakt, CURIA, webdesign studio, branding agentura, poptávka webu, spolupráce',
  alternates: { canonical: 'https://curia.cz/kontakt' },
  openGraph: {
    title: 'Kontakt | CURIA – Pojďme si promluvit!',
    description: 'Kontaktujte nás a popište svůj projekt. Ozveme se vám do 24 hodin.',
    type: 'website',
    url: 'https://curia.cz/kontakt',
    images: [{ url: '/og-image.webp' }],
    locale: 'cs_CZ',
  },
}

export default function KontaktPage() {

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero heading */}
        <section className="pt-36 md:pt-44 pb-12 md:pb-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-black leading-[1.05]">
              Pojďme si{" "}
              <span
                className="inline-block font-heading font-black"
                style={{
                  background: "radial-gradient(ellipse 60% 50% at 20% 30%, #00d2ff 0%, transparent 45%), radial-gradient(ellipse 55% 65% at 78% 20%, #7c3aed 0%, transparent 40%), radial-gradient(ellipse 70% 55% at 50% 75%, #2563eb 0%, transparent 42%), radial-gradient(ellipse 40% 40% at 75% 65%, #a855f7 0%, transparent 35%), radial-gradient(ellipse 30% 25% at 40% 40%, rgba(255,255,255,0.25) 0%, transparent 30%), radial-gradient(ellipse 100% 100% at 50% 50%, #1e3a8a 0%, #0c1535 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "liquidGradient 8s ease infinite",
                }}
              >
                promluvit!
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
              Popište nám váš projekt a my se vám ozveme do <strong className="text-black">24 hodin</strong>.
              Nebo nám napište na{" "}
              <a href="mailto:michal@curia.cz" className="text-blue-600 hover:underline">
                michal@curia.cz
              </a>
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-2xl mx-auto px-6">
            <form action="https://formspree.io/f/mreekvko" method="POST" className="space-y-10">
              {/* Name & Company */}
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-3">Jméno a firma</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jan Novák, Firma s.r.o."
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 text-lg text-black placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jan@firma.cz"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 text-lg text-black placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-3">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+420 000 000 000"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 text-lg text-black placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-3">Popis projektu</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Řekněte nám o vašem projektu, cílech a představách..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 text-lg text-black placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex items-center justify-end pt-4">
                <button
                  type="submit"
                  className="group flex items-center gap-3 px-8 py-4 rounded-full text-white text-base font-semibold transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background: "linear-gradient(135deg, #0c1e4a 0%, #1e3a8a 40%, #2563eb 100%)",
                    boxShadow: "0 8px 32px rgba(30,58,138,0.4), 0 0 48px rgba(37,99,235,0.15)",
                  }}
                >
                  ODESLAT
                  <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <FooterNew />
    </>
  );
}
