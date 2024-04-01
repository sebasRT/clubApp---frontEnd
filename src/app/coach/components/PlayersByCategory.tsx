import { apiBaseURL } from "@/lib/utils"
import { Category, Player } from "@/models/admin.model"
import { NextResponse } from "next/server"
import { category } from "../utils"

const getCategories = async () => {
    try {
        const data = await fetch(`${apiBaseURL}/categories/list`, { method: 'GET' })
        if (!data.ok) return NextResponse.json({ error: data.statusText }, { status: data.status })

        return NextResponse.json(await data.json() as Category[], { status: data.status })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

const PlayersByCategory = async () => {
    
    const data = await getCategories()
    const categories = await data.json() as Category[]

    const filteredCategory = categories.find(c => c.categoryName === category )


    return (
        <section className="grid grid-rows-[auto_1fr] place-items-center bg-baltic-sea-700/30 pb-5 md:pb-0 z-0">
            <h2 className="text-2xl text-center font-semibold my-3">Jugadores 2011</h2>
            <div className="w-[80%] h-full max-h-80 text-baltic-sea-50 bg-baltic-sea-900 sm:text-lg px-5 pb-3 *:w-full *:h-full *:z-0 overflow-scroll">

                <table >
                    <thead className="text-xl text-primary-500 ">
                        <tr className="*:my-4">
                            <th>Jugador</th>
                            <th>DNI</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            filteredCategory?.players.map((player, index) => <tr key={index} className="odd:bg-black/10 even:bg-white/10">
                                <td className="pl-3">{player.userName}</td>
                                <td className="text-center">{player.userDni}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>

    )
}

export default PlayersByCategory