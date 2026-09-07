import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const mensaje =
    "Hola, me comunico desde el sitio web de IMP Servicios. Quisiera realizar una consulta.";

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a IMP Servicios por WhatsApp"
      className="group fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 lg:bottom-8 lg:right-8"
    >
      {/* EFECTO DE PULSO */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20" />

      {/* ARO EXTERIOR */}
      <span className="absolute -inset-1 -z-10 rounded-full border border-[#25D366]/30" />

      {/* LOGO WHATSAPP */}
      <FaWhatsapp className="text-[34px] text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />

      {/* TEXTO HOVER */}
      <span className="pointer-events-none absolute right-[78px] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded bg-[#07182b] px-4 py-2.5 text-xs font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 lg:block">
        ¿Necesitás asesoramiento?
      </span>
    </a>
  );
};

export default WhatsApp;