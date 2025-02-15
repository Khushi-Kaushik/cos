"use client";
import React, { useState } from "react";

export default function ContactForm() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 max-w-4xl">
        <h1 className="text-4xl mb-2">Let’s Connect and Collaborate!</h1>
        <p className="text-xs text-black mb-6">
          Have questions, need support, or want to partner with us? We’d love to
          hear from you!
        </p>
        <form>
          <form>
            <div className="grid grid-cols-2 gap-8 mb-4 mt-8 ">
              {/* First Name */}
              <div className="flex flex-col w-96">
                <label className="text-sm text-black mb-1">First Name</label>
                <input
                  type="text"
                  placeholder=""
                  className=" bg-[#F4F4F4] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#A50705]"
                  required
                />
              </div>

              <div className="flex flex-col ">
                <label className="text-sm text-black mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder=""
                  className=" bg-[#F4F4F4] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#A50705]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-4 mt-8">
              <div className="flex flex-col ">
                <label className="text-sm text-black mb-1">
                  Type of Enquiry
                </label>
                <select
                  className="bg-[#F4F4F4] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#A50705]"
                  required
                >
                  <option value="" disabled selected></option>
                  <option value="support">Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col ">
                <label className="text-sm text-black mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder=""
                  className=" bg-[#F4F4F4]  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#A50705]"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mb-4 mt-8">
              <label className="text-sm text-black mb-1">Email</label>
              <input
                type="email"
                placeholder=""
                className=" bg-[#F4F4F4]  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#A50705]"
                required
              />
            </div>

            <div className="flex flex-col mb-4 mt-8">
              <label className="text-sm text-black mb-1">Your Message</label>
              <textarea
                placeholder=""
                className=" bg-[#F4F4F4] rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-[#A50705] resize-none"
                required
              ></textarea>
            </div>
          </form>

          <div className="flex items-center gap-2 mb-4 mt-8">
            <input
              type="checkbox"
              id="privacy-policy"
              className="mr-2 focus:ring-2 focus:ring-[#A50705]"
              required
            />
            <label className="text-xs text-black">
              I have read and understood the Contact Us Privacy and Policy.
            </label>
          </div>
          <div className="flex justify-center mt-4">
  <button
    type="submit"
    className="w-52 flex justify-center items-center bg-[#A50705] text-white py-2 rounded-full hover:bg-red-700 transition"
  >
    <p className="text-sm text-white">Submit</p>
  </button>
</div>

        </form>
      </div>
    </div>
  );
}
