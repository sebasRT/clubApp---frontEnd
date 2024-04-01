'use client'
import { cn } from "@/lib/utils";
import { ForwardedRef, SelectHTMLAttributes, forwardRef, useEffect, useState } from "react";

type Category = {
    categoryId: string;
    categoryName: string;
}
type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    error?: string
}

const SelectCategory = forwardRef(({ error, className, ...props }: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => {

    const [categories, setCategories] = useState<Category[]>([{ categoryId: "2018", categoryName: "2018" }])

    useEffect(() => {
        async function getCategories() {

            const req = await fetch("/api/categories")
            const data = await req.json() as Category[];

            setCategories(data)
        }
        getCategories()
    }, [])

    return (
        <div className="flex flex-col gap-0">
        <div className={cn("relative flex mt-2 text-baltic-sea-200 bg-baltic-sea-900/50 border-transparent border-b-2 focus-within:border-primary-400", className)}>
            <select id="fixture"
                ref={ref}
                defaultValue=""
                style={{backgroundImage:` url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'><path stroke='%23F5581E' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/></svg>")`}}
                className='peer
                appearance-none bg-transparent py-0 border-0 focus:bg-primary-400 focus:text-baltic-sea-900 focus:ring-0 w-full'
                {...props}>
                <option value="" disabled >Categoría</option>
                {categories.map((item, index) => (
                    <option key={index} value={item.categoryId} className='odd:bg-white/20 text-wrap' onClick={(e)=> console.log("evento" + e.currentTarget.value)}>
                        {item.categoryName}
                    </option>
                ))}
            </select>
        </div>
            {error && <span className="text-xs font-thin text-red-600">{error}</span>}
    </div>
    )
})

export default SelectCategory
