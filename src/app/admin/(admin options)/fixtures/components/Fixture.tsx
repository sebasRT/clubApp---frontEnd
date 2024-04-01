'use client'

import { Fixture as FixtureType} from "@/models/admin.model"
import Game from "./Game"


const Fixture = ({ data }: { data: FixtureType }) => {
    return (
        <div className="w-full max-w-md flex flex-col h-96 bg-baltic-sea-800 text-baltic-sea-50  overflow-y-scroll rounded-sm">
            <text className="text-xl text-center py-3 sticky bg-baltic-sea-900 top-0 md:2xl">{data.fixtureName}</text>
            {data.fixtureGames.map((game, index) => <Game data={game} key={index} />)}
        </div>
    )
}


export default Fixture