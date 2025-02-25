"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "ProMouse X1",
    price: "R$ 399,90",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "ProMouse X2",
    price: "R$ 499,90",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "ProMouse Elite",
    price: "R$ 699,90",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "ProMouse Ultra",
    price: "R$ 899,90",
    image: "/placeholder.svg",
  },
]

export default function ProductCarousel() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  })

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex-[0_0_280px] min-w-0 sm:flex-[0_0_320px]">
            <Card className="h-full border-zinc-800 bg-black/50">
              <div className="aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-zinc-800 to-zinc-900 p-6">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 font-bold">{product.name}</h3>
                <p className="mb-4 text-lg font-bold text-cyan-400">{product.price}</p>
                <Button className="w-full gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Adicionar ao Carrinho
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

