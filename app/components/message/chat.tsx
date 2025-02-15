"use client";
import React from "react";
import Image from "next/image";
import { chatList } from "../../components/message/list";

export const Chat = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="pl-4 pr-14 space-y-4 w-full">
          <div className="flex gap-2 pt-4 pb-2 ml-2">
            <button className="px-6 py-2 text-sm bg-gray-300 text-black rounded">
              All
            </button>
            <button className="px-4 py-2 text-sm border border-black text-black rounded">
              Unread
            </button>
          </div>
          {chatList.map((chat, index) => (
            <div
              key={index}
              className="flex items-center gap-3 pb-2 border-b border-gray-300"
            >
              <Image
                src={chat.avatar}
                alt="Avatar"
                className="w-[48px] h-[48px] rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">{chat.name}</h3>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>
                <p className="text-xs">{chat.message}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      
    </>
  );
};
