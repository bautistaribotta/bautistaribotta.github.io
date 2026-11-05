import { useEffect, useState } from "react"

/** Devuelve el id de la seccion que esta cruzando la parte superior de la pantalla */
export function useSeccionActiva(ids: readonly string[], desplazamiento = 150) {
  const [activa, setActiva] = useState("")

  useEffect(() => {
    const actualizar = () => {
      let actual = ""
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= desplazamiento && rect.bottom >= desplazamiento) {
          actual = id
          break
        }
      }
      setActiva(actual)
    }
    actualizar()
    window.addEventListener("scroll", actualizar, { passive: true })
    return () => window.removeEventListener("scroll", actualizar)
  }, [ids, desplazamiento])

  return activa
}
