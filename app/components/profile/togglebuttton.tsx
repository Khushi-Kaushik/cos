"use client";
import React, { useState, useEffect } from "react";
import { UserProfileData } from "../../components/profile/SellerProfileItems";
import { userData } from "@/app/components/profile/SellerProfileData";
import { wardrobeItems } from "@/app/components/profile/SellerProfileData";
import { reviews } from "@/app/components/profile/SellerProfileData";
import ProductCard from "../shop/ProductCard";
import plus from "../../assets/profile/plus.svg";
import Image from "next/image";

const Toggle: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeSection, setActiveSection] = useState<"wardrobe" | "reviews">(
    "wardrobe"
  );
  const [profileData, setProfileData] = useState<UserProfileData | null>(null);

  useEffect(() => {
    setIsClient(true);
    setProfileData(userData); // Ensure consistent initial state
  }, []);

  if (!isClient || !profileData) return null;

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Tabs Section */}
      <div className="flex flex-wrap mt-8 ml-10 border-b font-poppins border-gray-300">
        <button
          onClick={() => setActiveSection("wardrobe")}
          style={{ width: "127px", height: "35px" }}
          className={`px-4 py-2 mr-4 flex items-center font-poppins ${
            activeSection === "wardrobe"
              ? "border-b-2 border-gray-600 text-black"
              : "text-gray-600"
          }`}
        >
          Wardrobe
        </button>
        <button
          onClick={() => setActiveSection("reviews")}
          style={{ width: "127px", height: "35px" }}
          className={`px-4 py-2 flex items-center font-poppins ${
            activeSection === "reviews"
              ? "border-b-2 border-gray-600 text-black"
              : "text-gray-600"
          }`}
        >
          Reviews
        </button>
      </div>

      {/* Render Wardrobe Section */}
      {activeSection === "wardrobe" && (
        <div>
          {wardrobeItems.length === 0 ? (
            <div className="flex justify-center items-center mt-20">
            <button className="border border-black border-opacity-[50%] text-black text-sm font-poppins px-8 py-2 rounded-full flex items-center">
              <span className="text-xl mr-2">
                <Image
                src={plus}
                alt="Empty Cart"
                width="14"
                height="30"
                />
                </span>ADD TO WARDROBE
            </button>
          </div>
          ) : (
            <div>
              <div
                className="text-sm text-black ml-14 mt-6 mb-5"
                style={{ width: "78px", height: "25px" }}
              >
                {wardrobeItems.length} Items
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {wardrobeItems.map((item) => (
                  <div
                    key={item.id}
                    className="product-card-wrapper text-center bg-white p-2 mb-10"
                  >
                    <ProductCard
                      image={item.image}
                      name={<span className="text-black">{item.name}</span>}
                      price={
                        <span className="text-black">{`Rs ${item.price}/-`}</span>
                      }
                      id={item.id}
                      product={item}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Render Reviews Section */}
      {activeSection === "reviews" && (
        <div>
          {reviews.length === 0 ? (
            <div className="flex justify-center items-center mt-20">
            <button className="border border-black text-black border-opacity-[50%] text-sm font-poppins px-14 py-2 rounded-full flex items-center">
              <span className="text-xl mr-2">
              <Image
                src={plus}
                alt="Empty Cart"
                width="14"
                height="30"
                />
                </span> ADD REVIEW
            </button>
          </div>
          ) : (
            <div className="border-b border-gray-400 ml-12">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div
                    className="text-black font-poppins text-5xl mt-10"
                    style={{ width: "92px", height: "84px" }}
                  >
                    4.5
                  </div>
                  <div className="ml-[-13px]">
                    <span className="text-yellow-500 text-lg">★★★★★</span>
                    <div
                      className="text-gray-500 text-sm"
                      style={{ width: "20px", height: "20px" }}
                    >
                      (1)
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews List */}
              <div
                className="text-black font-poppins ml-4 mt-8"
                style={{ width: "100px", height: "25px" }}
              >
                All Reviews
              </div>
              <div className="p-4">
                {reviews.map((review, index) => (
                  <div
                    key={review.id}
                    className={`bg-white p-4 ${
                      index !== reviews.length - 1 ? "border-b border-gray-300" : ""
                    } mb-4`}
                  >
                    {/* Review Header */}
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-4">
                        {review.profileimg && (
                          <div className="rounded-full overflow-hidden border-4 border-white drop-shadow-lg">
                            <img
                              src={review.profileimg}
                              alt={`${review.username}'s profile`}
                              className="w-full h-full object-cover"
                              style={{ width: "40px", height: "40px" }}
                            />
                          </div>
                        )}
                        <h4
                          className="font-semibold text-black"
                          style={{ width: "91px", height: "20px" }}
                        >
                          {review.username}
                        </h4>
                      </div>
                      <div
                        className="text-xs text-gray-500"
                        style={{ width: "117px", height: "25px" }}
                      >
                        {review.date} months ago
                      </div>
                    </div>

                    {/* Review Rating */}
                    <div className="ml-16 mt-[-19px]">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg">
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Review Comment */}
                    <div className="flex ml-16">
                      <p className="text-black text-regular font-poppins max-w-3xl">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Toggle;
