import { useEffect, useState } from "react"

export type Tema = "negro" | "verde"

const CLAVE = "tema"

function leerTema(): Tema {
  try {
    return localStorage.getItem(CLAVE) === "negro" ? "negro" : "verde"
  } catch {
    return "verde"
  }
}

export function useTema() {
  const [tema, setTema] = useState<Tema>(leerTema)

  useEffect(() => {
    const raiz = document.documentElement
    if (tema === "verde") raiz.dataset.theme = "verde"
    else delete raiz.dataset.theme
    try {
      localStorage.setItem(CLAVE, tema)
    } catch {
      // Sin almacenamiento disponible: el tema solo dura la visita
    }
  }, [tema])

  return { tema, setTema }
}
