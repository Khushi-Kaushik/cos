// components/ProductCard.tsx
import Image from 'next/image';
import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
  return (
    <div className="w-full ">
      <div className="relative">
        <Image src={image} loading='lazy' alt={name} className="h-80 w-full object-cover" width={100} height={100} />
        <button className="absolute top-2 right-2  bg-transparent">
          <IoHeartOutline className="w-6 h-6 " />
        </button>
      </div>
      <div className="mt-4 text-center flex items-center justify-between">
        <h3 className="text-sm font-normal">{name}</h3>
        <p className="text-sm font-semibold mt-1">{price}</p>
      </div>
      <button className="w-full mt-4 py-4 bg-[--main] text-sm text-white font-medium rounded-full hover:bg-[--main]"
      style={{
        fontFamily: 'Hanken Grotesk',
      }}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
