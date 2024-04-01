import { Game } from "@/models/admin.model"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

type Category = {
    categoryId: string;
    categoryName: string;
}

const Editing = ({ data, setInfoState }: { data: Game, setInfoState: Dispatch<SetStateAction<"" | "deleting" | "editing">> }) => {
    const [categories, setCategories] = useState<Category[]>([{ categoryId: "2018", categoryName: "2018" }])

    useEffect(() => {
        async function getCategories() {

            const req = await fetch("/api/categories")
            const data = await req.json() as Category[];

            setCategories(data)
        }
        getCategories()
    }, [])
    
    const classname = "p-0 bg-white/20 pl-2 mb-2"

    return (
        <>
            <form action="" className="col-span-2 flex flex-col items-center gap-3">
                <div className="flex flex-col items-center">
                    <label htmlFor="category" className="text-xs md:text-sm">Categoría</label>
                    <select name="category" id="category" defaultValue={data.category.categoryName} className="py-0 bg-white/20 mb-2 appearance-none">
                        {categories.map((category) => <option value={category.categoryId}
                            className="appearance-none text-baltic-sea-800"
                        >{category.categoryName}</option>)}
                    </select>
                    <label htmlFor="date" className="text-xs md:text-sm">Fecha</label>
                    <input type="date" name="date" defaultValue={data.gameDay} className={classname} />
                    <label htmlFor="time" className="text-xs md:text-sm">Hora</label>
                    <input type="time" name="time" defaultValue={data.gameTime} className={classname} />
                    <label htmlFor="rival" className="text-xs md:text-sm">Rival</label>
                    <input type="text" name="rival" defaultValue={data.gameTeamrival} className={classname} />
                    <input type="text" name="gameId" defaultValue={data.gameId} hidden className={classname} />
                </div>
                <div className="*:px-4 *:mx-3 *:rounded-md ">
                    <button type="submit" className="bg-baltic-sea-950 ">GUARDAR</button>
                    <button type="reset" className="bg-primary-500 text-baltic-sea-950" onClick={()=>setInfoState("")}>CANCELAR</button>
                </div>
            </form>
            <div className="col-span-2"></div>
        </>
    )

}

export default Editing