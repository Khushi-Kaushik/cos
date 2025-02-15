"use client";
import React, { useState } from "react";

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState("COMPLETED"); // Active tab state

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-medium text-gray-800 mb-6">My Orders</h2>
      <div className="border-b border-gray-300 mb-6"></div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-8 ">
        {["ALL", "IN PROGRESS", "COMPLETED", "CANCELLED"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === tab
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sold and Bought Sections */}
      <div className="flex flex-col space-x-8 border-b-2 pb-4 mb-8">
        {/* Sold Section */}
        <div className="flex-1 text-center border-r-2 pr-8">
          <p className="font-medium text-sm text-gray-700">Sold</p>
        </div>

        {/* Bought Section */}
        <div className="flex-1 text-center">
          <p className="font-medium text-sm text-gray-700">Bought</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center min-h-[200px]">
        {activeTab === "COMPLETED" && (
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.5 12l6 6L19.5 6"
              />
            </svg>
            <p className="text-lg text-gray-600">No purchase yet</p>
            <p className="text-sm text-gray-500">When you buy something, it will be listed here</p>
          </div>
        )}
      </div>

      {/* Bottom Division */}
      <div className="mt-8 border-t-2 pt-4 text-center">
        <p className="text-sm text-gray-500">No orders found.</p>
      </div>
    </div>
  );
};

export default MyOrders;
