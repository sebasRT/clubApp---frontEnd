'use client'
import { BarList } from "@tremor/react";

const PlayersByCategoryMetrics = ({ categories }: {
    categories: {
        name: string;
        value: number;
    }[]
}) => {

    return (
        <div className="w-full max-w-screen-ml bg-white/80 rounded-md border-2 p-1">
            <h2 className="mb-3 text-center text-2xl"> Jugadores por categoría</h2>
            <BarList data={categories} className='max-w-xs' />
        </div>
    )
}

export default PlayersByCategoryMetrics