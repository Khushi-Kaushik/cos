"use client"

import React from "react";
import Image from "next/image";
import img1 from "../../assets/product/img1.svg";
import AuthenticationSteps from "../../components/product/work";
import ItemVerificationBenefits from "../../components/product/verification";
import Sectiontwo from "../../components/product/parallelcards";


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
      <div style={{fontFamily: "Hanken Grotesk"}} className="relative font-semibold text-2xl flex items-center justify-center p-16">How It Works</div>
      <AuthenticationSteps/>
      <ItemVerificationBenefits/>
      <Sectiontwo/>
      </>
    )
}