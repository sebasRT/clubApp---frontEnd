import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Dispatch, SetStateAction, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { authDNI } from "@/auth";

const Unlogged = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };
    
  return (
    <div>
      <button onClick={toggleNavbar} className="group bg-primary-500 font-squada rounded-[5px] p-1 px-2  text-baltic-sea-900">
        <p className="group-active:scale-95">Inicia sesión</p>
        </button>
      {
        isOpen && <Login setIsOpen={setIsOpen} />
      }
    </div>
  )
}

type Inputs = {
  dni: string,
}

const schema: yup.ObjectSchema<Inputs> = yup.object({
  dni: yup.string().required("Ingresa un DNI"),
})

const Login = ({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  const router = useRouter()
  const [LoginState, setLoginState] = useState<"none" | "loading" | "notFound">("none")

  const closeModal = () => {
    setIsOpen(false)
  }

  const { register, formState: { errors }, trigger } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const validateData = async (form: FormData) => {

    const validForm = await trigger()
    if (!validForm) return;

    setLoginState("loading")
    const done = await authDNI(form)
    if (!done) {
      setLoginState("notFound")
      return;
    }
    redirect("/login")
  }

  return (
  <div className="fixed inset-0 max-w-screen max-h-[32rem] flex justify-center">
  <div className="fixed inset-0 w-screen h-screen bg-[#D9D9D98A]" onClick={closeModal} />
    <div className="relative flex flex-col bg-silver-50 bg-opacity-90 rounded-[5px] text-center gap-7 z-10 my-auto py-4 mx-2 text-wrap w-[20rem] items-center">
      <button className=" absolute top-5 right-5 cursor-pointer z-10" onClick={closeModal}>x</button>
      <p className="text-2xl font-bauhs text-primary-500">Ingresa tu DNI</p>
      <form action={validateData} className="flex flex-col gap-4  sm:w-fit sm:p-4">
        <div className="py-2 px-4 border-b-2 border-[#000000] flex flex-col text-silver-950 w-[10rem]">
          <input type="text" {...register("dni")} className=" bg-[#ffffff0f] font-semibold text-center" placeholder="DNI" />
        </div>
        <span className="text-center text-xs text-[#FF0505]">{errors.dni?.message}</span>
        {LoginState === "loading" ? <span>Cargando...</span> : <button className="bg-silver-950  font-squada  w-fit py-1 px-4 m-auto rounded-[5px] hover:scale-105 transition text-primary-500" type="submit" >Ingresa</button>}
      </form>
      {LoginState === "notFound" && <p className="text-sm text-[#FF0505]">El DNI ingresado no corresponde a un usuario registrado</p>}
    </div>
  </div>
  )
}


export default Unlogged