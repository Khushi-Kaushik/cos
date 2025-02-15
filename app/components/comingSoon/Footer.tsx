import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// components/Footer.tsx
const Footer = () => {
  return (
    <div className="flex justify-between bg-transparent h-auto  text-[--main] items-center md:p-10 p-4 border border-[--main] rounded-[20px] md:mt-8">
      <div className="flex gap-8 items-center justify-center md:text-3xl text-xl">
        <a href="https://www.linkedin.com/company/cycle-of-samsara/" target="_blank" className=""><FaLinkedinIn /></a>
        <a href="https://www.facebook.com/profile.php?id=61568145154244" target="_blank" className=""><FaFacebookF /></a>
        <a href="https://www.instagram.com/cycleofsamsara/" target="_blank" className=""><FaInstagram /></a>
      </div>
      <div className="border-l border-[--main] h-16"></div>
      <div className=" text-center">
        <h1 className="text-xl font-semibold">Contact Us</h1>
        <span className="md:text-sm text-[8px] md:leading-3 text-center">© 2024 www.cycleofsamsara.com, <br /> All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
