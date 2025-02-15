"use client"

import React from "react";
import Image from "next/image";
import img1 from "../../assets/work/img1.svg";
import { Hanken_Grotesk } from "next/font/google";
import BuyingProcess from "@/app/components/work/browse";

export default function PlatformSteps() {
    return (
      <>
      <div className="relative w-full h-screen flex items-center justify-center bg-black">
        <Image
          src={img1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative text-center text-white">
          <h2 className="text-5xl max-w-xl font-medium mb-16" style={{fontFamily: "Hanken Grotesk"}}>
            STEPS TO USE THE PLATFORM EFFICIENTLY.
          </h2>
          <div className="flex space-x-4 justify-center">
            <button style={{fontFamily: "Hanken Grotesk"}} className="px-6 py-3 bg-[#A50705] text-white rounded-full text-lg font-medium shadow-md hover:bg-red-800 transition">
              SELL NOW
            </button>
            <button style={{fontFamily: "Hanken Grotesk"}} className="px-6 py-3 bg-[#A50705] text-white rounded-full text-lg font-medium shadow-md hover:bg-red-800 transition">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <BuyingProcess/>
      </>
    );
  }
  