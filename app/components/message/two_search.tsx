"use client";
import React from "react";
import Image from "next/image";
import pro from "../../assets/message/pro.svg";
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

export const Search = () => {
  return (
    <>
      <div className="border-b border-gray-400">
        {/* Product Info */}
        <div className="flex items-center p-2 space-x-4">
          {/* Product Image */}
          <div className="border-b border-gray-300 rounded-md overflow-hidden">
            <Image src={pro} alt="Product" className="w-[80px] h-[71px]" />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h3 className="text-black font-semibold text-sm">Prada 3Q</h3>
            <p className="text-gray-600 text-sm">Rs 10000/-</p>
          </div>

          {/* Buttons */}
          <div className="flex space-x-2">
            <button className="border border-gray-400 text-black w-[144px] h-[50px] text-sm px-3 py-2 rounded-md">
              MAKE AN OFFER
            </button>
            <button className="bg-[#A50705] text-white text-sm px-4 py-2 rounded-md">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 p-8 overflow-auto bg-[#F4F4F4]">
        <div className="flex bg-[#F4F4F4] h-full ">
          {userData.map((user) => (
            <div key={user.id} className=" flex">
              <Image
                src={user.profilePicture}
                alt="Profile Picture"
                className="w-12 h-12 rounded-full mr-2"
              />

              <div className="flex-1 max-w-xs overflow-auto">
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
    </>
  );
};
