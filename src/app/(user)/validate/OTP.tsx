'use client'

import { validateOTP } from "@/lib/user.actions"
import { cn } from "@/lib/utils"
import { OTPInput, SlotProps } from "input-otp"
import { useRouter } from "next/navigation"
import { useState } from "react"

const OTP = ({ otp, dni }: { otp: string, dni: string }) => {

  const router = useRouter()
  const [otpState, setOtpState] = useState<"invalid" | "valid" | "">("")

  const validate = async(args: any) => {

    if(args as string != otp) setOtpState("invalid") ;

    await validateOTP()
    setOtpState("valid")
    router.replace("/changePassword")
  }

  return (
  
      <OTPInput
      containerClassName="grid place-items-center m-4"
      onComplete={validate}
      maxLength={6}
      render={({ slots }) => (
        <div className="flex">
          {slots.map((slot, i) => (
            <Slot key={i} {...slot} />
          ))}
        </div>
      )} />
   
  )
}

const Slot = (props: SlotProps) => {

  return (
    <div className={cn(
      'relative w-10 h-14 text-[2rem]',
      'flex items-center justify-center',
      'transition-all duration-300',
      'border-border border-y border-r first:border-l first:rounded-l-md last:rounded-r-md',
      'group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20',
      'outline outline-0 outline-accent-foreground/20',
      { 'outline-4 outline-accent-foreground': props.isActive },
    )}>

      {props.char !== null && <div>{props.char}</div>}
    </div>
  )
}

export default OTP