"use client";
import { colors } from "@/lib/theme";
import { useTheme } from "@/lib/ThemeProvider";


export default function SplitHero() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="flex flex-1 w-full flex-col p-1 sm:p-0 border-y">
      <div className="flex flex-col ">
        <div className="flex w-full h-full flex-col-reverse sm:flex-row">
          <div className="flex flex-4  h-75 w-full p-2 px-5 pb-10 flex-col">
            <p className="flex w-full text-4xl">
              {"Jake's showcase"}
            </p>
            <p className= " text-2xl pt-2">Tech Stack</p>
            <ul className=" list-disc pl-7">
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>FastAPI</li>
              <li>PostgreSQL</li>
            </ul>
            <div className="flex flex-row pt-5 gap-x-2">
              <button className="dark:bg-white dark:text-black text-white bg-black px-4 py-2 shadow-lg hover:scale-105  hover:cursor-pointer">
                Contact Me
              </button>
              <a
                href="https://github.com/JakeJSPlusPlus/"
                className="dark:bg-white dark:text-black text-white bg-black border px-4 py-2 shadow-lg hover:scale-105 "
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="flex flex-col flex-6 items-center justify-center w-full bg-[url('/stars.svg')] bg-cover overflow-hidden">
            <div style={{ backgroundImage: `linear-gradient(120deg, ${colors[theme ?? 0]?.pri}, ${colors[theme ?? 0]?.acc})` }}
              className="flex items-center justify-center w-full h-full min-h-50 opacity-40 bg-blend-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
