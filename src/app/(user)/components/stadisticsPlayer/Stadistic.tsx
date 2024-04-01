const Stadistic = () => {
  return (
    <div className={`bg-baltic-sea-900 px-2 py-5 rounded-[5px]`}>
      <section>
        <h2 className={`text-center text-xl font-squada text-primary-500`}>
          ESTADISTICAS
        </h2>
      </section>
      <div className={`bg-[#BCBBCE] text-[#363545] rounded-[5px] p-0 h-40 font-squada  overflow-y-scroll `}>
        <table className="border-collapse  w-full table-auto text-center">
          <tr>
            <th className="border border-black">#</th>
            <th className="border border-black">nombre</th>
            <th className="border border-black">posicion</th>
            <th className="border border-black">goles</th>
            <th className="border border-black">asis.</th>
            <th className="border border-black">tarj.</th>
          </tr>

          <tr>
            <td className="border border-black">10</td>
            <td className="border border-black">Pablo Alvarez</td>
            <td className="border border-black"> delantero</td>
            <td className="border border-black"> 5</td>
            <td className="border border-black"> 2</td>
            <td className="border border-black"> 1</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Stadistic;
