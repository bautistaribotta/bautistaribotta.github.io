import { GraduationCap, Target } from "lucide-react"

import { TituloSeccion } from "@/components/secciones/titulo-seccion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { estadisticas } from "@/data/contenido"

const tarjetas = [
  {
    titulo: "Educación",
    Icono: GraduationCap,
    texto:
      "Estoy finalizando la carrera de Ingeniería en Software y complemento esa base con cursos en plataformas como Platzi y Udemy. Aplico lo que aprendo en proyectos propios y para clientes, y busco sumarme a un equipo donde seguir creciendo junto a otros profesionales.",
  },
  {
    titulo: "Enfoque",
    Icono: Target,
    texto:
      "Desarrollo aplicaciones web y mobile de punta a punta. Trabajo el backend con Python y Django, el frontend con React, TypeScript y Tailwind, y las apps mobile con React Native y Expo. Sumo herramientas de IA como Claude Code a mi flujo de trabajo para desarrollar más rápido.",
  },
]

export function SobreMi() {
  return (
    <section id="about" className="scroll-mt-16 border-t py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <TituloSeccion numero="01" titulo="Sobre mí" />

        <p className="font-display max-w-3xl text-xl leading-relaxed text-foreground md:text-2xl">
          Soy desarrollador de software y construyo aplicaciones completas, de la base de datos a la
          interfaz: desde sistemas de gestión para el sector apícola hasta apps mobile y sitios web
          para clientes.
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
