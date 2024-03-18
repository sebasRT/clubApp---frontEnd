'use server'

import { cookies } from "next/headers"
import { apiBaseURL } from "./utils"


export async function logoutUser() {
    cookies().delete("userAuth")
}

export async function validateOTP () {
    cookies().set("validOTP", "true")

}

export async function hasPassword (dni: string){
    try {
        const request = fetch(`${apiBaseURL}/players/getPasswordChanged/${dni}`, {method: "GET"})
        const hasPass = (await request).json()

        return await hasPass as boolean

    } catch (error) {
        
    }
}
export async function setUserPassword (password: string) {

}