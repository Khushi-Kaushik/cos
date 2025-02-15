import React, { useEffect } from "react";
import { useUserContext } from "../provider/UserContextProvider";
import cross from "../assets/cart/cross.svg";
import Image from "next/image";

const UserOptionsModal: React.FC = () => {
  const { isUserOptionsModalOpen, setIsUserOptionsModalOpen } = useUserContext();

  const handleClose = () => {
    setIsUserOptionsModalOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const modal = document.getElementById("guest-options-modal");
    if (modal && !modal.contains(event.target as Node)) {
      handleClose();
    }
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    if (isUserOptionsModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isUserOptionsModalOpen]);

  const options = [
    { label: "Register as a Member", href: "/buyer" },
    { label: "Register as a Seller", href: "/seller" },
    { label: "About CoS", href: "/about" },
    { label: "Notifications", href: "/noti" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Legal Information", href: "/legal" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Help Center", href: "/help" },
    { label: "Report a Bug", href: "/report-bug" },
  ];

  return (
    <>
      {isUserOptionsModalOpen && (
        <div className="fixed bg-transparent z-50 right-4 top-25">
          <div
            id="guest-options-modal"
            className="bg-white p-4 w-80 "
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-3 right-5 transition-all"
            >
              <Image
              src={cross}
              alt="Close Cross"
              width="8.1"
              height="9.4"
              />
            </button>

            <ul className="divide-y divide-[#D9D9D9] pt-2">
              {options.map((option, index) => (
                <li key={index} className="w-full">
                  <a
                    href={option.href}
                    className="block w-full text-left text-sm py-4 px-5 hover:bg-gray-200 transition"
                  >
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default UserOptionsModal;
