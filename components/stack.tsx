const stack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "n8n",
  "Make (Integromat)",
  "Shopify",
  "WooCommerce",
  "Nuvemshop",
  "Supabase",
  "PostgreSQL",
  "Vercel",
  "TypeScript",
  "Node.js",
  "OpenAI API",
  "Google APIs",
  "Stripe",
  "Mercado Pago",
  "WhatsApp API",
]

export function Stack() {
  return (
    <section className="relative py-14 md:py-20 bg-background overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground text-center">
          Ferramentas que usamos no dia a dia
        </p>
      </div>

      <div className="relative flex overflow-hidden mask-radial-fade">
        <div className="flex shrink-0 animate-marquee gap-12 md:gap-16 pr-12 md:pr-16">
          {[...stack, ...stack].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display text-3xl md:text-5xl font-medium tracking-[-0.02em] text-muted-foreground/60 whitespace-nowrap flex items-center gap-12 md:gap-16"
            >
              {item}
              <span className="text-brand-glow/40 text-2xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
