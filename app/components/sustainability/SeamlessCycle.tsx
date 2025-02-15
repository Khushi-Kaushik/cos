"use client";
import React, { useState } from "react";
import Image from "next/image";
import seamlesscycle from "../../assets/sustainability/seamlesscycle.png";
interface AccordionItem {
  title: string;
  content: string;
}

const SeamlessCycle: React.FC = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(2);
  const accordionData: AccordionItem[] = [
    {
      title: "List and Verify",
      content:
        "Sellers list their items, which go through a quick verification process to ensure authenticity and quality."
    },
    {
      title: "Purchase and Reuse",
      content:
        "Buyers discover unique, preloved items and give them a second life, reducing the demand for new production."
    },
    {
      title: "Repeat and Impact",
      content:
        "Buyers not only purchase stylish outfits at affordable prices but also contribute to sustainable fashion by extending the lifecycle of these items. By choosing to shop consciously, they play a vital role in reducing waste, promoting reuse, and making a positive impact on the environment."
    }
  ];

  const toggleAccordion = (index: number) => {
    // Close if clicking the same item, otherwise open the new item
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-[#D9D9D9]/35 py-16">
      <div className="">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-black mb-12">
          A Seamless Cycle Of Sustainability
        </h2>

        {/* Images Row */}
        <div className="w-full flex justify-center items-center">
          {/* Image 1 */}
          <div className="relative w-full h-60 md:h-[425px]">
            <Image
              src={seamlesscycle}
              alt="Sustainability image 1"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* Accordion */}
        <div className="mt-12">
        <div className="max-w-[1350px] mx-auto px-4">
          {accordionData.map((item, idx) => (
            <div key={idx}>
              {/* Title Row */}
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between py-8 focus:outline-none"
              >
                <span className="text-base md:text-[24px] font-semibold text-left font-[poppins]">
                  {item.title}
                </span>
                <span className="text-2xl font-normal text-red-700">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              {/* Content (only if open) */}
              {openIndex === idx && (
                <div className="py-4">
                  <p className="text-gray-700 text-[20px] leading-relaxed font-[poppins] font-normal">
                    {item.content}
                  </p>
                </div>
              )}
              <div className="border-b border-[#C9C9C9]"></div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default SeamlessCycle;
