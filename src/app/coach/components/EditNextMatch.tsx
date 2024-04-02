'use client'
import React, { useState } from 'react'
import Input from './Inputs/CustomInput';
import SelectFixture from './Inputs/SelectFixture';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import { Game } from '@/models/admin.model';
import { CgSpinner } from 'react-icons/cg';
import { updateMatchAction } from '@/lib/admin.actions';
import dayjs from 'dayjs';

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

const EditNextMatch = ({ game }: { game?: Game }) => {
    const [formState, setFormState] = useState<"failed" | "done" | "loading" | "">("")

    const form = useForm<CreateMatchInputs>({ resolver: yupResolver(schema), reValidateMode: "onChange" })
    const { register, formState: { errors, }, trigger, reset } = form

    const resetFormState = () => {
        setTimeout(() => {
           setFormState("")
       }, 600)
   }

   const edit = async (data: FormData) => {
       await trigger()
       const updated = await updateMatchAction(data)
       if (!updated) { setFormState("failed"); return };
       setFormState("done")
       reset()
       resetFormState()
   }
   const currentDate = dayjs().format("YYYY-MM-DD")

    return (
        <form className='grid grid-rows-2 grid-cols-3 grid-flow-col gap-3 px-2' action={edit}>
            <input hidden readOnly value={game?.gameId} name='id'/>
            <Input label='Rival' defaultValue={game?.gameTeamrival} labelColor='text-primary-500' {...register("rival")} error={errors.rival?.message} />
            <Input label='Ubicación' defaultValue={game?.location} labelColor='text-primary-500' {...register("location")} error={errors.location?.message} />
            <Input label='Fecha' type='date' min={currentDate} defaultValue={game?.gameDay} labelColor='text-primary-500' {...register('date')} error={errors.date?.message} />
            <Input label='Hora' type='time' defaultValue={game?.gameTime} labelColor='text-primary-500' {...register('time')} error={errors.time?.message} />
            <SelectFixture {...register("fixture")} error={errors.fixture?.message} />
            {
                (() => {
                    switch (formState) {
                        case "failed":
                            return <span className='text-center text-xs'>No se pudo actualizar el partido</span>
                        case "done":
                            return <span className='text-center text-xs'>Partido creado.</span>
                        case "loading":
                            return <CgSpinner className="animate-spin text-5xl mx-auto" />
                        default:
                            return <button type='submit' className='m-1 bg-baltic-sea-900 text-primary-500 rounded-md'>EDITAR</button>
                    }
                })()
            }
        </form>
    )
}

export default EditNextMatch