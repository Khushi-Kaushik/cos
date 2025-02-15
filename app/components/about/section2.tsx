"use client";
import React from "react";
import Image from "next/image";
import img2 from "../../assets/aboutus/img2.svg";
import img3 from "../../assets/aboutus/img3.svg";



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
                <h2 className="text-3xl font-Hanken Grotesk text-[#A50705] ml-8 pt-12">Our Mission</h2>
                <p className="text-black font-poppins w-[282px] h-[96px] text-md ml-8 mt-4 ">

                Is to make mindful consumption
accessible and sustainable
through a secure, curated platform
for secondhand fashion.</p>      </div>
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
                <h2 className="text-3xl font-Hanken Grotesk text-[#A50705] ml-8 mt-4 pt-12">Our Vision</h2>
                <p className="text-black font-poppins w-[282px] h-[96px] text-md ml-8 mt-4">

                is to lead India’s transition to a
circular fashion economy while
inspiring global change to
combat climate change.</p>      </div>
    </div>
    </div>
    </div>
</div>
  )}

  export default Sectiontwo;