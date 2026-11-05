import { useState } from "react"
import { ArrowUpRight, Code2, ExternalLink, Maximize2 } from "lucide-react"

import { IconoGithub } from "@/components/iconos"
import { TituloSeccion } from "@/components/secciones/titulo-seccion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { proyectos, redes, type Proyecto } from "@/data/contenido"

export function Proyectos() {
  const [ampliado, setAmpliado] = useState<Proyecto | null>(null)

  return (
    <section id="projects" className="scroll-mt-16 border-t py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <TituloSeccion
          numero="03"
          titulo="Proyectos"
          descripcion="Aplicaciones web, mobile y de escritorio en las que trabajé."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {proyectos.map((p, i) => (
            <Card
              key={p.nombre}
              className="group gap-0 overflow-hidden bg-card/50 py-0 transition-colors hover:border-muted-foreground/40"
            >
              <button
                type="button"
                onClick={() => setAmpliado(p)}
                aria-label={`Ampliar captura: ${p.nombre}`}
                className="relative block aspect-video w-full cursor-zoom-in overflow-hidden border-b bg-muted outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <img
                  src={`/img/miniaturas/${p.imagen}-720.webp`}
                  srcSet={`/img/miniaturas/${p.imagen}-320.webp 320w, /img/miniaturas/${p.imagen}-720.webp 720w`}
                  sizes="(min-width: 768px) 540px, calc(100vw - 48px)"
                  alt={`Captura de ${p.nombre}`}
                  width={p.ancho}
                  height={p.alto}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-md border bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <Maximize2 className="size-3.5" />
                </span>
              </button>

              <CardHeader className="gap-2 pt-6">
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-lg font-semibold tracking-tight">
                    <a
                      href={p.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-highlight"
                    >
                      {p.nombre}
                      <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </CardTitle>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <CardDescription className="leading-relaxed">
                  {p.descripcion}
                  {p.enDesarrollo && (
                    <Badge variant="outline" className="ml-2 align-middle font-mono text-[10px] text-highlight">
                      En desarrollo
                    </Badge>
                  )}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-1.5 pt-4">
                {p.tecnologias.map((t) => (
                  <Badge key={t} variant="secondary" className="font-mono font-normal">
                    {t}
                  </Badge>
                ))}
              </CardContent>

              <CardFooter className="mt-auto gap-2 pt-6 pb-6">
                {p.enVivo && (
                  <Button asChild size="sm" variant="outline">
                    <a href={p.enVivo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink />
                      Ver en vivo
                    </a>
                  </Button>
                )}
                {p.codigo && (
                  <Button asChild size="sm" variant="ghost">
                    <a href={p.codigo} target="_blank" rel="noopener noreferrer">
                      <Code2 />
                      Código
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="rounded-full">
            <a href={redes.github} target="_blank" rel="noopener noreferrer">
              <IconoGithub />
              Ver todos los proyectos en GitHub
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </div>

      <Dialog open={ampliado !== null} onOpenChange={(abierto) => !abierto && setAmpliado(null)}>
        <DialogContent className="max-w-[calc(100%-2rem)] gap-3 p-3 sm:max-w-4xl">
          {ampliado && (
            <>
              <DialogTitle className="px-1 pt-1 pr-8 text-sm font-medium">{ampliado.nombre}</DialogTitle>
              <DialogDescription className="sr-only">Captura ampliada del proyecto</DialogDescription>
              <img
                src={`/img/${ampliado.imagen}.webp`}
                alt={`Captura de ${ampliado.nombre}`}
                width={ampliado.ancho}
                height={ampliado.alto}
                className="max-h-[80vh] w-full rounded-md border object-contain"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
