"use client"

import { useState } from "react"
import { MessageSquare, ArrowUpRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const WHATSAPP_PHONE = "5500000000000"

interface LeadFormDialogProps {
  children: React.ReactNode
}

export function LeadFormDialog({ children }: LeadFormDialogProps) {
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)

    const data = new FormData(e.currentTarget)
    const nome = (data.get("nome") as string).trim()
    const telefone = (data.get("telefone") as string).trim()
    const email = (data.get("email") as string).trim()
    const descricao = (data.get("descricao") as string).trim()

    const message = `Olá! Me chamo ${nome}.\n\nTelefone: ${telefone}\nE-mail: ${email}\n\nDescrição do projeto:\n${descricao}`

    window.open(
      `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    )

    setOpen(false)
    setSubmitting(false)
  }

  return (
    <>
      <span
        onClick={() => setOpen(true)}
        className="contents"
        role="button"
        tabIndex={-1}
      >
        {children}
      </span>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-medium tracking-tight">
              Conta pra gente o seu projeto
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
              Preencha rapidinho para a gente ter contexto antes da conversa no WhatsApp.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="lead-nome"
                  className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
                >
                  Nome *
                </label>
                <input
                  id="lead-nome"
                  name="nome"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-glow/40 focus:border-brand-glow transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="lead-telefone"
                  className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
                >
                  Telefone *
                </label>
                <input
                  id="lead-telefone"
                  name="telefone"
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-glow/40 focus:border-brand-glow transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="lead-email"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
              >
                E-mail *
              </label>
              <input
                id="lead-email"
                name="email"
                type="email"
                required
                placeholder="voce@exemplo.com"
                className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-glow/40 focus:border-brand-glow transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="lead-descricao"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
              >
                Descrição da solução *
              </label>
              <textarea
                id="lead-descricao"
                name="descricao"
                required
                rows={4}
                placeholder="Descreva brevemente o que você precisa — tipo de projeto, funcionalidades principais, prazo, etc."
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-glow/40 focus:border-brand-glow transition-colors resize-none leading-relaxed"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group mt-1 inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-brand-glow transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <MessageSquare className="w-4 h-4" />
              Ir para o WhatsApp
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <p className="text-center font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
              Seus dados são usados apenas para contato inicial
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
