"use client"

interface TimerProps {
    time: number
    isPlaying: boolean
    score: number | null,
}

export function Timer({time, score}: TimerProps) {
    const widthPercent = time * 100/15
    const widthElapsed = (15 - time) * 100/15
    return (
        <div className={"flex p-3  w-9/10 h-12 rounded-4xl justify-center items-center bg-fuchsia-200 border-fuchsia-400 border-2 mt-10 justify-items-center"}>
            <div className={"text-black text-md w-10 "}>{score ? ((15 - score) * 100/15).toFixed(0) : (widthElapsed > 0 ? widthElapsed : 0).toFixed(0)}</div>
                <div style={{width: `${widthPercent}%`, borderRadius: (time>=15 ? '0.5rem' : '0.5rem 0 0 0.5rem')}} className={` h-full bg-accent`} >
            </div>
                <div style={{width: `${widthElapsed}%`, borderRadius: (time<=0 ? ' 0.5rem' : '0 0.5rem  0.5rem 0')}} className={`h-full bg-fuchsia-400` } >
            </div>
        </div>
    )
}
