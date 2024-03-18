'use server'
import { kv } from "@vercel/kv";

export async function tryingKv ( ){

    await kv.set("user_1_session", "session_token_value");

    const session = await kv.get("user_1_session");
    console.log(await session);
    
}

export async function setUserOTP () {

}
