'use server'
import { Resend } from "resend";
import ChangeUserPassword from "../../../emails/ChangeUserPassword";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmailTry() {
    try {
        
        const email =  await resend.emails.send({
            from: 'admin@clu-app.xyz',
            subject: "probandoDominio",
            to: ["jesnero11@gmail.com"],
            react: ChangeUserPassword({clientName: "sebasrt"})
        })
        console.log(email);
    } catch (error: any) {
        throw new Error(error.message)
    }
}

