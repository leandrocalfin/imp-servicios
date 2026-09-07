import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const categorias = {
  piping: {
    titulo: "Piping",
    descripcionAntes:
      "Tendido, prefabricado y montaje de ",
    descripcionRoja:
      "cañerías de proceso, ductos y sistemas PEAD",
    descripcionDespues:
      " para instalaciones industriales.",
    certificacion: "ASME IX · API 1104",
    carpeta: "piping",
    cantidad: 12,
  },

  tanques: {
    titulo: "Tanques y equipos",
    descripcionAntes:
      "Construcción, reparación y reacondicionamiento de ",
    descripcionRoja:
      "tanques, equipos de proceso, piletas y skids",
    descripcionDespues:
      " para aplicaciones industriales.",
    certificacion: "ASME IX · API 1104",
    carpeta: "tanques",
    cantidad: 18,
  },

  estructuras: {
    titulo: "Estructuras metálicas",
    descripcionAntes:
      "Fabricación, montaje y acondicionamiento de ",
    descripcionRoja:
      "estructuras metálicas, soportes, pasarelas, escaleras y bastidores",
    descripcionDespues:
      " para proyectos industriales.",
    certificacion: "AWS D1.1 · ISO 9606",
    carpeta: "estructuras",
    cantidad: 20,
  },

  "arenado-pintura": {
    titulo: "Arenado y pintura",
    descripcionAntes:
      "Preparación de superficies mediante ",
    descripcionRoja:
      "arenado y aplicación de sistemas de pintura industrial",
    descripcionDespues:
      " para protección y mantenimiento de estructuras y equipos.",
    certificacion: "SSPC-SP10 · Sa 2½",
    carpeta: "arenado-pintura",
    cantidad: 10,
  },

  naval: {
    titulo: "Naval y portuario",
    descripcionAntes:
      "Trabajos de mantenimiento, reparación y acondicionamiento para ",
    descripcionRoja:
      "operaciones navales y portuarias",
    descripcionDespues:
      " con soluciones adaptadas a cada requerimiento.",
    certificacion: "Habilitación Naval N.º I-71",
    carpeta: "naval",
    cantidad: 8,
  },
};

