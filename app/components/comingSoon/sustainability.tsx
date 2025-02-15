import Image from 'next/image';
import bg from '../../assets/bg.svg'; // Update with the actual image file path

const Sustainability = () => {
  return (
    <div className=" rounded-[21px] h-auto flex border border-[--main] flex-row items-center gap-6">
      {/* Left: Image Section */}
      <div className="flex-1">
        <Image 
          src={bg} 
          alt="Sustainability Image" 
          className="object-contain rounded-l-[20px] w-full h-auto" 
          height={100} 
          width={500} 
        />
      </div>

      {/* Right: Text Section */}
      <div className="flex-1 md:space-y-4 text-left">
        <h3 className="text-lg md:text-4xl uppercase leading-0 font-semibold text-[#000000]"
        style={{
          fontFamily: "Hanken Grotesk"
        }}
        >
          Need for Sustainability
        </h3>
        <p className="text-[10px] md:text-base text-[--main] leading-relaxed text-start w-[90%]">
          We make <span className="font-extrabold">sustainable fashion</span> accessible and 
           desirable, reducing waste and 
           promoting <span className="font-extrabold"> conscious consumerism</span>.
          <br />
          Our mission: to blend style, affordability, and sustainability.
        </p>
        <button className="bg-[#A50705] text-white px-6 py-3 mt-4 text-sm md:text-base"
        style={{
          fontFamily: "Hanken Grotesk"
        }}
        >
          JOIN THE CYCLE
        </button>
      </div>
    </div>
  );
};

export default Sustainability;
