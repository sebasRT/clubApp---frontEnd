const CardContainer = ({title, info, bg}: any) => {
  return (
    <div className={`bg-baltic-sea-900 px-2 py-5 rounded-[5px]`}>
      <section>
        <h2 className={`text-center text-xl font-squada text-primary-500`}>{title}</h2>
      </section>
      <section className={`${bg ? 'bg-primary-500' : 'bg-none'} p-1 rounded-[5px] h-40 overflow-y-scroll`}>
        {info}
      </section>
    </div>
  )
}
export default CardContainer