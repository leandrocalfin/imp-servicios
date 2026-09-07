import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";

import SectionTitle from "./SectionTitle";

const bases = [
  {
    numero: "01",
    ciudad: "Vista Alegre",
    provincia: "Neuquén",
    direccion: "Fincas 3 — Ruta Provincial 7",
    posicion: [-38.75, -68.18],
  },
  {
    numero: "02",
    ciudad: "Añelo",
    provincia: "Neuquén",
    direccion: "Parque Industrial",
    posicion: [-38.35, -68.79],
  },
  {
    numero: "03",
    ciudad: "Sierra Grande",
    provincia: "Río Negro",
    direccion: "Km 1740 — Ruta Nacional 3",
    posicion: [-41.61, -65.36],
  },
];

/* ==========================================
   MARCADOR PERSONALIZADO
========================================== */
const crearIcono = (numero) =>
  L.divIcon({
    className: "",
    html: `
      <div
        style="
          width:42px;
          height:42px;
          border-radius:50%;
          background:#d7192d;
          border:4px solid white;
          box-shadow:0 8px 20px rgba(0,0,0,.30);
          color:white;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:12px;
          font-weight:700;
          font-family:Arial,sans-serif;
        "
      >
        ${numero}
      </div>
    `,
    iconSize: [42, 42],
    iconAnchor: [21, 21],
    popupAnchor: [0, -25],
  });

/* ==========================================
   AJUSTA EL MAPA A LAS 3 BASES
========================================== */
const AjustarMapa = () => {
  const map = useMap();

  useEffect(() => {
    const puntos = bases.map((base) => base.posicion);

    map.fitBounds(puntos, {
      padding: [70, 70],
    });
  }, [map]);

  return null;
};

const BasesOperativas = () => {
  return (
    <section
      id="bases"
      className="bg-[#f4f6f8] py-10 text-[#07182b] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* ==========================================
            TITULO PRINCIPAL
        ========================================== */}
        <SectionTitle
          titulo="Bases operativas"
          subtitulo="Presencia estratégica en"
          acento="Neuquén y Río Negro"
        />

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-7 text-slate-500 sm:text-base">
          Nuestra estructura operativa permite acompañar proyectos
          industriales desde puntos estratégicos de la región.
        </p>

        {/* ==========================================
            BLOQUE MAPA + BASES
        ========================================== */}
        <div className="reveal-up mt-10 overflow-hidden bg-[#07182b] lg:mt-16">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

            {/* ======================================
                PANEL IZQUIERDO / MAPA
            ====================================== */}
            <div className="relative bg-[#0d2038] p-5 sm:p-7 lg:p-8">

              {/* TITULO INTERNO */}
              <div className="mb-4 sm:mb-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#4FA8E0]">
                  Cobertura regional
                </p>

                <h3 className="mt-2 font-industrial text-2xl font-bold uppercase leading-[1.05] text-white sm:text-3xl">
                  Presencia en puntos
                  <br />
                  estratégicos
                </h3>
              </div>

              {/* MAPA */}
              <div className="relative mx-auto h-[200px] w-full overflow-hidden border border-white/10 sm:h-[320px] lg:h-[330px]">
                <MapContainer
                  center={[-39.8, -67.5]}
                  zoom={6}
                  scrollWheelZoom={false}
                  className="h-full w-full"
                >
                  <TileLayer
                    attribution="© OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <AjustarMapa />

                  {bases.map((base) => (
                    <Marker
                      key={base.numero}
                      position={base.posicion}
                      icon={crearIcono(base.numero)}
                    >
                      <Popup>
                        <div
                          style={{
                            minWidth: "190px",
                            fontFamily: "Arial, sans-serif",
                          }}
                        >
                          <strong
                            style={{
                              fontSize: "16px",
                              color: "#07182b",
                            }}
                          >
                            {base.ciudad}
                          </strong>

                          <p
                            style={{
                              margin: "3px 0",
                              color: "#1677B8",
                              fontSize: "12px",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                            }}
                          >
                            {base.provincia}
                          </p>

                          <p
                            style={{
                              marginTop: "8px",
                              marginBottom: 0,
                              color: "#555",
                              lineHeight: "1.5",
                            }}
                          >
                            {base.direccion}
                          </p>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>

            {/* ======================================
                PANEL DERECHO / LISTA DE BASES
            ====================================== */}
            <div className="p-5 text-white sm:p-7 lg:p-8">
              <p className="font-industrial text-2xl font-bold uppercase sm:text-3xl">
                Nuestra presencia
              </p>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/50">
                Tres bases operativas ubicadas estratégicamente para acompañar
                trabajos industriales en la región.
              </p>

              <div className="mt-6">
                {bases.map((base) => (
                  <div
                    key={base.numero}
                    className="group border-b border-white/10 py-3.5 first:pt-0 last:border-b-0 sm:py-4"
                  >
                    <div className="flex gap-5">

                      {/* NUMERO */}
                      <div className="font-industrial text-2xl font-bold text-[#d7192d] sm:text-3xl">
                        {base.numero}
                      </div>

                      {/* INFO */}
                      <div>
                        <h3 className="font-industrial text-2xl font-bold uppercase leading-none sm:text-3xl">
                          {base.ciudad}
                        </h3>

                        <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4FA8E0]">
                          {base.provincia}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-white/55">
                          {base.direccion}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-5">
                <a
                  href="#contacto"
                  className="
                    inline-flex
                    bg-[#1677B8]
                    px-7 py-3
                    text-xs font-bold uppercase
                    tracking-[0.12em]
                    text-white
                    transition-all duration-300
                    hover:bg-[#12689f]
                  "
                >
                  Consultar cobertura
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BasesOperativas;