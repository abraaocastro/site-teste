import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const values = [
  {
    title: "Preço justo, sempre",
    description:
      "Somos novos — cobramos menos que os grandes e entregamos mais que freelancers que somem.",
  },
  {
    title: "Comunicação de adulto",
    description:
      "Você sabe o que está acontecendo, em qual etapa estamos, e o que falta. Sem caixa-preta.",
  },
  {
    title: "Código que sobrevive",
    description:
      "Tudo documentado. Se amanhã você quiser levar o projeto pra outro dev, a vida dele será fácil.",
  },
  {
    title: "Ferramentas atuais",
    description:
      "Next.js, n8n, Make, Shopify, Supabase. Stack moderno, manutenível e que não vira legado em 6 meses.",
  },
]

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column: brand statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-glow mb-4">
              <span className="text-muted-foreground">§</span> 03 — Sobre
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.02] text-balance mb-8">
              Novos no mercado.
              <br />
              <span className="text-muted-foreground">Levados a sério</span>
              <br />
              desde o primeiro job.
            </h2>

            {/* Logo panel */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card shadow-brand">
              <div
                className="absolute inset-0 bg-grid-small"
                style={{
                  backgroundColor: "#05161F",
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full opacity-40 animate-breathe"
                style={{
                  background:
                    "radial-gradient(circle, rgba(28,110,158,0.5) 0%, transparent 60%)",
                }}
              />
              <Image
                src="/logo.png"
                alt="Wise Tech Projects"
                fill
                className="object-contain p-10 relative z-10"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground z-10">
                <span>Wise Tech Projects</span>
                <span>est. 2025</span>
              </div>
            </div>
          </div>

          {/* Right column: manifesto + values */}
          <div className="lg:col-span-7">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg lg:text-xl text-foreground leading-relaxed text-pretty">
                A <span className="font-medium">Wise Tech Projects</span> nasceu
                de uma constatação simples: boa parte das pessoas com uma ideia
                não tem <em className="text-muted-foreground">R$20k</em> pra
                gastar numa agência grande, mas também não quer entregar o
                projeto pro primo que &quot;mexe com site&quot;.
              </p>
              <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
                A gente fica nesse meio: estúdio enxuto, foco em três serviços
                que dominamos — landing pages, automações e lojas virtuais — e
                preço proporcional ao escopo. Sem cartela de gerentes,
                &quot;arquitetos&quot; e &quot;consultores&quot; pra pagar.
              </p>
              <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
                Somos novos, e isso é uma vantagem pra você: atenção de verdade,
                cronograma respeitado e um time que ainda se importa com cada
                entrega porque cada projeto conta.
              </p>
            </div>

            {/* Values grid */}
            <div className="mt-14 grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {values.map((v, i) => (
                <div key={v.title} className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[11px] text-muted-foreground tracking-widest">
                      0{i + 1}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                    <CheckCircle2 className="w-4 h-4 text-brand-glow" />
                  </div>
                  <h3 className="font-display text-lg font-medium mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
