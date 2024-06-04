"use client"

import MainScreen from "@/components/MainScreen";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col bg-gradient-to-t from-white to-blue-300">
        <div className="hidden md:block">
          <NavBar/>
        </div>
        <div className="flex flex-row">
        <SideBar/>
        <MainScreen/>
        </div>
      </div>
    </div>
  );
}
