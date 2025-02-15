"use client";

import { useUserContext } from "@/app/provider/UserContextProvider";
import { useRouter } from "next/navigation";
const Hero = () => {
  const { category, setCategory } = useUserContext();
  const router = useRouter();

  // Define category data
  const categoryData = [
    { name: "Women" },
    { name: "Men" },
    { name: "Kids" },
    { name: "Accessories" },
    { name: "Sustainable Picks" },
  ];

  const handleCategory = (category: string) => {
    setCategory(category);
    router.push(`/shop`);
  };

  return (
    <div className="w-full">
      {/* Navigation Menu */}
      <nav className="flex justify-center space-x-12 pt-6 pb-8">
        {categoryData.map((item, index) => (
          <h1
            key={index}
            className={`text-lg text-black cursor-pointer ${
              category === item.name ? "font-bold" : "font-normal"
            }`}
            onClick={() => handleCategory(item.name)}
            style={{
              fontFamily: "Hanken Grotesk",
            }}
          >
            {item.name}
          </h1>
        ))}
      </nav>

      
    </div>
  );
};

export default Hero;
