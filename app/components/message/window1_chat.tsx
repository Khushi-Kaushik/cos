"use client";
import React from "react";
import Image from "next/image";
import { chatList } from "../../components/message/list";

// Define the type for chat item
type ChatItem = {
  name: string;
  time: string;
  message: string;
  avatar: string;
};

// Define the type for props
interface ChatProps {
  onSelectChat: (chat: ChatItem) => void;
}

export const Chat: React.FC<ChatProps> = ({ onSelectChat }) => {
  return (
    <div className="flex flex-col divide-y divide-gray-300">
      {chatList.map((chat, index) => (
        <div
          key={index}
          className="flex items-center p-4 cursor-pointer hover:bg-gray-100"
          onClick={() => onSelectChat(chat)} 
        >
          <Image
            src={chat.avatar}
            alt={chat.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-4 flex-1">
            <div className="flex justify-between">
              <p className="text-lg font-medium">{chat.name}</p>
              <p className="text-sm text-gray-500">{chat.time}</p>
            </div>
            <p className="text-sm text-gray-500">{chat.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
