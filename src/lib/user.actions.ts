'use server'

import { cookies } from "next/headers"
import { apiBaseURL } from "./utils"


export async function logoutUser() {
    cookies().delete("userAuth")
}

export async function validateOTP () {
    cookies().set("validOTP", "true")

}

export async function getData() {
    const dni = cookies().get("dni")?.value;
    const res = await fetch(`${apiBaseURL}/players/getByDni/${dni}`, {method: 'GET'})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
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