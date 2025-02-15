"use client";
import React, { useState } from "react";
import { Profile } from "@/app/components/message/profiles";
import Search  from "@/app/components/message/three_search";
import { Input } from "@/app/components/message/window1_input";
import { Message } from "@/app/components/message/two_message";
import { Chat } from "@/app/components/message/window1_chat";


type ChatItem = {
  name: string;
  time: string;
  message: string;
  avatar: string;
};


const Messaging: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<ChatItem | null>(null);
  
  
  return (
    <div className="flex flex-col bg-white h-screen">
      <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[2fr_3fr] min-h-screen p-12">
        <Profile />

        <div className="flex w-full gap-2 border-b border-b-zinc-400">
          <div className="flex justify-center align-center pt-4 flex-grow">
             <Message/>
          </div>
        </div>

        <div className="w-full flex flex-col divide-y divide-gray-400 border-b pb-16 border-b-zinc-400 border-r border-r-zinc-400">
        <Chat onSelectChat={(chat) => setSelectedChat(chat)} />
          
        </div>

        <div className="flex flex-col">
          <div className="h-full flex flex-col">
            
          <Search/>

          </div>

          <div className="flex-grow"></div>
        </div>

        <div className="blank border-b border-b-zinc-400 border-r border-r-zinc-400 "></div>

        <div className=" border-b border-b-zinc-400 border-t border-t-zinc-400">
        
              <Input />
    
        </div>
        </div>
    </div>
  );
};

export default Messaging;
