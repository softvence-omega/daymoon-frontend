import { useEffect, useState } from "react";
import { FaChevronDown, FaGlobe } from "react-icons/fa";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import buyer from "../../assets/Icon/cart.png";
import seller from "../../assets/Icon/truck.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const roles = [
  { label: "Buyer", value: "buyer", icon: buyer },
  { label: "Seller", value: "seller", icon: seller },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("buyer");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log("selectedRole", selectedRole);

  useEffect(() => {
    const closeDropdown = () => setIsOpen(false);
    if (isOpen) {
      document.addEventListener("click", closeDropdown);
    }
    return () => document.removeEventListener("click", closeDropdown);
  }, [isOpen]);

  const isLogin = pathname === "/login";

  return (
    <>
      <div className=" flex items-center justify-between">
        <Select
          value={selectedRole}
          onValueChange={(val) => {
            setSelectedRole(val);
            if (!isLogin) {
              navigate(val === "buyer" ? "/buyer-signup" : "/seller-signup");
            }
          }}
        >
          <SelectTrigger className="min-w-[180px] bg-[#FCFCFC] border border-[#B3B3B3] px-3 py-5 cursor-pointer rounded-2xl outline-none text-sm focus:ring-0 focus:border-none hover:border-gray-400 transition-all duration-200">
            <SelectValue />
            <FaChevronDown className=" text-[#F14141] text-xs w-4 h-4 ml-auto" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-[#B3B3B3] rounded-md shadow-md">
            {roles.map((role) => (
              <SelectItem
                key={role.label}
                value={role.value}
                className="flex items-center gap-2  cursor-pointer px-4 py-2 hover:bg-gray-100 transition-colors rounded"
              >
                <div className="flex gap-1">
                  <img src={role.icon} alt={role.label} className="w-5 h-5" />
                  <span>{role.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FaGlobe className="text-gray-800 w-5 h-5" />
      </div>

      <div className="text-gray-500 text-sm my-4 text-right">
        {isLogin ? "Don't have an account? " : "Already have an account? "}

        <span className="text-[#F14141] font-medium cursor-pointer">
          {isLogin ? (
            <Link
              to={selectedRole === "buyer" ? "/buyer-signup" : "/seller-signup"}
            >
              Register
            </Link>
          ) : (
            <Link to={"/login"}> Sign In</Link>
          )}
        </span>
      </div>
    </>
  );
};

export default Nav;
