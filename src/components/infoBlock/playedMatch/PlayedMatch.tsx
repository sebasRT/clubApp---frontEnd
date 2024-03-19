const PlayedMatch = () => {
  return (
    <div>
      <section className={`bg-silver-100 lg:px-16 py-1 rounded-[5px] m-2 text-center`}>
        <p className={`text-gray-600`}>Fecha 3 Domingo 18 Feb. 19.45</p>
        <p className={`text-black`}>Boquita <span className={`text-xl font-bold`}>2</span> | <span className={`text-xl font-bold`}></span> Laguna</p>
      </section>
      <section className={`bg-silver-100 lg:px-16 py-1 rounded-[5px] m-2 text-center`}>
        <p className={`text-gray-600`}>Fecha 2 Viernes 16 Feb. 13.00</p>
        <p className={`text-black`}>Aguilas <span className={`text-xl font-bold`}>2</span> | <span className={`text-xl font-bold`}>3</span> Gallinas</p>
      </section>
      <section className={`bg-silver-100 lg:px-16 py-1 rounded-[5px] m-2 text-center`}>
        <p className={`text-gray-600`}>Fecha 1 Martes 13 Feb. 17.00</p>
        <p className={`text-black`}>Toros <span className={`text-xl font-bold`}>0</span> | <span className={`text-xl font-bold`}>1</span> Borrachos</p>
      </section>
    </div>
    
  )
}
export default PlayedMatch