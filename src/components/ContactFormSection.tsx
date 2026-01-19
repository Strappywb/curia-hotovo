import { useState } from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulace odeslání
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block bg-white py-40">
        <div className="container mx-auto px-12 lg:px-16 max-w-7xl border-4 border-blue-500 rounded-3xl py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-24 items-start">
            {/* Left - Heading */}
            <div>
              <h2 className="text-6xl lg:text-8xl font-bold text-black mb-8 leading-tight">
                CURIA. Nastavte svůj standard.
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed">
                Integrita značky začíná zde. Kontaktujte nás pro zahájení procesu digitální konstituce.
              </p>
            </div>

            {/* Right - Form */}
            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Vaše jméno"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 text-black text-xl py-5 px-0 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Váš email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 text-black text-xl py-5 px-0 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Povězte nám o vašem projektu"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-gray-300 text-black text-xl py-5 px-0 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative bg-blue-500 text-white px-14 py-5 text-lg font-medium hover:bg-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4 rounded-full"
              >
                {status === "sending" && "Odesílám..."}
                {status === "success" && "Odesláno! ✓"}
                {(status === "idle" || status === "error") && (
                  <span className="flex items-center gap-3">
                    Odeslat zprávu
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                )}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Něco se pokazilo. Zkuste to prosím znovu.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden bg-white py-24 px-6">
        <div className="border-4 border-blue-500 rounded-3xl p-8">
          <h2 className="text-5xl font-bold text-black mb-5 leading-tight">
            CURIA. Nastavte svůj standard.
          </h2>
          <p className="text-xl text-gray-600 mb-14 leading-relaxed">
            Integrita značky začíná zde. Kontaktujte nás pro zahájení procesu digitální konstituce.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Vaše jméno"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-300 text-black text-lg py-4 px-0 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Váš email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-300 text-black text-lg py-4 px-0 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Povězte nám o vašem projektu"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-transparent border-b border-gray-300 text-black text-lg py-4 px-0 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-blue-500 text-white px-8 py-5 text-base font-medium hover:bg-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4 rounded-full"
            >
              {status === "sending" && "Odesílám..."}
              {status === "success" && "Odesláno! ✓"}
              {(status === "idle" || status === "error") && "Odeslat zprávu"}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Něco se pokazilo. Zkuste to prosím znovu.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactFormSection;
