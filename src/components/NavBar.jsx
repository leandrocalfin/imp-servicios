import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { nombre: "Inicio", id: "inicio" },
    { nombre: "Empresa", id: "empresa" },
    { nombre: "Servicios", id: "servicios" },
    { nombre: "Certificaciones", id: "certificaciones" },
    { nombre: "Galería", id: "galeria" },
    { nombre: "Contacto", id: "contacto" },
  ];

  const irASeccion = (id) => {
    setMenuAbierto(false);

    // Si ya estamos en Inicio
    if (location.pathname === "/") {
      const seccion = document.getElementById(id);

      if (seccion) {
        seccion.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", `${import.meta.env.BASE_URL}#${id}`);
      }

      return;
    }

    // Si estamos dentro de un álbum
    navigate(`/#${id}`);
  };

  return (
    <header
      className={`
        fixed left-0 top-0 z-50 w-full
        transition-all duration-300
        ${
          scrolled || menuAbierto || location.pathname !== "/"
            ? "border-b border-white/10 bg-[#07182b]/95 shadow-lg backdrop-blur-md"
            : "border-b border-white/10 bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 lg:px-8 xl:px-16">

        {/* LOGO */}
        <button
          type="button"
          onClick={() => irASeccion("inicio")}
          className="flex items-center gap-3 text-left"
        >
          <img
            src={`${import.meta.env.BASE_URL}logoImpServ.png`}
            alt="Logo IMP Servicios"
            className="h-16 w-16 object-contain"
          />

          <div className="hidden sm:block">
            <p className="font-industrial text-xl font-semibold leading-none tracking-wide text-white">
              IMP SERVICIOS SRL
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-white/50">
              Soluciones industriales
            </p>
          </div>
        </button>

        {/* DESKTOP */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => irASeccion(link.id)}
              className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
            >
              {link.nombre}
            </button>
          ))}
        </nav>

        {/* CTA + MENU MOBILE */}
        <div className="flex items-center gap-3">

          {/* CTA MOBILE */}
          <button
            type="button"
            onClick={() => irASeccion("contacto")}
            className="
              bg-[#1677B8]
              px-4 py-2.5
              text-xs font-semibold text-white
              leading-none
              transition-all duration-300
              hover:bg-[#12689f]
              lg:hidden
            "
          >
            Hacé tu consulta
          </button>

          {/* CTA DESKTOP */}
          <button
            type="button"
            onClick={() => irASeccion("contacto")}
            className="
              hidden bg-[#1677B8]
              px-5 py-2.5
              text-sm font-semibold text-white
              transition-all duration-300
              hover:bg-[#12689f]
              lg:block xl:px-6 xl:py-3
            "
          >
            Hacé tu consulta
          </button>

          {/* HAMBURGUESA */}
          <button
            type="button"
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="flex flex-col gap-1.5 border-l border-white/10 pl-3 lg:hidden"
            aria-label="Abrir menú"
          >
            <span className="h-[2px] w-7 bg-white" />
            <span className="h-[2px] w-7 bg-white" />
            <span className="h-[2px] w-7 bg-white" />
          </button>

        </div>

      </div>

      {menuAbierto && (
        <div className="border-t border-white/10 bg-[#07182b] px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">

            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => irASeccion(link.id)}
                className="text-left text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.nombre}
              </button>
            ))}

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;