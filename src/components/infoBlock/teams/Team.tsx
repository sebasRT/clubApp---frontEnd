import footballTeam from '@public/footballteam.jpeg'
import Image from 'next/image'

const Team = () => {
  return (
    <div className='flex gap-1 overflow-x-scroll  h-[10rem]'>
      <Image src={footballTeam} alt='equipo'/>
      <Image src={footballTeam} alt='equipo'/>
      <Image src={footballTeam} alt='equipo'/>
      <Image src={footballTeam} alt='equipo'/>
      <Image src={footballTeam} alt='equipo'/>
      <Image src={footballTeam} alt='equipo'/>
      <Image src={footballTeam} alt='equipo'/>
    </div>
  )
}
export default Team