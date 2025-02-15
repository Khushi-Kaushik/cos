// components/SustainabilitySection.tsx
import React from 'react';
import Image from 'next/image';
import image1 from '../../assets/sustainability/image1.svg';
import image2 from '../../assets/sustainability/image2.svg';

const SustainabilitySection: React.FC = () => {
  return (
    <section className="bg-white py-10 px-6 mx-[2%]">
      <h2
        className="text-[40px] font-medium text-center text-black mb-8 "
        style={{
          fontFamily: 'Hanken Grotesk',
        }}
      >
        Love Sustainability? Choose COS!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Column */}
        <div className="flex flex-col items-center">
          <Image src={image1} loading='lazy' alt="Sustainable Style" className="w-full h-[80%] object-cover" />
          <div className="mt-4">
            <h3 className="text-[--main] font-semibold  text-xl" 
            style={{
              fontFamily: 'Hanken Grotesk',
            }}
            >
              A JOURNEY TOWARDS SUSTAINABLE STYLE
            </h3>
            <p className="text-[#000000] mt-2 text-base">
              Cycle of Samsara is dedicated to reducing fashion waste by curating pre-loved, high-quality pieces that promote a circular economy. We believe in giving luxury fashion a second life, ensuring each item contributes to a more sustainable future.
            </p>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center">
          <Image src={image2} loading='lazy' alt="Eco-Friendly Fashion"  className="w-full h-[80%] object-cover" />
          <div className="mt-4">
            <h3 className="text-[--main] font-semibold  text-xl" 
            style={{
              fontFamily: 'Hanken Grotesk',
            }}
            >
              ECO FRIENDLY FASHION AT ITS CORE
            </h3>
            <p className="text-[#000000] mt-2 text-base">
              Our commitment to sustainability extends beyond our collections. By encouraging mindful consumption and offering eco-conscious packaging, Cycle of Samsara ensures that every purchase is a step toward preserving the planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
