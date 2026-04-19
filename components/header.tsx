"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20um%20projeto"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 md:w-10 md:h-10">
              <Image
                src="/logo.png"
                alt="Wise Tech Projects"
                fill
                className="object-contain transition-transform duration-500 group-hover:rotate-6"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-semibold text-base md:text-lg tracking-tight">
                Wise Tech
              </span>
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
                Projects
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {[
              { href: "#servicos", label: "Serviços" },
              { href: "#processo", label: "Processo" },
              { href: "#sobre", label: "Sobre" },
              { href: "#contato", label: "Contato" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background text-xs font-medium tracking-wide hover:bg-brand-glow transition-colors"
            >
              Começar projeto
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-6 gap-5">
            {[
              { href: "#servicos", label: "Serviços" },
              { href: "#processo", label: "Processo" },
              { href: "#sobre", label: "Sobre" },
              { href: "#contato", label: "Contato" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full mt-2 px-4 py-3 rounded-full bg-foreground text-background text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Começar projeto
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
