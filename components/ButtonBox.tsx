"use client";

import { useTheme } from "@/lib/ThemeProvider";
import { colors } from "@/lib/theme";

interface IconButtonBoxProps {
  icon: React.ReactNode;
}

export default function IconButtonBox({ icon }: IconButtonBoxProps) {
  const [theme] = useTheme();
  return (
    <div className={"flex justify-center items-center"}>
      <div className={"grid justify-center items-center w-20 h-20 m-4 border border-black rounded-full hover:cursor-pointer scale-80 hover:opacity-90"}
          style={{background: `radial-gradient(${colors[theme ?? 0].tri}, ${colors[theme ?? 0].pri}, ${colors[theme ?? 0].acc})`}}
      >
        <div className="flex col-start-1 row-start-1 justify-center items-center">
          {icon}
        </div>
      </div>
    </div>
  );
}
