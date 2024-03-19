import React from 'react'
import UpToDatePlayers from './UpToDatePlayers'
import InDebtPlayers from './InDebtPlayers'

const PaymentPage = () => {

  return (
    <div className='grid size-full grid-cols-2 gap-6 p-6 *:p-2'>
      <UpToDatePlayers/>
      <InDebtPlayers/>
    </div>
  )
}

export default PaymentPage