import { apiBaseURL } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET () {
    const res = await fetch(`${apiBaseURL}/categories/listIdName`) 
    const data = await res.json()

    return NextResponse.json(data, {status: res.status})
}