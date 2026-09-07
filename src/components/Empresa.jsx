import SectionTitle from "./SectionTitle";

const Empresa = () => {
  const items = [
    "Personal certificado",
    "Trabajo en campo",
    "Fabricación en taller",
    "Cobertura regional",
    "Habilitación naval",
    "Servicio integral",
  ];

  return (
    <section
      id="empresa"
      className="bg-[#f4f6f8] py-10 text-[#07182b] sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* TITULO DE SECCION */}
        <SectionTitle
          titulo="Quiénes somos"
          subtitulo="Brindamos experiencia técnica para"
          acento="trabajos que no admiten improvisación"
          conSalto
          className="mb-8 sm:mb-16 lg:mb-20"
        />

        {/* CONTENIDO */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* IMAGEN */}
          <div className="reveal-up relative">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85"
                alt="Trabajo industrial de IMP Servicios"
                className="h-[220px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              />
            </div>

            <div className="absolute -bottom-7 right-0 hidden bg-[#07182b] px-8 py-6 text-white sm:block">
              <p className="font-industrial text-4xl font-bold text-[#d7192d]">
                03
              </p>

              <p className="mt-1 text-sm font-semibold uppercase tracking-wide">
                Bases operativas
              </p>

              <p className="mt-1 text-xs text-white/50">
                Neuquén · Río Negro
              </p>
            </div>
          </div>

          {/* TEXTO */}
          <div className="reveal-up lg:pl-4">
            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              IMP Servicios SRL es una empresa metalúrgica y de servicios
              industriales especializada en soldadura calificada, fabricación,
              montaje de equipos, piping, arenado y pintura.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Trabajamos tanto en taller como en campo, con personal certificado,
              procedimientos homologados y una estructura operativa preparada
              para acompañar proyectos industriales de distinta escala.
            </p>

            {/* ITEMS */}
            <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 sm:mt-9 sm:grid-cols-2 sm:gap-x-8">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-t border-slate-300 pt-4"
                >
                  <span className="h-2 w-2 shrink-0 bg-[#d7192d]" />

                  <span className="text-xs font-semibold uppercase tracking-wide sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#contacto"
                className="
                  inline-flex w-full items-center justify-center
                  bg-[#d7192d] px-7 py-4
                  text-xs font-bold uppercase tracking-[0.12em] text-white
                  transition-all duration-300
                  hover:bg-[#b91526]
                  sm:w-auto sm:px-9 sm:text-sm
                "
              >
                Hablemos de tu proyecto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empresa;