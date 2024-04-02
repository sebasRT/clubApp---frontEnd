import { apiBaseURL } from "@/lib/utils"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
    const dni = cookies().get('dni')?.value
    const res = await fetch(`${apiBaseURL}/coaches/getByDni/${dni}`) 
    const data = await res.json()
    return NextResponse.json(data, {status: res.status}) 
}