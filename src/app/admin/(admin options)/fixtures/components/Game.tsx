import { deleteMatchAction } from "@/lib/admin.actions"
import { cn } from "@/lib/utils"
import { Game as GameType } from "@/models/admin.model"
import { Disclosure } from '@headlessui/react'
import dayjs from 'dayjs'
import { Dispatch, SetStateAction, useState } from "react"
import { CgSpinner } from "react-icons/cg"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import Editing from "./Editing"

const Game = ({ data }: { data: GameType }) => {

    const [infoState, setInfoState] = useState<"deleting" | "editing" | "">("")

    return (
        <Disclosure as="div" className="odd:bg-black/10 md:text-lg">
            {({ open }) => (
                <>
                    <Disclosure.Button className={cn("w-full py-1 border-2 border-transparent", open && "border-primary-500")}>
                        <span className="grid grid-cols-[_1fr_auto_1fr] place-items-center w-full font-medium">{data.category?.categoryName} <span className="text-primary-500 font-normal">vs</span> {data.gameTeamrival}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="py-2 text-sm grid grid-cols-2 place-items-center bg-black/20 md:text-base">
                        {
                            (() => {
                                switch (infoState) {
                                    case "deleting":
                                        return <Deleting id={data.gameId} setInfoState={setInfoState} />
                                    case "editing":
                                        return <Editing data={data} setInfoState={setInfoState} />
                                    default:
                                        return <Default data={data} setInfoState={setInfoState} />
                                }
                            })()
                        }
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>)
}



const Default = ({ data, setInfoState }: { data: GameType, setInfoState: Dispatch<SetStateAction<"" | "deleting" | "editing">> }) => {

    const compareDate = (date: string) => {
        const today = dayjs()
        return dayjs(date).isBefore(today)
    }

    const played = compareDate(data.gameDay)

    return (
        <>
            <div className="flex flex-col">
                <span><span className="text-primary-500">Fecha:</span> {data.gameDay}</span>
                <span><span className="text-primary-500">Hora:</span> {data.gameTime}</span>
                <span><span className="text-primary-500">Rival:</span> {data.gameTeamrival}</span>
            </div>
            <div className="flex flex-col text-center">
                <span className="text-primary-500">Estado: </span>
                <span>{played ? "Jugado" : "Pendiente"}</span>
                {played && <span>{data.gameLocalgoals} - {data.gameRivalgoals}</span>}
            </div>
            <div className="col-span-2 flex *:mx-2 *:px-2 *:cursor-pointer text-4xl">
                <MdDelete className="text-red-500" onClick={() => setInfoState("deleting")} />
                <FaEdit onClick={() => setInfoState("editing")} />
            </div>
        </>
    )
}



const Deleting = ({ id, setInfoState }: { id: string, setInfoState: Dispatch<SetStateAction<"" | "deleting" | "editing">> }) => {

    const [deletingState, setDeletingState] = useState<"loading" | "failed" | "done" | "">("")

    const deleteGame = async () => {
        setDeletingState("loading")

        const gameDeleteReq = await deleteMatchAction(id);
        if (!gameDeleteReq) { setDeletingState("failed"); return };
        setDeletingState("done")
    }
    return (
        <>

            {
                (() => {
                    switch (deletingState) {

                        case "loading":
                            return <div className="col-span-2">
                                <CgSpinner className="animate-spin text-5xl mx-auto" />
                            </div>

                        case "failed":
                            return <div className="md:text-lg col-span-w">
                                <span>No se pudo realizar la operación</span>
                            </div>
                        case "done":
                            return <></>
                        default:
                            return <>
                                <div className="col-span-2 my-4">¿Seguro quieres eliminar este partido?</div>
                                <div className="col-span-2 flex *:mx-3 *:px-3 *:rounded-md">
                                    <button onClick={deleteGame} className="bg-baltic-sea-950">Proceder</button>
                                    <button onClick={() => setInfoState("")} className="bg-primary-500 text-baltic-sea-900">Cancelar</button>
                                </div>
                            </>
                    }

                })()
            }
        </>
    )
}


export default Game