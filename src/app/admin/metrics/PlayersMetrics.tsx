'use client'
import { DonutChart, Legend } from "@tremor/react"

const PlayersMetrics = () => {
    const players = [
        { name: 'En deuda', value: 3 },
        { name: 'Al dia', value: 8 }
      ]
    
  return (
    <article className='flex flex-col items-center gap-4 justify-center'>
    <section className='flex gap-5'>
      <div className='bg-white/80 rounded-md border-2 text-center px-5'>
        <p className='text-lg font-semibold'>Jugadores</p>
        <p className='text-3xl font-bold'>13</p>
        <p className='text-xs text-silver-300 font-light '>Cantidad total</p>
      </div>
      <div className='bg-white/80 rounded-md border-2 text-center px-5'>
        <p className='text-lg font-semibold'>Entrenadores</p>
        <p className='text-3xl font-bold'>13</p>
        <p className='text-xs text-silver-300 font-light '>Cantidad total</p>
      </div>
    </section>
    <div className='bg-white/80 rounded-md border-2 p-1'>
      
      <DonutChart
        data={players}
        variant="pie"
        colors={["red", "green"]}
      />
      <Legend categories={["Jugadores al Dia", "Jugadores en deuda"]} colors={["green", "red"]} />
    </ div>
  </article>
)
}

export default PlayersMetrics