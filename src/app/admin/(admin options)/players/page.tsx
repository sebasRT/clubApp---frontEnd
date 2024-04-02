import CreatePlayer from "../../components/forms/CreatePlayer";
import { NextResponse } from "next/server";
import { Player } from "@/models/admin.model";
import PlayersList from "./components/PlayersList";
const apiBaseURL = process.env.API_BASE_URL 

const getPlayers = async () => {
  try {
    const data = await fetch(`${apiBaseURL}/players/list`, { method: 'GET' })
    if (!data.ok) return NextResponse.json({ error: data.statusText }, { status: data.status })

    return NextResponse.json(await data.json() as Player[], { status: data.status })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

const playersPage = async () => {
  const data = await getPlayers()
  const players:Player[] = data.ok?  await data.json() as Player[] : [
    {
      playerId: 0,
      userName: "sebas",
      userLastname: "rt",
      userDni: "1007",
      userEmail: "rt@example.com",
      userAddress: "address",
      userPassword: "password",
      category: {categoryName: "2011"},
      playerBirthdate: "2011-01-01T00:00:00"
    }
  ]

  return (
    <div className="size-full">
            <h1 className="font-bauhs text-4xl text-center mb-4">GESTIÓN DE JUGADORES</h1>
            <div className="grid md:grid-cols-5 gap-10 md:gap-0 md:px-10">
                <div className="w-full min-w-72 h-full col-span-3 ">
                    <PlayersList players={players}/>
                
                </div>
                <div className="w-full h-full col-span-3 md:col-span-2">
                <CreatePlayer />
                </div>
            </div>
        </div>
  )
}

export default playersPage