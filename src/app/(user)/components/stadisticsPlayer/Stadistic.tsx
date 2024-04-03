import { getPlayerInfo } from "@/lib/user.actions";

export default async function Stadistics() {
  const data = await getPlayerInfo()
  return (
    <div className="bg-baltic-sea-900 px-2 py-5 rounded-5">
      <section>
        <h2 className="text-center text-xl font-squada text-primary-500">
          ESTADÍSTICAS
        </h2>
      </section>
      <div className="bg-gray-300 text-[#363545] rounded-5 p-0 h-40 font-squada overflow-y-scroll">
        <table className="border-collapse w-full table-auto text-center">
          <thead>
            <tr>
              <th className="border border-black">#</th>
              <th className="border border-black">Nombre</th>
              <th className="border border-black">Posición</th>
              <th className="border border-black">Goles</th>
              <th className="border border-black">Asist.</th>
              <th className="border border-black">Tarj.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black">10</td>
              <td className="border border-black">{`${data.userName} ${data.userLastname}`}</td>
              <td className="border border-black">Delantero</td>
              <td className="border border-black">0</td>
              <td className="border border-black">0</td>
              <td className="border border-black">0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