const GaleriaCategoria = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();

  const [imagenActiva, setImagenActiva] = useState(null);

  const datos = categorias[categoria];

  const imagenes = useMemo(() => {
    if (!datos) return [];

    return Array.from(
      { length: datos.cantidad },
      (_, index) =>
        `${import.meta.env.BASE_URL}galeria/${datos.carpeta}/${index + 1}.png`
    );
  }, [datos]);

  /* ==========================================
     ENTRAR SIEMPRE ARRIBA
  ========================================== */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [categoria]);

  /* ==========================================
     SI LA CATEGORÍA NO EXISTE
  ========================================== */
  useEffect(() => {
    if (!datos) {
      navigate("/#galeria", {
        replace: true,
      });
    }
  }, [datos, navigate]);

  /* ==========================================
     VOLVER A GALERÍA
  ========================================== */
  const volverGaleria = () => {
    navigate("/");

    let intentos = 0;

    const buscarGaleria = () => {
      const galeria = document.getElementById("galeria");

      if (galeria) {
        galeria.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(
          null,
          "",
          `${import.meta.env.BASE_URL}#galeria`
        );

        return;
      }

      intentos += 1;

      if (intentos < 120) {
        requestAnimationFrame(buscarGaleria);
      }
    };

    requestAnimationFrame(buscarGaleria);
  };

  /* ==========================================
     LIGHTBOX
  ========================================== */
  const abrirImagen = (index) => {
    setImagenActiva(index);
  };

  const cerrarImagen = () => {
    setImagenActiva(null);
  };

  const anterior = () => {
    setImagenActiva((prev) =>
      prev === 0 ? imagenes.length - 1 : prev - 1
    );
  };

  const siguiente = () => {
    setImagenActiva((prev) =>
      prev === imagenes.length - 1 ? 0 : prev + 1
    );
  };

  /* ==========================================
     TECLADO
  ========================================== */
  useEffect(() => {
    if (imagenActiva === null) return;

    const manejarTeclado = (event) => {
      if (event.key === "Escape") {
        setImagenActiva(null);
      }

      if (event.key === "ArrowLeft") {
        setImagenActiva((prev) =>
          prev === 0
            ? imagenes.length - 1
            : prev - 1
        );
      }

      if (event.key === "ArrowRight") {
        setImagenActiva((prev) =>
          prev === imagenes.length - 1
            ? 0
            : prev + 1
        );
      }
    };

    window.addEventListener(
      "keydown",
      manejarTeclado
    );

    return () => {
      window.removeEventListener(
        "keydown",
        manejarTeclado
      );
    };
  }, [imagenActiva, imagenes.length]);

  if (!datos) {
    return null;
  }

  return (
    <>
      {/* ==========================================
          FONDO NAVBAR
      ========================================== */}
      <div className="fixed left-0 top-0 z-40 h-24 w-full bg-[#07182b]" />

      <Navbar />

      <main className="min-h-screen">

        {/* ==========================================
            ENCABEZADO
        ========================================== */}
        <section className="border-b border-white/10 bg-[#07182b] text-white">

          <div
            className="
              mx-auto
              max-w-[1440px]
              px-5
              pb-8
              pt-28
              sm:px-8
              sm:pb-12
              sm:pt-30
              lg:px-12
              lg:pb-14
              lg:pt-32
              xl:px-16
            "
          >

            <button
              type="button"
              onClick={volverGaleria}
              className="
                group
                mb-5
                inline-flex
                items-center
                gap-2.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#4FA8E0]
                transition-all
                duration-300
                hover:text-white
                sm:mb-7
                sm:text-[11px]
              "
            >
              <ChevronLeft
                size={15}
                className="
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />

              Volver a la galería
            </button>

            <div
              className="
                grid
                items-center
                gap-8
                lg:grid-cols-[420px_1fr]
                lg:gap-24
              "
            >

              {/* ==========================================
                  TITULO
              ========================================== */}
              <div>

                <h1
                  className="
                    max-w-[430px]
                    font-industrial
                    text-[40px]
                    font-bold
                    uppercase
                    leading-[0.92]
                    tracking-tight
                    text-white
                    sm:text-6xl
                    lg:text-7xl
                  "
                >
                  {datos.titulo}
                </h1>

                <p
                className="
                    mt-3
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#4FA8E0]
                    sm:text-[11px]
                "
                >
                {datos.certificacion}
                </p>
                <div className="mt-4 h-[3px] w-20 bg-[#d7192d]" />

              </div>

              {/* ==========================================
                  DESCRIPCIÓN
              ========================================== */}
              <div className="max-w-4xl">

                <p
                  className="
                    font-industrial
                    text-lg
                    font-bold
                    uppercase
                    leading-[1.15]
                    tracking-tight
                    text-white
                    sm:text-[24px]
                    lg:text-[27px]
                    xl:text-[30px]
                  "
                >
                  {datos.descripcionAntes}

                  <span className="text-[#d7192d]">
                    {datos.descripcionRoja}
                  </span>

                  {datos.descripcionDespues}
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ==========================================
            GALERÍA
        ========================================== */}
        <section
          className="
            bg-white
            py-10
            text-[#07182b]
            sm:py-16
            lg:py-20
          "
        >

          <div
            className="
              mx-auto
              max-w-[1440px]
              px-5
              sm:px-8
              lg:px-12
              xl:px-16
            "
          >

            {/* ==========================================
                CABECERA
            ========================================== */}
            <div
              className="
                mb-6
                flex
                items-end
                gap-5
                sm:mb-8
              "
            >

              <div>

                <p
                  className="
                    font-industrial
                    text-2xl
                    font-bold
                    uppercase
                    sm:text-3xl
                  "
                >
                  Trabajos realizados
                </p>

                <p className="mt-2 text-sm text-[#07182b]/50">
                  {imagenes.length} imágenes
                </p>

              </div>

            </div>

            {/* ==========================================
                GRID
            ========================================== */}
            <div
              className="
                grid
                grid-cols-2
                gap-3
                sm:grid-cols-2
                sm:gap-4
                lg:grid-cols-3
              "
            >

              {imagenes.map((imagen, index) => {
                const destacada =
                  index % 7 === 0 ||
                  index % 7 === 4;

                return (
                  <button
                    key={imagen}
                    type="button"
                    onClick={() =>
                      abrirImagen(index)
                    }
                    className={`
                      group
                      relative
                      overflow-hidden
                      bg-[#e9eef3]

                      ${
                        destacada
                          ? "min-h-[200px] sm:row-span-2 sm:min-h-[560px]"
                          : "min-h-[200px] sm:min-h-[270px] lg:min-h-[300px]"
                      }
                    `}
                  >

                    {/* IMAGEN */}
                    <img
                      src={imagen}
                      alt={`${datos.titulo} ${index + 1}`}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#07182b]/70
                        via-transparent
                        to-transparent
                        opacity-40
                        transition
                        duration-500
                        group-hover:opacity-70
                      "
                    />

                    {/* LINEA ROJA */}
                    <div
                      className="
                        absolute
                        left-0
                        top-0
                        h-[3px]
                        w-0
                        bg-[#d7192d]
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />

                    {/* VER IMAGEN */}
                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        translate-y-2
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-white
                        "
                      >
                        Ver imagen
                      </span>
                    </div>

                    {/* NUMERO */}
                    <div className="absolute bottom-5 right-5">

                      <span
                        className="
                          font-industrial
                          text-xl
                          font-bold
                          text-white/40
                        "
                      >
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                    </div>

                  </button>
                );
              })}

            </div>

            {/* ==========================================
                VOLVER FINAL
            ========================================== */}
            <div
              className="
                mt-8
                flex
                justify-center
                sm:mt-16
                lg:mt-20
              "
            >

              <button
                type="button"
                onClick={volverGaleria}
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  bg-[#1677B8]
                  px-8
                  py-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#12689f]
                  sm:w-auto
                  sm:px-10
                "
              >
                <ChevronLeft
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                  "
                />

                Volver a la galería
              </button>

            </div>

          </div>

        </section>

      </main>

      {/* ==========================================
          FOOTER
      ========================================== */}
      <Footer />

      {/* ==========================================
          LIGHTBOX
      ========================================== */}
      {imagenActiva !== null && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-[#020810]/95
            p-4
            backdrop-blur-sm
          "
        >

          {/* CERRAR */}
          <button
            type="button"
            onClick={cerrarImagen}
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              border
              border-white/20
              bg-white/5
              text-white
              transition
              hover:bg-white/10
              sm:right-8
              sm:top-8
            "
            aria-label="Cerrar"
          >
            <X size={22} />
          </button>

          {/* ANTERIOR */}
          <button
            type="button"
            onClick={anterior}
            className="
              absolute
              left-3
              top-1/2
              z-20
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              bg-[#07182b]/80
              text-white
              transition
              hover:bg-[#1677B8]
              sm:left-8
            "
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={26} />
          </button>

          {/* IMAGEN */}
          <div
            className="
              flex
              h-full
              max-h-[90vh]
              w-full
              max-w-[1400px]
              flex-col
              items-center
              justify-center
            "
          >

            <img
              src={imagenes[imagenActiva]}
              alt={`${datos.titulo} ${
                imagenActiva + 1
              }`}
              className="
                max-h-[82vh]
                max-w-full
                object-contain
              "
            />

            {/* CONTADOR */}
            <div
              className="
                mt-5
                flex
                items-center
                gap-3
                text-xs
                uppercase
                tracking-[0.16em]
                text-white/50
              "
            >

              <span className="text-white">
                {String(
                  imagenActiva + 1
                ).padStart(2, "0")}
              </span>

              <span>/</span>

              <span>
                {String(
                  imagenes.length
                ).padStart(2, "0")}
              </span>

            </div>

          </div>

          {/* SIGUIENTE */}
          <button
            type="button"
            onClick={siguiente}
            className="
              absolute
              right-3
              top-1/2
              z-20
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              bg-[#07182b]/80
              text-white
              transition
              hover:bg-[#1677B8]
              sm:right-8
            "
            aria-label="Imagen siguiente"
          >
            <ChevronRight size={26} />
          </button>

        </div>
      )}
    </>
  );
};

export default GaleriaCategoria;