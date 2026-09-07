const SectionTitle = ({
  titulo,
  subtitulo = "",
  acento = "",
  conSalto = false,
  dark = false,
  className = "",
}) => {
  const colorBase = dark ? "text-white" : "text-[#07182b]";

  return (
    <div className={`reveal-up mx-auto max-w-4xl text-center ${className}`}>
      <h2
        className={`font-industrial text-[40px] font-bold uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl ${colorBase}`}
      >
        {titulo}
      </h2>

      <h3
        className={`mx-auto mt-3 max-w-3xl font-industrial text-[20px] font-bold uppercase leading-[1.05] sm:mt-5 sm:text-3xl lg:text-[36px] ${colorBase}`}
      >
        {subtitulo}
        {conSalto && <br className="hidden sm:block" />}
        {acento && <span className="text-[#d7192d]"> {acento}</span>}
      </h3>
    </div>
  );
};

export default SectionTitle;