import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaInfoCircle, FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
import { MdExtension, MdHelpOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Navbar/logo.png";
import { useState } from "react";

const MobileSidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    {
      name: "Shop",
      path: "/shop",
      icon: <FaShoppingCart className="w-5 h-5" />,
    },
    {
      name: "About",
      path: "/about",
      icon: <FaInfoCircle className="w-5 h-5" />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <FaPhoneAlt className="w-5 h-5" />,
    },
    {
      name: "Become A Supplier",
      path: "#",
      icon: <MdHelpOutline className="w-5 h-5" />,
    },
    {
      name: "App & Extensions",
      path: "#",
      icon: <MdExtension className="w-5 h-5" />,
    },
    {
      name: "Help Centre",
      path: "#",
      icon: <MdHelpOutline className="w-5 h-5" />,
    },
    {
      name: "Log In & Sign Up",
      path: "/login",
      icon: <FaInfoCircle className="w-5 h-5" />,
    },
  ];

  return (
    <div className="block lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="p-2 focus:outline-none cursor-pointer"
          >
            <Menu className="h-6 w-6 text-[#1A1A1A]" />
          </motion.button>
        </SheetTrigger>

        <SheetContent side="left" className="bg-white border-none w-64 p-6">
          <SheetHeader className="relative">
            <SheetTitle className="text-xl font-semibold mb-4">
              <Link to="/" onClick={() => setOpen(false)}>
                <img src={logo} className="w-30 md:w-32" alt="Logo" />
              </Link>
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-3">
            {menuItems.map((item, idx) => (
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.8 }}
                key={idx}
                className={`block font-medium text-[#1A1A1A] hover:text-sunset-orange rounded-md ${
                  isActive(item.path) ? "text-sunset-orange bg-gray-100" : ""
                }`}
              >
                <Link to={item.path} onClick={() => setOpen(false)}>
                  <div className="flex items-center space-x-2 py-2 px-4 cursor-pointer">
                    {item.icon}
                    <span className="text-sm">{item.name}</span>
                  </div>
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
