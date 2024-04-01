import loginTeamImage from "@/public/loginTeamImage.png"
import Image from "next/image"
import Link from "next/link"
import LoginUserForm from "./LoginUserForm"

const page = async() => {

  return (
    <main className="h-screen grid place-items-center">

      <Image src={loginTeamImage} alt="login Team Image" fill={true} className="object-cover object-center fixed -z-10" />
      <div className="bg-[#f8643bda] px-4 text-center rounded-[5px]  md:w-[27rem] h-[29rem] flex flex-col justify-around">
      <LoginUserForm/>
        <Link href="/" className=" underline text-[#3A3949]">¿Olvidaste tu contraseña?</Link>
      </div>
    </main>
  )
}

export default page