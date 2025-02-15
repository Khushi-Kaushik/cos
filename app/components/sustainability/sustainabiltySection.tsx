import React from "react";
import image1 from "../../assets/sustainability/sustainability1.png";
import image2 from "../../assets/sustainability/sustainability2.png";
import image3 from "../../assets/sustainability/sustainability3.png";
import image4 from "../../assets/sustainability/sustainability4.png";

const SustainabilitySection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/*  Row 1, Left: Forest-laundry image  */}
      <div
        className="h-64 md:h-96 bg-center bg-cover"
        style={{ backgroundImage: `url(${image1.src})` }}
        aria-label="Clothes drying in a forest"
      />

      {/*  Row 1, Right: Red background with text  */}
      <div className="flex items-center justify-center h-64 md:h-96 bg-[--main] p-8 text-white">
        <p className="text-xl md:text-[40px] font-normal font-[poppins] text-start leading-snug">
          Reduce textile waste<br />
          by extending clothing <br />
          lifecycles.
        </p>
      </div>

      {/*  Row 2, Left: Light background with text  */}
      <div className="flex items-center justify-center h-64 md:h-96 bg-gray-100 p-8 text-black">
        <p className="text-xl md:text-[40px] font-normal font-[poppins] text-start leading-snug">
          Promote circular <br />
          fashion
          through <br /> <span className="font-medium">trusted resale</span>.
        </p>
      </div>

      {/*  Row 2, Right: Woman shopping image  */}
      <div
        className="h-64 md:h-96 bg-center bg-cover"
        style={{ backgroundImage: `url(${image2.src})` }}
        aria-label="Woman browsing clothes on a rack"
      />

      {/*  Row 3, Left: Bridal outfit image  */}
      <div
        className="h-64 md:h-96 bg-center bg-cover"
        style={{ backgroundImage: `url(${image3.src})` }}
        aria-label="Red bridal outfit"
      />

      {/*  Row 3, Right: Red background with text  */}
      <div className="flex items-center justify-center h-64 md:h-96 bg-[--main] p-8 text-white">
        <p className="text-xl md:text-[40px] font-normal font-[poppins] text-start leading-snug">
          Encourage the reuse<br />
          of luxury and wedding <br />
          wear.
        </p>
      </div>

      {/*  Row 4, Left: Light background with text  */}
      <div className="flex items-center justify-center h-64 md:h-96 bg-gray-100 p-8 text-black">
        <p className="text-xl md:text-[40px] font-normal font-[poppins] text-start leading-snug">
          Build transparency <br /> and trust
          with  <span className="font-medium">verified <br /> sellers</span> and <span className="font-medium">buyers</span>.
        </p>
      </div>

      {/*  Row 4, Right: Transaction image  */}
      <div
        className="h-64 md:h-96 bg-center bg-cover"
        style={{ backgroundImage: `url(${image4.src})` }}
        aria-label="Buyer and seller exchanging a product"
      />
    </section>
  );
};

export default SustainabilitySection;
