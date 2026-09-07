const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#07182b] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-6 sm:px-12 sm:py-14 lg:px-12 xl:px-16">

        {/* LOGO MOBILE/TABLET */}
        <div className="flex items-center justify-center gap-3 border-b border-white/10 pb-4 lg:hidden">
          <img
            src={`${import.meta.env.BASE_URL}logoImpServ.png`}
            alt="Logo IMP Servicios"
            className="h-10 w-auto object-contain"
          />

          <div>
            <p className="font-industrial text-xl font-semibold leading-none tracking-wide">
              IMP SERVICIOS SRL
            </p>

            <p className="mt-0.5 text-[9px] uppercase tracking-[0.28em] text-white/40">
              Soluciones industriales
            </p>
          </div>
        </div>

        {/* COLUMNAS SOLO PANTALLAS GRANDES */}
        <div className="hidden gap-8 border-b border-white/10 pb-12 lg:grid lg:grid-cols-4 lg:gap-8">

          {/* MARCA */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}logoImpServ.png`}
                alt="Logo IMP Servicios"
                className="h-16 w-auto object-contain"
              />

              <div>
                <p className="font-industrial text-xl font-semibold leading-none tracking-wide">
                  IMP SERVICIOS SRL
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-white/40">
                  Soluciones industriales
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
              Soldadura, fabricación, montaje, piping, arenado y pintura para
              la industria del petróleo, gas y sector naval-portuario.
            </p>
          </div>

          {/* NAVEGACION */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Navegación
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/50">
              <a href="#inicio" className="transition hover:text-white">
                Inicio
              </a>
              <a href="#empresa" className="transition hover:text-white">
                Empresa
              </a>
              <a href="#servicios" className="transition hover:text-white">
                Servicios
              </a>
              <a href="#proyectos" className="transition hover:text-white">
                Proyectos
              </a>
              <a href="#certificaciones" className="transition hover:text-white">
                Certificaciones
              </a>
            </div>
          </div>

          {/* CONTACTO */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Contacto
            </p>
          </div>

          {/* BASES */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Bases operativas
            </p>

            <div className="mt-5 space-y-4 text-sm text-white/50">
              <div>
                <p className="font-semibold text-white/80">Vista Alegre</p>
                <p>Neuquén</p>
              </div>

              <div>
                <p className="font-semibold text-white/80">Añelo</p>
                <p>Neuquén</p>
              </div>

              <div>
                <p className="font-semibold text-white/80">Sierra Grande</p>
                <p>Río Negro</p>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col justify-between gap-3 pt-4 text-xs text-white/30 md:flex-row md:items-center">
          <p>
            © {year} IMP Servicios SRL. Todos los derechos reservados.
          </p>

          <p className="hidden uppercase tracking-[0.16em] md:block">
            Calidad · Seguridad · Procedimiento
          </p>

          <a
            href="https://www.leandrocalfin.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-[0.16em] transition hover:text-white"
          >
            Sitio desarrollado por Leandro Calfin
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;