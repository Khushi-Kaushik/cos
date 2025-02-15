"use client";
import React from "react";
import Image from "next/image";
import img2 from "../../assets/aboutus/img2.svg";
import img3 from "../../assets/aboutus/img3.svg";
import { Hanken_Grotesk } from "next/font/google";



const Sectiontwo: React.FC = () => {
  return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-white">
          <div className="relative w-full ">
          <div className="relative mt-6 ">
            <Image
              src={img2}
              alt="Our Mission Image"
              className="object-cover h-[667px] w-[631px]"
              
            />
          </div>
          
                <div className="absolute inset-0 justify-center items-center text-white p-4">
                  <div className="bg-white bg-opacity-100 w-[427px] h-[226px] mt-96">
                <h2 style={{fontFamily : "Hanken Grotesk"}} className="text-3xl font-semibold text-[#A50705] ml-8 pt-12">Fees and Process?</h2>
                <p className="text-black font-regular w-[342px] h-[96px] text-md ml-8 mt-4 ">

                Authentication fees are paid directly to the
chosen authenticator and vary depending
on the item's value, brand, and category.</p>      </div>
    </div>
          </div>
          
        </div>

        {/* Vision Section */}
        <div className="relative w-full">

        <div className="relative mt-6 ">
            <Image
              src={img3}
              alt="Our Mission Image"
              className="object-cover h-[667px] w-[631px]"
              
            />
        <div className="absolute inset-0 justify-center items-center text-white p-4">
                  <div className="bg-white bg-opacity-100 w-[427px] h-[226px] mt-96">
                <h2 style={{fontFamily : "Hanken Grotesk"}} className="text-3xl font-semibold text-[#A50705] ml-8 pt-12">Failed Verificatons?</h2>
                <p className="text-black font-regular w-[287px] h-[96px] text-md ml-8 mt-4">

                Items that fail authentication will be
returned to the seller, and the listing
will not display the “AUTHENTIC” tag.</p>      </div>
    </div>
    </div>
    </div>
</div>
  )}

  export default Sectiontwo;