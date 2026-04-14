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
              className="relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white font-heading font-bold text-sm md:text-base transition-all duration-300 hover:scale-[1.03] self-start overflow-hidden"
              style={{
                backgroundColor: "#1e40af",
                backgroundImage: "radial-gradient(ellipse 130% 90% at 15% 50%, rgba(56,189,248,0.7) 0%, transparent 55%), radial-gradient(ellipse 110% 100% at 85% 20%, rgba(124,58,237,0.6) 0%, transparent 50%), radial-gradient(ellipse 90% 110% at 55% 85%, rgba(59,130,246,0.8) 0%, transparent 45%), radial-gradient(ellipse 60% 60% at 40% 30%, rgba(96,165,250,0.5) 0%, transparent 50%)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 8px 32px rgba(56,189,248,0.3), 0 4px 20px rgba(124,58,237,0.3), 0 0 60px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
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
