import React from "react";
import Image from "next/image";
import heroImage from "../../assets/sustainability/herobg.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="A woman inspecting a piece of clothing"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Overlay (optional dark overlay for readability) */}
      <div className="absolute inset-0 bg-black/30 -z-10" />

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-[40px] font-semibold mb-4"
        style={{
          fontFamily: "Hanken Grotesk"
        }}
        >
          FASHION THAT CLOSES THE LOOP
        </h1>
        <p className="text-base md:text-[22px] font-normal font-[poppins] max-w-2xl mx-auto">
        At Cycle of Samsara, we are redefining <br />
        fashion by making sustainability the norm.
          <br />
          <br />
          Our mission is to:
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
