

import { getData } from "@/lib/user.actions";
import footballUserBanner from "@/public/footballUserBanner.webp";
import bgImage from '@/public/primaryBG.png';
import Image from "next/image";
import Stadistic from "../components/stadisticsPlayer/Stadistic";
import NextUserMatch from "../components/nextUserMatches/NextUserMatch";
import NextMatchUserContainer from "../components/nextUserMatches/NextMatchUserContainer";
import NextPracticeContainer from "../components/nextPractice/NextPracticeContainer";

export default async function page() {
  const data = await getData()
  
  const cards = [
    <NextMatchUserContainer key="1" />,
    <NextPracticeContainer key="2"/>,
    <Stadistic key="3" />,
  ];

  return (
    <main className="min-h-screen w-screen flex flex-col items-center relative">
      <Image src={bgImage} alt="login Team Image" className="absolute object-cover  h-full -z-10" />
      <figure className="w-full hidden md:block">
        <Image src={footballUserBanner} className="object-cover w-full" alt={"Football banner"} />
      </figure>
      <div className="mt-24 md:my-3">
        <h1 className="text-center text-5xl font-bauhs text-baltic-sea-900">Bienvenid@ <span>{`${data.userName} ${data.userLastname}`}</span></h1>
      </div>
      <div className="flex justify-between shadow-2xl md:px-5">
      <div className="overflow-hidden">
        <div className="flex flex-col transition-transform duration-500 ease-in-out transform lg:flex-row ">
          {cards.map((card, index) => {
              return (
                <div key={index} className="w-[20rem] min-[425px]:w-[26rem] md:w-[40rem] lg:w-[20rem] min-[1440px]:w-[30rem] p-1">
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

