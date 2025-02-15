import Image from 'next/image';
import logo from '../../assets/logo.svg'

const Logo = () => {
  return (
    <div className="flex justify-center items-center md:h-[200px] h-auto w-auto border border-[--main] rounded-[20px]">
      <Image 
        src={logo} 
        alt="COS Logo" 
        className="md:h-32 h-auto w-auto object-contain" 
        height={180} 
        width={180} 
        priority={true} 
      />
    </div>
  );
};

export default Logo;
