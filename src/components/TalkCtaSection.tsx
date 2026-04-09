const TalkCtaSection = () => {
  return (
    <section className="w-full px-4 md:px-6 py-4 md:py-6">
      <div className="max-w-5xl mx-auto border border-gray-200 rounded-3xl md:rounded-[2.5rem] bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-0">
          {/* Left — Text & CTA */}
          <div className="flex flex-col justify-center px-8 md:px-12 lg:px-14 py-14 md:py-20 lg:py-28">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] mb-5">
              Pojďme si{" "}
              <span className="italic text-[#0047CC]">promluvit</span>
            </h2>

            <p className="font-body text-base md:text-lg text-gray-500 leading-relaxed mb-8 max-w-md">
              Design na míru, rychle a od lidí, kterým můžete věřit.
            </p>

            <a
              href="/kontakt"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white font-heading font-bold text-sm md:text-base transition-all duration-300 hover:scale-[1.03] self-start"
              style={{
                background:
                  "linear-gradient(135deg, #0c1e4a 0%, #1e3a8a 40%, #2563eb 100%)",
                boxShadow:
                  "0 8px 32px rgba(30,58,138,0.35), 0 0 48px rgba(37,99,235,0.1)",
              }}
            >
              KONTAKTUJTE NÁS
            </a>
          </div>

          {/* Right — Video */}
          <div className="relative p-4 md:p-5 lg:p-6">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-[16/10] object-cover rounded-2xl md:rounded-3xl"
            >
              <source src="/videos/printeria.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkCtaSection;
