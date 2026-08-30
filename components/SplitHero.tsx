import Image from "next/image";
import Link from "next/link";

export default function SplitHero() {
  return (
    <div className="flex flex-1 w-full flex-col bg-white dark:bg-black p-1 sm:p-0">
      <div className="flex flex-col ">
        <div className="flex w-full h-full flex-col-reverse sm:flex-row">
          <div className="flex flex-4 bg-stone-900 h-75 w-full p-2 px-5 pb-10 flex-col">
            <p className="flex w-full shadow-2xl text-shadow-purple-300 text-4xl">
              {"Jake's showcase"}
            </p>
            <p className="text-white text-2xl pt-2">Tech Stack</p>
            <ul className="text-white list-disc pl-7">
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>FastAPI</li>
              <li>PostgreSQL</li>
            </ul>
            <div className="flex flex-row pt-5 gap-x-2">
              <button className="bg-white text-black px-4 py-2 shadow-lg hover:shadow-xl transition duration-300 hover:cursor-pointer">
                Contact Me
              </button>
              <a
                href="https://github.com/JakeJSPlusPlus/"
                className="bg-white text-black px-4 py-2 shadow-lg hover:shadow-xl transition duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="flex flex-col flex-6 items-center justify-center w-full bg-[url('/stars.svg')] bg-cover overflow-hidden">
            <div className="flex items-center justify-center w-full h-full min-h-50 opacity-80 bg-linear-120 from-violet-950 to-fuchsia-950 bg-blend-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
