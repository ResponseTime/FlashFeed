'use client'
import Main from "./components/Main";
import Right from "./components/Right";
import Sidebar from "./components/Sidebar";
export default function Home() {
  return (
    <>
      <div className="flex container mx-auto my-5">
        <Sidebar />
        <Main />
        <Right />
      </div>
    </>
  );
}
