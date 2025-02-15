import Image from 'next/image';
import React from 'react';

// Assuming the image is a string URL
interface ShowImageProps {
  image: string;
}

const ShowImage: React.FC<ShowImageProps> = ({ image }) => {
  return (
    <div className='rounded-[22px]'>
      <Image 
        src={image} 
        alt="Displayed image" 
        height={500} 
        width={500} 
        className='w-full h-full object-cover rounded-[22px]' 
      />
    </div>
  );
}

export default ShowImage;
