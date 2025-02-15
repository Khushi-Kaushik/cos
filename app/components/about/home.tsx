"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../assets/aboutus/img1.svg";



const Home: React.FC = () => {
  return (
    <div className="container">
      <Image src={img1} alt="Cycle of Samsara Image" width={1280} height={588} />

      <div className="flex flex-col justify-center items-center h-screen text-center">
  <h1 className="text-4xl text-[#A50705]">Cycle of Samsara</h1>
  <p className="mt-12 font-light text-2xl text-black max-w-xl">
    is India’s first dedicated platform for redefining pre-loved fashion,
    specializing in luxury, occasion wear, and wedding outfits. We give
    timeless clothing a second life, saving valuable resources and
    reducing fashion waste, one outfit at a time.
  </p>
</div>
      </div>
  )}
  export default Home;