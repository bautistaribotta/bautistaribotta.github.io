import { useEffect, useState, type FormEvent } from "react"
import { Check, Loader2, Mail, Send } from "lucide-react"

import { TituloSeccion } from "@/components/secciones/titulo-seccion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const ENDPOINT = "https://formspree.io/f/xreagbrb"

type Estado = "inicial" | "enviando" | "enviado" | "error"

export function Contacto() {
  const [estado, setEstado] = useState<Estado>("inicial")

  useEffect(() => {
    if (estado !== "enviado" && estado !== "error") return
    const t = setTimeout(() => setEstado("inicial"), estado === "enviado" ? 5000 : 3000)
    return () => clearTimeout(t)
  }, [estado])

  const enviar = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setEstado("enviando")
    try {
      const respuesta = await fetch(ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
      if (!respuesta.ok) throw new Error(String(respuesta.status))
      form.reset()
      setEstado("enviado")
    } catch {
      setEstado("error")
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 border-t py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <TituloSeccion
              numero="04"
              titulo="Contacto"
              descripcion="Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme."
            />
            <a
              href="mailto:bautistaribotta@hotmail.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4 text-highlight" />
              bautistaribotta@hotmail.com
            </a>
          </div>

          <Card className="bg-card/50">
            <CardContent>
              <form onSubmit={enviar} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input id="nombre" name="nombre" required placeholder="Tu nombre" autoComplete="name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={6}
                    placeholder="Tu mensaje..."
                    className="min-h-36 resize-none"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Button type="submit" disabled={estado !== "inicial"}>
                    {estado === "enviando" && <Loader2 className="animate-spin" />}
                    {estado === "enviado" && <Check />}
                    {(estado === "inicial" || estado === "error") && <Send />}
                    {estado === "inicial" && "Enviar mensaje"}
                    {estado === "enviando" && "Enviando..."}
                    {estado === "enviado" && "Mensaje enviado"}
                    {estado === "error" && "Error, intentá de nuevo"}
                  </Button>
                  <p aria-live="polite" className="sr-only">
                    {estado === "enviado" && "Mensaje enviado"}
                    {estado === "error" && "Hubo un error al enviar el mensaje"}
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
