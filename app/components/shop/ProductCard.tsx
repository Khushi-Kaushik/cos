// components/ProductCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

interface ProductCardProps {
  image: string;
  name: ReactNode;
  price: ReactNode;
  id: number;
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, id, product }) => {
  return (
    <Link href={`/shop/${id}`}>
      <div className="w-full mb-8">
        <div className="relative">
        <Image src={image} loading='lazy' alt="name" className="h-80 w-full object-cover" width={100} height={100} />
        <button className="absolute top-2 right-2  bg-transparent">
          <IoHeartOutline className="w-6 h-6 " />
        </button>
      </div>
      <div className="mt-2 text-center flex items-center justify-between">
        <h3 className=" text-base font-normal">{name}</h3>
        <p className="text-base font-semibold mt-1">{price}</p>
      </div>
      <button className="w-full mt-4 py-3 bg-[--main] text-white font-medium  hover:bg-[--main] rounded-full"
      style={{
        fontFamily: 'Hanken Grotesk',
      }}
      >
        ADD TO CART
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
