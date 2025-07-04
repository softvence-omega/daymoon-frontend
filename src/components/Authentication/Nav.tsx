import { FaGlobe, FaChevronDown } from "react-icons/fa";
import buyer from "../../assets/Icon/cart.png";
import seller from "../../assets/Icon/truck.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = () => setIsOpen(false);
    if (isOpen) {
      document.addEventListener("click", closeDropdown);
    }
    return () => document.removeEventListener("click", closeDropdown);
  }, [isOpen]);

  // Determine if we're on the login page
  const isLogin = location.pathname === "/login";

  return (
    <div className="w-full px-4 md:px-6 pt-2 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Sign In / Register section */}
      <div className="flex flex-col items-end md:order-2">
        <div className="flex justify-end">
          <FaGlobe className="text-gray-800 w-[20px] h-[20px]" />
        </div>
        <p className="text-gray-500 text-sm my-4 text-right">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Link to={isLogin ? "/signup-buyer" : "/login"}>
            <span className="text-[#F14141] font-medium cursor-pointer">
              {isLogin ? "Register" : "Sign In"}
            </span>
          </Link>
        </p>
      </div>

      {/* Role Selector */}
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
              <p className="w-full text-left flex items-center gap-2 px-5 py-3 border-b border-foundation-gray cursor-pointer">
                <img src={buyer} alt="" className="w-5 h-5" />
                <span>Buyer</span>
              </p>
              <Link
                to="/signup-seller"
                className="w-full text-left flex items-center gap-2 px-5 py-3 cursor-pointer"
              >
                <img src={seller} alt="" className="w-5 h-5" />
                <span>Seller</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
