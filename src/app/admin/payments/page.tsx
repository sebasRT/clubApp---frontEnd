import React from 'react'
import UpToDatePlayers from './UpToDatePlayers'
import InDebtPlayers from './InDebtPlayers'
import { apiBaseURL } from '@/lib/utils'
import { unstable_noStore } from 'next/cache'

type Player = {
  userName: string,
  userLastname: string,
  userDni: string,
  playerFeePaid: boolean
}

const getPlayers = async () => {
  const request = await fetch(`${apiBaseURL}/players/list`)
  const data = await request.json()
  return data as Player[]
}

const PaymentPage = async () => {
  unstable_noStore()
  const players = await getPlayers()

  const upToDatePlayers = players.filter(p => p.playerFeePaid === true )
  const inDebtPlayers = players.filter(p => p.playerFeePaid === false )

  return (
    <div className='grid size-full grid-cols-1 md:grid-cols-2 gap-6 p-6 *:p-2'>
      <UpToDatePlayers players={upToDatePlayers}/>
      <InDebtPlayers players={inDebtPlayers}/>
    </div>
  )
}

export default PaymentPage