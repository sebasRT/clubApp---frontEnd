import { apiBaseURL } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { FaFileDownload } from 'react-icons/fa'

const PdfPlayers = () => {
    return (
        <Link href={`${apiBaseURL}/players/getPlayersPaidFeeReport`}
            className='bg-blue-500 p-1 rounded-md border text-white flex flex-col items-center w-fit'
        >
            <FaFileDownload className='text-3xl' />
        </Link>
    )
}

export default PdfPlayers