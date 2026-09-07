import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Nombre del repo en GitHub. Si tu repo se llama distinto,
  // cambia '/imp-servicios/' por '/TU-REPO/'.
  base: "/imp-servicios/",
  plugins: [react(), tailwindcss()],
});