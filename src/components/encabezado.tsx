import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

import { SelectorTema } from "@/components/selector-tema"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navegacion } from "@/data/contenido"
import { useSeccionActiva } from "@/hooks/use-seccion-activa"
import type { Tema } from "@/hooks/use-tema"
import { cn } from "@/lib/utils"

const ids = navegacion.map((n) => n.id)

type Props = {
  tema: Tema
  onCambiarTema: (tema: Tema) => void
}

export function Encabezado({ tema, onCambiarTema }: Props) {
  const activa = useSeccionActiva(ids)
  const [conFondo, setConFondo] = useState(false)

  useEffect(() => {
    const actualizar = () => setConFondo(window.scrollY > 50)
    actualizar()
    window.addEventListener("scroll", actualizar, { passive: true })
    return () => window.removeEventListener("scroll", actualizar)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        conFondo
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-base font-semibold tracking-tight text-foreground">
          <span className="text-primary">B</span>autista
          <span className="font-normal text-muted-foreground">.dev</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-1">
            {navegacion.map(({ id, etiqueta }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={activa === id ? "true" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-foreground",
                    activa === id ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {etiqueta}
                </a>
              </li>
            ))}
          </ul>
          <SelectorTema tema={tema} onCambiar={onCambiarTema} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <SelectorTema tema={tema} onCambiar={onCambiarTema} />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle>Navegación</SheetTitle>
                <SheetDescription className="sr-only">Secciones del portafolio</SheetDescription>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-4">
                {navegacion.map(({ id, etiqueta }) => (
                  <li key={id}>
                    <SheetClose asChild>
                      <a
                        href={`#${id}`}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-foreground",
                          activa === id ? "text-foreground" : "text-muted-foreground"
                        )}
                      >
                        {etiqueta}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
