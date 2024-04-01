import { cn } from "@/lib/utils"
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react"

type ButtonProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string,
    labelColor?: string
    error?: string
}

const Input =forwardRef(({ label, className, error, labelColor, ...props }: ButtonProps, ref: ForwardedRef<HTMLInputElement> ) => {

    return (
        <div className="flex flex-col gap-0">
            <div className={cn("relative flex mt-2 text-baltic-sea-200 bg-baltic-sea-900/50 border-transparent border-b-2 focus-within:border-primary-400", className)}>
                <input
                    ref={ref}
                    placeholder=' '
                    className="w-full py-0 peer appearance-none bg-transparent outline-none border-0 z-10 focus:ring-0"
                    {...props} />
                <label htmlFor={props.id}
                    className={cn('absolute top-0 pl-3 text-sm z-0 -translate-y-[18px] text-baltic-sea-950 transition peer-placeholder-shown:text-primary-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base', labelColor)}
                >{label}</label>
            </div>
            {error && <span className="text-xs font-thin text-red-600">{error}</span>}
        </div>
    )

})

export default Input