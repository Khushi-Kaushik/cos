import React from "react";
import Image from "next/image";
import arrow from "../../assets/message/arrow.svg";

export const Input = () => {
  return (
    <div className="p-4 bg-white w-full">
       
      <div className="flex items-center w-full relative">
        
        <input
          type="text"
          placeholder="Write your message here"
          className="w-full p-3 pl-4 bg-[#F4F4F4] rounded-md text-lg"
        />
        <Image
          src={arrow}
          alt="arrow"
          className="w-[23.5px] h-[12.5px] ml-2 text-gray-500 absolute top-1/2 right-6 transform -translate-y-1/2"
        />
                <div className=" border-b border-b-zinc-400 border-t border-t-zinc-400 ">
</div>
      </div>
    </div>
  );
};
