# Portafolio - Bautista Ribotta

Sitio web personal para la exhibición de proyectos y habilidades técnicas. Versión 3.0, migrada a React con componentes de shadcn/ui y un estilo inspirado en Vercel.

## Tecnologías

* React 19 + TypeScript
* Vite
* Tailwind CSS v4
* shadcn/ui (Radix UI + lucide-react)
* Fuentes Geist (Sans, Mono y Serif)

## Temas

* **Negro** (por defecto): negro y blanco, al estilo Vercel.
* **Verde**: la paleta original del portafolio.

El selector está en la barra de navegación y la elección se guarda en el navegador.

## Desarrollo

```bash
npm install
npm run dev
```

## Publicación

El sitio se compila con `npm run build` y se publica con el workflow `.github/workflows/deploy.yml`.
En GitHub, la fuente de Pages tiene que estar en **Settings > Pages > Source: GitHub Actions**.
