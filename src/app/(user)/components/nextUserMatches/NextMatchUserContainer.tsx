import CardContainer from "@/components/infoBlock/CardContainer"
import NextUserMatch from "./NextUserMatch"

const FixtureContainer = () => {
  return (
    <>
    <CardContainer title={"PROXIMAS FECHAS"} info={<NextUserMatch/>} bg={true}/>
    </>
  )
}
export default FixtureContainer