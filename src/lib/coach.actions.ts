'use server'
import { cookies } from "next/headers"
import { apiBaseURL } from "./utils"
import { revalidatePath } from "next/cache"

export async function createMatchAction (formData: FormData) {
    const getValue = (value: string) => {
        return formData.get(value)?.toString() || ""
    }
    const category = cookies().get('category')?.value as string
    const body  = {
        gameDay: getValue("date"),
        gameTime: getValue("time"),
        gameTeamrival: getValue("rival"),
        location: getValue("location"),
        categoryId: category,
        fixtureId: getValue("fixture"),
        gameLocalgoals: 0,
        gameRivalgoals: 0,
        gameIslocal: false
    }
    
    try {
        const data = await fetch(`${apiBaseURL}/games/save` , {  
            method: "POST",
            headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(body)
        })
        revalidatePath("/admin/coaches", "layout")
        return data.ok
    } catch (error: any) {
        throw new Error(error)
    }

}

export async function updateNextMatchAction (formData: FormData) {
    const getValue = (value: string) => {
        return formData.get(value)?.toString() || ""
    }
    const category = cookies().get('category')?.value as string
    const body  = {
        gameId: getValue("id"),
        gameDay: getValue("date"),
        gameTime: getValue("time"),
        gameTeamrival: getValue("rival"),
        location: getValue("location"),
        categoryId: category,
        fixtureId: 1,
        gameLocalgoals: 0,
        gameRivalgoals: 0,
        gameIslocal: false
    }
    try {
        const data = await fetch(`${apiBaseURL}/games/update` , {  
            method: "PUT",
            headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(body)
        })
        
        revalidatePath("/admin/coaches", "layout")
        return data.ok
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function updatePrevMatchAction (formData: FormData) {
    const getValue = (value: string) => {
        return formData.get(value)?.toString() || ""
    }
    const category = cookies().get('category')?.value as string

    const body  = {
        gameId: getValue("id"),
        gameDay: getValue("date"),
        gameTime: getValue("time"),
        gameTeamrival: getValue("rival"),
        location: getValue("location"),
        categoryId: category,
        fixtureId: 1,
        gameLocalgoals: getValue("localGoals"),
        gameRivalgoals: getValue("rivalGoals"),
        gameIslocal: false
    }
    
    try {
        const data = await fetch(`${apiBaseURL}/games/update` , {  
            method: "PUT",
            headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(body)
        })
        console.log(await data.json());
        
        revalidatePath("/admin/coaches", "layout")
        return data.ok
    } catch (error: any) {
        throw new Error(error)
    }
}
