const MottoSection = () => {
  return (
    <section className="w-full bg-background px-4 md:px-6 py-4 md:py-4">
      <div className="bg-white rounded-3xl md:rounded-[2.5rem] ring-4 ring-white py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-black mb-4 md:mb-6 tracking-wide">
            AUT VINCERE, AUT MORI.
          </h2>
          <p className="font-body text-base md:text-lg lg:text-xl text-black/80 leading-relaxed">
            Buď zvítězit, nebo padnout. V digitálním prostoru neexistuje druhé místo – buď trhu vládnete, nebo v něm zaniknete.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MottoSection;
