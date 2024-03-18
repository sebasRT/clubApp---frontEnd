import { Tailwind } from "@react-email/components"
import { ReactNode } from "react"

const TailwindWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Tailwind>
            {children}
        </Tailwind>
    )
}

export default TailwindWrapper 