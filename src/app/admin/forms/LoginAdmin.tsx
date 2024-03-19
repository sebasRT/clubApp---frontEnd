'use client'
import { adminAuth } from "@/auth"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import footballBanner from "@public/bannerFootball.png"

const LoginAdmin = () => {
    const [formState, setFormState] = useState<"incorrect" | "none">("none")
    const router = useRouter()

    const authorizeAdmin =async (formData: FormData) =>{
      const password = formData.get('password')?.toString()
        const validAuth = await adminAuth(password)

        if(!validAuth) {setFormState("incorrect") ; return};
        sessionStorage.setItem("adminAuth", "true")
        router.refresh()
    }

  return (
    <div className=" absolute grid top-0 text-center ">
      <figure className="w-full h-fit hidden md:block">
        <Image src={footballBanner} alt={"banner"} />
      </figure>
      <form action={authorizeAdmin} className="w-fit mx-auto mt-32 md:mt-5 z-50" >
        <h2 className="text-2xl text-baltic-sea-800 font-squada font-medium border-b-2">INGRESA LA CONTRASEÑA DE ADMINISTRADOR</h2>
        <input  className=" outline-none block mx-auto my-10  text-center py-2 px-10 rounded-[5px]" type="password" id="password" name="password"/>
        <button type="submit" className="bg-baltic-sea-700 rounded-[5px] px-4 py-1 font-semibold text-baltic-sea-50">INGRESAR</button>
        {formState === "incorrect" && <span className="block text-sm text-red-500 font-medium my-2">contraseña incorrecta</span>}
      </form>
    </div>
  )
}

export default LoginAdmin