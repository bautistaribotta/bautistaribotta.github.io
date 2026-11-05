import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import type { Proyecto } from "@/data/contenido"

type Props = {
  proyecto: Proyecto | null
  onCerrar: () => void
}

/** Se carga recien cuando hace falta, junto con el codigo del dialogo */
export default function VisorCaptura({ proyecto, onCerrar }: Props) {
  return (
    <Dialog open={proyecto !== null} onOpenChange={(abierto) => !abierto && onCerrar()}>
      <DialogContent className="max-w-[calc(100%-2rem)] gap-3 p-3 sm:max-w-4xl">
        {proyecto && (
          <>
            <DialogTitle className="px-1 pt-1 pr-8 text-sm font-medium">{proyecto.nombre}</DialogTitle>
            <DialogDescription className="sr-only">Captura ampliada del proyecto</DialogDescription>
            <img
              src={`/img/${proyecto.imagen}.webp`}
              alt={`Captura de ${proyecto.nombre}`}
              width={proyecto.ancho}
              height={proyecto.alto}
              className="max-h-[80vh] w-full rounded-md border object-contain"
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
