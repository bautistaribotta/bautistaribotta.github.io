import { GraduationCap, Target } from "lucide-react"

import { TituloSeccion } from "@/components/secciones/titulo-seccion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { estadisticas } from "@/data/contenido"

const tarjetas = [
  {
    titulo: "Educación",
    Icono: GraduationCap,
    texto:
      "Actualmente estoy finalizando la carrera de Ingeniería en Software, aunque realicé múltiples cursos en plataformas como Platzi, Udemy, entre otras. Busco trabajar/colaborar con otros profesionales para seguir mejorando mis habilidades.",
  },
  {
    titulo: "Enfoque",
    Icono: Target,
    texto:
      "Me especializo en el desarrollo backend con Python y el framework de Django, aunque me gusta diseñar y escribir código front-end usando HTML, CSS, Tailwind y JavaScript. Tengo sólidas bases en desarrollo con IA, bases de datos SQL (MySQL y SQLite), sistemas de control de versiones con Git y metodologías ágiles.",
  },
]

export function SobreMi() {
  return (
    <section id="about" className="scroll-mt-16 border-t py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <TituloSeccion numero="01" titulo="Sobre mí" />

        <p className="font-display max-w-3xl text-xl leading-relaxed text-foreground md:text-2xl">
          Soy un desarrollador de software con una fuerte pasión por crear aplicaciones completas,
          encargándome tanto del front-end como del back-end y con una base en diseño UX/UI.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {tarjetas.map(({ titulo, Icono, texto }) => (
            <Card key={titulo} className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Icono className="size-4 text-highlight" />
                  {titulo}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{texto}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 divide-x overflow-hidden rounded-xl border">
          {estadisticas.map(({ valor, etiqueta }) => (
            <div key={etiqueta} className="p-6 md:p-8">
              <p className="font-display text-3xl font-semibold tracking-tight text-primary md:text-5xl">
                {valor}
              </p>
              <p className="mt-2 text-xs text-muted-foreground md:text-sm">{etiqueta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
