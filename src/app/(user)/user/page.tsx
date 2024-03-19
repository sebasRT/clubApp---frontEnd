import { getData } from "@/lib/user.actions";
import footballUserBanner from "@/public/footballUserBanner.png";
import bgImage from '@/public/primaryBG.png';
import Image from "next/image";

export default async function page() {
  // const data = await getData()
  
  return (
    <main className="min-h-screen w-screen flex flex-col gap-5 items-center relative">
      <Image src={bgImage} alt="login Team Image" className="absolute object-cover w-full h-full -z-10" />
      <figure className="w-full hidden md:block">
        <Image src={footballUserBanner} className="object-cover" alt={"Football banner"} />
      </figure>
      <div className="mt-24 md:my-2">
        {/* <h1 className="text-center text-5xl font-bauhs text-baltic-sea-900">Bienvenid@ <span className="text-6xl">{`${data.userName} ${data.userLastname}`}</span></h1> */}
      </div>
    </main>
  );
};

