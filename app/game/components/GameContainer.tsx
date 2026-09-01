"use client"
import {useCallback, useEffect, useEffectEvent, useState} from "react"
import {TriviaQuestionCard} from "./TriviaQuestionCard";
import {Timer} from "./Timer";
import {AnswerChoices} from "./AnswerChoices";

const TIMER_INTERVAL_SECONDS = 15
const TOLERANCE = 0.05

type QuestionObject = {
    question: string
    answers: string[]
    correctAnswer: number
}

export function GameContainer() {
    const [time, setTime] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [isRevealed, setIsRevealed] = useState(false)
  const [question, setQuestion] = useState<QuestionObject | null>(null)
  const [timerValue, setTimerValue] = useState<number | null>(null)


  const handleTimerValue = useCallback(() => {
    if (selectedAnswer !== null) {
        setTimerValue(time)
      }
  }, [selectedAnswer])

  const startTimer = async () => {
    const response = await fetch('/api/trivia')
    const data = await response.json()
    setQuestion(data)
    setIsPlaying(true)
  }

    const stopTimer = () => {
        setIsPlaying(false)
    }

    const revealAnswer = () => {
        setIsRevealed(true)
  }

    const timerRunning = useCallback(() => {
        const incrementTimer = () => {
            setTime(time + 0.01)
      }
      handleTimerValue()

        if (isPlaying) {
            incrementTimer()
            if (time >= TIMER_INTERVAL_SECONDS - TOLERANCE) {
                console.log("time is up")
                setTime(TIMER_INTERVAL_SECONDS)
                revealAnswer()
                stopTimer()
            }
        }
        else {
            stopTimer()
        }
    }, [isPlaying, time])

    useEffect(() => {
        if (isPlaying && time <= TIMER_INTERVAL_SECONDS) {
            const interval = setInterval(timerRunning, 10)
            return () => clearInterval(interval)
      }
    }, [isPlaying, timerRunning, selectedAnswer])

    const handleReset = () => {
        setTime(0)
        setIsPlaying(false)
        setIsRevealed(false)
        setSelectedAnswer(null)
        setTimerValue(null)
        setQuestion(null)
    }

    return (
        <div className={"flex flex-col justify-center items-center w-full h-screen"}>
            <TriviaQuestionCard label={question?.question ?? ""}/>
        <Timer time={time} isPlaying={isPlaying} score={timerValue} />
            <AnswerChoices isRevealed={isRevealed} selectedAnswer={selectedAnswer} setSelectedAnswerAction={ setSelectedAnswer} labels={question?.answers ?? []} correctAnswer={question?.correctAnswer ?? 0}/>

        <div className={"flex justify-center items-center gap-4"}>
          <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} onClick={startTimer}>Start</button>
            <button className={"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"} onClick={stopTimer}>Stop</button>
            <button className={"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"} onClick={handleReset}>Reset</button>
        </div>

        </div>
    )
}
