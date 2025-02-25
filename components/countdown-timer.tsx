"use client"

import { useEffect, useState } from "react"

export default function CountdownTimer() {
  const [time, setTime] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds - 1
        const newMinutes = newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours

        return {
          hours: newHours < 0 ? 23 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="rounded-lg bg-zinc-800 px-4 py-2 text-2xl font-bold text-cyan-400">{time.hours}</div>
        <span className="text-sm text-zinc-400">Horas</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-lg bg-zinc-800 px-4 py-2 text-2xl font-bold text-cyan-400">{time.minutes}</div>
        <span className="text-sm text-zinc-400">Minutos</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-lg bg-zinc-800 px-4 py-2 text-2xl font-bold text-cyan-400">{time.seconds}</div>
        <span className="text-sm text-zinc-400">Segundos</span>
      </div>
    </div>
  )
}

