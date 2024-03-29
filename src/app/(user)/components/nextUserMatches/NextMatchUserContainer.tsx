import CardContainer from "@/components/infoBlock/CardContainer"
import NextUserMatch from "./NextUserMatch"

const NextMatchUserContainer = () => {
  return (
    <>
    <CardContainer title={"PROXIMAS FECHAS"} info={<NextUserMatch/>} bg={false}/>
    </>
  )
}
export default NextMatchUserContainer