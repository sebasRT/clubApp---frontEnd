type Player = {
  userName: string,
  userLastname: string,
  userDni: string,
  playerFeePaid: boolean
}

const InDebtPlayers = ({players}:{players: Player[] }) => {

  return (
    <section className='flex flex-col border-2 bg-red-100/30'>
      <h2 className="text-2xl">Jugadores en deuda</h2>
      <div className="bg-red-500/50 size-full">
        <table className='w-full overflow-scroll border-collapse table-fixed text-lg'>
          <thead className='bg-red-800/50 text-red-50 tracking-wider font-thin'>
            <tr>
              <th>Nombre</th>
              <th>DNI</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index} className="odd:bg-black/10 even:bg-white/10">
                <td className="pl-3">{player.userName} {player.userLastname}</td>
                <td className="text-center">{player.userDni}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <span className="text-xl">Total de jugadores: <b>{players.length}</b></span>
    </section>
  );
}

export default InDebtPlayers;
