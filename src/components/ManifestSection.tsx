const ManifestSection = () => {
  return (
    <section className="min-h-screen w-full bg-background px-8 md:px-12 lg:px-16 py-24 lg:py-32 flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
          Víme, co funguje. Zbytek neděláme.
        </h2>
        <div className="space-y-6 font-body font-semibold text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed">
          <p>
            Design bez strategie jsou vyhozené peníze. Neděláme věci, co „hezky vypadají", ale věci, co mají mandát ovládnout pozornost.
          </p>
          <p>
            Jsme filtr na zbytečnosti.
          </p>
          <p>
            Jediným měřítkem je pro nás vliv vaší značky na trhu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManifestSection;
