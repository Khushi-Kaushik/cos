"use client";
import React from "react";
import Image from "next/image";
import cross from "../../assets/cart/cross.svg";

export const Message = () => {
  return (
    <div>
    <div className="flex items-center justify-between ">
      <h2 className="text-2xl ml-52 font-medium">New Message</h2>
      <span className="ml-52"> 
        <Image src={cross} alt="Close" className="w-[16px] h-[18.4px] cursor-pointer" />
      </span>
    </div>
  </div>
  
  )
}