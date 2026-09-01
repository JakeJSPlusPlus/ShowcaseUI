"use client";
import { useState, useTransition } from "react";


const CardOptions = ["Green", "Red", "Blue", "Yellow"];

export function Cards() {
  const [cardOption, setCardOption] = useState<number | null>(null);

  return (
    <div className="block flex-row justify-center w-full">
      <div className="flex">
        <div className="flex flex-row justify-center items-end">
          <Card title="Green" setActive={() => setCardOption(0)} selected={cardOption === 0} />
          <Card title="Red" setActive={() => setCardOption(1)} selected={cardOption === 1} />
          <Card title="Blue" setActive={() => setCardOption(2)} selected={cardOption === 2} />
          <Card title="Yellow" setActive={() => setCardOption(3)} selected={cardOption === 3} />
        </div>
      </div>

    </div>
  );
}

interface CardProps {
  title: string;
  setActive: () => void
  selected?: boolean
}

export function Card({ title, setActive, selected}: CardProps) {
  const inner = <span className="w-full text-4xl justify-center flex ">{title}</span>
  if (title === "Green") {
    return (
      <div id={title} onClick={setActive} className="static">
        {!selected ? <div className={`flex w-70 h-110 rounded-lg bg-emerald-500 z-5 absolute bottom-10 -rotate-10 left-130 hover:bottom-30`}
        >{inner}</div> : <div className={`flex w-screen h-screen rounded-lg bg-emerald-500 z-4`} >
          {inner}
        </div>
        }
      </div>
    );
  }
  if (title === "Red") {
    return (
      <div id={title} onClick={setActive}>
        {!selected ? <div className={`flex w-70 h-110 rounded-lg bg-red-500 z-4 absolute bottom-10 -rotate-5 left-150 hover:bottom-30`}
        >{inner}</div> : <div className={`flex w-screen h-screen rounded-lg bg-red-500 z-1`} >
          {inner}
        </div>
        }
      </div>
    );
  }
  if (title === "Blue") {
    return (
      <div id={title} onClick={setActive}>
        {!selected ? <div className={`flex w-70 h-110 rounded-lg bg-blue-500 z-3 bottom-10 absolute rotate-5 right-150 hover:bottom-30`}
        >{inner}</div> : <div className={`flex w-screen h-screen rounded-lg bg-blue-500 z-1`} >
          {inner}
        </div>
        }
      </div>
    );
  }
  if (title === "Yellow") {
    return (
      <div id={title} onClick={setActive}>
        {!selected ? <div className={`flex w-70 h-110 rounded-lg bg-yellow-500 z-2 bottom-10 absolute rotate-10 right-130 hover:bottom-30`}
        >{inner}</div> : <div className={`flex w-screen h-screen rounded-lg bg-yellow-500 z-1`} >
          {inner}
        </div>
        }
      </div>
    );
  }
  return (
    <div id={title} onClick={setActive}>
      <div className={`flex w-70 h-110 rounded-lg `}
      >
      <span className="w-full text-4xl justify-center flex ">{title}</span>

      </div>
    </div>
  );
}
