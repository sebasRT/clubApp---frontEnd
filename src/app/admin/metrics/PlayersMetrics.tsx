'use client'
import { DonutChart, Legend } from "@tremor/react"
import { ReactNode } from "react";

const PlayersMetrics = ({  players, pdf }: {
  players: {
    name: string;
    value: number;
  }[],
  pdf: ReactNode
}) => {

  return (
    <>
          <div className='bg-white/70 w-fit rounded-md border-2 p-1 mx-auto'>
          {pdf}
            <div className="flex">
            <DonutChart
              className='h-48 w-full'
              data={players}
              variant="pie"
              colors={["red", "green"]}
              />
            <Legend className="text-white" categories={["Jugadores al dia", "Jugadores en deuda"]} colors={["green", "red"]} />
              </div>
          </ div>
    </>
  )
}

export default PlayersMetrics