"use client"

import Image from "next/image"
import { ArrowUpRight, Sparkles } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20um%20projeto"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-grid mask-radial-fade pointer-events-none" />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none opacity-50 animate-drift"
        style={{
          background:
            "radial-gradient(circle, rgba(28,110,158,0.25) 0%, rgba(8,77,110,0.1) 40%, transparent 70%)",
        }}
      />

      {/* Big ghosted logo behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[70vw] max-w-[700px] aspect-square opacity-[0.07] animate-breathe">
          <Image
            src="/logo.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="max-w-4xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-8 animate-fade-up">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-brand-glow opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-brand-glow" />
            </span>
            Estúdio novo · Aceitando projetos
          </div>

          {/* Headline */}
          <h1
            className="font-display font-medium text-[2.5rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.98] tracking-[-0.03em] text-balance animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Sua ideia, entregue
            <br />
            <span className="text-gradient-brand">com capricho</span>
            <br />
            <span className="text-muted-foreground">
              e preço justo.
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="mt-8 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            A <span className="text-foreground font-medium">Wise Tech Projects</span> é uma iniciativa recente entrando no mercado para desenvolver as ideias das pessoas — <span className="text-foreground">landing pages, automações com n8n e Make, e lojas virtuais</span>. Sem enrolação, sem taxa escondida.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-10 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-medium hover:bg-brand-glow transition-colors"
            >
              Pedir orçamento
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#servicos"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border hover:border-brand-glow/60 hover:bg-card/50 transition-all font-medium"
            >
              <Sparkles className="w-4 h-4 text-brand-glow" />
              Ver o que fazemos
            </a>
          </div>

          {/* Honest disclaimers / signals of trust */}
          <div
            className="mt-16 md:mt-24 flex flex-wrap items-center gap-x-8 gap-y-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-3">
              <div className="font-display text-2xl md:text-3xl font-medium text-foreground">
                48h
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground leading-tight">
                Resposta
                <br />
                ao orçamento
              </div>
            </div>
            <div className="h-8 w-px bg-border hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="font-display text-2xl md:text-3xl font-medium text-foreground">
                100%
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground leading-tight">
                Código limpo
                <br />
                e documentado
              </div>
            </div>
            <div className="h-8 w-px bg-border hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="font-display text-2xl md:text-3xl font-medium text-foreground">
                0
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground leading-tight">
                Taxa
                <br />
                escondida
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  )
}
