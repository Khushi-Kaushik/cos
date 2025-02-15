import React from "react";
import Image from "next/image";
import tshirt from "../../assets/icons/tshirt.png";
import co2 from "../../assets/icons/co2.png";
import water from "../../assets/icons/water.png";
import hanger from "../../assets/icons/hanger.png";

const NumbersThatMatter: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading and Subheading */}
        <div className="text-center mb-12">
        <h1 className="text-3xl md:text-[40px] font-semibold mb-4"
        style={{
          fontFamily: "Hanken Grotesk"
        }}
        >
            Numbers That Matter
          </h1>
          <p className="mt-3 text-black font-medium font-[poppins] text-xl max-w-2xl mx-auto">
            Our efforts to drive sustainable fashion are measurable.
            <br className="hidden sm:block" />
            Together, here’s the difference we’re making:
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {/* Stat 1 */}
          <div>
            <div className="flex justify-center mb-4">
              <Image
                src={tshirt}       // <-- your T-shirt icon
                alt="T-shirt icon"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-semibold text-black">5000 Outfits</h3>
            <p className="text-black mt-1 font-normal font-[poppins] text-base">
              rescued from <br /> landfills.
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="flex justify-center mb-4">
              <Image
                src={co2}          // <-- your CO2 icon
                alt="CO2 icon"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-semibold text-black">250 Tons</h3>
            <p className="text-black mt-1 font-normal font-[poppins] text-base">
              of CO₂ emissions prevented
              <br />
              through secondhand sales.
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="flex justify-center mb-4">
              <Image
                src={water}        // <-- your water/hand icon
                alt="Water icon"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-semibold text-black">500 Liters</h3>
            <p className="text-black mt-1 font-normal font-[poppins] text-base">
              of water conserved by choosing
              <br />
              preloved over new production.
            </p>
          </div>

          {/* Stat 4 */}
          <div>
            <div className="flex justify-center mb-4">
              <Image
                src={hanger}       // <-- your circular hanger icon
                alt="Circular hanger icon"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-semibold text-black">100 Premium</h3>
            <p className="text-black mt-1 font-normal font-[poppins] text-base">
              outfits given a
              <br />
              second life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersThatMatter;
