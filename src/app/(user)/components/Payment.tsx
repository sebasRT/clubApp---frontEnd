
'use client'
import { MercadoPagoConfig, Preference } from 'mercadopago';
import Image from 'next/image';
import { redirect } from "next/navigation";
import saveMoney from '@/public/saveMoney.svg'
import { pay } from '../payment/pay';
import { useState } from 'react';

export default function Payment() {
  const [isPay, setIsPay] = useState(false)

  return (
    <form action={isPay ? "" : pay}>
    <button className="flex flex-col  items-center " type={isPay ? 'button' : 'submit'}>
      <Image src={saveMoney} alt="save" width={25} />
      <span className="text-[#FFFF] font-squada">Cuota</span>
    </button>
    </form>
  )
}
