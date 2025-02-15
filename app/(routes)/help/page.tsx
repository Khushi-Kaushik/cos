"use client"
import React from "react";
import HelpCentre from "@/app/components/help/home";
import Start from "@/app/components/help/gettingstarted";


export default function Help() {
  return (
    <>
    <div style={{ fontFamily: "Hanken Grotesk"}} className="text-4xl flex mt-32  justify-center items-center">Help Center</div>
    <div className="justify-center items-center overflow-hidden flex">
        <HelpCentre/>
        </div>
        <div className="justify-center items-center overflow-hidden flex">

        <Start/>
        </div>
        
    </>
  );
}
