import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Empresa from "../components/Empresa";
import Servicios from "../components/Servicios";
import Certificaciones from "../components/Certificaciones";
import Galeria from "../components/Galeria";
import BasesOperativas from "../components/BasesOperativas";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

const Inicio = () => {
  return (
    <main>
      <ScrollReveal />

      <Navbar />
      <Hero />
      <TrustBar />
      <Empresa />
      <Servicios />
      <Certificaciones />
      <Galeria />
      <BasesOperativas />
      <Contacto />
      <Footer />
    </main>
  );
};

export default Inicio;