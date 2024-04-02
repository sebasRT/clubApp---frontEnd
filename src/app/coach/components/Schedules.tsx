import { apiBaseURL } from "@/lib/utils"
import { Game } from "@/models/admin.model"
import { cookies } from "next/headers"

const Schedules = async () => {

    const getGames = async () => {
        const category = cookies().get('category')?.value
        const req = await fetch(`${apiBaseURL}/games/getGamesCategory/${category}`)
        const games = await req.json() as Game[]
    
        return games
    }
    const games = await getGames()

    const schedule = `${games[0].category?.categorySchedule} ${games[0].category?.categoryDaytraining} `
    return (
        <section className="h-full bg-baltic-sea-700/10 flex flex-col pb-5 md:pb-0">
            <h2 className="text-2xl text-center font-semibold my-3">Programación</h2>
            <section className="text-center bg-baltic-sea-900/10 py-1">
                <h3 className="text-primary-600">Horario de entrenamiento</h3>
                <p className="text-xl">{schedule}</p>
            </section>

            <section className="flex-grow flex flex-col ">
                <h3 className="text-primary-600 text-center text-2xl my-3">Partidos</h3>

                <div className="bg-primary-500 max-h-60 pb-3 flex-grow overflow-scroll px-5 mx-auto">
                    <table className="max-h-full w-full">
                        <thead className="text-xl sticky top-0 bg-primary-500">
                            <tr className="my-4">
                                <th>Rival</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody className="text-primary-950">
                            {games.map((game, index) => (
                                <tr key={index} className="even:bg-white/10 odd:bg-black/10 ">
                                    <td className="pl-2">{game.gameTeamrival}</td>
                                    <td className="text-center pr-2">{game.gameDay}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </section>

    )
}

export default Schedules