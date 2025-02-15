"use client";
import React from "react";
import Image from "next/image";
import cross from "../../assets/cart/cross.svg";
import { FiInfo } from "react-icons/fi";


export const Message = () => {
  return (
    <div>
    <div className="flex items-center justify-between ">
      <h2 className="text-2xl ml-64 font-medium text-[#A50705]">Khyati</h2>
      <span className="ml-56 flex gap-4"> 
        <FiInfo className="w-[26px] h-[26px] font-light text-lg cursor-pointer" />
        <Image src={cross} alt="Close" className="w-[16px] h-[18.4px] mt-1 cursor-pointer" />
      </span>
    </div>
    
  </div>
  
  )
}