import { ArrowDown, FileDown, MapPin } from "lucide-react"

import { IconoGithub, IconoLinkedin } from "@/components/iconos"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import { redes } from "@/data/contenido"

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      <div className="fondo-cuadricula pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="brillo pointer-events-none absolute -top-40 left-1/2 size-[48rem] -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 md:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <Badge variant="outline" className="gap-2 rounded-full px-3 py-1 font-mono text-muted-foreground">
              <span className="size-1.5 rounded-full bg-highlight" />
              Software Engineering Student
            </Badge>

            <h1 className="font-display text-5xl font-semibold tracking-tighter text-foreground md:text-7xl">
              Bautista
              <br />
              <span className="text-primary">Ribotta</span>
            </h1>

            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              Finalizando la carrera de Ingeniería en Software. Desarrollador full-stack de
              aplicaciones web y mobile.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg" className="rounded-full">
                <a
                  href="/archivos/cv_bautista_ribotta.pdf"
                  download="Bautista_Ribotta_CV.pdf"
                  target="_blank"
                >
                  <FileDown />
                  Descargar CV
                </a>
              </Button>

              <Tooltip texto="LinkedIn">
                <Button asChild variant="outline" size="icon" className="size-10 rounded-full">
                  <a href={redes.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <IconoLinkedin />
                  </a>
                </Button>
              </Tooltip>

              <Tooltip texto="GitHub">
                <Button asChild variant="outline" size="icon" className="size-10 rounded-full">
                  <a href={redes.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <IconoGithub />
                  </a>
                </Button>
              </Tooltip>
            </div>
          </div>

          {/* La foto solo se ve desde lg: en pantallas chicas sizes pide la variante mas liviana */}
          <div className="hidden justify-center lg:flex">
            <div className="group relative">
              <div className="relative overflow-hidden rounded-xl border bg-card p-2 shadow-2xl">
                <div className="h-96 w-80 overflow-hidden rounded-lg bg-muted">
                  <img
                    width={720}
                    height={1280}
                    fetchPriority="high"
                    src="/img/imagen-personal-640.webp"
                    srcSet="/img/imagen-personal-320.webp 320w, /img/imagen-personal-640.webp 640w"
                    sizes="(min-width: 1024px) 320px, 1px"
                    alt="Bautista Ribotta"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="absolute -bottom-5 -left-8 flex items-center gap-3 rounded-lg border bg-background/90 px-4 py-3 shadow-lg backdrop-blur-md">
                <MapPin className="size-4 text-highlight" />
                <div>
                  <p className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                    Viviendo en
                  </p>
                  <p className="text-sm font-medium text-foreground">Córdoba, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  )
}
