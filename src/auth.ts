'use server'

import { cookies } from "next/headers"
import { apiBaseURL } from "./lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Coach } from "./models/admin.model";


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
    const validCoach = await fetch(`${apiBaseURL}/coaches/getByDniCat/${dni}`)
    if (!validCoach.ok) return false; 
    const data = await validCoach.json() as {category: string, coach: Coach}
    if (data.coach.userPassword !== password) return false; 
    await authCoach(data)

    return true;
}

export async function authCoach (data: {category: string, coach: Coach}) {

    cookies().set("coachAuth", "true", {maxAge: 500});
    cookies().set("category", data.category);
    cookies().set("dni", data.coach.userDni)
    revalidatePath("/coach")
    redirect(`/coach`)

}

export async function logoutCoach () {

    cookies().delete("coachAuth")
    cookies().delete("category")
    cookies().delete("dni")

}