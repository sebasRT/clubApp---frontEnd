import CardContainer from "../CardContainer"
import NextMatch from "./NextMatch"

const NextMatchContainer = () => {
  return (
    <>
    <CardContainer title={"PROXIMO PARTIDO"} info={<NextMatch/>} bg={true}/>
    </>
  )
}
export default NextMatchContainer