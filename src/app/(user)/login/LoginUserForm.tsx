'use client'
import { authUser } from "@/auth"
import { yupResolver } from "@hookform/resolvers/yup"
import { redirect } from "next/navigation"
import {  useState } from "react"
import { useForm } from "react-hook-form"
import { TiWarningOutline } from "react-icons/ti";
import * as yup from "yup"

type Inputs = {
    email: string,
    password: string
  }
  
  const schema: yup.ObjectSchema<Inputs> = yup.object({
    email: yup.string().email("Asegúrate de pasar un correo valido").required("suministra tu email"),
    password: yup.string().required("suministra tu contraseña")
  })
  
const LoginUserForm = () => {
    const [formState, setFormState] = useState<"none" | "loading" | "notFound">("none")
  
    const { register, trigger, formState: { errors }, control } = useForm<Inputs>({ resolver: yupResolver(schema), reValidateMode: "onChange" })
  
    const validate = async (form: FormData) => {
      const validInputs = await trigger()
      if (!validInputs) return;
      setFormState("loading")
      const validUser = await authUser(form)
      if (!validUser) {
        setFormState("notFound")
        return;
      }
      redirect("/user")
    }
  
  
    return (
      <>
        <h2 className="text-4xl font-bauhs text-baltic-sea-50">Iniciar Sesión</h2>
        <form action={validate} className="z-10 flex flex-col gap-3 text-center relative text-baltic-sea-50">
          {formState === "notFound" && <Warning/>}
          <div className="bg-primary-400 p-2 rounded-md flex flex-col">
            <input {...register("email")} id="email" className="bg-transparent placeholder:text-silver-900 placeholder:text-center border-0 border-b-[1px] border-silver-900 focus-visible:outline-non" placeholder="Ingresa email *" />
           {errors.email?.message && <span className="text-xs font-semibold">{errors.email.message}</span> } 
          </div>
          <div className="bg-primary-400 p-2 rounded-md flex flex-col">
            <input {...register("password")} id="password" className="bg-transparent placeholder:text-silver-900 placeholder:text-center border-0 border-b-[1px] border-silver-900 focus-visible:outline-none" placeholder="Ingresa contraseña *" />
            {errors.password?.message && <span className="text-xs font-semibold">{errors.password.message}</span> } 

          </div>
          <button type="submit" className="p-1 px-3  bg-baltic-sea-800 text-[#FFFF] w-fit self-center rounded-[5px] font-squada border-2 border-baltic-sea-900 active:scale-95">Iniciar sesión</button>
        </form>
      </>
    )
    }  

    const Warning = () => {
return(
  <div className="absolute -translate-y-32 bg-silver-50/80 text-primary-500 text-center  rounded-[5px] p-4">
    <TiWarningOutline className="mx-auto"/>
    <span >Los datos no corresponden a los del registro.</span>
  </div>
)
    } 

export default LoginUserForm