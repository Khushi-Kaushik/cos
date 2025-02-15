"use client";
import React from "react";
import Image from "next/image";
import search from "../../assets/message/search.svg";

export const Search = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-300 relative">
        <input
          type="text"
          placeholder="Search a member"
          className="w-full p-2 pl-10 rounded text-lg bg-[#F4F4F4] focus:outline-none"
        />
        <Image
          src={search}
          alt="Search Icon"
          className="absolute top-1/2 left-6 transform -translate-y-1/2 w-6 h-6 text-gray-400"
        />
      </div>

      <div className="flex-1 p-8 overflow-auto ">
      </div>
    </div>
  );
};
