"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Instagram, Linkedin, MessageCircle } from "lucide-react"
import { LeadFormDialog } from "@/components/lead-form-dialog"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-background border-t border-border pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: wordmark */}
        <div className="mb-16 md:mb-20 overflow-hidden">
          <div
            aria-hidden
            className="font-display font-medium text-[18vw] md:text-[14vw] leading-[0.85] tracking-[-0.04em] text-transparent whitespace-nowrap"
            style={{
              WebkitTextStroke: "1px rgba(142, 157, 171, 0.25)",
            }}
          >
            Wise Tech Projects
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-6 pb-12 border-b border-border">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9">
                <Image
                  src="/logo.png"
                  alt="Wise Tech Projects"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-semibold text-base tracking-tight">
                  Wise Tech
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
                  Projects
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed text-pretty">
              Estúdio recém-chegado entregando landing pages, automações com
              n8n/Make e lojas virtuais. Preço justo, sem enrolação.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Navegar
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#servicos" className="hover:text-brand-glow transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#processo" className="hover:text-brand-glow transition-colors">
                  Processo
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-brand-glow transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-brand-glow transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Onde nos achar
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contato@wisetechprojects.com"
                  className="group flex items-center gap-3 hover:text-brand-glow transition-colors"
                >
                  <Mail className="w-4 h-4 text-muted-foreground group-hover:text-brand-glow transition-colors" />
                  contato@wisetechprojects.com
                </a>
              </li>
              <li>
                <LeadFormDialog>
                  <button className="group flex items-center gap-3 hover:text-brand-glow transition-colors text-sm">
                    <MessageCircle className="w-4 h-4 text-muted-foreground group-hover:text-brand-glow transition-colors" />
                    WhatsApp
                  </button>
                </LeadFormDialog>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-brand-glow hover:bg-card transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-brand-glow hover:bg-card transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          <span>© {year} · Wise Tech Projects · Todos os direitos reservados</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
