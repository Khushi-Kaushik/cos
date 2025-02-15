"use client";

import Image from "next/image";
import img1 from "../../assets/message/img1.svg";
import more from "../../assets/message/more.svg";
import ques from "../../assets/message/ques.svg";
import flag from "../../assets/message/flag.svg";
import trash from "../../assets/message/trash.svg";
import block from "../../assets/message/block.svg";
import pro from "../../assets/message/pro.svg";



const OptionItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
    {icon}
    <span className="text-sm text-black">{text}</span>
  </div>
);


const Search  = () => {
  return (
    <div className="bg-white p-2">
      <div className="flex items-center border-b border-gray-300 pb-2 space-x-4">
          {/* Product Image */}
          <div className=" overflow-hidden">
            <Image src={pro} alt="Product" className="w-[80px] h-[71px]" />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h3 className="text-black font-semibold text-sm">Prada 3Q</h3>
            <p className="text-gray-600 text-sm">Rs 10000/-</p>
          </div>

          {/* Buttons */}
          <div className="flex space-x-2">
            <button className="border border-gray-400 text-black w-[144px] h-[50px] text-sm px-3 py-2 rounded-md">
              MAKE AN OFFER
            </button>
            <button className="bg-[#A50705] text-white text-sm px-4 py-2 rounded-md">
              BUY NOW
            </button>
          </div>
        </div>
      
      <div className="flex items-center space-x-3 pb-4 pt-5 border-b">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={img1}
            alt="Khyati"
            className=" w-[41px] h-[41px]"
          />
        </div>
        <div className="flex justify-between w-full ">
        <h2 className="text-black font-medium text-md">Khyati</h2>
        <span className=" text-gray-400 text-xs justify-between cursor-pointer">
          <Image
          src={more}
          alt="Notification Icon"
          className="w-[8px] h-[13px] "
          />
        </span>
        </div>
      </div>

      <div className="mt-4 ml-2 space-y-3">
        <span className="flex">
      <Image
          src={ques}
          alt="Notification Icon"
          className="w-[27px] h-[28px] "
          />
          <p className="text-xs p-2">Help</p> 
          </span>
          <span className="flex">
      <Image
          src={flag}
          alt="Notification Icon"
          className="w-[27px] h-[28px] "
          />
          <p className="text-xs p-2">Report</p> 
          </span>
          <span className="flex">
      <Image
          src={trash}
          alt="Notification Icon"
          className="w-[27px] h-[28px] "
          />
          <p className="text-xs p-2">Delete Conversation</p> 
          </span>
          <span className="flex">
      <Image
          src={block}
          alt="Notification Icon"
          className="w-[27px] h-[28px] "
          />
          <p className="text-xs p-2">Block</p> 
          </span>
      </div>
    </div>
  );
};



export default Search ;
