import React from 'react'
import PasswordInputs from './PasswordInputs'

const changePasswordPage = () => {

  return (
    <main className='py-24 h-screen flex flex-col items-center text-center justify-around'>
      <h1 className='text-2xl font-semibold my-4'>Es momento de configurar la contraseña con la que deseas ingresar</h1>

      <div className='bg-baltic-sea-600/50 h-full flex flex-col items-center justify-around rounded-sm text-baltic-sea-50'>
        <PasswordInputs />
      </div>
    </main>
  )
}

export default changePasswordPage