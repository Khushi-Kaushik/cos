import React from "react";
import Image from "next/image";
// import { cartItems } from "@/app/components/cart/cartitems"; // Import your cart items here
import img1 from "../../assets/cart/img1.svg";
import heart from "../../assets/cart/heart.svg";
import bin from "../../assets/cart/bin.svg";
import promo from "../../assets/cart/promo.svg";

// Define the props type for Cart
interface CartProps {
  onProceedToCheckout: () => void;
}

const Cart: React.FC<CartProps> = async ({ onProceedToCheckout }) => {
  let cartItems = [];

  try {
    const res = await fetch("http://localhost:5000/api/user/cart");
    const json = await res.json();

    if (!json.success)
      throw new Error ("Unsuccessfull respoonse!");
    
    cartItems = json.data;
  } catch(err) {
    console.log("An error occurred while fetching cart items!");
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const convenienceFee = (subtotal > 0) ? 200 : 0;
  const deliveryFee = (subtotal > 0) ? 100 : 0;
  const total = subtotal + convenienceFee + deliveryFee;

  return (
    <div className="flex flex-col items-center px-4">
      <main className="w-full max-w-7xl mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left: Cart Items */}
        <div className="bg-white p-6">
          <h2 className="text-2xl font-semibold mb-4 ml-8">My Cart</h2>
          <div className="space-y-12 ml-8">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center border-b pb-4">
                <Image
                  src={img1}
                  alt={item.name}
                  className="w-141 h-162 rounded-md object-cover"
                />
                <div className="flex-1 px-4">
                  <h3 className="font-semibold text-black mb-8">{item.name}</h3>
                  <p className="text-sm text-black font-poppins">
                    {/* Size: {item.size} <br />
                    Color: {item.color} */}
                  </p>
                  <p className="text-sm text-black">₹{item.price}/-</p>
                </div>
                <div className="flex flex-col items-end space-y-16">
                  <Image
                    src={heart}
                    alt="Heart Icon"
                    className="w-25 h-25 object-contain"
                  />
                  <Image
                    src={bin}
                    alt="Bin Icon"
                    className="w-25 h-25 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-[#C9C9C9] pl-20 pr-24 pt-8 mt-8 mr-20">
          <h2 className="text-xl font-semibold font-poppins mb-4">
            Order Summary
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-s mb-2">Subtotal</p>
              <p>₹{subtotal}/-</p>
            </div>
            <div className="flex justify-between">
              <p className="text-s mb-2">Convenience Fee</p>
              <p>₹{convenienceFee}/-</p>
            </div>
            <div className="flex justify-between">
              <p className="text-s mb-2">Delivery Fee</p>
              <p>₹{deliveryFee}/-</p>
            </div>
            <div className="mb-2 border-b border-gray-400"></div>
            <div className="flex justify-between font-semibold">
              <p className="mt-4">Order Total</p>
              <p className="mt-4">₹{total}/-</p>
            </div>
          </div>

          <div className="mt-12 flex items-center space-x-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Add Promo Code"
                className="w-full p-3 rounded-full bg-gray-100 text-gray-600 text-sm pl-12 outline-none"
              />
              <Image
                src={promo}
                alt="Promo Icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            </div>

            <button className="bg-[#A50705] text-white px-6 py-3 rounded-full text-sm hover:bg-red-700">
              APPLY
            </button>
          </div>

          {/* Existing Proceed to Checkout Button */}
          <button
            onClick={onProceedToCheckout} // Trigger the transition to Info
            className="w-full mt-6 bg-[#A50705] text-white py-3 rounded-full text-sm hover:bg-red-800"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </main>
    </div>
  );
};

export default Cart;
