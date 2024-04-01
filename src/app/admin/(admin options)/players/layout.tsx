import { ReactNode, Suspense } from "react"


export function playersLayout({ children}: { children: ReactNode }) {

    return (
        <div className="size-full">
            {children}
        </div>
    )
}

export default playersLayout