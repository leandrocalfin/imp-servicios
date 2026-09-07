import { Link } from "react-router-dom";

import SectionTitle from "./SectionTitle";

const trabajos = [
  {
    numero: "01",
    titulo: "Piping",
    descripcion:
      "Tendido, prefabricado y montaje de cañerías de proceso, ductos y PEAD.",
    imagen:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    ruta: "/galeria/piping",
  },
  {
    numero: "02",
    titulo: "Tanques y equipos",
    descripcion:
      "Construcción y reparación de tanques API, equipos de proceso, piletas y skids.",
    imagen:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
    ruta: "/galeria/tanques",
  },
  {
    numero: "03",
    titulo: "Estructuras metálicas",
    descripcion:
      "Fabricación de soportes, pasarelas, escaleras, columnas y bastidores.",
    imagen:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
    ruta: "/galeria/estructuras",
  },
  {
    numero: "04",
    titulo: "Arenado y pintura",
    descripcion:
      "Preparación SSPC-SP10 y aplicación de sistemas epoxi y poliuretano.",
    imagen:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    ruta: "/galeria/arenado-pintura",
  },
  {
    numero: "05",
    titulo: "Naval y portuario",
    descripcion:
      "Trabajos de mantenimiento, reparación y acondicionamiento para operaciones navales y portuarias.",
    imagen:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    ruta: "/galeria/naval",
  },
];

const Galeria = () => {
  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-[#07182b] py-10 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* TITULO */}
        <SectionTitle
          dark
          titulo="Galería"
          subtitulo="Trabajos realizados en"
          acento="campo y taller"
          className="mb-8 sm:mb-14 lg:mb-16"
        />

        {/* PRIMERA FILA */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
          {trabajos.slice(0, 3).map((trabajo, index) => (
            <TarjetaTrabajo
              key={trabajo.numero}
              trabajo={trabajo}
              ancho={index === 2 ? "col-span-2 lg:col-span-1" : ""}
              retraso={index * 80}
            />
          ))}
        </div>

        {/* SEGUNDA FILA */}
        <div className="mt-3 grid grid-cols-2 gap-3 lg:mt-4 lg:grid-cols-2 lg:gap-4">
          {trabajos.slice(3).map((trabajo, index) => (
            <TarjetaTrabajo
              key={trabajo.numero}
              trabajo={trabajo}
              grande
              retraso={(index + 3) * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TarjetaTrabajo = ({ trabajo, grande = false, ancho = "", retraso = 0 }) => {
  return (
     <Link
      to={trabajo.ruta}
      className={`reveal-up group relative block cursor-pointer overflow-hidden ${ancho} ${
            grande
            ? "h-[220px] sm:h-[360px] lg:h-[380px]"
            : "h-[220px] sm:h-[390px] lg:h-[430px]"
        }`}
        style={{ transitionDelay: `${Math.min(retraso, 280)}ms` }}
        >
      {/* FOTO */}
      <img
        src={trabajo.imagen}
        alt={trabajo.titulo}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07182b] via-[#07182b]/35 to-transparent transition duration-500 group-hover:via-[#07182b]/50" />

      {/* NUMERO */}
      <div className="absolute right-6 top-6">
        <span className="font-industrial text-4xl font-bold text-white/20 sm:text-5xl">
          {trabajo.numero}
        </span>
      </div>

      {/* LINEA SUPERIOR */}
      <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#d7192d] transition-all duration-500 group-hover:w-full" />

      {/* CONTENIDO */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-7 lg:p-8">
        <div className="mb-2 h-[2px] w-8 bg-[#d7192d] transition-all duration-500 group-hover:w-16 sm:mb-3" />

        <h3 className="font-industrial text-xl font-bold uppercase leading-none text-white sm:text-3xl lg:text-4xl">
          {trabajo.titulo}
        </h3>

        <p className="mt-2 max-w-md line-clamp-2 text-sm leading-5 text-white/65 sm:mt-4 sm:leading-6">
          {trabajo.descripcion}
        </p>

        <div className="mt-3 sm:mt-4">
          <span
            className="
              inline-flex items-center
              rounded-full
              border border-white/50
              px-4 py-2.5
              text-[10px] font-bold uppercase tracking-[0.12em]
              text-white
              transition-all duration-300
              group-hover:border-[#d7192d]
              group-hover:bg-[#d7192d]
              sm:px-6
              sm:text-xs
            "
          >
            Ver imágenes
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Galeria;