import Image from 'next/image';
import access from '../../assets/icons/access-granted.svg';
import discount from '../../assets/icons/discount.svg';
import fashion from '../../assets/icons/fashion.svg';
import community from '../../assets/icons/community.svg';
import { useState } from 'react';

const WhyMember = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      icon: access,
      title: 'Exclusive Early Access',
      description: 'Be the first to shop new drops, celebrity collections, and trending fashion pieces.',
    },
    {
      icon: discount,
      title: 'Member Discounts',
      description: 'Unlock special promotions and a 10% discount on your first purchase just for joining.',
    },
    {
      icon: community,
      title: 'Community Updates',
      description: 'Stay informed about our sustainability initiatives, events, and fashion tips.',
    },
    {
      icon: fashion,
      title: 'Fashion with Purpose',
      description: 'Each purchase supports a circular economy, helping to reduce waste & environmental impact',
    },
  ];

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white relative border border-[--main] flex flex-col md:p-8 p-4 md:items-start justify-center md:h-auto rounded-[20px] shadow-md">
      <h3 className="text-3xl uppercase md:text-4xl font-semibold text-start text-[#000000]" style={{
        fontFamily: "Hanken Grotesk"
      }}>
       Why be a Member?
      </h3>

      <ul className="grid gap-6 mt-6 md:mt-8 grid-cols-2">
        {items.slice(activeIndex, activeIndex + 2).map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-start md:gap-2 transition-opacity duration-300 opacity-100"
          >
            <div className="flex items-start">
              <Image src={item.icon} alt={item.title} className="h-10 w-10 md:h-16 md:w-16" width={500} height={500} />
            </div>
            <h4 className="text-base md:text-xl font-bold text-[--main] mt-2">{item.title}</h4>
            <p className="text-start text-[--main] mt-2 text-xs md:text-base">{item.description}</p>
          </li>
        ))}
      </ul>

      {/* Navigation for desktop */}
      <div className="absolute bottom-1/2 right-4 rotate-90 translate-y-1/2 md:flex hidden">
        {Array.from({ length: items.length / 2 }, (_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full mx-1 ${
              activeIndex === index * 2 ? 'bg-[--main]' : 'bg-gray-300'
            }`}
            onClick={() => handleDotClick(index * 2)}
          />
        ))}
      </div>

      {/* Navigation Dots for Mobile */}
      <div className="flex justify-center items-center mt-4 md:hidden">
        {Array.from({ length: items.length / 2 }, (_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full mx-1 ${
              activeIndex === index * 2 ? 'bg-[--main]' : 'bg-gray-300'
            }`}
            onClick={() => handleDotClick(index * 2)}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyMember;
