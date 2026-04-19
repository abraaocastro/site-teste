import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stack } from "@/components/stack"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { About } from "@/components/about"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Stack />
      <Services />
      <Process />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
