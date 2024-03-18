import footballUserBanner from "@public/footballUserBanner.png"
import bgImage from '@public/primaryBG.png'
import Image from "next/image"

const page = async () => {

  return (
    <main className="min-h-screen w-screen flex flex-col gap-5 items-center relative">
      <Image src={bgImage} alt="login Team Image" className="absolute object-cover w-full h-full -z-10" />
        <figure className="w-full">
          <Image src={footballUserBanner} className="object-cover" alt={"Football banner"}/>
        </figure>
        <div className=" mt-24 md:my-5">
        </div>
      </main>
  );
}


export default page