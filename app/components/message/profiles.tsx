"use client";
import React from "react";
import Image from "next/image";
import search from "../../assets/message/search.svg";

export const Profile = () => {
  return (
    <>
      <div>
      <div className="flex justify-between border-b border-b-zinc-400 border-r border-r-zinc-400">
        <div className="flex w-full justify-between p-4">
      <h2 className="text-3xl font-medium">INBOX</h2>
          <button className="text-gray-500">
            <Image
              src={search}
              alt="New Message Icon"
              className="h-[25px] w-[25px]"
            />
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

        
