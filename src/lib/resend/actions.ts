'use server'
import { Resend } from "resend";
import { setUserOTP } from "../kv/actions";
import WelcomeUserEmail from "../../../emails/WelcomeUserEmail";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendUserWelcomeEmail(userDni: string, userEmail: string, userName: string ) {

    const userOTP = generateOTP(); 

    if (!await setUserOTP(userDni, userOTP)) return null;

    try {
        
        const email =  await resend.emails.send({
            from: 'ClubApp <admin@club-app.xyz>',
            subject: `Hola ${userName}`,
            to: [userEmail],
            react: WelcomeUserEmail({clientName: userName, otp: userOTP})
        })

        return email

    } catch (error: any) {
        throw new Error(error.message)
    }
}

const generateOTP = () => {
    const otpLength = 6; 

    const otpChars = '0123456789'; 

    let otp = '';

    for (let i = 0; i < otpLength; i++) {
        const randomIndex = Math.floor(Math.random() * otpChars.length);
        otp += otpChars[randomIndex];
    }

    return otp;
}
