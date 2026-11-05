import { lazy, Suspense, useEffect, useRef, useState } from "react"
import { Menu } from "lucide-react"

import { SelectorTema } from "@/components/selector-tema"
import { Button } from "@/components/ui/button"
import { navegacion } from "@/data/contenido"
import { useSeccionActiva } from "@/hooks/use-seccion-activa"
import type { Tema } from "@/hooks/use-tema"
import { cn } from "@/lib/utils"

const ids = navegacion.map((n) => n.id)

const cargarMenu = () => import("@/components/menu-movil")
const MenuMovil = lazy(cargarMenu)

type Props = {
  tema: Tema
  onCambiarTema: (tema: Tema) => void
}

export function Encabezado({ tema, onCambiarTema }: Props) {
  const activa = useSeccionActiva(ids)
  const [conFondo, setConFondo] = useState(false)
  const [menuPedido, setMenuPedido] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const botonMenu = useRef<HTMLButtonElement>(null)

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
          <Button
            ref={botonMenu}
            variant="ghost"
            size="icon"
            aria-label="Abrir menú"
            aria-haspopup="dialog"
            aria-expanded={menuAbierto}
            onPointerDown={cargarMenu}
            onClick={() => {
              setMenuPedido(true)
              setMenuAbierto(true)
            }}
          >
            <Menu />
          </Button>
          {menuPedido && (
            <Suspense fallback={null}>
              <MenuMovil
                abierto={menuAbierto}
                onCambiar={setMenuAbierto}
                onCerrado={() => botonMenu.current?.focus({ preventScroll: true })}
                activa={activa}
              />
            </Suspense>
          )}
        </div>
      </nav>
    </header>
  )
}
