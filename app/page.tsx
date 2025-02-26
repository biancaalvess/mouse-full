"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gauge, Zap, Battery, Timer, ChevronRight, Cpu, Star, Award, Shield, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Footer } from "@/components/footer"

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const calculateTimeLeft = useCallback(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 5)
    targetDate.setHours(23, 45, 19)

    const difference = targetDate.getTime() - new Date().getTime()

    if (difference > 0) {
      return {
        days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
        seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
      }
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }, [])

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [calculateTimeLeft])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "26000 DPI",
      desc: "Sensor Óptico Avançado",
      color: "from-blue-500 to-cyan-300",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "1ms",
      desc: "Tempo de Resposta Ultra Rápido",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "70h",
      desc: "Bateria de Longa Duração",
      color: "from-green-500 to-emerald-300",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "8 Botões",
      desc: "Totalmente Programáveis",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const testimonials = [
    { name: "Pro Player", rating: 5, text: "Melhor mouse que já usei!" },
    { name: "Gamer Expert", rating: 5, text: "Precisão incomparável" },
    { name: "Tech Review", rating: 5, text: "Revolucionário" },
  ]

  return (
    <div className="min-h-screen bg-[#001524] text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001524] via-[#002538] to-[#003552] opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjkyOTI5IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Badge className="bg-[#00E1FF]/20 text-[#00E1FF] hover:bg-[#00E1FF]/30 px-4 py-2 text-sm">
                  <Sparkles className="w-4 h-4 mr-2 inline-block" />
                  NOVO LANÇAMENTO
                </Badge>
              </motion.div>
              <h1 className="text-5xl font-bold leading-tight tracking-tighter md:text-7xl lg:text-8xl">
                TechMouse{" "}
                <span className="bg-gradient-to-r from-[#00E1FF] to-[#0077FF] bg-clip-text text-transparent">
                  PRO X9000
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-xl">
                Domine seus jogos com precisão absoluta e tecnologia de ponta
              </p>
            </div>

            {/* Features Showcase */}
            <div className="grid gap-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`p-6 rounded-xl bg-gradient-to-r ${features[activeFeature].color} bg-opacity-10 backdrop-blur-sm`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">{features[activeFeature].icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{features[activeFeature].title}</h3>
                      <p className="text-gray-300">{features[activeFeature].desc}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeFeature ? "bg-[#00E1FF]" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Price and CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="space-y-4 rounded-xl bg-white/5 p-8 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-4xl font-bold text-[#00E1FF]">R$ 399,90</div>
                  <p className="text-sm text-gray-400">ou 12x de R$ 33,32 sem juros</p>
                </div>
                <div className="ml-auto">
                  <Badge className="bg-green-500/20 text-green-400">-33% OFF</Badge>
                </div>
              </div>
              <Button
                className="w-full bg-[#00E1FF] text-black hover:bg-[#00B2CC] transition-all duration-300 transform hover:scale-105 h-16 text-lg font-bold"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered ? "🎮 GARANTIR O MEU" : "COMPRAR AGORA"}
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <div className="flex gap-6 justify-center pt-4">
              {[
                { icon: Shield, text: "Garantia de 2 Anos" },
                { icon: Award, text: "Melhor da Categoria" },
                { icon: Star, text: "5/5 Avaliações" },
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <badge.icon className="w-6 h-6 mb-2 text-[#00E1FF]" />
                  <span className="text-sm text-gray-400">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-1"
          >
            <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden rounded-2xl group">
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{
                  scale: [1.1, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  scale: { duration: 0.7, ease: "easeOut" },
                  y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                className="relative w-full h-full"
              >
                <Image
                  src="https://img.freepik.com/fotos-premium/um-mouse-de-computador-com-uma-luz-azul-acesa_900958-6000.jpg?w=740"
                  alt="TechMouse PRO X9000"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  quality={100}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001524] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#001524]/50 via-transparent to-transparent" />

                {/* Glowing Effects */}
                <div className="absolute inset-0 bg-[#00E1FF]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#00E1FF]/5 to-[#00E1FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Floating Specs */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="absolute top-6 right-6 bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
                >
                  <div className="text-base space-y-4 text-white">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#00E1FF] animate-pulse" />
                      <span className="font-medium">Sensor Óptico Pro</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#00E1FF] animate-pulse" />
                      <span className="font-medium">RGB Personalizado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#00E1FF] animate-pulse" />
                      <span className="font-medium">Wireless 2.4GHz</span>
                    </div>
                  </div>
                </motion.div>

                {/* Feature Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                  className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#00E1FF]">26K</div>
                      <div className="text-sm text-gray-300">DPI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#00E1FF]">1ms</div>
                      <div className="text-sm text-gray-300">Latência</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#00E1FF]">70h</div>
                      <div className="text-sm text-gray-300">Bateria</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <div className="flex gap-1 mb-3">
                {Array(testimonial.rating)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00E1FF] text-[#00E1FF]" />
                  ))}
              </div>
              <p className="text-gray-300 mb-2">"{testimonial.text}"</p>
              <p className="text-sm text-[#00E1FF]">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Limited Offer Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-br from-[#002538] to-[#001524] p-12 text-center border border-white/10"
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Badge className="mb-4 bg-red-500/20 text-red-400 px-4 py-2 text-base">
              <Timer className="w-4 h-4 mr-2 inline-block" /> OFERTA LIMITADA
            </Badge>
          </motion.div>

          <h2 className="mb-8 text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            TEMPO RESTANTE
          </h2>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12">
            {Object.entries(timeLeft).map(([key, value], index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[120px] rounded-lg bg-white/5 p-6 backdrop-blur-sm border border-white/10"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-[#00E1FF] to-[#0077FF] bg-clip-text text-transparent">
                  {value}
                </div>
                <div className="text-sm text-gray-400 mt-2">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-md mx-auto bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <p className="text-2xl font-bold mb-4">
              De <span className="line-through text-gray-400">R$ 599,90</span>
            </p>
            <p className="text-5xl font-bold text-[#00E1FF] mb-2">R$ 399,90</p>
            <p className="text-sm text-gray-400 mb-6">ou 12x de R$ 33,32 sem juros</p>
            <Button className="w-full bg-[#00E1FF] text-black hover:bg-[#00B2CC] transition-all duration-300 transform hover:scale-105 h-14 text-lg font-bold">
              APROVEITAR OFERTA <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}

