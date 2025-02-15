"use client"
import React, { useState } from "react";
import Cart from "../../components/cart/carthome"; // Import Cart component
import Info from "../../components/cart/cartinfo"; // Import Info component
import Payment from "../../components/cart/cartpayment"; // Import Payment component

const Navigation = () => {
  const [activePage, setActivePage] = useState("cart"); // Manage which page to display

  // Handle when the user clicks on "Proceed to Checkout"
  const handleProceedToCheckout = () => {
    setActivePage("info"); // Switch to Info page when Proceed to Checkout is clicked
  };

  return (
    <div className="flex flex-col ml-4">
      <header className="pb-4 w-full max-w-7xl">
        <h1 className="text-4xl ml-12 mt-12 text-black">Your Cart</h1>
      </header>

      {/* Render Cart or Info depending on activePage */}
      {activePage === "cart" && (
        <Cart onProceedToCheckout={handleProceedToCheckout} />
      )}
      {activePage === "info" && <Info />}
      {activePage === "payment" && <Payment />}

      {/* Navigation Buttons (only show when "Proceed to Checkout" is clicked) */}
      {/* {activePage === "cart" && (
        <div className="flex justify-center mt-6 ml-12">
          <button
            onClick={handleProceedToCheckout}
            className="bg-[#A50705] text-white py-2 px-4 rounded-lg hover:bg-[#8a0505] transition-all duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Navigation;
