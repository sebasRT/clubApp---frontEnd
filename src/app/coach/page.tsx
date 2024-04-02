import React from 'react'
import PlayersByCategory from './components/PlayersByCategory'
import Schedules from './components/Schedules'
import MatchesControl from './components/MatchesControl'
import { cookies } from 'next/headers'
import { unstable_noStore } from 'next/cache'

const page = ({params}: {params: {id: string}}) => {
  unstable_noStore()
  const category = cookies().get('category')?.value

  return (
    <div className='size-full grid grid-rows-[auto_1fr]  md:grid-cols-3 text-baltic-sea-950'>
      <h1 className='text-center text-4xl font-bauhs my-2 md:col-span-2'>{category}</h1>
        <MatchesControl/>
        <PlayersByCategory />
        <Schedules/>
    </div>
  )
}

export default page