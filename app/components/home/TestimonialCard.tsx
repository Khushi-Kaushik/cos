// components/TestimonialCard.tsx
import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

interface TestimonialCardProps {
  text: string;
  author: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({  text, author, rating }) => {
  return (
    <div className="w-full p-12 bg-white  flex items-center justify-between gap-4">
<div className='flex flex-col items-start justify-start bg-[#D9D9D9] w-[371px] h-[258px]'>
      <div className="flex justify-center mb-4 ">
        {[...Array(5)].map((_, index) => (
          index < rating ? (
            <FaStar key={index} className="w-5 h-5 text-red-800" />
          ) : (
            <FaStarHalfAlt key={index} className="w-5 h-5 text-red-800" />
          )
        ))}
      </div>
      <p className="text-start text-[#470100] text-base mb-12">"{text}"</p>
      <p className="text-start text-[#470100] text-sm underline font-medium">{author}</p>
      </div>
      <div className='w-1/2'>
        {/* <Image src={image} loading='lazy' alt={author} className="w-full h-72  object-cover mb-2" /> */}
      </div>
    </div>
  );
};

export default TestimonialCard;
