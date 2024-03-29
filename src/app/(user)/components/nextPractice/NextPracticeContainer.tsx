import CardContainer from "@/components/infoBlock/CardContainer"
import NextPractice from "./NextPractice"

const NextPracticeContainer = () => {
  return (
    <>
      <CardContainer title={"PROXIMO ENTRENAMIENTO"} info={<NextPractice/>} bg={false}/>
    </>
  )
}
export default NextPracticeContainer