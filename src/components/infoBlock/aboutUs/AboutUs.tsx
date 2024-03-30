import AboutUsInfo from "./data"

const AboutUs = () => {
  return (
    <div>
      <section className={`bg-silver-100 lg:px-16 py-1 rounded-[5px] m-2`}>
      {AboutUsInfo.map((info: any) => (
        <div
          key={info.id}
          dangerouslySetInnerHTML={{ __html: info.info }}></div>
        ))}
      </section>
    </div>
  )
}
export default AboutUs