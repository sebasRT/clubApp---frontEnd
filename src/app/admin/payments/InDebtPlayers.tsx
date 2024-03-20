const playersList = [
  {
    userName: "Bob",
    userLastname: "Johnson",
    userDni: "456123789",
    userEmail: "player3@example.com",
    userAddress: "789 Oak St",
    userPassword: "password3",
    playerFeePaid: false,
    playerPasswordChanged: true
},
{
    userName: "Emily",
    userLastname: "Williams",
    userDni: "789456123",
    userEmail: "player4@example.com",
    userAddress: "101 Pine St",
    userPassword: "password4",
    playerFeePaid: false,
    playerPasswordChanged: false
},
{
    userName: "Michael",
    userLastname: "Brown",
    userDni: "321654987",
    userEmail: "player5@example.com",
    userAddress: "202 Maple St",
    userPassword: "password5",
    playerFeePaid: false,
    playerPasswordChanged: false
}
];

const InDebtPlayers = () => {

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
            {playersList.map((player, index) => (
              <tr key={index} className="odd:bg-black/10 even:bg-white/10">
                <td className="pl-3">{player.userName} {player.userLastname}</td>
                <td className="text-center">{player.userDni}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <span className="text-xl">Total de jugadores: <b>{playersList.length}</b></span>
    </section>
  );
}

export default InDebtPlayers;
