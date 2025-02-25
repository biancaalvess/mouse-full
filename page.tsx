import Image from "next/image"
import Link from "next/link"
import { Menu, ShoppingCart, User, ChevronRight, Star, Mouse, Target, Zap, Sliders } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ProductCarousel from "./components/product-carousel"
import CountdownTimer from "./components/countdown-timer"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-2xl font-bold">
              ProMouse
            </Link>
            <nav className="hidden md:block">
              <ul className="flex gap-6">
                <li>
                  <Link href="/" className="hover:text-cyan-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/produtos" className="hover:text-cyan-400">
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link href="/promocoes" className="hover:text-cyan-400">
                    Promoções
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:text-cyan-400">
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="space-y-6 text-center lg:text-left">
              <Badge className="inline-block bg-cyan-500/10 text-cyan-400">Novo Lançamento</Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Precisão e Performance em Suas Mãos
              </h1>
              <p className="text-lg text-zinc-400">
                Descubra nossa linha de mouses profissionais projetados para gamers que exigem o máximo.
              </p>
              <Button size="lg" className="bg-cyan-500 text-white hover:bg-cyan-600">
                Comprar Agora
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-8">
                <Image
                  src="/placeholder.svg"
                  alt="Mouse Gamer Pro"
                  width={600}
                  height={600}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="border-y border-zinc-800 bg-zinc-900/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 text-center">
            <Badge variant="destructive">Oferta Especial</Badge>
            <h2 className="text-2xl font-bold">Promoção Relâmpago</h2>
            <CountdownTimer />
            <p className="text-zinc-400">Aproveite 20% OFF em toda linha premium</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Produtos em Destaque</h2>
          <ProductCarousel />
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-zinc-800 bg-zinc-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-zinc-800 bg-black/50 p-6">
              <Mouse className="mb-4 h-8 w-8 text-cyan-400" />
              <h3 className="mb-2 font-bold">Ergonomia</h3>
              <p className="text-sm text-zinc-400">Design anatômico para máximo conforto em longas sessões</p>
            </Card>
            <Card className="border-zinc-800 bg-black/50 p-6">
              <Target className="mb-4 h-8 w-8 text-cyan-400" />
              <h3 className="mb-2 font-bold">Precisão</h3>
              <p className="text-sm text-zinc-400">Sensor óptico de alta precisão para movimentos perfeitos</p>
            </Card>
            <Card className="border-zinc-800 bg-black/50 p-6">
              <Zap className="mb-4 h-8 w-8 text-cyan-400" />
              <h3 className="mb-2 font-bold">Durabilidade</h3>
              <p className="text-sm text-zinc-400">Construção robusta com switches testados para milhões de cliques</p>
            </Card>
            <Card className="border-zinc-800 bg-black/50 p-6">
              <Sliders className="mb-4 h-8 w-8 text-cyan-400" />
              <h3 className="mb-2 font-bold">Personalização</h3>
              <p className="text-sm text-zinc-400">Configure DPI, iluminação e macros ao seu estilo</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">O que dizem nossos clientes</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-zinc-800 bg-black/50 p-6">
                <div className="mb-4 flex text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mb-4 text-zinc-400">
                  "Melhor mouse que já usei! A precisão é incrível e o conforto durante longas sessões de jogo é
                  excepcional."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-zinc-800">
                    <Image
                      src="/placeholder.svg"
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">João Silva</p>
                    <p className="text-sm text-zinc-400">Gamer Profissional</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">Sobre</h3>
              <p className="text-sm text-zinc-400">
                Especialistas em periféricos gamers de alta performance para jogadores exigentes.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Links Úteis</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <Link href="/sobre" className="hover:text-cyan-400">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/suporte" className="hover:text-cyan-400">
                    Suporte
                  </Link>
                </li>
                <li>
                  <Link href="/politica" className="hover:text-cyan-400">
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Contato</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>Email: contato@promouse.com</li>
                <li>Tel: (11) 99999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Newsletter</h3>
              <p className="mb-4 text-sm text-zinc-400">Receba novidades e ofertas exclusivas.</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm"
                />
                <Button>Enviar</Button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

