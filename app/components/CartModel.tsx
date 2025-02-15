import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import cross from "../assets/cart/cross.svg";
import img1 from "../assets/cart/img1.svg";
import { cartItems as importedCartItems } from "./cart/cartitems"; // Import the cart items

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems?: any[]; // Make cartItems optional
}

const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems = importedCartItems,
}) => {
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    setIsCartEmpty(cartItems.length === 0);
  }, [cartItems]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-100 bg-opacity-50 flex items-start justify-end z-50 pt-[40px]"
      onClick={onClose}
    >
      <div
        className={`bg-white p-6 rounded-lg mr-4 transition-all duration-300 mt-10
          ${isCartEmpty ? "w-[392px] h-[500px]" : "w-[500px] h-[700px]"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-22 right-8"
        >
          <Image src={cross} alt="Close" className="w-[20px] h-[20px]" />
        </button>

        {/* Empty Cart View */}
        {isCartEmpty ? (
          <>
            <h3 className="text-lg font-bold text-center pt-28">
              Your Shopping Bag is Empty
            </h3>
            <p className="pt-8 flex flex-col justify-center items-center text-sm">
              Discover COS
              <span>and add products to your Bag</span>
            </p>
            <div className="mt-12 flex flex-col justify-center items-center">
              <button
                className="w-64 bg-[#A50705] text-white py-2 rounded-full hover:bg-[#8a0505] transition-all duration-300"
                onClick={onClose}
              >
                Collection
              </button>
              <button
                className="w-64 bg-[#A50705] text-white py-2 rounded-full mt-4 hover:bg-[#8a0505] transition-all duration-300"
                onClick={onClose}
              >
                New Arrivals
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Cart Items View */}
            <div className="space-y-6 w-[500px] h-[450px] overflow-y-auto">
              <h3 className="text-xl font-semibold text-center pb-8">
                Your Cart
              </h3>

              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 pb-8">
                  <Image
                    src={img1}
                    alt={item.title}
                    width={141}
                    height={162}
                    className="rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-medium mb-2 flex justify-between mr-4">
                      {item.title}
                      <Image
                        src={cross}
                        alt="Remove"
                        className="cursor-pointer w-[20px] h-[20px]"
                      />
                    </h4>
                    <p className="text-md mb-2">Size: {item.size}</p>
                    <p className="text-md mb-2">Color: {item.color}</p>
                    <p className="text-md">Price: Rs{item.price}/-</p>
                  </div>
                </div>
              ))}

              {/* Checkout Button directly after the last item */}
              <div className=" border-t border-gray-400 max-w-md "></div>
              <div className="mt-4 mb-4 flex justify-center">
                <Link href="/cart" passHref>
                  <button
                    className="flex w-[200px] justify-center items-center bg-[#A50705] text-white py-3 rounded-full hover:bg-[#8a0505] transition-all duration-300"
                    onClick={onClose}
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
