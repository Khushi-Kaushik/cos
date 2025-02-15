"use client";
import React from 'react';

export default function FashionHero() {
    return (
      <section className="bg-white h-[60vh] text-center flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-[60px] font-normal mb-4"
          style={{
            fontFamily: "Hanken Grotesk"
          }}
          >
            Together, we’re building <br /><br /> a fashion ecosystem
           
            where  <br />
            <br /> sustainability meets style
          </h1>
          <div className=" flex justify-center space-x-4 mt-10">
            <button className="bg-[--main] rounded-full w-[200px] text-xl font-medium text-white px-6 py-2  hover:bg-red-800 transition"
            style={{
              fontFamily: "Hanken Grotesk"
            }}
            >
              Sell Now
            </button>
            <button className="bg-[--main] text-white w-[200px] text-xl font-medium px-6 py-2 rounded-full hover:bg-red-800 transition"
            style={{
              fontFamily: "Hanken Grotesk"
            }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </section>
    );
  };