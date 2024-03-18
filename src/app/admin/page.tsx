import dynamic from "next/dynamic";
import { Event } from "react-big-calendar";
import dayjs from "dayjs";


type customEvent = Event & {
  category: string
}


const events:customEvent[] = [
  {
    title: 'primer evento',
    start: dayjs('2024-02-29 18:00').toDate(),
    end: dayjs('2024-02-29 19:00').toDate(),
    category: "match" 
  }
]


const page =async () => {


  return (
       
    <div className="w-full h-screen md:p-20 pt-0 baltic-sea-900">
        
    </div>
  


  )
}


export default page