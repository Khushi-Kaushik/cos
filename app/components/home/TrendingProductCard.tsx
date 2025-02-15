
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface TrendingProductCardProps {
  image: StaticImageData;
  name: string;
}

const TrendingProductCard: React.FC<TrendingProductCardProps> = ({ image, name }) => {
  return (
    <div className="w-full relative border-none outline-none">
      <div className="relative">
        <Image src={image} loading='lazy' alt={name}  className="h-full w-full object-cover" />
        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[--main] rounded-full text-white px-4 py-3 text-xl font-medium"
        style={{
          fontFamily: 'Hanken Grotesk',
        }}
        >
          EXPLORE NOW
        </button>
      </div>
      <h3 className="text-center mt-4 font-normal text-base text-gray-800">{name}</h3>
    </div>
  );
};

export default TrendingProductCard;
