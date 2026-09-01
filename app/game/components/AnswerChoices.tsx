"use client"

import {Dispatch, SetStateAction} from "react";

interface AnswerChoiceProps {
    labels: string[]
    selectedAnswer: number | null
    setSelectedAnswerAction: Dispatch<SetStateAction<number | null>>
    isRevealed: boolean
    correctAnswer: number
}

interface AnswerButtonProps {
    label: string
    setSelectedAnswerAction: Dispatch<SetStateAction<number | null>>
    id: number
    selectedAnswer: number | null
    isRevealed: boolean
    correctAnswer: number
}


export function AnswerChoices({labels, selectedAnswer, setSelectedAnswerAction, isRevealed, correctAnswer}: AnswerChoiceProps) {
    return (
        <div className={"mt-10 justify-center items-center w-full h-60 xl:h-70"}>
            <div className={"grid grid-cols-2 gap-4"}>
                {labels.map((label, index) => (
                    <AnswerButton key={index} id={index} label={label} setSelectedAnswerAction={setSelectedAnswerAction} selectedAnswer={selectedAnswer} isRevealed={isRevealed} correctAnswer={correctAnswer}/>
                    ))
                }
            </div>
        </div>
    )
}

function AnswerButton({label, setSelectedAnswerAction, id, selectedAnswer, isRevealed, correctAnswer}: AnswerButtonProps) {
  const getColor = () => {
    if (correctAnswer === id && isRevealed) return "#248f40"
    if (selectedAnswer === null) return "oklch(90.3% 0.076 319.62)"
    if (selectedAnswer === id) {
      if (isRevealed) {
        if (correctAnswer !== id ) return "#a61e22"
      }
      return "#b09d5a" //selected answer, not revealed
    }
    return "#6e6a7e" //not selected, not revealed, but in disabled state
  }


  return (
        <div style={{backgroundColor:
                getColor()
                }} className={"h-20 w-full  rounded-xl"}>
            <button
                onClick={() => setSelectedAnswerAction(id)}
                className={"flex h-full w-full justify-center items-center text-xl text-black "}>{label}</button>
        </div>
    )
}
