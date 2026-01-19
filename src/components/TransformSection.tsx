const TransformSection = () => {
  return (
    <>
      {/* Desktop/Tablet */}
      <section className="hidden md:block bg-gray-50 py-32">
        <div className="container mx-auto px-12 lg:px-16">
          <div className="max-w-4xl">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-8 leading-tight">
              Budujeme značky, které mají v digitálním světě své místo.
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-12">
              Jsme studio zaměřené na funkční design, moderní technologie a strategický vhled. Tvoříme ucelené vizuální identity a digitální systémy, které spojují váš záměr s lidmi skrze každý jeden detail.
            </p>
            <button className="inline-flex items-center gap-3 text-black hover:opacity-70 transition-opacity">
              <span className="text-lg font-medium">Prozkoumat služby</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden bg-gray-50 py-20 px-6">
        <div>
          <h2 className="text-4xl font-bold text-black mb-6 leading-tight">
            Budujeme značky, které mají v digitálním světě své místo.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Jsme studio zaměřené na funkční design, moderní technologie a strategický vhled. Tvoříme ucelené vizuální identity a digitální systémy, které spojují váš záměr s lidmi skrze každý jeden detail.
          </p>
          <button className="inline-flex items-center gap-2 text-black hover:opacity-70 transition-opacity">
            <span className="text-base font-medium">Prozkoumat služby</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

export default TransformSection;
