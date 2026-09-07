import SectionTitle from "./SectionTitle";

/* ==========================================
   ICONO INSTAGRAM
========================================== */
const InstagramIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const Contacto = () => {
  return (
    <section
      id="contacto"
      className="bg-white py-10 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* ==========================================
            TITULO
        ========================================== */}
        <SectionTitle
          titulo="Contacto"
          subtitulo="Hablemos de"
          acento="su próximo proyecto"
        />

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-slate-500 sm:text-base">
          Contanos qué necesitás y nuestro equipo se pondrá en contacto para
          evaluar los requerimientos del trabajo.
        </p>

        {/* ==========================================
            CONTENIDO
        ========================================== */}
        <div className="mt-8 grid gap-5 lg:mt-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* ==========================================
              PANEL IZQUIERDO
          ========================================== */}
          <div className="reveal-up relative overflow-hidden bg-[#07182b] p-5 text-white sm:p-7 lg:p-8">
            {/* ACENTO SUPERIOR */}
            <div className="absolute left-0 top-0 h-[4px] w-full bg-[#d7192d]" />

            <p className="font-industrial text-2xl font-bold uppercase sm:text-3xl">
              Canales de contacto
            </p>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
              Comunicate directamente con nuestro equipo para consultas,
              presupuestos y coordinación de trabajos.
            </p>

            {/* ==========================================
                CANALES
            ========================================== */}
            <div className="mt-7 space-y-2">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/impserviciossrl2026/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram IMP Servicios"
                className="
                  group flex items-center gap-3
                  border border-white/10
                  bg-white/[0.03]
                  p-3
                  transition-all duration-300
                  hover:border-[#1677B8]/70
                  hover:bg-[#1677B8]/10
                "
              >
                <div
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    bg-[#1677B8]
                    text-white
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                >
                  <InstagramIcon size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#4FA8E0]">
                    Instagram oficial
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    @impserviciossrl2026
                  </p>
                </div>
              </a>
            </div>

            {/* ==========================================
                PRESENCIA OPERATIVA
            ========================================== */}
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#4FA8E0]">
                Presencia operativa
              </p>

              <p className="mt-2 text-sm font-semibold text-white/75">
                Neuquén · Río Negro
              </p>
            </div>
          </div>

          {/* ==========================================
              FORMULARIO
          ========================================== */}
          <div className="reveal-up border border-slate-200 bg-[#f7f8fa] p-5 sm:p-7 lg:p-8" style={{ transitionDelay: "120ms" }}>

            <div className="mb-7">
              <p className="font-industrial text-2xl font-bold uppercase text-[#07182b] sm:text-3xl">
                Solicitar presupuesto
              </p>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Completá los datos principales y describí brevemente el trabajo
                requerido.
              </p>
            </div>

            <form className="grid gap-4 sm:gap-5">

              {/* NOMBRE / EMPRESA */}
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Nombre y apellido
                  </label>

                  <input
                    type="text"
                    placeholder="Su nombre"
                    className="
                      mt-2 w-full
                      border-0 border-b border-slate-300
                      bg-transparent
                      px-0 py-2
                      text-sm text-[#07182b]
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-[#1677B8]
                    "
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Empresa
                  </label>

                  <input
                    type="text"
                    placeholder="Nombre de la empresa"
                    className="
                      mt-2 w-full
                      border-0 border-b border-slate-300
                      bg-transparent
                      px-0 py-2
                      text-sm text-[#07182b]
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-[#1677B8]
                    "
                  />
                </div>

              </div>

              {/* EMAIL / TELEFONO */}
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="correo@empresa.com"
                    className="
                      mt-2 w-full
                      border-0 border-b border-slate-300
                      bg-transparent
                      px-0 py-2
                      text-sm text-[#07182b]
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-[#1677B8]
                    "
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Teléfono
                  </label>

                  <input
                    type="tel"
                    placeholder="+54..."
                    className="
                      mt-2 w-full
                      border-0 border-b border-slate-300
                      bg-transparent
                      px-0 py-2
                      text-sm text-[#07182b]
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-[#1677B8]
                    "
                  />
                </div>

              </div>

              {/* SERVICIO */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Servicio requerido
                </label>

                <select
                  defaultValue=""
                  className="
                    mt-2 w-full
                    border-0 border-b border-slate-300
                    bg-transparent
                    px-0 py-2
                    text-sm text-[#07182b]
                    outline-none
                    transition
                    focus:border-[#1677B8]
                  "
                >
                  <option value="" disabled>
                    Seleccione un servicio
                  </option>

                  <option>Piping</option>
                  <option>Tanques y equipos</option>
                  <option>Estructuras metálicas</option>
                  <option>Arenado y pintura</option>
                  <option>Obra civil de apoyo</option>
                  <option>Naval y portuario</option>
                  <option>Otro</option>
                </select>
              </div>

              {/* DESCRIPCION */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Descripción del proyecto
                </label>

                <textarea
                  rows="4"
                  placeholder="Describa brevemente el trabajo requerido..."
                  className="
                    mt-2 w-full
                    resize-none
                    border-0 border-b border-slate-300
                    bg-transparent
                    px-0 py-2
                    text-sm text-[#07182b]
                    outline-none
                    transition
                    placeholder:text-slate-400
                    focus:border-[#1677B8]
                  "
                />
              </div>

              {/* BOTON */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="
                    w-full
                    bg-[#1677B8]
                    px-7 py-3.5
                    text-xs font-bold uppercase tracking-[0.12em]
                    text-white
                    shadow-[0_8px_24px_rgba(22,119,184,0.20)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#12689f]
                    hover:shadow-[0_12px_30px_rgba(22,119,184,0.28)]
                    sm:w-auto
                  "
                >
                  Enviar solicitud
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;