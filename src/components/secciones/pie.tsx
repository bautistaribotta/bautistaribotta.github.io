import { Mail } from "lucide-react"

import { IconoGithub, IconoLinkedin } from "@/components/iconos"
import { Separator } from "@/components/ui/separator"
import { redes } from "@/data/contenido"

const enlaces = [
  { href: redes.github, etiqueta: "GitHub", Icono: IconoGithub },
  { href: redes.linkedin, etiqueta: "LinkedIn", Icono: IconoLinkedin },
  { href: redes.email, etiqueta: "Email", Icono: Mail },
]

export function Pie() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid items-center gap-8 md:grid-cols-3">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <img
              width={330}
              height={207}
              loading="lazy"
              decoding="async"
              src="/img/bandera-arg.webp"
              alt="Bandera de Argentina"
              className="h-3.5 w-auto rounded-[2px]"
            />
            <span className="text-sm text-muted-foreground">Córdoba, Argentina</span>
          </div>

          <div className="flex items-center justify-center gap-5">
            {enlaces.map(({ href, etiqueta, Icono }) => (
              <a
                key={etiqueta}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={etiqueta}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icono className="size-4" />
              </a>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground md:text-right">
            &copy; {new Date().getFullYear()} Bautista Ribotta
          </p>
        </div>

        <Separator className="my-8" />

        <p className="text-center font-mono text-xs tracking-widest text-muted-foreground uppercase">
          ¡Gracias por tomarte el trabajo de ver todo!
        </p>
      </div>
    </footer>
  )
}
