import { apiBaseURL } from '@/lib/utils';
import PlayersMetrics from './metrics/PlayersMetrics';
import PlayersByCategoryMetrics from './metrics/PlayersByCategoryMetrics';
import { unstable_noStore } from 'next/cache';
import PdfPlayers from './metrics/PdfPlayers';

type PlayersMetricsType = {
  totalCount: number,
  upToDateCount: number,
  inDebtCount: number,
  playersByCategory: { [key: string]: number }[]
}

const getPlayersMetrics = async () => {
  try {
    const metricsRequest = await fetch(`${apiBaseURL}/players/metrics`, { method: 'GET' })
    if (!metricsRequest.ok) return;

    const metrics = await metricsRequest.json() as PlayersMetricsType
    return metrics

  } catch (error: any) {
    throw new Error(error.message)
  }
}

const getCoachMetrics = async () => {

  try {
    const metricsRequest = await fetch(`${apiBaseURL}/coaches/metrics`, { method: 'GET' })
    if (!metricsRequest.ok) return;

    const metrics = await metricsRequest.json() as Number
    return metrics

  } catch (error: any) {
    throw new Error(error.message)
  }
}

const page = async () => {
  unstable_noStore()
  const coachesMetrics = await getCoachMetrics() || 0

  const metrics = await getPlayersMetrics() || {
    totalCount: 0,
    upToDateCount: 0,
    inDebtCount: 0,
    playersByCategory: [{ "none": 0 }]
  }

  const players = [
    { name: 'En deuda', value: metrics.inDebtCount },
    { name: 'Al dia', value: metrics.upToDateCount }
  ]

  const categories: { name: string, value: number }[] = [];
  metrics.playersByCategory.forEach(obj => {
    const year = Object.keys(obj)[0];
    const count = obj[year];
    categories.push({ name: year, value: count });
  });

  categories.sort((a, b) => parseInt(a.name) - parseInt(b.name));


  return (
    <div className='grid place-items-center gap-5 md:grid-cols-2 md:m-10 md:mx-20 md:p-5 bg-baltic-sea-700'>
      <div className='flex flex-col gap-5'>
        <div className='flex justify-around text-center'>

          <div className='flex flex-col px-3 py-1 rounded bg-white/80 border-2 items-center'>
            <span className=''>Jugadores Activos</span>
            <span className='text-3xl font-semibold'>{`${metrics.totalCount}`}</span>
            <span className='text-xs text-gray-400'>Cantidad total</span>
          </div>
          <div className='flex flex-col px-3 py-1 rounded bg-white/80 border-2'>
            <span>Entrenadores Activos</span>
            <span className='text-3xl font-semibold'>{`${coachesMetrics}`}</span>
            <span className='text-xs text-gray-400'>Cantidad total</span>
          </div>
        </div>
        <PlayersMetrics players={players} pdf={<PdfPlayers/>} />
      </div>
      <PlayersByCategoryMetrics categories={categories} />
    </div>
  )
};
export default page