import { useEffect, useState } from "react"

/** Linea horizontal al 20% de la altura de la pantalla: la seccion que la cruza es la activa */
const LINEA = "-20% 0px -80% 0px"

/** Devuelve el id de la seccion que cruza la parte superior de la pantalla, sin leer el layout */
export function useSeccionActiva(ids: readonly string[]) {
  const [activa, setActiva] = useState("")

  useEffect(() => {
    const cruzando = new Set<string>()
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const { target, isIntersecting } of entradas) {
          if (isIntersecting) cruzando.add(target.id)
          else cruzando.delete(target.id)
        }
        setActiva(ids.find((id) => cruzando.has(id)) ?? "")
      },
      { rootMargin: LINEA }
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observador.observe(el)
    }
    return () => observador.disconnect()
  }, [ids])

  return activa
}
