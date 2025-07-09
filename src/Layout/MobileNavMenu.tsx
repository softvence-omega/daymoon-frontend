import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Navbar/logo.png";

const MobileSidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Become A Supplier", path: "#" },
    { name: "App & Extensions", path: "#" },
    { name: "Help Centre", path: "#" },
    { name: "Log In & Sign Up", path: "/login" },
  ];

  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="p-2 focus:outline-none"
          >
            <Menu className="h-6 w-6 text-[#1A1A1A]" />
          </motion.button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white  w-64 p-6">
          <SheetHeader>
            <SheetTitle className=" text-xl font-semibold mb-4">
              <Link to="/">
                <img
                  className="w-[100px] h-[40px] object-contain"
                  src={logo}
                  alt="logo"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>

          <div className="space-y-4">
            {menuItems.map((item, idx) => (
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.8 }}
                key={idx}
                className={`block text-base font-medium text-[#1A1A1A] hover:text-[#F04436] ${
                  isActive(item.path) ? "text-[#F04436]" : ""
                }`}
              >
                <Link to={item.path}>
                  <h1 className="text-lg hover:text-[#F04436] px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-[#1A1A1A]">
                    {item.name}
                  </h1>
                  <div className="border-t border-[#E5E5E5] my-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
