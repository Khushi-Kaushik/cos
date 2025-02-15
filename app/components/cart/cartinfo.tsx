"use client";

import React, { useState } from "react";
import img1 from "../../assets/cart/img1.svg";
import Image from "next/image";
import { cartItems } from "@/app/components/cart/cartitems"; // Import your cart items here
import cross from "../../assets/cart/cross.svg";
import PaymentPage from "../../components/cart/cartpayment";
import Cart from "../../components/cart/carthome";

const CartInfo = () => {
  const [activePage, setActivePage] = useState("cart");

  const handleNavigation = (page: string) => {
    setActivePage(page);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
  const convenienceFee = 200;
  const deliveryFee = 100;
  const orderTotal = cartTotal + convenienceFee + deliveryFee;

  return (
    <>
      {/* Navigation Bar (Cart, Info, Payment) */}
      <div className="flex space-x-6 ml-12 mt-4">
        <button
          onClick={() => handleNavigation("cart")}
          className={`text-lg ${activePage === "cart" ? "text-black" : "text-gray-500"}`}
        >
          Cart
        </button>
        <span>/</span>
        <button
          onClick={() => handleNavigation("info")}
          className={`text-lg ${activePage === "info" ? "text-black" : "text-gray-500"}`}
        >
          Info
        </button>
        <span>/</span>
        <button
          onClick={() => handleNavigation("payment")}
          className={`text-lg ${activePage === "payment" ? "text-black" : "text-gray-500"}`}
        >
          Payment
        </button>
      </div>

      {/* Render Cart, Info, or Payment depending on activePage */}
      {activePage === "cart" && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-6 rounded-md">
          {/* Cart page content */}
          {/* <Cart /> */}
        </div>
      )}

      {activePage === "info" && (
        <div className="max-w-7xl mx-auto bg-white p-6 rounded-md">
          {/* Info page content */}
          <CartInfo />

        </div>
      )}

      {activePage === "payment" && (
        <div className="max-w-7xl mx-auto bg-white p-6 rounded-md">
          {/* Payment page content */}
          <PaymentPage />
        </div>
      )}

      {/* Render Cart, Info, or Payment depending on activePage */}
      {activePage === "cart" && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-6 rounded-md">
          {/* Left Section */}
          <div className="max-w-2xl mx-auto px-4">
            {/* Contact Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center">
                <h2 className="text-m">Contact</h2>
                <a href="#" className="text-sm text-black hover:underline">
                  Have An Account? <span className="font-medium text-gray-400">Log In</span>
                </a>
              </div>
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                />
              </div>
              <div className="mt-2">
                <label className="flex items-center space-x-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="border-gray-300 rounded-sm focus:ring-red-500"
                  />
                  <span className="text-black">Email Me With News And Offers</span>
                </label>
              </div>
            </div>

            {/* Shipping Address Section */}
            <div className="mb-8">
              <h2 className="text-m mb-4 mt-4">Shipping Address</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <select className="w-full border border-gray-300 rounded-lg p-2 text-sm">
                    <option>Country/Region</option>
                    <option>India</option>
                    <option>USA</option>
                  </select>
                  <input
                    type="text"
                    placeholder="X"
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company (Optional)"
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Apartment, Suite, Etc. (Optional)"
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                />
                <div className="mt-2">
                  <label className="flex items-center space-x-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="border-gray-300 rounded-sm focus:ring-red-500"
                    />
                    <span className="text-black">Save This Information For Next Time</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-sm text-black hover:underline flex items-center"
              >
                &lt; Return To Cart
              </a>
              <button className="bg-[#A50705] text-white py-2 px-6 rounded-full hover:bg-red-700">
                <p className="text-sm">CHECK OUT</p>
              </button>
            </div>
          </div>

          {/* Right Section (Cart items details) */}
          <div className="bg-[#F4F4F4]">
            <div className="space-y-6 p-4">
              <h2 className="text-xl font-bold text-center">Your Cart</h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <div className="flex items-center space-x-4">
                      <Image
                        src={img1}
                        alt="img"
                        className="w-141 h-162 rounded-md object-cover"
                      />
                      <div className="flex-1 px-4">
                        <h3 className="font-semibold text-black mb-8">
                          {item.title}
                        </h3>
                        <p className="text-sm text-black font-poppins">
                          Size: {item.size} <br />
                          Color: {item.color}
                        </p>
                        <p className="text-sm text-black">₹{item.price}/-</p>
                      </div>
                    </div>
                    <Image
                      src={cross}
                      alt="Remove Item"
                      className="w-6 h-6 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <p>Cart Total</p>
                  <p>Rs{cartTotal}/-</p>
                </div>
                <div className="flex justify-between">
                  <p>Convenience Fee</p>
                  <p>Rs{convenienceFee}/-</p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery Fee</p>
                  <p>Rs{deliveryFee}/-</p>
                </div>
                <div className="flex justify-between font-bold">
                  <p>Order Total</p>
                  <p>Rs{orderTotal}/-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Similar blocks for the Info and Payment pages can go here */}
    </>
  );
};

export default CartInfo;
