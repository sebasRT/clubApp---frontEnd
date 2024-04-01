'use client'
import { validateCoach } from "@/auth"
import Input from "./Inputs/CustomInput"
import { useState } from "react"

const CoachLogin = () => {

    const [failed, setFailed] = useState(false)

    const authorizeCoach = async (formData: FormData) => {

        const auth = await validateCoach(formData)
        if (!auth) { setFailed(true) };

    }

    return (
        <>

            <h1 className="bg-baltic-sea-700/50 py-5 text-center text-3xl text-baltic-sea-50 font-bauhs underline">INGRESO DE ENTRENADOR</h1>
            <div className="size-full grid place-items-center text-baltic-sea-50">
                <form action={authorizeCoach} className="flex flex-col gap-5 bg-baltic-sea-700 p-4 ">

                    <h3 className="text-center text-xl">Ingresa tus credenciales</h3>
                    <div className="flex flex-col gap-3 my-3">
                        <Input name="dni" label="DNI" labelColor="text-baltic-sea-50 peer-placeholder-shown:text-baltic-sea-300 " className="bg-baltic-sea-500/30" />
                        <Input name="password" label="Contraseña" type="password" labelColor="text-baltic-sea-50 peer-placeholder-shown:text-baltic-sea-300" className="bg-baltic-sea-500/30 " />
                        {failed && <span className="text-sm text-red-500 text-center">Las credenciales no son válidas</span>}
                    </div>
                    <button className="border-2 border-primary-500 w-fit self-center px-4 rounded-md active:bg-primary-500">INGRESAR</button>

                </form>
            </div>

        </>

    )

}

export default CoachLogin