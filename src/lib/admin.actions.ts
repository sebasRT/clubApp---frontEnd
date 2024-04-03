'use server'

import { Coach, Game, Player } from "@/models/admin.model"
import dayjs from "dayjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { apiBaseURL } from "./utils"


export async function validateAdminAuth () {
    return cookies().has("adminAuth")
}

export async function logoutAdmin () {
    cookies().delete("adminAuth")
}

// ----------------------------------- PLAYERS CRUD -------------------------------- 


export async function createPlayerAction(formData: FormData) {

    const getValue = (value: string) => {
        return formData.get(value)?.toString() || ""
    }

    const category = dayjs(getValue("birthday")).year().toString()
    
    const body = {
        userName: getValue("name"),
        userLastname: getValue("lastName"),
        userDni: getValue("dni"),
        userEmail:getValue("email") ,
        userAddress: getValue("address"),
        userPassword: "",
        playerBirthdate: getValue("birthday"),
        categoryName: category
    }

    try {
        const data = await fetch(`${apiBaseURL}/players/save` , {  
            method: "POST",
            headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(body)

        })
        revalidatePath("/admin/players", "layout")
        revalidatePath("/admin/teams")
        return data.ok
    } catch (error: any) {
        throw new Error(error.message)
    }
    
}

type EditInputs = {
    playerId: string,
    userName: string;
    userLastname: string;
    userEmail: string;
    userAddress: string;
};

export async function editPlayerAction (formData: FormData) {

    const getValue = (value: string) => {
        return formData.get(value)?.toString() || ""
    }

    const body: EditInputs = {
            playerId: getValue("playerId"),
            userName: getValue("userName"),
            userLastname: getValue("userLastname") ,
            userEmail: getValue("userEmail") ,
            userAddress: getValue("userAddress")
    }
    
    try {
        const data = await fetch(`${apiBaseURL}/players/update/form` , {  
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)

        })
        revalidatePath("/admin")
        revalidatePath("/admin", "layout")
        
        return data.ok

    } catch (error: any) {
        throw new Error(error.message)
    }

}

export async function deletePlayerAction (id: string) {
    try {
        const request = await fetch(`${apiBaseURL}/players/${id}`, {method: 'DELETE'})
        if (!request.ok) return false; 
        revalidatePath("/admin/players", "layout")
        return request.ok

    } catch (error: any) {
        throw new Error(error)
    }
}

// ----------------------------------- COACHES CRUD -------------------------------- 
export async function createCoachAction (formData: FormData){
    const getValue = (value: string) => {
        return formData.get(value)?.toString() || ""
    }

    const body: Coach = {
        userName: getValue("name"),
        userLastname: getValue("lastName"),
        userDni: getValue("dni"),
        userEmail:getValue("email") ,
        userAddress: getValue("address"),
        userPassword: getValue("dni"),
        roleId: 3,
        clubId: 1
        
    }

    try {
        const data = await fetch(`${apiBaseURL}/coaches/save` , {  
            method: "POST",
            headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        })
        revalidatePath("/admin/coaches", "layout")
        return await data.json()
    } catch (error: any) {
        throw new Error(error)
    }

}

export async function editCoachAction (formData: FormData) {
return false
}

export async function deleteCoachAction (id: string) {
    try {
        const request = await fetch(`${apiBaseURL}/coaches/delete/${id}`, {method: 'DELETE'})
        if (!request.ok) return false; 
        revalidatePath("/admin/players", "layout")
        return request.ok

    } catch (error: any) {
        throw new Error(error)
    }
}

// ----------------------------------- MATCHES CRUD-------------------------------- 

export async function deleteMatchAction(id:string) {
    try {
        const request = await fetch(`${apiBaseURL}/games/delete/${id}`, {method: "DELETE"} )
        revalidatePath("/admin/fixtures")
        return request.ok

    } catch (error: any) {
        throw new Error(error.message)
    }
}

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
    console.log(body)
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
    console.log(body);
    
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
