"use client";
import React, { useState } from "react";

const ResetPasswordForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleSubmit = () => {
    setIsSubmitted(true); // Change state to show success message
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 w-full max-w-md">
        {/* Conditional rendering */}
        {!isSubmitted ? (
          <>
            <h2 className="text-3xl pt-32 font-medium text-[#A50705] mb-4">
              Reset your password!
            </h2>
            <p className=" mb-6 text-sm">
              We will send you an email at your registered email id to reset your password.
            </p>
            <input
              type="email"
              placeholder="Enter your email id"
              className="w-full p-4 border border-gray-300 bg-gray-100 text-gray-300 pb-4 rounded-full mb-6 text-sm"
            />
            <div className="flex flex-col items-center">
              <button
                onClick={handleSubmit} // Handle form submission
                className="bg-[#A50705] text-white py-3 px-6 rounded-full w-full text-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
              >
                SUBMIT
              </button>
              <a href="#" className="mt-4 text-xs underline">
                Cancel
              </a>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-4xl pt-32 font-medium text-[#A50705] mb-4 max-w-xs">
              Password reset Request sent!
            </h2>
            <p className="mb-6 text-sm max-w-xs">
              We have sent a link to reset your password to your email id. Follow the directions in the email to reset your password.
            </p>
            <div className="flex flex-col items-center">
              <button className="bg-[#A50705] text-white text-lg py-3 px-6 rounded-full w-full text-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
                BACK TO LOG IN
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordForm;
