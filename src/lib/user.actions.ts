'use server'

import { cookies } from "next/headers"
import { apiBaseURL } from "./utils"
import { revalidatePath } from "next/cache"


export async function logoutUser() {
    cookies().delete("userAuth")
}

export async function validateOTP () {
    cookies().set("validOTP", "true")

}

export async function getPlayerInfo() {
    const dni = cookies().get("dni")?.value;
    const res = await fetch(`${apiBaseURL}/players/getByDni/${dni}`, {method: 'GET'})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return await res.json()
    }

    export async function getMatchByCategory() {
        const dni = cookies().get("dni")?.value;
        const res = await fetch(`${apiBaseURL}/games/list`, {method: 'GET'})
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return await res.json()
        }

export async function updatePlayerInfo(data: any) {
    
    const body:any = {
    playerId: data.playerId,
    playerPosition: data.playerPosition,
    playerBirthdate:  data.playerPosition,
    playerFeePaid: true,
    playerPasswordChanged: true,
    categoryId:  data.category.categoryId,
    userName: data.userName,
    userLastname:  data.userLastname,
    userDni:  data.userDni,
    userEmail:  data.userEmail,
    userAddress:  data.userAddress,
    userPassword:  data.userPassword,
    clubId: data.team.teamId
}

    try {
        const data = await fetch(`${apiBaseURL}/players/update` , {  
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(body)

        })
        revalidatePath("/user")
        return data.ok
    } catch (error: any) {
        throw new Error(error.message)
    }
    
}

export async function hasPassword (dni: string){
    try {
        const request = fetch(`${apiBaseURL}/players/getPasswordChanged/${dni}`, {method: "GET"})
        const hasPass = (await request).json()

        return await hasPass as boolean

    } catch (error) {
        
    }
}
export async function setUserPasswordAction (password: string) {
    const dni = cookies().get('dni')?.value || ""

    const body = {
        userDni: dni,
        userPassword: password
    }

    try {
        
        const setPassword =await fetch(`${apiBaseURL}/players/update/password`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        
        return setPassword.ok

    } catch (error:any) {
        throw new Error (error.message)
    }
}






