"use client";
import React, { useState } from "react";
import Image from "next/image";
import add from "../../assets/helpcenter/add.svg";
import addb from "../../assets/helpcenter/addb.svg";
import sub from "../../assets/helpcenter/sub.svg";

export default function Start() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to toggle the active index for the accordion
  const toggleAccordion = (index: number): void => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white px-3 py-20">
      <div>
        <div className="flex items-center mb-6 ml-16 justify-between">
          <h2 className="font-medium text-3xl text-[#A50705]">GETTING STARTED</h2>
          <span>
            <Image
              src={add}
              alt="Getting Started"
              className="w-[22px] h-[22px] mr-12"
            />
          </span>
        </div>
        <div className="space-y-4 w-[1240px] h-[507px] bg-[rgba(217,217,217,0.2)] pl-24 pr-24 pt-16">
          <div className="border-b border-[#C9C9C9] pb-4 ">
            <div
              onClick={() => toggleAccordion(0)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-4">
                How to create an account?
              </h3>
              <span className="text-xl text-red-700">
                {activeIndex === 0 ? (
                  <Image src={sub} alt="Getting Started" className=" mr-12" />
                ) : (
                  <Image
                    src={addb}
                    alt="Getting Started"
                    className="w-[22px] h-[22px] mr-12"
                  />
                )}
              </span>
            </div>
            {activeIndex === 0 && (
              <p className="mt-2 text-sm mt-8 w-[830px]">
                We hope you enjoy using our Services, but if there’s a
                disagreement between you and us, please let us know through our
                Help page. We’ll try to resolve the issue as quickly as
                possible.
              </p>
            )}
          </div>

          <div className="border-b border-[#C9C9C9] pb-4">
            <div
              onClick={() => toggleAccordion(1)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-xl font-semibold mt-4 mb-4">
                How to browse and search for items?
              </h3>
              <span className="text-xl text-red-700">
                {activeIndex === 1 ? (
                  <Image src={sub} alt="Getting Started" className=" mr-12" />
                ) : (
                  <Image
                    src={addb}
                    alt="Getting Started"
                    className="w-[22px] h-[22px] mr-12"
                  />
                )}
              </span>
            </div>
            {activeIndex === 1 && (
              <p className="mt-2 text-sm mt-8 w-[830px] ">
                We hope you enjoy using our Services, but if there’s a
                disagreement between you and us, please let us know through our
                Help page. We’ll try to resolve the issue as quickly as
                possible.
              </p>
            )}
          </div>

          <div className="border-b border-[#C9C9C9] pb-4">
            <div
              onClick={() => toggleAccordion(2)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-6 mt-6">
                Setting up your seller profile?
              </h3>
              <span className="text-xl text-red-700">
                {activeIndex === 2 ? (
                  <Image src={sub} alt="Getting Started" className=" mr-12" />
                ) : (
                  <Image
                    src={addb}
                    alt="Getting Started"
                    className="w-[22px] h-[22px] mr-12"
                  />
                )}
              </span>
            </div>
            {activeIndex === 2 && (
              <p className="mt-2 text-sm mt-8 w-[830px] ">
                We hope you enjoy using our Services, but if there’s a
                disagreement between you and us, please let us know through our
                Help page. We’ll try to resolve the issue as quickly as
                possible.
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4 mt-16 ml-8 pr-12">
          {/* Accordion 4 */}
          <div className="border-b border-[#C9C9C9] pb-4">
            <div
              onClick={() => toggleAccordion(3)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-2xl font-medium mt-4 text-[#A50705] mb-4">
                Buying on COS
              </h3>
              <span className="text-xl text-red-700">
                {activeIndex === 3 ? (
                  "-"
                ) : (
                  <Image
                    src={add}
                    alt="Getting Started"
                    className="w-[22px] h-[22px] mr-12"
                  />
                )}
              </span>
            </div>
            {activeIndex === 3 && (
              <p className="mt-2 text-sm mt-8 w-[830px]">
                We hope you enjoy using our Services, but if there’s a
                disagreement between you and us, please let us know through our
                Help page. We’ll try to resolve the issue as quickly as
                possible.
              </p>
            )}
          </div>

          <div className="border-b border-[#C9C9C9] pb-4">
            <div
              onClick={() => toggleAccordion(4)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-2xl font-medium mt-4 text-[#A50705] mb-4">
              Selling on COS
              </h3>
              <span className="text-xl text-red-700">
                {activeIndex === 4 ? (
                  "-"
                ) : (
                  <Image
                    src={add}
                    alt="Getting Started"
                    className="w-[22px] h-[22px] mr-12"
                  />
                )}
              </span>
            </div>
            {activeIndex === 4 && (
              <p className="mt-2 text-sm mt-8 w-[830px]">
                We hope you enjoy using our Services, but if there’s a
                disagreement between you and us, please let us know through our
                Help page. We’ll try to resolve the issue as quickly as
                possible.
              </p>
            )}
          </div>

          <div className="border-b border-[#C9C9C9] pb-4">
            <div
              onClick={() => toggleAccordion(5)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-2xl font-medium mt-4 text-[#A50705] mb-4">
              Authentication Process
              </h3>
              <span className="text-xl text-red-700">
                {activeIndex === 5 ? (
                  "-"
                ) : (
                  <Image
                    src={add}
                    alt="Getting Started"
                    className="w-[22px] h-[22px] mr-12"
                  />
                )}
              </span>
            </div>
            {activeIndex === 5 && (
              <p className="mt-2 text-sm mt-8 w-[830px]">
                We hope you enjoy using our Services, but if there’s a
                disagreement between you and us, please let us know through our
                Help page. We’ll try to resolve the issue as quickly as
                possible.
              </p>
            )}
          </div>

          <div className="border-b border-[#C9C9C9] pb-4">
            <div
              onClick={() => toggleAccordion(6)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-2xl font-medium mt-4 text-[#A50705] mb-4">
              Account Management
                            </h3>
              <span className="text-xl text-red-700">
                {activeIndex === 6 ? (
                  "•"
                ) : (
                  <Image
                    src={add}
                    alt="Getting Started"
                    className="w-[22px] h-[22px] mr-12"
                  />
                )}
              </span>
            </div>
            {activeIndex === 6 && (
              <p className="mt-2 text-sm mt-8 w-[830px]">
                We hope you enjoy using our Services, but if there’s a
                disagreement between you and us, please let us know through our
                Help page. We’ll try to resolve the issue as quickly as
                possible.
              </p>
            )}
          </div>
          
          <div className="border-b border-[#C9C9C9] pb-4">
            <div
              onClick={() => toggleAccordion(6)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-2xl font-medium mt-4 text-[#A50705] mb-4">
              Disputes and Issues
                            </h3>
              <span className="text-xl text-red-700">
                {activeIndex === 6 ? (
                  "•"
                ) : (
                  <Image
                    src={add}
                    alt="Getting Started"
                    className="w-[22px] h-[22px] mr-12"
                  />
                )}
              </span>
            </div>
            {activeIndex === 6 && (
              <p className="mt-2 text-sm mt-8 w-[830px]">
                We hope you enjoy using our Services, but if there’s a
                disagreement between you and us, please let us know through our
                Help page. We’ll try to resolve the issue as quickly as
                possible.
              </p>
            )}
          </div>

          <div className="border-b border-[#C9C9C9] pb-4">
            <div
              onClick={() => toggleAccordion(6)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-2xl font-medium mt-4 text-[#A50705] mb-4">
              Policies and Guidelines
                            </h3>
              <span className="text-xl text-red-700">
                {activeIndex === 6 ? (
                  "•"
                ) : (
                  <Image
                    src={add}
                    alt="Getting Started"
                    className="w-[22px] h-[22px] mr-12"
                  />
                )}
              </span>
            </div>
            {activeIndex === 6 && (
              <p className="mt-2 text-sm mt-8 w-[830px]">
                We hope you enjoy using our Services, but if there’s a
                disagreement between you and us, please let us know through our
                Help page. We’ll try to resolve the issue as quickly as
                possible.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
