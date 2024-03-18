import CardContainer from "../CardContainer"
import Matches from "./Matches"

const FixtureContainer = () => {
  return (
    <>
    <CardContainer title={"FIXTURE"} info={<Matches/>} bg={true}/>
    </>
  )
}
export default FixtureContainer