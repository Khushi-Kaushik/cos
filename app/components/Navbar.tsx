"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../assets/logo.png";
import SearchIcon from "../assets/icons/search.svg";
import HeartIcon from "../assets/icons/like.svg";
import UserIcon from "../assets/icons/user.svg";
import CartIcon from "../assets/icons/cart.svg";
import SignUpModal from "./signupmodal";
import UserOptionsModal from "../components/UserOptionsModal";
import CartModal from "../components/CartModel";
import { useUserContext } from "../provider/UserContextProvider";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { setIsSignUpModalOpen, setIsUserOptionsModalOpen } = useUserContext();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); 

  const navItems = [
    { href: "/shop", label: "Shop" },
    { href: "/luxe", label: "Luxe" },
    { href: "/wedding", label: "Wedding" },
    { href: "/sell", label: "Sell" },
    { href: "/sustainability", label: "Sustainability" },
    { href: "/community", label: "Community" },
  ];

  const toggleCartModal = () => setIsCartModalOpen((prev) => !prev);

  
  return (
    <div className="fixed top-0 left-0 w-full bg-white  z-50 border-b-2 border-gray-200">
      <div className="mx-auto flex justify-between items-center px-6 py-2 max-w-screen-xl">
        {/* Logo */}
        <div className="flex items-center py-2">
          <Link href="/home">
            <Image
              src={Logo}
              alt="Cycle of Samsara Logo"
              className="h-12 w-auto"
              height={50}
              width={80}
            />
          </Link>
        </div>

        <div className="flex space-x-8 items-center font-medium text-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-[#A50705] transition-all duration-300 
              `}
              style={{ fontFamily: "Hanken Grotesk" }}
            >
              {item.label}
              <span
                className={`absolute left-[-20%] top-[3.3rem] h-[2px] w-0 bg-[#000000] transition-all duration-300
    ${pathname === item.href ? "w-[150%]" : "group-hover:w-[150%]"}
  `}
              ></span>

            </Link>
          ))}

          {/* <button
            className="bg-red-800 text-white px-8 py-1 text-lg font-bold hover:bg-red-700 transition-colors duration-300"
            style={{ fontFamily: "Hanken Grotesk" }}
          >
            Luxe
          </button> */}
        </div>
        <SignUpModal />
        <div className="flex space-x-6 text-gray-800">
          {[
            { src: SearchIcon, alt: "Search" },
            { src: HeartIcon, alt: "Favorites" },
            { src: UserIcon, alt: "User Account" },
          ].map((icon, index) => (
            <button
              key={index}
              className="hover:opacity-80 transition-opacity duration-300"
              aria-label={icon.alt}
              onClick={() => {
                if (icon.alt === "User Account") {
                  setIsUserOptionsModalOpen(true);
                }
              }}
            >
              <Image src={icon.src} alt={icon.alt} height={24} width={24} />
            </button>
          ))}
          <button
            onClick={toggleCartModal} // Open/Close Cart Modal on Click
            className="hover:opacity-80 transition-opacity duration-300"
            aria-label="Cart"
          >
            <Image src={CartIcon} alt="Cart" height={24} width={24} />
          </button>
        </div>
      </div>
      
      <UserOptionsModal />
      <CartModal isOpen={isCartModalOpen} onClose={toggleCartModal} />
    </div>
  );
};

export default Navbar;
