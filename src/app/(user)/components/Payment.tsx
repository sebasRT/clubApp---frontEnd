
'use client'
import Image from 'next/image';
import saveMoney from '@/public/saveMoney.svg'
import { pay } from '../payment/pay';
import { useState } from 'react';
import { getPlayerInfo, updatePlayerInfo } from '@/lib/user.actions';

export default function Payment() {
  const [isPay, setIsPay] = useState(false)

  // const updatePlayer = async () => {
  //   const data = await getPlayerInfo()
  //   const edit = await updatePlayerInfo(data);
  
  //   console.log("haoahoahoaoahoaoaahoahoahoah");
    
  //   if (!edit) {        
  //     console.log(edit);return };
  // };
  
  return (
    <form action={ pay}>
    <button className="flex flex-col  items-center " type={'submit'}>
      <Image src={saveMoney} alt="save" width={25} />
      <span className="text-[#FFFF] font-squada">Cuota</span>
    </button>
    </form>
  )
}