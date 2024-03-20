
const playersList = [
  {
    userName: "John",
    userLastname: "Doe",
    userDni: "123456789",
    userEmail: "player1@example.com",
    userAddress: "123 Main St",
    userPassword: "password1",
    playerFeePaid: true,
    playerPasswordChanged: false
  },
  {
    userName: "Alice",
    userLastname: "Smith",
    userDni: "987654321",
    userEmail: "player2@example.com",
    userAddress: "456 Elm St",
    userPassword: "password2",
    playerFeePaid: true,
    playerPasswordChanged: true
  },
  {
    userName: "Pablo",
    userLastname: "Alvarez",
    userDni: "45576972",
    userEmail: "pipualvarez1@gmail.com",
    userAddress: "lebensonh 4865",
    userPassword: "password3",
    playerFeePaid: true,
    playerPasswordChanged: true
  }
];

const UpToDatePlayers = () => {

  return (
    <section className='flex flex-col border-2 bg-green-100/30'>
      <h2 className="text-2xl">Jugadores al día</h2>
      <div className="bg-green-500/50 size-full">
      <table className='w-full overflow-scroll border-collapse table-fixed text-lg'>
        <thead className=' bg-green-800/50 text-green-50 tracking-wider font-thin'>
          <tr>
            <th>Nombre</th>
            <th>DNI</th>
          </tr>
        </thead>
        <tbody >
          {playersList.map((player, index) => (
            <tr key={index} className="odd:bg-black/10  even:bg-white/10">
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

export default UpToDatePlayers;
