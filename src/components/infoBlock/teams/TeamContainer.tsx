import CardContainer from "../CardContainer"
import Team from "./Team"


const TeamContainer = () => {
  return (
    <>
    <CardContainer title={"EQUIPOS"} info={<Team/>} bg={false}/>
    </>
  )
}
export default TeamContainer