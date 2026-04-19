import { MessageCircle, FileText, Wrench, Rocket } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Conversa",
    duration: "~30 min",
    description:
      "Você me conta o problema, o contexto e o que já tentou. Eu faço as perguntas que ninguém faz. Sem compromisso.",
  },
  {
    step: "02",
    icon: FileText,
    title: "Proposta",
    duration: "até 48h",
    description:
      "Documento curto e direto: escopo, prazo, valor e o que fica de fora. Nada de surpresa depois do aceite.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "Execução",
    duration: "acompanhamento contínuo",
    description:
      "Desenvolvemos por etapas com entregas visíveis. Você acompanha pelo WhatsApp ou Slack — como preferir.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Entrega & Suporte",
    duration: "30 dias de garantia",
    description:
      "Publicação, handover documentado e 30 dias de ajustes gratuitos. Depois disso, manutenção só se você quiser.",
  },
]

export function Process() {
  return (
    <section
      id="processo"
      className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-small mask-radial-fade pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-glow mb-4">
            <span className="text-muted-foreground">§</span> 02 — Processo
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.02] text-balance">
            Do <span className="italic text-muted-foreground">&quot;tive uma ideia&quot;</span>
            <br />
            até o projeto no ar.
          </h2>
        </div>

        {/* Desktop: horizontal timeline with dotted connector */}
        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-6 left-0 right-0 h-px"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(142,157,171,0.3) 50%, transparent 50%)",
              backgroundSize: "12px 1px",
            }}
          />

          <div className="grid md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.step} className="relative">
                  {/* Node */}
                  <div className="relative z-10 mb-6 flex items-center md:block">
                    <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center shadow-brand md:mx-0">
                      <Icon className="w-5 h-5 text-brand-glow" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground tracking-widest ml-4 md:ml-0 md:block md:mt-4">
                      {s.step} / 04
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-medium tracking-[-0.015em] mb-1">
                    {s.title}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-brand-glow/80 mb-3">
                    {s.duration}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                    {s.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
