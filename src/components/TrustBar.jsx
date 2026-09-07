const datos = [
  {
    valor: "ASME IX",
    titulo: "Soldadura",
    descripcion: "Procedimientos calificados y trazables",
  },
  {
    valor: "API 1104",
    titulo: "Soldadores 6G",
    descripcion: "FCAW / SMAW",
  },
  {
    valor: "I-71",
    titulo: "Reparación naval",
    descripcion: "Prefectura Naval Argentina",
  },
  {
    valor: "SSPC-SP10",
    titulo: "Arenado grado Sa 2½",
    descripcion: "Preparación de superficie de calidad industrial",
  },
  {
    valor: "EPOXI + PU",
    titulo: "Pintura industrial",
    descripcion: "Protección anticorrosiva para exposición severa",
  },
];

const TrustBar = () => {
  return (
    <section className="relative z-20 w-full bg-white text-[#07182b]">
      <div className="grid w-full grid-cols-2 lg:grid-cols-5">
        {datos.map((dato, index) => {
          const esUltimo = index === datos.length - 1;

          return (
            <div
              key={dato.valor}
              className={`
                reveal-up flex min-h-[78px] flex-col justify-center
                border-b border-slate-200
                px-4 py-2.5
                transition-colors duration-300
                hover:bg-slate-50

                ${esUltimo ? "col-span-2 lg:col-span-1" : ""}

                sm:min-h-[100px]
                ${esUltimo ? "sm:border-r-0" : "sm:border-r"}
                sm:px-5
                sm:py-3.5

                lg:min-h-[110px]
                lg:border-b-0
                lg:px-6
                lg:py-4
                lg:last:border-r-0

                xl:px-8
              `}
              style={{ transitionDelay: `${Math.min(index * 70, 280)}ms` }}
            >
              <p className="font-industrial text-lg font-bold leading-none text-[#d7192d] sm:text-xl xl:text-2xl">
                {dato.valor}
              </p>

              <h3 className="mt-1 text-[10px] font-bold uppercase tracking-wide sm:text-[11px] xl:text-xs">
                {dato.titulo}
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-[11px] xl:text-xs">
                {dato.descripcion}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustBar;