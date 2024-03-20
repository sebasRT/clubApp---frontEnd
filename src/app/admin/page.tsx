'use client'
import { apiBaseURL } from '@/lib/utils';
import { BarList, DonutChart, Legend } from '@tremor/react';


type PlayersMetrics ={
  totalCount: number,
  upToDateCount: number,
  inDebtCount: number,
  playersByCategory: { [key: string]: number }[]
}

// Realizamos la solicitud fetch para obtener el JSON desde una URL
// const getMetrics = async() => {
// try {
//   const metricsRequest = await fetch(`${apiBaseURL}/players/metrics`, {method: 'GET'})
//   if(!metricsRequest.ok) return;

//   const metrics = await metricsRequest.json() as PlayersMetrics
//   return metrics

// } catch (error:any) {
//   throw new Error(error.message)
// }
// }

const page =async () => {

// const metrics = await getMetrics() || {
//   totalCount: 0,
//   upToDateCount: 0,
//   inDebtCount: 0,
//   playersByCategory: [{ "none": 0 }]
// }
const categories = [
  { name: '2011', value: 1 },
  { name: '2012', value: 3 },
  { name: '2013', value: 2 },
  { name: '2014', value: 2 },
  { name: '2015', value: 1 },
  { name: '2016', value: 3 },
  { name: '2017', value: 1 },
  { name: '2018', value: 1 },
]

const players = [
  { name: 'En deuda', value: 3 },
  { name: 'Al dia', value: 8 }
]

// const categories: { name: string, value: number }[] = [];
//     metrics.playersByCategory.forEach(obj => {
//       const year = Object.keys(obj)[0];
//       const count = obj[year];
//       categories.push({ name: year, value: count });
//     });

//     // Ordenamos las categorías por nombre de año
//     categories.sort((a, b) => parseInt(a.name) - parseInt(b.name));


  return (

    <>
      <div className="grid md:grid-cols-2 gap-5 place-items-center my-3">
        <article className='flex flex-col items-center gap-4 justify-center'>
          <section className='flex gap-5'>
            <div className='bg-white/80 rounded-md border-2 text-center px-5'>
              <p className='text-lg font-semibold'>Jugadores</p>
              <p className='text-3xl font-bold'>14</p>
              <p className='text-xs text-silver-300 font-light '>Cantidad total</p>
            </div>
            <div className='bg-white/80 rounded-md border-2 text-center px-5'>
              <p className='text-lg font-semibold'>Entrenadores</p>
              <p className='text-3xl font-bold'>5</p>
              <p className='text-xs text-silver-300 font-light '>Cantidad total</p>
            </div>
          </section>
          <div className='bg-white/80 rounded-md border-2 p-1'>
            <DonutChart
              className='h-48 w-full'
              data={players}
              variant="pie"
              colors={["red", "green"]}
            />
            <Legend categories={["Jugadores al Dia", "Jugadores en deuda"]} colors={["green", "red"]} />
          </ div>
        </article>
        <section className='bg-white/80 rounded-md border-2 p-4'>
          <p>Cantidad de jugadores por categoría</p>
          <BarList data={categories} className='max-w-xs' />
        </section>
        <section>
          <div></div>
        </section>
      </div>

    </>
  )
};
export default page