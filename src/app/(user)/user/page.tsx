import NextMatchContainer from "@/components/infoBlock/nextMatch/NextMatchContainer";
import { getData } from "@/lib/user.actions";
import footballUserBanner from "@/public/footballUserBanner.png";
import bgImage from '@/public/primaryBG.png';
import Image from "next/image";
import Stadistic from "../components/stadisticsPlayer/Stadistic";

export default async function page() {
  const data = await getData()
  
  const cards = [
    <NextMatchContainer key="1" />,
    <Stadistic key="2" />,
  ];

  return (
    <main className="min-h-screen w-screen flex flex-col items-center relative">
      <Image src={bgImage} alt="login Team Image" className="absolute object-cover w-full h-full -z-10" />
      <figure className="w-full hidden md:block">
        <Image src={footballUserBanner} className="object-cover" alt={"Football banner"} />
      </figure>
      <div className="mt-24 md:my-1">
        <h1 className="text-center text-5xl font-bauhs text-baltic-sea-900">Bienvenid@ <span className="text-6xl">{`${data.userName} ${data.userLastname}`}</span></h1>
      </div>
      <div className="flex justify-between shadow-2xl md:px-5">
      <div className="overflow-hidden">
        <div className="flex flex-col transition-transform duration-500 ease-in-out transform lg:flex-row">
          {cards.map((card, index) => {
              return (
                <div key={index} className="w-[20rem] min-[425px]:w-[26rem] md:w-[40rem] lg:w-[30rem] min-[1440px]:w-[40rem] p-4">
                  {card}
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
    </main>
  );
};

