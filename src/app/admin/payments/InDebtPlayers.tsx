const InDebtPlayers = () => {

  return (
    <section className='flex flex-col border-2 bg-red-100/30'>
    <h2>Jugadores en deuda</h2>
    <table className='bg-red-500/50 size-full overflow-scroll border-collapse table-fixed '>
      <thead className='*:border *:border-baltic-sea-700'>
        <th>Nombre</th>
        <th>DNI</th>
      </thead>

      <tbody>

      </tbody>
      <tfoot>
        <td >TOTAL DE JUGADORES </td>
        <td>100</td>
      </tfoot>
    </table>
  </section>
)

}

export default InDebtPlayers