import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import GaleriaCategoria from "./pages/GaleriaCategoria";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/galeria/:categoria" element={<GaleriaCategoria />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;