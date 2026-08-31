"use client";
import "../app/animations.css"
import { useState, useEffect } from "react";
import { Toggler } from "./Toggler";
import { ThemeControlButton } from "./ThemeControlBtn";
import LoginCard from "./LoginCard";
import IconButtonBox from "./ButtonBox";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MyUI() {
  const [lightMode, setLightMode] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", lightMode ? "light" : "dark");
    localStorage.setItem("theme", lightMode ? "light" : "dark");
  }, [lightMode])

  return (
    <div className="flex justify-items-stretch items-center gap-5">
      <div className={"absolute right-10 "}>
        <Toggler checked={lightMode} setChecked={setLightMode} /></div>
      <div className="h-15">
        <div className="flex">
          <ThemeControlButton />
        </div>
        <div className="flex flex-row">
          <div className="flex">
            <LoginCard />
          </div>
          <div className="grid grid-cols-2 justify-center bg-linear-30 from-stone-200 to-stone-500 border-3 border-black items-center w-full h-60 mt-10 rounded-lg ml-10">
            <IconButtonBox icon={<FaPlay size={30} className={"stroke-black stroke-10 fill-white items-center justify-center hover:stroke-20 hover:scale-110"} />} />
            <IconButtonBox icon={<FaPause size={30} className={"stroke-black stroke-10 fill-white items-center justify-center hover:stroke-20 hover:scale-110"} />} />
            <IconButtonBox icon={<FaChevronLeft size={30} className={"stroke-black stroke-10 fill-white items-center justify-center hover:stroke-20 hover:scale-110"} />} />
            <IconButtonBox icon={<FaChevronRight size={30} className={"stroke-black stroke-10 fill-white items-center justify-center hover:stroke-20 hover:scale-110"} />} />

          </div>
        </div>
      </div>
      </div>
  );
}
