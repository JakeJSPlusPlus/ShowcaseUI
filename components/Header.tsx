import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="flex h-15 items-center justify-end w-full py-5 px-2 border-b border-gray-600 gap-x-2">
        <div className="flex items-center w-fit h-fit "></div>
        <div className="flex items-center rounded-full w-8 h-8 ">
          <Image
            src="/globe.svg"
            alt="placeholder"
            className="w-fit h-fit rounded-full"
            width={36}
            height={36}
          />
        </div>
      </header>
    </>
  );
}
