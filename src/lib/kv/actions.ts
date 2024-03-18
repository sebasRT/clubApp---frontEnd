'use server'
import { kv } from "@vercel/kv";
import { redirect } from "next/navigation";


export async function setUserOTP (userDni: string, otp: string) {

    const keyUserOtp = `user_${userDni}_otp`;

    return await kv.set(keyUserOtp, otp);
}

export async function getUserOTP (userDni: string){

    const keyUserOtp = `user_${userDni}_otp`;
    const userOTP = await kv.get(keyUserOtp) as string;
    console.log(userOTP);

    if (!userOTP) {
        redirect("/")
    }
    return userOTP
}