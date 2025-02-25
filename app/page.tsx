"use client"

import Image from 'next/image';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gauge, Zap, Battery, Timer, ChevronRight } from 'lucide-react';

export default function Home() {
  const calculateTimeLeft = (): { days: number; hours: number; minutes: number; seconds: number } => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);
    targetDate.setHours(23, 45, 19);
  
    const difference = targetDate.getTime() - new Date().getTime();
  
    if (difference > 0) {
      return {
        days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((difference / (1000 * 60)) % 60)),
        seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
      };
    }
  
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };
  

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#001524] text-white">
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
              TechMouse <span className="block text-[#00E1FF]">PRO X9000</span>
            </h1>
            <p className="text-lg text-gray-400">O mouse gamer definitivo para sua vitória</p>
            <div className="space-y-4 pt-4">
              <div className="text-3xl font-bold text-[#00E1FF]">R$ 399,90</div>
              <p className="text-sm text-gray-400">ou 12x de R$ 33,32 sem juros</p>
              <Button className="w-full bg-[#00E1FF] text-black hover:bg-[#00B2CC]">COMPRAR AGORA</Button>
            </div>
          </div>
          <div className="relative">
            <Image src="https://img.freepik.com/fotos-gratis/a-roda-de-carro-cromada-brilhante-reflete-a-moderna-tecnologia-de-transporte-de-fundo-azul-gerada-pela-inteligencia-artificial_24877-80927.jpg?t=st=1740451251~exp=1740454851~hmac=46e4e800097b4c581ae4c5bc3d856efb5d702a1b2c992e4d949da70e7c794d38&w=740" alt="TechMouse PRO X9000" width={600} height={400} className="rounded-lg object-cover w-full" />
          </div>
        </div>

        {/* Additional Mouse Options */}
        <section className="mb-20 text-center">
          <h2 className="mb-12 text-3xl font-bold">OUTRAS OPÇÕES DE MOUSE</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[{
              name: "TechMouse ELITE X700",
              price: "R$ 299,90",
              image: "https://img.freepik.com/fotos-gratis/trabalhando-em-equipamentos-de-teclado-e-mouse-de-computador-gerados-por-ia_188544-27976.jpg?t=st=1740451357~exp=1740454957~hmac=e110b59d510269e5efbe8526bf3d463138063aa148e3854249775b4fed872460&w=740"
            }, {
              name: "TechMouse ULTRA X500",
              price: "R$ 249,90",
              image: "https://img.freepik.com/fotos-premium/jogador-de-rato-isolado-na-mesa-preta_264404-701.jpg?w=740"
            }].map((mouse, index) => (
              <Card key={index} className="bg-[#002538] p-6 text-white">
                <Image src={mouse.image} alt={mouse.name} width={300} height={200} className="rounded-lg object-cover w-full" />
                <h3 className="mt-4 text-xl font-bold">{mouse.name}</h3>
                <p className="text-lg text-[#00E1FF]">{mouse.price}</p>
                <Button className="mt-4 bg-[#00E1FF] text-black hover:bg-[#00B2CC]">COMPRAR</Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Limited Offer Section */}
        <section className="text-center">
          <h2 className="mb-12 text-3xl font-bold">OFERTA POR TEMPO LIMITADO</h2>
          <div className="flex justify-center gap-8">
            {Object.entries(timeLeft).map(([key, value], index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#00E1FF]">{value}</div>
                <div className="text-sm text-gray-400">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-2">
            <p className="text-2xl font-bold">De <span className="line-through text-gray-400">R$ 599,90</span> por</p>
            <p className="text-4xl font-bold text-[#00E1FF]">R$ 399,90</p>
            <p className="text-sm text-gray-400">ou 12x de R$ 33,32 sem juros</p>
          </div>
          <Button className="mt-8 bg-[#00E1FF] text-black hover:bg-[#00B2CC]">APROVEITAR OFERTA</Button>
        </section>
      </main>
    </div>
  );
}
