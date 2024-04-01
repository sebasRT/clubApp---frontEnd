'use server'

import { cookies } from "next/headers"
import { apiBaseURL } from "./lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function authDNI(dni: string) {

    const validDNI = await validateDNI(dni)
    if (!validDNI) return false;

    cookies().set("dni", dni, { httpOnly: true })
    return true
}

const validateDNI = async (dni: string) => {
    
    try {
        const getUserByDNI = await fetch(`${apiBaseURL}/players/getByDni/${dni}`, { method: 'GET' })
        if(!getUserByDNI.ok ) return false;

        const data = await getUserByDNI.json()
        cookies().set("username", data.userName)
        
        return true

    } catch (error: any) {
        throw new Error(error.message)
    }
}

export async function authUser(formData: FormData) {
    const dni = cookies().get("dni")?.value;
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    const getUserByDNI = await fetch(`${apiBaseURL}/players/getByDni/${dni}`, { method: 'GET' })

    const user = await getUserByDNI.json()

    if (!user) return false;
    cookies().set("userAuth", "true")
    return user.userEmail === email && user.userPassword === password ? true : false;
}

export async function adminAuth(password?: string) {
    const validPassword = password === process.env.ADMIN_PASSWORD ? true : false;
    if (!validPassword) return false
    cookies().set("adminAuth", "true")
    return true
}

export async function validateCoach (formData: FormData) {
    const dni = formData.get("dni")?.toString() || ""
    const password = formData.get("password")?.toString() || ""    
    const validCoach = await fetch(`${apiBaseURL}/coaches/getByDni/${dni}`)
    if (!validCoach.ok) return false; 
    const data = await validCoach.json() as {userPassword: string}
    if (data.userPassword !== password) return false; 

    await authCoach(dni)
    return true;
}

export async function authCoach (dni: string) {
    cookies().set("dni", dni)
    cookies().set("coachAuth", "true");
    revalidatePath("/coach")
}

export async function logoutCoach () {
    cookies().delete("coachAuth")
    cookies().delete("dni")
}