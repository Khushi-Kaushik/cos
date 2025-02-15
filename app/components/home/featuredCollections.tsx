


// CollectionsGrid.tsx
import React from 'react';
import women from '../../assets/women.png';
import men from '../../assets/men.png';
import kids from '../../assets/children.png';
import accessories from '../../assets/accessory.png';
import Image from 'next/image';

const FeaturedCollection: React.FC = () => {
  return (
    <div className=" px-6 mx-[2%] py-16"
    style={{
      fontFamily: 'Hanken Grotesk',
    }}
    >
      <h1 className="text-[40px] font-medium text-center capitalize mb-8"
      style={{
        fontFamily: 'Hanken Grotesk',
      }}
      >Shop by Category</h1>
      <div className="grid grid-cols-2  gap-4">
        <div className="relative">
          <Image
            src={women}
            alt="Women"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-black bottom-0 flex items-end justify-start uppercase bg-opacity-40  p-4">
            <span className="text-white text-[36px] font-medium">Women</span>
          </div>
        </div>
        <div className='flex flex-col gap-4 h-full'>
          <div className='grid grid-cols-2 h-full gap-4'>
            <div className="relative">
              <Image
                src={kids}
                alt="Kids"
                className="w-full h-full object-cover "
                width={500}
                height={500}
                loading='lazy'
              />
              <div className="absolute inset-0 bg-black bottom-0 flex items-end justify-start uppercase bg-opacity-40 p-4">
                <span className="text-white text-[36px] font-medium">Kids</span>
              </div>
            </div>

            <div className="relative">
              <Image
                src={accessories}
                alt="Accessories"
                className="w-full h-full object-cover"
                width={500}
                height={500}
                loading='lazy'
              />
              <div className="absolute inset-0 bg-black bottom-0 flex items-end justify-start uppercase bg-opacity-40 p-4">
                <span className="text-white text-[36px] font-medium">Accessories</span>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <Image
              src={men}
              alt="Men"
              className="w-full h-full object-cover"
              width={500}
              height={500}
              loading='lazy'
            />
            <div className="absolute inset-0 bg-black bottom-0 flex items-end justify-start uppercase bg-opacity-40 p-4">
              <span className="text-white text-[36px] font-medium">Men</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;
