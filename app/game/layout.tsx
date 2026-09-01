import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode}) {
    return (

            <div className="flex flex-col justify-center items-center bg-blue-950">
                {children}
            </div>

    )
}
