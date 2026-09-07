import { Mail } from "lucide-react";

import SectionTitle from "./SectionTitle";

/* ==========================================
   ICONO WHATSAPP
========================================== */
const WhatsAppIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.76.46 3.48 1.33 5L2 22l5.14-1.35A10.02 10.02 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm0 18.18a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.05.8.82-2.96-.2-.3A8.1 8.1 0 0 1 3.86 12c0-4.5 3.67-8.18 8.18-8.18S20.18 7.5 20.18 12s-3.64 8.18-8.14 8.18Zm4.48-6.12c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.57.13-.16.25-.64.8-.78.96-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.23-.73-.65-1.23-1.46-1.37-1.7-.15-.25-.02-.38.1-.5.12-.12.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.57-1.38-.78-1.9-.2-.49-.41-.42-.57-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7.58.25 1.04.4 1.4.51.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
  </svg>
);

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

              {/* EMAIL */}
              <a
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
                  <Mail size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#4FA8E0]">
                    Email
                  </p>
                </div>
              </a>

              {/* WHATSAPP ELIAS */}
              <a
                target="_blank"
                rel="noopener noreferrer"
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
                  <WhatsAppIcon size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#4FA8E0]">
                    WhatsApp
                  </p>
                </div>
              </a>

              {/* WHATSAPP LAUTARO */}
              <a
                target="_blank"
                rel="noopener noreferrer"
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
                  <WhatsAppIcon size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#4FA8E0]">
                    WhatsApp
                  </p>
                </div>
              </a>

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