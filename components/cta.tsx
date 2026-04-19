"use client"

import { ArrowUpRight, MessageSquare } from "lucide-react"
import Image from "next/image"
import { LeadFormDialog } from "@/components/lead-form-dialog"

export function CTA() {
  return (
    <section id="contato" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden border border-brand-royal/20 shadow-brand"
          style={{
            background:
              "linear-gradient(135deg, #05161F 0%, #084D6E 60%, #1C6E9E 130%)",
          }}
        >
          {/* Ambient texture */}
          <div className="absolute inset-0 bg-grid-small opacity-40 pointer-events-none" />
          <div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-40 pointer-events-none animate-drift"
            style={{
              background:
                "radial-gradient(circle, rgba(58,139,196,0.6) 0%, transparent 60%)",
            }}
          />

          {/* Giant logo watermark */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-10 pointer-events-none">
            <Image src="/logo.png" alt="" fill sizes="384px" className="object-contain" />
          </div>

          <div className="relative px-6 py-16 md:px-16 md:py-24 lg:px-24">
            <div className="max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-silver/80 mb-4">
                <span className="text-brand-glow">§</span> 04 — Vamos conversar
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-[-0.02em] leading-[1.0] text-balance text-white mb-8">
                Tem uma ideia?
                <br />
                <span className="text-brand-silver">Mande ela pra cá.</span>
              </h2>

              <p className="text-base sm:text-lg text-brand-silver/90 max-w-2xl leading-relaxed text-pretty mb-10">
                Conversa de 30 minutos, sem compromisso. Se fizer sentido
                pra gente trabalhar junto, você recebe a proposta em até 48h.
                Se não fizer, você sai com insights úteis do mesmo jeito.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <LeadFormDialog>
                  <button className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-brand-deep font-medium hover:bg-brand-silver transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    Chamar no WhatsApp
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </LeadFormDialog>
                <a
                  href="mailto:contato@wisetechprojects.com"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-brand-silver/30 text-white hover:bg-white/5 transition-colors font-medium"
                >
                  Ou mandar um e-mail
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Signal line */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-silver/70">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Respondendo em até 48h
                </span>
                <span className="hidden sm:inline">·</span>
                <span>Orçamento gratuito</span>
                <span className="hidden sm:inline">·</span>
                <span>Sem compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
