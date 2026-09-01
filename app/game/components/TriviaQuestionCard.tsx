"use client"
export function TriviaQuestionCard({label}: {label: string }){
    return (
        <>
            <div className={"flex w-full bg-fuchsia-200 h-60 rounded-xl justify-center items-center " +
                "text-text-dark text-xl border-fuchsia-400 border-4"}>{label}</div>
        </>
    )
}
