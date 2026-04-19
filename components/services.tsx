import { Rocket, Workflow, ShoppingBag, ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    icon: Rocket,
    title: "Landing Pages",
    tagline: "Que convertem, não que bonitam.",
    description:
      "Páginas rápidas, responsivas e focadas em gerar leads ou vendas. SEO de base, analytics configurado, formulários que funcionam — tudo pronto pra rodar.",
    bullets: [
      "Design sob medida",
      "Performance acima de 90 no Lighthouse",
      "Integração com WhatsApp, pixels e CRMs",
      "Publicação na Vercel / seu domínio",
    ],
  },
  {
    number: "02",
    icon: Workflow,
    title: "Automações",
    tagline: "Com n8n, Make e APIs.",
    description:
      "Se seu time faz manualmente toda semana, tem automação ali. Conectamos apps, orquestramos fluxos e te devolvemos horas — ou dias — por mês.",
    bullets: [
      "Fluxos em n8n (self-hosted ou cloud)",
      "Cenários no Make (Integromat)",
      "Integrações com Google, Notion, Slack, WhatsApp",
      "Webhooks e rotinas agendadas",
    ],
  },
  {
    number: "03",
    icon: ShoppingBag,
    title: "Lojas Virtuais",
    tagline: "E-commerce sem travar.",
    description:
      "Lojas montadas com as plataformas certas pro seu momento — do catálogo simples à loja com estoque, checkout transparente e integração fiscal.",
    bullets: [
      "Shopify, WooCommerce ou Nuvemshop",
      "Checkout otimizado e meios de pagamento",
      "Integração com ERPs e marketplaces",
      "Migração de lojas existentes",
    ],
  },
]

export function Services() {
  return (
    <section
      id="servicos"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-glow mb-4">
              <span className="text-muted-foreground">§</span> 01 — Serviços
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.02] text-balance">
              Três frentes.
              <br />
              <span className="text-muted-foreground">Uma promessa:</span>
              <br />
              resolver de verdade.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-pretty leading-relaxed">
            Não vendemos pacotes fechados. Escutamos seu problema, proponho o
            caminho mais curto e te entrego funcionando.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.number}
                className="group relative bg-card p-8 lg:p-10 flex flex-col hover:bg-secondary/60 transition-colors duration-500"
              >
                {/* Top row: number + icon */}
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono text-xs text-muted-foreground tracking-widest">
                    {service.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-brand-deep/20 border border-brand-royal/20 flex items-center justify-center group-hover:bg-brand-royal/30 group-hover:border-brand-royal/50 transition-all duration-500">
                    <Icon className="w-5 h-5 text-brand-glow" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl lg:text-3xl font-medium tracking-[-0.02em] leading-tight mb-2">
                  {service.title}
                </h3>
                <p className="font-mono text-xs text-brand-glow/80 uppercase tracking-wider mb-5">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 text-pretty">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 mt-auto pt-6 border-t border-border/60">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-foreground/85"
                    >
                      <span className="font-mono text-[11px] text-brand-glow/70 mt-[3px]">
                        ●
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <ArrowUpRight className="absolute top-8 right-8 w-4 h-4 text-muted-foreground opacity-0 -translate-x-1 -translate-y-1 group-hover:opacity-0 pointer-events-none" />
              </article>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="mt-10 font-mono text-xs text-muted-foreground text-center">
          Não achou o que precisa? <a href="#contato" className="text-brand-glow hover:underline underline-offset-4">Conversa vale</a>.
        </p>
      </div>
    </section>
  )
}
