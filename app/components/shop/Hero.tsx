"use client";

import Image from "next/image";
import hero from "../../assets/shop/hero.svg";


const Hero = () => {


  return (
    <div className="w-full">


      {/* Hero Section */}
      <div className="w-full">
        <Image
          src={hero}
          alt="Clothing on a line"
          className="w-full object-cover h-[400px]"
          priority={true} // Optimize for loading
        />
      </div>
    </div>
  );
};

export default Hero;
