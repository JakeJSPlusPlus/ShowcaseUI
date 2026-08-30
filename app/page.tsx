import Header from "@/components/Header";
import SplitHero from "@/components/SplitHero";
import MyUI from "@/components/MyUI";

export default async function Home() {
  return (
    <div className="flex flex-col h-svh items-start font-sans dark:bg-black">
      <Header />
      <main className="flex items-center w-full  flex-col">
        <div className="flex w-full h-full">
          <SplitHero />
        </div>
        <div className="flex w-full justify-start items-center pt-10 px-20">
          <MyUI />
        </div>
      </main>
    </div>
  );
}
