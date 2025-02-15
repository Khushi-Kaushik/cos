"use client";
import React from "react";
import Home from "@/app/components/about/home";
import Sectiontwo from "@/app/components/about/section2";
import Story from "@/app/components/about/story";
import Join from "@/app/components/about/join";



const CycleOfSamsara: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Home/>
      
      <Sectiontwo/>
      <Story/>
      <Join/>
      </div>
      )}

export default CycleOfSamsara;
