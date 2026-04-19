import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Wise Tech Projects — Landing pages, automações e lojas virtuais',
  description:
    'Estúdio recém-chegado ao mercado desenvolvendo ideias em landing pages, automações com n8n e Make, e lojas virtuais — por um preço justo.',
  keywords: [
    'landing page',
    'automação n8n',
    'automação Make',
    'loja virtual',
    'e-commerce',
    'desenvolvimento web',
    'Wise Tech Projects',
  ],
  metadataBase: new URL('https://wisetechprojects.com'),
  openGraph: {
    title: 'Wise Tech Projects',
    description:
      'Desenvolvemos suas ideias em landing pages, automações e lojas virtuais por um preço justo.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
