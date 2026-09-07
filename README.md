# IMP Servicios SRL — Sitio web

Sitio institucional de **IMP Servicios SRL**: soldadura, fabricación, montaje, piping, arenado y pintura para la industria del petróleo, gas y el sector naval-portuario.

🌐 **Demo:** https://leandrocalfin.github.io/imp-servicios/

## Tecnologías

- React 19 + Vite 8
- Tailwind CSS 4
- React Router 7 (rutas: `/` y `/galeria/:categoria`)
- Leaflet / React-Leaflet (mapa de bases operativas)
- Framer Motion, Lucide, React Icons

## Estructura

- `src/pages/` — `Inicio`, `GaleriaCategoria`
- `src/components/` — Navbar, Hero, Empresa, Servicios, Certificaciones, Galería, BasesOperativas, Contacto, Footer, WhatsApp
- `public/galeria/` — fotos por categoría (piping, tanques, estructuras, arenado-pintura, naval)
- `.github/workflows/deploy.yml` — deploy automático a GitHub Pages

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # compilar a dist/
npm run preview  # previsualizar el build
npm run lint     # linter
```

## Deploy

Cada push a `main` compila y publica automáticamente en GitHub Pages (Source: GitHub Actions).
El sitio usa `base: "/imp-servicios/"` y `basename` del router, más un fallback `404.html` para que las rutas `/galeria/:categoria` funcionen al recargar.

## Crédito

Sitio desarrollado por **Leandro Calfin**.
