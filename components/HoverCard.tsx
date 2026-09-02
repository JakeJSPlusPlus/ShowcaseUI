"use client";

import { colors } from "@/lib/theme";
import { useTheme } from "@/lib/ThemeProvider";

const words = "This is a few words to talk about my product";

export default function HoverCard() {
  const [theme] = useTheme();
  const color = colors[theme ?? 0];

  return (
    <div
      className={"flex mx-10 rounded-lg hover:font-bold hover:scale-105 "}
      style={{ backgroundColor: color.acc }}
    >
      <div className="absolute flex opacity-100 pt-1 pl-1 w-60 h-60 items-center overflow-clip text-3xl text-center text-white">
        {words}
      </div>
      <div
        className={
          "flex static w-60 opacity-30 rounded-lg bg-radial from-black via-black to-white"
        }
      ></div>
    </div>
  );
}
