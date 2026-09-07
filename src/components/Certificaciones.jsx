import SectionTitle from "./SectionTitle";

const certificaciones = [
  {
    codigo: "ASME IX",
    titulo: "Procedimientos de soldadura",
    descripcion:
      "Cada soldadura se ejecuta bajo procedimiento calificado y trazable.",
  },
  {
    codigo: "API 1104",
    titulo: "Soldadores 6G",
    descripcion:
      "Personal certificado en posición 6G, apto para trabajos de piping y ductos.",
  },
  {
    codigo: "I-71",
    titulo: "Habilitación naval",
    descripcion:
      "Empresa habilitada para trabajos de reparación naval ante Prefectura Naval Argentina.",
  },
  {
    codigo: "SSPC-SP10",
    titulo: "Preparación de superficies",
    descripcion:
      "Arenado industrial grado Sa 2½ para preparación de superficies antes de pintar.",
  },
  {
    codigo: "EPOXI + PU",
    titulo: "Pintura industrial",
    descripcion:
      "Protección anticorrosiva con sistemas epoxi y poliuretano para exposición severa.",
  },
];

const Certificaciones = () => {
  return (
    <section
      id="certificaciones"
      className="bg-white py-10 text-[#07182b] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* TITULO */}
        <SectionTitle
          titulo="Respaldo técnico"
          subtitulo="Trabajamos bajo"
          acento="procedimientos certificados"
        />

        {/* INTRO */}
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500 sm:mt-7 sm:text-base">
          La calidad de cada trabajo se apoya en procedimientos homologados,
          personal certificado y estándares técnicos aplicados a cada
          intervención.
        </p>

        {/* CARDS */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:mt-16 xl:grid-cols-5">
          {certificaciones.map((item, index) => {
            return (
              <div
                key={item.codigo}
                className="reveal-up"
                style={{ transitionDelay: `${Math.min(index * 70, 280)}ms` }}
              >
                <article
                  className={`
                    group relative
                    overflow-hidden
                    border border-white/10
                    bg-[#0d2038]
                    text-white
                    shadow-[0_12px_35px_rgba(7,24,43,0.12)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_20px_50px_rgba(7,24,43,0.22)]

                    min-h-[230px] p-5 sm:min-h-[285px] sm:p-7
                  `}
                >
              {/* DETALLE SUPERIOR */}
              <div className="absolute left-0 top-0 h-[4px] w-12 bg-[#d7192d] transition-all duration-300 group-hover:w-full" />

              {/* CODIGO */}
              <p className="font-industrial text-2xl font-bold uppercase leading-none text-[#d7192d] sm:text-3xl lg:text-[34px]">
                {item.codigo}
              </p>

              {/* TITULO */}
              <h3 className="mt-4 font-industrial text-[20px] font-bold uppercase leading-[1.05] text-white sm:mt-5 sm:text-[24px]">
                {item.titulo}
              </h3>

              {/* DESCRIPCION */}
              <p className="mt-3 text-sm leading-6 text-white/60 sm:mt-4">
                {item.descripcion}
              </p>
                </article>
              </div>
            );
          })}
        </div>

        {/* CIERRE */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-7 sm:flex-row">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Calidad · Seguridad · Trazabilidad
          </p>

          <a
            href="#contacto"
            className="
              inline-flex w-full items-center justify-center
              bg-[#d7192d]
              px-7 py-4
              text-xs font-bold uppercase tracking-[0.12em]
              text-white
              transition-all duration-300
              hover:bg-[#b91526]
              sm:w-auto
            "
          >
            Consultar capacidades técnicas
          </a>
        </div>

      </div>
    </section>
  );
};

export default Certificaciones;