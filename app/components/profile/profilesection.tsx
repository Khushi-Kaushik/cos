"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Crown from "../../assets/profile/crown.svg";
import location from "../../assets/profile/location.svg";
import lastseen from "../../assets/profile/lastseen.svg";
import insta from "../../assets/profile/insta.svg";
import follow from "../../assets/profile/follow.svg";
import linkedin from "../../assets/profile/linkedin.svg";
import email from "../../assets/profile/email.svg";

const UserProfile: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [profileData, setProfileData] = useState<any | null>(null);

  useEffect(() => {
    setIsClient(true);
    setProfileData({
      profileImageUrl:
        "https://images.unsplash.com/photo-1737553338682-cd52f5df9781?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Khyati",
      reviews: 50,
      location: "New York",
      lastSeen: "2 hours",
      followers: 120,
      following: 75,
      socialLinks: {
        instagram: "https://instagram.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        email: "johndoe@example.com",
      },
    });
  }, []);

  if (!isClient || !profileData) return null;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6">
        {/* Profile Picture */}
        <div className="flex items-center justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden">
            <img
              src={profileData.profileImageUrl}
              alt={`${profileData.fullName}'s profile`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start gap-6">
          <div className="text-center md:text-left flex-grow">
            <h2
              className="text-2xl font-poppins font-regular mb-2"
              style={{ width: "64px", height: "28px" }}
            >
              {profileData.fullName}
            </h2>
            <p
              className="text-[#A50705] font-poppins flex items-center space-x-1"
              style={{ width: "78px", height: "20px" }}
            >
              <span>{profileData.reviews}</span>
              <span>Reviews</span>
            </p>

            <div className="flex items-center mt-2">
              <span className="flex items-center text-white text-sm py-1 rounded-full">
                <Image src={Crown} alt="Crown Icon" width={39} height={39} />
                <p
                  className="font-poppins text-[#000000]"
                  style={{ width: "163px", height: "20px" }}
                >
                  Verified Luxe Wardrobe
                </p>
              </span>
            </div>

            {/* About Section */}
            <div className="flex gap-20 mt-8">
              <div className="text-[#000000] font-poppins space-y-1">
                <p
                  className="text-sm"
                  style={{ width: "63px", height: "17px" }}
                >
                  About
                </p>
                <div className="flex items-center space-x-2">
                  <Image src={location} alt="Location" width={16} height={16} />
                  <p
                    className="text-sm"
                    style={{ width: "94px", height: "20px" }}
                  >
                    {profileData.location}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image src={lastseen} alt="Lastseen" width={20} height={20} />
                  <p
                    className="text-sm flex items-center"
                    style={{ height: "20px" }}
                  >
                    Last seen {profileData.lastSeen} ago
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image src={follow} alt="follow" width={20} height={20} />
                  <p
                    className="text-sm flex space-x-1"
                    style={{ height: "20px" }}
                  >
                    <span>{profileData.followers} Followers,</span>
                    <span>{profileData.following} Following</span>
                  </p>
                </div>
              </div>

              </div>
          </div>

          {/* Buttons Section */}
          <div className="flex gap-4 items-center">
            <button
              className="border border-black text-black px-4 py-2 rounded-lg hover:bg-gray-100"
              style={{ width: "99px", height: "50px" }}
            >
              <p style={{ width: "73px", height: "22px" }}>MESSAGE</p>
            </button>
            <button
              className="bg-[#A50705] text-white px-4 py-2 rounded-lg hover:bg-red-600"
              style={{ width: "103px", height: "50px" }}
            >
              <p style={{ width: "64px", height: "22px" }}>FOLLOW</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
