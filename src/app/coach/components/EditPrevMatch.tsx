import { Game } from '@/models/admin.model'
import React from 'react'
import { FaEdit } from 'react-icons/fa'

const EditPrevMatch = ({game}:{game?: Game}) => {
  return (
    <div className='text-xl flex items-center *:px-3' >
    <span>{game?.gameLocalgoals} <span className='text-primary-500'>:</span> {game?.gameRivalgoals} </span>
    <span> {game?.gameTeamrival} </span>
    <span><FaEdit className='fill-white/70' /></span>
</div>
)
}

export default EditPrevMatch