"use client";

import { useState } from "react";
import { colors } from "@/lib/theme";
import { useTheme } from "@/lib/ThemeProvider";

export default function LoginCard() {
  const [isNewUser, setIsNewUser] = useState(false)
  const [theme] = useTheme()
  const submitForm = () => {

  }
  return <div style={{ backgroundColor: colors[theme ?? 0].pri, borderColor: colors[theme ?? 0].acc }}
    className="flex flex-col rounded-lg px-10 py-5 border-3">
    <form action={submitForm}>
      <div className="flex flex-col py-1">
        <label className="text-white w-40 text-shadow-lg/30">Username</label>
        <input placeholder={"Enter your username"}
          type="username"
          className=" pl-1 border-2 rounded-md bg-white border-black hover:cursor-text text-black" />
      </div>
      <div className="flex flex-col py-1">
        <label className="text-white w-40 text-shadow-lg/30">Password</label>
        <input placeholder={"Enter your password"}
          type="password"
          className=" pl-1 border-2 rounded-md bg-white border-black hover:cursor-text text-black" />
      </div>
      {isNewUser &&
        <div className="flex flex-col py-1">
          <label className="flex text-white w-40">Confirm Password</label>
          <input placeholder={"Confirm password"}
            type="password"
            className=" pl-1 border-2 rounded-md bg-white border-black hover:cursor-text text-black" />
        </div>}
      <div className="flex flex-col w-full py-1 justify-end items-end">
        <button
          style={{ backgroundColor: colors[theme ?? 0].acc, borderColor: colors[theme ?? 0].tri }}
          onClick={() => setIsNewUser(!isNewUser)}
          className="flex w-fit border-2 rounded-md px-2 py-1 hover:cursor-pointer">
        {isNewUser ? <>Sign Up</> : <>Login</>}
        </button>
      </div>
      <div className="flex justify-center items-center pt-4">
        <span>{isNewUser ? "Already have an account?" : "Don't have an account?"}</span>
        <button className="flex px-1 underline hover:cursor-pointer" onClick={() => setIsNewUser(!isNewUser)}>{isNewUser ? "Login" : "Sign Up"}</button>
      </div>
    </form>
  </div>;
}
