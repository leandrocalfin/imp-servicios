import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import SectionTitle from "./SectionTitle";

const servicios = [
  {
    titulo: "Piping",
    descripcion:
      "Tendido, prefabricado y montaje de cañerías de proceso, ductos y PEAD.",
    imagen:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
  },
  {
    titulo: "Tanques y equipos",
    descripcion:
      "Construcción y reparación de tanques API, equipos de proceso, piletas y skids.",
    imagen:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=85",
  },
  {
    titulo: "Estructuras metálicas",
    descripcion:
      "Fabricación de soportes, pasarelas, escaleras, columnas y bastidores.",
    imagen:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=85",
  },
  {
    titulo: "Arenado y pintura",
    descripcion:
      "Arenado industrial SSPC-SP10 y aplicación de pinturas epoxi y poliuretano.",
    imagen:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
  },
  {
    titulo: "Obra civil de apoyo",
    descripcion:
      "Bases de equipos, soportes y trabajos complementarios para proyectos industriales.",
    imagen:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
  },
];

const Servicios = () => {
  const [activo, setActivo] = useState(0);

  const anterior = () => {
    setActivo((prev) =>
      prev === 0 ? servicios.length - 1 : prev - 1
    );
  };

  const siguiente = () => {
    setActivo((prev) =>
      prev === servicios.length - 1 ? 0 : prev + 1
    );
  };

  const getPosicion = (index) => {
    let diferencia = index - activo;

    if (diferencia > servicios.length / 2) {
      diferencia -= servicios.length;
    }

    if (diferencia < -servicios.length / 2) {
      diferencia += servicios.length;
    }

    return diferencia;
  };

  const obtenerTransformacion = (posicion) => {
    const distancia = Math.abs(posicion);

    let desplazamiento = 0;
    let escala = 1;
    let rotacion = 0;

    if (distancia === 1) {
      desplazamiento = 270;
      escala = 0.82;
      rotacion = 17;
    }

    if (distancia === 2) {
      desplazamiento = 455;
      escala = 0.65;
      rotacion = 22;
    }

    if (posicion < 0) {
      desplazamiento *= -1;
      rotacion *= -1;
    }

    return `
      translateX(-50%)
      translateX(${desplazamiento}px)
      scale(${escala})
      rotateY(${-rotacion}deg)
    `;
  };

  const obtenerOpacidad = (posicion) => {
    const distancia = Math.abs(posicion);

    if (distancia === 0) return 1;
    if (distancia === 1) return 0.88;
    if (distancia === 2) return 0.48;

    return 0;
  };

  const obtenerZIndex = (posicion) => {
    const distancia = Math.abs(posicion);

    if (distancia === 0) return 30;
    if (distancia === 1) return 20;
    if (distancia === 2) return 10;

    return 0;
  };

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-[#07182b] py-10 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1700px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* TITULO */}
        <SectionTitle
          dark
          titulo="Servicios"
          subtitulo="Soluciones integrales para"
          acento="proyectos industriales"
          className="relative z-40"
        />

        {/* CARRUSEL */}
        <div className="reveal-up relative mt-10 sm:mt-20 lg:mt-24">
          <div
            className="relative mx-auto h-[410px] w-full sm:h-[520px] lg:h-[540px]"
            style={{
              perspective: "1600px",
              transformStyle: "preserve-3d",
            }}
          >
            {/* FLECHA IZQUIERDA */}
            <button
              type="button"
              onClick={anterior}
              aria-label="Servicio anterior"
              className="
                absolute left-0 top-1/2 z-50
                flex h-12 w-12 -translate-y-1/2
                items-center justify-center
                rounded-md bg-[#102a44]
                text-white shadow-lg
                transition-all duration-300
                hover:bg-[#d7192d]
                lg:h-14 lg:w-14
              "
            >
              <ChevronLeft size={30} />
            </button>

            {/* CARDS */}
            {servicios.map((servicio, index) => {
              const posicion = getPosicion(index);
              const distancia = Math.abs(posicion);
              const esActivo = posicion === 0;

              return (
                <article
                key={servicio.titulo}
                onClick={() => setActivo(index)}
                className={`
                  absolute left-1/2 top-0
                  h-[370px] w-[270px]
                  cursor-pointer
                  overflow-hidden
                  transition-all duration-700 ease-out

                  sm:h-[470px] sm:w-[300px]
                  lg:h-[500px] lg:w-[320px]

                  ${
                    esActivo
                      ? "bg-[#183550] shadow-[0_28px_80px_rgba(0,0,0,0.55)]"
                      : "bg-[#132b43] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                  }
                `}
                style={{
                  transform: obtenerTransformacion(posicion),
                  opacity: obtenerOpacidad(posicion),
                  zIndex: obtenerZIndex(posicion),
                  pointerEvents: distancia > 2 ? "none" : "auto",
                }}
              >
                {/* SOLO LINEA ROJA SUPERIOR */}
                {esActivo && (
                  <div className="absolute left-0 top-0 z-20 h-[3px] w-full bg-[#d7192d]" />
                )}

                {/* FOTO */}
                <div className="relative h-[185px] overflow-hidden sm:h-[260px] lg:h-[285px]">
                  <img
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div
                    className={`
                      absolute inset-0
                      bg-gradient-to-t
                      ${
                        esActivo
                          ? "from-[#183550] via-[#183550]/20"
                          : "from-[#132b43] via-[#132b43]/20"
                      }
                      to-transparent
                    `}
                  />
                </div>

                {/* CONTENIDO */}
                <div className="flex flex-col items-center px-5 py-4 text-center sm:px-6 sm:py-6">
                  <h4 className="font-industrial text-2xl font-bold uppercase leading-none text-white sm:text-[28px] lg:text-3xl">
                    {servicio.titulo}
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-white/60 sm:mt-4 sm:text-sm sm:leading-6">
                    {servicio.descripcion}
                  </p>

                  {esActivo && (
                    <a
                      href="#contacto"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        mt-3 inline-flex
                        items-center justify-center
                        rounded-full
                        border border-white/50
                        px-7 py-3
                        text-[10px] font-bold
                        uppercase tracking-[0.12em]
                        text-white
                        transition-all duration-300
                        hover:border-[#d7192d]
                        hover:bg-[#d7192d]
                        sm:text-xs
                      "
                    >
                      Consultar
                    </a>
                  )}
                </div>
              </article>
              );
            })}

            {/* FLECHA DERECHA */}
            <button
              type="button"
              onClick={siguiente}
              aria-label="Siguiente servicio"
              className="
                absolute right-0 top-1/2 z-50
                flex h-12 w-12 -translate-y-1/2
                items-center justify-center
                rounded-md bg-[#102a44]
                text-white shadow-lg
                transition-all duration-300
                hover:bg-[#d7192d]
                lg:h-14 lg:w-14
              "
            >
              <ChevronRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;