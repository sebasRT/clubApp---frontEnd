'use client'
import React from 'react'
import Input from './Inputs/CustomInput';
import SelectFixture from './Inputs/SelectFixture';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import { Game } from '@/models/admin.model';

type CreateMatchInputs = {
    rival: string,
    location: string,
    category: string,
    fixture: string,
    date: Date,
    time: string,
}
const schema: yup.ObjectSchema<CreateMatchInputs>= yup.object({
    rival: yup.string().required('El rival es requerido'),
    location: yup.string().required('La ubicación es requerida'),
    category: yup.string().required('La categoría es requerida'),
    fixture: yup.string().required('Este campo es obligatorio'),
    date: yup.date().typeError("Fecha de juego requerida").required('La fecha es requerida'),
    time: yup.string().required('La hora es requerida'),
});

const EditNextMatch = ({game}:{game?: Game}) => {
    const form = useForm<CreateMatchInputs>({ resolver: yupResolver(schema), reValidateMode: "onChange" })
    const { register, formState: { errors, }, trigger, getValues, control } = form


    return (
        <div className='grid grid-rows-2 grid-cols-3 grid-flow-col gap-3 px-2'>
            <Input label='Rival' defaultValue={game?.gameTeamrival} labelColor='text-primary-500' {...register("rival")} error={errors.rival?.message} />
            <Input label='Ubicación' defaultValue={game?.location} labelColor='text-primary-500' {...register("location")} error={errors.location?.message} />
            <Input label='Fecha' type='date' defaultValue={game?.gameDay} labelColor='text-primary-500' {...register('date')} error={errors.date?.message} />
            <Input label='Hora' type='time' defaultValue={game?.gameTime} labelColor='text-primary-500' {...register('time')} error={errors.time?.message} />
            <SelectFixture {...register("fixture")} error={errors.fixture?.message} />
            <button type='submit' className='m-1 bg-baltic-sea-900 text-primary-500 rounded-md'>EDITAR</button>
        </div>)
}

export default EditNextMatch