import { FaGlobe, FaChevronDown } from "react-icons/fa";
import buyer from "../../assets/Icon/cart.png";
import seller from "../../assets/Icon/truck.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = () => setIsOpen(false);
    if (isOpen) {
      document.addEventListener("click", closeDropdown);
    }
    return () => document.removeEventListener("click", closeDropdown);
  }, [isOpen]);

  return (
    <div className="w-full px-4 md:px-6 pt-4 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Sign In section - TOP on mobile, right on desktop */}
      <div className="flex flex-col items-end md:order-2">
        <div className="flex justify-end">
          <FaGlobe className="text-gray-800 w-[20px] h-[20px]" />
        </div>
        <p className="text-gray-500 text-sm my-4 text-right">
          Already have an account?{" "}
          <span className="text-[#F14141] font-medium cursor-pointer">
            Sign In
          </span>
        </p>
      </div>

      {/* Role Selector - BOTTOM on mobile, left on desktop */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 md:order-1">
        <div className="relative w-full md:w-auto">
          <button
            className="flex items-center justify-between gap-2 border border-foundation-gray px-4 md:px-5 py-3 rounded-full text-sm font-medium shadow-sm w-full md:w-auto"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            <span className="flex items-center gap-2">
              <img src={buyer} alt="" className="w-5 h-5" />
              <span>Buyer</span>
            </span>
            <FaChevronDown className="text-[#F14141] text-xs" />
          </button>

          {isOpen && (
            <div
              className="absolute top-full left-0 right-0 mt-1 bg-white border border-foundation-gray rounded-lg shadow-sm z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => navigate("/signup-buyer")}
                className="w-full text-left flex items-center gap-2 px-5 py-3 border-b border-foundation-gray"
              >
                <img src={buyer} alt="" className="w-5 h-5" />
                <span>Buyer</span>
              </button>
              <button
                onClick={() => navigate("/signup-supplier")}
                className="w-full text-left flex items-center gap-2 px-5 py-3"
              >
                <img src={seller} alt="" className="w-5 h-5" />
                <span>Supplier</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
