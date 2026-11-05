import { TituloSeccion } from "@/components/secciones/titulo-seccion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { habilidades } from "@/data/contenido"

export function Habilidades() {
  return (
    <section id="skills" className="scroll-mt-16 border-t py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <TituloSeccion numero="02" titulo="Habilidades" />

        <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-highlight" />
            Stack principal
          </span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full border border-muted-foreground" />
            Sumando experiencia
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {habilidades.map((grupo) => (
            <Card key={grupo.titulo} className="gap-4 bg-card/50">
              <CardHeader>
                <CardTitle className="font-mono text-xs font-normal tracking-wider text-muted-foreground uppercase">
                  {grupo.titulo}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {grupo.principales.map((h) => (
                  <Badge key={h} variant="secondary" className="gap-1.5 rounded-full px-3 py-1 text-sm font-normal">
                    <span className="size-1.5 rounded-full bg-highlight" />
                    {h}
                  </Badge>
                ))}
                {grupo.aprendiendo.map((h) => (
                  <Badge
                    key={h}
                    variant="outline"
                    className="rounded-full px-3 py-1 text-sm font-normal text-muted-foreground"
                  >
                    {h}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
