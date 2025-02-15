"use client";
import React from "react";
import Image from "next/image";
import search from "../../assets/message/search.svg";
import cross from "../../assets/cart/cross.svg";
import img1 from "../../assets/message/img1.svg";
import location from "../../assets/profile/location.svg";
import lastseen from "../../assets/profile/lastseen.svg";

const userData = [
  {
    id: 1,
    name: "Khyati",
    reviews: 50,
    location: "Kolkata, India",
    lastSeen: "3 hours ago",
    profilePicture: img1,
  },
];

type ChatItem = {
  name: string;
  time: string;
  message: string;
  avatar: string;
};

// Define the type for Message component props
interface MessageProps {
  chatData: ChatItem;
}

export const Searchone : React.FC<MessageProps> = ({ chatData }) => {
  return (
    <div className="flex flex-col h-full ">

      <div className="p-4 border-b border-gray-300 relative ">
        <input
          type="text"
          placeholder="Search a member"
          className="w-full p-2 pl-10 rounded text-sm bg-[#F4F4F4] focus:outline-none"
        />
        <Image
          src={search}
          alt="Search Icon"
          className="absolute top-1/2 left-8 transform -translate-y-1/2 w-4 h-4 text-gray-400"
        />
      </div>


      



      <div className="flex ml-4 bg-[#F4F4F4] h-full ">
        {userData.map((user) => (
          <div key={user.id} className="pl-4 flex">
            <Image
              src={user.profilePicture}
              alt="Profile Picture"
              className="w-12 h-12 rounded-full mt-8 mr-4"
            />

            <div className="flex-1 pt-8 max-w-xs overflow-auto">
              <div className="flex items-start gap-2 p-2 border border-gray-300 rounded">
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium">{`Hi, I am ${user.name}`}</h3>
                  <p className="text-[#A50705] text-sm ">{`${user.reviews} Reviews`}</p>
                  <div className=" items-center ml-2 text-sm text-gray-500 gap-2">
                    <span className="flex gap-2">
                      <Image
                        src={location}
                        alt="Location Icon"
                        className="w-[16px] h-[16px] mt-1"
                      />
                      <p className="text-black">{user.location}</p>
                    </span>
                    <span className="flex gap-2">
                      <Image
                        src={lastseen}
                        alt="Last Seen Icon"
                        className="w-[16px] h-[16px] "
                      />
                      <p className="text-black">Last seen {user.lastSeen}</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
