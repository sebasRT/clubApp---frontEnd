'use client'
import { useState } from "react";

const ModalNextMatch = ({data, match}: any) => {
  const [closeModal, setCloseModal] = useState<boolean>(true);
  const toggleNavbar = () => {
    setCloseModal(true);
  };
  
  return (
    <div className={`fixed z-10 inset-0 max-w-screen max-h-[32rem] flex justify-center ${closeModal ? 'hidden' : ''} `} >
      <div className="fixed inset-0 w-screen h-screen bg-[#d9d9d9b4]"  />
        <div className="relative flex flex-col bg-silver-50 bg-opacity-90 rounded-[5px] text-center gap-7 z-10 my-auto py-4 mx-2 text-wrap w-[25rem] items-center">
          <button className=" absolute top-5 right-5 cursor-pointer " onClick={toggleNavbar}>x</button>
          <p className="text-3xl font-bauhs text-primary-500">Hola <span>{`${data.userName} ${data.userLastname}`}</span></p>
          <p className=" font-bauhs text-gray-500">Tu proximo partido es el siguiente</p>
          {match.slice(20, 21).map((info: any) => (
          <section key={info.gameId} className={`bg-silver-300 lg:px-16 py-1 rounded-[5px] m-2 text-center`}>
            <p className={`text-gray-600`}>Fecha 8 {info.gameDay}. {info.gameTime}pm <span className="text-black">{info.gameIslocal ? 'L' : 'V'}</span></p>
            <p className={`text-black`}>{info.gameTeamrival}</p>
          </section>
        ))}
        </div>
    </div>
  )
}


export default ModalNextMatch