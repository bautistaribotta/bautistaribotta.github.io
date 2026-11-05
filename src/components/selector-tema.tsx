import { Leaf, Moon } from "lucide-react"

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import type { Tema } from "@/hooks/use-tema"
import { cn } from "@/lib/utils"

const opciones = [
  { valor: "negro", etiqueta: "Tema negro", Icono: Moon },
  { valor: "verde", etiqueta: "Tema verde", Icono: Leaf },
] as const

type Props = {
  tema: Tema
  onCambiar: (tema: Tema) => void
  className?: string
}

/** Selector segmentado de dos temas, al estilo del switcher de Vercel */
export function SelectorTema({ tema, onCambiar, className }: Props) {
  return (
    <div
      role="radiogroup"
      aria-label="Tema de colores"
      className={cn("inline-flex items-center gap-0.5 rounded-full border p-0.5", className)}
    >
      {opciones.map(({ valor, etiqueta, Icono }) => {
        const activo = tema === valor
        return (
          <Tooltip key={valor}>
            <TooltipTrigger asChild>
              <button
                type="button"
                role="radio"
                aria-checked={activo}
                aria-label={etiqueta}
                onClick={() => onCambiar(valor)}
                className={cn(
                  "flex size-7 cursor-pointer items-center justify-center rounded-full transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                  activo
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icono className="size-3.5" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={6}>
              {etiqueta}
            </TooltipContent>
          </Tooltip>
        )
      })}
    </div>
  )
}
