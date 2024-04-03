'use client'
import React, { useState } from 'react'
import Input from './Inputs/CustomInput'
import SelectFixture from './Inputs/SelectFixture'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { createMatchAction } from '@/lib/coach.actions'
import { CgSpinner } from 'react-icons/cg'
import dayjs from 'dayjs'

type CreateMatchInputs = {
    rival: string,
    location: string,
    category: string,
    fixture: string,
    date: Date,
    time: string,
}
const schema: yup.ObjectSchema<CreateMatchInputs> = yup.object({
    rival: yup.string().required('El rival es requerido'),
    location: yup.string().required('La ubicación es requerida'),
    category: yup.string().required('La categoría es requerida'),
    fixture: yup.string().required('Este campo es obligatorio'),
    date: yup.date().typeError("Fecha de juego requerida").required('La fecha es requerida'),
    time: yup.string().required('La hora es requerida'),
});

const CreateMatchForm = () => {
    const [formState, setFormState] = useState<"failed" | "done" | "loading" | "">("")

    const form = useForm<CreateMatchInputs>({ resolver: yupResolver(schema), reValidateMode: "onChange" })
    const { register, formState: { errors, }, trigger, reset } = form

    const resetFormState = () => {
         setTimeout(() => {
            setFormState("")
        }, 2000)
    }

    const submit = async (data: FormData) => {
        await trigger()
        const created = await createMatchAction(data)
        if (!created) { setFormState("failed"); return };
        setFormState("done")
        reset()
        resetFormState()
    }
    const currentDate = dayjs().format("YYYY-MM-DD")
    return (
        <form action={submit} className='flex flex-col items-center'>
            <div className='grid grid-rows-2 grid-cols-3 grid-flow-col gap-3 px-2'>
                <Input label='Rival' {...register("rival")} error={errors.rival?.message} />
                <Input label='Ubicación' {...register("location")} error={errors.location?.message} />
                <Input label='Fecha' type='date' min={currentDate} {...register('date')} error={errors.date?.message} />
                <Input label='Hora' type='time' {...register('time')} error={errors.time?.message} />
                <SelectFixture {...register("fixture")} error={errors.fixture?.message} />
                {
                    (() => {
                        switch (formState) {
                            case "failed":
                                return <span className='text-center'>No se pudo crear el partido.</span>
                            case "done":
                                return <span className='text-center'>Partido creado.</span>
                            case "loading":
                                return <CgSpinner className="animate-spin text-5xl mx-auto" />
                            default:
                                return <button type='submit' className='m-1 bg-baltic-sea-900 text-primary-500 rounded-md'>CREAR</button>

                        }
                    })()
                }
            </div>
        </form>
    )
}

export default CreateMatchForm