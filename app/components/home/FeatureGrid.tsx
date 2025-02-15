// components/FeatureGrid.tsx
import React from 'react';
import Image from 'next/image';
import image1 from '../../assets/feature/image1.svg';
import image2 from '../../assets/feature/image2.svg';
import image3 from '../../assets/feature/image3.svg';
import image4 from '../../assets/feature/image4.svg';

const features = [
  {
    image: image1,
    title: 'CURATE YOUR OWN LOOK',
    description: 'Handpick from brands like Gucci, Prada, & Dior just for you.',
  },
  {
    image: image2,
    title: 'VERIFIED FOR YOU',
    description: 'We inspect each item to ensure it’s authentic & flawless.',
  },
  {
    image: image3,
    title: 'DISCOVER HIDDEN GEMS',
    description: 'Explore one-of-a-kind pieces—luxury that’s all yours.',
  },
  {
    image: image4,
    title: 'STYLE WITH IMPACT',
    description: 'Stay chic and eco-friendly—every purchase helps the planet.',
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <section className="bg-[#F0F0F0] my-16 py-10 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-[2%]">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col h-full">
            <div className="relative w-full h-64 md:h-86 lg:h-96">
              <Image
                src={feature.image}
                alt={feature.title}
                layout="fill"
                objectFit="cover"
                loading='lazy'
                className=""
              />
            </div>
            <div className="w-full text-[#000000] py-4 px-2">
              <h3 className="font-semibold text-xl"
              style={{
                fontFamily: 'Hanken Grotesk',
              }}
              >{feature.title}</h3>
              <p className="text-md mt-1 italic text-[#1E1E1E]"
              >{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
