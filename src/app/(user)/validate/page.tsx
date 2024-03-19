import { getUserOTP } from "@/lib/kv/actions"
import { cookies } from "next/headers"
import OTP from "./OTP"

async function getUserValidationParams() {
    const userDni = cookies().get('dni')?.value.toString() as string
    const userOTP = (await getUserOTP(userDni)).toString() as string
    const userName = cookies().get('username')?.value.toString()

    return { userDni, userOTP, userName }
}


const page = async () => {
    const { userDni, userOTP, userName } = await getUserValidationParams()
    
    return (
        <main className="flex flex-col items-center text-center text-baltic-sea-950">
            <h1 className=" text-3xl font-semibold">Hola {userName}</h1>
            <h2 className="text-2xl font-medium">Ingresa el código que llego a tu correo en el momento de tu inscripción</h2>
            <OTP otp={userOTP} dni={userDni} />
        </main>
    )
}

export default page