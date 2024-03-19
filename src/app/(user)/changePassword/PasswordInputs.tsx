'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useForm } from 'react-hook-form'
import { setUserPasswordAction } from '@/lib/user.actions'
import { useState } from 'react'
import { CgSpinner } from 'react-icons/cg'
import { useRouter } from 'next/navigation'

type Inputs = {
    password: string,
    confirmation: string
}
const schema: yup.ObjectSchema<Inputs> = yup.object({
    password: yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .matches(/[0-9]/, 'La contraseña debe tener al menos 1 numero')
        .required(),

    confirmation: yup.string()
        .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
        .required('Confirmar contraseña es obligatorio')
})

const PasswordInputs = () => {
    const router = useRouter()
    const [formState, setFormState] = useState<"loading" | "failed" | "">("")

    const { register, formState: { errors }, trigger, getValues } = useForm<Inputs>({ resolver: yupResolver(schema) })

    const validateInputs = async() => {
        const valid = await trigger()
        if (!valid) return; 
        const password = getValues("password")
        const setPass = await setUserPasswordAction(password)
        setFormState("loading")
        if(!setPass){setFormState("failed"); return}
        router.replace("/user")
    }

    return (

        <>
            <div className='flex flex-col'>
                <span>Ingresa aquí tu contraseña</span>
                <input type="password" {...register("password",{onChange: ()=> trigger("password")})} 
                className='pl-3 mx-4 text-baltic-sea-800 outline-none border-2 border-transparent rounded-sm focus-visible:border-primary-500' />
                {errors.password && <span className='text-[12px] text-baltic-sea-800 font-medium'>
                    {errors.password.message}</span>}
            </div>
            <div className='flex flex-col'>
                <span>Confirma tu contraseña</span>
                <input type="password"  {...register("confirmation")}
                className='pl-3 mx-4 text-baltic-sea-800 outline-none border-2 border-transparent rounded-sm  focus-visible:border-primary-500'/>
                {errors.confirmation && <span className='text-[12px] text-baltic-sea-800 font-medium'>
                    {errors.confirmation.message}</span>}

            </div>
            {

                formState === "loading" ?  
                <CgSpinner className="animate-spin text-5xl mx-auto" /> 
                :
                <button onClick={validateInputs} className='bg-baltic-sea-50 px-4 w-fit font-squada tracking-widest rounded-sm text-baltic-sea-800 active:scale-95'>GUARDAR</button>
            }

        </>

    )
}

export default PasswordInputs 
