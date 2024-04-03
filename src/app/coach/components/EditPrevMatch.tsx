'use client'
import { updatePrevMatchAction } from '@/lib/coach.actions'
import { cn } from '@/lib/utils'
import { Game } from '@/models/admin.model'
import React, { useState } from 'react'
import { FaCheckCircle, FaEdit } from 'react-icons/fa'

const EditPrevMatch = ({ game }: { game?: Game }) => {
  const [failed, setFailed] = useState(false)
  const [editing, setEditing] = useState(false)

const editMatch = async(formData: FormData) => {
  const edit = await updatePrevMatchAction(formData)
  if(!edit)  {setFailed(true); return}; 
  
  setEditing(false)
} 

  return (
    <>
    <form className='text-xl flex items-center gap-3' action={editMatch} >
      <div className='*:text-center *:text-lg'>
        <input type="text" title="Goles locales" name="localGoals" className={cn("border-0 bg-white appearance-none w-5 p-0", !editing && "bg-transparent focus:ring-0")} defaultValue={game?.gameLocalgoals} readOnly={!editing} required/>
        <span className='text-primary-500'>:</span>
        <input type="text" title='Goles rivales' name='rivalGoals' className={cn("border-0 bg-white appearance-none w-5 p-0", !editing && "bg-transparent focus:ring-0")} defaultValue={game?.gameRivalgoals} readOnly={!editing} required/>
      </div>
      <input type="text" name="rivalName" className={cn("p-0 text-center border-0 bg-white appearance-none w-32", !editing && "bg-transparent focus:ring-0")} defaultValue={game?.gameTeamrival} title='Equipo rival' readOnly={!editing} />
      {
        editing ?
          <button type='submit'><FaCheckCircle className='fill-blue-200' /></button>
          :
          <span onClick={() => setEditing(true)}><FaEdit className='fill-white/70' /></span>
      }

      <input type="hidden" name="id" hidden defaultValue={game?.gameId}/>
      <input type="hidden" name="date" hidden defaultValue={game?.gameDay}/>
      <input type="hidden" name="time" hidden defaultValue={game?.gameTime}/>
      <input type="hidden" name="rival" hidden defaultValue={game?.gameTeamrival}/>
      <input type="hidden" name="location" hidden defaultValue={game?.location}/>
    </form>
    {failed && <span className='text-sm text-red-500'>No se pudo actualizar el partido</span>}
    </>
  )
}

export default EditPrevMatch