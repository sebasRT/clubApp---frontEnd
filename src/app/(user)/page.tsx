import FixtureContainer from "@/components/infoBlock/fixture/FixtureContainer";
import TeamContainer from "@/components/infoBlock/teams/TeamContainer";
import Image from "next/image";
import footballBanner from "@/public/bannerFootball.png"
import Carousel from "@/components/infoBlock/Carousel";
import NextMatchContainer from "@/components/infoBlock/nextMatch/NextMatchContainer";
import PlayedMatchContainer from "@/components/infoBlock/playedMatch/PlayedMatchContainer";
export default function Home() {

  const cards = [
    <FixtureContainer key="1" />,
    <TeamContainer key="2" />,
    <NextMatchContainer key="3" />,
    <PlayedMatchContainer key="4" />,
  ];

  return (
    <main className="h-full flex flex-col  items-center relative">
      <figure className="w-full  object-cover hidden md:block">
        <Image src={footballBanner} className="object-cover w-full" alt={"Football banner"} />
      </figure>
      <div className="relative w-[100%] mt-24 md:my-2">
          <h1 className="text-center text-5xl font-bauhs text-baltic-sea-900"> Bienvenido a ClubAPP</h1>
          <Carousel cards={cards} />
      </div>
    </main>
  );
}
