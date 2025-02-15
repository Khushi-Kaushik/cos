import React from "react";
import Image from "next/image";
import img2 from "../../assets/work/img2.svg";
import img3 from "../../assets/work/img3.svg";
import img4 from "../../assets/work/img4.svg";
import img5 from "../../assets/work/img5.svg";
import img6 from "../../assets/work/img6.svg";
import img7 from "../../assets/work/img7.svg";
import img8 from "../../assets/work/img8.svg";
import img9 from "../../assets/work/img9.svg";
import img10 from "../../assets/work/img10.svg";
import img11 from "../../assets/work/img11.svg";

const BuyingProcess = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 text-center">
      <h2 className="text-2xl font-semibold mb-12" style={{fontFamily: "Hanken Grotesk"}}>Effortless Buying, Simplified!</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Browse Section */}
        <div className="bg-gray-100 rounded-xl pl-3 pt-4 pr-3 flex flex-col items-start text-left">
          <div className="relative rounded-xl overflow-hidden w-full">
            <Image
              src={img2}
              alt="Browsing Items"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-xl font-medium mt-5 ml-2">01. Browse</h3>
          <p className="text-black text-sm mt-2 max-w-xs ml-2 pb-10"> 
            Explore the curated collection of pre-loved and sustainable fashion
            through categories like Women, Men, Kids, Accessories, Wedding and
            Luxe.
          </p>
        </div>
        
        {/* Select Section */}
        <div className="bg-gray-100 rounded-xl pl-3 pt-4 pr-3 flex flex-col items-start text-left">
          <div className="relative rounded-xl overflow-hidden w-full">
            <Image
              src={img3}
              alt="Selecting Items"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-xl font-medium mt-5 ml-2">02. Select</h3>
          <p className="text-black text-sm mt-2 max-w-xs ml-2 pb-10"> 
            Use filters to find the perfect items based on size, price, brand,
            and more.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 pt-8">
        {/* Buy Section */}
        <div className="bg-gray-100 rounded-2xl p-5 text-left">
          <div className="relative rounded-xl overflow-hidden">
            <Image src={img4} alt="Buying Process" className="w-full h-auto object-cover" />
          </div>
          <h3 className="text-lg font-medium mt-5 ml-2">03. Buy</h3>
          <p className=" text-sm mt-2 ml-2">
            You can send offers to the seller, once a price is agreed upon by both parties, 
            add items to your cart and complete the purchase using secure payment options 
            like wallets, credit/debit cards, or UPI.
          </p>
        </div>

        {/* Receive Section */}
        <div className="bg-gray-100  rounded-2xl p-5 text-left">
          <div className="relative rounded-xl overflow-hidden">
            <Image src={img5} alt="Receiving Process" className="w-full h-auto object-cover" />
          </div>
          <h3 className="text-lg font-medium mt-5 ml-2">04. Receive</h3>
          <p className=" text-sm mt-2 ml-2">
            Your item is shipped with tracking updates, ensuring safe and timely delivery.
          </p>
        </div>

        {/* Leave Feedback Section */}
        <div className="bg-gray-100 rounded-2xl p-5 text-left">
          <div className="relative rounded-xl overflow-hidden">
            <Image src={img6} alt="Feedback Process" className="w-full h-auto object-cover" />
          </div>
          <h3 className="text-lg font-medium mt-5 ml-2">05. Leave Feedback</h3>
          <p className=" text-sm mt-2 ml-2">
            Share your experience by leaving a review to help other buyers and sellers.
          </p>
        </div>
      </div>

      {/* Buy Now Button */}
      <div className="mt-16 pb-16">
        <button style={{fontFamily : "Hanken Grotesk"}} className="bg-[#A50705] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition">
          BUY NOW
        </button>
      </div>
      <h2 className="text-2xl font-semibold mb-12" style={{fontFamily: "Hanken Grotesk"}}>Selling Made Simple!</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Browse Section */}
        <div className="bg-gray-100 rounded-xl pl-3 pt-4 pr-3 flex flex-col items-start text-left">
          <div className="relative rounded-xl overflow-hidden w-full">
            <Image
              src={img7}
              alt="Browsing Items"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-xl font-medium mt-5 ml-2">01. Register</h3>
          <p className="text-black text-sm mt-2 max-w-xs ml-2 pb-10"> 
          Create an account and set up your seller profile.
          </p>
        </div>
        
        {/* Select Section */}
        <div className="bg-gray-100 rounded-xl pl-3 pt-4 pr-3 flex flex-col items-start text-left">
          <div className="relative rounded-xl overflow-hidden w-full">
            <Image
              src={img8}
              alt="Selecting Items"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-xl font-medium mt-5 ml-2">02. List Items</h3>
          <p className="text-black text-sm mt-2 max-w-xs ml-2 pb-10"> 
          Upload detailed descriptions and clear images of your pre-loved
or luxury fashion. Choose optional features like authentication for
high-value items.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 pt-8">
        {/* Buy Section */}
        <div className="bg-gray-100 rounded-2xl p-5 text-left">
          <div className="relative rounded-xl overflow-hidden">
            <Image src={img9} alt="Buying Process" className="w-full h-auto object-cover" />
          </div>
          <h3 className="text-lg font-medium mt-5 ml-2">03. Sell</h3>
          <p className=" text-sm mt-2 ml-2">
          Buyers will contact you or make purchases
          directly. Accept offers or list at a fixed price.
          </p>
        </div>

        {/* Receive Section */}
        <div className="bg-gray-100  rounded-2xl p-5 text-left">
          <div className="relative rounded-xl overflow-hidden">
            <Image src={img10} alt="Receiving Process" className="w-full h-auto object-cover" />
          </div>
          <h3 className="text-lg font-medium mt-5 ml-2">04. Ship</h3>
          <p className=" text-sm mt-2 ml-2">
          Once sold, ship your item within 5 calendar
          days to ensure prompt delivery.          </p>
        </div>

        {/* Leave Feedback Section */}
        <div className="bg-gray-100 rounded-2xl p-5 text-left">
          <div className="relative rounded-xl overflow-hidden">
            <Image src={img11} alt="Feedback Process" className="w-full h-auto object-cover" />
          </div>
          <h3 className="text-lg font-medium mt-5 ml-2">05.Earn</h3>
          <p className=" text-sm mt-2 ml-2">
          Receive funds directly in your COS wallet. 
          Withdraw to your bank account anytime.          </p>
        </div>
      </div>
      <div className="mt-16 pb-16">
        <button style={{fontFamily : "Hanken Grotesk"}} className="bg-[#A50705] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition">
          SELL NOW
        </button>
      </div>
      <div className="bg-white py-12 mb-16 text-center">
      <h2 className="text-6xl font-semibold text-[#A50705] mb-8 " style={{fontFamily: "Hanken Grotesk"}} >JOIN THE CYCLE</h2>
      <div className="max-w-md gap-8 mx-auto flex border-b border-black justify-between">
        <input type="email" placeholder="Get on the list" className="rounded-none border-gray-300" />
        <div className=" py-2 text-black">→</div>
      </div>
      </div>

    </div>
  );
};

export default BuyingProcess;
