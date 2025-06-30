import { FaGlobe } from "react-icons/fa";
import buyer from "../../assets/Icon/cart.png";
import seller from "../../assets/Icon/truck.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

import { useEffect } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close when clicking anywhere in document
  useEffect(() => {
    const closeDropdown = () => setIsOpen(false);
    if (isOpen) {
      document.addEventListener("click", closeDropdown);
    }
    return () => document.removeEventListener("click", closeDropdown);
  }, [isOpen]);

  return (
    <div className="relative w-full flex items-center justify-between px-6 py-4">
      {/* Left Side - Role Selector */}
      <div className="relative">
        <button
          className="flex items-center justify-between gap-2 border border-foundation-gray px-5 py-3 rounded-full text-sm font-medium shadow-sm w-full"
          onClick={(e) => {
            e.stopPropagation(); // Prevent immediate close
            setIsOpen(!isOpen);
          }}
        >
          <span className="flex items-center gap-2">
            <img src={buyer} alt="" className="w-5 h-5" />
            <span>Buyer</span>
          </span>
          <FaChevronDown className="text-gray-500 text-xs" />
        </button>

        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-1 bg-white border border-foundation-gray rounded-lg shadow-sm z-10"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
          >
            <Link
              to="/signup-buyer"
              className="flex items-center gap-2 px-5 py-3 border-b border-foundation-gray"
            >
              <img src={buyer} alt="" className="w-5 h-5" />
              <span>Buyer</span>
            </Link>
            <Link
              to="/signup-supplier"
              className="flex items-center gap-2 px-5 py-3"
            >
              <img src={seller} alt="" className="w-5 h-5" />
              <span>Supplier</span>
            </Link>
          </div>
        )}
      </div>
      {/* Right Side - Globe Icon + Sign In */}
      <div className="absolute top-4 right-8 text-end">
        <div className="flex justify-end">
          <FaGlobe className="text-gray-800 w-[20px] h-[20px]" />
        </div>
        <p className="text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <span className="text-[#F14141] font-medium cursor-pointer">
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Nav;
