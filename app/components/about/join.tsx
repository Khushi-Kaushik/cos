"use client";
import React from "react";
import Image from "next/image";
import img5 from "../../assets/aboutus/img5.svg";
import img6 from "../../assets/aboutus/img5.svg";
import img7 from "../../assets/aboutus/img5.svg";
import img8 from "../../assets/aboutus/img5.svg";



const Join: React.FC = () => {
  return (
    <div className="mb-16">
        <h2 className="text-center text-4xl mb-2">The Cycle of</h2>
        <h3 className="text-center text-4xl mb-24">Sustainability ~ Affordability ~ Style</h3>
        <div className="w-98">
        <div className="grid md:grid-cols-4">
          <div>
            <Image
        src={img5}
        alt="Our Mission Image"
        className="h-566 w-664 w-full object-cover"
        
      />
          </div>
          <div className="flex flex-col gap-2 max-w-[300px] mx-auto items-center justify-center">
  <h3 className="text-[#A50705] text-2xl font-medium text-center">Luxe Authentication</h3>
  <p className="text-black font-poppins text-md leading-relaxed text-center max-w-44">Verified, authentic
luxury pieces for
confidence and trust.</p>
</div>

          <div>
            <Image
        src={img6}
        alt="Our Mission Image"
        className="h-566 w-664 w-full object-cover"
        
      />
          </div>
          
          <div className="flex flex-col gap-2 max-w-[300px] mx-auto items-center justify-center">
  <h3 className="text-[#A50705] text-2xl font-medium text-center">Affordable Luxury</h3>
  <p className="text-black font-poppins text-md leading-relaxed text-center max-w-48">Access premium
fashion at a fraction of
retail prices life.</p>
</div>
<div className="flex flex-col gap-2 max-w-[300px] mx-auto items-center justify-center">
  <h3 className="text-[#A50705] text-2xl font-medium text-center">Eco-Friendly</h3>
  <p className="text-black font-poppins text-md leading-relaxed text-center max-w-48">Reduce fashion waste
and minimize
environmental impact.</p>
</div>
          <div>
            <Image
        src={img7}
        alt="Our Mission Image"
        className="h-566 w-664 w-full object-cover"
        
      />
          </div>
          
<div className="flex flex-col gap-2 max-w-[300px] mx-auto items-center justify-center">
  <h3 className="text-[#A50705] text-2xl font-medium text-center">Secure Platform</h3>
  <p className="text-black font-poppins text-md leading-relaxed text-center max-w-64">Verified sellers, quality checks,
and buyer protection
ensure a seamless experience.</p>
</div>
          <div>
            <Image
        src={img8}
        alt="Our Mission Image"
        className="h-566 w-664 w-full object-cover"
        
      />
          </div>
         
          
         
          
          
          
          </div>
        </div>
      </div>
  );
};
export default Join