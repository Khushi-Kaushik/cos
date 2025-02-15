
"use client";
import React from "react";
import Image from "next/image";
import img4 from "../../assets/aboutus/img4.svg";



const Story: React.FC = () => {
  return (
    <>
<div className="mb-20 mt-24">
<h2 className="text-center text-4xl mb-16">Our Story</h2>
<div className="grid md:grid-cols-2 gap-12 w-full h-full mb-8 items-center">
  <div className=" w-[666px] h-[566px] ">
    <Image
      src={img4}
      alt="Our Mission Image"
      className="w-full object-cover"
      
    />
  </div>
  <div className="max-w-lg ml-16 h-full">
    <h3 className="text-3xl font-poppins  w-[455px] h-[61px]">Every Outfit Has a Story, Every Choice Makes an Impact</h3>
    <p className="text-black leading-relaxed max-w-xs font-poppins mt-24 text-lg">
      It began at a small London pop-up, where we showcased upcycled wedding wear and premium outfits. The
      response was incredible - people loved finding timeless pieces while supporting sustainability. This isn't
      just about fashion; it's about a community that values impact and elegance.
    </p>
    <p className="mt-12 text-lg text-black max-w-xs leading-relaxed">
      Join us in creating a future where style meets sustainability, one outfit at a time.
    </p>
  </div>
</div>
</div>
<div className="bg-white py-12 mb-16 text-center">
      <h2 className="text-6xl font-normal text-[#A50705] mb-8 font-Hanken Grotesk">JOIN THE CYCLE</h2>
      <div className="max-w-md gap-8 mx-auto flex border-b border-black justify-between">
        <input type="email" placeholder="Get on the list" className="rounded-none border-gray-300" />
        <div className=" py-2">→</div>
      </div>
    </div>
</>
  )
}

export default Story;