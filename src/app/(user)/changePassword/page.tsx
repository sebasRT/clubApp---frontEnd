import React from 'react'
import PasswordInputs from './PasswordInputs'
import Image from 'next/image'
import footballUserBanner from "@/public/footballUserBanner.webp";

const changePasswordPage = () => {

  return (
    <main className='min-h-screen  flex flex-col items-center relative text-[#3A3949] text-center  mt-24 md:mt-0'>
      <figure className="w-full hidden md:block">
        <Image src={footballUserBanner} className="object-cover w-full" alt={"Football banner"} />
      </figure>
      <h1 className='text-2xl font-semibold my-4'>Es momento de configurar tu contraseña</h1>

      <div className='bg-[#3A3949] w-[337px] h-[242px] flex flex-col items-center justify-around rounded-sm text-baltic-sea-50'>
        <PasswordInputs />
      </div>
    </main>
  )
}

export default changePasswordPage