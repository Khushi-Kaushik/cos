// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.png'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-16 ">
      <div className="w-full mx-auto px-6 flex flex-row items-center justify-around">
        
        {/* Logo and Text */}
        <div className="">
         <Image src={logo} alt="Cycle of Samsara" width={150} height={150} className='h-full w-full' />
          <p className="text-[--main] font-light font-[poppins] text-[15px] mt-4">&copy; 2024 www.cycleofsamsara.com. All rights reserved.</p>
        </div>
        
        <div className="flex flex-col items-start justify-center gap-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-red-800 font-medium text-sm">
          {/* Column 1 */}
          <div className="space-y-4 flex flex-col font-normal font-[poppins] text-base  items-start justify-end">
            <Link href="/shop">Shop</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/sustainability">Sustainability</Link>
            <Link href="/community">Community</Link>
          </div>
          {/* Column 2 */}
          <div className="space-y-4 flex flex-col font-normal font-[poppins] text-base  items-start justify-end">
            <Link href="/women">Women</Link>
            <Link href="/men">Men</Link>
            <Link href="/kids">Kids</Link>
            <Link href="/accessories">Accessories</Link>
          </div>
          {/* Column 3 */}
          <div className="space-y-4 flex flex-col font-normal font-[poppins] text-base  items-start justify-end">
            <Link href="/luxe">Luxe</Link>
            <Link href="/sustainable-picks">Sustainable Picks</Link>
            <Link href="/help">Help</Link>
            <Link href="/my-account">My Account</Link>
          </div>
          {/* Column 4 */}
          <div className="space-y-4 flex flex-col font-normal font-[poppins] text-base  items-start justify-end">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <Link href="/refund-policy">Refund Policy</Link>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>
        
        {/* Social Icons */}
        <div className='flex flex-col items-center justify-center'>
            {/* <h1 className='text-[--main] text-lg font-medium'>Contact Us</h1> */}
        <div className="flex gap-8 items-center pt-4 justify-center md:text-3xl text-xl text-[--main]">
        <a href="https://www.linkedin.com/company/cycle-of-samsara/" target="_blank" className=""><FaLinkedinIn /></a>
        <a href="https://www.facebook.com/profile.php?id=61568145154244" target="_blank" className=""><FaFacebookF /></a>
        <a href="https://www.instagram.com/cycleofsamsara/" target="_blank" className=""><FaInstagram /></a>
      </div>
      </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
