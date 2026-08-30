"use client";
import { useState, MouseEvent, useEffect, useRef, useTransition } from "react";

type ToggleProps = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

export default function MyUI() {
  const [lightMode, setLightMode] = useState(false);
  return (
    <div className="flex justify-items-stretch items-center gap-5">
      <Toggle />
      <StyledButtonHighlight />
      <div className="h-15">
        <StyledButtonClick />
      </div>
    </div>
  );
}
function Toggle() {
  const [checked, setChecked] = useState(false);
  const [isPending, startAnimating] = useTransition();

  const onToggle = () => {
    startAnimating(() => {
      setChecked(!checked);
    });
  };

  return (
    <label className=" relative inline-block w-60 h-34">
      <div onClick={onToggle} className="w-12 h-6 bg-gray-400 rounded-full">
        <span
          id={"toggle"}
          style={{ left: `${checked ? 24 : 0}px` }}
          className="absolute bg-blue-400 h-6 w-6 hover:cursor-pointer transition duration-400 ease-in-out checked:translate-x-6 top-0 left-0 rounded-full"
        />
      </div>
    </label>
  );
}

function StyledButtonHighlight() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        setClicked(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [clicked]);
  return (
    <button
      className="flex justify-start bg-fuchsia-800 text-white px-2 py-4 rounded text-shadow-lg/30 text-2xl transform delay-50 hover:cursor-pointer duration-300 hover:scale-110 "
      onClick={handleClick}
      style={{
        backgroundColor: clicked ? "oklch(74% 0.238 322.16)" : "#8a0194",
      }}
    >
      Click this
    </button>
  );
}

function StyledButtonClick() {
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(0);
  const colors = [
    "oklch(76.9% 0.188 70.08)",
    "oklch(72.3% 0.219 149.579)",
    "oklch(69.6% 0.17 162.48)",
    "oklch(71.5% 0.143 215.221)",
    "oklch(58.8% 0.158 241.966)",
    "oklch(51.1% 0.262 276.966)",
    "oklch(55.8% 0.288 302.321)",
    "oklch(59.2% 0.249 0.584)",
    "oklch(52% 0.105 223.128)",
    "oklch(70.5% 0.213 47.604)",
  ];
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = e;
    setClicked(!clicked);
    setIndex(Math.floor((index + 1) % colors.length));
    currentTarget.style.backgroundColor = colors[index];
  };
  return (
    <div
      className="relative justify-start text-white bg-fuchsia-600 h-15 px-2 py-4 rounded text-shadow-lg/30 text-2xl transform delay-50 duration-300 hover:cursor-pointer"
      onMouseDown={handleClick}
    >
      {"Click for different colors"}
    </div>
  );
}

function LoginCard() {
  return <div></div>;
}
