# Wise Tech Projects — Site institucional

Site oficial da **Wise Tech Projects**, estúdio recém-chegado ao mercado
desenvolvendo landing pages, automações (n8n, Make) e lojas virtuais.

Stack: **Next.js 16 + React 19 + Tailwind CSS v4 + TypeScript**.

---

## ⚠️ Antes de dar deploy — 3 coisas pra editar

O site está 100% funcional, mas tem **placeholders** que você precisa trocar
pelos seus contatos reais. Todos estão concentrados em 3 arquivos:

### 1. Número do WhatsApp

Busca e substitui `5500000000000` pelo seu número real (formato
internacional, só dígitos — ex: `5571999998888` para um celular da Bahia).

Aparece em:

- `components/header.tsx` — constante `WHATSAPP_URL`
- `components/hero.tsx` — constante `WHATSAPP_URL`
- `components/cta.tsx` — constante `WHATSAPP_URL`
- `components/footer.tsx` — link do WhatsApp

Dica: no VS Code, `Ctrl+Shift+H` e busca `5500000000000`.

### 2. E-mail de contato

Busca e substitui `contato@wisetechprojects.com` pelo e-mail real em:

- `components/cta.tsx`
- `components/footer.tsx`
- `app/layout.tsx` (opcional, pro SEO)

### 3. Links de Instagram e LinkedIn

Em `components/footer.tsx`, nos ícones de rede social, o `href="#"` precisa
virar suas URLs reais (ou apagar o ícone se não tiver a rede ainda).

---

## 🚀 Deploy — caminho mais curto (Vercel + GitHub)

O projeto já está pronto pra deploy direto na Vercel. Você vai precisar de:

- Conta no **GitHub** (gratuita)
- Conta na **Vercel** (gratuita, login com GitHub)
- `git` instalado no seu computador

### Passo 1 — Subir pro GitHub

Abre o terminal **dentro da pasta do projeto** e roda:

```bash
git init
git add .
git commit -m "Initial commit - Wise Tech Projects site"
```

Agora vai em [github.com/new](https://github.com/new), cria um repositório
chamado `wise-tech-projects` (privado ou público, tanto faz), **não marca**
nenhuma opção de README/gitignore (já tem). Depois de criar, o GitHub te
mostra os comandos. Usa os da seção "push an existing repository":

```bash
git remote add origin https://github.com/SEU_USUARIO/wise-tech-projects.git
git branch -M main
git push -u origin main
```

### Passo 2 — Conectar na Vercel

1. Entra em [vercel.com/new](https://vercel.com/new)
2. Clica em **"Import Git Repository"** e seleciona o `wise-tech-projects`
3. Na tela de configuração, a Vercel detecta automaticamente que é Next.js
4. Clica em **Deploy**

Em uns 40 segundos seu site está no ar numa URL tipo
`wise-tech-projects.vercel.app`.

### Passo 3 — Domínio próprio (opcional)

Depois do primeiro deploy, vai em **Settings → Domains** no projeto da
Vercel e adiciona seu domínio (ex: `wisetechprojects.com`). A Vercel te dá
as instruções de DNS — cola esses registros no painel do seu registrar
(Registro.br, GoDaddy, Hostinger etc.) e em poucos minutos propaga.

---

## 🛠️ Rodar localmente (desenvolvimento)

```bash
# 1. Instalar dependências (usa npm, pnpm ou yarn — tanto faz)
npm install

# 2. Subir servidor de dev em http://localhost:3000
npm run dev

# 3. Build de produção (opcional, pra testar antes do deploy)
npm run build
npm start
```

Nota: o `package.json` lista `pnpm` como lockfile, mas o `npm install`
funciona igual — a Vercel detecta o `pnpm-lock.yaml` e usa pnpm no build
dela automaticamente.

---

## 🎨 Identidade visual

Paleta da marca (em `app/globals.css`):

| Token            | Hex       | Uso                                |
| ---------------- | --------- | ---------------------------------- |
| `brand-deep`     | `#084D6E` | Azul petróleo escuro (primário)    |
| `brand-royal`    | `#1C6E9E` | Azul royal (do logo, acentos)      |
| `brand-ash`      | `#8E9DAB` | Cinza cinéreo (texto secundário)   |
| `brand-silver`   | `#C0C0C0` | Prata (detalhes)                   |
| `brand-glow`     | `#3A8BC4` | Glow/highlights/hovers             |
| `brand-ink`      | `#05314A` | Ink mais escuro (backgrounds)      |

Tipografia:

- **Display**: Space Grotesk (títulos, marca, números grandes)
- **Body**: Inter (textos corridos, botões)
- **Mono**: JetBrains Mono (tags, labels em caixa alta, números técnicos)

Tema: **dark mode por padrão** (`<html className="dark">` em `layout.tsx`).
O light mode está implementado mas não é o default — se quiser um toggle,
dá pra adicionar depois com `next-themes` (já está no `package.json`).

---

## 📁 Estrutura

```
app/
  layout.tsx        # Metadata, fonts, <html lang="pt-BR">
  page.tsx          # Composição das seções
  globals.css       # Tokens da marca, animações, utilitários

components/
  header.tsx        # Nav fixo com scroll-aware backdrop
  hero.tsx          # Headline + CTA + stats honestos
  stack.tsx         # Marquee de ferramentas (n8n, Make, Shopify...)
  services.tsx      # 3 serviços: landing, automação, loja virtual
  process.tsx       # Timeline: conversa → proposta → execução → entrega
  about.tsx         # Manifesto + valores
  cta.tsx           # Bloco de conversão final
  footer.tsx        # Wordmark gigante + links + contato
  ui/               # shadcn/ui (pré-instalado, usado só em botões)

public/
  logo.png          # Sua logo oficial (coroa azul)
  icon.svg          # Favicon com cores da marca
```

---

## 🐛 Troubleshooting

**"Erro no build da Vercel sobre TypeScript"** — o `next.config.mjs` já está
com `ignoreBuildErrors: true`. Se algum erro escapar, me avisa.

**"Logo aparece pequena / pixelada"** — a logo está em `public/logo.png`
como PNG. Se quiser nitidez perfeita em qualquer tamanho, exporta ela como
SVG e substitui; o código já usa `next/image` e funciona com ambos.

**"Quero adicionar Google Analytics / Meta Pixel"** — adiciona o script no
`<body>` do `app/layout.tsx`, ou usa `@vercel/analytics` que já está
instalado (só descomenta em produção — já está configurado).

---

## 📝 Licença

Código proprietário — Wise Tech Projects © 2025.
