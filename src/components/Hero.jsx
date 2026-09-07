const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[680px] items-center overflow-hidden bg-[#07182b] sm:min-h-[800px] lg:min-h-[880px]"
    >
      {/* IMAGEN */}
      <div
        className="absolute inset-0 bg-cover bg-[65%_center] lg:bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-[#07182b]/30 lg:bg-transparent" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#07182b] via-[#07182b]/90 to-[#07182b]/30 lg:to-[#07182b]/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#07182b]/80 via-transparent to-[#07182b]/30" />

      {/* DETALLE ROJO */}
      <div className="absolute left-0 top-0 h-full w-[4px] bg-[#d7192d] lg:w-[5px]" />

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-0 lg:pt-24 xl:px-16">
        <div className="max-w-3xl">
          {/* CATEGORÍAS */}
          <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">
            <span className="h-[2px] w-7 bg-[#d7192d] sm:w-10" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65 sm:text-xs sm:tracking-[0.3em]">
              Industria · Petróleo · Gas
            </span>
          </div>

          {/* TÍTULO */}
          <h1 className="font-industrial text-[44px] font-bold uppercase leading-[0.9] tracking-tight min-[380px]:text-[50px] sm:text-7xl lg:text-[92px]">
            Soluciones
            <br />
            industriales
            <br />
            <span className="text-[#d7192d]">
              bajo procedimiento
            </span>
          </h1>

          {/* DESCRIPCIÓN */}
          <p className="mt-6 max-w-2xl text-sm leading-6 text-white/70 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
            Soldadura calificada, fabricación, montaje, piping, arenado y
            pintura para la industria del petróleo, gas y sector
            naval-portuario.
          </p>

          {/* BOTONES */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#contacto"
              className="w-full bg-[#d7192d] px-6 py-4 text-center text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#b91526] sm:w-auto sm:px-8 sm:text-sm"
            >
              Solicitar presupuesto
            </a>

            <a
              href="#servicios"
              className="w-full border border-white/30 bg-white/5 px-6 py-4 text-center text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white hover:text-[#07182b] sm:w-auto sm:px-8 sm:text-sm"
            >
              Conocer servicios
            </a>
          </div>

          {/* BASES */}
          <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-white/50 sm:mt-12 sm:text-xs sm:tracking-[0.2em]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#d7192d]" />

            <span>
              Bases en Neuquén y Río Negro
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;