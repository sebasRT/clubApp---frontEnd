'use server'

import { cookies } from "next/headers"

const apiBaseURL = process.env.API_BASE_URL

export async function logoutUser() {
    cookies().delete("userAuth")
}

export async function getData() {
    const dni = cookies().get("dni")?.value;
    const res = await fetch(`${apiBaseURL}/players/getByDni/${dni}`, {method: 'GET'})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
  }


//   export async function getMatches() {
//     const dni = cookies().get("dni")?.value;
//     const res = await fetch(`${apiBaseURL}/teams/get/1`, {method: 'GET'})
//     if (!res.ok) {
//         throw new Error('Failed to fetch data')
//     }
//     return res.json()
//   }
