"use client";
import React from "react";
import img1 from "../../assets/helpcenter/img1.svg";
import Image from "next/image";

export default function HelpCentre() {
  return (
    <div className="flex flex-wrap md:flex-nowrap pt-8 w-full overflow-hidden">
    <div className="w-full md:w-[50%]">
      <Image
        src={img1}
        alt="Hanging clothes in forest"
        className="w-full h-auto object-cover"
      />
    </div>

    <div className="w-full md:w-[50%] bg-[rgba(217,217,217,0.2)] p-6 md:p-8 text-center md:text-left overflow-hidden">
      <h2 className="text-lg md:text-2xl mb-4 mt-10 md:mt-24 mx-auto md:mx-0 max-w-md">
        Welcome to{" "}
        <p className="text-[#A50705] text-2xl md:text-4xl">CYCLE OF SAMSARA!</p>
      </h2>
      <p className="text-sm md:text-base text-black leading-relaxed max-w-xs mx-auto md:ml-0">
        Cycle of Samsara (COS) provides a curated, peer-to-peer marketplace
        for buying and selling pre-loved fashion. By accessing or using our
        platform, you agree to these Terms and Conditions. Please read them
        carefully.
      </p>
    </div>
  </div>
  );
}



