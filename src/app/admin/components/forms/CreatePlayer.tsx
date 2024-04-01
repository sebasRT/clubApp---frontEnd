'use client'
import { createPlayerAction } from "@/lib/admin.actions"
import { sendUserWelcomeEmail } from "@/lib/resend/actions"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"

type Inputs = {
    name: string,
    lastName: string,
    dni: string,
    email: string,
    birthday: string,
    address: string,
}

const schema: yup.ObjectSchema<Inputs> = yup.object({
    name: yup.string().required("Ingresa el nombre del jugador"),
    lastName: yup.string().required("Ingresa el apellido del jugador"),
    dni: yup
    .string()
    .matches(/^\d{8,11}$/, "El DNI debe tener entre 8 y 11 dígitos")
    .required("Ingresa el DNI del jugador"),
    email: yup.string().email("Proporciona un Email valido").required("Ingresa el Email del jugador"),
    birthday: yup.string().required("Ingresa la fecha de nacimiento"),
    address: yup.string().required("Dirección de residencia del jugador"),
})

const placeholders: Record<keyof Inputs, string> = {
    name: "Nombre *",
    lastName: "Apellido *",
    dni: "DNI *",
    email: "Correo electrónico *",
    birthday: "Fecha de nacimiento *",
    address: "Dirección *",
};
const CreatePlayer = () => {
    const [formState, setFormState] = useState<"userCreated" | "failed" |  "none">("none")

    const { register, formState: { errors }, trigger, reset, getValues } = useForm<Inputs>({ resolver: yupResolver(schema), reValidateMode: "onChange" })

    const resetFormState = () => setTimeout(() => {
        setFormState("none")
    }, 6000);

    const createUser = async (formData: FormData) => {

        const validInputs = await trigger()
        if (!validInputs) return false;
        const created = await createPlayerAction(formData)

        if (!created) {setFormState("failed"); resetFormState(); return};

        const dni = getValues("dni")
        const email = getValues("email")
        const name = getValues("name")
        const sendEmail = await sendUserWelcomeEmail(dni,email, name )
        if(sendEmail?.error) return ; 
        
        setFormState("userCreated");
        reset();
        resetFormState()
        return 
        ;
    }

    return (
        <section className="relative size-full flex flex-col gap-10 items-center text-baltic-sea-900 mb-3 sm:gap-5 ">


            <h2 className="font-squada text-3xl sm:text-3xl md:text-4xl text-center px-4">Formulario alta <b>Jugador</b></h2>
            { (()=>{
                switch (formState) {

                    case "failed":
                        return <span className="animate-bounce  top-0">No se pudo crear el usuario</span>

                    case "userCreated":
                        return <span className="animate-bounce  top-0">Usuario creado exitosamente</span>

                    default:
                        return <></>
                        break;
                }
            })()
            
            }

            <form className="flex flex-col gap-10" action={createUser}>
                <div className="grid  gap-4">

                    {Object.keys(schema.fields).map((fieldName, index) => (
                        <div key={index} className="bg-transparent flex flex-col">
                            <input {...register(fieldName as keyof Inputs, {onChange: ()=> trigger(fieldName as keyof Inputs)})}
                                type={ (()=>{
                                    switch (fieldName) {
                                        case "dni":
                                            return "number"
                                        case "birthday":
                                            return "date"
                                        case "email":
                                            return "email"
                                        default:
                                            return "text"
                                    }
                                })()
                                    }
                                lang="es"
                                min="2011-01-01" max="2018-12-31"
                                name={fieldName}
                                className="bg-transparent text-center md:text-left placeholder:text-baltic-sea-900 border-baltic-sea-900 outline-none"
                                placeholder={placeholders[fieldName as keyof Inputs]} />
                            {errors[fieldName as keyof Inputs]?.message && <span className="text-xs text-red-600">{errors[fieldName as keyof Inputs]?.message}</span>}
                        </div>
                    ))}
                </div>
                <button type="submit" className="text-primary-50 p-1 px-3 text-sm bg-baltic-sea-800 w-fit self-center rounded-md font-squada border-2 border-baltic-sea-900 active:scale-95">Alta Socio</button>
            </form>
        </section>
    )
}

export default CreatePlayer