import Image from "next/image";
import Link from "next/link";
import heroBg from '../../assets/home/herobg.svg';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full flex h-[80vh] bg-contain bg-center">
      {/* Background Image */}
      <Image
        src={heroBg}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        loading='lazy'
        className="absolute  -z-10"
      />

      {/* Text and Button Container */}
      <div className="absolute left-8 lg:left-16 top-[20%] bg-transparent p-8  max-w-lg">
        <h1 className="text-[40px] font-semibold leading-snug text-white" 
        style={{
          fontFamily: "Hanken Grotesk"
        }}
        >
          UNIQUE <span className="text-[#A50705]">PRE LOVED</span> <br />
          FASHION PIECES
        </h1>
        
        <p className="mt-4 text-xl text-white font-light">
          We are a curated <span className="font-bold">online thrift store</span> that connects you
          with unique, pre-loved fashion pieces from{" "}
          <span className="font-bold">trusted sources</span>.
        </p>

        <div className="flex gap-8">
        <Link href="/sell">
          <button className="mt-6 bg-[#A50705] text-white px-6 py-3 text-base font-semibold hover:bg-[#ff6f61] transition duration-300"
          style={{
            fontFamily: 'Hanken Grotesk',
          }}
          >
            SELL NOW
          </button>
        </Link>
        <Link href="/buy">
          <button className="mt-6 bg-[#A50705] text-white px-6 py-3 text-base font-semibold hover:bg-[#ff6f61] transition duration-300"
          style={{
            fontFamily: 'Hanken Grotesk',
          }}
          >
            BUY NOW
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
