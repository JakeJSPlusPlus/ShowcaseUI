"use client";
import "../app/animations.css";
import { useState, useEffect } from "react";
import { Toggler } from "./Toggler";
import { ThemeControlButton } from "./ThemeControlBtn";
import LoginCard from "./LoginCard";
import IconButtonBox from "./ButtonBox";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HoverCard from "./HoverCard";

export default function MyUI() {
  const [lightMode, setLightMode] = useState(false);

  //use effect to update the data-theme since it is technically external to the component
  // SIDE NOTE: Is there a better hook?
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      lightMode ? "light" : "dark",
    );
    //update the cache/local storage to remember the theme preference
    localStorage.setItem("theme", lightMode ? "light" : "dark");
  }, [lightMode]);

  return (
    <div className="flex justify-items-stretch items-center gap-5 mb-30">
      <div className={"flex absolute right-10 flex-col"}>
        <label>Toggle Light Mode</label>
        {/* Two state slider button to toggle light mode */}
        <Toggler checked={lightMode} setChecked={setLightMode} />
      </div>
      <div className="h-15">
        <div className="flex">
          {/* Button to switch color themes, colors have 3 children pri, acc, and tri */}
          <ThemeControlButton />
        </div>
        <div className="flex md:flex-row flex-col mt-10">
          <div className="flex">
            {/* Example login card NOT FUNCTIONAL */}
            <LoginCard />
          </div>

          <div className="grid grid-cols-4 md:mt-0 mt-10 justify-center bg-linear-30 from-stone-200 to-stone-500 border-3 border-black items-center w-fit h-60 rounded-lg ml-10">
            {/* List of fun video player/navigation buttons */}
            <IconButtonBox
              icon={
                <FaPlay
                  size={30}
                  className={
                    "stroke-black stroke-10 fill-white items-center justify-center hover:stroke-20 hover:scale-110"
                  }
                />
              }
            />
            <IconButtonBox
              icon={
                <FaPause
                  size={30}
                  className={
                    "stroke-black stroke-10 fill-white items-center justify-center hover:stroke-20 hover:scale-110"
                  }
                />
              }
            />
            <IconButtonBox
              icon={
                <FaChevronLeft
                  size={30}
                  className={
                    "stroke-black stroke-10 fill-white items-center justify-center hover:stroke-20 hover:scale-110"
                  }
                />
              }
            />
            <IconButtonBox
              icon={
                <FaChevronRight
                  size={30}
                  className={
                    "stroke-black stroke-10 fill-white items-center justify-center hover:stroke-20 hover:scale-110"
                  }
                />
              }
            />
          </div>
          {/* Hovering card that just showcases the reactive component */}
          <HoverCard />
        </div>
      </div>
    </div>
  );
}
