import CardContainer from "../CardContainer"
import AboutUs from "./AboutUs"

const AboutUsContainer = () => {
  return (
    <>
    <CardContainer title={"SOBRE NOSOTROS"} info={<AboutUs/>} bg={false}/>
    </>
  )
}
export default AboutUsContainer