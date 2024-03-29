import FixtureContainer from "@/components/infoBlock/fixture/FixtureContainer";
import TeamContainer from "@/components/infoBlock/teams/TeamContainer";
import Image from "next/image";
import footballBanner from "@/public/bannerFootball.png"
import Carousel from "@/components/infoBlock/Carousel";
import NextMatchContainer from "@/components/infoBlock/nextMatch/NextMatchContainer";
import PlayedMatchContainer from "@/components/infoBlock/playedMatch/PlayedMatchContainer";
import AboutUsContainer from "@/components/infoBlock/aboutUs/AboutUsContainer";
export default function Home() {

  const cards = [
    <PlayedMatchContainer key="1" />,
    // <FixtureContainer key="2" />,
    <AboutUsContainer key="3"/>,
    // <TeamContainer key="4" />,
    // <NextMatchContainer key="5" />,
  ];

  return (
    <main className="min-h-screen w-screen flex flex-col  items-center relative">
      <figure className="w-full hidden md:block">
        <Image src={footballBanner} className="object-cover w-full" alt={"Football banner"} />
      </figure>
      <div className="relative w-[100%] mt-32 md:my-1">
        <h1 className="text-center text-5xl font-bauhs text-baltic-sea-900"> Bienvenido a ClubAPP</h1>
        <Carousel cards={cards} />
      </div>
    </main>
  );
}
