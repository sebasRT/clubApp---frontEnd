import { getUserOTP } from "@/lib/kv/actions"
import { cookies } from "next/headers"
import OTP from "./OTP"
import Image from "next/image"
import footballUserBanner from "@/public/footballUserBanner.webp";

async function getUserValidationParams() {
    const userDni = cookies().get('dni')?.value.toString() as string
    const userOTP = (await getUserOTP(userDni)).toString() as string
    const userName = cookies().get('username')?.value.toString()

    return { userDni, userOTP, userName }
}


const page = async () => {
    const { userDni, userOTP, userName } = await getUserValidationParams()
    
    return (
        <main className="min-h-screen  flex flex-col items-center relative text-[#3A3949] text-center  mt-24 md:mt-0">
            <figure className="w-full hidden md:block">
                <Image src={footballUserBanner} className="object-cover w-full" alt={"Football banner"} />
            </figure>
                <h1 className=" text-3xl py-10">Hola <span className="font-[800]">{userName}</span> </h1>
                <h2 className="text-2xl ">Ingresa el código que enviamos a tu correo</h2>
                <OTP otp={userOTP} dni={userDni} />
            
        </main>
    )
}

export default page

