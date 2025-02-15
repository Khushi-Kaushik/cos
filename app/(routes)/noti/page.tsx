"use client";
import React from "react";
import img1 from "../../assets/notif/img1.svg";
import Image from "next/image";


const notifications = [
  {
    id: 1,
    user: "Abigail",
    profile: img1,
    time: "33 mins ago",
    message: "has just uploaded a new product:",
    products: ["Red midi dress", "Blue Satin Skirt"],
    isUnread: false,
  },
  {
    id: 2,
    user: "Elizabeth",
    profile: img1,
    time: "5 days ago",
    message: "has just uploaded a new product:",
    products: ["Yellow Bag", "Wedding gown"],
    isUnread: false,
    isActive: true, // Red border for active notification
  },
  {
    id: 3,
    user: "Abigail",
    profile: img1,
    time: "33 mins ago",
    message: "has just uploaded a new product:",
    products: ["Red frock", "Blue Jeans"],
    isUnread: true, // Shows unread dot
  },
  {
    id: 4,
    user: "Vanshika",
    profile: img1,
    time: "33 mins ago",
    message: "has just uploaded a new product:",
    products: ["Red midi dress", "Blue Satin Skirt"],
    isUnread: false,
  },
];

export default function Notifications() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-center text-2xl font-semibold mb-4 pb-4">Notifications</h2>
      <div className="border-gray-300 border-b border-t ">
        {notifications.map((notif, index) => (
          <div
            key={notif.id}
            className={`flex items-start gap-4 p-6 border-b last:border-0 ${
              notif.isActive ? "" : ""
            }`}
          >
            {/* Profile Image */}
            <Image
              src={notif.profile}
              alt={notif.user}
              className={`w-[48px] h-[48px] rounded-full object-cover ${
                notif.isActive ? "border-2 border-[#A50705] p-0.5" : ""
              }`}
            />

            {/* Notification Content */}
            <div className="flex-1">
              <p className="text-md">
                <span className="text-[#A50705] font-medium cursor-pointer">
                  {notif.user}
                </span>{" "}
                {notif.message}{" "}
                <span className="text-[#A50705] font-medium">
                  {notif.products.join(", ")}
                </span>
              </p>
              <p className="text-xs text-[#ADAFBB] pt-1">{notif.time}</p>
            </div>

            {/* Unread Red Dot */}
            {/* {notif.isUnread && <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>} */}
          </div>
        ))}
      </div>
    </div>
  );
}
