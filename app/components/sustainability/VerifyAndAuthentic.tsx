import React from 'react';
import Image from 'next/image';

// Example images, update paths accordingly
import authentic from '../../assets/sustainability/authenticity.png';
import quality from '../../assets/sustainability/quality.png';

const VerifiedAndAuthentic: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Top-left (red background, heading) */}
      <div className="bg-red-700 p-6 text-white flex items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Every Item, Verified and Authentic
          </h2>
          <p className="mb-0">
            {/* Feel free to trim or expand text as desired */}
            We ensure confidence and trust by authenticating all luxury
            and high-value fashion pieces. Our rigorous quality checks
            guarantee a seamless, second-hand experience for both buyers
            and sellers.
          </p>
        </div>
      </div>

      {/* Top-right (image, “Quality” text) */}
      <div className="relative">
        <Image
          src={quality}
          alt="Person checking a sweater"
          // Make sure the image fits the full block; adjust as needed
          className="w-full h-full object-cover"
        />
        {/* Optional overlay text */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-semibold">Quality</h3>
          <p className="text-sm">
            Every item meets our standards for resale.
          </p>
        </div>
      </div>

      {/* Bottom-left (image, “Authenticity” text) */}
      <div className="relative">
        <Image
          src={authentic}
          alt="Person holding a clothing label"
          className="w-full h-full object-cover"
        />
        {/* Optional overlay text */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-semibold">Authenticity</h3>
          <p className="text-sm">All luxury labels are verified.</p>
        </div>
      </div>

      {/* Bottom-right (red background, paragraph) */}
      <div className="bg-red-700 p-6 text-white flex items-center">
        <p className="mb-0">
          We ensure confidence and trust by authenticating all luxury
          and high-value fashion pieces. Our rigorous quality checks
          guarantee: A trusted, seamless second-hand experience for both
          buyers and sellers.
        </p>
      </div>
    </section>
  );
};

export default VerifiedAndAuthentic;
