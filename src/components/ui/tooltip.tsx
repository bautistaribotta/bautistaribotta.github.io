import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type Props = {
  texto: string
  lado?: "top" | "bottom"
  children: ReactNode
}

/** Tooltip de puro CSS: aparece con hover o foco sin sumar JavaScript a la carga inicial */
export function Tooltip({ texto, lado = "top", children }: Props) {
  return (
    <span className="group/tooltip relative inline-flex">
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-1/2 z-50 w-max -translate-x-1/2 scale-95 rounded-md bg-foreground px-3 py-1.5 text-xs text-background opacity-0 transition-[opacity,scale] duration-150 group-hover/tooltip:scale-100 group-hover/tooltip:opacity-100 group-hover/tooltip:delay-200 group-has-[:focus-visible]/tooltip:scale-100 group-has-[:focus-visible]/tooltip:opacity-100",
          lado === "top" ? "bottom-full mb-1.5" : "top-full mt-1.5"
        )}
      >
        {texto}
        <span
          className={cn(
            "absolute left-1/2 size-2.5 -translate-x-1/2 rotate-45 rounded-[2px] bg-foreground",
            lado === "top" ? "-bottom-1" : "-top-1"
          )}
        />
      </span>
    </span>
  )
}
