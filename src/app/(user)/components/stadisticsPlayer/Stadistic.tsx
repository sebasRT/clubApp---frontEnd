const Stadistic = () => {
  return (
    <div className={`bg-baltic-sea-900 px-2 py-5 rounded-[5px]`}>
      <section>
        <h2 className={`text-center text-xl font-squada text-primary-500`}>ESTADISTICAS</h2>
      </section>
      <div className={`bg-[#BCBBCE] text-[#363545] rounded-[5px] p-0 h-40 font-squada  overflow-y-scroll grid grid-cols-2 justify-items-center`}>
        <section className=" min-[425px]:w-[5rem] flex min-[425px]:gap-x-[2.6rem] items-center">
          <p>Partidos</p>
          <button className="text-2xl">3</button>
        </section>
        <section className=" min-[425px]:w-[12rem] flex gap-x-2 min-[425px]:gap-x-10 items-center">
          <p>Tarjetas amarillas</p>
          <button className="text-2xl">0</button>
        </section>
        <section className=" min-[425px]:w-[5rem] flex min-[425px]:gap-x-[3.6rem] items-center">
          <p>Goles</p>
          <button className="text-2xl">2</button>
        </section>
        <section className=" min-[425px]:w-[12rem] flex min-[425px]:gap-x-[3.6rem] items-center">
          <p>Tarjetas azules</p>
          <button className="text-2xl">0</button>
        </section>
        <section className=" min-[425px]:w-[5rem] flex min-[425px]:gap-x-[1.8rem] items-center">
          <p>Asistencia</p>
          <button className="text-2xl">1</button>
        </section>
        <section className=" min-[425px]:w-[12rem] flex min-[425px]:gap-x-[4.2rem] items-center">
          <p>Tarjetas rojas</p>
          <button className="text-2xl">0</button>
        </section>
      </div>
    </div>
  )
}
export default Stadistic